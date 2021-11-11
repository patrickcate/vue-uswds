module.exports = [
  {
    type: 'input',
    name: 'component_name',
    message: 'What is the name of the component?',
    validate(value) {
      if (!value) {
        return 'Components must have a name.'
      }

      return true
    },
  },
  {
    type: 'select',
    name: 'api',
    message: 'Which API to start?',
    choices: [
      {
        name: 'options',
        message: 'Options API',
      },
      {
        name: 'composition',
        message: 'Composition API',
      },
    ],
  },
]
