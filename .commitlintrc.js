const { readdirSync } = require('fs')
const { join } = require('path')
const hiddenFilesRegexPattern = /(^|\/)\.[^/.]/g

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(
      dirent =>
        dirent.isDirectory() && !hiddenFilesRegexPattern.test(dirent.name)
    )
    .map(dirent => dirent.name)

const getFilenames = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(
      dirent =>
        !dirent.isDirectory() && !hiddenFilesRegexPattern.test(dirent.name)
    )
    .map(dirent => dirent.name.replace('.js', ''))

const componentNames = getDirectories(join(__dirname, 'src', 'components'))
const composableNames = getFilenames(join(__dirname, 'src', 'composables'))

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        '',
        ...componentNames,
        ...composableNames,
        'cypress',
        'github-actions',
        'hygen',
        'npm',
        'storybook',
        'vite',
        'release',
        'no-release',
      ],
    ],
  },
}
