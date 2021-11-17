import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaStepIndicator from './UsaStepIndicator.vue'

describe('UsaStepIndicator', () => {
  it('renders the component', () => {
    mount(UsaStepIndicator, {})
    cy.get('.usa-step-indicator').should('exist')
  })
})
