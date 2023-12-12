import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaDatePickerCalendarYear from './UsaDatePickerCalendarYear.vue'

describe('UsaDatePickerCalendarYear', () => {
  it('renders the component', () => {
    const wrapperComponent = {
      components: { UsaDatePickerCalendarYear },
      data() {
        return {
          selectorMode: 'year',
          selectedYear: 2023,
          activeDate: '2023-08-07',
          minDate: '1996-05-07',
          maxDate: '2038-11-07',
          previousYearsButtonLabel: 'Navigate back 12 years',
          nextYearsButtonLabel: 'Navigate forward 12 years',
        }
      },
      computed: {
        isOpen() {
          return this.selectorMode === 'year'
        },
      },
      template: `<template v-if="isOpen">
        <UsaDatePickerCalendarYear
          v-model:selector-mode="selectorMode"
          :selected-year="selectedYear"
          :active-date="activeDate"
          :min-date="minDate"
          :max-date="maxDate"
          :previous-years-button-label="previousYearsButtonLabel"
          :next-years-button-label="nextYearsButtonLabel"
        ></UsaDatePickerCalendarYear>
      </template>`,
    }

    cy.mount(wrapperComponent, {})

    cy.get('div.usa-date-picker__calendar__year-picker').should(
      'have.attr',
      'tabindex',
      '-1'
    )

    cy.get('.usa-date-picker__calendar__year-picker > table')
      .should('have.attr', 'role', 'presentation')
      .and('have.class', 'usa-date-picker__calendar__table')

    cy.get('.usa-date-picker__calendar__year-picker > table > tbody').should(
      'exist'
    )

    cy.get('.usa-date-picker__calendar__year-picker > table > tbody > tr')
      .as('table')
      .should('have.length', 1)

    cy.get('@table').find('> td').should('have.length', 3)

    cy.get('@table')
      .find('> td:nth-of-type(1) button')
      .as('previousButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back 12 years')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('have.class', 'usa-date-picker__calendar__previous-year-chunk')
      .and('contain', '\u00a0')

    cy.get('@table')
      .find('> td:nth-of-type(2)')
      .should('have.attr', 'colspan', '3')

    cy.get('@table')
      .find('> td:nth-of-type(2) > table.usa-date-picker__calendar__table')
      .should('have.attr', 'role', 'presentation')

    cy.get('@table')
      .find(
        '> td:nth-of-type(2) > table.usa-date-picker__calendar__table > tbody'
      )
      .as('buttonTable')
      .should('exist')

    cy.get('@table')
      .find('> td:nth-of-type(3) button')
      .as('nextButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward 12 years')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('have.class', 'usa-date-picker__calendar__next-year-chunk')
      .and('contain', '\u00a0')

    // Check button cell values.
    cy.get('@buttonTable').find('> tr').should('have.length', 4)

    cy.get('@buttonTable').find('> tr > td').should('have.length', 12)

    cy.get('@buttonTable')
      .find('> tr > td > button')
      .should('have.attr', 'type', 'button')
      .and('have.class', 'usa-date-picker__calendar__year')
      .and('have.length', 12)

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(1) button')
      .as('button1')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2016')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2016')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(2) button')
      .as('button2')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2017')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2017')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(3) button')
      .as('button3')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2018')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2018')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(1) button')
      .as('button4')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2019')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2019')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(2) button')
      .as('button5')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2020')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2020')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(3) button')
      .as('button6')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2021')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2021')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(1) button')
      .as('button7')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2022')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2022')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(2) button')
      .as('button8')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2023')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.focus')
      .and('contain', '2023')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(3) button')
      .as('button9')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2024')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2024')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(1) button')
      .as('button10')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2025')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2025')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(2) button')
      .as('button11')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2026')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2026')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(3) button')
      .as('button12')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2027')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2027')

    // Up arrow key.
    cy.get('@button8').type('{upArrow}')

    cy.get('@button8')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2023')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('not.have.focus')
      .and('contain', '2023')

    cy.get('@button5')
      .should('have.focus')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2020')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.focus')
      .and('contain', '2020')

    // Right arrow key.
    cy.get('@button5').type('{rightArrow}')

    cy.get('@button5')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2020')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('not.have.focus')
      .and('contain', '2020')

    cy.get('@button8')
      .should('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.focus')

    cy.get('@button6')
      .should('have.focus')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2021')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.focus')
      .and('contain', '2021')

    // Down arrow key.
    cy.get('@button6').type('{downArrow}')

    cy.get('@button6')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2021')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('not.have.focus')
      .and('contain', '2021')

    cy.get('@button8')
      .should('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.focus')

    cy.get('@button9')
      .should('have.focus')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2024')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.focus')
      .and('contain', '2024')

    // Hover.
    cy.get('@button12').trigger('mouseover')

    cy.get('@button12')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2027')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.focus')
      .and('contain', '2027')

    cy.get('@button8')
      .should('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.focus')

    // Left arrow key.
    cy.get('@button12').type('{leftArrow}')

    cy.get('@button12')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2027')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('not.have.focus')
      .and('contain', '2027')

    cy.get('@button8')
      .should('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.focus')

    cy.get('@button11')
      .should('have.focus')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2026')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.focus')
      .and('contain', '2026')

    // End key.
    cy.get('@button11').type('{end}')

    cy.get('@button11')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2026')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('not.have.focus')
      .and('contain', '2026')

    cy.get('@button8')
      .should('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.focus')

    cy.get('@button12')
      .should('have.focus')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2027')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.focus')
      .and('contain', '2027')

    // Home key.
    cy.get('@button12').type('{home}')

    cy.get('@button12')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2027')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('not.have.focus')
      .and('contain', '2027')

    cy.get('@button8')
      .should('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.focus')

    cy.get('@button10')
      .should('have.focus')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2025')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.focus')
      .and('contain', '2025')

    // End key again.
    cy.get('@button10').type('{end}')

    cy.get('@button10')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2025')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('not.have.focus')
      .and('contain', '2025')

    cy.get('@button8')
      .should('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.focus')

    cy.get('@button12')
      .should('have.focus')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2027')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.focus')
      .and('contain', '2027')

    // Page Up key.
    cy.get('@button12').type('{pageUp}')

    cy.get('@button12')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2015')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.focus')
      .and('contain', '2015')

    cy.get('@button8')
      .should('not.have.attr', 'aria-selected', 'true')
      .and('not.have.attr', 'tabindex', '0')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.focus')

    // Check years 2004-2015 are correct.
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(1) button')
      .as('button1')
      .should('contain', '2004')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(2) button')
      .as('button2')
      .should('contain', '2005')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(3) button')
      .as('button3')
      .should('contain', '2006')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(1) button')
      .as('button4')
      .should('contain', '2007')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(2) button')
      .as('button5')
      .should('contain', '2008')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(3) button')
      .as('button6')
      .should('contain', '2009')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(1) button')
      .as('button7')
      .should('contain', '2010')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(2) button')
      .as('button8')
      .should('contain', '2011')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(3) button')
      .as('button9')
      .should('contain', '2012')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(1) button')
      .as('button10')
      .should('contain', '2013')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(2) button')
      .as('button11')
      .should('contain', '2014')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(3) button')
      .as('button12')
      .should('contain', '2015')

    for (let i = 1; i <= 11; i++) {
      cy.get(`@button${i}`)
        .should('not.have.attr', 'disabled', 'disabled')
        .and('not.have.attr', 'aria-selected', 'true')
        .and('have.attr', 'tabindex', '-1')
        .and('have.attr', 'data-value', 2003 + i)
        .and('not.have.class', 'usa-date-picker__calendar__year--selected')
        .and('not.have.class', 'usa-date-picker__calendar__year--focused')
        .and('not.have.focus')
        .and('contain', 2003 + i)
    }

    for (let i = 12; i > 1; i--) {
      cy.get(`@button${i}`).type('{leftArrow}')

      cy.get(`@button${i}`)
        .should('not.have.attr', 'disabled', 'disabled')
        .and('not.have.attr', 'aria-selected', 'true')
        .and('have.attr', 'tabindex', '-1')
        .and('have.attr', 'data-value', 2003 + i)
        .and('not.have.class', 'usa-date-picker__calendar__year--selected')
        .and('not.have.class', 'usa-date-picker__calendar__year--focused')
        .and('not.have.focus')
        .and('contain', 2003 + i)

      cy.get(`@button${i - 1}`)
        .should('have.focus')
        .and('not.have.attr', 'disabled', 'disabled')
        .and('not.have.attr', 'aria-selected', 'true')
        .and('have.attr', 'tabindex', '0')
        .and('have.attr', 'data-value', 2003 + (i - 1))
        .and('not.have.class', 'usa-date-picker__calendar__year--selected')
        .and('have.class', 'usa-date-picker__calendar__year--focused')
        .and('have.focus')
        .and('contain', 2003 + (i - 1))
    }

    cy.get('@button1').type('{leftArrow}')

    cy.get('@previousButton').should('have.attr', 'disabled', 'disabled')
    cy.get('@nextButton').should('not.have.attr', 'disabled', 'disabled')

    // Check years 1996-2003 are correct.
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(1) button')
      .as('button1')
      .should('contain', '1992')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(2) button')
      .as('button2')
      .should('contain', '1993')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(3) button')
      .as('button3')
      .should('contain', '1994')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(1) button')
      .as('button4')
      .should('contain', '1995')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(2) button')
      .as('button5')
      .should('contain', '1996')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(3) button')
      .as('button6')
      .should('contain', '1997')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(1) button')
      .as('button7')
      .should('contain', '1998')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(2) button')
      .as('button8')
      .should('contain', '1999')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(3) button')
      .as('button9')
      .should('contain', '2000')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(1) button')
      .as('button10')
      .should('contain', '2001')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(2) button')
      .as('button11')
      .should('contain', '2002')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(3) button')
      .as('button12')
      .should('contain', '2003')

    for (let i = 12; i > 5; i--) {
      cy.get(`@button${i}`).type('{leftArrow}')

      cy.get(`@button${i}`)
        .should('not.have.attr', 'disabled', 'disabled')
        .and('not.have.attr', 'aria-selected', 'true')
        .and('have.attr', 'tabindex', '-1')
        .and('have.attr', 'data-value', 1991 + i)
        .and('not.have.class', 'usa-date-picker__calendar__year--selected')
        .and('not.have.class', 'usa-date-picker__calendar__year--focused')
        .and('not.have.focus')
        .and('contain', 1991 + i)

      cy.get(`@button${i - 1}`)
        .should('have.focus')
        .and('not.have.attr', 'disabled', 'disabled')
        .and('not.have.attr', 'aria-selected', 'true')
        .and('have.attr', 'tabindex', '0')
        .and('have.attr', 'data-value', 1991 + (i - 1))
        .and('not.have.class', 'usa-date-picker__calendar__year--selected')
        .and('have.class', 'usa-date-picker__calendar__year--focused')
        .and('have.focus')
        .and('contain', 1991 + (i - 1))
    }

    cy.get('@button5').type('{leftArrow}')

    cy.get('@button4')
      .should('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('not.have.attr', 'tabindex', '0')
      .and('not.have.focus')

    cy.get('@button5')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.attr', 'tabindex', '0')
      .and('have.focus')

    cy.get('@button5').type('{pageUp}')

    cy.get('@button4')
      .should('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('not.have.attr', 'tabindex', '0')
      .and('not.have.focus')

    cy.get('@button5')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.attr', 'tabindex', '0')
      .and('have.focus')

    cy.get('@nextButton').click()

    cy.get('@previousButton').should('not.have.attr', 'disabled', 'disabled')
    cy.get('@nextButton')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('have.focus')

    // Test year 2004-2015 are correct.
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(1) button')
      .as('button1')
      .should('contain', '2004')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(2) button')
      .as('button2')
      .should('contain', '2005')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(3) button')
      .as('button3')
      .should('contain', '2006')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(1) button')
      .as('button4')
      .should('contain', '2007')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(2) button')
      .as('button5')
      .should('contain', '2008')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(3) button')
      .as('button6')
      .should('contain', '2009')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(1) button')
      .as('button7')
      .should('contain', '2010')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(2) button')
      .as('button8')
      .should('contain', '2011')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(3) button')
      .as('button9')
      .should('contain', '2012')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(1) button')
      .as('button10')
      .should('contain', '2013')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(2) button')
      .as('button11')
      .should('contain', '2014')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(3) button')
      .as('button12')
      .should('contain', '2015')

    cy.get('@button5')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.attr', 'tabindex', '0')
      .and('contain', '2008')

    cy.realPress('Tab')

    cy.get('@nextButton').should('not.have.focus')

    cy.get('@previousButton').should('have.focus')

    cy.realPress('Tab')

    cy.get('@button5')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.attr', 'tabindex', '0')
      .and('have.focus')
      .and('contain', '2008')

    cy.realPress('Tab')

    cy.get('@nextButton').should('have.focus')

    cy.get('@nextButton').type(' ')

    cy.get('@nextButton').should('have.focus')

    cy.get('@button5')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.attr', 'tabindex', '0')
      .and('contain', '2020')

    cy.get('@button8')
      .should('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.focus')

    cy.get('@button12').trigger('mouseover')
    cy.get('@button12').type('{pageDown}')

    // Test year 2028-2038 are correct.
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(1) button')
      .as('button1')
      .should('contain', '2028')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(2) button')
      .as('button2')
      .should('contain', '2029')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(3) button')
      .as('button3')
      .should('contain', '2030')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(1) button')
      .as('button4')
      .should('contain', '2031')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(2) button')
      .as('button5')
      .should('contain', '2032')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(3) button')
      .as('button6')
      .should('contain', '2033')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(1) button')
      .as('button7')
      .should('contain', '2034')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(2) button')
      .as('button8')
      .should('contain', '2035')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(3) button')
      .as('button9')
      .should('contain', '2036')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(1) button')
      .as('button10')
      .should('contain', '2037')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(2) button')
      .as('button11')
      .should('contain', '2038')
    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(3) button')
      .as('button12')
      .should('contain', '2039')

    cy.get('@button11')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.attr', 'tabindex', '0')
      .and('have.focus')
      .and('contain', '2038')

    cy.get('@button11').type('{rightArrow}')

    cy.get('@button11')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.attr', 'tabindex', '0')
      .and('have.focus')

    cy.get('@button12')
      .should('not.have.focus')
      .and('have.attr', 'disabled', 'disabled')
      .and('have.attr', 'tabindex', '-1')

    cy.get('@button11').type('{downArrow}')

    cy.get('@nextButton').should('have.attr', 'disabled', 'disabled')

    cy.get('@button11')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.attr', 'tabindex', '0')
      .and('have.focus')

    cy.get('@button12')
      .should('not.have.focus')
      .and('have.attr', 'disabled', 'disabled')
      .and('have.attr', 'tabindex', '-1')

    cy.get('@button11').type('{pageDown}')

    cy.get('@button11')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.attr', 'tabindex', '0')
      .and('have.focus')

    cy.get('@button12')
      .should('not.have.focus')
      .and('have.attr', 'disabled', 'disabled')
      .and('have.attr', 'tabindex', '-1')

    cy.get('@previousButton').click()

    cy.get('@button11').should('contain', '2026')

    cy.get('@button11').click()

    cy.get('.usa-date-picker__calendar__year-picker').should('not.exist')
  })

  it('calendar updates to reflect new selected, min, and max dates', () => {
    cy.mount(UsaDatePickerCalendarYear, {
      props: {
        selectedYear: 2022,
        activeDate: '2022-08-07',
        minDate: '2018-05-07',
        maxDate: '2025-11-07',
        previousYearsButtonLabel: 'Navigate back 12 years',
        nextYearsButtonLabel: 'Navigate forward 12 years',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-date-picker__calendar__year-picker > table > tbody > tr')
      .as('table')
      .should('have.length', 1)

    cy.get('@table')
      .find(
        '> td:nth-of-type(2) > table.usa-date-picker__calendar__table > tbody'
      )
      .as('buttonTable')
      .should('exist')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(1) button')
      .as('button1')
      .should('have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2016')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2016')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(2) button')
      .as('button2')
      .should('have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2017')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2017')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(1) > td:nth-of-type(3) button')
      .as('button3')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2018')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2018')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(1) button')
      .as('button4')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2019')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2019')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(2) button')
      .as('button5')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2020')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2020')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(3) button')
      .as('button6')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2021')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2021')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(1) button')
      .as('button7')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2022')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.focus')
      .and('contain', '2022')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(2) button')
      .as('button8')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2023')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2023')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(3) > td:nth-of-type(3) button')
      .as('button9')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2024')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2024')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(1) button')
      .as('button10')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2025')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2025')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(2) button')
      .as('button11')
      .should('have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2026')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2026')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(4) > td:nth-of-type(3) button')
      .as('button12')
      .should('have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2027')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2027')

    cy.get('@wrapper').invoke('setProps', { minDate: '1994-12-31' })
    cy.get('@wrapper').invoke('setProps', { maxDate: '2002-01-01' })
    cy.get('@wrapper').invoke('setProps', { activeDate: '1998-12-31' })
    cy.get('@wrapper').invoke('setProps', { selectedYear: 2000 })

    cy.get('@button1')
      .should('have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '1992')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '1992')

    cy.get('@button2')
      .should('have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '1993')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '1993')

    cy.get('@button3')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '1994')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '1994')

    cy.get('@buttonTable')
      .find('> tr:nth-of-type(2) > td:nth-of-type(1) button')
      .as('button4')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '1995')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '1995')

    cy.get('@button5')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '1996')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '1996')

    cy.get('@button6')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '1997')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '1997')

    cy.get('@button7')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '1998')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.class', 'usa-date-picker__calendar__year--focused')
      // .and('have.focus')
      .and('contain', '1998')

    cy.get('@button8')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '1999')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '1999')

    cy.get('@button9')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'data-value', '2000')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2000')

    cy.get('@button10')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2001')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2001')

    cy.get('@button11')
      .should('not.have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2002')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2002')

    cy.get('@button12')
      .should('have.attr', 'disabled', 'disabled')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'tabindex', '-1')
      .and('have.attr', 'data-value', '2003')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('contain', '2003')
  })

  it('uses custom button labels', () => {
    cy.mount(UsaDatePickerCalendarYear, {
      props: {
        selectorMode: 'year',
        selectedYear: 2023,
        activeDate: '2023-08-07',
        minDate: '1996-05-07',
        maxDate: '2038-11-07',
        previousYearsButtonLabel: 'Test previous button aria label',
        nextYearsButtonLabel: 'Test next button aria label',
      },
    })

    cy.get('.usa-date-picker__calendar__previous-year-chunk').should(
      'have.attr',
      'aria-label',
      'Test previous button aria label'
    )

    cy.get('.usa-date-picker__calendar__next-year-chunk').should(
      'have.attr',
      'aria-label',
      'Test next button aria label'
    )
  })

  it('emits `selectedYear`, `activeYearStart`, `activeYearEnd`, and `selectorMode` prop values', () => {
    cy.mount(UsaDatePickerCalendarYear, {
      props: {
        selectedYear: 2022,
        activeDate: '2023-08-07',
        minDate: '1900-05-07',
        maxDate: '2100-11-07',
        previousYearsButtonLabel: 'Navigate back 12 years',
        nextYearsButtonLabel: 'Navigate forward 12 years',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.not.have.property('update:selectedYear')
        expect(emitted).to.not.have.property('update:selectorMode')
        expect(emitted).to.have.property('update:activeYearStart')
        expect(emitted).to.have.property('update:activeYearEnd')

        const currentYearStartEvent = vm.emitted('update:activeYearStart')
        expect(currentYearStartEvent).to.have.length(1)
        expect(
          currentYearStartEvent[currentYearStartEvent.length - 1]
        ).to.contain(2016)

        const currentYearEndEvent = vm.emitted('update:activeYearEnd')
        expect(currentYearEndEvent).to.have.length(1)
        expect(currentYearEndEvent[currentYearEndEvent.length - 1]).to.contain(
          2027
        )
      })

    cy.get('.usa-date-picker__calendar__previous-year-chunk').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.not.have.property('update:selectedYear')
        expect(emitted).to.not.have.property('update:selectorMode')

        const currentYearStartEvent = vm.emitted('update:activeYearStart')
        expect(currentYearStartEvent).to.have.length(2)
        expect(
          currentYearStartEvent[currentYearStartEvent.length - 1]
        ).to.contain(2004)

        const currentYearEndEvent = vm.emitted('update:activeYearEnd')
        expect(currentYearEndEvent).to.have.length(2)
        expect(currentYearEndEvent[currentYearEndEvent.length - 1]).to.contain(
          2015
        )
      })

    cy.get('.usa-date-picker__calendar__next-year-chunk').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.not.have.property('update:selectedYear')
        expect(emitted).to.not.have.property('update:selectorMode')

        const currentYearStartEvent = vm.emitted('update:activeYearStart')
        expect(currentYearStartEvent).to.have.length(3)
        expect(
          currentYearStartEvent[currentYearStartEvent.length - 1]
        ).to.contain(2016)

        const currentYearEndEvent = vm.emitted('update:activeYearEnd')
        expect(currentYearEndEvent).to.have.length(3)
        expect(currentYearEndEvent[currentYearEndEvent.length - 1]).to.contain(
          2027
        )
      })

    cy.get('.usa-date-picker__calendar__next-year-chunk').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.not.have.property('update:selectedYear')
        expect(emitted).to.not.have.property('update:selectorMode')

        const currentYearStartEvent = vm.emitted('update:activeYearStart')
        expect(currentYearStartEvent).to.have.length(4)
        expect(
          currentYearStartEvent[currentYearStartEvent.length - 1]
        ).to.contain(2028)

        const currentYearEndEvent = vm.emitted('update:activeYearEnd')
        expect(currentYearEndEvent).to.have.length(4)
        expect(currentYearEndEvent[currentYearEndEvent.length - 1]).to.contain(
          2039
        )
      })

    cy.get('button[data-value="2032"').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.have.property('update:selectedYear')
        expect(emitted).to.have.property('update:selectorMode')

        const currentSelectedYearEvent = vm.emitted('update:selectedYear')
        const currentSelectorModeEvent = vm.emitted('update:selectorMode')

        expect(currentSelectorModeEvent).to.have.length(1)
        expect(
          currentSelectorModeEvent[currentSelectorModeEvent.length - 1]
        ).to.contain('day')

        expect(currentSelectedYearEvent).to.have.length(1)
        expect(
          currentSelectedYearEvent[currentSelectedYearEvent.length - 1]
        ).to.contain(2032)
      })
  })
})
