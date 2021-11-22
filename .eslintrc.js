module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
  rules: {
    // override/add rules settings here, such as:
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-unused-vars':
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/script-setup-uses-vars': 'error',
  },
}
