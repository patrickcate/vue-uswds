import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaCollection from './UsaCollection.vue'
import UsaCollectionItem from '@/components/UsaCollectionItem'
import UsaCollectionHeading from '@/components/UsaCollectionHeading'

describe('UsaCollection', () => {
  const CollectionWrapper = {
    components: { UsaCollection, UsaCollectionItem, UsaCollectionHeading },
    template: `
      <UsaCollection>
        <UsaCollectionItem
          href="https://www.performance.gov/presidents-winners-press-release/"
          heading="Gears of Government President's Award winners"
        >
          Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.
        </UsaCollectionItem>
      </UsaCollection>
    `,
  }

  it('renders the component', () => {
    cy.mount(CollectionWrapper, {
      slots: {
        default: () => 'Test',
      },
    })

    cy.get('ul.usa-collection').should('exist')
  })

  it('adds the `condensed` prop CSS class', () => {
    cy.mount(CollectionWrapper, {
      props: {
        condensed: true,
      },
      slots: {
        default: () => 'Test',
      },
    })

    cy.get('.usa-collection--condensed').should('exist')
  })
})
