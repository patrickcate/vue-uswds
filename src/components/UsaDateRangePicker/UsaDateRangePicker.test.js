import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { addDays, subDays } from 'date-fns'
import {
  today,
  formatIsoDate,
  parseIsoDate,
  formatUsaDate,
} from '@/utils/dates.js'
import UsaDateRangePicker from './UsaDateRangePicker.vue'
import UsaDatePicker from '@/components/UsaDatePicker'

import { getTestData } from './UsaDateRangePicker.fixtures.js'

describe('UsaDateRangePicker', () => {
  it('renders the component', () => {
    const todaysDate = today()
    const {
      todaysIsoDate,
      rangeStart,
      rangeStartAlternative,
      rangeEndAlternative,
      rangeEnd,
      days,
      month,
      year,
    } = getTestData(todaysDate)

    const wrapperComponent = {
      components: { UsaDateRangePicker, UsaDatePicker },
      data() {
        return {
          startDate: '',
          endDate: '',
        }
      },
      template: `<UsaDateRangePicker>
        <UsaDatePicker
          label="Start Date"
          v-model="startDate"
          range-type="start"></UsaDatePicker>
        <UsaDatePicker
          label="End Date"
          v-model="endDate"
          range-type="end"></UsaDatePicker>
      </UsaDateRangePicker>`,
    }

    mount(wrapperComponent, {})

    cy.get('.usa-date-range-picker').should('exist')

    cy.get('.usa-date-range-picker__range-start').should('exist')
    cy.get('.usa-date-range-picker label:first-of-type')
      .should('have.class', 'usa-label')
      .and('contain', 'Start Date')
    cy.get(
      '.usa-date-range-picker__range-start .usa-date-picker__external-input'
    )
      .as('startDateInput')
      .should('have.class', 'usa-input')
      .and('not.have.value')

    cy.get('.usa-date-range-picker__range-start .usa-date-picker__button')
      .as('startToggleButton')
      .should('have.attr', 'type', 'button')

    cy.get('.usa-date-range-picker__range-end').should('exist')
    cy.get('.usa-date-range-picker label:last-of-type')
      .should('have.class', 'usa-label')
      .and('contain', 'End Date')

    cy.get('.usa-date-range-picker__range-end .usa-date-picker__external-input')
      .as('endDateInput')
      .should('have.class', 'usa-input')
      .and('not.have.value')

    cy.get('.usa-date-range-picker__range-end .usa-date-picker__button')
      .as('endToggleButton')
      .should('have.attr', 'type', 'button')

    // Open range start calendar.
    cy.get('@startToggleButton').click()

    // Check navigation buttons.
    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(1) button'
    )
      .as('previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(2)'
    ).should('have.class', 'usa-date-picker__calendar__cell--center-items')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(2) button'
    )
      .as('previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(3)'
    )
      .should('have.class', 'usa-date-picker__calendar__month-label')
      .children()
      .should('have.length', 2)

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(3) > button:nth-of-type(1)'
    )
      .as('monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(3) > button:nth-of-type(2)'
    )
      .as('yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(4)'
    ).should('have.class', 'usa-date-picker__calendar__cell--center-items')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(4) button'
    )
      .as('nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(5)'
    ).should('have.class', 'usa-date-picker__calendar__cell--center-items')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(5) button'
    )
      .as('nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      '.usa-date-range-picker__range-start .usa-date-picker__calendar__date'
    )
      .should('not.have.class', 'usa-date-picker__calendar__date--within-range')
      .and(
        'not.have.class',
        'usa-date-picker__calendar__date--range-date-start'
      )
      .and('not.have.class', 'usa-date-picker__calendar__date--range-date-end')

    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${todaysIsoDate}"`
    )
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.attr', 'aria-selected', 'true')

    // Select range start date.
    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${rangeStart}"`
    ).click()

    cy.get('@startToggleButton').should('have.focus')

    // Check range start input matches range start date.
    cy.get('@startDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeStart))
    )

    // Open range end calendar.
    cy.get('@endToggleButton').click()

    // Check navigation buttons.
    cy.get('@previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get('@yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get('@nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${todaysIsoDate}"`
    )
      .should('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.attr', 'aria-selected', 'true')

    cy.wrap(days).each(day => {
      if (day.isBeforeRangeStart) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeStart) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('have.class', 'usa-date-picker__calendar__date--focused')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
          .and('have.focus')
      } else if (day.isInRange) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.isAfterRangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      }
    })

    // Test in range dates are highlighted when hovering over data in range.
    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${formatIsoDate(
        addDays(parseIsoDate(rangeStart), 3)
      )}"`
    ).trigger('mouseover')

    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${formatIsoDate(
        addDays(parseIsoDate(rangeStart), 3)
      )}"`
    )
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.focus')

    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${formatIsoDate(
        addDays(parseIsoDate(rangeStart), 2)
      )}"`
    ).should('have.class', 'usa-date-picker__calendar__date--within-range')

    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${formatIsoDate(
        addDays(parseIsoDate(rangeStart), 1)
      )}"`
    ).should('have.class', 'usa-date-picker__calendar__date--within-range')

    // Select range end date.
    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${rangeEnd}"`
    ).click()

    cy.get('@endToggleButton').should('have.focus')

    // Check range end input matches range end date.
    cy.get('@endDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeEnd))
    )

    // Open range start calendar.
    cy.get('@startToggleButton').click()

    // Check navigation buttons.
    cy.get('@previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get('@yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get('@nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${rangeStart}"`
    )
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.wrap(days).each(day => {
      if (day.isBeforeRangeStart) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeStart) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
          .and('have.attr', 'aria-selected', 'true')
      } else if (day.isInRange) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('have.class', 'usa-date-picker__calendar__date--within-range')
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'aria-selected', 'true')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.isAfterRangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('have.attr', 'disabled', 'disabled')
      }
    })

    // Close range start date calendar.
    cy.get('@startToggleButton').click()

    cy.get('@startToggleButton').should('have.focus')

    // Open range end date calendar.
    cy.get('@endToggleButton').click()

    // Check navigation buttons.
    cy.get('@previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get('@yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get('@nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${rangeEnd}"`
    )
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.wrap(days).each(day => {
      if (day.isBeforeRangeStart) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeStart) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
          .and('not.have.attr', 'aria-selected', 'true')
      } else if (day.isInRange) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('have.class', 'usa-date-picker__calendar__date--within-range')
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('have.class', 'usa-date-picker__calendar__date--selected')
          .and('have.attr', 'aria-selected', 'true')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.isAfterRangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      }
    })

    // Select end range alternative date.
    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${rangeEndAlternative}"`
    ).click()

    cy.get('@endToggleButton').should('have.focus')

    // Check range end input matches alternative range start date.
    cy.get('@endDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeEndAlternative))
    )

    // Open date range start calendar.
    cy.get('@startToggleButton').click()

    // Check navigation buttons.
    cy.get('@previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get('@yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get('@nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    // Select end range alternative date.
    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${rangeStartAlternative}"`
    ).click()

    cy.get('@startToggleButton').should('have.focus')

    // Check range end input matches alternative range start date.
    cy.get('@startDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeStartAlternative))
    )

    // Open date range start calendar.
    cy.get('@startToggleButton').click()

    // Check navigation buttons.
    cy.get('@previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get('@yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get('@nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${rangeStartAlternative}"`
    )
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.wrap(days).each(day => {
      if (day.isBeforeRangeStartAlternative) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeStartAlternative) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
          .and('have.attr', 'aria-selected', 'true')
      } else if (day.isInAlternativeRange) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('have.class', 'usa-date-picker__calendar__date--within-range')
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeEndAlternative) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'aria-selected', 'true')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.isAfterRangeEndAlternative) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('have.attr', 'disabled', 'disabled')
      }
    })

    // Close the range start calendar.
    cy.get('@startToggleButton').click()

    cy.get('@startToggleButton').should('have.focus')

    // Check range start input matches alternative range start date.
    cy.get('@startDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeStartAlternative))
    )
    // Check range end input matches alternative range end date.
    cy.get('@endDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeEndAlternative))
    )
  })

  it('date range is correct when selecting end date first', () => {
    const todaysDate = today()
    const {
      todaysIsoDate,
      rangeStart,
      rangeStartAlternative,
      rangeEndAlternative,
      rangeEnd,
      days,
      month,
      year,
    } = getTestData(todaysDate)

    const wrapperComponent = {
      components: { UsaDateRangePicker, UsaDatePicker },
      data() {
        return {
          startDate: '',
          endDate: '',
        }
      },
      template: `<UsaDateRangePicker>
        <UsaDatePicker
          label="Start Date"
          v-model="startDate"
          range-type="start"></UsaDatePicker>
        <UsaDatePicker
          label="End Date"
          v-model="endDate"
          range-type="end"></UsaDatePicker>
      </UsaDateRangePicker>`,
    }

    mount(wrapperComponent, {})

    cy.get('.usa-date-range-picker').should('exist')

    cy.get('.usa-date-range-picker__range-start').should('exist')
    cy.get('.usa-date-range-picker label:first-of-type')
      .should('have.class', 'usa-label')
      .and('contain', 'Start Date')
    cy.get(
      '.usa-date-range-picker__range-start .usa-date-picker__external-input'
    )
      .as('startDateInput')
      .should('have.class', 'usa-input')
      .and('not.have.value')

    cy.get('.usa-date-range-picker__range-start .usa-date-picker__button')
      .as('startToggleButton')
      .should('have.attr', 'type', 'button')

    cy.get('.usa-date-range-picker__range-end').should('exist')
    cy.get('.usa-date-range-picker label:last-of-type')
      .should('have.class', 'usa-label')
      .and('contain', 'End Date')

    cy.get('.usa-date-range-picker__range-end .usa-date-picker__external-input')
      .as('endDateInput')
      .should('have.class', 'usa-input')
      .and('not.have.value')

    cy.get('.usa-date-range-picker__range-end .usa-date-picker__button')
      .as('endToggleButton')
      .should('have.attr', 'type', 'button')

    // Open range end calendar.
    cy.get('@endToggleButton').click()

    // Check navigation buttons.
    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(1) button'
    )
      .as('previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(2)'
    ).should('have.class', 'usa-date-picker__calendar__cell--center-items')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(2) button'
    )
      .as('previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(3)'
    )
      .should('have.class', 'usa-date-picker__calendar__month-label')
      .children()
      .should('have.length', 2)

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(3) > button:nth-of-type(1)'
    )
      .as('monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(3) > button:nth-of-type(2)'
    )
      .as('yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(4)'
    ).should('have.class', 'usa-date-picker__calendar__cell--center-items')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(4) button'
    )
      .as('nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(5)'
    ).should('have.class', 'usa-date-picker__calendar__cell--center-items')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(5) button'
    )
      .as('nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('.usa-date-range-picker__range-end .usa-date-picker__calendar__date')
      .should('not.have.class', 'usa-date-picker__calendar__date--within-range')
      .and('not.have.class', 'usa-date-picker__calendar__date--range-date-end')
      .and(
        'not.have.class',
        'usa-date-picker__calendar__date--range-date-start'
      )

    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${todaysIsoDate}"`
    )
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.attr', 'aria-selected', 'true')

    cy.get('.usa-date-range-picker__range-end .usa-date-picker__calendar__date')
      .should('not.have.class', 'usa-date-picker__calendar__date--within-range')
      .and(
        'not.have.class',
        'usa-date-picker__calendar__date--range-date-start'
      )
      .and('not.have.class', 'usa-date-picker__calendar__date--range-date-end')

    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${todaysIsoDate}"`
    )
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.attr', 'aria-selected', 'true')

    // Select range end date.
    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${rangeEnd}"`
    ).click()

    // Check range end input matches range end date.
    cy.get('@endDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeEnd))
    )

    // Open range start calendar.
    cy.get('@startToggleButton').click()

    // Check navigation buttons.
    cy.get('@previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get('@yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get('@nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${todaysIsoDate}"`
    )
      .should('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.attr', 'aria-selected', 'true')

    cy.wrap(days).each(day => {
      if (day.isBeforeRangeStart) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeStart) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--focused')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
          .and('not.have.focus')
      } else if (day.isInRange) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('have.class', 'usa-date-picker__calendar__date--range-date')
          .and('have.class', 'usa-date-picker__calendar__date--focused')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
          .and('have.focus')
      } else if (day.isAfterRangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('have.attr', 'disabled', 'disabled')
      }
    })

    // Test in range dates are highlighted when hovering over data in range.
    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${formatIsoDate(
        subDays(parseIsoDate(rangeEnd), 3)
      )}"`
    ).trigger('mouseover')

    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${formatIsoDate(
        subDays(parseIsoDate(rangeEnd), 3)
      )}"`
    )
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.focus')

    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${formatIsoDate(
        subDays(parseIsoDate(rangeEnd), 2)
      )}"`
    ).should('have.class', 'usa-date-picker__calendar__date--within-range')

    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${formatIsoDate(
        subDays(parseIsoDate(rangeEnd), 1)
      )}"`
    ).should('have.class', 'usa-date-picker__calendar__date--within-range')

    // Select range start date.
    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${rangeStart}"`
    ).click()

    // Check range start input matches range start date.
    cy.get('@startDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeStart))
    )

    // Open range end calendar.
    cy.get('@endToggleButton').click()

    // Check navigation buttons.
    cy.get('@previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get('@yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get('@nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${rangeEnd}"`
    )
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.wrap(days).each(day => {
      if (day.isBeforeRangeStart) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeStart) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
          .and('not.have.attr', 'aria-selected', 'true')
      } else if (day.isInRange) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('have.class', 'usa-date-picker__calendar__date--within-range')
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('have.class', 'usa-date-picker__calendar__date--selected')
          .and('have.attr', 'aria-selected', 'true')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.isAfterRangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      }
    })

    // Close range end date calendar.
    cy.get('@endToggleButton').click()

    // Open range start date calendar.
    cy.get('@startToggleButton').click()

    // Check navigation buttons.
    cy.get('@previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get('@yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get('@nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${rangeStart}"`
    )
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.wrap(days).each(day => {
      if (day.isBeforeRangeStart) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeStart) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
          .and('have.attr', 'aria-selected', 'true')
      } else if (day.isInRange) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('have.class', 'usa-date-picker__calendar__date--within-range')
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'aria-selected', 'true')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.isAfterRangeEnd) {
        cy.get(
          `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('have.attr', 'disabled', 'disabled')
      }
    })

    // Select start range alternative date.
    cy.get(
      `.usa-date-range-picker__range-start .usa-date-picker__calendar__date[data-value="${rangeStartAlternative}"`
    ).click()

    // Check range end input matches alternative range start date.
    cy.get('@startDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeStartAlternative))
    )

    // Open date range end calendar.
    cy.get('@endToggleButton').click()

    // Check navigation buttons.
    cy.get('@previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get('@yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get('@nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    // Select end range alternative date.
    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${rangeEndAlternative}"`
    ).click()

    // Check range end input matches alternative range start date.
    cy.get('@endDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeEndAlternative))
    )

    // Open date range end calendar.
    cy.get('@endToggleButton').click()

    // Check navigation buttons.
    cy.get('@previousYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one year')
      .and('have.class', 'usa-date-picker__calendar__previous-year')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@previousMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate back one month')
      .and('have.class', 'usa-date-picker__calendar__previous-month')
      .and('have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@monthSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${month}. Click to select month`)
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', month)

    cy.get('@yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', `${year}. Click to select year`)
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', year)

    cy.get('@nextMonthButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one month')
      .and('have.class', 'usa-date-picker__calendar__next-month')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get('@nextYearButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Navigate forward one year')
      .and('have.class', 'usa-date-picker__calendar__next-year')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('be.empty')

    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${rangeEndAlternative}"`
    )
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.wrap(days).each(day => {
      if (day.isBeforeRangeStartAlternative) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeStartAlternative) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
          .and('not.have.attr', 'aria-selected', 'true')
      } else if (day.isInAlternativeRange) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('have.class', 'usa-date-picker__calendar__date--within-range')
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.date === rangeEndAlternative) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('have.class', 'usa-date-picker__calendar__date--selected')
          .and('have.attr', 'aria-selected', 'true')
          .and('not.have.attr', 'disabled', 'disabled')
      } else if (day.isAfterRangeEndAlternative) {
        cy.get(
          `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${day.date}"`
        )
          .should(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-start'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--within-range'
          )
          .and(
            'not.have.class',
            'usa-date-picker__calendar__date--range-date-end'
          )
          .and('not.have.class', 'usa-date-picker__calendar__date--range-date')
          .and('not.have.class', 'usa-date-picker__calendar__date--selected')
          .and('not.have.attr', 'disabled', 'disabled')
      }
    })

    // Close the range end calendar.
    cy.get('@endToggleButton').click()

    // Check range start input matches alternative range start date.
    cy.get('@startDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeStartAlternative))
    )
    // Check range end input matches alternative range end date.
    cy.get('@endDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeEndAlternative))
    )
  })

  it('end calendar should highlight default start date value', () => {
    const todaysDate = today()
    const { rangeStart } = getTestData(todaysDate)

    const wrapperComponent = {
      components: { UsaDateRangePicker, UsaDatePicker },
      data() {
        return {
          startDate: rangeStart,
          endDate: '',
        }
      },
      template: `<UsaDateRangePicker>
        <UsaDatePicker
          label="Start Date"
          v-model="startDate"
          range-type="start"></UsaDatePicker>
        <UsaDatePicker
          label="End Date"
          v-model="endDate"
          range-type="end"></UsaDatePicker>
      </UsaDateRangePicker>`,
    }

    mount(wrapperComponent, {})

    cy.get(
      '.usa-date-range-picker__range-start .usa-date-picker__external-input'
    )
      .as('startDateInput')
      .should('have.class', 'usa-input')
      .and('not.have.value')

    cy.get('.usa-date-range-picker__range-start .usa-date-picker__button')
      .as('startToggleButton')
      .should('have.attr', 'type', 'button')

    cy.get('.usa-date-range-picker__range-end .usa-date-picker__external-input')
      .as('endDateInput')
      .should('have.class', 'usa-input')
      .and('not.have.value')

    cy.get('.usa-date-range-picker__range-end .usa-date-picker__button')
      .as('endToggleButton')
      .should('have.attr', 'type', 'button')

    // Check range start input matches range start date.
    cy.get('@startDateInput').should(
      'have.value',
      formatUsaDate(parseIsoDate(rangeStart))
    )
    // Check range end input matches range end date.
    cy.get('@endDateInput').should('not.have.value')

    // Open the range end calendar.
    cy.get('@endToggleButton').click()

    cy.get(
      `.usa-date-range-picker__range-end .usa-date-picker__calendar__date[data-value="${rangeStart}"`
    )
      .should(
        'not.have.class',
        'usa-date-picker__calendar__date--range-date-end'
      )
      .and('not.have.class', 'usa-date-picker__calendar__date--within-range')
      .and('have.class', 'usa-date-picker__calendar__date--range-date-start')
      .and('have.class', 'usa-date-picker__calendar__date--range-date')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('not.have.attr', 'disabled', 'disabled')
      .and('have.focus')
  })
})
