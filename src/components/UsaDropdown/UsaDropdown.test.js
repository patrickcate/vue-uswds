import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaDropdown from './UsaDropdown.vue'

const testOptions = [
  {
    value: 1,
    text: 'Item 1',
    disabled: true,
  },
  {
    value: 2,
    text: 'Item 2',
  },
  {
    group: 'Item 3',
    options: [
      {
        value: 3.1,
        text: 'Item 3.1',
      },
      {
        value: 3.2,
        text: 'Item 3.2',
        disabled: true,
      },
      {
        value: 3.3,
        text: 'Item 3.3',
      },
    ],
  },
  {
    value: 4,
  },
  {
    group: 'Item 5',
    disabled: true,
    options: [
      {
        value: 5.1,
        text: 'Item 5.1',
      },
      {
        value: 5.2,
      },
    ],
  },
]

describe('UsaDropdown', () => {
  it('renders the component', () => {
    mount(UsaDropdown, {
      props: {
        label: 'Test label',
      },
      attrs: {
        // Should not be inherited by root component element.
        name: 'test-dropdown-name',
      },
    })

    cy.get('div.usa-form-group').should('not.have.attr', 'name')
    cy.get('label.usa-label').should('have.attr', 'for')

    cy.get('select.usa-select').should('have.attr', 'id')
    cy.get('select.usa-select')
      .should('have.attr', 'name')
      .and('contain', 'test-dropdown-name')
    cy.get('select.usa-select').should('not.have.attr', 'aria-describedby')

    cy.get('.usa-select option').should('not.exist')
    cy.get('.usa-select optgroup').should('not.exist')
  })

  it('displays `label`, `hint`, and `error-message` slot content', () => {
    mount(UsaDropdown, {
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

    cy.get('.usa-select').as('select').should('have.id', 'custom-id')
    cy.get('@select')
      .should('have.attr', 'aria-describedby')
      .and('contain', 'custom-id-hint')

    cy.get('@wrapper').invoke('setProps', { error: true })

    cy.get('.usa-form-group').should('have.class', 'usa-form-group--error')

    cy.get('@label').should('have.class', 'usa-label--error')

    cy.get('.usa-error-message')
      .should('contain', 'Test error slot')
      .and('have.id', 'custom-id-error-message')

    cy.get('@select')
      .should('have.class', 'usa-input--error')
      .and('have.attr', 'aria-describedby')
      .and('contain', 'custom-id-hint custom-id-error-message')
  })

  it('renders all select options from `options` prop', () => {
    mount(UsaDropdown, {
      props: {
        label: 'Test label',
        options: testOptions,
        emptyLabel: 'Choose...',
      },
    })

    cy.get('.usa-select > *:nth-child(1)')
      .should('match', 'option')
      .and('have.attr', 'value')
      .and('contain', '')
    cy.get('.usa-select > *:nth-child(1)').should('contain', 'Choose...')

    cy.get('.usa-select > *:nth-child(2)')
      .should('match', 'option')
      .and('have.attr', 'disabled')
    cy.get('.usa-select > *:nth-child(2)')
      .should('have.attr', 'value')
      .and('contain', '1')
    cy.get('.usa-select > *:nth-child(2)').should('contain', 'Item 1')

    cy.get('.usa-select > *:nth-child(3)')
      .should('match', 'option')
      .and('not.have.attr', 'disabled')
    cy.get('.usa-select > *:nth-child(3)')
      .should('have.attr', 'value')
      .and('contain', '2')
    cy.get('.usa-select > *:nth-child(3)').should('contain', 'Item 2')

    cy.get('.usa-select > *:nth-child(4)')
      .as('optgroup1')
      .should('match', 'optgroup')
      .and('have.attr', 'label')
      .and('contain', 'Item 3')

    cy.get('@optgroup1')
      .find('> *:nth-child(1)')
      .should('match', 'option')
      .and('not.have.attr', 'disabled')
    cy.get('@optgroup1')
      .find('> *:nth-child(1)')
      .should('have.attr', 'value')
      .and('contain', '3.1')
    cy.get('@optgroup1').find('> *:nth-child(1)').should('contain', 'Item 3.1')

    cy.get('@optgroup1')
      .find('> *:nth-child(2)')
      .should('match', 'option')
      .and('have.attr', 'disabled')
    cy.get('@optgroup1')
      .find('> *:nth-child(2)')
      .should('have.attr', 'value')
      .and('contain', '3.2')
    cy.get('@optgroup1').find('> *:nth-child(2)').should('contain', 'Item 3.2')

    cy.get('@optgroup1')
      .find('> *:nth-child(3)')
      .should('match', 'option')
      .and('not.have.attr', 'disabled')
    cy.get('@optgroup1')
      .find('> *:nth-child(3)')
      .should('have.attr', 'value')
      .and('contain', '3.3')
    cy.get('@optgroup1').find('> *:nth-child(3)').should('contain', 'Item 3.3')

    cy.get('.usa-select > *:nth-child(5)')
      .should('match', 'option')
      .and('not.have.attr', 'disabled')
    cy.get('.usa-select > *:nth-child(5)')
      .should('have.attr', 'value')
      .and('contain', '4')
    cy.get('.usa-select > *:nth-child(5)').should('contain', '4')

    cy.get('.usa-select > *:nth-child(6)')
      .as('optgroup2')
      .should('match', 'optgroup')
      .and('have.attr', 'disabled')
    cy.get('@optgroup2').and('have.attr', 'label').and('contain', 'Item 5')

    cy.get('@optgroup2')
      .find('> *:nth-child(1)')
      .should('match', 'option')
      .and('not.have.attr', 'disabled')
    cy.get('@optgroup2')
      .find('> *:nth-child(1)')
      .should('have.attr', 'value')
      .and('contain', '5.1')
    cy.get('@optgroup2').find('> *:nth-child(1)').should('contain', 'Item 5.1')

    cy.get('@optgroup2')
      .find('> *:nth-child(2)')
      .should('match', 'option')
      .and('not.have.attr', 'disabled')
    cy.get('@optgroup2')
      .find('> *:nth-child(2)')
      .should('have.attr', 'value')
      .and('contain', '5.2')
    cy.get('@optgroup2').find('> *:nth-child(2)').should('contain', '5.2')
  })

  it('add required attribute if `required` prop is true', () => {
    mount(UsaDropdown, {
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

    cy.get('.usa-select').should('have.attr', 'required')
  })

  it('renders default slot with bound `options` prop', () => {
    mount(UsaDropdown, {
      props: {
        label: 'Test label',
        options: testOptions,
      },
      slots: {
        default: ({ options }) =>
          h(
            'option',
            { value: options[1].value },
            `Options slot: ${options[1].text}`
          ),
      },
    })

    cy.get('.usa-select > option:nth-of-type(2)').should(
      'contain',
      'Options slot: Item 2'
    )
    cy.get('.usa-select > option:nth-of-type(2)')
      .should('have.attr', 'value')
      .and('contain', '2')
  })

  it('emits update event when selection changes', () => {
    mount(UsaDropdown, {
      props: {
        label: 'Test label',
        options: testOptions,
        modelValue: 2,
      },
    }).as('wrapper')

    cy.get('.usa-select > option:nth-of-type(3)').should('be.selected')
    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:modalValue')
      })

    cy.get('.usa-select').select('3.1')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentSelectedEvent = vm.emitted('update:modelValue')
        expect(currentSelectedEvent).to.have.length(1)
        expect(
          currentSelectedEvent[currentSelectedEvent.length - 1]
        ).to.contain(3.1)
      })

    cy.get('.usa-select').select('4')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentSelectedEvent = vm.emitted('update:modelValue')
        expect(currentSelectedEvent).to.have.length(2)
        expect(
          currentSelectedEvent[currentSelectedEvent.length - 1]
        ).to.contain(4)
      })

    cy.get('.usa-select').select('')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentSelectedEvent = vm.emitted('update:modelValue')
        expect(currentSelectedEvent).to.have.length(3)
        expect(
          currentSelectedEvent[currentSelectedEvent.length - 1]
        ).to.contain('')
      })
  })

  it('uses custom CSS classes', () => {
    mount(UsaDropdown, {
      props: {
        label: 'Test label',
        customClasses: {
          component: ['test-component-class'],
          label: ['test-label-class'],
        },
      },
    })

    cy.get('.usa-form-group').should('have.class', 'test-component-class')
    cy.get('.usa-label').should('have.class', 'test-label-class')
  })
})
