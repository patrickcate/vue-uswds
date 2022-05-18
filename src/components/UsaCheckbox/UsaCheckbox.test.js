import { mount } from '@cypress/vue'
import UsaCheckbox from './UsaCheckbox.vue'

describe('UsaCheckbox', () => {
  it('renders the component', () => {
    mount(UsaCheckbox, {
      props: {
        label: 'Test label',
        description: 'Test description',
        // Should be overridden by v-model value.
        checked: true,
      },
      attrs: {
        value: 'test-checkbox-value',
        name: 'text-checkbox-name',
      },
    }).as('wrapper')

    cy.get('div.usa-checkbox').should('exist')

    cy.get('input.usa-checkbox__input')
      .should('have.attr', 'type')
      .and('contain', 'checkbox')
    cy.get('input.usa-checkbox__input').should('have.attr', 'id')
    cy.get('input.usa-checkbox__input').should('not.be.checked')

    cy.get('label.usa-checkbox__label')
      .as('checkbox')
      .should('have.attr', 'for')
      .and('not.be.empty')
    cy.get('label.usa-checkbox__label').should('contain', 'Test label')

    cy.get('span.usa-checkbox__label-description').should(
      'contain',
      'Test description'
    )

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:modalValue')
      })

    cy.get('@checkbox').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentCheckedEvent = vm.emitted('update:modelValue')
        expect(currentCheckedEvent).to.have.length(1)
        expect(currentCheckedEvent[currentCheckedEvent.length - 1]).to.contain(
          true
        )
      })

    cy.get('input.usa-checkbox__input').should('be.checked')
  })

  it('checkbox is checked by default', () => {
    mount(UsaCheckbox, {
      props: {
        label: 'Test label',
        modelValue: true,
      },
    })

    cy.get('.usa-checkbox__input').should('be.checked')
  })

  it('`tiled` prop added correct CSS class', () => {
    mount(UsaCheckbox, {
      props: {
        label: 'Test label',
        tile: true,
      },
    })

    cy.get('.usa-checkbox__input').should(
      'have.class',
      'usa-checkbox__input--tile'
    )
  })

  it('`disabled` attr binding disables checkbox', () => {
    mount(UsaCheckbox, {
      props: {
        label: 'Test label',
      },
      attrs: {
        disabled: true,
      },
    })

    cy.get('.usa-checkbox__input').should('be.disabled')
  })

  it('root element does not inherit attrs', () => {
    mount(UsaCheckbox, {
      props: {
        label: 'Test label',
      },
      attrs: {
        class: 'test-class',
      },
    })

    cy.get('.usa-checkbox').should('not.have.class', 'test-class')
    cy.get('.usa-checkbox__input').should('have.class', 'test-class')
  })

  it('uses slot content', () => {
    mount(UsaCheckbox, {
      props: {
        label: 'Test label',
        description: 'Test description',
      },
      slots: {
        default: () => 'Test label slot',
        description: () => 'Test description slot',
      },
    })

    cy.get('.usa-checkbox__label').should('contain', 'Test label')
    cy.get('.usa-checkbox__label-description').should(
      'contain',
      'Test description slot'
    )
  })

  it('does not render description wrapper span if `description` slot or prop not used', () => {
    mount(UsaCheckbox, {
      props: {
        label: 'Test label',
      },
      slots: {
        default: () => 'Test label slot',
      },
    })

    cy.get('.usa-checkbox__label-description').should('not.exist')
  })

  it('uses custom id and associates label with `for` attribute', () => {
    mount(UsaCheckbox, {
      props: {
        label: 'Test label',
        id: 'test-custom-id',
      },
    })

    cy.get('.usa-checkbox__input').should('have.id', 'test-custom-id')
    cy.get('.usa-checkbox__label')
      .should('have.attr', 'for')
      .and('contain', 'test-custom-id')
  })

  it('uses custom CSS classes', () => {
    mount(UsaCheckbox, {
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

    cy.get('.usa-checkbox').should('have.class', 'test-component-class')
    cy.get('.usa-checkbox__label').should('have.class', 'test-label-class')
    cy.get('.usa-checkbox__label-description').should(
      'have.class',
      'test-description-class'
    )
  })
})
