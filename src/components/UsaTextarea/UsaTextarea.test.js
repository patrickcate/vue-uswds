import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaTextarea from './UsaTextarea.vue'

describe('UsaTextarea', () => {
  it('renders the component', () => {
    mount(UsaTextarea, {
      props: {
        label: 'Test label',
      },
      attrs: {
        // Should not be inherited by root component element.
        name: 'test-textarea-name',
        maxlength: '50',
      },
      slots: {
        hint: () => 'Test hint',
      },
    })

    cy.get('div.usa-form-group').should('not.have.attr', 'name')
    cy.get('label.usa-label').should('have.attr', 'for')

    cy.get('.usa-hint').should('exist')

    cy.get('textarea.usa-textarea').as('textarea').should('have.attr', 'id')
    cy.get('@textarea')
      .should('have.attr', 'name')
      .and('contain', 'test-textarea-name')
    cy.get('@textarea').should('have.attr', 'maxlength').and('contain', '50')
    cy.get('@textarea').should('have.attr', 'aria-describedby')
  })

  it('displays `label`, `hint`, and `error-message` slot content', () => {
    mount(UsaTextarea, {
      props: {
        label: 'Test label',
        id: 'custom-id',
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

    cy.get('.usa-textarea').as('textarea').should('have.id', 'custom-id')
    cy.get('@textarea')
      .should('have.attr', 'aria-describedby')
      .and('contain', 'custom-id-hint')

    cy.get('@wrapper').invoke('setProps', { error: true })

    cy.get('.usa-form-group').should('have.class', 'usa-form-group--error')

    cy.get('@label').should('have.class', 'usa-label--error')

    cy.get('.usa-error-message')
      .should('contain', 'Test error slot')
      .and('have.id', 'custom-id-error-message')

    cy.get('@textarea')
      .should('have.class', 'usa-input--error')
      .and('have.attr', 'aria-describedby')
      .and('contain', 'custom-id-hint custom-id-error-message')
  })

  it('empty error message slot does not display if error prop is true', () => {
    mount(UsaTextarea, {
      props: {
        label: 'Test label',
        error: true,
      },
      slots: {
        label: () => 'Test label slot',
      },
    })

    cy.get('.usa-hint').should('not.exist')
    cy.get('.usa-error-message').should('not.exist')
  })

  it('add required attribute if `required` prop is true', () => {
    mount(UsaTextarea, {
      props: {
        label: 'Test label',
        required: true,
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

    cy.get('.usa-textarea').should('have.attr', 'required')
  })

  it('adds correct CSS class for `width` prop value', () => {
    const widthClasses = {
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

    mount(UsaTextarea, {
      props: {
        label: 'Test label',
        width: '',
      },
    }).as('wrapper')

    cy.get('.usa-textarea').as('textarea')

    for (const width in widthClasses) {
      cy.get('@textarea').should('not.have.class', widthClasses[width])
    }

    for (const width in widthClasses) {
      cy.get('@wrapper').invoke('setProps', { width: width })
      cy.get('@textarea').should('have.class', widthClasses[width])
    }
  })

  it('emits update event when value changes', () => {
    mount(UsaTextarea, {
      props: {
        label: 'Test label',
        modelValue: 'This is some test text.',
      },
    }).as('wrapper')

    cy.get('.usa-textarea')
      .as('textarea')
      .should('have.value', 'This is some test text.')
    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:modalValue')
      })

    cy.get('@textarea').type(' This is some more text.')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentTextareaEvent = vm.emitted('update:modelValue')
        expect(currentTextareaEvent).to.have.length(24)
        expect(
          currentTextareaEvent[currentTextareaEvent.length - 1]
        ).to.contain('This is some test text. This is some more text.')
      })
  })

  it('uses custom CSS classes', () => {
    mount(UsaTextarea, {
      props: {
        label: 'Test label',
        customClasses: {
          component: ['test-component-class'],
          label: ['test-label-class'],
        },
      },
      slots: {
        hint: () => 'Test hint',
      },
    })

    cy.get('.usa-form-group').should('have.class', 'test-component-class')
    cy.get('.usa-label').should('have.class', 'test-label-class')
  })

  it('warns in console invalid `width` prop value', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaTextarea, {
      props: {
        width: 'invalidwidth',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'invalidwidth' is not a valid textarea width`
    )
  })
})
