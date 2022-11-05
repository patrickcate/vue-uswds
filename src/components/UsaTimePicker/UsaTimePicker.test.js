import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaTimePicker from './UsaTimePicker.vue'
import { defaultData, testData } from './UsaTimePicker.fixtures.js'

describe('UsaTimePicker', () => {
  it('renders the component', () => {
    mount(UsaTimePicker, {})

    cy.get('div.usa-form-group').should('not.exist')
    cy.get('label.usa-label').should('not.exist')

    cy.get('.usa-time-picker')
      .as('timePicker')
      .should('have.class', 'usa-combo-box')
      .and('have.data', 'enhanced', true)

    cy.get('input')
      .should('have.id', 'vuswds-id-global-usa-time-picker-1')
      .and('have.attr', 'aria-autocomplete', 'list')
      .and('have.attr', 'aria-owns', 'vuswds-id-global-usa-time-picker-1-list')
      .and(
        'have.attr',
        'aria-controls',
        'vuswds-id-global-usa-time-picker-1-list'
      )
      .and(
        'have.attr',
        'aria-describedby',
        'vuswds-id-global-usa-time-picker-1-assistive-hint'
      )
      .and('have.attr', 'aria-expanded', 'false')
      .and('have.attr', 'autocapitalize', 'off')
      .and('have.attr', 'autocomplete', 'off')
      .and('have.attr', 'type', 'text')
      .and('have.attr', 'role', 'combobox')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('span.usa-combo-box__clear-input__wrapper').should(
      'have.attr',
      'tabindex',
      '-1'
    )

    cy.get(
      '.usa-combo-box__clear-input__wrapper > button.usa-combo-box__clear-input'
    )
      .as('clearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Clear the select contents')
      .and('be.hidden')
      .and('contain', '\u00a0')

    cy.get('span.usa-combo-box__input-button-separator').should(
      'contain',
      '\u00a0'
    )

    cy.get('span.usa-combo-box__toggle-list__wrapper').should(
      'have.attr',
      'tabindex',
      '-1'
    )

    cy.get(
      '.usa-combo-box__toggle-list__wrapper > button.usa-combo-box__toggle-list'
    )
      .as('toggleButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'aria-label', 'Toggle the dropdown list')
      .and('contain', '\u00a0')

    cy.get('.usa-combo-box__toggle-list__wrapper + ul.usa-combo-box__list')
      .as('list')
      .should('have.id', 'vuswds-id-global-usa-time-picker-1-list')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'role', 'listbox')
      .and(
        'have.attr',
        'aria-labelledby',
        'vuswds-id-global-usa-time-picker-1-label'
      )
      .and('have.attr', 'hidden')

    cy.get('@list').children().should('have.length', 48)

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option')
      .should('have.attr', 'aria-setsize', '48')
      .and('have.attr', 'aria-selected', 'false')
      .and('have.attr', 'role', 'option')
      .and('have.attr', 'tabindex', '-1')
      .and('not.have.class', 'usa-combo-box__list-option--selected')
      .and('not.have.class', 'usa-combo-box__list-option--focused')

    cy.get('li.usa-combo-box__list-option--no-results').should('not.exist')

    defaultData.forEach((option, index) => {
      cy.get(`li.usa-combo-box__list-option:nth-of-type(${index + 1})`)
        .should(
          'have.id',
          `vuswds-id-global-usa-time-picker-1-list-option-${index}`
        )
        .and('have.attr', 'aria-posinset', index + 1)
        .and('have.attr', 'data-value', option.value)
        .and('contain', option.label)
    })

    cy.get('div.usa-combo-box__status')
      .as('status')
      .should('have.attr', 'role', 'status')
      .and('have.class', 'usa-sr-only')
      .and('be.empty')

    cy.get('span[id="vuswds-id-global-usa-time-picker-1-assistive-hint"]')
      .should('have.class', 'usa-sr-only')
      .and(
        'contain',
        'When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.'
      )
  })

  it('the available options match the min/max time and step', () => {
    mount(UsaTimePicker, {
      props: {
        label: 'Time Picker',
        minTime: '11:00',
        maxTime: '14:00',
        step: 60,
        id: 'test-time-picker-id',
        customClasses: {},
      },
    })

    cy.get('div.usa-form-group').should('not.exist')

    cy.get('label.usa-label')
      .should('have.attr', 'for', 'test-time-picker-id')
      .and('have.id', 'test-time-picker-id-label')
      .and('contain', 'Time Picker')

    cy.get('.usa-time-picker')
      .should('have.class', 'usa-combo-box')
      .and('have.data', 'enhanced', true)

    cy.get('.usa-combo-box__toggle-list__wrapper + ul.usa-combo-box__list')
      .should('have.id', 'test-time-picker-id-list')
      .as('list')

    cy.get('@list').children().should('have.length', 4)

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option')
      .should('have.attr', 'aria-setsize', '4')
      .and('have.attr', 'aria-selected', 'false')
      .and('have.attr', 'role', 'option')
      .and('have.attr', 'tabindex', '-1')
      .and('not.have.class', 'usa-combo-box__list-option--selected')
      .and('not.have.class', 'usa-combo-box__list-option--focused')

    cy.get('li.usa-combo-box__list-option--no-results').should('not.exist')

    testData.forEach((option, index) => {
      cy.get(`li.usa-combo-box__list-option:nth-of-type(${index + 1})`)
        .should('have.id', `test-time-picker-id-list-option-${index}`)
        .and('have.attr', 'aria-posinset', index + 1)
        .and('have.attr', 'data-value', option.value)
        .and('contain', option.label)
    })

    cy.get('span[id="test-time-picker-id-assistive-hint"]')
  })

  it('custom empty and assistive hint slot text', () => {
    mount(UsaTimePicker, {
      props: {
        minTime: '07:00',
        maxTime: '07:00',
      },
      slots: {
        'no-results': () => 'Test no results text',
        'assistive-hint': () => 'Test assistive hint',
      },
    })

    cy.get('.usa-combo-box__list-option--no-results').should(
      'contain',
      'Test no results text'
    )

    cy.get('.usa-combo-box__status + span.usa-sr-only').should(
      'contain',
      'Test assistive hint'
    )
  })

  it('starts with default value', () => {
    const wrapperComponent = {
      components: { UsaTimePicker },
      data() {
        return {
          selectedOption: '13:00',
        }
      },
      template: `<UsaTimePicker v-model="selectedOption"></UsaTimePicker>`,
    }

    mount(wrapperComponent, {})

    cy.get('input').should('have.value', '1:00pm')
    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option[data-value="13:00"]'
    )
      .should('have.class', 'usa-combo-box__list-option--selected')
      .and('have.attr', 'aria-selected', 'true')
  })

  it('uses status scoped slot content', () => {
    mount(UsaTimePicker, {
      slots: {
        status: ({ filteredOptions }) => `total: ${filteredOptions.length}`,
      },
    })

    cy.get('.usa-combo-box__status').as('status').should('be.empty')

    cy.get('input').as('input').click()

    cy.get('@input').should('have.focus')

    cy.get('ul').should('be.visible')

    cy.get('@status').should('contain', 'total: 48')

    cy.get('@input').type(':30')

    cy.get('@status').should('contain', 'total: 24')

    cy.get('@input').clear().type('12:00')

    cy.get('@status').should('contain', 'total: 2')

    cy.get('@input').type('pm')

    cy.get('@status').should('contain', 'total: 1')

    cy.get('@input').type('{backspace}')

    cy.get('@status').should('contain', 'total: 1')
  })

  it('uses custom CSS classes', () => {
    mount(UsaTimePicker, {
      props: {
        label: 'Custom Time Picker',
        error: true,
        id: 'test-time-picker-id',
        minTime: '09:00',
        maxTime: '09:00',
        customClasses: {
          formGroup: ['test-form-group-class'],
          component: ['test-component-class'],
          label: ['test-label-class'],
          input: ['test-input-class'],
          list: ['test-list-class'],
        },
      },
      attrs: {
        'data-test': 'test-attribute',
      },
      slots: {
        label: () => 'Test label slot',
        hint: () => 'Test hint slot',
        'error-message': () => 'Test error slot',
      },
    })

    cy.get('.usa-form-group')
      .should('have.class', 'test-form-group-class')
      .and('not.have.attr', 'data-test')

    cy.get('label')
      .should('have.id', 'test-time-picker-id-label')
      .and('have.class', 'test-label-class')
      .and('contain', 'Test label slot')

    cy.get('.usa-combo-box').should('have.class', 'test-component-class')

    cy.get('.usa-hint').should('have.id', 'test-time-picker-id-hint')

    cy.get('.usa-error-message').should(
      'have.id',
      'test-time-picker-id-error-message'
    )

    cy.get('input')
      .should('have.id', 'test-time-picker-id')
      .and('have.class', 'test-input-class')
      .and('have.attr', 'data-test', 'test-attribute')

    cy.get('ul')
      .as('list')
      .should('have.id', 'test-time-picker-id-list')
      .and('have.class', 'test-list-class')

    cy.get('@list').children().should('have.length', 1)

    cy.get('.usa-combo-box__list-option--no-results').should(
      'contain',
      'No results found'
    )

    cy.get('.usa-combo-box__status + span.usa-sr-only').should(
      'have.id',
      'test-time-picker-id-assistive-hint'
    )

    cy.get('.usa-error-message').should(
      'have.id',
      'test-time-picker-id-error-message'
    )
  })

  it('component emits v-model event', () => {
    mount(UsaTimePicker, {
      props: {
        label: 'Emitted',
      },
    }).as('wrapper')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:modalValue')
      })

    cy.get('input').click()

    cy.get('li:nth-of-type(2)').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentValueEvent = vm.emitted('update:modelValue')
        expect(currentValueEvent).to.have.length(1)
        expect(currentValueEvent[currentValueEvent.length - 1]).to.contain(
          '00:30'
        )
      })
  })

  it('warns in console invalid `minTime`, `maxTime`, and `step` prop values', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaTimePicker, {
      props: {
        label: 'Time Picker',
        minTime: '00-00',
        maxTime: '24:00',
        step: '-1',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'00-00' is not a valid minimum time. It must be a string in the HH:MM 24 hour format.`
    )
    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'24:00' is not a valid maximum time. It must be a string in the HH:MM 24 hour format.`
    )
    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'-1' is not a valid time step increment.`
    )
  })
})
