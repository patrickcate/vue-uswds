const { readdirSync } = require('fs')
const { join } = require('path')
const hiddenFilesRegexPattern = /(^|\/)\.[^/.]/g

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => {
      console.log(dirent)
      return dirent.isDirectory() && !hiddenFilesRegexPattern.test(dirent.name)
    })
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
  types: [
    { value: 'feat', name: '✨ feat: A new feature' },
    { value: 'fix', name: '🐛 fix: A bug fix' },
    { value: 'docs', name: '📚 docs: Documentation only changes' },
    {
      value: 'style',
      name: '🎨 style: Changes that do not affect the meaning of the code\n(white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name: '♻️ refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: '🚀 perf: A code change that improves performance',
    },
    {
      value: 'test',
      name: '✅ test: Adding missing tests or stories (example scopes: Cypress, Storybook)',
    },
    {
      value: 'build',
      name: '🛠 build: Changes that affect the build system or external dependencies (example scopes: Vite, npm, Hygen)',
    },
    {
      value: 'ci',
      name: '⚙️ ci: Changes to our CI configuration files and scripts (example scopes: GitHub Actions, Cypress, Storybook)',
    },
    {
      value: 'chore',
      name: '👷 chore: Changes to the build process or auxiliary tools\nand libraries such as documentation generation',
    },
    { value: 'revert', name: '🗑 revert: Reverts a previous commit' },
  ],

  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    // customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
  scopes: [
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
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],

  // limit subject length
  subjectLimit: 100,
}
