import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaRange from './UsaRange.vue'

describe('UsaRange', () => {
  it('renders the component', () => {
    cy.mount(UsaRange, {
      props: {
        label: 'Test label',
      },
      attrs: {
        // Should not be inherited by root component element.
        name: 'test-dropdown-name',
      },
      slots: {
        hint: () => 'Test hint',
      },
    })

    cy.get('div.usa-form-group').should('not.have.attr', 'name')
    cy.get('label.usa-label').should('have.attr', 'for')

    cy.get('input.usa-range').as('range').should('have.attr', 'id')
    cy.get('@range')
      .should('have.attr', 'name')
      .and('contain', 'test-dropdown-name')
    cy.get('@range').should('have.attr', 'type').and('contain', 'range')
    cy.get('@range').should('have.attr', 'role').and('contain', 'slider')
    cy.get('@range').should('have.attr', 'min').and('contain', 0)
    cy.get('@range').should('have.attr', 'aria-valuemin').and('contain', 0)
    cy.get('@range').should('have.attr', 'max').and('contain', 100)
    cy.get('@range').should('have.attr', 'aria-valuemax').and('contain', 100)
    cy.get('@range').should('have.attr', 'aria-valuenow').and('contain', '')

    cy.get('@range').should('have.attr', 'aria-describedby')
  })

  it('displays `label`, `hint`, and `error-message` slot content', () => {
    cy.mount(UsaRange, {
      props: {
        label: 'Test label',
        id: 'custom-id',
      },
      slots: {
        label: () => 'Test label slot',
        hint: () => 'Test hint slot',
        'error-message': () => 'Test error slot',
      },
    })
      .its('wrapper')
      .as('wrapper')

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

    cy.get('.usa-range').as('range').should('have.id', 'custom-id')
    cy.get('@range')
      .should('have.attr', 'aria-describedby')
      .and('contain', 'custom-id-hint')

    cy.get('@wrapper').invoke('setProps', { error: true })

    cy.get('.usa-form-group').should('have.class', 'usa-form-group--error')

    cy.get('@label').should('have.class', 'usa-label--error')

    cy.get('.usa-error-message')
      .should('contain', 'Test error slot')
      .and('have.id', 'custom-id-error-message')

    cy.get('@range')
      .should('have.class', 'usa-input--error')
      .and('have.attr', 'aria-describedby')
      .and('contain', 'custom-id-hint custom-id-error-message')
  })

  it('add required attribute if `required` prop is true', () => {
    cy.mount(UsaRange, {
      props: {
        required: true,
      },
      slots: {
        label: () => 'Test label slot',
      },
    })

    cy.get('.usa-label').should('contain', 'Test label slot')
    cy.get('.usa-label > abbr')
      .should('have.class', 'usa-hint')
      .and('have.class', 'usa-hint--required')
      .and('contain', '*')
    cy.get('.usa-label > abbr')
      .should('have.attr', 'title')
      .and('contain', 'required')

    cy.get('.usa-range').should('have.attr', 'required')
  })

  it('wraps component in form group if error message is displayed', () => {
    cy.mount(UsaRange, {
      props: {
        error: true,
      },
      slots: {
        'error-message': () => 'Test error slot',
      },
    })

    cy.get('.usa-form-group').should('have.class', 'usa-form-group--error')
    cy.get('.usa-error-message').should('contain', 'Test error slot')
  })

  it('emits update event when selection changes', () => {
    cy.mount(UsaRange, {
      props: {
        label: 'Test label',
        modelValue: 50,
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-range').as('range').should('have.value', 50)
    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:modalValue')
      })

    cy.get('@range').invoke('val', 20).trigger('input')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentRangeEvent = vm.emitted('update:modelValue')
        expect(currentRangeEvent).to.have.length(1)
        expect(currentRangeEvent[currentRangeEvent.length - 1]).to.contain('20')
      })

    cy.get('@range').invoke('val', 80).trigger('input')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentRangeEvent = vm.emitted('update:modelValue')
        expect(currentRangeEvent).to.have.length(2)
        expect(currentRangeEvent[currentRangeEvent.length - 1]).to.contain('80')
      })
  })

  it('uses custom CSS classes', () => {
    cy.mount(UsaRange, {
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
})
