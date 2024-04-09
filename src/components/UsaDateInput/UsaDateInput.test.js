import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaDateInput from './UsaDateInput.vue'

describe('UsaDateInput', () => {
  it('renders the component', () => {
    cy.mount(UsaDateInput, {
      props: {
        label: 'Test label',
      },
    })

    cy.get('fieldset').should('have.class', 'usa-fieldset')

    cy.get('legend')
      .should('have.class', 'usa-legend')
      .and('contain', 'Test label')

    cy.get('fieldset > div.usa-memorable-date').should('exist')

    cy.get('div.usa-form-group').should('have.length', 3)

    cy.get('div.usa-form-group:nth-child(1)')
      .as('firstFormGroup')
      .should('have.class', 'usa-form-group--month')
    cy.get('div.usa-form-group:nth-child(2)')
      .as('secondFormGroup')
      .should('have.class', 'usa-form-group--day')
    cy.get('div.usa-form-group:nth-child(3)')
      .as('thirdFormGroup')
      .should('have.class', 'usa-form-group--year')

    cy.get('@firstFormGroup')
      .find('label.usa-label')
      .as('firstLabel')
      .should('have.attr', 'for')
    cy.get('@firstLabel').should('contain', 'Month')

    cy.get('@secondFormGroup')
      .find('label.usa-label')
      .as('secondLabel')
      .should('have.attr', 'for')
    cy.get('@secondLabel').should('contain', 'Day')

    cy.get('@thirdFormGroup')
      .find('label.usa-label')
      .as('thirdLabel')
      .should('have.attr', 'for')
    cy.get('@thirdLabel').should('contain', 'Year')

    cy.get('@firstFormGroup')
      .find('input.usa-input')
      .as('firstInput')
      .should('have.attr', 'name')
      .and('contain', 'date_month')
    cy.get('@firstInput').should('have.attr', 'id')
    cy.get('@firstInput').should('have.attr', 'maxlength').and('contain', 2)
    cy.get('@firstInput')
      .should('have.attr', 'pattern')
      .and('contain', '[0-9]*')
    cy.get('@firstInput')
      .should('have.attr', 'inputmode')
      .and('contain', 'numeric')
    cy.get('@firstInput').should('have.attr', 'type').and('contain', 'text')

    cy.get('@secondFormGroup')
      .find('input.usa-input')
      .as('secondInput')
      .should('have.attr', 'name')
      .and('contain', 'date_day')
    cy.get('@secondInput').should('have.attr', 'id')
    cy.get('@secondInput').should('have.attr', 'maxlength').and('contain', 2)
    cy.get('@secondInput')
      .should('have.attr', 'pattern')
      .and('contain', '[0-9]*')
    cy.get('@secondInput')
      .should('have.attr', 'inputmode')
      .and('contain', 'numeric')
    cy.get('@secondInput').should('have.attr', 'type').and('contain', 'text')

    cy.get('@thirdFormGroup')
      .find('input.usa-input')
      .as('thirdInput')
      .should('have.attr', 'name')
      .and('contain', 'date_year')
    cy.get('@thirdInput').should('have.attr', 'id')
    cy.get('@thirdInput').should('have.attr', 'minlength').and('contain', 4)
    cy.get('@thirdInput').should('have.attr', 'maxlength').and('contain', 4)
    cy.get('@thirdInput')
      .should('have.attr', 'pattern')
      .and('contain', '[0-9]*')
    cy.get('@thirdInput')
      .should('have.attr', 'inputmode')
      .and('contain', 'numeric')
    cy.get('@thirdInput').should('have.attr', 'type').and('contain', 'text')
  })

  it('inputs are displayed in the correct custom order using custom labels', () => {
    cy.mount(UsaDateInput, {
      props: {
        label: 'Test label',
        dateOrder: ['year', 'month', 'day'],
        dateLabels: { month: 'MM', day: 'DD', year: 'YYYY' },
        name: 'expiration',
      },
    })

    cy.get('div.usa-form-group').should('have.length', 3)

    cy.get('div.usa-form-group:nth-child(1)')
      .as('firstFormGroup')
      .should('have.class', 'usa-form-group--year')
    cy.get('div.usa-form-group:nth-child(2)')
      .as('secondFormGroup')
      .should('have.class', 'usa-form-group--month')
    cy.get('div.usa-form-group:nth-child(3)')
      .as('thirdFormGroup')
      .should('have.class', 'usa-form-group--day')

    cy.get('@firstFormGroup')
      .find('label.usa-label')
      .as('firstLabel')
      .should('have.attr', 'for')
    cy.get('@firstLabel').should('contain', 'YYYY')

    cy.get('@secondFormGroup')
      .find('label.usa-label')
      .as('secondLabel')
      .should('have.attr', 'for')
    cy.get('@secondLabel').should('contain', 'MM')

    cy.get('@thirdFormGroup')
      .find('label.usa-label')
      .as('thirdLabel')
      .should('have.attr', 'for')
    cy.get('@thirdLabel').should('contain', 'DD')

    cy.get('@firstFormGroup')
      .find('input.usa-input')
      .as('firstInput')
      .should('have.attr', 'name')
      .and('contain', 'expiration_year')
    cy.get('@firstInput').should('have.attr', 'maxlength').and('contain', 4)
    cy.get('@firstInput').should('have.attr', 'maxlength').and('contain', 4)

    cy.get('@secondFormGroup')
      .find('input.usa-input')
      .as('secondInput')
      .should('have.attr', 'name')
      .and('contain', 'expiration_month')
    cy.get('@secondInput').should('have.attr', 'maxlength').and('contain', 2)

    cy.get('@thirdFormGroup')
      .find('input.usa-input')
      .as('thirdInput')
      .should('have.attr', 'name')
      .and('contain', 'expiration_day')
    cy.get('@thirdInput').should('have.attr', 'id')
    cy.get('@secondInput').should('have.attr', 'maxlength').and('contain', 2)
  })

  it('displays `label`, `hint`, and `error-message` slot content', () => {
    cy.mount(UsaDateInput, {
      props: {
        label: 'Test label',
        id: 'custom-id',
      },
      slots: {
        label: () => 'Test label slot',
        hint: () => 'Test hint slot',
        'error-message': () => 'Test error slot',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('legend').should('contain', 'Test label slot')

    cy.get('span.usa-hint')
      .should('have.id', 'custom-id-hint')
      .and('contain', 'Test hint slot')

    cy.get('span.usa-error-message').should('not.exist')

    cy.get('@wrapper').invoke('setProps', { error: true })

    cy.get('span.usa-error-message')
      .should('have.id', 'custom-id-error-message')
      .and('contain', 'Test error slot')

    cy.get('.usa-form-group:nth-child(1)').as('firstFormGroup')
    cy.get('.usa-form-group:nth-child(2)').as('secondFormGroup')
    cy.get('.usa-form-group:nth-child(3)').as('thirdFormGroup')

    cy.get('@firstFormGroup')
      .find('.usa-label')
      .should('have.attr', 'for')
      .and('contain', 'custom-id-date-month')

    cy.get('@secondFormGroup')
      .find('.usa-label')
      .should('have.attr', 'for')
      .and('contain', 'custom-id-date-day')

    cy.get('@thirdFormGroup')
      .find('.usa-label')
      .should('have.attr', 'for')
      .and('contain', 'custom-id-date-year')

    cy.get('@firstFormGroup')
      .find('.usa-input')
      .as('firstInput')
      .should('have.attr', 'id')
      .and('contain', 'custom-id-date-month')

    cy.get('@firstInput')
      .should('have.attr', 'aria-describedby')
      .and('contain', 'custom-id-hint custom-id-error-message')

    cy.get('@secondFormGroup')
      .find('.usa-input')
      .as('secondInput')
      .should('have.attr', 'id')
      .and('contain', 'custom-id-date-day')

    cy.get('@secondInput')
      .should('have.attr', 'aria-describedby')
      .and('contain', 'custom-id-hint custom-id-error-message')

    cy.get('@thirdFormGroup')
      .find('.usa-input')
      .as('thirdInput')
      .should('have.attr', 'id')
      .and('contain', 'custom-id-date-year')

    cy.get('@thirdInput')
      .should('have.attr', 'aria-describedby')
      .and('contain', 'custom-id-hint custom-id-error-message')
  })

  it('labels and inputs are marked as required', () => {
    cy.mount(UsaDateInput, {
      props: {
        label: 'Test label',
        required: true,
      },
    })

    cy.get('.usa-form-group:nth-child(1)').as('firstFormGroup')
    cy.get('.usa-form-group:nth-child(2)').as('secondFormGroup')
    cy.get('.usa-form-group:nth-child(3)').as('thirdFormGroup')

    cy.get('@firstFormGroup')
      .find('.usa-label > abbr')
      .as('firstLabel')
      .should('have.class', 'usa-hint')
      .and('have.class', 'usa-hint--required')
    cy.get('@firstLabel')
      .should('have.attr', 'title')
      .and('contain', 'required')

    cy.get('@secondFormGroup')
      .find('.usa-label > abbr')
      .as('secondLabel')
      .should('have.class', 'usa-hint')
      .and('have.class', 'usa-hint--required')
    cy.get('@secondLabel')
      .should('have.attr', 'title')
      .and('contain', 'required')

    cy.get('@thirdFormGroup')
      .find('.usa-label > abbr')
      .as('thirdLabel')
      .should('have.class', 'usa-hint')
      .and('have.class', 'usa-hint--required')
    cy.get('@thirdLabel')
      .should('have.attr', 'title')
      .and('contain', 'required')

    cy.get('@firstFormGroup').find('.usa-input').should('have.attr', 'required')

    cy.get('@secondFormGroup')
      .find('.usa-input')
      .should('have.attr', 'required')

    cy.get('@thirdFormGroup').find('.usa-input').should('have.attr', 'required')
  })

  it('inputs start with default values and emit updated values', () => {
    cy.mount(UsaDateInput, {
      props: {
        label: 'Test label',
        month: 1,
        day: 2,
        year: 20,
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-form-group:nth-child(1)').as('firstFormGroup')
    cy.get('.usa-form-group:nth-child(2)').as('secondFormGroup')
    cy.get('.usa-form-group:nth-child(3)').as('thirdFormGroup')

    cy.get('@firstFormGroup')
      .find('.usa-input')
      .as('firstInput')
      .should('have.value', 1)

    cy.get('@secondFormGroup')
      .find('.usa-input')
      .as('secondInput')
      .should('have.value', 2)

    cy.get('@thirdFormGroup')
      .find('.usa-input')
      .as('thirdInput')
      .should('have.value', 20)

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:month')
        expect(vm.emitted()).to.not.have.property('update:day')
        expect(vm.emitted()).to.not.have.property('update:year')
      })

    cy.get('@firstInput').type(2)
    cy.get('@secondInput').type(1)
    cy.get('@thirdInput').type(22)

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:month')
        const currentMonthEvent = vm.emitted('update:month')
        expect(currentMonthEvent).to.have.length(1)
        expect(currentMonthEvent[currentMonthEvent.length - 1]).to.contain('12')

        expect(vm.emitted()).to.have.property('update:day')
        const currentDayEvent = vm.emitted('update:day')
        expect(currentDayEvent).to.have.length(1)
        expect(currentDayEvent[currentDayEvent.length - 1]).to.contain('21')

        expect(vm.emitted()).to.have.property('update:year')
        const currentYearEvent = vm.emitted('update:year')
        expect(currentYearEvent).to.have.length(2)
        expect(currentYearEvent[currentYearEvent.length - 1]).to.contain('2022')
      })
  })

  it('inputs not in `dateOrder` prop are not displayed', () => {
    cy.mount(UsaDateInput, {
      props: {
        dateOrder: ['month', 'year'],
      },
    })

    cy.get('.usa-form-group:nth-child(1)')
      .as('firstFormGroup')
      .should('have.class', 'usa-form-group--month')
    cy.get('.usa-form-group:nth-child(2)')
      .as('secondFormGroup')
      .should('have.class', 'usa-form-group--year')
    cy.get('.usa-form-group:nth-child(3)').should('not.exist')

    cy.get('@firstFormGroup').find('.usa-label').should('contain', 'Month')

    cy.get('@secondFormGroup').find('.usa-label').should('contain', 'Year')

    cy.get('@firstFormGroup')
      .find('.usa-input')
      .should('have.attr', 'name')
      .and('contain', 'date_month')

    cy.get('@secondFormGroup')
      .find('.usa-input')
      .should('have.attr', 'name')
      .and('contain', 'date_year')
  })

  it('label/fieldset legend is not shown because label prop and slot are not used', () => {
    cy.mount(UsaDateInput, {})

    cy.get('legend').should('not.exist')
  })

  it('uses select element for month', () => {
    cy.mount(UsaDateInput, {
      props: {
        monthAsSelect: true,
        id: 'custom-id',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:month')
      })

    cy.get('.usa-form-group--month label')
      .should('have.class', 'usa-label')
      .and('have.attr', 'for', 'custom-id-date-month')
      .and('have.contain', 'Month')

    cy.get('.usa-form-group--month select')
      .as('select')
      .should('have.id', 'custom-id-date-month')
      .and('have.class', 'usa-select')
      .and('have.attr', 'name', 'date_month')
      .and('not.have.attr', 'aria-describedby', 'custom-id-hint')

    cy.get('@select')
      .find('option:nth-of-type(1)')
      .should('have.attr', 'value', '')
      .and('contain', '- Select -')

    cy.get('@select')
      .find('option:nth-of-type(2)')
      .should('have.attr', 'value', '1')
      .and('contain', '01 - January')

    cy.get('@select')
      .find('option:nth-of-type(3)')
      .should('have.attr', 'value', '2')
      .and('contain', '02 - February')

    cy.get('@select')
      .find('option:nth-of-type(4)')
      .should('have.attr', 'value', '3')
      .and('contain', '03 - March')

    cy.get('@select')
      .find('option:nth-of-type(5)')
      .should('have.attr', 'value', '4')
      .and('contain', '04 - April')

    cy.get('@select')
      .find('option:nth-of-type(6)')
      .should('have.attr', 'value', '5')
      .and('contain', '05 - May')

    cy.get('@select')
      .find('option:nth-of-type(7)')
      .should('have.attr', 'value', '6')
      .and('contain', '06 - June')

    cy.get('@select')
      .find('option:nth-of-type(8)')
      .should('have.attr', 'value', '7')
      .and('contain', '07 - July')

    cy.get('@select')
      .find('option:nth-of-type(9)')
      .should('have.attr', 'value', '8')
      .and('contain', '08 - August')

    cy.get('@select')
      .find('option:nth-of-type(10)')
      .should('have.attr', 'value', '9')
      .and('contain', '09 - September')

    cy.get('@select')
      .find('option:nth-of-type(11)')
      .should('have.attr', 'value', '10')
      .and('contain', '10 - October')

    cy.get('@select')
      .find('option:nth-of-type(12)')
      .should('have.attr', 'value', '11')
      .and('contain', '11 - November')

    cy.get('@select')
      .find('option:nth-of-type(13)')
      .should('have.attr', 'value', '12')
      .and('contain', '12 - December')

    cy.get('@select').select('5')

    cy.get('@select').should('have.value', '5')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:month')
        const currentMonthEvent = vm.emitted('update:month')
        expect(currentMonthEvent).to.have.length(1)
        expect(currentMonthEvent[currentMonthEvent.length - 1]).to.contain(5)
      })
  })

  it('uses custom month select options', () => {
    cy.mount(UsaDateInput, {
      props: {
        monthAsSelect: true,
        id: 'custom-id',
        required: true,
        month: 'July',
        monthEmptyLabel: 'Choose Month',
        monthOptions: [
          {
            value: 'January',
            text: 'Jan - 1',
          },
          {
            value: 'February',
            text: 'Feb - 2',
          },
          {
            value: 'March',
            text: 'Mar - 3',
          },
          {
            value: 'April',
            text: 'Apr - 4',
          },
          {
            value: 'May',
            text: 'May - 5',
          },
          {
            value: 'June',
            text: 'Jun - 6',
          },
          {
            value: 'July',
            text: 'Jul - 7',
          },
          {
            value: 'August',
            text: 'Aug - 8',
          },
          {
            value: 'September',
            text: 'Sep - 9',
          },
          {
            value: 'October',
            text: 'Oct - 10',
          },
          {
            value: 'November',
            text: 'Nov - 11',
          },
          {
            value: 'December',
            text: 'Dec - 12',
          },
        ],
      },
      slots: {
        hint: () => 'Test select hint',
      },
    })

    cy.get('.usa-form-group--month label')
      .should('have.class', 'usa-label')
      .and('have.attr', 'for', 'custom-id-date-month')
      .and('have.contain', 'Month')

    cy.get('.usa-form-group--month  abbr')
      .should('have.attr', 'title', 'required')
      .and('contain', '*')

    cy.get('.usa-form-group--month select')
      .as('select')
      .should('have.id', 'custom-id-date-month')
      .and('have.class', 'usa-select')
      .and('have.attr', 'name', 'date_month')
      .and('have.attr', 'aria-describedby', 'custom-id-hint')
      .and('have.attr', 'required', 'required')
      .and('have.value', 'July')

    cy.get('@select')
      .find('option:nth-of-type(1)')
      .should('have.attr', 'value', '')
      .and('contain', 'Choose Month')

    cy.get('@select')
      .find('option:nth-of-type(2)')
      .should('have.attr', 'value', 'January')
      .and('contain', 'Jan - 1')

    cy.get('@select')
      .find('option:nth-of-type(3)')
      .should('have.attr', 'value', 'February')
      .and('contain', 'Feb - 2')

    cy.get('@select')
      .find('option:nth-of-type(4)')
      .should('have.attr', 'value', 'March')
      .and('contain', 'Mar - 3')

    cy.get('@select')
      .find('option:nth-of-type(5)')
      .should('have.attr', 'value', 'April')
      .and('contain', 'Apr - 4')

    cy.get('@select')
      .find('option:nth-of-type(6)')
      .should('have.attr', 'value', 'May')
      .and('contain', 'May - 5')

    cy.get('@select')
      .find('option:nth-of-type(7)')
      .should('have.attr', 'value', 'June')
      .and('contain', 'Jun - 6')

    cy.get('@select')
      .find('option:nth-of-type(8)')
      .should('have.attr', 'value', 'July')
      .and('contain', 'Jul - 7')

    cy.get('@select')
      .find('option:nth-of-type(9)')
      .should('have.attr', 'value', 'August')
      .and('contain', 'Aug - 8')

    cy.get('@select')
      .find('option:nth-of-type(10)')
      .should('have.attr', 'value', 'September')
      .and('contain', 'Sep - 9')

    cy.get('@select')
      .find('option:nth-of-type(11)')
      .should('have.attr', 'value', 'October')
      .and('contain', 'Oct - 10')

    cy.get('@select')
      .find('option:nth-of-type(12)')
      .should('have.attr', 'value', 'November')
      .and('contain', 'Nov - 11')

    cy.get('@select')
      .find('option:nth-of-type(13)')
      .should('have.attr', 'value', 'December')
      .and('contain', 'Dec - 12')
  })

  it('console prints deprecation warning if `monthAsSelect` is false', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaDateInput, {
      props: {
        monthAsSelect: false,
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledOnceWith',
      `The 'monthAsSelect' prop is deprecated. Starting with vue-uswds 2.0 the month will always use a select form element. You can set the 'monthAsSelect' prop value to true to minimize changes.`,
    )
  })
})
