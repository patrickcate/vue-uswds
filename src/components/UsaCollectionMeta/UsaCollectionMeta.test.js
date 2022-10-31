import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import { mount } from '@cypress/vue'
import UsaCollectionMeta from './UsaCollectionMeta.vue'

describe('UsaCollectionMeta', () => {
  it('renders the component', () => {
    mount(UsaCollectionMeta, {
      props: {
        ariaLabel: 'Test aria label',
      },
      slots: {
        default: () => h('li', {}, 'Test meta item'),
      },
    })

    cy.get('ul.usa-collection__meta')
      .as('list')
      .should('have.attr', 'aria-label')
      .and('contain', 'Test aria label')

    cy.get('@list').find('li').should('contain', 'Test meta item')
  })
})
