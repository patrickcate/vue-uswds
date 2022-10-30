import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { ref } from 'vue'
import {
  MONTH_LABELS,
  DAY_OF_WEEK_LABELS,
  DAY_OF_WEEK_ABBREVIATION_LABELS,
  MIN_DATE,
  MAX_DATE,
} from '@/utils/constants.js'
import { today, formatIsoDate } from '@/utils/dates.js'
import UsaDatePickerCalendar from './UsaDatePickerCalendar.vue'

describe('UsaDatePickerCalendar', () => {
  it('renders the component', () => {
    const wrapperComponent = {
      components: { UsaDatePickerCalendar },
      data() {
        return {
          open: true,
          selectorMode: 'day',
          selectedDate: '2022-07-13',
          activeDate: '2022-07-13',
          highlightedDate: '',
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
      template: `<UsaDatePickerCalendar
        v-model:selector-mode="selectorMode"
        v-model:open="open"
        v-model:selected-date="selectedDate"
        v-model:active-date="activeDate"
        v-model:highlighted-date="highlightedDate"
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
      ></UsaDatePickerCalendar>`,
    }

    mount(wrapperComponent, {
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    }).as('wrapper')

    cy.get('.usa-date-picker__calendar')
      .should('have.attr', 'role', 'dialog')
      .and('have.attr', 'data-value', '2022-07-13')
      .and('not.have.attr', 'hidden', 'true')

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')
    cy.get('.usa-date-picker__calendar__month-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__year-picker').should('not.exist')

    cy.get('button[data-value="2022-07-13"')
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('.usa-date-picker__calendar__month-selection')
      .as('monthSelectorButton')
      .should('contain', 'July')

    // Open month selector.
    cy.get('@monthSelectorButton').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__month-picker').should('exist')
    cy.get('.usa-date-picker__calendar__year-picker').should('not.exist')

    cy.get('button[data-label="July"]')
      .should('have.class', 'usa-date-picker__calendar__month--focused')
      .and('have.class', 'usa-date-picker__calendar__month--selected')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('.usa-date-picker__calendar').should(
      'have.attr',
      'data-value',
      '2022-07-13'
    )

    cy.get('button[data-label="September"]').trigger('mouseover')

    cy.get('button[data-label="July"]')
      .should('not.have.class', 'usa-date-picker__calendar__month--focused')
      .and('have.class', 'usa-date-picker__calendar__month--selected')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('button[data-label="September"]')
      .should('have.class', 'usa-date-picker__calendar__month--focused')
      .and('not.have.class', 'usa-date-picker__calendar__month--selected')
      .and('have.attr', 'tabindex', '0')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('button[data-label="September"]').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')
    cy.get('.usa-date-picker__calendar__month-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__year-picker').should('not.exist')

    cy.get('.usa-date-picker__calendar').should(
      'have.attr',
      'data-value',
      '2022-09-13'
    )

    cy.get('@monthSelectorButton').should('contain', 'September')

    cy.get('button[data-value="2022-09-13"')
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'tabindex', '0')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('.usa-date-picker__calendar__year-selection')
      .as('yearSelectorButton')
      .should('contain', '2022')

    // Open year selector.
    cy.get('@yearSelectorButton').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__month-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__year-picker').should('exist')

    cy.get('button[data-value="2022"]')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('.usa-date-picker__calendar').should(
      'have.attr',
      'data-value',
      '2022-09-13'
    )

    cy.get('button[data-value="2023"]').trigger('mouseover')

    cy.get('button[data-value="2022"]')
      .should('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('button[data-value="2023"]')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.attr', 'tabindex', '0')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('button[data-value="2023"]').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')
    cy.get('.usa-date-picker__calendar__month-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__year-picker').should('not.exist')

    cy.get('.usa-date-picker__calendar').should(
      'have.attr',
      'data-value',
      '2023-01-09'
    )

    cy.get('@yearSelectorButton').should('contain', '2023')

    cy.get('button[data-value="2023-01-09"')
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'tabindex', '0')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.focus')

    // Open year selector.
    cy.get('@yearSelectorButton').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__month-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__year-picker').should('exist')

    cy.get('button[data-value="2023"]')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('.usa-date-picker__calendar').should(
      'have.attr',
      'data-value',
      '2023-01-09'
    )

    cy.get('button[data-value="2022"]').trigger('mouseover')

    cy.get('button[data-value="2023"]')
      .should('not.have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('button[data-value="2022"]')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('not.have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.attr', 'tabindex', '0')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('button[data-value="2022"]').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')
    cy.get('.usa-date-picker__calendar__month-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__year-picker').should('not.exist')

    cy.get('.usa-date-picker__calendar').should(
      'have.attr',
      'data-value',
      '2022-05-25'
    )

    cy.get('@yearSelectorButton').should('contain', '2022')

    cy.get('button[data-value="2022-05-25"')
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'tabindex', '0')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.focus')

    // Open year selector.
    cy.get('@yearSelectorButton').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__month-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__year-picker').should('exist')

    cy.get('button[data-value="2022"]')
      .should('have.class', 'usa-date-picker__calendar__year--focused')
      .and('have.class', 'usa-date-picker__calendar__year--selected')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('.usa-date-picker__calendar').should(
      'have.attr',
      'data-value',
      '2022-05-25'
    )

    cy.get('button[data-value="2022"]').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')
    cy.get('.usa-date-picker__calendar__month-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__year-picker').should('not.exist')

    cy.get('.usa-date-picker__calendar').should(
      'have.attr',
      'data-value',
      '2022-05-25'
    )

    cy.get('@yearSelectorButton').should('contain', '2022')

    cy.get('button[data-value="2022-05-25"')
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'tabindex', '0')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.focus')

    // Select a date.
    cy.get('button[data-value="2022-05-26"').click()

    cy.get('.usa-date-picker__calendar').should(
      'have.attr',
      'data-value',
      '2022-05-26'
    )

    cy.get('.usa-date-picker__calendar__date-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__month-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__year-picker').should('not.exist')

    cy.get('@wrapper').invoke('setProps', { open: true })

    cy.get('.usa-date-picker__calendar').should(
      'have.attr',
      'data-value',
      '2022-05-26'
    )

    cy.get('button[data-value="2022-05-26"')
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-selected', 'true')
      .and('have.focus')

    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('.usa-date-picker__calendar').should(
      'have.attr',
      'data-value',
      '2022-06-26'
    )

    cy.get('button[data-value="2022-06-26"')
      .should('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.attr', 'tabindex', '0')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('not.have.focus')

    cy.get('.usa-date-picker__calendar__next-month').should('have.focus')
  })

  it('highlight today if in range and no default selected date', () => {
    const todaysDate = formatIsoDate(today())

    const wrapperComponent = {
      components: { UsaDatePickerCalendar },
      data() {
        return {
          open: true,
          selectorMode: 'day',
          selectedDate: '',
          activeDate: todaysDate,
          highlightedDate: '',
          minDate: MIN_DATE,
          maxDate: MAX_DATE,
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
      template: `<UsaDatePickerCalendar
        v-model:selected-date="selectedDate"
        v-model:selector-mode="selectorMode"
        v-model:open="open"
        v-model:active-date="activeDate"
        v-model:highlighted-date="highlightedDate"
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
      ></UsaDatePickerCalendar>`,
    }

    mount(wrapperComponent, {
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    })

    cy.get(`button[data-value="${todaysDate}"]`)
      .should('not.have.class', 'usa-date-picker__calendar__date--selected')
      .and('have.class', 'usa-date-picker__calendar__date--focused')
      .and('not.have.attr', 'aria-selected', 'true')
      .and('have.focus')
  })

  it('events are emitted with correct values', () => {
    const wrapper = mount(UsaDatePickerCalendar, {
      props: {
        open: false,
        selectorMode: 'day',
        selectedDate: '1997-07-03',
        activeDate: '1997-07-03',
        highlightedDate: '',
        minDate: '1997-06-03',
        maxDate: '2020-06-03',
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
        'onUpdate:open': async open => {
          await wrapper.vue().then(vm => {
            vm.setProps({ open: open })
          })
        },
        'onUpdate:selectorMode': async mode => {
          await wrapper.vue().then(vm => {
            vm.setProps({ selectorMode: mode })
          })
        },
        'onUpdate:selectedDate': async selectedDate => {
          await wrapper.vue().then(vm => {
            vm.setProps({ selectedDate: selectedDate })
          })
        },
        'onUpdate:activeDate': async activeDate => {
          await wrapper.vue().then(vm => {
            vm.setProps({ activeDate: activeDate })
          })
        },
        'onUpdate:highlightedDate': async highlightedDate => {
          await wrapper.vue().then(vm => {
            vm.setProps({ highlightedDate: highlightedDate })
          })
        },
      },
      global: {
        provide: {
          inputHighlightedDate: ref(''),
        },
      },
    }).as('wrapper')

    cy.get('.usa-date-picker__calendar__date-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__month-picker').should('not.exist')
    cy.get('.usa-date-picker__calendar__year-picker').should('not.exist')

    cy.get('@wrapper').invoke('setProps', { open: true })

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.not.have.property('update:open')
        expect(emitted).to.not.have.property('update:selectedDate')
        expect(emitted).to.not.have.property('update:activeYearStart')
        expect(emitted).to.not.have.property('update:activeYearEnd')
        expect(emitted).to.not.have.property('update:isPristine')
        expect(emitted).to.have.property('update:highlightedDate')
        expect(emitted).to.have.property('update:activeDate')

        const currentActiveDateEvent = vm.emitted('update:activeDate')
        expect(currentActiveDateEvent).to.have.length(1)
        expect(
          currentActiveDateEvent[currentActiveDateEvent.length - 1]
        ).to.contain('1997-07-03')

        const currentHighlightedDateEvent = vm.emitted('update:highlightedDate')
        expect(currentHighlightedDateEvent).to.have.length(1)
        expect(
          currentHighlightedDateEvent[currentHighlightedDateEvent.length - 1]
        ).to.contain('1997-07-03')
      })

    cy.get('.usa-date-picker__calendar__next-month').click()

    cy.get('.usa-date-picker__calendar__month-selection').should(
      'contain',
      'August'
    )

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()

        expect(emitted).to.have.property('update:activeDate')
        expect(emitted).to.have.property('update:highlightedDate')
        expect(emitted).to.have.property('update:isPristine')
        expect(emitted).to.not.have.property('update:open')
        expect(emitted).to.not.have.property('update:selectedDate')
        expect(emitted).to.not.have.property('update:selectorMode')
        expect(emitted).to.not.have.property('update:activeYearStart')
        expect(emitted).to.not.have.property('update:activeYearEnd')

        const currentActiveDateEvent = vm.emitted('update:activeDate')
        expect(currentActiveDateEvent).to.have.length(2)
        expect(
          currentActiveDateEvent[currentActiveDateEvent.length - 1]
        ).to.contain('1997-08-03')

        const currentHighlightedDateEvent = vm.emitted('update:highlightedDate')
        expect(currentHighlightedDateEvent).to.have.length(2)
        expect(
          currentHighlightedDateEvent[currentHighlightedDateEvent.length - 1]
        ).to.contain('1997-08-03')

        const currentIsPristineEvent = vm.emitted('update:isPristine')
        expect(currentIsPristineEvent).to.have.length(1)
        expect(
          currentIsPristineEvent[currentIsPristineEvent.length - 1]
        ).to.contain(false)
      })

    cy.get('.usa-date-picker__calendar__year-selection').click()

    cy.get('button[data-value="2003"').should('exist')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()

        expect(emitted).to.have.property('update:activeDate')
        expect(emitted).to.have.property('update:selectorMode')
        expect(emitted).to.have.property('update:highlightedDate')
        expect(emitted).to.have.property('update:activeYearStart')
        expect(emitted).to.have.property('update:activeYearEnd')
        expect(emitted).to.have.property('update:isPristine')
        expect(emitted).to.not.have.property('update:open')
        expect(emitted).to.not.have.property('update:selectedDate')

        expect(vm.emitted('update:activeDate')).to.have.length(2)

        const currentSelectorModeEvent = vm.emitted('update:selectorMode')
        expect(currentSelectorModeEvent).to.have.length(1)
        expect(
          currentSelectorModeEvent[currentSelectorModeEvent.length - 1]
        ).to.contain('year')

        expect(vm.emitted('update:highlightedDate')).to.have.length(2)

        const currentIsPristineDateEvent = vm.emitted('update:isPristine')
        expect(currentIsPristineDateEvent).to.have.length(2)
        expect(
          currentIsPristineDateEvent[currentIsPristineDateEvent.length - 1]
        ).to.contain(true)

        const currentYearStartDateEvent = vm.emitted('update:activeYearStart')
        expect(currentYearStartDateEvent).to.have.length(1)
        expect(
          currentYearStartDateEvent[currentYearStartDateEvent.length - 1]
        ).to.contain(1997)

        const currentYearEndDateEvent = vm.emitted('update:activeYearEnd')
        expect(currentYearEndDateEvent).to.have.length(1)
        expect(
          currentYearEndDateEvent[currentYearEndDateEvent.length - 1]
        ).to.contain(2003)
      })

    cy.get('.usa-date-picker__calendar__next-year-chunk').click()

    cy.get('button[data-value="2015"').should('exist')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()

        expect(emitted).to.have.property('update:activeDate')
        expect(emitted).to.have.property('update:selectorMode')
        expect(emitted).to.have.property('update:highlightedDate')
        expect(emitted).to.have.property('update:activeYearStart')
        expect(emitted).to.have.property('update:activeYearEnd')
        expect(emitted).to.have.property('update:isPristine')
        expect(emitted).to.not.have.property('update:open')
        expect(emitted).to.not.have.property('update:selectedDate')

        expect(vm.emitted('update:activeDate')).to.have.length(2)
        expect(vm.emitted('update:selectorMode')).to.have.length(1)
        expect(vm.emitted('update:highlightedDate')).to.have.length(2)
        expect(vm.emitted('update:isPristine')).to.have.length(2)

        const currentYearStartDateEvent = vm.emitted('update:activeYearStart')
        expect(currentYearStartDateEvent).to.have.length(2)
        expect(
          currentYearStartDateEvent[currentYearStartDateEvent.length - 1]
        ).to.contain(2004)

        const currentYearEndDateEvent = vm.emitted('update:activeYearEnd')
        expect(currentYearEndDateEvent).to.have.length(2)
        expect(
          currentYearEndDateEvent[currentYearEndDateEvent.length - 1]
        ).to.contain(2015)
      })

    cy.get('button[data-value="2015"').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()

        expect(emitted).to.have.property('update:activeDate')
        expect(emitted).to.have.property('update:selectorMode')
        expect(emitted).to.have.property('update:highlightedDate')
        expect(emitted).to.have.property('update:activeYearStart')
        expect(emitted).to.have.property('update:activeYearEnd')
        expect(emitted).to.have.property('update:isPristine')
        expect(emitted).to.not.have.property('update:open')
        expect(emitted).to.not.have.property('update:selectedDate')

        expect(vm.emitted('update:isPristine')).to.have.length(2)

        const currentActiveDateEvent = vm.emitted('update:activeDate')
        expect(currentActiveDateEvent).to.have.length(3)
        expect(
          currentActiveDateEvent[currentActiveDateEvent.length - 1]
        ).to.contain('2015-08-03')

        const currentSelectorModeEvent = vm.emitted('update:selectorMode')
        expect(currentSelectorModeEvent).to.have.length(2)
        expect(
          currentSelectorModeEvent[currentSelectorModeEvent.length - 1]
        ).to.contain('day')

        const currentHighlightedDateEvent = vm.emitted('update:highlightedDate')
        expect(currentHighlightedDateEvent).to.have.length(3)
        expect(
          currentHighlightedDateEvent[currentHighlightedDateEvent.length - 1]
        ).to.contain('2015-08-03')

        const currentYearStartDateEvent = vm.emitted('update:activeYearStart')
        expect(vm.emitted('update:activeYearStart')).to.have.length(3)
        expect(
          currentYearStartDateEvent[currentYearStartDateEvent.length - 1]
        ).to.contain('')

        const currentYearEndDateEvent = vm.emitted('update:activeYearEnd')
        expect(currentYearEndDateEvent).to.have.length(3)
        expect(
          currentYearEndDateEvent[currentYearEndDateEvent.length - 1]
        ).to.contain('')
      })

    cy.get('.usa-date-picker__calendar__month-selection').click()

    cy.get('.usa-date-picker__calendar__month-picker').should('exist')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()

        expect(emitted).to.have.property('update:activeDate')
        expect(emitted).to.have.property('update:selectorMode')
        expect(emitted).to.have.property('update:highlightedDate')
        expect(emitted).to.have.property('update:activeYearStart')
        expect(emitted).to.have.property('update:activeYearEnd')
        expect(emitted).to.have.property('update:isPristine')
        expect(emitted).to.not.have.property('update:open')
        expect(emitted).to.not.have.property('update:selectedDate')

        expect(vm.emitted('update:activeDate')).to.have.length(3)
        expect(vm.emitted('update:highlightedDate')).to.have.length(3)
        expect(vm.emitted('update:activeYearStart')).to.have.length(3)
        expect(vm.emitted('update:activeYearEnd')).to.have.length(3)

        const currentSelectorModeEvent = vm.emitted('update:selectorMode')
        expect(currentSelectorModeEvent).to.have.length(3)
        expect(
          currentSelectorModeEvent[currentSelectorModeEvent.length - 1]
        ).to.contain('month')

        const currentIsPristineDateEvent = vm.emitted('update:isPristine')
        expect(currentIsPristineDateEvent).to.have.length(3)
        expect(
          currentIsPristineDateEvent[currentIsPristineDateEvent.length - 1]
        ).to.contain(true)
      })

    cy.get('button[data-label="November"').click()

    cy.get('.usa-date-picker__calendar__date-picker').should('exist')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()

        expect(emitted).to.have.property('update:activeDate')
        expect(emitted).to.have.property('update:selectorMode')
        expect(emitted).to.have.property('update:highlightedDate')
        expect(emitted).to.have.property('update:activeYearStart')
        expect(emitted).to.have.property('update:activeYearEnd')
        expect(emitted).to.have.property('update:isPristine')
        expect(emitted).to.not.have.property('update:open')
        expect(emitted).to.not.have.property('update:selectedDate')

        expect(vm.emitted('update:isPristine')).to.have.length(3)

        const currentActiveDateEvent = vm.emitted('update:activeDate')
        expect(currentActiveDateEvent).to.have.length(4)
        expect(
          currentActiveDateEvent[currentActiveDateEvent.length - 1]
        ).to.contain('2015-11-03')

        const currentSelectorModeEvent = vm.emitted('update:selectorMode')
        expect(currentSelectorModeEvent).to.have.length(4)
        expect(
          currentSelectorModeEvent[currentSelectorModeEvent.length - 1]
        ).to.contain('day')

        const currentHighlightedDateEvent = vm.emitted('update:highlightedDate')
        expect(currentHighlightedDateEvent).to.have.length(4)
        expect(
          currentHighlightedDateEvent[currentHighlightedDateEvent.length - 1]
        ).to.contain('2015-11-03')
      })

    cy.get('button[data-value="2015-11-03"').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()

        expect(emitted).to.have.property('update:activeDate')
        expect(emitted).to.have.property('update:selectorMode')
        expect(emitted).to.have.property('update:highlightedDate')
        expect(emitted).to.have.property('update:activeYearStart')
        expect(emitted).to.have.property('update:activeYearEnd')
        expect(emitted).to.have.property('update:isPristine')
        expect(emitted).to.have.property('update:open')
        expect(emitted).to.have.property('update:selectedDate')

        expect(vm.emitted('update:activeDate')).to.have.length(4)
        expect(vm.emitted('update:highlightedDate')).to.have.length(4)
        expect(vm.emitted('update:activeYearStart')).to.have.length(3)
        expect(vm.emitted('update:activeYearEnd')).to.have.length(3)
        expect(vm.emitted('update:selectorMode')).to.have.length(4)

        const currentIsPristineEvent = vm.emitted('update:isPristine')
        expect(currentIsPristineEvent).to.have.length(3)
        expect(
          currentIsPristineEvent[currentIsPristineEvent.length - 1]
        ).to.contain(true)

        const currentOpenEvent = vm.emitted('update:open')
        expect(currentOpenEvent).to.have.length(1)
        expect(currentOpenEvent[currentOpenEvent.length - 1]).to.contain(false)

        const currentSelectedDateEvent = vm.emitted('update:selectedDate')
        expect(currentSelectedDateEvent).to.have.length(1)
        expect(
          currentSelectedDateEvent[currentSelectedDateEvent.length - 1]
        ).to.contain('2015-11-03')
      })
  })
})
