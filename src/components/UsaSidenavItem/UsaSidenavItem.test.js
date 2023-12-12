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
    },
  ],
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
      .should('have.class', 'test-link-class')
      .and('have.attr', 'to')
      .and('contain', '/page-1')

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

  it('`item` prop is available in scoped slot', () => {
    cy.mount(UsaSidenavItem, {
      props: {
        item: testItem,
      },
      slots: {
        default: props => h('span', {}, `path is: ${props.item.to}`),
      },
    })

    cy.get('[data-v-app] > .usa-sidenav__item > a span').should(
      'contain',
      'path is: /page-1'
    )
  })

  it('warns in console about required `item` prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaSidenavItem, {})

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Missing required prop: "item"`
    )
  })
})
