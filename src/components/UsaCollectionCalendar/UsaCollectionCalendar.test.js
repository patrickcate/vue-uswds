import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaCollectionCalendar from './UsaCollectionCalendar.vue'

describe('UsaCollectionCalendar', () => {
  it('renders the component', () => {
    mount(UsaCollectionCalendar, {
      props: {
        datetime: '2021-01-01',
        month: 'Jan',
        day: '1',
      },
    })

    cy.get('.usa-collection__calendar-date').should('exist')
    cy.get('.usa-collection__calendar-date time')
      .should('have.attr', 'datetime')
      .and('contain', '2021-01-01')
    cy.get('.usa-collection__calendar-date-month').should('contain', 'Jan')
    cy.get('.usa-collection__calendar-date-day').should('contain', '1')
  })

  it('renders a div if the `datetime` prop is not used', () => {
    mount(UsaCollectionCalendar, {
      props: {
        month: 'Jan',
        day: '1',
      },
    })

    cy.get('.usa-collection__calendar-date time').should('not.exist')
    cy.get('.usa-collection__calendar-date > div').should(
      'not.have.attr',
      'datetime'
    )
  })
})
