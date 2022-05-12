const { readdirSync } = require('fs')
const { join } = require('path')

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const componentNames = getDirectories(join(__dirname, 'src', 'components'))

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        '',
        ...componentNames,
        'cypress',
        'github-actions',
        'npm',
        'storybook',
        'vite',
      ],
    ],
  },
}
