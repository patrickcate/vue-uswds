import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaTextInput from './UsaTextInput.vue'

describe('UsaTextInput', () => {
  let widthClasses = null
  let inputGroupWidthClasses = null

  beforeEach(() => {
    widthClasses = {
      '2xs': 'usa-input--2xs',
      xs: 'usa-input--xs',
      sm: 'usa-input--sm',
      small: 'usa-input--small',
      md: 'usa-input--md',
      medium: 'usa-input--medium',
      lg: 'usa-input--lg',
      xl: 'usa-input--xl',
      '2xl': 'usa-input--2xl',
    }

    inputGroupWidthClasses = {
      '2xs': 'usa-input-group--2xs',
      xs: 'usa-input-group--xs',
      sm: 'usa-input-group--sm',
      small: 'usa-input-group--small',
      md: 'usa-input-group--md',
      medium: 'usa-input-group--medium',
      lg: 'usa-input-group--lg',
      xl: 'usa-input-group--xl',
      '2xl': 'usa-input-group--2xl',
    }
  })

  afterEach(() => {
    widthClasses = null
    inputGroupWidthClasses = null
  })

  it('renders the component', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
      },
      attrs: {
        // Should not be inherited by root component element.
        name: 'test-input-name',
        maxlength: '50',
        'aria-describedby': 'test-id',
      },
    })

    cy.get('.usa-input').should('exist')

    cy.get('.usa-hint').should('not.exist')
    cy.get('.usa-error-message').should('not.exist')

    cy.get('div.usa-form-group').should('not.exist')
    cy.get('label.usa-label').should('have.attr', 'for')

    cy.get('input.usa-input').as('input').should('have.attr', 'id')
    cy.get('@input')
      .should('have.attr', 'name')
      .and('contain', 'test-input-name')

    cy.get('@input').should('have.attr', 'type').and('contain', 'text')
    cy.get('@input').should('have.attr', 'maxlength').and('contain', '50')
    cy.get('@input')
      .should('have.attr', 'aria-describedby')
      .and('contain', 'test-id')
  })

  it('displays `label`, `hint`, and `error-message` slot content', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        id: 'custom-id',
      },
      attrs: {
        'aria-describedby': 'test-id',
      },
      slots: {
        label: () => 'Test label slot',
        hint: () => 'Test hint slot',
        'error-message': () => 'Test error slot',
      },
    }).as('wrapper')

    cy.get('.usa-form-group').should('not.have.class', 'usa-form-group--error')

    cy.get('.usa-label')
      .as('label')
      .should('have.attr', 'for')
      .and('contain', 'custom-id')

    cy.get('@label').should('contain', 'Test label slot')

    cy.get('span.usa-hint')
      .as('hint')
      .should('have.id', 'custom-id-hint')
      .and('contain', 'Test hint slot')
    cy.get('.usa-error-message').should('not.exist')

    cy.get('input.usa-input').as('input').should('have.id', 'custom-id')
    cy.get('@input')
      .should('have.attr', 'aria-describedby')
      .and('contain', 'test-id custom-id-hint')

    cy.get('@wrapper').invoke('setProps', { error: true })

    cy.get('.usa-form-group').should('have.class', 'usa-form-group--error')

    cy.get('@label').should('have.class', 'usa-label--error')

    cy.get('.usa-error-message')
      .should('contain', 'Test error slot')
      .and('have.id', 'custom-id-error-message')

    cy.get('@input')
      .should('have.class', 'usa-input--error')
      .and('have.attr', 'aria-describedby')
      .and('contain', 'test-id custom-id-hint custom-id-error-message')
  })

  it('empty error message slot does not display if error prop is true', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        error: true,
      },
      slots: {
        label: () => 'Test label slot',
      },
    })

    cy.get('.usa-error-message').should('not.exist')
  })

  it('does not display label element if `label` prop and slot are not used', () => {
    mount(UsaTextInput, {})

    cy.get('.usa-label').should('not.exist')
  })

  it('group input elements if `group` prop is true', () => {
    mount(UsaTextInput, {}).as('wrapper')

    cy.get('.usa-form-group').should('not.exist')

    cy.get('@wrapper').invoke('setProps', { group: true })

    cy.get('.usa-form-group').should('exist')
  })

  it('set `input` type prop for non-grouped input', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        type: 'number',
      },
    })

    cy.get('.usa-input').should('have.attr', 'type').and('contain', 'number')
    cy.get('.usa-input-group > .usa-input').should('not.exist')
  })

  it('set `input` type prop for prefix/suffix grouped input', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        type: 'number',
      },
      slots: {
        'input-prefix': () => '@',
      },
    })

    cy.get('.usa-input-group > .usa-input')
      .should('have.attr', 'type')
      .and('contain', 'number')
    cy.get('.usa-form-group > .usa-input').should('not.exist')
  })

  it('add required attribute to non-prefix/non-suffix input if `required` prop is true', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        required: true,
      },
    })

    cy.get('.usa-form-group').should('not.exist')
    cy.get('.usa-label').should('contain', 'Test label')
    cy.get('.usa-label > abbr')
      .should('have.class', 'usa-hint')
      .and('have.class', 'usa-hint--required')
      .and('contain', '*')
    cy.get('.usa-label > abbr')
      .should('have.attr', 'title')
      .and('contain', 'required')

    cy.get('.usa-input').should('have.attr', 'required')
    cy.get('.usa-input-group > .usa-input').should('not.exist')
  })

  it('add required attribute to prefix/suffix grouped input if `required` prop is true', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        required: true,
      },
      slots: {
        'input-suffix': () => '%',
      },
    })

    cy.get('.usa-label').should('contain', 'Test label')
    cy.get('.usa-label > abbr')
      .should('have.class', 'usa-hint')
      .and('have.class', 'usa-hint--required')
      .and('contain', '*')
    cy.get('.usa-label > abbr')
      .should('have.attr', 'title')
      .and('contain', 'required')

    cy.get('.usa-input-group > .usa-input').should('have.attr', 'required')
    cy.get('.usa-form-group > .usa-input').should('not.exist')
  })

  it('when prefix or suffix is used, input is grouped with them', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        width: 'sm',
      },
      slots: {
        'input-prefix': () => '@',
        'input-suffix': () => '%',
      },
    }).as('wrapper')

    cy.get('.usa-form-group > .usa-input').should('not.exist')

    cy.get('.usa-input-group')
      .as('inputGroup')
      .children()
      .should('have.length', 3)
    cy.get('@inputGroup').should('not.have.class', 'usa-input-group--error')
    cy.get('@inputGroup').should('not.have.class', 'is-focused')
    cy.get('@inputGroup').should('have.class', 'usa-input-group--sm')

    cy.get('.usa-input-prefix')
      .as('prefix')
      .should('have.attr', 'aria-hidden')
      .and('contain', true)
    cy.get('@prefix').should('contain', '@')

    cy.get('.usa-input-suffix')
      .as('suffix')
      .should('have.attr', 'aria-hidden')
      .and('contain', true)
    cy.get('@suffix').should('contain', '%')

    cy.get('.usa-input')
      .as('input')
      .should('not.have.class', 'usa-input--error')

    // Check that focus class is added.
    cy.get('@input').focus()
    cy.get('@inputGroup').should('have.class', 'is-focused')
    cy.get('@input').blur()

    cy.get('@wrapper').invoke('setProps', { error: true })

    cy.get('@inputGroup').should('have.class', 'usa-input-group--error')

    cy.get('@input').should('not.have.class', 'usa-input--error')
    cy.get('@input').should('not.have.class', 'usa-input--sm')
  })

  it('clicking prefix or suffix sets focus on input', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
      },
      slots: {
        'input-prefix': () => '@',
        'input-suffix': () => '%',
      },
      customClasses: {},
    }).as('wrapper')

    cy.get('.usa-input-group')
      .as('inputGroup')
      .should('not.have.class', 'is-focused')

    cy.get('.usa-input').as('input').should('not.have.focus')

    cy.get('.usa-input-prefix').click({ force: true })

    cy.get('@inputGroup').should('have.class', 'is-focused')
    cy.get('@input').should('have.focus')

    // Reset input focus.
    cy.get('@input').blur()

    cy.get('@inputGroup').should('not.have.class', 'is-focused')
    cy.get('@input').should('not.have.focus')

    cy.get('.usa-input-suffix').click({ force: true })

    cy.get('@inputGroup').should('have.class', 'is-focused')
    cy.get('@input').should('have.focus')
  })

  it('emits update event when non-prefix/non-suffix input value changes', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        modelValue: 'This is some test text.',
      },
    }).as('wrapper')

    cy.get('.usa-input')
      .as('input')
      .should('have.value', 'This is some test text.')
    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:modalValue')
      })

    cy.get('@input').type(' This is some more text.')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentInputEvent = vm.emitted('update:modelValue')
        expect(currentInputEvent).to.have.length(24)
        expect(currentInputEvent[currentInputEvent.length - 1]).to.contain(
          'This is some test text. This is some more text.'
        )
      })
  })

  it('emits update event when prefix/suffix input value changes', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        modelValue: 'This is some test text.',
      },
      slots: {
        'input-prefix': () => '@',
      },
    }).as('wrapper')

    cy.get('.usa-input')
      .as('input')
      .should('have.value', 'This is some test text.')
    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:modalValue')
      })

    cy.get('@input').type(' This is some more text.')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentInputEvent = vm.emitted('update:modelValue')
        expect(currentInputEvent).to.have.length(24)
        expect(currentInputEvent[currentInputEvent.length - 1]).to.contain(
          'This is some test text. This is some more text.'
        )
      })
  })

  it('masked inputs are registered and unregistered', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test input',
        id: 'test-id',
      },
      global: {
        provide: {
          registerInput: cy.stub().as('registerInput'),
          unregisterInput: cy.stub().as('unregisterInput'),
        },
      },
    }).as('wrapper')

    cy.get('@registerInput').should('be.calledWith', 'test-id')

    cy.get('@wrapper').invoke('unmount')

    cy.get('@unregisterInput').should('be.calledWith', 'test-id')
  })

  it('adds correct CSS class to input for `width` prop value', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        width: '',
      },
    }).as('wrapper')

    cy.get('.usa-input').as('input')

    for (const width in widthClasses) {
      cy.get('@input').should('not.have.class', widthClasses[width])

      Object.values(inputGroupWidthClasses).forEach(inputGroupWidth => {
        cy.get('@input').should('not.have.class', inputGroupWidth)
      })
    }

    for (const width in widthClasses) {
      cy.get('@wrapper').invoke('setProps', { width: width })
      cy.get('@input').should('have.class', widthClasses[width])
    }
  })

  it('adds correct CSS class to input group for `width` prop value', () => {
    const widthClasses = {
      '2xs': 'usa-input-group--2xs',
      xs: 'usa-input-group--xs',
      sm: 'usa-input-group--sm',
      small: 'usa-input-group--small',
      md: 'usa-input-group--md',
      medium: 'usa-input-group--medium',
      lg: 'usa-input-group--lg',
      xl: 'usa-input-group--xl',
      '2xl': 'usa-input-group--2xl',
    }

    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        width: '',
        customClasses: {},
      },
      slots: {
        'input-suffix': () => '%',
      },
    }).as('wrapper')

    cy.get('.usa-input-group').as('inputGroup')

    for (const width in inputGroupWidthClasses) {
      cy.get('@inputGroup').should(
        'not.have.class',
        inputGroupWidthClasses[width]
      )

      Object.values(widthClasses).forEach(widthClass => {
        cy.get('@inputGroup').should('not.have.class', widthClass)
      })
    }

    for (const width in inputGroupWidthClasses) {
      cy.get('@wrapper').invoke('setProps', { width: width })
      cy.get('@inputGroup').should('have.class', inputGroupWidthClasses[width])
    }
  })

  it('uses custom CSS classes', () => {
    mount(UsaTextInput, {
      props: {
        label: 'Test label',
        customClasses: {
          component: ['test-component-class'],
          label: ['test-label-class'],
          inputGroup: ['test-input-group-class'],
          inputPrefix: ['test-input-prefix-class'],
          inputSuffix: ['test-input-suffix-class'],
        },
      },
      slots: {
        hint: () => 'Test hint',
        'input-prefix': () => '@',
        'input-suffix': () => '%',
      },
    })

    cy.get('.usa-form-group').should('have.class', 'test-component-class')
    cy.get('.usa-label').should('have.class', 'test-label-class')
    cy.get('.usa-input-group').should('have.class', 'test-input-group-class')
    cy.get('.usa-input-prefix').should('have.class', 'test-input-prefix-class')
    cy.get('.usa-input-suffix').should('have.class', 'test-input-suffix-class')
  })

  it('warns in console invalid `width` prop value', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaTextInput, {
      props: {
        width: 'invalidwidth',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'invalidwidth' is not a valid text input width`
    )
  })
})
