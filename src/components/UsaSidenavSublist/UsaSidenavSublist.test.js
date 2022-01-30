import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaSidenavSublist from './UsaSidenavSublist.vue'

const testItems = [
  {
    to: '/page-1',
    text: 'Page 1',
    children: [
      {
        href: '/page-1-1',
        text: 'Page 1.1',
      },
    ],
  },
  {
    to: '/page-2',
    text: 'Page 2',
  },
]

describe('UsaSidenavSublist', () => {
  beforeEach(() => {
    // Set viewport large enough that all links show.
    cy.viewport('ipad-mini')
  })

  it.only('renders the component', () => {
    mount(UsaSidenavSublist, {
      props: {
        items: testItems,
        customClasses: {
          item: ['test-item-class'],
          link: ['test-link-class'],
          sublist: ['test-sublist-class'],
        },
      },
    })

    cy.get('[data-v-app] > ul.usa-sidenav__sublist').should(
      'have.class',
      'test-sublist-class'
    )

    // Re-Query to make sure async component has rendered.
    cy.get('[data-v-app] > ul.usa-sidenav__sublist')
      .as('sublist-1')
      .should('exist')

    cy.get('@sublist-1')
      .find('> li.usa-sidenav__item')
      .should('have.class', 'test-item-class')
      .should('have.length', 2)

    cy.get('@sublist-1')
      .find('> li:first-of-type > a')
      .should('have.class', 'test-link-class')
      .and('have.attr', 'to')
      .and('contain', '/page-1')

    cy.get('@sublist-1').find('> li:first-of-type > a').contains('Page 1')

    cy.get('@sublist-1')
      .find('> li:first-of-type > ul')
      .as('sublist-2')
      .should('have.class', 'test-sublist-class')

    cy.get('@sublist-2')
      .find('> li.usa-sidenav__item')
      .should('have.class', 'test-item-class')
      .should('have.length', 1)

    cy.get('@sublist-2')
      .find('> li > a')
      .should('have.class', 'test-link-class')
      .and('have.attr', 'href')
      .and('contain', '/page-1-1')

    cy.get('@sublist-2')
      .find('> li:first-of-type > a')
      .should('contain', 'Page 1.1')

    cy.get('@sublist-1')
      .find('> li:last-of-type')
      .should('have.class', 'test-item-class')

    cy.get('@sublist-1')
      .find('> li:last-of-type > a')
      .should('have.class', 'test-link-class')
      .and('have.attr', 'to')
      .and('contain', '/page-2')

    cy.get('@sublist-1')
      .find('> li:last-of-type > a')
      .should('contain', 'Page 2')
  })

  it('`items` prop is available in scoped slot`', () => {
    mount(UsaSidenavSublist, {
      props: {
        items: testItems,
      },
      slots: {
        default: props => h('li', {}, `path is: ${props.items[0].to}`),
      },
    })

    cy.get('.usa-sidenav__sublist li').should('contain', 'path is: /page-1')
  })

  it('warns in console about required `items` prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaSidenavSublist, {})

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Missing required prop: "items"`
    )
  })
})
