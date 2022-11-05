import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaNavSubmenuItem from './UsaNavSubmenuItem.vue'

describe('UsaNavSubmenuItem', () => {
  it('renders the component', () => {
    mount(UsaNavSubmenuItem, {
      props: {
        href: '/test-page',
      },
      attrs: {
        // Should be rendered on link not `li` element.
        'data-test': 'test',
      },
      slots: {
        default: () => 'Test submenu item',
      },
      global: {
        provide: {
          dropdownId: 'test-dropdown-id',
          closeDropdown: () => {},
          closeMobileMenu: () => {},
        },
      },
    })

    cy.get('li.usa-nav__submenu-item').should('not.have.attr', 'data-test')
    cy.get('a')
      .as('link')
      .should('have.attr', 'data-test')
      .and('contain', 'test')

    cy.get('@link').should('have.attr', 'href').and('contain', '/test-page')
    cy.get('@link').should('contain', 'Test submenu item')
  })

  it('clicking link trigger `closeAllDropdowns` method', () => {
    mount(UsaNavSubmenuItem, {
      props: {
        routerComponentName: 'router-link',
      },
      slots: {
        default: () => 'Test submenu item',
      },
      global: {
        provide: {
          dropdownId: 'test-dropdown-id',
          closeDropdown: cy.stub().as('closeDropdown'),
          closeMobileMenu: cy.stub().as('closeMobileMenu'),
        },
      },
    })

    cy.get('router-link').should('have.attr', 'to')

    cy.get('@closeDropdown').should('not.be.called')
    cy.get('@closeMobileMenu').should('not.be.called')

    cy.get('router-link').click()

    cy.get('@closeDropdown').should('be.calledWith', 'test-dropdown-id')
    cy.get('@closeMobileMenu').should('be.called')
  })
})
