import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaCollectionMeta from './UsaCollectionMeta.vue'

describe('UsaCollectionMeta', () => {
  it('renders the component', () => {
    mount(UsaCollectionMeta, {
      props: {
        ariaLabel: 'Test aria label',
      },
    })

    cy.get('ul.usa-collection__meta')
      .should('have.attr', 'aria-label')
      .and('contain', 'Test aria label')
  })
})
