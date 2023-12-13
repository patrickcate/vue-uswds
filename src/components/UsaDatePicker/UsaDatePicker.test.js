import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { addMonths, subDays } from 'date-fns'
import { today, formatIsoDate, formatUsaDate } from '@/utils/dates.js'
import UsaDatePicker from './UsaDatePicker.vue'

describe('UsaDatePicker', () => {
  it('renders the component', () => {
    const wrapperComponent = {
      components: { UsaDatePicker },
      data() {
        return {
          selectedDate: '2022-09-04',
          minDate: '2022-05-25',
          maxDate: '2024-01-09',
        }
      },
      template: `<UsaDatePicker
        v-model="selectedDate"
        :min-date="minDate"
        :max-date="maxDate"
      ></UsaDatePicker>`,
    }

    cy.mount(wrapperComponent, {}).its('wrapper').as('wrapper')

    cy.get('div.usa-date-picker').should(
      'have.class',
      'usa-date-picker--initialized'
    )

    cy.get('div.usa-form-group').should('not.exist')
    cy.get('label.usa-label').should('not.exist')
    cy.get('.usa-hint').should('not.exist')
    cy.get('.usa-error-message').should('not.exist')

    cy.get('.usa-date-picker > div.usa-date-picker__wrapper').should('exist')

    cy.get('input.usa-input')
      .as('input')
      .should('have.class', 'usa-date-picker__external-input')
      .and('have.value', '09/04/2022')
      .and('have.attr', 'type', 'text')
      .and('have.attr', 'id')

    cy.get('button.usa-date-picker__button')
      .as('toggleButton')
      .should('have.attr', 'aria-haspopup', 'true')
      .and('have.attr', 'aria-label', 'Toggle calendar')
      .and('have.attr', 'type', 'button')
      .and('not.have.attr', 'disabled', 'disabled')

    cy.get('div.usa-date-picker__calendar')
      .as('calendar')
      .should('have.attr', 'role', 'dialog')
      .and('have.attr', 'aria-modal', 'true')
      .and('have.attr', 'data-value', '')
      .and('have.attr', 'hidden', 'hidden')
      .and('have.attr', 'style')

    cy.get('div.usa-date-picker__status')
      .as('status')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'role', 'status')
      .and('have.attr', 'aria-live', 'polite')
      .and('be.empty')

    cy.get('.usa-date-picker__calendar__date-picker').should('not.exist')

    // Open calendar.
    cy.get('@toggleButton').click()

    cy.get('@status').should(
      'contain',
      `Selected date. You can navigate by day using left and right arrows. Weeks by using up and down arrows. Months by using page up and page down keys. Years by using shift plus page up and shift plus page down. Home and end keys navigate to the beginning and end of a week.`
    )

    cy.get('button[data-value="2022-09-04"]').should('have.focus')

    cy.get('button[data-value="2022-09-05"]').trigger('mouseover')

    cy.get('button[data-value="2022-09-05"]').should('have.focus')

    cy.get('@status').should('contain', 'September 2022')

    // Go to next month.
    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('button[data-value="2022-10-05"]').should(
      'have.class',
      'usa-date-picker__calendar__date--focused'
    )

    cy.get('@status').should('contain', 'October 2022')

    cy.get('@calendar').should('have.attr', 'data-value', '2022-10-05')

    // Go to next year.
    cy.get('.usa-date-picker__calendar__next-year').click()

    cy.get('button[data-value="2023-10-05"]').should(
      'have.class',
      'usa-date-picker__calendar__date--focused'
    )

    cy.get('@calendar').should('have.attr', 'data-value', '2023-10-05')

    cy.get('@status').should('contain', 'October 2023')

    // Choose new month
    cy.get('.usa-date-picker__calendar__month-selection').click()

    cy.get('@status').should('contain', 'Select a month.')

    cy.get('button[data-label="October"').should('have.focus')

    cy.get('button[data-label="November"').click()

    cy.get('button[data-value="2023-11-05"]').should(
      'have.class',
      'usa-date-picker__calendar__date--focused'
    )

    cy.get('@calendar').should('have.attr', 'data-value', '2023-11-05')

    // Choose a new year.
    cy.get('.usa-date-picker__calendar__year-selection').click()

    cy.get('@status').should(
      'contain',
      'Showing years 2022 to 2024. Select a year.'
    )

    cy.get('button[data-value="2022"').click()

    cy.get('button[data-value="2022-11-05"]').should(
      'have.class',
      'usa-date-picker__calendar__date--focused'
    )

    // Select a date.
    cy.get('button[data-value="2022-11-05"]').click()

    cy.get('@calendar').should('have.attr', 'data-value', '2022-11-05')

    cy.get('@input').should('have.value', '11/05/2022')
    cy.get('.usa-date-picker__calendar__date-picker').should('not.exist')

    // Set new date input value.
    cy.get('@input').clear()
    cy.get('@input').type('09/01/2023')
    cy.get('@input').should('have.value', '09/01/2023')

    // Open date picker.
    cy.get('@toggleButton').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')

    cy.get('button[data-value="2023-09-01"]')
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('@calendar').should('have.attr', 'data-value', '2023-09-01')

    // Try closing modal by pressing escape key.
    cy.realPress('Escape')

    cy.get('.usa-date-picker__calendar__date-picker').should('not.exist')
    cy.get('@input').should('have.value', '09/01/2023')
    cy.get('@calendar').should('have.attr', 'data-value', '2023-09-01')

    // Open date picker.
    cy.get('@toggleButton').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')

    cy.get('button[data-value="2023-09-01"]')
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('@calendar').should('have.attr', 'data-value', '2023-09-01')

    // Try closing date picker by pressing escape key.
    cy.get('html').click('bottomRight')

    cy.get('.usa-date-picker__calendar__date-picker').should('not.exist')
    cy.get('@input').should('have.value', '09/01/2023')
    cy.get('@calendar').should('have.attr', 'data-value', '2023-09-01')

    // Open date picker.
    cy.get('@toggleButton').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')

    // Close date picker.
    cy.get('@toggleButton').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('not.exist')

    cy.get('@toggleButton').should('have.focus')

    cy.get('@input').clear()

    cy.get('@input').should('have.focus')

    // Open date picker.
    cy.get('@toggleButton').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')

    cy.get('@input').should('have.value', '')
    cy.get('@calendar').should('not.have.attr', 'data-value', '2023-09-01')
  })

  it('displays label, hint, and error messages', () => {
    cy.mount(UsaDatePicker, {
      props: {
        modelValue: '2022-09-04',
        minDate: '2022-05-25',
        maxDate: '2024-01-09',
        label: 'Test label prop',
        id: 'test-id',
      },
      attrs: {
        // Should not be inherited by root component element.
        name: 'test-date-picker-name',
      },
      slots: {
        hint: () => 'Test hint slot',
        'error-message': () => 'Test error slot',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('button.usa-date-picker__button').click()

    cy.get('div.usa-form-group').should(
      'not.have.attr',
      'name',
      'test-date-picker-name'
    )

    cy.get('label.usa-label')
      .should('have.id', 'test-id-label')
      .and('have.attr', 'for', 'test-id')
      .and('contain', 'Test label prop')

    cy.get('span.usa-hint')
      .should('have.id', 'test-id-hint')
      .and('contain', 'Test hint slot')

    cy.get('span.usa-error-message').should('not.exist')

    cy.get('input.usa-date-picker__external-input')
      .should('have.id', 'test-id')
      .and('have.attr', 'aria-describedby', 'test-id-hint')
      .and('have.attr', 'aria-labelledby', 'test-id-label')
      .and('have.attr', 'name', 'test-date-picker-name')

    cy.get('@wrapper').invoke('setProps', { error: true })

    cy.get('span.usa-error-message')
      .should('have.id', 'test-id-error-message')
      .and('contain', 'Test error slot')

    cy.get('input.usa-date-picker__external-input').should(
      'have.attr',
      'aria-describedby',
      'test-id-hint test-id-error-message'
    )
  })

  it('highlight minimum date if today is not in range and there is no default selected date', () => {
    const wrapperComponent = {
      components: { UsaDatePicker },
      data() {
        return {
          selectedDate: '',
          minDate: '1997-06-03',
          maxDate: '1998-06-03',
        }
      },
      template: `<UsaDatePicker
        v-model="selectedDate"
        :min-date="minDate"
        :max-date="maxDate"
      ></UsaDatePicker>`,
    }

    cy.mount(wrapperComponent, {})

    cy.get('button.usa-date-picker__button').click()

    cy.get('button[data-value="1997-06-03"]')
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.focus')
  })

  it('changing date in text input updates calendar picker', () => {
    const todaysDateObject = today()
    const todaysDate = formatIsoDate(todaysDateObject)
    const typedUsaDate = formatUsaDate(addMonths(todaysDateObject, 2))
    const typedIsoDate = formatIsoDate(addMonths(todaysDateObject, 2))
    const maxDate = formatIsoDate(subDays(addMonths(todaysDateObject, 2), 1))

    const wrapperComponent = {
      components: { UsaDatePicker },
      data() {
        return {
          selectedDate: '',
          minDate: '2022-03-25',
          maxDate: `${maxDate}`,
        }
      },
      template: `<UsaDatePicker
        v-model="selectedDate"
        :min-date="minDate"
        :max-date="maxDate"
      ></UsaDatePicker>`,
    }

    cy.mount(wrapperComponent, {}).its('wrapper').as('wrapper')

    cy.get('button.usa-date-picker__button').click()

    cy.get('.usa-date-picker__external-input')
      .as('input')
      .should('have.value', '')

    cy.get(`button[data-value="${todaysDate}"]`)
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.focus')

    cy.get('@input').click()
    cy.get('@input').type('04/12/2022')

    cy.get('button[data-value="2022-04-12"]')
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'aria-selected', 'true')

    cy.get('@input').clear()
    cy.get('@input').type(typedUsaDate)

    cy.get(`button[data-value="${typedIsoDate}"]`)
      .should('not.have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.attr', 'aria-selected', 'true')

    cy.get(`button[data-value="${maxDate}"]`)
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.attr', 'aria-selected', 'true')

    cy.get('@input').clear()
    cy.get('@input').type('04/12/2020')

    cy.get('button[data-value="2022-03-25"]')
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('not.have.attr', 'aria-selected', 'true')
  })

  it('screen reader status text uses scoped slots values', () => {
    const wrapperComponent = {
      components: { UsaDatePicker },
      data() {
        return {
          selectedDate: '2022-09-04',
          minDate: '2005-03-25',
          maxDate: '2025-01-09',
        }
      },
      template: `<UsaDatePicker
        v-model="selectedDate"
        :min-date="minDate"
        :max-date="maxDate"
      >
        <template #status="{ open, isPristine, selectorMode, selectedDate, highlightedDate, activeMonthLabel, activeYear, yearRangeStart, yearRangeStop }">
          <span :data-test-is-open="open"></span>
          <span :data-test-is-pristine="isPristine"></span>
          <span :data-test-selector-mode="selectorMode"></span>
          <span :data-test-selected-date="selectedDate"></span>
          <span :data-test-highlighted-date="highlightedDate"></span>
          <span :data-test-active-month-label="activeMonthLabel"></span>
          <span :data-test-active-year="activeYear"></span>
          <span :data-test-year-range-start="yearRangeStart"></span>
          <span :data-test-year-range-stop="yearRangeStop"></span>
        </template>
      </UsaDatePicker>`,
    }

    cy.mount(wrapperComponent, {}).its('wrapper').as('wrapper')

    cy.get('[data-test-is-open]')
      .as('isOpen')
      .should('have.attr', 'data-test-is-open', 'false')

    cy.get('[data-test-is-pristine]')
      .as('isPristine')
      .should('have.attr', 'data-test-is-pristine', 'true')

    cy.get('[data-test-selector-mode]')
      .as('selectorMode')
      .should('have.attr', 'data-test-selector-mode', 'day')

    cy.get('[data-test-selected-date]')
      .as('selectedDate')
      .should('have.attr', 'data-test-selected-date', '2022-09-04')

    cy.get('[data-test-highlighted-date]')
      .as('highlightedDate')
      .should('have.attr', 'data-test-highlighted-date', '')

    cy.get('[data-test-active-month-label]')
      .as('activeMonthLabel')
      .should('have.attr', 'data-test-active-month-label', 'September')

    cy.get('[data-test-active-year]')
      .as('activeYear')
      .should('have.attr', 'data-test-active-year', '2022')

    cy.get('[data-test-year-range-start]')
      .as('yearRangeStart')
      .should('have.attr', 'data-test-year-range-start', '')

    cy.get('[data-test-year-range-stop]')
      .as('yearRangeStop')
      .should('have.attr', 'data-test-year-range-stop', '')

    cy.get('.usa-date-picker__button').click()

    cy.get('@isOpen').should('have.attr', 'data-test-is-open', 'true')
    cy.get('@highlightedDate').should(
      'have.attr',
      'data-test-highlighted-date',
      '2022-09-04'
    )

    cy.get('button[data-value="2022-09-12"]').trigger('mouseover')

    cy.get('@isPristine').should('have.attr', 'data-test-is-pristine', 'false')
    cy.get('@highlightedDate').should(
      'have.attr',
      'data-test-highlighted-date',
      '2022-09-12'
    )

    cy.get('.usa-date-picker__calendar__month-selection').click()

    cy.get('@selectorMode').should(
      'have.attr',
      'data-test-selector-mode',
      'month'
    )

    cy.get('button[data-label="October"]').click()

    cy.get('@activeMonthLabel').should(
      'have.attr',
      'data-test-active-month-label',
      'October'
    )
    cy.get('@highlightedDate').should(
      'have.attr',
      'data-test-highlighted-date',
      '2022-10-12'
    )
    cy.get('@selectorMode').should(
      'have.attr',
      'data-test-selector-mode',
      'day'
    )

    cy.get('.usa-date-picker__calendar__year-selection').click()

    cy.get('@selectorMode').should(
      'have.attr',
      'data-test-selector-mode',
      'year'
    )
    cy.get('@yearRangeStart').should(
      'have.attr',
      'data-test-year-range-start',
      '2016'
    )
    cy.get('@yearRangeStop').should(
      'have.attr',
      'data-test-year-range-stop',
      '2025'
    )

    cy.get('button[data-value="2016"').click()

    cy.get('@highlightedDate').should(
      'have.attr',
      'data-test-highlighted-date',
      '2016-10-12'
    )
    cy.get('@highlightedDate').should(
      'have.attr',
      'data-test-highlighted-date',
      '2016-10-12'
    )
    cy.get('@selectorMode').should(
      'have.attr',
      'data-test-selector-mode',
      'day'
    )

    cy.get('@activeYear').should('have.attr', 'data-test-active-year', '2016')

    cy.get('button[data-value="2016-10-13"]').click()

    cy.get('@isOpen').should('have.attr', 'data-test-is-open', 'false')

    cy.get('@selectedDate').should(
      'have.attr',
      'data-test-selected-date',
      '2016-10-13'
    )

    cy.get('@highlightedDate').should(
      'have.attr',
      'data-test-highlighted-date',
      '2016-10-13'
    )

    cy.get('@yearRangeStart').should(
      'have.attr',
      'data-test-year-range-start',
      ''
    )
    cy.get('@yearRangeStop').should(
      'have.attr',
      'data-test-year-range-stop',
      ''
    )

    cy.get('@isPristine').should('have.attr', 'data-test-is-pristine', 'true')
  })

  it('`required`, `disabled` and `readonly` props are passed to input', () => {
    cy.mount(UsaDatePicker, {
      props: {
        label: 'Test label',
        required: true,
        disabled: true,
        readonly: true,
      },
    })

    cy.get('.usa-label > abbr')
      .should('have.class', 'usa-hint--required')
      .should('have.attr', 'title', 'required')
      .and('contain', '*')

    cy.get('.usa-date-picker__external-input')
      .should('have.attr', 'required', 'required')
      .and('have.attr', 'disabled', 'disabled')
      .and('have.attr', 'readonly', 'readonly')

    cy.get('.usa-date-picker__button').should(
      'have.attr',
      'disabled',
      'disabled'
    )
  })

  it('picker uses custom button labels', () => {
    cy.mount(UsaDatePicker, {
      props: {
        modelValue: '2022-09-04',
        monthLabels: [
          'Jan1',
          'Feb2',
          'Mar3',
          'Apr4',
          'May5',
          'Jun6',
          'Jul7',
          'Aug8',
          'Sep9',
          'Oct10',
          'Nov11',
          'Dec12',
        ],
        dayOfWeekLabels: [
          'Sun1',
          'Mon2',
          'Tue3',
          'Wed4',
          'Thu5',
          'Fri6',
          'Sat7',
        ],
        dayOfWeekAbbreviationLabels: [
          'Su1',
          'Mo2',
          'Tu3',
          'We4',
          'Th5',
          'Fr6',
          'Sa7',
        ],
        toggleButtonAriaLabel: 'Test toggle button',
        previousYearButtonLabel: 'Custom test back one year',
        nextYearButtonLabel: 'Custom test forward one year',
        previousMonthButtonLabel: 'Custom test back one month',
        nextMonthButtonLabel: 'Custom test forward one month',
        yearSelectionButtonLabel: 'Custom test select year. %s.',
        monthSelectionButtonLabel: 'Custom test select month. %s.',
        previousYearsButtonLabel: 'Custom test back 12 years',
        nextYearsButtonLabel: 'Custom test forward 12 years',
        label: 'Test label prop',
        error: true,
        id: 'test-id',
      },
      slots: {
        label: () => 'Test label slot',
        'error-message': () => 'Test error slot',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('button.usa-date-picker__button').click()

    cy.get('label.usa-label').and('contain', 'Test label slot')
    cy.get('input.usa-date-picker__external-input').should(
      'have.attr',
      'aria-describedby',
      'test-id-error-message'
    )

    cy.get('.usa-date-picker__button').should(
      'have.attr',
      'aria-label',
      'Test toggle button'
    )
    cy.get('.usa-date-picker__calendar__previous-year').should(
      'have.attr',
      'aria-label',
      'Custom test back one year'
    )
    cy.get('.usa-date-picker__calendar__previous-month').should(
      'have.attr',
      'aria-label',
      'Custom test back one month'
    )
    cy.get('.usa-date-picker__calendar__month-selection')
      .as('monthSelector')
      .should('have.attr', 'aria-label', 'Custom test select month. Sep9.')

    cy.get('.usa-date-picker__calendar__year-selection')
      .as('yearSelector')
      .should('have.attr', 'aria-label', 'Custom test select year. 2022.')

    cy.get('.usa-date-picker__calendar__next-month').should(
      'have.attr',
      'aria-label',
      'Custom test forward one month'
    )

    cy.get('.usa-date-picker__calendar__next-year').should(
      'have.attr',
      'aria-label',
      'Custom test forward one year'
    )

    cy.get('.usa-date-picker__calendar__day-of-week:nth-of-type(1)')
      .should('have.attr', 'aria-label', 'Sun1')
      .and('contain', 'Su1')
    cy.get('.usa-date-picker__calendar__day-of-week:nth-of-type(2)')
      .should('have.attr', 'aria-label', 'Mon2')
      .and('contain', 'Mo2')
    cy.get('.usa-date-picker__calendar__day-of-week:nth-of-type(3)')
      .should('have.attr', 'aria-label', 'Tue3')
      .and('contain', 'Tu3')
    cy.get('.usa-date-picker__calendar__day-of-week:nth-of-type(4)')
      .should('have.attr', 'aria-label', 'Wed4')
      .and('contain', 'We4')
    cy.get('.usa-date-picker__calendar__day-of-week:nth-of-type(5)')
      .should('have.attr', 'aria-label', 'Thu5')
      .and('contain', 'Th5')
    cy.get('.usa-date-picker__calendar__day-of-week:nth-of-type(6)')
      .should('have.attr', 'aria-label', 'Fri6')
      .and('contain', 'Fr6')
    cy.get('.usa-date-picker__calendar__day-of-week:nth-of-type(7)')
      .should('have.attr', 'aria-label', 'Sat7')
      .and('contain', 'Sa7')

    cy.get('@monthSelector').click()

    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(1) td:nth-of-type(1) button'
    )
      .should('have.attr', 'data-label', 'Jan1')
      .and('contain', 'Jan1')
    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(1) td:nth-of-type(2) button'
    )
      .should('have.attr', 'data-label', 'Feb2')
      .and('contain', 'Feb2')
    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(1) td:nth-of-type(3) button'
    )
      .should('have.attr', 'data-label', 'Mar3')
      .and('contain', 'Mar3')
    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(2) td:nth-of-type(1) button'
    )
      .should('have.attr', 'data-label', 'Apr4')
      .and('contain', 'Apr4')
    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(2) td:nth-of-type(2) button'
    )
      .should('have.attr', 'data-label', 'May5')
      .and('contain', 'May5')
    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(2) td:nth-of-type(3) button'
    )
      .should('have.attr', 'data-label', 'Jun6')
      .and('contain', 'Jun6')
    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(3) td:nth-of-type(1) button'
    )
      .should('have.attr', 'data-label', 'Jul7')
      .and('contain', 'Jul7')
    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(3) td:nth-of-type(2) button'
    )
      .should('have.attr', 'data-label', 'Aug8')
      .and('contain', 'Aug8')
    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(3) td:nth-of-type(3) button'
    )
      .should('have.attr', 'data-label', 'Sep9')
      .and('contain', 'Sep9')
    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(4) td:nth-of-type(1) button'
    )
      .should('have.attr', 'data-label', 'Oct10')
      .and('contain', 'Oct10')
    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(4) td:nth-of-type(2) button'
    )
      .should('have.attr', 'data-label', 'Nov11')
      .and('contain', 'Nov11')
    cy.get(
      '.usa-date-picker__calendar__table tr:nth-of-type(4) td:nth-of-type(3) button'
    )
      .should('have.attr', 'data-label', 'Dec12')
      .and('contain', 'Dec12')

    cy.get('button[data-label="Sep9"]').click()

    cy.get('@yearSelector').click()

    cy.get('.usa-date-picker__calendar__previous-year-chunk').should(
      'have.attr',
      'aria-label',
      'Custom test back 12 years'
    )
    cy.get('.usa-date-picker__calendar__next-year-chunk').should(
      'have.attr',
      'aria-label',
      'Custom test forward 12 years'
    )
  })

  it('adds custom CSS classes', () => {
    cy.mount(UsaDatePicker, {
      props: {
        label: 'Test label',
        customClasses: {
          formGroup: ['test-form-group-class'],
          component: ['test-component-class'],
          label: ['test-label-class'],
          input: ['test-input-class'],
        },
      },

      slots: {
        hint: () => 'Test hint slot',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-form-group').should('have.class', 'test-form-group-class')
    cy.get('.usa-date-picker').should('have.class', 'test-component-class')
    cy.get('.usa-date-picker__external-input').should(
      'have.class',
      'test-input-class'
    )
    cy.get('.usa-label').should('have.class', 'test-label-class')

    cy.get('@wrapper').invoke('setProps', { customClasses: {} })

    cy.get('.usa-form-group').should('not.have.class', 'test-form-group-class')
    cy.get('.usa-date-picker').should('not.have.class', 'test-component-class')
    cy.get('.usa-date-picker__external-input').should(
      'not.have.class',
      'test-input-class'
    )
    cy.get('.usa-label').should('not.have.class', 'test-label-class')
  })

  it('warns in console about invalid number of day of week abbreviation labels', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaDatePicker, {
      props: {
        modelValue: '2022-06-15',
        dayOfWeekLabels: ['1', '2', '3', '4', '5', '6', '7', '8'],
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      'Missing labels, there must be a label for each day of the week. 7 total are needed but only 8 were given.'
    )
  })

  it('warns in console about invalid number of day of week labels', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaDatePicker, {
      props: {
        modelValue: '2022-06-15',
        dayOfWeekLabels: ['1', '2', '3', '4', '5', '6'],
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      'Missing labels, there must be a label for each day of the week. 7 total are needed but only 6 were given.'
    )
  })

  it('warns in console about invalid number of month labels', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaDatePicker, {
      props: {
        selectedDate: '2022-06-15',
        monthLabels: [
          'Jan1',
          'Feb2',
          'Mar3',
          'Apr4',
          'May5',
          'Jun6',
          'Jul7',
          'Aug8',
          'Sep9',
          'Oct10',
          'Nov11',
        ],
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      'Missing labels, there must be a label for each month of the year. 12 total are needed but only 11 were given.'
    )
  })

  it('warns in console about invalid range type value', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaDatePicker, {
      props: {
        rangeType: 'noarange',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'noarange' is an invalid range type. Range must be empty, 'start', or 'end'.`
    )
  })
})
