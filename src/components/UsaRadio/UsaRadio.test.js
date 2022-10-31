import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaRadio from './UsaRadio.vue'

describe('UsaRadio', () => {
  it('renders the component', () => {
    mount(UsaRadio, {
      props: {
        label: 'Test label',
        description: 'Test description',
      },
      attrs: {
        value: 'test-radio-value',
        name: 'text-radio-name',
      },
    }).as('wrapper')

    cy.get('.usa-radio').should('exist')

    cy.get('input.usa-radio__input')
      .should('have.attr', 'type')
      .and('contain', 'radio')
    cy.get('input.usa-radio__input').should('have.attr', 'id')
    cy.get('input.usa-radio__input').should('not.be.checked')

    cy.get('label.usa-radio__label')
      .as('radio')
      .should('have.attr', 'for')
      .and('not.be.empty')
    cy.get('label.usa-radio__label').should('contain', 'Test label')

    cy.get('span.usa-radio__label-description').should(
      'contain',
      'Test description'
    )

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:modalValue')
      })

    cy.get('@radio').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentCheckedEvent = vm.emitted('update:modelValue')
        expect(currentCheckedEvent).to.have.length(1)
        expect(currentCheckedEvent[currentCheckedEvent.length - 1]).to.contain(
          'test-radio-value'
        )
      })

    cy.get('input.usa-radio__input').should('be.checked')
  })

  it('radio is checked by default', () => {
    mount(UsaRadio, {
      props: {
        label: 'Test label',
        checked: true,
      },
    })

    cy.get('.usa-radio__input').should('be.checked')
  })

  it('`tiled` prop added correct CSS class', () => {
    mount(UsaRadio, {
      props: {
        label: 'Test label',
        tile: true,
      },
    })

    cy.get('.usa-radio__input').should('have.class', 'usa-radio__input--tile')
  })

  it('`disabled` attr binding disables radio button', () => {
    mount(UsaRadio, {
      props: {
        label: 'Test label',
      },
      attrs: {
        disabled: true,
      },
    })

    cy.get('.usa-radio__input').should('be.disabled')
  })

  it('root element does not inherit attrs', () => {
    mount(UsaRadio, {
      props: {
        label: 'Test label',
      },
      attrs: {
        class: 'test-class',
      },
    })

    cy.get('.usa-radio').should('not.have.class', 'test-class')
    cy.get('.usa-radio__input').should('have.class', 'test-class')
  })

  it('uses slot content', () => {
    mount(UsaRadio, {
      props: {
        label: 'Test label',
        description: 'Test description',
      },
      slots: {
        default: () => 'Test label slot',
        description: () => 'Test description slot',
      },
    })

    cy.get('.usa-radio__label').should('contain', 'Test label')
    cy.get('.usa-radio__label-description').should(
      'contain',
      'Test description slot'
    )
  })

  it('does not render description wrapper span if `description` slot or prop not used', () => {
    mount(UsaRadio, {
      props: {
        label: 'Test label',
      },
      slots: {
        default: () => 'Test label slot',
      },
    })

    cy.get('.usa-radio__label-description').should('not.exist')
  })

  it('uses custom id and associates label with `for` attribute', () => {
    mount(UsaRadio, {
      props: {
        label: 'Test label',
        id: 'test-custom-id',
      },
    })

    cy.get('.usa-radio__input').should('have.id', 'test-custom-id')
    cy.get('.usa-radio__label')
      .should('have.attr', 'for')
      .and('contain', 'test-custom-id')
  })

  it('uses custom CSS classes', () => {
    mount(UsaRadio, {
      props: {
        label: 'Test label',
        description: 'Test description',
        customClasses: {
          component: ['test-component-class'],
          label: ['test-label-class'],
          description: ['test-description-class'],
        },
      },
    })

    cy.get('.usa-radio').should('have.class', 'test-component-class')
    cy.get('.usa-radio__label').should('have.class', 'test-label-class')
    cy.get('.usa-radio__label-description').should(
      'have.class',
      'test-description-class'
    )
  })
})
