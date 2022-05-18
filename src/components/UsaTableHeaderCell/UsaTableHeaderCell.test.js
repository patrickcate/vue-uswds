import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaTableHeaderCell from './UsaTableHeaderCell.vue'

describe('UsaTableHeaderCell', () => {
  it('renders the component', () => {
    mount(UsaTableHeaderCell, {
      props: {
        id: 'test-header-id',
        label: 'Test header',
      },
      global: {
        provide: {
          updateCurrentSortedHeader: () => {},
          toggleSortDirection: () => {},
        },
      },
    })

    cy.get('th').should('have.attr', 'scope').and('equal', 'col')
    cy.get('th').should('not.have.attr', 'data-sortable')
    cy.get('th').should('not.have.attr', 'aria-label')
    cy.get('th').should('not.have.attr', 'aria-sort')
    cy.get('th').should('not.have.attr', 'role')
    cy.get('th').should('contain', 'Test header')
    cy.get('th button').should('not.exist')
  })

  it('clicking header button changes sort direction', () => {
    const wrapper = mount(UsaTableHeaderCell, {
      props: {
        id: 'test-header-id',
        label: 'Test header',
        sortable: true,
      },
      global: {
        mocks: {
          toggleTableSort: async headerId => {
            await wrapper.vue().then(vm => {
              const { currentSortDirection } = vm.componentVM
              const reverseDirections = {
                ascending: 'descending',
                descending: 'ascending',
              }

              wrapper.invoke('setProps', {
                currentSortedHeader: headerId,
                currentSortDirection:
                  reverseDirections[currentSortDirection] || 'ascending',
              })
            })
          },
        },
        provide: {
          updateCurrentSortedHeader: cy.stub().as('updateCurrentSortedHeader'),
          toggleSortDirection: cy.stub().as('toggleSortDirection'),
        },
      },
    }).as('wrapper')

    cy.get('th').should('have.attr', 'data-sortable').and('equal', 'true')
    cy.get('th')
      .should('have.attr', 'aria-label')
      .and('equal', 'Test header, sortable column, currently unsorted')
    cy.get('th').should('not.have.attr', 'aria-sort')
    cy.get('th').should('have.attr', 'role').and('equal', 'columnheader')

    cy.get('th')
      .find('button')
      .as('button')
      .should('have.class', 'usa-table__header__button')

    cy.get('@button').click()

    cy.get('th')
      .should('have.attr', 'aria-label')
      .and('equal', 'Test header, sortable column, currently sorted ascending')
    cy.get('th').should('have.attr', 'aria-sort').and('equal', 'ascending')

    cy.get('@button').click()

    cy.get('th')
      .should('have.attr', 'aria-label')
      .and('equal', 'Test header, sortable column, currently sorted descending')
    cy.get('th').should('have.attr', 'aria-sort').and('equal', 'descending')

    cy.get('@button').click()

    cy.get('th')
      .should('have.attr', 'aria-label')
      .and('equal', 'Test header, sortable column, currently sorted ascending')
    cy.get('th').should('have.attr', 'aria-sort').and('equal', 'ascending')
  })

  it('provided update methods are invoked', () => {
    mount(UsaTableHeaderCell, {
      props: {
        id: 'test-header-id',
        label: 'Test header',
        sortable: true,
        currentSortedHeader: 'test-header-id',
        currentSortDirection: '',
      },
      global: {
        provide: {
          updateCurrentSortedHeader: cy.stub().as('updateCurrentSortedHeader'),
          toggleSortDirection: cy.stub().as('toggleSortDirection'),
        },
      },
    })

    cy.get('@updateCurrentSortedHeader').should('not.be.called')
    cy.get('@toggleSortDirection').should('not.be.called')

    cy.get('th').find('button').as('button').click()

    cy.get('@updateCurrentSortedHeader').should(
      'be.calledWith',
      'test-header-id'
    )
    cy.get('@toggleSortDirection').should('be.called')
  })

  it('default sort props are used as initial values', () => {
    mount(UsaTableHeaderCell, {
      props: {
        id: 'test-header-id',
        label: 'Test header',
        sortable: true,
        currentSortedHeader: 'test-header-id',
        currentSortDirection: 'ascending',
      },
      global: {
        provide: {
          updateCurrentSortedHeader: () => {},
          toggleSortDirection: () => {},
        },
      },
    })

    cy.get('th')
      .should('have.attr', 'aria-label')
      .and('equal', 'Test header, sortable column, currently sorted ascending')
    cy.get('th').should('have.attr', 'aria-sort').and('equal', 'ascending')
  })

  it('uses default slot content', () => {
    mount(UsaTableHeaderCell, {
      props: {
        id: 1,
        label: 'Test header',
      },
      slots: {
        default: () => 'Test default slot',
      },
      global: {
        provide: {
          updateCurrentSortedHeader: () => {},
          toggleSortDirection: () => {},
        },
      },
    })

    cy.get('th').should('contain', 'Test default slot')
  })
})
