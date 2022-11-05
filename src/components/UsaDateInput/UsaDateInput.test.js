import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaDateInput from './UsaDateInput.vue'

describe('UsaDateInput', () => {
  it('renders the component', () => {
    mount(UsaDateInput, {
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
    mount(UsaDateInput, {
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
    mount(UsaDateInput, {
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
    mount(UsaDateInput, {
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
    mount(UsaDateInput, {
      props: {
        label: 'Test label',
        month: 1,
        day: 2,
        year: 20,
      },
    }).as('wrapper')

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
    mount(UsaDateInput, {
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
    mount(UsaDateInput, {})

    cy.get('legend').should('not.exist')
  })
})
