const { readdirSync } = require('fs')
const { join } = require('path')

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const componentNames = getDirectories(join(__dirname, 'src/components/'))

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
      name: '🛠 build: Changes that affect the build system or external dependencies (example scopes: Vite, npm, hygen)',
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
    'cypress',
    'github-actions',
    'npm',
    'storybook',
    'vite',
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],

  // limit subject length
  subjectLimit: 100,
}
