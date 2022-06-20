import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import {
  testData,
  falsyTestData,
} from '@/components/UsaComboBox/UsaComboBox.fixtures.js'
import UsaComboBox from './UsaComboBox.vue'

describe('UsaComboBox', () => {
  it('renders the component', () => {
    const wrapperComponent = {
      components: { UsaComboBox },
      data() {
        return {
          options: testData,
          selectedOption: '',
        }
      },
      template: `<UsaComboBox v-model="selectedOption" :options="options" label="ComboBox"></UsaComboBox>`,
    }

    mount(wrapperComponent, {})

    cy.get('label')
      .should('have.class', 'usa-label')
      .and('have.attr', 'for', 'vuswds-id-global-usa-combo-box-1')
      .and('have.id', 'vuswds-id-global-usa-combo-box-1-label')
      .and('contain', 'ComboBox')

    cy.get('div.usa-combo-box')
      .as('comboBox')
      .should('not.have.class', 'usa-combo-box--pristine')
      .and('have.data', 'enhanced', true)

    cy.get('.usa-combo-box > input.usa-combo-box__input')
      .as('input')
      .should('have.id', 'vuswds-id-global-usa-combo-box-1')
      .and('have.attr', 'aria-autocomplete', 'list')
      .and('have.attr', 'aria-owns', 'vuswds-id-global-usa-combo-box-1-list')
      .and(
        'have.attr',
        'aria-controls',
        'vuswds-id-global-usa-combo-box-1-list'
      )
      .and(
        'have.attr',
        'aria-describedby',
        'vuswds-id-global-usa-combo-box-1-assistive-hint'
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
      .should('have.id', 'vuswds-id-global-usa-combo-box-1-list')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'role', 'listbox')
      .and(
        'have.attr',
        'aria-labelledby',
        'vuswds-id-global-usa-combo-box-1-label'
      )
      .and('have.attr', 'hidden')

    cy.get('@list').children().should('have.length', 64)

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option')
      .should('have.attr', 'aria-setsize', '64')
      .and('have.attr', 'aria-selected', 'false')
      .and('have.attr', 'role', 'option')
      .and('have.attr', 'tabindex', '-1')
      .and('not.have.class', 'usa-combo-box__list-option--selected')
      .and('not.have.class', 'usa-combo-box__list-option--focused')

    cy.get('li.usa-combo-box__list-option--no-results').should('not.exist')

    testData.forEach((option, index) => {
      cy.get(`li.usa-combo-box__list-option:nth-of-type(${index + 1})`)
        .should(
          'have.id',
          `vuswds-id-global-usa-combo-box-1-list-option-${index}`
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

    cy.get('span[id="vuswds-id-global-usa-combo-box-1-assistive-hint"]')
      .should('have.class', 'usa-sr-only')
      .and(
        'contain',
        'When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.'
      )

    cy.get('@input').click()

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'true')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:first-child'
    ).should('have.class', 'usa-combo-box__list-option--focused')

    cy.get('@status').should('contain', `${testData.length} results available.`)

    // Click outside.
    cy.get('html').click('topLeft')

    cy.get('@input')
      .should('not.have.focus')
      .and('have.attr', 'aria-expanded', 'false')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')

    cy.get('@status').should('be.empty')

    cy.get('@input').click()

    cy.get('@input').should('have.focus')

    // Open again.
    cy.get('@input').click()

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'true')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:first-child'
    ).should('have.class', 'usa-combo-box__list-option--focused')

    cy.get('@status').should('contain', `${testData.length} results available.`)

    // Close with escape key.
    cy.realPress('Escape')

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'false')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')

    cy.get('@status').should('be.empty')

    // Open with down arrow.
    cy.get('@input').type('{downArrow}')

    cy.get('@input')
      .should('have.attr', 'aria-expanded', 'true')
      .and(
        'have.attr',
        'aria-activedescendant',
        'vuswds-id-global-usa-combo-box-1-list-option-0'
      )

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(1)')
      .should('have.focus')
      .and('have.class', 'usa-combo-box__list-option--focused')

    // Close with up arrow.
    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(1)')
      .type('{upArrow}')
      .should('not.have.focus')
      .and('not.have.class', 'usa-combo-box__list-option--focused')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'false')

    // Open again.
    cy.get('@input').click()

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'true')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(1)'
    ).should('have.class', 'usa-combo-box__list-option--focused')

    cy.get('@status').should('contain', `${testData.length} results available.`)

    // Can't close with up arrow.
    cy.get('@input').type('{upArrow}')

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'true')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(1)'
    ).should('have.class', 'usa-combo-box__list-option--focused')

    // Open again.
    cy.get('@input').click()

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'true')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(1)'
    ).should('have.class', 'usa-combo-box__list-option--focused')

    cy.get('@status').should('contain', `${testData.length} results available.`)
  })

  it('highlight option on hover and arrow keys', () => {
    const wrapperComponent = {
      components: { UsaComboBox },
      data() {
        return {
          options: testData,
          selectedOption: '',
          id: 'arrow-key',
        }
      },
      template: `<UsaComboBox v-model="selectedOption" :options="options" :id="id" label="ComboBox"></UsaComboBox>`,
    }

    mount(wrapperComponent, {})

    cy.get('.usa-combo-box')
      .as('comboBox')
      .should('not.have.class', 'usa-combo-box--pristine')

    cy.get('input')
      .as('input')
      .should('not.have.focus')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('ul').as('list').should('be.hidden').and('have.attr', 'hidden')
    cy.get('.usa-combo-box__clear-input').as('clearButton').should('be.hidden')
    cy.get('.usa-combo-box__toggle-list').as('toggleButton').should('exist')
    cy.get('.usa-combo-box__status').as('status').should('be.empty')

    // Highlight first option.
    cy.get('@input').type('{downArrow}')

    cy.get('@input')
      .should('not.have.focus')
      .and('have.attr', 'aria-expanded', 'true')
      .and('have.attr', 'aria-activedescendant', 'arrow-key-list-option-0')

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(1)')
      .should('have.class', 'usa-combo-box__list-option--focused')
      .and('have.focus')

    // Highlight second option.
    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(1)'
    ).type('{downArrow}')

    cy.get('@input').should(
      'have.attr',
      'aria-activedescendant',
      'arrow-key-list-option-1'
    )

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(1)')
      .should('not.have.focus')
      .and('not.have.class', 'usa-combo-box__list-option--focused')

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(2)')
      .should('have.class', 'usa-combo-box__list-option--focused')
      .and('have.focus')

    // Highlight third option.
    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(2)'
    ).type('{downArrow}')

    cy.get('@input').should(
      'have.attr',
      'aria-activedescendant',
      'arrow-key-list-option-2'
    )

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(2)')
      .should('not.have.focus')
      .and('not.have.class', 'usa-combo-box__list-option--focused')

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(3)')
      .should('have.class', 'usa-combo-box__list-option--focused')
      .and('have.focus')

    // Highlight second option again.
    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(3)')
      .type('{upArrow}')
      .should('not.have.class', 'usa-combo-box__list-option--focused')
      .and('not.have.focus')

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(2)')
      .should('have.class', 'usa-combo-box__list-option--focused')
      .and('have.focus')

    // Highlight third option with mouseover.
    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(3)')
      .trigger('mouseover')
      .should('have.class', 'usa-combo-box__list-option--focused')
      .and('have.focus')

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(2)')
      .should('not.have.focus')
      .and('not.have.class', 'usa-combo-box__list-option--focused')

    // Highlight last option with mouseover.
    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(64)')
      .trigger('mouseover')
      .should('have.class', 'usa-combo-box__list-option--focused')
      .and('have.focus')

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(3)')
      .should('not.have.focus')
      .and('not.have.class', 'usa-combo-box__list-option--focused')

    // Can't highlight past last item.
    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(64)')
      .type('{downArrow}')
      .should('have.focus')
      .should('have.class', 'usa-combo-box__list-option--focused')
  })

  it('select option with tab key', () => {
    const wrapperComponent = {
      components: { UsaComboBox },
      data() {
        return {
          options: testData,
          selectedOption: '',
          id: 'tab',
        }
      },
      template: `<UsaComboBox v-model="selectedOption" :options="options" :id="id" label="ComboBox"></UsaComboBox>`,
    }

    mount(wrapperComponent, {})

    cy.get('.usa-combo-box')
      .as('comboBox')
      .should('not.have.class', 'usa-combo-box--pristine')

    cy.get('input')
      .as('input')
      .should('not.have.focus')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('ul').as('list').should('be.hidden').and('have.attr', 'hidden')
    cy.get('.usa-combo-box__clear-input').as('clearButton').should('be.hidden')
    cy.get('.usa-combo-box__toggle-list').as('toggleButton').should('exist')
    cy.get('.usa-combo-box__status').as('status').should('be.empty')

    cy.get('@input').click()

    // Highlight last option with mouseover.
    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(64)')
      .trigger('mouseover')
      .should('have.class', 'usa-combo-box__list-option--focused')
      .and('have.focus')

    // Select option by pressing tab.
    cy.realPress('Tab')

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(64)')
      .should('not.have.focus')
      .should('not.have.class', 'usa-combo-box__list-option--focused')
      .should('have.class', 'usa-combo-box__list-option--selected')
      .and('have.attr', 'aria-selected', 'true')

    cy.get('@comboBox').should('have.class', 'usa-combo-box--pristine')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')

    cy.get('@input').should('have.focus').and('have.value', 'Yuzu')

    cy.get('@clearButton').should('be.visible')

    // Tab to clear button.
    cy.realPress('Tab')

    cy.get('@input').should('not.have.focus').and('have.value', 'Yuzu')

    // Clear input.
    cy.get('@clearButton').should('have.focus').click()
    cy.get('@clearButton').should('not.have.focus')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')

    cy.get('@input').should('have.focus').and('have.value', '')

    // Open with toggle button.
    cy.get('@toggleButton').click()
    cy.get('@toggleButton').should('not.have.focus')

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'true')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:first-child'
    ).should('have.class', 'usa-combo-box__list-option--focused')

    cy.get('@status').should('contain', `${testData.length} results available.`)

    // Close with toggle button.
    cy.get('@toggleButton').click()
    cy.get('@toggleButton').should('not.have.focus')

    cy.get('@input')
      .should('have.focus')
      .and('have.value', '')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:first-child'
    ).should('not.have.class', 'usa-combo-box__list-option--focused')
  })

  it('options are filtered by typing', () => {
    const wrapperComponent = {
      components: { UsaComboBox },
      data() {
        return {
          options: testData,
          selectedOption: '',
          id: 'filtered',
        }
      },
      template: `<UsaComboBox v-model="selectedOption" :options="options" :id="id" label="ComboBox"></UsaComboBox>`,
    }

    mount(wrapperComponent, {})

    cy.get('.usa-combo-box')
      .as('comboBox')
      .should('not.have.class', 'usa-combo-box--pristine')

    cy.get('input')
      .as('input')
      .should('not.have.focus')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('ul').as('list').should('be.hidden').and('have.attr', 'hidden')
    cy.get('.usa-combo-box__clear-input').as('clearButton').should('be.hidden')
    cy.get('.usa-combo-box__toggle-list').as('toggleButton').should('exist')
    cy.get('.usa-combo-box__status').as('status').should('be.empty')

    cy.get('@input').click().type('APPLE')

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'true')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')
    cy.get('@list').children().should('have.length', 4)

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:first-child'
    ).should('have.class', 'usa-combo-box__list-option--focused')

    cy.get('@status').should('contain', '4 results available.')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(1)'
    ).should('contain', 'Apple')
    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(2)'
    ).should('contain', 'Crab apple')
    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(3)'
    ).should('contain', 'Custard apple')
    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(4)'
    ).should('contain', 'Pineapple')
  })

  it('can select option with mouse click', () => {
    const wrapperComponent = {
      components: { UsaComboBox },
      data() {
        return {
          options: testData,
          selectedOption: '',
          id: 'mouse-click',
          customClasses: {},
        }
      },
      template: `<UsaComboBox v-model="selectedOption" :options="options" :id="id" label="ComboBox" :custom-classes="customClasses"></UsaComboBox>`,
    }

    mount(wrapperComponent, {})

    cy.get('.usa-combo-box')
      .as('comboBox')
      .should('not.have.class', 'usa-combo-box--pristine')

    cy.get('input')
      .as('input')
      .should('not.have.focus')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('ul').as('list').should('be.hidden').and('have.attr', 'hidden')
    cy.get('.usa-combo-box__clear-input').as('clearButton').should('be.hidden')
    cy.get('.usa-combo-box__toggle-list').as('toggleButton').should('exist')
    cy.get('.usa-combo-box__status').as('status').should('be.empty')

    cy.get('@input')
      .type('apple')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'true')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')
    cy.get('@list').children().should('have.length', 4)

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:first-child'
    ).should('have.class', 'usa-combo-box__list-option--focused')

    cy.get('@status').should('contain', '4 results available.')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(1)'
    ).should('contain', 'Apple')
    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(2)'
    ).should('contain', 'Crab apple')
    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(3)'
    ).should('contain', 'Custard apple')
    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(4)'
    ).should('contain', 'Pineapple')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:nth-child(3)'
    ).click()

    cy.get('@input')
      .should('have.focus')
      .and('have.value', 'Custard apple')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@comboBox').should('have.class', 'usa-combo-box--pristine')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option').should(
      'not.have.class',
      'usa-combo-box__list-option--focused'
    )

    cy.get('@input').type(' ').should('have.value', 'Custard apple ')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')
    cy.get('@list').children().should('have.length', 1)

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option--no-results')
      .should('contain', 'No results found')
      .and('not.have.class', 'usa-combo-box__list-option--focused')

    cy.get('@status').should('contain', 'No results.')

    // Remove space.
    cy.get('@input').type('{backspace}').should('have.value', 'Custard apple')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')
    cy.get('@list').children().should('have.length', 1)

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option:first-child'
    ).should('have.class', 'usa-combo-box__list-option--focused')

    cy.get('@status').should('contain', '1 result available.')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option[data-value="custard apple"]'
    )
      .should('not.have.focus')
      .and('have.class', 'usa-combo-box__list-option--focused')
      .and('have.class', 'usa-combo-box__list-option--selected')
      .and('have.attr', 'aria-selected', 'true')

    cy.get('@toggleButton').click()

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')

    cy.get('@toggleButton').click()

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'true')
      .and('have.attr', 'aria-activedescendant', 'mouse-click-list-option-15')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option[data-value="custard apple"]'
    )
      .should('not.have.focus')
      .and('have.class', 'usa-combo-box__list-option--focused')
      .and('have.class', 'usa-combo-box__list-option--selected')
      .and('have.attr', 'aria-selected', 'true')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option[data-value="cherry"]'
    ).trigger('mouseover')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option[data-value="custard apple"]'
    )
      .should('not.have.focus')
      .and('not.have.class', 'usa-combo-box__list-option--focused')
      .and('have.attr', 'aria-selected', 'true')
  })

  it('can tab to selected option', () => {
    const wrapperComponent = {
      components: { UsaComboBox },
      data() {
        return {
          options: testData,
          selectedOption: 'strawberry',
          id: 'tab-selected',
        }
      },
      template: `<UsaComboBox v-model="selectedOption" :options="options"  :id="id" label="ComboBox"></UsaComboBox>`,
    }

    mount(wrapperComponent, {})

    cy.get('.usa-combo-box')
      .as('comboBox')
      .should('have.class', 'usa-combo-box--pristine')

    cy.get('input')
      .as('input')
      .should('not.have.focus')
      .and('have.value', 'Strawberry')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('ul').as('list').should('be.hidden').and('have.attr', 'hidden')
    cy.get('.usa-combo-box__clear-input').as('clearButton').should('be.visible')
    cy.get('.usa-combo-box__toggle-list').as('toggleButton').should('exist')
    cy.get('.usa-combo-box__status').as('status').should('be.empty')

    cy.get('@toggleButton').click()
    cy.get('@input').should('have.focus')

    cy.realPress('Tab')
    cy.get('@clearButton').should('have.focus')

    cy.realPress('Tab')
    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option[data-value="strawberry"]'
    )
      .should('be.visible')
      .and('have.focus')
  })

  it('can select option with enter key', () => {
    const wrapperComponent = {
      components: { UsaComboBox },
      data() {
        return {
          options: testData,
          selectedOption: '',
          id: 'enter-key',
        }
      },
      template: `<UsaComboBox v-model="selectedOption" :options="options"  :id="id" label="ComboBox"></UsaComboBox>`,
    }

    mount(wrapperComponent, {})

    cy.get('.usa-combo-box')
      .as('comboBox')
      .should('not.have.class', 'usa-combo-box--pristine')

    cy.get('input')
      .as('input')
      .should('not.have.focus')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('ul').as('list').should('be.hidden').and('have.attr', 'hidden')
    cy.get('.usa-combo-box__clear-input').as('clearButton').should('be.hidden')
    cy.get('.usa-combo-box__toggle-list').as('toggleButton').should('exist')
    cy.get('.usa-combo-box__status').as('status').should('be.empty')

    cy.get('@input').click()

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'true')
    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')
    cy.get('@clearButton').should('be.hidden')
    cy.get('@status').should('contain', '64 results available.')

    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option[data-value="cherry"]'
    )
      .as('cherryOption')
      .trigger('mouseover')

    cy.get('@cherryOption').should('be.visible')

    cy.get('@input').should(
      'have.attr',
      'aria-activedescendant',
      'enter-key-list-option-14'
    )

    cy.get('@comboBox').should('not.have.class', 'usa-combo-box--pristine')

    cy.get('@cherryOption')
      .should('have.focus')
      .and('have.class', 'usa-combo-box__list-option--focused')
      .and('not.have.class', 'usa-combo-box__list-option--selected')
      .and('have.attr', 'aria-selected', 'false')
      .type('{enter}')

    cy.get('@comboBox').should('have.class', 'usa-combo-box--pristine')
    cy.get('@clearButton').should('be.visible')

    cy.get('@cherryOption')
      .should('not.have.focus')
      .and('not.have.class', 'usa-combo-box__list-option--focused')
      .and('have.class', 'usa-combo-box__list-option--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('be.hidden')

    cy.get('@status').should('be.empty')

    cy.get('@input')
      .should('have.focus')
      .and('have.value', 'Cherry')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')

    cy.get('@input').click()

    cy.get('@comboBox').should('have.class', 'usa-combo-box--pristine')
    cy.get('@clearButton').should('be.visible')
    cy.get('@status').should('contain', '64 results available.')

    cy.get('@input')
      .should('have.focus')
      .and('have.attr', 'aria-expanded', 'true')
      .and('have.attr', 'aria-activedescendant', 'enter-key-list-option-14')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')

    cy.get('@cherryOption')
      .should('not.have.focus')
      .and('have.class', 'usa-combo-box__list-option--focused')
      .and('have.class', 'usa-combo-box__list-option--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('be.visible')

    cy.get('@toggleButton').click()

    cy.get('@input')
      .should('have.focus')
      .and('have.value', 'Cherry')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')
    cy.get('@status').should('be.empty')

    cy.get('@cherryOption')
      .should('not.have.focus')
      .and('not.have.class', 'usa-combo-box__list-option--focused')
      .and('have.class', 'usa-combo-box__list-option--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('be.hidden')

    cy.get('@input').type('{downArrow}')

    cy.get('@input')
      .should('have.attr', 'aria-expanded', 'true')
      .and('have.attr', 'aria-activedescendant', 'enter-key-list-option-14')

    cy.get('@cherryOption')
      .should('have.focus')
      .and('have.class', 'usa-combo-box__list-option--focused')
      .and('have.class', 'usa-combo-box__list-option--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('be.visible')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')
    cy.get('@status').should('contain', '64 results available.')

    cy.get('@input').type(' ').type('{downArrow}')

    cy.get('@input')
      .should('have.focus')
      .and('have.value', 'Cherry ')
      .and('have.attr', 'aria-expanded', 'true')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.visible').and('not.have.attr', 'hidden')
    cy.get('@list').children().should('have.length', 1)

    cy.get('@cherryOption').should('not.exist')

    cy.get('.usa-combo-box__list > li.usa-combo-box__list-option--no-results')
      .should('contain', 'No results found')
      .and('not.have.class', 'usa-combo-box__list-option--focused')

    cy.get('@status').should('contain', 'No results.')

    cy.get('@input').type('{backspace}')

    cy.get('@status').should('contain', '1 result available.')

    cy.get('@input').type('{enter}')

    cy.get('@input')
      .should('have.focus')
      .and('have.value', 'Cherry')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')

    cy.get('@cherryOption')
      .should('not.have.focus')
      .and('not.have.class', 'usa-combo-box__list-option--focused')
      .and('have.class', 'usa-combo-box__list-option--selected')
      .and('have.attr', 'aria-selected', 'true')

    cy.get('@clearButton').click()

    cy.get('@input').type('Lime')

    cy.get('@status').should('contain', '1 result available.')

    cy.get('@input').type('{enter}')

    cy.get('@status').should('be.empty')

    cy.get('@input')
      .should('have.focus')
      .and('have.value', 'Lime')
      .and('have.attr', 'aria-expanded', 'false')
      .and('not.have.attr', 'aria-activedescendant')

    cy.get('@list').should('be.hidden').and('have.attr', 'hidden')
  })

  it('clear and toggle buttons use custom aria-label attribute values', () => {
    mount(UsaComboBox, {
      props: {
        options: testData,
        clearButtonAriaLabel: 'Test clear button aria label',
        toggleButtonAriaLabel: 'Test toggle button aria label',
      },
    })

    cy.get(
      '.usa-combo-box__clear-input__wrapper > button.usa-combo-box__clear-input'
    ).should('have.attr', 'aria-label', 'Test clear button aria label')

    cy.get(
      '.usa-combo-box__toggle-list__wrapper > button.usa-combo-box__toggle-list'
    ).should('have.attr', 'aria-label', 'Test toggle button aria label')
  })

  it('uses custom id prop value to generate element ids', () => {
    mount(UsaComboBox, {
      props: {
        options: falsyTestData,
        id: 'test-combo-box-id',
        label: 'Test combo box label',
      },
      slots: {
        label: () => 'Test label slot',
        hint: () => 'Test hint slot',
        'error-message': () => 'Test error slot',
      },
    }).as('wrapper')

    cy.get('.usa-form-group').should('exist')

    cy.get('label')
      .should('have.id', 'test-combo-box-id-label')
      .and('contain', 'Test label slot')

    cy.get('.usa-hint').should('have.id', 'test-combo-box-id-hint')

    cy.get('.usa-error-message').should('not.exist')

    cy.get('input').should('have.id', 'test-combo-box-id')

    cy.get('ul').should('have.id', 'test-combo-box-id-list')

    cy.get('li:nth-of-type(1)').should(
      'have.id',
      'test-combo-box-id-list-option-0'
    )
    cy.get('li:nth-of-type(2)').should(
      'have.id',
      'test-combo-box-id-list-option-1'
    )
    cy.get('li:nth-of-type(3)').should(
      'have.id',
      'test-combo-box-id-list-option-2'
    )
    cy.get('li:nth-of-type(4)').should(
      'have.id',
      'test-combo-box-id-list-option-3'
    )
    cy.get('li:nth-of-type(5)').should(
      'have.id',
      'test-combo-box-id-list-option-4'
    )
    cy.get('li:nth-of-type(6)').should(
      'have.id',
      'test-combo-box-id-list-option-5'
    )

    cy.get('.usa-combo-box__status + span.usa-sr-only').should(
      'have.id',
      'test-combo-box-id-assistive-hint'
    )

    cy.get('@wrapper').invoke('setProps', { error: true })

    cy.get('.usa-error-message').should(
      'have.id',
      'test-combo-box-id-error-message'
    )
  })

  it('displays error message even if no hint set', () => {
    mount(UsaComboBox, {
      props: {
        options: testData,
        error: true,
      },
      slots: {
        'error-message': () => 'Test error slot',
      },
    }).as('wrapper')

    cy.get('.usa-form-group').should('exist')
    cy.get('label').should('not.exist')

    cy.get('.usa-hint').should('not.exist')

    cy.get('.usa-error-message')
      .should('contain', 'Test error slot')
      .and('be.visible')

    cy.get('@wrapper').invoke('setProps', { error: false })

    cy.get('.usa-form-group').should('not.exist')

    cy.get('.usa-error-message').should('not.exist')
  })

  it('`disabled` prop makes component non-interactive', () => {
    const wrapperComponent = {
      components: { UsaComboBox },
      data() {
        return {
          options: testData,
          selectedOption: '',
          disabled: true,
        }
      },
      template: `<UsaComboBox v-model="selectedOption" :options="options" label="Disabled ComboBox" :disabled="disabled"></UsaComboBox>`,
    }

    mount(wrapperComponent, {})

    cy.get('input').should('not.have.focus').and('have.attr', 'disabled')
    cy.get('input').click({ force: true })
    cy.get('input').should('not.have.focus')

    cy.get('.usa-combo-box__clear-input')
      .should('not.have.focus')
      .and('have.attr', 'disabled')

    cy.get('.usa-combo-box__clear-input').click({ force: true })
    cy.get('.usa-combo-box__clear-input').should('not.have.focus')

    cy.get('.usa-combo-box__toggle-list')
      .should('not.have.focus')
      .and('have.attr', 'disabled')

    cy.get('.usa-combo-box__toggle-list').click({ force: true })
    cy.get('.usa-combo-box__toggle-list').should('not.have.focus')
  })

  it('`readonly` prop makes component non-interactive', () => {
    const wrapperComponent = {
      components: { UsaComboBox },
      data() {
        return {
          options: testData,
          selectedOption: 'persimmon',
          readonly: true,
        }
      },
      template: `<UsaComboBox v-model="selectedOption" :options="options" label="Readonly ComboBox" :readonly="readonly"></UsaComboBox>`,
    }

    mount(wrapperComponent, {}).as('wrapper')

    cy.get('input').should('not.have.focus').and('have.attr', 'readonly')
    cy.get('input').click({ force: true })
    cy.get('input').should('have.focus')

    cy.get('.usa-combo-box__clear-input')
      .should('not.have.focus')
      .and('have.attr', 'disabled')
    cy.get('.usa-combo-box__clear-input').click({ force: true })
    cy.get('.usa-combo-box__clear-input').should('not.have.focus')

    cy.get('.usa-combo-box__toggle-list')
      .should('not.have.focus')
      .and('have.attr', 'disabled')
    cy.get('.usa-combo-box__toggle-list').click({ force: true })
    cy.get('.usa-combo-box__toggle-list').should('not.have.focus')

    cy.get('@wrapper').invoke('setProps', { modalValue: 'tamarind' })
    cy.get('input').should('have.value', 'Persimmon')
  })

  it('uses custom CSS classes', () => {
    mount(UsaComboBox, {
      props: {
        label: 'Custom ComboBox',
        options: testData,
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
        hint: () => 'Test hint',
      },
    })

    cy.get('.usa-form-group')
      .should('have.class', 'test-form-group-class')
      .and('not.have.attr', 'data-test')

    cy.get('.usa-combo-box').should('have.class', 'test-component-class')

    cy.get('label').should('have.class', 'test-label-class')

    cy.get('input')
      .should('have.class', 'test-input-class')
      .and('have.attr', 'data-test', 'test-attribute')

    cy.get('ul').should('have.class', 'test-list-class')
  })

  it('custom empty and assistive hint slot text', () => {
    mount(UsaComboBox, {
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

  it('uses status scoped slot content', () => {
    mount(UsaComboBox, {
      props: {
        options: testData,
      },
      slots: {
        status: ({ filteredOptions }) => `total: ${filteredOptions.length}`,
      },
    })

    cy.get('.usa-combo-box__status').as('status').should('be.empty')

    cy.get('input').as('input').click()

    cy.get('@input').should('have.focus')

    cy.get('ul').should('be.visible')

    cy.get('@status').should('contain', 'total: 64')

    cy.get('@input').type('Apple')

    cy.get('@status').should('contain', 'total: 4')

    cy.get('@input').clear().type('Pineapple')

    cy.get('@status').should('contain', 'total: 1')

    cy.get('@input').type('2')

    cy.get('@status').should('contain', 'total: 0')

    cy.get('@input').type('{backspace}')

    cy.get('@status').should('contain', 'total: 1')
  })

  it('shows required field indicators', () => {
    mount(UsaComboBox, {
      props: {
        label: 'Is Required',
        options: testData,
        required: true,
      },
    })

    cy.get('label abbr')
      .should('have.attr', 'title', 'required')
      .and('contain', '*')

    cy.get('input').should('have.attr', 'required')
  })

  it('adds correct aria-describedby ids', () => {
    mount(UsaComboBox, {
      props: {
        label: 'aria-describedby',
        options: testData,
        id: 'custom-test-id',
      },
      slots: {
        hint: () => 'Test hint',
        'error-message': () => 'Test error message',
      },
    }).as('wrapper')

    cy.get('input')
      .as('input')
      .should(
        'have.attr',
        'aria-describedby',
        'custom-test-id-assistive-hint custom-test-id-hint'
      )

    cy.get('@wrapper').invoke('setProps', { error: true })

    cy.get('input')
      .as('input')
      .should(
        'have.attr',
        'aria-describedby',
        'custom-test-id-assistive-hint custom-test-id-hint custom-test-id-error-message'
      )
  })

  it('starts with default value', () => {
    const wrapperComponent = {
      components: { UsaComboBox },
      data() {
        return {
          options: testData,
          selectedOption: 'nectarine',
          id: 'default-value',
        }
      },
      template: `<UsaComboBox v-model="selectedOption" :options="options" label="Default value" :id="id"></UsaComboBox>`,
    }

    mount(wrapperComponent, {})

    cy.get('input').should('have.value', 'Nectarine')
    cy.get(
      '.usa-combo-box__list > li.usa-combo-box__list-option[data-value="nectarine"]'
    )
      .should('have.class', 'usa-combo-box__list-option--selected')
      .and('have.attr', 'aria-selected', 'true')
  })

  it('component emits v-model event', () => {
    mount(UsaComboBox, {
      props: {
        label: 'Emitted',
        options: testData,
      },
    }).as('wrapper')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:modalValue')
      })

    cy.get('input').click()

    cy.get('li:first-child').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentSelectedEvent = vm.emitted('update:modelValue')
        expect(currentSelectedEvent).to.have.length(1)
        expect(
          currentSelectedEvent[currentSelectedEvent.length - 1]
        ).to.contain('apple')
      })
  })
})
