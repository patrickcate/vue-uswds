import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaFooterPrimarySection from './UsaFooterPrimarySection.vue'

describe('UsaFooterPrimarySection', () => {
  it('renders the component', () => {
    cy.mount(UsaFooterPrimarySection, {
      slots: {
        default: () => 'Test primary slot content',
      },
    })

    cy.get('div.usa-footer__primary-section').should(
      'contain',
      'Test primary slot content',
    )
  })
})
