import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import UsaSidenavItem from './UsaSidenavItem.vue'

const testItem = {
  to: '/page-1',
  text: 'Page 1',
  children: [
    {
      href: '/page-1-1',
      text: 'Page 1.1',
      attrs: {
        href: '/test-page',
      },
    },
  ],
  attrs: {
    class: ['test-attrs-class'],
    id: 'test-id',
    href: '/test-page',
  },
}

describe('UsaSidenavItem', () => {
  beforeEach(() => {
    // Set viewport large enough that all links show.
    cy.viewport('ipad-mini')
  })

  it('renders the component', () => {
    cy.mount(UsaSidenavItem, {
      props: {
        item: testItem,
        customClasses: {
          item: ['test-item-class'],
          link: ['test-link-class'],
          sublist: ['test-sublist-class'],
        },
      },
    })

    cy.get('[data-v-app] > li.usa-sidenav__item')
      .as('item')
      .should('have.class', 'test-item-class')

    cy.get('@item')
      .find('> a')
      .should('have.id', 'test-id')
      .and('have.class', 'test-link-class')
      .and('have.class', 'test-attrs-class')
      .and('have.attr', 'to', '/page-1')
      .and('not.have.attr', 'href')

    cy.get('@item').find('> a').should('contain', 'Page 1')

    cy.get('ul.usa-sidenav__sublist')
      .as('sublist')
      .should('have.class', 'test-sublist-class')

    cy.get('@sublist').find('> li').should('have.class', 'usa-sidenav__item')

    cy.get('@sublist')
      .find('a')
      .should('have.class', 'test-link-class')
      .and('have.attr', 'href')
      .and('contain', '/page-1-1')

    cy.get('@sublist').find('a').should('contain', 'Page 1.1')
  })

  it('`item` and `children` props are available in scoped slots', () => {
    cy.mount(UsaSidenavItem, {
      props: {
        item: testItem,
      },
      slots: {
        default: ({ item }) => h('span', {}, `path is: ${item.to}`),
        sublist: ({ sublist }) => h('li', {}, `path is: ${sublist[0].href}`),
      },
    })

    cy.get('[data-v-app] > .usa-sidenav__item > a span').should(
      'contain',
      'path is: /page-1',
    )

    cy.get('.usa-sidenav__sublist li').should('contain', 'path is: /page-1-1')
  })

  it('warns in console about required `item` prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaSidenavItem, {})

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Missing required prop: "item"`,
    )
  })
})
