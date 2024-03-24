import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaFileInput from './UsaFileInput.vue'
import {
  spacer as genericIconBase64Data,
  gif as gifBase64Data,
  jpg as jpgBase64Data,
  jpeg as jpegBase64Data,
  png as pngBase64Data,
  svg as svgBase64Data,
  webp as webpBase64Data,
} from '../../../cypress/fixtures/base64images.json'

describe('UsaFileInput', () => {
  it('renders the component', () => {
    cy.mount(UsaFileInput, {
      attrs: {
        'data-test': 'test',
      },
    })

    cy.get('div.usa-form-group').should('not.exist')
    cy.get('label.usa-label').should('not.exist')
    cy.get('span.usa-hint').should('not.exist')
    cy.get('span.usa-error-message').should('not.exist')

    cy.get('div.usa-file-input')
      .should('not.have.class', 'usa-file-input--disabled')
      .and('not.have.class', 'has-invalid-file')
      .and('not.have.attr', 'aria-disabled')

    cy.get('div.usa-file-input').should('not.have.attr', 'data-test')

    cy.get('div.usa-file-input > div:first-of-type')
      .as('status')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and('contain', 'No file selected')

    cy.get('div.usa-file-input__target').should('exist')

    cy.get('div.usa-file-input__target > div:first-of-type')
      .should('have.class', 'usa-file-input__box')
      .and('be.empty')

    cy.get('div.usa-file-input__instructions')
      .as('instructions')
      .should('not.have.css', 'display', 'none')
      .and('have.attr', 'aria-hidden', 'true')
      .and('not.have.attr', 'hidden')

    cy.get(
      '.usa-file-input__instructions span.usa-file-input__drag-text',
    ).should('contain', 'Drag file here or')

    cy.get('.usa-file-input__instructions span.usa-file-input__choose').should(
      'contain',
      'choose from folder',
    )

    cy.get('div.usa-file-input__preview-heading').should('not.exist')
    cy.get('div.usa-file-input__preview').should('not.exist')

    cy.get('div.usa-file-input__accepted-files-message').should('not.exist')
    cy.get('input.usa-file-input__input')
      .as('input')
      .should('have.attr', 'type', 'file')
      .and('have.attr', 'aria-label', 'Drag file here or choose from folder')
      .and('have.attr', 'data-test', 'test')
      .and('have.attr', 'id')
    cy.get('@input').should('not.have.attr', 'aria-live')

    cy.get('@input').should('not.have.attr', 'aria-describedby')
    cy.get('@input').should('not.have.attr', 'accept')
    cy.get('@input').should('not.have.attr', 'multiple')

    // Add file to input.
    cy.get('@input').selectFile('cypress/fixtures/example.png')

    cy.get('.usa-file-input__preview img').should('have.class', 'is-loading')

    cy.get('@input')
      .should('have.attr', 'aria-label', 'Change file')
      .and('have.value', 'C:\\fakepath\\example.png')

    cy.get('@status').should(
      'contain',
      'You have selected the file: example.png',
    )

    cy.get('@instructions')
      .should('have.css', 'display', 'none')
      .and('have.attr', 'aria-hidden', 'true')
      .and('have.attr', 'hidden', 'hidden')

    cy.get('div.usa-file-input__preview-heading').should(
      'contain',
      'Selected file',
    )
    cy.get('span.usa-file-input__choose').should('contain', 'Change file')

    cy.get('div.usa-file-input__preview').should('contain', 'example.png')

    cy.get('.usa-file-input__preview').children().should('have.length', 1)

    // Add new file.
    cy.get('.usa-file-input__preview img')
      .should('have.attr', 'alt', '')
      .and('not.have.class', 'is-loading')
      .and('have.attr', 'src', pngBase64Data)

    cy.get('@input').selectFile('cypress/fixtures/example.txt', {
      action: 'drag-drop',
    })

    cy.get('.usa-file-input__preview img').should('have.class', 'is-loading')

    cy.get('@input')
      .should('have.attr', 'aria-label', 'Change file')
      .and('have.value', 'C:\\fakepath\\example.txt')

    cy.get('.usa-file-input__preview img').should(
      'not.have.class',
      'is-loading',
    )

    cy.get('@status').should(
      'contain',
      'You have selected the file: example.txt',
    )

    cy.get('div.usa-file-input__preview').should('contain', 'example.txt')
    cy.get('.usa-file-input__preview').children().should('have.length', 1)

    cy.get('.usa-file-input__preview img')
      .should('have.attr', 'alt', '')
      .and('have.attr', 'src', genericIconBase64Data)
      .and('have.class', 'usa-file-input__preview-image--generic')

    cy.get('.usa-file-input__target').should(
      'not.have.class',
      'usa-file-input--drag',
    )

    cy.get('@input').trigger('dragover')

    cy.get('.usa-file-input__target').should(
      'have.class',
      'usa-file-input--drag',
    )

    cy.get('@input').trigger('dragleave')

    cy.get('.usa-file-input__target').should(
      'not.have.class',
      'usa-file-input--drag',
    )
  })

  it('stops invalid files from being added', () => {
    cy.mount(UsaFileInput, {
      props: {
        accept: 'image/* , .pdf',
      },
    })

    cy.get('div.usa-file-input > div:first-of-type')
      .as('status')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and('contain', 'No file selected')

    cy.get('div.usa-file-input__instructions')
      .as('instructions')
      .should('not.have.css', 'display', 'none')
      .and('have.attr', 'aria-hidden', 'true')
      .and('not.have.attr', 'hidden')

    cy.get(
      '.usa-file-input__instructions span.usa-file-input__drag-text',
    ).should('contain', 'Drag file here or')

    cy.get('.usa-file-input__instructions span.usa-file-input__choose').should(
      'contain',
      'choose from folder',
    )

    cy.get('div.usa-file-input__preview-heading').should('not.exist')
    cy.get('div.usa-file-input__preview').should('not.exist')

    cy.get('.usa-file-input__input')
      .as('input')
      .should('have.attr', 'accept', 'image/* , .pdf')
      .and('not.have.attr', 'aria-live')

    // Add a invalid file.
    cy.get('@input').selectFile('cypress/fixtures/example.txt')
    cy.get('@input').should('have.value', '')

    cy.get('.usa-file-input')
      .as('dropzone')
      .should('have.class', 'has-invalid-file')

    cy.get('.usa-file-input__accepted-files-message').should(
      'contain',
      'This is not a valid file type.',
    )

    cy.get('@status').should('contain', 'No file selected')

    cy.get('@instructions')
      .should('not.have.css', 'display', 'none')
      .and('have.attr', 'aria-hidden', 'true')
      .and('not.have.attr', 'hidden')

    cy.get(
      '.usa-file-input__instructions span.usa-file-input__drag-text',
    ).should('contain', 'Drag file here or')

    cy.get('.usa-file-input__instructions span.usa-file-input__choose').should(
      'contain',
      'choose from folder',
    )

    cy.get('div.usa-file-input__preview-heading').should('not.exist')
    cy.get('div.usa-file-input__preview').should('not.exist')

    // Add another invalid file.
    cy.get('@input').selectFile('cypress/fixtures/example.txt', {
      action: 'drag-drop',
    })

    cy.get('@dropzone').should('have.class', 'has-invalid-file')

    cy.get('.usa-file-input__accepted-files-message').should(
      'contain',
      'This is not a valid file type.',
    )

    cy.get('@status').should('contain', 'No file selected')

    cy.get('@instructions')
      .should('not.have.css', 'display', 'none')
      .and('have.attr', 'aria-hidden', 'true')
      .and('not.have.attr', 'hidden')

    cy.get(
      '.usa-file-input__instructions span.usa-file-input__drag-text',
    ).should('contain', 'Drag file here or')

    cy.get('.usa-file-input__instructions span.usa-file-input__choose').should(
      'contain',
      'choose from folder',
    )

    cy.get('div.usa-file-input__preview-heading').should('not.exist')
    cy.get('div.usa-file-input__preview').should('not.exist')

    // Add valid file.
    cy.get('@input').selectFile('cypress/fixtures/example.png')

    cy.get('@dropzone').should('not.have.class', 'has-invalid-file')

    cy.get('.usa-file-input__preview img').should('have.class', 'is-loading')

    cy.get('.usa-file-input__preview-heading').should(
      'contain',
      'Selected file',
    )
    cy.get('.usa-file-input__choose').should('contain', 'Change file')
    cy.get('.usa-file-input__preview').should('contain', 'example.png')
    cy.get('.usa-file-input__accepted-files-message').should('not.exist')

    cy.get('@status').should(
      'contain',
      'You have selected the file: example.png',
    )

    cy.get('@instructions')
      .should('have.css', 'display', 'none')
      .and('have.attr', 'aria-hidden', 'true')
      .and('have.attr', 'hidden', 'hidden')

    cy.get('.usa-file-input__instructions')
      .should('have.css', 'display', 'none')
      .and('have.attr', 'aria-hidden', 'true')

    cy.get('@input')
      .should('have.attr', 'aria-label', 'Change file')
      .and('have.value', 'C:\\fakepath\\example.png')

    cy.get('.usa-file-input__preview img')
      .should('have.attr', 'alt', '')
      .and('not.have.class', 'is-loading')
      .and('have.attr', 'src', pngBase64Data)
  })

  it('adds icons for specific file types', () => {
    cy.mount(UsaFileInput, {
      props: {
        accept:
          'image/*,.pdf,.doc, .docx,.pages,.xls,.xlsx,.numbers,.mov,.mp4 ',
        multiple: true,
      },
    })

    cy.get('div.usa-file-input > div:first-of-type')
      .as('status')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and('contain', 'No files selected')

    cy.get('.usa-file-input').should('not.have.class', 'has-invalid-file')

    cy.get('.usa-file-input__accepted-files-message').should('not.exist')

    cy.get('.usa-file-input__instructions .usa-file-input__drag-text').should(
      'contain',
      'Drag files here or',
    )

    cy.get('.usa-file-input__instructions .usa-file-input__choose').should(
      'contain',
      'choose from folder',
    )

    cy.get('div.usa-file-input__preview-heading').should('not.exist')
    cy.get('div.usa-file-input__preview').should('not.exist')

    cy.get('.usa-file-input__input')
      .as('input')
      .should(
        'have.attr',
        'accept',
        'image/*,.pdf,.doc, .docx,.pages,.xls,.xlsx,.numbers,.mov,.mp4 ',
      )
      .and('have.attr', 'aria-label', 'Drag files here or choose from folder')
      .and('have.attr', 'multiple', 'multiple')

    cy.get('@input').selectFile([
      'cypress/fixtures/example.pdf',
      'cypress/fixtures/example.doc',
      'cypress/fixtures/example.docx',
      'cypress/fixtures/example.pages',
      'cypress/fixtures/example.xls',
      'cypress/fixtures/example.xlsx',
      'cypress/fixtures/example.numbers',
      'cypress/fixtures/example.mov',
      'cypress/fixtures/example.mp4',
      'cypress/fixtures/example.txt',
    ])

    cy.get('.usa-file-input').should('have.class', 'has-invalid-file')

    cy.get('.usa-file-input__accepted-files-message').should(
      'contain',
      'This is not a valid file type.',
    )

    cy.get('.usa-file-input__instructions .usa-file-input__drag-text').should(
      'contain',
      'Drag files here or',
    )

    cy.get('.usa-file-input__instructions .usa-file-input__choose').should(
      'contain',
      'choose from folder',
    )

    cy.get('.usa-file-input__preview-heading').should('not.exist')
    cy.get('.usa-file-input__preview').should('not.exist')

    cy.get('@input').selectFile([
      'cypress/fixtures/example.pdf',
      'cypress/fixtures/example.doc',
      'cypress/fixtures/example.docx',
      'cypress/fixtures/example.pages',
      'cypress/fixtures/example.xls',
      'cypress/fixtures/example.xlsx',
      'cypress/fixtures/example.numbers',
      'cypress/fixtures/example.mov',
      'cypress/fixtures/example.mp4',
    ])

    cy.get('.usa-file-input__preview img').should('have.class', 'is-loading')

    cy.get('@status').should(
      'contain',
      'You have selected 9 files: example.pdf, example.doc, example.docx, example.pages, example.xls, example.xlsx, example.numbers, example.mov, example.mp4',
    )
    cy.get('@input')
      .should('have.attr', 'aria-label', 'Change files')
      .and('have.value', 'C:\\fakepath\\example.pdf')

    cy.get('.usa-file-input__instructions')
      .should('have.css', 'display', 'none')
      .and('have.attr', 'aria-hidden', 'true')
      .and('have.attr', 'hidden', 'hidden')

    cy.get('.usa-file-input__preview-heading').should(
      'contain',
      '9 files selected',
    )
    cy.get('.usa-file-input__choose').should('contain', 'Change file')

    cy.get('.usa-file-input__preview').should('contain', 'example.pdf')

    cy.get('.usa-file-input__preview')
      .should('have.attr', 'aria-hidden', 'true')
      .children()
      .should('have.length', 9)

    cy.get('.usa-file-input__preview img').should(
      'not.have.class',
      'is-loading',
    )

    cy.get('.usa-file-input__preview:nth-of-type(4)').should(
      'contain',
      'example.pdf',
    )
    cy.get('.usa-file-input__preview:nth-of-type(4) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', genericIconBase64Data)
      .and('have.attr', 'alt', '')
      .and('have.class', 'usa-file-input__preview-image--pdf')

    cy.get('.usa-file-input__preview:nth-of-type(5)').should(
      'contain',
      'example.doc',
    )
    cy.get('.usa-file-input__preview:nth-of-type(5) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', genericIconBase64Data)
      .and('have.attr', 'alt', '')
      .and('have.class', 'usa-file-input__preview-image--word')

    cy.get('.usa-file-input__preview:nth-of-type(6)').should(
      'contain',
      'example.docx',
    )
    cy.get('.usa-file-input__preview:nth-of-type(6) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', genericIconBase64Data)
      .and('have.attr', 'alt', '')
      .and('have.class', 'usa-file-input__preview-image--word')

    cy.get('.usa-file-input__preview:nth-of-type(7)').should(
      'contain',
      'example.pages',
    )
    cy.get('.usa-file-input__preview:nth-of-type(7) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', genericIconBase64Data)
      .and('have.attr', 'alt', '')
      .and('have.class', 'usa-file-input__preview-image--word')

    cy.get('.usa-file-input__preview:nth-of-type(8)').should(
      'contain',
      'example.xls',
    )
    cy.get('.usa-file-input__preview:nth-of-type(8) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', genericIconBase64Data)
      .and('have.attr', 'alt', '')
      .and('have.class', 'usa-file-input__preview-image--excel')

    cy.get('.usa-file-input__preview:nth-of-type(9)').should(
      'contain',
      'example.xlsx',
    )
    cy.get('.usa-file-input__preview:nth-of-type(9) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', genericIconBase64Data)
      .and('have.attr', 'alt', '')
      .and('have.class', 'usa-file-input__preview-image--excel')

    cy.get('.usa-file-input__preview:nth-of-type(10)').should(
      'contain',
      'example.numbers',
    )
    cy.get('.usa-file-input__preview:nth-of-type(10) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', genericIconBase64Data)
      .and('have.attr', 'alt', '')
      .and('have.class', 'usa-file-input__preview-image--excel')

    cy.get('.usa-file-input__preview:nth-of-type(11)').should(
      'contain',
      'example.mov',
    )
    cy.get('.usa-file-input__preview:nth-of-type(11) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', genericIconBase64Data)
      .and('have.attr', 'alt', '')
      .and('have.class', 'usa-file-input__preview-image--video')

    cy.get('.usa-file-input__preview:nth-of-type(12)').should(
      'contain',
      'example.mp4',
    )
    cy.get('.usa-file-input__preview:nth-of-type(12) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', genericIconBase64Data)
      .and('have.attr', 'alt', '')
      .and('have.class', 'usa-file-input__preview-image--video')
  })

  it('generates previews for many image types', () => {
    cy.mount(UsaFileInput, {
      props: {
        accept: 'image/*',
        multiple: true,
      },
    })

    cy.get('div.usa-file-input > div:first-of-type')
      .as('status')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and('contain', 'No files selected')

    cy.get('.usa-file-input__input')
      .as('input')
      .should('have.attr', 'accept', 'image/*')
      .and('have.attr', 'multiple', 'multiple')

    cy.get('@input').selectFile([
      'cypress/fixtures/example.gif',
      'cypress/fixtures/example.jpeg',
      'cypress/fixtures/example.jpg',
      'cypress/fixtures/example.png',
      'cypress/fixtures/example.svg',
      'cypress/fixtures/example.webp',
    ])

    cy.get('div.usa-file-input > div:first-of-type')
      .as('status')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and(
        'contain',
        'You have selected 6 files: example.gif, example.jpeg, example.jpg, example.png, example.svg, example.webp',
      )

    cy.get('@input')
      .should('have.attr', 'aria-label', 'Change files')
      .and('have.value', 'C:\\fakepath\\example.gif')

    cy.get('.usa-file-input__instructions')
      .should('have.css', 'display', 'none')
      .and('have.attr', 'aria-hidden', 'true')

    cy.get('.usa-file-input__preview-heading').should(
      'contain',
      '6 files selected',
    )
    cy.get('.usa-file-input__choose').should('contain', 'Change file')

    cy.get('.usa-file-input__preview').should('contain', 'example.gif')

    cy.get('.usa-file-input__preview')
      .should('have.attr', 'aria-hidden', 'true')
      .children()
      .should('have.length', 6)

    cy.get('.usa-file-input__preview:nth-of-type(4)').should(
      'contain',
      'example.gif',
    )
    cy.get('.usa-file-input__preview:nth-of-type(4) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', gifBase64Data)
      .and('have.attr', 'alt', '')

    cy.get('.usa-file-input__preview:nth-of-type(5)').should(
      'contain',
      'example.jpeg',
    )
    cy.get('.usa-file-input__preview:nth-of-type(5) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', jpegBase64Data)
      .and('have.attr', 'alt', '')

    cy.get('.usa-file-input__preview:nth-of-type(6)').should(
      'contain',
      'example.jpg',
    )
    cy.get('.usa-file-input__preview:nth-of-type(6) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', jpgBase64Data)
      .and('have.attr', 'alt', '')

    cy.get('.usa-file-input__preview:nth-of-type(7)').should(
      'contain',
      'example.png',
    )
    cy.get('.usa-file-input__preview:nth-of-type(7) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', pngBase64Data)
      .and('have.attr', 'alt', '')

    cy.get('.usa-file-input__preview:nth-of-type(8)').should(
      'contain',
      'example.svg',
    )
    cy.get('.usa-file-input__preview:nth-of-type(8) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', svgBase64Data)
      .and('have.attr', 'alt', '')

    cy.get('.usa-file-input__preview:nth-of-type(9)').should(
      'contain',
      'example.webp',
    )
    cy.get('.usa-file-input__preview:nth-of-type(9) img')
      .should('not.have.class', 'is-loading')
      .and('have.attr', 'src', webpBase64Data)
      .and('have.attr', 'alt', '')
  })

  it('component is disabled when `disabled` prop is `true`', () => {
    cy.mount(UsaFileInput, {
      props: {
        label: 'Disabled',
        disabled: true,
        id: 'test-id',
      },
    })

    cy.get('label.usa-label')
      .should('have.attr', 'for', 'test-id')
      .should('contain', 'Disabled')

    cy.get('.usa-file-input')
      .should('have.attr', 'aria-disabled', 'true')
      .and('have.class', 'usa-file-input--disabled')

    cy.get('.usa-file-input').should('not.have.class', 'has-invalid-file')

    cy.get('.usa-file-input__accepted-files-message').should('not.exist')

    cy.get('.usa-file-input__instructions .usa-file-input__drag-text').should(
      'contain',
      'Drag file here or',
    )

    cy.get('.usa-file-input__instructions .usa-file-input__choose').should(
      'contain',
      'choose from folder',
    )

    cy.get('div.usa-file-input__preview-heading').should('not.exist')
    cy.get('div.usa-file-input__preview').should('not.exist')

    cy.get('.usa-file-input__input')
      .as('input')
      .should('have.attr', 'disabled', 'disabled')
      .and('have.prop', 'disabled', true)
      .and('have.id', 'test-id')
      .and('have.value', '')

    cy.get('@input').trigger('change', { force: true })

    cy.get('.usa-file-input')
      .should('have.attr', 'aria-disabled', 'true')
      .and('have.class', 'usa-file-input--disabled')

    cy.get('.usa-file-input').should('not.have.class', 'has-invalid-file')

    cy.get('.usa-file-input__accepted-files-message').should('not.exist')

    cy.get('.usa-file-input__instructions .usa-file-input__drag-text').should(
      'contain',
      'Drag file here or',
    )

    cy.get('.usa-file-input__instructions .usa-file-input__choose').should(
      'contain',
      'choose from folder',
    )

    cy.get('div.usa-file-input__preview-heading').should('not.exist')
    cy.get('div.usa-file-input__preview').should('not.exist')
  })

  it('form group and slot content displays', () => {
    cy.mount(UsaFileInput, {
      props: {
        label: 'Should not display',
        required: true,
        id: 'test-id',
        error: true,
        accept: 'image/png',
      },
      attrs: {
        'data-test': 'test',
      },
      slots: {
        label: () => 'Test label slot',
        hint: () => 'Test hint slot',
        'error-message': () => 'Test error slot',
        instructions: ({ multiple }) =>
          `You can choose multiple files: ${multiple}`,
        'preview-heading': ({ loadedFiles }) =>
          `Number of loaded files: ${loadedFiles.length}`,
        'invalid-files-message': () => 'Test invalid file message slot',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-form-group')
      .should('have.class', 'usa-form-group--error')
      .and('not.have.attr', 'data-test')

    cy.get('label.usa-label')
      .should('have.class', 'usa-label--error')
      .and('have.attr', 'for', 'test-id')
      .and('contain', 'Test label slot')

    cy.get('.usa-label abbr')
      .should('have.class', 'usa-hint')
      .and('have.class', 'usa-hint--required')
      .and('have.attr', 'title', 'required')
      .and('contain', '*')

    cy.get('.usa-label + span.usa-hint')
      .should('have.id', 'test-id-hint')
      .and('contain', 'Test hint slot')

    cy.get('span.usa-error-message')
      .should('have.id', 'test-id-error-message')
      .and('contain', 'Test error slot')

    cy.get('.usa-file-input__instructions').should(
      'contain',
      'You can choose multiple files: false',
    )

    cy.get('div.usa-file-input__preview-heading').should('not.exist')
    cy.get('div.usa-file-input__preview').should('not.exist')

    cy.get('.usa-file-input__input')
      .as('input')
      .should('have.attr', 'required', 'required')
      .and('have.prop', 'required', true)
      .and(
        'have.attr',
        'aria-describedby',
        'test-id-hint test-id-error-message',
      )
      .and('have.id', 'test-id')
      .and('have.value', '')

    cy.get('@input').selectFile('cypress/fixtures/example.txt')

    cy.get('.usa-file-input__instructions').should(
      'contain',
      'You can choose multiple files: false',
    )

    cy.get('.usa-file-input__accepted-files-message').should(
      'contain',
      'Test invalid file message slot',
    )

    cy.get('@input').selectFile('cypress/fixtures/example.png')

    cy.get('div.usa-file-input__preview-heading').should(
      'contain',
      'Number of loaded files: 1',
    )
    cy.get('div.usa-file-input__preview').should('exist')

    cy.get('@wrapper').invoke('setProps', { error: false })

    cy.get('span.usa-error-message').should('not.exist')

    cy.get('.usa-file-input__input').should(
      'have.attr',
      'aria-describedby',
      'test-id-hint',
    )
  })

  it('error message slot must be used to display error message', () => {
    cy.mount(UsaFileInput, {
      props: {
        id: 'test-id',
        error: true,
      },
    })

    cy.get('div.usa-form-group').should('not.exist')
    cy.get('span.usa-error-message').should('not.exist')
    cy.get('.usa-file-input__input').should('not.have.attr', 'aria-describedby')
  })

  it('uses custom CSS classes', () => {
    cy.mount(UsaFileInput, {
      props: {
        label: 'Custom classes',
        error: true,
        customClasses: {
          formGroup: ['test-form-group'],
          component: ['test-component'],
          label: ['test-label'],
          input: ['test-input'],
        },
      },
      slots: {
        hint: () => 'Test hint slot',
        'error-message': () => 'Test error slot',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-form-group').should('have.class', 'test-form-group')
    cy.get('.usa-label').should('have.class', 'test-label')
    cy.get('.usa-file-input').should('have.class', 'test-component')
    cy.get('.usa-file-input__input').should('have.class', 'test-input')

    cy.get('@wrapper').invoke('setProps', { customClasses: {} })

    cy.get('.usa-form-group').should('not.have.class', 'test-form-group')
    cy.get('.usa-label').should('not.have.class', 'test-label')
    cy.get('.usa-file-input').should('not.have.class', 'test-component')
    cy.get('.usa-file-input__input').should('not.have.class', 'test-input')
  })

  it('emits loaded files on change', () => {
    cy.mount(UsaFileInput, {
      props: {
        multiple: true,
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-file-input__input').as('input').should('have.value', '')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('filesLoaded')
        expect(vm.emitted()).to.not.have.property('change')
      })

    cy.get('@input').selectFile([
      'cypress/fixtures/example.pdf',
      'cypress/fixtures/example.png',
      'cypress/fixtures/example.mp4',
    ])

    cy.get('.usa-file-input__input').should(
      'have.value',
      'C:\\fakepath\\example.pdf',
    )

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('change')
        expect(vm.emitted()).to.have.property('filesLoaded')
        const [currentLoadedFilesEvent] = vm.emitted('filesLoaded')

        expect(currentLoadedFilesEvent).to.have.length(1)
        expect(currentLoadedFilesEvent[0]).to.have.length(3)
        expect(currentLoadedFilesEvent[0][0]).to.have.property(
          'name',
          'example.pdf',
        )
        expect(currentLoadedFilesEvent[0][1]).to.have.property(
          'name',
          'example.png',
        )
        expect(currentLoadedFilesEvent[0][2]).to.have.property(
          'name',
          'example.mp4',
        )
      })
  })
})
