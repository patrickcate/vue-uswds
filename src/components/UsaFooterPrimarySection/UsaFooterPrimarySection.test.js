import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaFooterPrimarySection from './UsaFooterPrimarySection.vue'

describe('UsaFooterPrimarySection', () => {
  it('renders the component', () => {
    mount(UsaFooterPrimarySection, {
      slots: {
        default: () => 'Test primary slot content',
      },
    })

    cy.get('div.usa-footer__primary-section').should(
      'contain',
      'Test primary slot content'
    )
  })
})
