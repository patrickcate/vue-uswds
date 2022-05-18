import { mount } from '@cypress/vue'
import UsaCollectionMetaItem from './UsaCollectionMetaItem.vue'

describe('UsaCollectionMetaItem', () => {
  it('renders the component', () => {
    mount(UsaCollectionMetaItem, {
      slots: {
        default: () => 'Test collection meta item',
      },
    })

    cy.get('li.usa-collection__meta-item').should(
      'contain',
      'Test collection meta item'
    )
  })
})
