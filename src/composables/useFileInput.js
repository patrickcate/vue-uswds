import { ref, computed, readonly } from 'vue'
import { nextId } from '@/utils/unique-id.js'
import { escapeRegExp } from '@/utils/common.js'

export function useFileInput(
  _id,
  _loadedFiles,
  _acceptedFileFormats,
  _multiple,
  _disabled,
  emit
) {
  const id = ref(_id)
  const allowMultiple = ref(_multiple)
  const isDisabled = ref(_disabled)
  const loadedFiles = ref(_loadedFiles)
  const acceptedFileFormats = ref(_acceptedFileFormats)

  const spacerGif =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

  const computedId = computed(() => id.value || nextId('usa-file-input'))
  const computedErrorMessageId = computed(
    () => `${computedId.value}-error-message`
  )
  const computedHintId = computed(() => `${computedId.value}-hint`)

  const validFileFormats = computed(() => {
    const formats = acceptedFileFormats.value
      .split(',')
      .map(fileType => fileType.trim().toLowerCase())

    const validFileFormats = {
      types: [],
      extensions: [],
    }

    formats.forEach(format => {
      if (format.includes('/') && !validFileFormats.types.includes(format)) {
        if (format.endsWith('/*')) {
          validFileFormats.types.push(format.substring(0, format.length - 1))
        } else {
          validFileFormats.types.push(format)
        }
      } else if (
        format.includes('.') &&
        !validFileFormats.extensions.includes(format)
      ) {
        validFileFormats.extensions.push(format)
      }
    })

    return validFileFormats
  })

  const getFileExtension = filename => {
    const extensionPattern = /(?:.+)\.(.+)$/
    const match = filename.match(extensionPattern)

    return `.${match?.[1]?.toLowerCase()}`
  }

  const getFileIconClass = extension => {
    switch (extension) {
      case '.pdf':
        return 'usa-file-input__preview-image--pdf'

      case '.doc':
      case '.docx':
      case '.pages':
        return 'usa-file-input__preview-image--word'

      case '.xls':
      case '.xlsx':
      case '.numbers':
        return 'usa-file-input__preview-image--excel'

      case '.mov':
      case '.mp4':
        return 'usa-file-input__preview-image--video'

      default:
        return 'usa-file-input__preview-image--generic'
    }
  }

  const isImage = fileType => {
    const pattern = new RegExp(/^image\//gi)
    return pattern.test(fileType)
  }

  const hasFiles = computed(() => loadedFiles.value?.length > 0)

  const hasInvalidFiles = computed(() => {
    if (!acceptedFileFormats.value || !hasFiles.value) {
      return false
    }

    const validTypes = validFileFormats.value.types
    const validExtensions = validFileFormats.value.extensions

    const someValidFiles = loadedFiles.value.every(file => {
      const someValidTypes = validTypes.some(type => {
        const typePattern = new RegExp(escapeRegExp(type), 'gi')

        return typePattern.test(file.type)
      })

      const someValidExtensions = validExtensions.some(extension => {
        const extensionPattern = new RegExp(escapeRegExp(extension), 'gi')

        return extensionPattern.test(file.extension)
      })

      return someValidTypes || someValidExtensions
    })

    return !someValidFiles
  })

  const loadedFileNames = computed(() =>
    loadedFiles.value.map(file => file.name).join(', ')
  )

  const generatePreviews = (event, index) => {
    const file = loadedFiles.value[index]

    if (isImage(file?.type) && event?.target?.result) {
      file.iconClasses = null
      file.src = event.target.result
    } else {
      file.iconClasses = [getFileIconClass(file.extension)]
    }
  }

  async function loadFiles(fileList) {
    if (!fileList?.length || isDisabled.value) {
      loadedFiles.value = []

      return
    }

    let files = []

    // If multiple files aren't allow, only process the first.
    if (allowMultiple.value) {
      for (let i = 0; i < fileList.length; i++) {
        files.push(fileList.item(i))
      }
    } else {
      files.push(fileList.item(0))
    }

    emit('filesLoaded', files)

    loadedFiles.value = files.reduce((acc, file, index) => {
      const fileExtension = getFileExtension(file.name)

      const metadata = {
        name: file.name,
        type: file.type,
        extension: fileExtension,
        src: spacerGif,
        iconClasses: [getFileIconClass(fileExtension), 'is-loading'],
      }

      const reader = new FileReader()

      reader.addEventListener(
        'loadend',
        event => generatePreviews(event, index),
        false
      )

      reader.readAsDataURL(file)

      acc.push(metadata)

      return acc
    }, [])
  }

  return {
    computedErrorMessageId,
    computedHintId,
    computedId,
    hasFiles,
    hasInvalidFiles,
    isDisabled,
    loadFiles,
    loadedFileNames,
    loadedFiles: readonly(loadedFiles),
  }
}
