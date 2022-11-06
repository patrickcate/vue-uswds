const { scopes } = require('./scripts/git-commit-scope-names.js')

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Scope names set in ./scripts/git-commit-scope-names.js file.
    'scope-enum': [2, 'always', [...scopes]],
  },
}
