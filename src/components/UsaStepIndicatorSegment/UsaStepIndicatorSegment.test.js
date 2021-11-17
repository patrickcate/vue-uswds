import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaStepIndicatorSegment from './UsaStepIndicatorSegment.vue'

describe('UsaStepIndicatorSegment', () => {
  it('renders the component', () => {
    mount(UsaStepIndicatorSegment, {})
    cy.get('.usa-step-indicator-segment').should('exist')
  })
})
