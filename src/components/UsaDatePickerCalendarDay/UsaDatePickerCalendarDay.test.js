import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import {
  MONTH_LABELS,
  DAY_OF_WEEK_LABELS,
  DAY_OF_WEEK_ABBREVIATION_LABELS,
} from '@/utils/constants.js'
import { ref } from 'vue'
import UsaDatePickerCalendarDay from './UsaDatePickerCalendarDay.vue'
import { defaultData } from './UsaDatePickerCalendarDay.fixtures.js'

describe('UsaDatePickerCalendarDay', () => {
  it('renders the component', () => {
    const wrapperComponent = {
      components: { UsaDatePickerCalendarDay },
      data() {
        return {
          selectedDate: '2022-07-13',
          activeDate: '2022-07-13',
          minDate: '2022-05-25',
          maxDate: '2023-01-09',
          monthLabels: MONTH_LABELS,
          dayOfWeekLabels: DAY_OF_WEEK_LABELS,
          dayOfWeekAbbreviationLabels: DAY_OF_WEEK_ABBREVIATION_LABELS,
          previousYearButtonLabel: 'Navigate back one year',
          nextYearButtonLabel: 'Navigate forward one year',
          previousMonthButtonLabel: 'Navigate back one month',
          nextMonthButtonLabel: 'Navigate forward one month',
          yearSelectionButtonLabel: '%s. Click to select year',
          monthSelectionButtonLabel: '%s. Click to select month',
          previousYearsButtonLabel: 'Navigate back 12 years',
          nextYearsButtonLabel: 'Navigate forward 12 years',
        }
      },
      template: `<UsaDatePickerCalendarDay
        v-model:selected-date="selectedDate"
        v-model:active-date="activeDate"
        :min-date="minDate"
        :max-date="maxDate"
        :month-labels="monthLabels"
        :day-of-week-labels="dayOfWeekLabels"
        :day-of-week-abbreviation-labels="dayOfWeekAbbreviationLabels"
        :previous-month-button-label="previousMonthButtonLabel"
        :next-month-button-label="nextMonthButtonLabel"
        :previous-year-button-label="previousYearButtonLabel"
        :next-year-button-label="nextYearButtonLabel"
        :year-selection-button-label="yearSelectionButtonLabel"
        :month-selection-button-label="monthSelectionButtonLabel"
        :previous-years-button-label="previousYearsButtonLabel"
        :next-years-button-label="nextYearsButtonLabel"
      ></UsaDatePickerCalendarDay>`,
    }

    mount(wrapperComponent, {
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    })

    cy.get('div.usa-date-picker__calendar__date-picker').should(
      'have.attr',
      'tabindex',
      '-1'
    )

    cy.get('div.usa-date-picker__calendar__row')
      .children()
      .should('have.length', 5)
      .should('have.class', 'usa-date-picker__calendar__cell')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(1)'
    ).should('have.class', 'usa-date-picker__calendar__cell--center-items')

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
      .and('have.attr', 'aria-label', 'July. Click to select month')
      .and('have.class', 'usa-date-picker__calendar__month-selection')
      .and('contain', 'July')

    cy.get(
      '.usa-date-picker__calendar__row > .usa-date-picker__calendar__cell:nth-of-type(3) > button:nth-of-type(2)'
    )
      .as('yearSelectorButton')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', '2022. Click to select year')
      .and('have.class', 'usa-date-picker__calendar__year-selection')
      .and('contain', '2022')

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

    cy.get('table.usa-date-picker__calendar__table').should(
      'have.attr',
      'role',
      'presentation'
    )

    cy.get('.usa-date-picker__calendar__table > thead > tr')
      .children()
      .should('have.length', 7)
      .and('have.class', 'usa-date-picker__calendar__day-of-week')
      .and('have.attr', 'scope', 'presentation')

    cy.get('.usa-date-picker__calendar__table th:nth-of-type(1)')
      .should('have.attr', 'aria-label', 'Sunday')
      .and('contain', 'S')

    cy.get('.usa-date-picker__calendar__table th:nth-of-type(2)')
      .should('have.attr', 'aria-label', 'Monday')
      .and('contain', 'M')

    cy.get('.usa-date-picker__calendar__table th:nth-of-type(3)')
      .should('have.attr', 'aria-label', 'Tuesday')
      .and('contain', 'T')

    cy.get('.usa-date-picker__calendar__table th:nth-of-type(4)')
      .should('have.attr', 'aria-label', 'Wednesday')
      .and('contain', 'W')

    cy.get('.usa-date-picker__calendar__table th:nth-of-type(5)')
      .should('have.attr', 'aria-label', 'Thursday')
      .and('contain', 'Th')

    cy.get('.usa-date-picker__calendar__table th:nth-of-type(6)')
      .should('have.attr', 'aria-label', 'Friday')
      .and('contain', 'Fr')

    cy.get('.usa-date-picker__calendar__table th:nth-of-type(7)')
      .should('have.attr', 'aria-label', 'Saturday')
      .and('contain', 'S')

    cy.get('.usa-date-picker__calendar__table > tbody > tr')
      .should('have.length', 6)
      .then(() => {
        cy.wrap(defaultData.july).each((row, rowIndex) => {
          cy.wrap(row).each((button, buttonIndex) => {
            cy.get(
              `.usa-date-picker__calendar__table tr:nth-of-type(${
                rowIndex + 1
              }) td:nth-of-type(${buttonIndex + 1}) button`
            )
              .should('have.attr', 'type', 'button')
              .and('have.class', 'usa-date-picker__calendar__date')
              .and('have.attr', 'data-day', button.day)
              .and('have.attr', 'data-month', button.month)
              .and('have.attr', 'data-year', button.year)
              .and('have.attr', 'data-value', button.date)
              .and('have.attr', 'aria-label', button.label)
              .and('contain', button.day)

            if (button.disabled) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('have.attr', 'disabled', 'disabled')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('not.have.attr', 'disabled', 'disabled')
            }

            if (button.isPreviousMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--previous-month'
              )
            }

            if (button.isCurrentMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--current-month'
              )
            }

            if (button.isNextMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--next-month'
              )
            }

            if (button.date === '2022-07-13') {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '0')
                .and('have.attr', 'aria-selected', 'true')
                .and('have.class', 'usa-date-picker__calendar__date--selected')
                .and('have.class', 'usa-date-picker__calendar__date--focused')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '-1')
                .and('have.attr', 'aria-selected', 'false')
            }
          })
        })
      })
      .then(() => {
        // August
        cy.get('@nextMonthButton').click()
      })
      .then(() => {
        cy.wrap(defaultData.august).each((row, rowIndex) => {
          cy.wrap(row).each((button, buttonIndex) => {
            cy.get(
              `.usa-date-picker__calendar__table tr:nth-of-type(${
                rowIndex + 1
              }) td:nth-of-type(${buttonIndex + 1}) button`
            )
              .should('have.attr', 'type', 'button')
              .and('have.class', 'usa-date-picker__calendar__date')
              .and('have.attr', 'data-day', button.day)
              .and('have.attr', 'data-month', button.month)
              .and('have.attr', 'data-year', button.year)
              .and('have.attr', 'data-value', button.date)
              .and('have.attr', 'aria-label', button.label)
              .and('contain', button.day)

            if (button.disabled) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('have.attr', 'disabled', 'disabled')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('not.have.attr', 'disabled', 'disabled')
            }

            if (button.isPreviousMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--previous-month'
              )
            }

            if (button.isCurrentMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--current-month'
              )
            }

            if (button.isNextMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--next-month'
              )
            }

            if (button.date === '2022-08-13') {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '0')
                .and('not.have.attr', 'aria-selected', 'true')
                .and(
                  'not.have.class',
                  'usa-date-picker__calendar__date--selected'
                )
                .and('have.class', 'usa-date-picker__calendar__date--focused')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '-1')
                .and('have.attr', 'aria-selected', 'false')
            }
          })
        })
      })
      .then(() => {
        // January
        cy.get('@nextYearButton').click()
      })
      .then(() => {
        cy.get('@nextMonthButton').should('have.attr', 'disabled', 'disabled')
        cy.get('@nextYearButton').should('have.attr', 'disabled', 'disabled')

        cy.wrap(defaultData.january).each((row, rowIndex) => {
          cy.wrap(row).each((button, buttonIndex) => {
            cy.get(
              `.usa-date-picker__calendar__table tr:nth-of-type(${
                rowIndex + 1
              }) td:nth-of-type(${buttonIndex + 1}) button`
            )
              .should('have.attr', 'type', 'button')
              .and('have.class', 'usa-date-picker__calendar__date')
              .and('have.attr', 'data-day', button.day)
              .and('have.attr', 'data-month', button.month)
              .and('have.attr', 'data-year', button.year)
              .and('have.attr', 'data-value', button.date)
              .and('have.attr', 'aria-label', button.label)
              .and('contain', button.day)

            if (button.disabled) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('have.attr', 'disabled', 'disabled')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('not.have.attr', 'disabled', 'disabled')
            }

            if (button.isPreviousMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--previous-month'
              )
            }

            if (button.isCurrentMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--current-month'
              )
            }

            if (button.isNextMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--next-month'
              )
            }

            if (button.date === '2023-01-09') {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '0')
                .and('not.have.attr', 'aria-selected', 'true')
                .and(
                  'not.have.class',
                  'usa-date-picker__calendar__date--selected'
                )
                .and('have.class', 'usa-date-picker__calendar__date--focused')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '-1')
                .and('have.attr', 'aria-selected', 'false')
            }
          })
        })
      })
      .then(() => {
        // December
        cy.get('@previousMonthButton').click()
      })
      .then(() => {
        cy.get('@nextMonthButton').should(
          'not.have.attr',
          'disabled',
          'disabled'
        )
        cy.get('@nextYearButton').should(
          'not.have.attr',
          'disabled',
          'disabled'
        )

        cy.wrap(defaultData.december).each((row, rowIndex) => {
          cy.wrap(row).each((button, buttonIndex) => {
            cy.get(
              `.usa-date-picker__calendar__table tr:nth-of-type(${
                rowIndex + 1
              }) td:nth-of-type(${buttonIndex + 1}) button`
            )
              .should('have.attr', 'type', 'button')
              .and('have.class', 'usa-date-picker__calendar__date')
              .and('have.attr', 'data-day', button.day)
              .and('have.attr', 'data-month', button.month)
              .and('have.attr', 'data-year', button.year)
              .and('have.attr', 'data-value', button.date)
              .and('have.attr', 'aria-label', button.label)
              .and('contain', button.day)

            if (button.disabled) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('have.attr', 'disabled', 'disabled')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('not.have.attr', 'disabled', 'disabled')
            }

            if (button.isPreviousMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--previous-month'
              )
            }

            if (button.isCurrentMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--current-month'
              )
            }

            if (button.isNextMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--next-month'
              )
            }

            if (button.date === '2022-12-09') {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '0')
                .and('not.have.attr', 'aria-selected', 'true')
                .and(
                  'not.have.class',
                  'usa-date-picker__calendar__date--selected'
                )
                .and('have.class', 'usa-date-picker__calendar__date--focused')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '-1')
                .and('have.attr', 'aria-selected', 'false')
            }
          })
        })
      })
      .then(() => {
        cy.get('@previousYearButton').click()
      })
      .then(() => {
        cy.get('@previousMonthButton').should(
          'have.attr',
          'disabled',
          'disabled'
        )
        cy.get('@previousYearButton').should(
          'have.attr',
          'disabled',
          'disabled'
        )

        cy.wrap(defaultData.may).each((row, rowIndex) => {
          cy.wrap(row).each((button, buttonIndex) => {
            cy.get(
              `.usa-date-picker__calendar__table tr:nth-of-type(${
                rowIndex + 1
              }) td:nth-of-type(${buttonIndex + 1}) button`
            )
              .should('have.attr', 'type', 'button')
              .and('have.class', 'usa-date-picker__calendar__date')
              .and('have.attr', 'data-day', button.day)
              .and('have.attr', 'data-month', button.month)
              .and('have.attr', 'data-year', button.year)
              .and('have.attr', 'data-value', button.date)
              .and('have.attr', 'aria-label', button.label)
              .and('contain', button.day)

            if (button.disabled) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('have.attr', 'disabled', 'disabled')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('not.have.attr', 'disabled', 'disabled')
            }

            if (button.isPreviousMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--previous-month'
              )
            }

            if (button.isCurrentMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--current-month'
              )
            }

            if (button.isNextMonth) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should(
                'have.class',
                'usa-date-picker__calendar__date--next-month'
              )
            }

            if (button.date === '2022-05-25') {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '0')
                .and('not.have.attr', 'aria-selected', 'true')
                .and(
                  'not.have.class',
                  'usa-date-picker__calendar__date--selected'
                )
                .and('have.class', 'usa-date-picker__calendar__date--focused')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '-1')
                .and('have.attr', 'aria-selected', 'false')
            }
          })
        })
      })
  })

  it('keyboard navigation highlights correct day', () => {
    const wrapperComponent = {
      components: { UsaDatePickerCalendarDay },
      data() {
        return {
          selectedDate: '2022-07-13',
          activeDate: '2022-07-13',
          minDate: '2022-05-25',
          maxDate: '2023-01-09',
          monthLabels: MONTH_LABELS,
          dayOfWeekLabels: DAY_OF_WEEK_LABELS,
          dayOfWeekAbbreviationLabels: DAY_OF_WEEK_ABBREVIATION_LABELS,
          previousYearButtonLabel: 'Navigate back one year',
          nextYearButtonLabel: 'Navigate forward one year',
          previousMonthButtonLabel: 'Navigate back one month',
          nextMonthButtonLabel: 'Navigate forward one month',
          yearSelectionButtonLabel: '%s. Click to select year',
          monthSelectionButtonLabel: '%s. Click to select month',
          previousYearsButtonLabel: 'Navigate back 12 years',
          nextYearsButtonLabel: 'Navigate forward 12 years',
        }
      },
      template: `
        <UsaDatePickerCalendarDay
          v-model:selected-date="selectedDate"
          v-model:active-date="activeDate"
          :min-date="minDate"
          :max-date="maxDate"
          :month-labels="monthLabels"
          :day-of-week-labels="dayOfWeekLabels"
          :day-of-week-abbreviation-labels="dayOfWeekAbbreviationLabels"
          :previous-month-button-label="previousMonthButtonLabel"
          :next-month-button-label="nextMonthButtonLabel"
          :previous-year-button-label="previousYearButtonLabel"
          :next-year-button-label="nextYearButtonLabel"
          :year-selection-button-label="yearSelectionButtonLabel"
          :month-selection-button-label="monthSelectionButtonLabel"
          :previous-years-button-label="previousYearsButtonLabel"
          :next-years-button-label="nextYearsButtonLabel"
        ></UsaDatePickerCalendarDay>`,
    }

    mount(wrapperComponent, {
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    })

    // Should start on selected date: 2022-07-13.
    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    // Right Arrow
    // Should highlight & focus 2022-07-14 as the date to the immediate right
    // of the current active date in the calendar.
    cy.get('button[data-value="2022-07-13"]').type('{rightArrow}')

    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-14"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-14')
      .and('have.focus')

    // Down Arrow
    // Should highlight & focus 2022-07-21 as the date immediately below
    // of the current active date in the calendar
    cy.get('button[data-value="2022-07-14"]').type('{downArrow}')

    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-14"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-14')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-21"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-21')
      .and('have.focus')

    // Left Arrow
    // Should highlight & focus 2022-07-20 as the date to the immediate left
    // of the current active date in the calendar.
    cy.get('button[data-value="2022-07-21"]').type('{leftArrow}')

    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-21"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-21')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-20"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-20')
      .and('have.focus')

    // Home Key
    // Should highlight & focus 2022-07-17 as the start date of the
    // current active date's week in the calendar.
    cy.get('button[data-value="2022-07-20"]').type('{home}')

    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-20"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-20')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-17"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-17')
      .and('have.focus')

    // End Key
    // Should highlight & focus 2022-07-23 as the end date of the
    // current active date's week in the calendar.
    cy.get('button[data-value="2022-07-17"]').type('{end}')

    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-17"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-17')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-23"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-23')
      .and('have.focus')

    // Up Arrow
    // Should highlight & focus 2022-07-16 as the date immediately above
    // of the current active date in the calendar.
    cy.get('button[data-value="2022-07-23"]').type('{upArrow}')

    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-23"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-23')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-16"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-16')
      .and('have.focus')

    // Hover
    // Should highlight & focus 2022-07-07 as the date the mouse is
    // hovered over.
    cy.get('button[data-value="2022-07-07"]').trigger('mouseover')

    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-16"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-16')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-07"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-07')
      .and('have.focus')

    // Page Down
    // Should highlight & focus 2022-08-07 as same day, but in the next month.
    cy.get('button[data-value="2022-07-07"]').type('{pageDown}')

    cy.get('button[data-value="2022-07-13"]').should('not.exist')
    cy.get('button[data-value="2022-07-16"]').should('not.exist')

    cy.get('button[data-value="2022-08-07"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-08-07')
      .and('have.focus')

    // Shift + Page Down
    // Should highlight & focus 2023-01-07 as same day in the last available
    // month of the next year.
    cy.get('button[data-value="2022-08-07"]').type('{shift+pageDown}')

    cy.get('button[data-value="2022-08-07"]').should('not.exist')

    cy.get('button[data-value="2023-01-07"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2023-01-07')
      .and('have.focus')

    // Page Up
    // Should highlight & focus 2022-12-07 as same day, but in the
    // previous month.
    cy.get('button[data-value="2023-01-07"]').type('{pageUp}')

    cy.get('button[data-value="2023-01-07"]').should('not.exist')

    cy.get('button[data-value="2022-12-07"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-12-07')
      .and('have.focus')

    // Shift + Page Up
    // Should highlight & focus 2022-05-25 as earliest available
    // date (min date).
    cy.get('button[data-value="2022-12-07"]').type('{shift+pageUp}')

    cy.get('button[data-value="2022-12-07"]').should('not.exist')

    cy.get('.usa-date-picker__calendar__previous-month').should(
      'have.attr',
      'disabled',
      'disabled'
    )

    cy.get('.usa-date-picker__calendar__previous-year').should(
      'have.attr',
      'disabled',
      'disabled'
    )

    cy.get('button[data-value="2022-05-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-25')
      .and('have.focus')

    // Left Arrow
    // Should stay highlighted and focused on 2022-05-25 as it is already
    // the earliest available date.
    cy.get('button[data-value="2022-05-25"]').type('{leftArrow}')

    cy.get('button[data-value="2022-05-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-25')
      .and('have.focus')

    // Next Month Button
    // Should highlight but not focus 2022-06-25 as same day, but in the
    // next month. Focus should remain on the next month button.
    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('button[data-value="2022-05-25"]').should('not.exist')

    cy.get('.usa-date-picker__calendar__previous-month').should(
      'not.have.attr',
      'disabled',
      'disabled'
    )

    cy.get('.usa-date-picker__calendar__previous-year').should(
      'not.have.attr',
      'disabled',
      'disabled'
    )

    cy.get('button[data-value="2022-06-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-06-25')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__next-month').should('have.focus')

    // Hover
    // Should highlight & focus 2022-06-28 as the date the mouse is
    // hovered over.
    cy.get('button[data-value="2022-06-28"]').trigger('mouseover')

    cy.get('button[data-value="2022-06-28"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-06-28')
      .and('have.focus')

    // Shift + Page Up
    // Should highlight & focus 2022-05-28 as same day of the earliest
    // available date.
    cy.get('button[data-value="2022-06-28"]').type('{shift+pageUp}')

    cy.get('.usa-date-picker__calendar__previous-month').should(
      'have.attr',
      'disabled',
      'disabled'
    )

    cy.get('.usa-date-picker__calendar__previous-year').should(
      'have.attr',
      'disabled',
      'disabled'
    )

    cy.get('button[data-value="2022-06-28"]').should('not.exist')

    cy.get('button[data-value="2022-05-28"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-28')
      .and('have.focus')

    // Shift + Page Down
    // Should highlight & focus 2023-01-09 as the last available
    // date (max date).
    cy.get('button[data-value="2022-05-28"]').type('{shift+pageDown}')

    cy.get('button[data-value="2022-05-28"]').should('not.exist')

    cy.get('.usa-date-picker__calendar__next-month').should(
      'have.attr',
      'disabled',
      'disabled'
    )

    cy.get('.usa-date-picker__calendar__next-year').should(
      'have.attr',
      'disabled',
      'disabled'
    )

    cy.get('button[data-value="2023-01-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2023-01-09')
      .and('have.focus')

    // Shift + Page Down
    // Should stay highlighted and focused on 2023-01-09 as it is already
    // the last available date (max date).
    cy.get('button[data-value="2023-01-09"]').type('{shift+pageDown}')

    cy.get('button[data-value="2023-01-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2023-01-09')
      .and('have.focus')

    // Right Arrow
    // Should stay highlighted and focused on 2023-01-09 as it is already
    // the latest available date.
    cy.get('button[data-value="2023-01-09"]').type('{rightArrow}')

    cy.get('button[data-value="2023-01-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2023-01-09')
      .and('have.focus')

    // Hover
    // Should highlight & focus 2023-01-01 as the date the mouse is
    // hovered over.
    cy.get('button[data-value="2023-01-01"]').trigger('mouseover')

    cy.get('button[data-value="2023-01-01"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2023-01-01')
      .and('have.focus')

    // Previous Month Button
    // Should highlight & focus 2022-12-01 as same day, but in the
    // previous month. Focus should remain on the previous month button.
    cy.get('.usa-date-picker__calendar__previous-month').click()

    cy.get('button[data-value="2023-01-01"]').should('not.exist')

    cy.get('.usa-date-picker__calendar__next-month').should(
      'not.have.attr',
      'disabled',
      'disabled'
    )

    cy.get('.usa-date-picker__calendar__next-year').should(
      'not.have.attr',
      'disabled',
      'disabled'
    )

    cy.get('button[data-value="2022-12-01"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-12-01')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__previous-month').should('have.focus')

    // Next Year Button
    // Should highlight & focus 2022-01-01 as same day, but in the
    // next month. Focus should move to the highlighted
    // date since the next year button will not longer be focusable.
    cy.get('.usa-date-picker__calendar__next-year').click()

    cy.get('button[data-value="2022-12-01"]').should('not.exist')

    cy.get('.usa-date-picker__calendar__next-month').should(
      'have.attr',
      'disabled',
      'disabled'
    )

    cy.get('.usa-date-picker__calendar__next-year').should(
      'have.attr',
      'disabled',
      'disabled'
    )

    cy.get('button[data-value="2023-01-01"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2023-01-01')
      .and('have.focus')

    // Shift + Page Down
    // Should highlight & focus 2023-01-09 as last available date (max date).
    cy.get('button[data-value="2023-01-01"]').focus()
    cy.get('button[data-value="2023-01-01"]').type('{shift+pageDown}')

    cy.get('button[data-value="2023-01-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2023-01-09')
      .and('have.focus')

    // Previous Month Button
    // Should highlight & focus 2022-12-09 as same day, but in the
    // previous month. Focus should remain on the previous month button.
    cy.get('.usa-date-picker__calendar__previous-month').click()

    cy.get('button[data-value="2023-01-09"]').should('not.exist')

    cy.get('button[data-value="2022-12-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-12-09')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__previous-month').should('have.focus')

    // Hover
    // Should highlight & focus 2022-12-31 as the date the mouse is
    // hovered over.
    cy.get('button[data-value="2022-12-31"]').trigger('mouseover')

    cy.get('button[data-value="2022-12-31"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-12-31')
      .and('have.focus')

    // Previous Year Button
    // Should highlight & focus 2022-05-31 as the earliest available
    // month on the earliest year. Focus should move to the highlighted
    // date since the previous year button will not longer be focusable.
    cy.get('.usa-date-picker__calendar__previous-year').click()

    cy.get('.usa-date-picker__calendar__previous-month').should(
      'have.attr',
      'disabled',
      'disabled'
    )

    cy.get('.usa-date-picker__calendar__previous-year').should(
      'have.attr',
      'disabled',
      'disabled'
    )

    cy.get('button[data-value="2022-05-31"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-31')
      .and('have.focus')

    // Right Arrow
    // Should highlight & focus 2022-06-01 as the date to the immediate right
    // of the current active date in the calendar. Since it is moving from the
    // last day of month, the next months calendar should show.
    cy.get('button[data-value="2022-05-31"]').focus()
    cy.get('button[data-value="2022-05-31"]').type('{rightArrow}')

    cy.get('button[data-value="2022-05-31"]').should(
      'have.class',
      'usa-date-picker__calendar__date--previous-month'
    )

    cy.get('button[data-value="2022-06-01"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-06-01')
      .and('have.focus')

    // Up Arrow
    // Should highlight & focus 2022-05-25 as the date immediately above
    // of the current active date in the calendar. Since the date is in the
    // the previous month, the previous months calendar (May) should show.
    cy.get('button[data-value="2022-06-01"]').type('{upArrow}')

    cy.get('button[data-value="2022-05-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-25')
      .and('have.focus')

    cy.get('button[data-value="2022-06-01"]').should(
      'have.class',
      'usa-date-picker__calendar__date--next-month'
    )

    // Down Arrow
    // Should highlight & focus 2022-06-01 as the date immediately below
    // of the current active date in the calendar. Since the date is in the
    // the next month, the next months calendar (June) should show.
    cy.get('button[data-value="2022-05-25"]').type('{downArrow}')

    cy.get('button[data-value="2022-06-01"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-06-01')
      .and('have.focus')

    cy.get('button[data-value="2022-05-25"]').should('not.exist')

    // Home Key
    // Should highlight & focus 2022-05-29 as the start date of the
    // current active date's week in the calendar. Since the date is in the
    // the previous month, the previous months calendar (May) should show.
    cy.get('button[data-value="2022-06-01"]').type('{home}')

    cy.get('button[data-value="2022-05-29"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-29')
      .and('have.focus')

    cy.get('button[data-value="2022-06-01"]').should(
      'have.class',
      'usa-date-picker__calendar__date--next-month'
    )

    // Home Key
    // Should stay highlighted and focused on 2022-05-29 as it is already
    // the start day of the current week.
    cy.get('button[data-value="2022-05-29"]').type('{home}')

    cy.get('button[data-value="2022-05-29"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-29')
      .and('have.focus')

    // End Key
    // Should highlight & focus 2022-06-04 as the end date of the
    // current active date's week in the calendar.  Since the date is in the
    // the next month, the next months calendar (June) should show.
    cy.get('button[data-value="2022-05-29"]').type('{end}')

    cy.get('button[data-value="2022-06-04"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-06-04')
      .and('have.focus')

    cy.get('button[data-value="2022-05-29"]').should(
      'have.class',
      'usa-date-picker__calendar__date--previous-month'
    )

    // End Key
    // Should stay highlighted and focused on 2022-06-04 as it is already
    // the last day of the current week.
    cy.get('button[data-value="2022-06-04"]').type('{end}')

    cy.get('button[data-value="2022-06-04"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-06-04')
      .and('have.focus')

    // Previous Month Button
    // Should highlight & focus 2022-05-25 as same day, but in the
    // previous month. Focus should move to the highlighted
    // date since the previous month button will not longer be focusable.
    cy.get('.usa-date-picker__calendar__previous-month').click()

    cy.get('button[data-value="2022-06-04"]').should(
      'have.class',
      'usa-date-picker__calendar__date--next-month'
    )
    // HERE
    cy.get('button[data-value="2022-05-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-25')
      .and('not.have.focus')

    // Next Month Button
    // Click next month button to cycle to December 2022. Focus should remain
    // on the next month button.
    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('button[data-value="2022-06-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-06-25')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-13')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-25')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('button[data-value="2022-08-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-08-25')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('button[data-value="2022-09-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-09-25')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('button[data-value="2022-10-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-10-25')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('button[data-value="2022-11-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-11-25')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('button[data-value="2022-12-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-12-25')
      .and('not.have.focus')

    // Next Month Button
    // Click next month button to cycle to January 2023. Should highlight
    // 2023-01-09. Focus should move to the highlighted
    // date since the next month button will not longer be focusable.
    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('button[data-value="2023-01-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2023-01-09')
      .and('not.have.focus')

    // Previous Month Button
    // Click previous month button to cycle to May 2022. Focus should remain
    // on the previous month button.
    cy.get('.usa-date-picker__calendar__previous-month').click()

    cy.get('button[data-value="2022-12-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-12-09')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__previous-month').click()

    cy.get('button[data-value="2022-11-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-11-09')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__previous-month').click()

    cy.get('button[data-value="2022-10-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-10-09')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__previous-month').click()

    cy.get('button[data-value="2022-09-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-09-09')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__previous-month').click()

    cy.get('button[data-value="2022-08-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-08-09')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__previous-month').click()

    cy.get('button[data-value="2022-07-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-07-09')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__previous-month').click()

    cy.get('button[data-value="2022-06-09"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-06-09')
      .and('not.have.focus')

    // Previous Month Button
    // Should highlight 2022-05-25. Focus should move to the highlighted
    // date since the next month button will not longer be focusable.
    cy.get('.usa-date-picker__calendar__previous-month').click()

    cy.get('button[data-value="2022-05-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--current-month')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-25')
      .and('not.have.focus')

    // Right Arrow
    // Cycle to 2022-05-27 by pressing right arrow.
    cy.get('button[data-value="2022-05-25"]').focus()
    cy.get('button[data-value="2022-05-25"]').type('{rightArrow}')

    cy.get('button[data-value="2022-05-26"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-26')
      .and('have.focus')

    cy.get('button[data-value="2022-05-26"]').type('{rightArrow}')

    cy.get('button[data-value="2022-05-27"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-27')
      .and('have.focus')

    // Home Key
    // Should highlight & focus 2022-05-29 as the start date of the
    // current active date's week in the calendar.
    cy.get('button[data-value="2022-05-27"]').type('{home}')

    cy.get('button[data-value="2022-05-25"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-25')
      .and('have.focus')

    // Right Arrow
    // Cycle to 2022-05-30 which is on a different row of the calendar by
    // pressing right arrow.
    cy.get('button[data-value="2022-05-25"]').type('{rightArrow}')

    cy.get('button[data-value="2022-05-26"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-26')
      .and('have.focus')

    cy.get('button[data-value="2022-05-26"]').type('{rightArrow}')

    cy.get('button[data-value="2022-05-27"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-27')
      .and('have.focus')

    cy.get('button[data-value="2022-05-27"]').type('{rightArrow}')

    cy.get('button[data-value="2022-05-28"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-28')
      .and('have.focus')

    cy.get('button[data-value="2022-05-28"]').type('{rightArrow}')

    cy.get('button[data-value="2022-05-29"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-29')
      .and('have.focus')

    cy.get('button[data-value="2022-05-29"]').type('{rightArrow}')

    cy.get('button[data-value="2022-05-30"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-30')
      .and('have.focus')

    // Left Arrow
    // Cycle to 2022-05-27 which is on a different row of the calendar by
    // pressing left arrow.
    cy.get('button[data-value="2022-05-30"]').type('{leftArrow}')

    cy.get('button[data-value="2022-05-29"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-29')
      .and('have.focus')

    cy.get('button[data-value="2022-05-29"]').type('{leftArrow}')

    cy.get('button[data-value="2022-05-28"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-28')
      .and('have.focus')

    cy.get('button[data-value="2022-05-28"]').type('{leftArrow}')

    cy.get('button[data-value="2022-05-27"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-05-27')
      .and('have.focus')

    cy.get('button[data-value="2022-05-27"]').click()
  })

  it('focus is trapped and tab order is correct', () => {
    const wrapperComponent = {
      components: { UsaDatePickerCalendarDay },
      data() {
        return {
          selectedDate: '2022-07-13',
          activeDate: '2022-07-13',
          minDate: '2022-05-25',
          maxDate: '2023-01-09',
          monthLabels: MONTH_LABELS,
          dayOfWeekLabels: DAY_OF_WEEK_LABELS,
          dayOfWeekAbbreviationLabels: DAY_OF_WEEK_ABBREVIATION_LABELS,
          previousYearButtonLabel: 'Navigate back one year',
          nextYearButtonLabel: 'Navigate forward one year',
          previousMonthButtonLabel: 'Navigate back one month',
          nextMonthButtonLabel: 'Navigate forward one month',
          yearSelectionButtonLabel: '%s. Click to select year',
          monthSelectionButtonLabel: '%s. Click to select month',
          previousYearsButtonLabel: 'Navigate back 12 years',
          nextYearsButtonLabel: 'Navigate forward 12 years',
        }
      },
      template: `<UsaDatePickerCalendarDay
        v-model:selected-date="selectedDate"
        v-model:active-date="activeDate"
        :min-date="minDate"
        :max-date="maxDate"
        :month-labels="monthLabels"
        :day-of-week-labels="dayOfWeekLabels"
        :day-of-week-abbreviation-labels="dayOfWeekAbbreviationLabels"
        :previous-month-button-label="previousMonthButtonLabel"
        :next-month-button-label="nextMonthButtonLabel"
        :previous-year-button-label="previousYearButtonLabel"
        :next-year-button-label="nextYearButtonLabel"
        :year-selection-button-label="yearSelectionButtonLabel"
        :month-selection-button-label="monthSelectionButtonLabel"
        :previous-years-button-label="previousYearsButtonLabel"
        :next-years-button-label="nextYearsButtonLabel"
      ></UsaDatePickerCalendarDay>`,
    }

    mount(wrapperComponent, {
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    })

    // Make sure the next tab element has been initially rendered.
    // cy.get('.usa-date-picker__calendar__previous-year').should('not.have.focus')
    // cy.get('.usa-date-picker__calendar__previous-month').should(
    //   'not.have.focus'
    // )
    // cy.get('.usa-date-picker__calendar__month-selection').should(
    //   'not.have.focus'
    // )
    // cy.get('.usa-date-picker__calendar__year-selection').should(
    //   'not.have.focus'
    // )
    // cy.get('.usa-date-picker__calendar__next-month').should('not.have.focus')
    // cy.get('.usa-date-picker__calendar__next-year').should('not.have.focus')

    // Should start on selected date: 2022-07-13.
    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__previous-year').should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__previous-month').should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__month-selection').should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__year-selection').should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__next-month').should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__next-year').should('have.focus')

    cy.realPress('Tab')
    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('button[data-value="2022-07-04"]').trigger('mouseover')

    cy.get('button[data-value="2022-07-04"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.realPress('Tab')
    cy.get('button[data-value="2022-07-13"]').should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__previous-year').should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__previous-month').should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__month-selection').should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__year-selection').should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__next-month').should('have.focus')

    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__next-year').should('have.focus')

    cy.realPress('Tab')
    cy.get('button[data-value="2022-07-13"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('button[data-value="2022-07-04"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.realPress('Tab')
    cy.realPress('Tab')
    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__previous-month')
      .should('have.focus')
      .type('{enter}')

    cy.get('.usa-date-picker__calendar__previous-month').should('have.focus')

    cy.get('button[data-value="2022-06-04"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.realPress('Tab')
    cy.realPress('Tab')
    cy.realPress('Tab')
    cy.get('.usa-date-picker__calendar__next-month')
      .should('have.focus')
      .type('{enter}')

    cy.get('.usa-date-picker__calendar__next-month').should('have.focus')

    cy.get('button[data-value="2022-07-04"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('not.have.focus')
  })

  it('previous/next year buttons are able to cycle forward/back through multiple years', () => {
    const wrapperComponent = {
      components: { UsaDatePickerCalendarDay },
      data() {
        return {
          selectedDate: '2024-06-03',
          activeDate: '2024-06-03',
          minDate: '2022-06-03',
          maxDate: '2026-06-03',
          monthLabels: MONTH_LABELS,
          dayOfWeekLabels: DAY_OF_WEEK_LABELS,
          dayOfWeekAbbreviationLabels: DAY_OF_WEEK_ABBREVIATION_LABELS,
          previousYearButtonLabel: 'Navigate back one year',
          nextYearButtonLabel: 'Navigate forward one year',
          previousMonthButtonLabel: 'Navigate back one month',
          nextMonthButtonLabel: 'Navigate forward one month',
          yearSelectionButtonLabel: '%s. Click to select year',
          monthSelectionButtonLabel: '%s. Click to select month',
          previousYearsButtonLabel: 'Navigate back 12 years',
          nextYearsButtonLabel: 'Navigate forward 12 years',
        }
      },
      template: `<UsaDatePickerCalendarDay
        v-model:selected-date="selectedDate"
        v-model:active-date="activeDate"
        :min-date="minDate"
        :max-date="maxDate"
        :month-labels="monthLabels"
        :day-of-week-labels="dayOfWeekLabels"
        :day-of-week-abbreviation-labels="dayOfWeekAbbreviationLabels"
        :previous-month-button-label="previousMonthButtonLabel"
        :next-month-button-label="nextMonthButtonLabel"
        :previous-year-button-label="previousYearButtonLabel"
        :next-year-button-label="nextYearButtonLabel"
        :year-selection-button-label="yearSelectionButtonLabel"
        :month-selection-button-label="monthSelectionButtonLabel"
        :previous-years-button-label="previousYearsButtonLabel"
        :next-years-button-label="nextYearsButtonLabel"
      ></UsaDatePickerCalendarDay>`,
    }

    mount(wrapperComponent, {
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    })

    cy.get('button[data-value="2024-06-03"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2024-06-03')
      .and('have.focus')

    cy.get('.usa-date-picker__calendar__previous-year').click()

    cy.get('button[data-value="2023-06-03"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2023-06-03')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__previous-year').click()

    // Will have focus because previous year button is not longer available.
    cy.get('button[data-value="2022-06-03"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2022-06-03')
      .and('have.focus')

    cy.get('.usa-date-picker__calendar__next-year').click()

    cy.get('button[data-value="2023-06-03"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2023-06-03')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__next-year').click()

    cy.get('button[data-value="2024-06-03"]')
      .should('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2024-06-03')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__next-year').click()

    cy.get('button[data-value="2025-06-03"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2025-06-03')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__next-year').click()

    // Will have focus because next year button is not longer available.
    cy.get('button[data-value="2026-06-03"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-value', '2026-06-03')
      .and('have.focus')
  })

  it('uses custom month and button labels', () => {
    const wrapperComponent = {
      components: { UsaDatePickerCalendarDay },
      data() {
        return {
          selectedDate: '2022-01-01',
          activeDate: '2022-01-01',
          minDate: '2021-06-03',
          maxDate: '2026-06-03',
          previousYearButtonLabel: 'Test previous year button label',
          nextYearButtonLabel: 'Test next year button label',
          previousMonthButtonLabel: 'Test previous month button label',
          nextMonthButtonLabel: 'Test next month button label',
          yearSelectionButtonLabel: 'Year %s is selected',
          monthSelectionButtonLabel: '%s is selected',
          previousYearsButtonLabel: 'Navigate back 12 years',
          nextYearsButtonLabel: 'Navigate forward 12 years',
          dayOfWeekLabels: [
            'Day A',
            'Day B',
            'Day C',
            'Day D',
            'Day E',
            'Day F',
            'Day G',
          ],
          dayOfWeekAbbreviationLabels: ['1', '2', '3', '4', '5', '6', '7'],
          monthLabels: [
            'Month 1',
            'Month 2',
            'Month 3',
            'Month 4',
            'Month 5',
            'Month 6',
            'Month 7',
            'Month 8',
            'Month 9',
            'Month 10',
            'Month 11',
            'Month 12',
          ],
        }
      },
      template: `<UsaDatePickerCalendarDay
        v-model:selected-date="selectedDate"
        v-model:active-date="activeDate"
        :min-date="minDate"
        :max-date="maxDate"
        :month-labels="monthLabels"
        :day-of-week-labels="dayOfWeekLabels"
        :day-of-week-abbreviation-labels="dayOfWeekAbbreviationLabels"
        :previous-month-button-label="previousMonthButtonLabel"
        :next-month-button-label="nextMonthButtonLabel"
        :previous-year-button-label="previousYearButtonLabel"
        :next-year-button-label="nextYearButtonLabel"
        :year-selection-button-label="yearSelectionButtonLabel"
        :month-selection-button-label="monthSelectionButtonLabel"
        :previous-years-button-label="previousYearsButtonLabel"
        :next-years-button-label="nextYearsButtonLabel"
      ></UsaDatePickerCalendarDay>`,
    }

    mount(wrapperComponent, {
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    })

    cy.get('.usa-date-picker__calendar__previous-year').should(
      'have.attr',
      'aria-label',
      'Test previous year button label'
    )

    cy.get('.usa-date-picker__calendar__previous-month').should(
      'have.attr',
      'aria-label',
      'Test previous month button label'
    )

    cy.get('.usa-date-picker__calendar__next-month').should(
      'have.attr',
      'aria-label',
      'Test next month button label'
    )

    cy.get('.usa-date-picker__calendar__next-year').should(
      'have.attr',
      'aria-label',
      'Test next year button label'
    )

    cy.get('.usa-date-picker__calendar__table > thead th:nth-of-type(1)')
      .should('have.attr', 'aria-label', 'Day A')
      .and('contain', '1')

    cy.get('.usa-date-picker__calendar__table > thead th:nth-of-type(2)')
      .should('have.attr', 'aria-label', 'Day B')
      .and('contain', '2')

    cy.get('.usa-date-picker__calendar__table > thead th:nth-of-type(3)')
      .should('have.attr', 'aria-label', 'Day C')
      .and('contain', '3')

    cy.get('.usa-date-picker__calendar__table > thead th:nth-of-type(4)')
      .should('have.attr', 'aria-label', 'Day D')
      .and('contain', '4')

    cy.get('.usa-date-picker__calendar__table > thead th:nth-of-type(5)')
      .should('have.attr', 'aria-label', 'Day E')
      .and('contain', '5')

    cy.get('.usa-date-picker__calendar__table > thead th:nth-of-type(6)')
      .should('have.attr', 'aria-label', 'Day F')
      .and('contain', '6')

    cy.get('.usa-date-picker__calendar__table > thead th:nth-of-type(7)')
      .should('have.attr', 'aria-label', 'Day G')
      .and('contain', '7')

    cy.get('.usa-date-picker__calendar__year-selection')
      .as('yearSelector')
      .should('have.attr', 'aria-label', 'Year 2022 is selected')
      .and('contain', '2022')

    cy.get('.usa-date-picker__calendar__month-selection')
      .as('monthSelector')
      .should('have.attr', 'aria-label', 'Month 1 is selected')
      .and('contain', 'Month 1')

    cy.get('.usa-date-picker__calendar__next-year').click()

    cy.get('@yearSelector')
      .should('have.attr', 'aria-label', 'Year 2023 is selected')
      .and('contain', '2023')

    cy.get('@monthSelector')
      .should('have.attr', 'aria-label', 'Month 1 is selected')
      .and('contain', 'Month 1')

    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('@yearSelector')
      .should('have.attr', 'aria-label', 'Year 2023 is selected')
      .and('contain', '2023')

    cy.get('@monthSelector')
      .should('have.attr', 'aria-label', 'Month 2 is selected')
      .and('contain', 'Month 2')
  })

  it('calendar updates to reflect new selected, min, and max dates', () => {
    mount(UsaDatePickerCalendarDay, {
      props: {
        selectedDate: '2022-06-15',
        activeDate: '2022-06-15',
        minDate: '2022-06-02',
        maxDate: '2022-06-28',
        monthLabels: MONTH_LABELS,
        dayOfWeekLabels: DAY_OF_WEEK_LABELS,
        dayOfWeekAbbreviationLabels: DAY_OF_WEEK_ABBREVIATION_LABELS,
        previousYearButtonLabel: 'Navigate back one year',
        nextYearButtonLabel: 'Navigate forward one year',
        previousMonthButtonLabel: 'Navigate back one month',
        nextMonthButtonLabel: 'Navigate forward one month',
        yearSelectionButtonLabel: '%s. Click to select year',
        monthSelectionButtonLabel: '%s. Click to select month',
        previousYearsButtonLabel: 'Navigate back 12 years',
        nextYearsButtonLabel: 'Navigate forward 12 years',
      },
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    }).as('wrapper')

    cy.get('.usa-date-picker__calendar__table > tbody > tr')
      .should('have.length', 5)
      .then(() => {
        cy.wrap(defaultData.june).each((row, rowIndex) => {
          cy.wrap(row).each((button, buttonIndex) => {
            const disabledDates = [
              '2022-05-29',
              '2022-05-30',
              '2022-05-31',
              '2022-06-01',
              '2022-06-29',
              '2022-06-30',
              '2022-07-01',
              '2022-07-02',
            ]

            if (disabledDates.includes(button.date)) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('have.attr', 'disabled', 'disabled')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('not.have.attr', 'disabled', 'disabled')
            }

            if (button.date === '2022-06-15') {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '0')
                .and('have.attr', 'aria-selected', 'true')
                .and('have.class', 'usa-date-picker__calendar__date--selected')
                .and('have.class', 'usa-date-picker__calendar__date--focused')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '-1')
                .and('have.attr', 'aria-selected', 'false')
            }
          })
        })
      })
      .then(() => {
        cy.get('@wrapper').invoke('setProps', { minDate: '2022-05-30' })
        cy.get('@wrapper').invoke('setProps', { maxDate: '2022-07-01' })
        cy.get('@wrapper').invoke('setProps', { activeDate: '2022-06-20' })
        cy.get('@wrapper').invoke('setProps', { selectedDate: '2022-06-17' })
      })
      .then(() => {
        cy.wrap(defaultData.june).each((row, rowIndex) => {
          cy.wrap(row).each((button, buttonIndex) => {
            const disabledDates = ['2022-05-29', '2022-07-02']

            if (disabledDates.includes(button.date)) {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('have.attr', 'disabled', 'disabled')
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              ).should('not.have.attr', 'disabled', 'disabled')
            }

            if (button.date === '2022-06-15' || button.date === '2022-06-17') {
              if (button.date === '2022-06-15') {
                cy.get(
                  `.usa-date-picker__calendar__table tr:nth-of-type(${
                    rowIndex + 1
                  }) td:nth-of-type(${buttonIndex + 1}) button`
                )
                  .should('have.attr', 'tabindex', '-1')
                  .and('not.have.attr', 'aria-selected', 'true')
                  .and(
                    'not.have.class',
                    'usa-date-picker__calendar__date--selected'
                  )
                  .and(
                    'not.have.class',
                    'usa-date-picker__calendar__date--focused'
                  )
              }

              if (button.date === '2022-06-17') {
                cy.get(
                  `.usa-date-picker__calendar__table tr:nth-of-type(${
                    rowIndex + 1
                  }) td:nth-of-type(${buttonIndex + 1}) button`
                )
                  .should('have.attr', 'tabindex', '0')
                  .and('have.attr', 'aria-selected', 'true')
                  .and(
                    'have.class',
                    'usa-date-picker__calendar__date--selected'
                  )
                  .and('have.class', 'usa-date-picker__calendar__date--focused')
              }
            } else {
              cy.get(
                `.usa-date-picker__calendar__table tr:nth-of-type(${
                  rowIndex + 1
                }) td:nth-of-type(${buttonIndex + 1}) button`
              )
                .should('have.attr', 'tabindex', '-1')
                .and('have.attr', 'aria-selected', 'false')
            }
          })
        })
      })
  })

  it('correct selected date and open values are emitted', () => {
    mount(UsaDatePickerCalendarDay, {
      props: {
        selectedDate: '2022-06-15',
        activeDate: '2022-06-15',
        minDate: '2022-06-01',
        maxDate: '2022-06-21',
        monthLabels: MONTH_LABELS,
        dayOfWeekLabels: DAY_OF_WEEK_LABELS,
        dayOfWeekAbbreviationLabels: DAY_OF_WEEK_ABBREVIATION_LABELS,
        previousYearButtonLabel: 'Navigate back one year',
        nextYearButtonLabel: 'Navigate forward one year',
        previousMonthButtonLabel: 'Navigate back one month',
        nextMonthButtonLabel: 'Navigate forward one month',
        yearSelectionButtonLabel: '%s. Click to select year',
        monthSelectionButtonLabel: '%s. Click to select month',
        previousYearsButtonLabel: 'Navigate back 12 years',
        nextYearsButtonLabel: 'Navigate forward 12 years',
      },
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    }).as('wrapper')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.not.have.property('update:open')
        expect(emitted).to.not.have.property('update:selectedDate')
      })

    cy.get('button[data-value="2022-06-03"]').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.have.property('update:open')
        expect(emitted).to.have.property('update:selectedDate')

        const currentOpenEvent = vm.emitted('update:open')

        expect(currentOpenEvent).to.have.length(1)
        expect(currentOpenEvent[0]).to.contain(false)

        const currentSelectedDateEvent = vm.emitted('update:selectedDate')

        expect(currentSelectedDateEvent).to.have.length(1)
        expect(currentSelectedDateEvent[0]).to.contain('2022-06-03')
      })
  })

  it('month select value is emitted', () => {
    mount(UsaDatePickerCalendarDay, {
      props: {
        selectedDate: '2022-06-15',
        activeDate: '2022-06-15',
        minDate: '2022-06-01',
        maxDate: '2022-06-21',
        monthLabels: MONTH_LABELS,
        dayOfWeekLabels: DAY_OF_WEEK_LABELS,
        dayOfWeekAbbreviationLabels: DAY_OF_WEEK_ABBREVIATION_LABELS,
        previousYearButtonLabel: 'Navigate back one year',
        nextYearButtonLabel: 'Navigate forward one year',
        previousMonthButtonLabel: 'Navigate back one month',
        nextMonthButtonLabel: 'Navigate forward one month',
        yearSelectionButtonLabel: '%s. Click to select year',
        monthSelectionButtonLabel: '%s. Click to select month',
        previousYearsButtonLabel: 'Navigate back 12 years',
        nextYearsButtonLabel: 'Navigate forward 12 years',
      },
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    }).as('wrapper')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).not.to.have.property('update:selectorMode')
      })

    cy.get('.usa-date-picker__calendar__month-selection').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.have.property('update:selectorMode')

        const currentSelectorMode = vm.emitted('update:selectorMode')

        expect(currentSelectorMode).to.have.length(1)
        expect(currentSelectorMode[0]).to.contain('month')
      })
  })
  it('year select value is emitted', () => {
    mount(UsaDatePickerCalendarDay, {
      props: {
        selectorMode: 'day',
        selectedDate: '2022-06-15',
        activeDate: '2022-06-15',
        minDate: '2022-06-01',
        maxDate: '2022-06-21',
        monthLabels: MONTH_LABELS,
        dayOfWeekLabels: DAY_OF_WEEK_LABELS,
        dayOfWeekAbbreviationLabels: DAY_OF_WEEK_ABBREVIATION_LABELS,
        previousYearButtonLabel: 'Navigate back one year',
        nextYearButtonLabel: 'Navigate forward one year',
        previousMonthButtonLabel: 'Navigate back one month',
        nextMonthButtonLabel: 'Navigate forward one month',
        yearSelectionButtonLabel: '%s. Click to select year',
        monthSelectionButtonLabel: '%s. Click to select month',
        previousYearsButtonLabel: 'Navigate back 12 years',
        nextYearsButtonLabel: 'Navigate forward 12 years',
      },
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    }).as('wrapper')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).not.to.have.property('update:selectorMode')
      })

    cy.get('.usa-date-picker__calendar__year-selection').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.have.property('update:selectorMode')

        const currentSelectorMode = vm.emitted('update:selectorMode')

        expect(currentSelectorMode).to.have.length(1)
        expect(currentSelectorMode[0]).to.contain('year')
      })
  })

  it('marked as dirty after change in highlighted date', () => {
    mount(UsaDatePickerCalendarDay, {
      props: {
        selectedDate: '',
        activeDate: '2022-06-15',
        minDate: '2022-06-01',
        maxDate: '2022-06-21',
        monthLabels: MONTH_LABELS,
        dayOfWeekLabels: DAY_OF_WEEK_LABELS,
        dayOfWeekAbbreviationLabels: DAY_OF_WEEK_ABBREVIATION_LABELS,
        previousYearButtonLabel: 'Navigate back one year',
        nextYearButtonLabel: 'Navigate forward one year',
        previousMonthButtonLabel: 'Navigate back one month',
        nextMonthButtonLabel: 'Navigate forward one month',
        yearSelectionButtonLabel: '%s. Click to select year',
        monthSelectionButtonLabel: '%s. Click to select month',
        previousYearsButtonLabel: 'Navigate back 12 years',
        nextYearsButtonLabel: 'Navigate forward 12 years',
      },
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    }).as('wrapper')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).not.to.have.property('update:isPristine')
        expect(emitted).to.have.property('update:highlightedDate')

        const currentHighlightedDateEvent = vm.emitted('update:highlightedDate')

        expect(currentHighlightedDateEvent).to.have.length(1)
        expect(currentHighlightedDateEvent[0]).to.contain('2022-06-15')
      })

    cy.get('button[data-value="2022-06-18"]').trigger('mouseover')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.have.property('update:isPristine')
        expect(emitted).to.have.property('update:highlightedDate')

        const currentPristineEvent = vm.emitted('update:isPristine')

        expect(currentPristineEvent).to.have.length(1)
        expect(currentPristineEvent[0]).to.contain(false)

        const currentHighlightedDateEvent = vm.emitted('update:highlightedDate')
        expect(currentHighlightedDateEvent).to.have.length(2)
        expect(currentHighlightedDateEvent[1]).to.contain('2022-06-18')
      })
  })
})
