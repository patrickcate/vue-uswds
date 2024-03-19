import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaTableSortButton from './UsaTableSortButton.vue'

describe('UsaTableSortButton', () => {
  it('renders the component', () => {
    // eslint-disable-next-line cypress/no-assigning-return-values
    const wrapper = cy
      .mount(UsaTableSortButton, {
        props: {
          headerId: 'test-header-id',
          headerLabel: 'Test header label',
          'onUpdate:tableSort': async () => {
            await wrapper.vue().then(vm => {
              const { currentSortDirection } = vm.componentVM

              const reverseDirections = {
                ascending: 'descending',
                descending: 'ascending',
              }

              vm.setProps({
                currentSortDirection:
                  reverseDirections[currentSortDirection] || 'ascending',
              })
            })
          },
        },
      })
      .its('wrapper')
      .as('wrapper')

    cy.get('button.usa-table__header__button')
      .as('button')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'tabindex')
      .and('equal', '0')

    cy.get('@button')
      .should('have.attr', 'title')
      .and('equal', 'Click to sort by Test header label in ascending order.')

    cy.get('@button').find('svg').as('svg').should('have.class', 'usa-icon')
    cy.get('@svg').find('> g:nth-of-type(1)').should('have.class', 'descending')
    cy.get('@svg').find('> g:nth-of-type(2)').should('have.class', 'ascending')
    cy.get('@svg').find('> g:nth-of-type(3)').should('have.class', 'unsorted')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:tableSort')
      })

    cy.get('@button').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:tableSort')
        const currentToggleEvent = vm.emitted('update:tableSort')
        expect(currentToggleEvent).to.have.length(1)
        expect(currentToggleEvent[currentToggleEvent.length - 1]).to.contain(
          'test-header-id',
        )
      })

    cy.get('@button')
      .should('have.attr', 'title')
      .and('equal', 'Click to sort by Test header label in descending order.')
  })

  it('uses default sort direction prop and default slot', () => {
    // eslint-disable-next-line cypress/no-assigning-return-values
    const wrapper = cy
      .mount(UsaTableSortButton, {
        props: {
          headerId: 'test-header-id',
          headerLabel: 'Test header label',
          currentSortDirection: 'descending',
          'onUpdate:tableSort': async () => {
            await wrapper.vue().then(vm => {
              const { currentSortDirection } = vm.componentVM

              const reverseDirections = {
                ascending: 'descending',
                descending: 'ascending',
              }

              vm.setProps({
                currentSortDirection: reverseDirections[currentSortDirection],
              })
            })
          },
        },
        slots: {
          default: () => 'Test default slot',
        },
      })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-table__header__button')
      .as('button')
      .should('contain', 'Test default slot')

    cy.get('@button')
      .should('have.attr', 'title')
      .and('equal', 'Click to sort by Test header label in ascending order.')

    cy.get('@button').click()

    cy.get('@button')
      .should('have.attr', 'title')
      .and('equal', 'Click to sort by Test header label in descending order.')
  })
})
