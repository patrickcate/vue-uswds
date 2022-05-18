import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaNavPrimaryItem from './UsaNavPrimaryItem.vue'

describe('UsaNavPrimaryItem', () => {
  it('renders the component', () => {
    mount(UsaNavPrimaryItem, {
      props: {
        href: '#',
      },
      attrs: {
        'data-test': 'test-attr',
      },
      slots: {
        default: () => 'Test nav link',
      },
      global: {
        provide: {
          closeAllDropdowns: cy.stub().as('closeAllDropdowns'),
          closeMobileMenu: cy.stub().as('closeMobileMenu'),
        },
      },
    })

    cy.get('li.usa-nav__primary-item')
      .as('item')
      .should('not.have.attr', 'data-test')

    cy.get('@item')
      .find('a')
      .as('link')
      .should('have.class', 'usa-nav__link')
      .and('have.attr', 'data-test')
      .and('contain', 'test-attr')

    cy.get('@link').should('have.attr', 'href').and('contain', '#')
    cy.get('@link').find('span').should('contain', 'Test nav link')

    cy.get('@closeAllDropdowns').should('not.be.called')
    cy.get('@closeMobileMenu').should('not.be.called')

    cy.get('@link').click()

    cy.get('@closeAllDropdowns').should('be.called')
    cy.get('@closeMobileMenu').should('be.called')
  })

  it('renders as vue router link', () => {
    mount(UsaNavPrimaryItem, {
      props: {
        to: '/test',
        'router-component-name': 'router-link',
      },
      slots: {
        default: () => 'Test nav link',
      },
      global: {
        provide: {
          closeAllDropdowns: () => {},
          closeMobileMenu: () => {},
        },
      },
    })

    cy.get('router-link').should('have.attr', 'to').and('contain', '/test')
  })
})
