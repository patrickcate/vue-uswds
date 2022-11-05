import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaFooterCollapsibleMenu from './UsaFooterCollapsibleMenu.vue'

describe('UsaFooterCollapsibleMenu', () => {
  let testItems = []

  beforeEach(() => {
    testItems = [
      {
        text: 'Test Item 1',
        children: [
          {
            href: '/test-1/test-1-1',
            text: 'Test Item 1.1',
          },
          {
            href: '/test-1/test-1-2',
            text: 'Test Item 1.2',
          },
          {
            href: '/test-1/test-1-3',
            text: 'Test Item 1.3',
          },
        ],
      },
      {
        text: 'Test Item 2',
        children: [
          {
            to: '/test-2/test-2-1',
            text: 'Test Item 2.1',
          },
          {
            to: '/test-2/test-2-2',
            routerComponentName: 'nuxt-link',
            text: 'Test Item 2.2',
          },
          {
            href: '/test-2/test-2-3',
            text: 'Test Item 2.3',
          },
        ],
      },
      {
        id: 'test-3',
        text: 'Test Item 3',
        children: [
          {
            href: '/test-3/test-3-1',
            text: 'Test Item 3.1',
          },
          {
            href: '/test-3/test-3-2',
            text: 'Test Item 3.2',
          },
          {
            href: '/test-3/test-3-3',
            text: 'Test Item 3.3',
          },
        ],
      },
    ]
  })

  it('renders the component', () => {
    mount(UsaFooterCollapsibleMenu, {
      props: {
        items: testItems,
      },
    })

    cy.get('div.grid-row').should('have.class', 'grid-gap-4')
    cy.get('.grid-row > div')
      .should('have.class', 'mobile-lg:grid-col-6')
      .and('have.class', 'desktop:grid-col-3')

    cy.get('section')
      .should('have.length', 3)
      .and('have.class', 'usa-footer__primary-content')
      .and('have.class', 'usa-footer__primary-content--collapsible')

    cy.get('section > h4').should('have.length', 3)
    cy.get('section > ul').should('have.length', 3)
    cy.get('section li').should('have.length', 9)

    cy.viewport(480, 600)

    cy.get('section > h4').should('not.exist')
    cy.get('section > button').should('have.length', 3)
    cy.get('section > ul').should('not.have.visible')

    cy.get('section:nth-of-type(1) button').click()
    cy.get('section:nth-of-type(1) ul').should('be.visible')
    cy.get('section:nth-of-type(2) ul').should('be.hidden')
    cy.get('section:nth-of-type(3) ul').should('be.hidden')

    cy.get('section:nth-of-type(3) button').click()
    cy.get('section:nth-of-type(1) ul').should('be.hidden')
    cy.get('section:nth-of-type(2) ul').should('be.hidden')
    cy.get('section:nth-of-type(3) ul').should('be.visible')

    cy.viewport('macbook-15')

    cy.get('section > h4').should('have.length', 3)
    cy.get('section > button').should('not.exist')
    cy.get('section > ul').should('be.visible')

    cy.viewport(480, 600)

    cy.get('section > h4').should('not.exist')
    cy.get('section > button').should('have.length', 3)
    cy.get('section > ul').should('be.hidden')

    cy.get('section:nth-of-type(2) button').click()
    cy.get('section:nth-of-type(2) ul').should('be.visible')
  })

  it('starts as collapsible at small screens', () => {
    cy.viewport(480, 600)

    mount(UsaFooterCollapsibleMenu, {
      props: {
        items: testItems,
      },
    })

    cy.get('section > h4').should('not.exist')
    cy.get('section > button').should('have.length', 3)
    cy.get('section > ul').should('be.hidden')

    cy.get('section:nth-of-type(2) button').click()
    cy.get('section:nth-of-type(2) ul').should('be.visible')
  })

  it('headings use custom `h3` size', () => {
    mount(UsaFooterCollapsibleMenu, {
      props: {
        items: testItems,
        headingTag: 'h3',
      },
    })

    cy.get('section h3')
      .should('have.length', 3)
      .and('have.class', 'usa-footer__primary-link')
      .and('not.have.class', 'usa-footer__primary-link--button')
  })

  it('uses custom grid prefix and separator and nav breakpoint', () => {
    cy.viewport('macbook-15')

    mount(UsaFooterCollapsibleMenu, {
      props: {
        items: testItems,
      },
      global: {
        provide: {
          'vueUswds.footerNavBigBreakpoint': '850px',
          'vueUswds.prefixSeparator': '@',
          'vueUswds.gridNamespace': 'test-grid-namespace-',
        },
      },
    })

    cy.get('.test-grid-namespace-row').should(
      'have.class',
      'test-grid-namespace-gap-4'
    )
    cy.get('.test-grid-namespace-row > div')
      .should('have.class', 'mobile-lg@test-grid-namespace-col-6')
      .and('have.class', 'desktop@test-grid-namespace-col-3')

    cy.get('section > h4').should('have.length', 3)
    cy.get('section > button').should('not.exist')
    cy.get('section > ul')
      .should('not.have.css', 'display', 'none')
      .and('be.visible')

    cy.viewport(900, 1200)

    cy.get('section > button').should('not.exist')
    cy.get('section > h4').should('have.length', 3)
    cy.get('section > ul')
      .should('not.have.css', 'display', 'none')
      .and('be.visible')

    cy.viewport(750, 1200)

    cy.get('section > button')
      .should('have.length', 3)
      .and('have.attr', 'aria-expanded', 'false')
    cy.get('section > h4').should('not.exist')
    cy.get('section > ul')
      .should('have.css', 'display', 'none')
      .and('be.hidden')
  })

  it('has custom grid CSS classes', () => {
    mount(UsaFooterCollapsibleMenu, {
      props: {
        items: testItems,
        customClasses: {
          gridRow: ['test-grid-row-class'],
          gridCol: ['test-grid-col-class'],
        },
      },
    })

    cy.get('div:first-of-type').should('have.class', 'test-grid-row-class')
    cy.get('div:first-of-type > div').should(
      'have.class',
      'test-grid-col-class'
    )
  })
})
