import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import UsaFooterNav from './UsaFooterNav.vue'

describe('UsaFooterNav', () => {
  let testItems = []

  beforeEach(() => {
    testItems = [
      {
        href: '/item-1',
        text: 'Item 1',
      },
      {
        href: '/item-2',
        text: 'Item 2',
      },
    ]
  })

  it('renders the component', () => {
    cy.mount(UsaFooterNav, {})

    cy.get('nav')
      .should('have.class', 'usa-footer__nav')
      .and('have.attr', 'aria-label', 'Footer navigation')
      .and('be.empty')
  })

  it('uses custom aria label and scoped default slot', () => {
    cy.mount(UsaFooterNav, {
      props: {
        ariaLabel: 'Test aria label',
        items: testItems,
      },
      slots: {
        default: ({ items }) => h('span', {}, `Test ${items[0].text}`),
      },
    })

    cy.get('.usa-footer__nav').should(
      'have.attr',
      'aria-label',
      'Test aria label',
    )
    cy.get('.usa-footer__nav > span').should('have.contain', 'Test Item 1')
    cy.get('h4').should('not.exist')
  })

  it('renders `medium` footer menu', () => {
    cy.mount(UsaFooterNav, {
      props: {
        items: testItems,
      },
    })

    cy.get('.usa-footer__nav ul')
      .should('have.class', 'grid-row')
      .and('have.class', 'grid-gap')

    cy.get('.usa-footer__nav li')
      .should('have.length', 2)
      .and('have.class', 'usa-footer__primary-content')
      .and('have.class', 'mobile-lg:grid-col-6')
      .and('have.class', 'desktop:grid-col-auto')

    cy.get('.usa-footer__nav a')
      .should('have.length', 2)
      .and('have.class', 'usa-footer__primary-link')

    cy.get('h4').should('not.exist')
  })

  it('renders `slim` footer menu', () => {
    cy.mount(UsaFooterNav, {
      props: {
        items: testItems,
      },
      global: {
        provide: {
          footerVariant: 'slim',
        },
      },
    })

    cy.get('.usa-footer__nav ul')
      .should('have.class', 'grid-row')
      .and('have.class', 'grid-gap')

    cy.get('.usa-footer__nav li')
      .should('have.length', 2)
      .and('have.class', 'usa-footer__primary-content')
      .and('have.class', 'mobile-lg:grid-col-6')
      .and('have.class', 'desktop:grid-col-auto')

    cy.get('.usa-footer__nav a')
      .should('have.length', 2)
      .and('have.class', 'usa-footer__primary-link')

    cy.get('h4').should('not.exist')
  })

  it('renders `big` footer menu', () => {
    cy.mount(UsaFooterNav, {
      props: {
        items: testItems,
      },
      global: {
        provide: {
          footerVariant: 'big',
        },
      },
    })

    cy.get('.usa-footer__nav > div')
      .should('have.class', 'grid-row')
      .and('have.class', 'grid-gap-4')

    cy.get('.usa-footer__nav > div > div')
      .should('have.class', 'mobile-lg:grid-col-6')
      .and('have.class', 'desktop:grid-col-3')

    cy.get('.usa-footer__nav div section')
      .should('have.length', 2)
      .and('have.class', 'usa-footer__primary-content')
      .and('have.class', 'usa-footer__primary-content--collapsible')

    cy.get('h4').should('have.class', 'usa-footer__primary-link')
  })

  it('menu for invalid footer variant is not rendered', () => {
    cy.mount(UsaFooterNav, {
      props: {
        items: testItems,
      },
      global: {
        provide: {
          footerVariant: 'invalidfootervariant',
        },
      },
    })

    cy.get('.usa-footer__nav ul').should('not.exist')
  })

  it('`big` menu uses custom heading tag', () => {
    cy.mount(UsaFooterNav, {
      props: {
        collapsibleHeadingTag: 'h2',
        items: testItems,
      },
      global: {
        provide: {
          footerVariant: 'big',
        },
      },
    })

    cy.get('h2').should('have.class', 'usa-footer__primary-link')
  })

  it('`medium/slim` menu uses custom grid classes', () => {
    cy.mount(UsaFooterNav, {
      props: {
        items: testItems,
        customClasses: {
          gridRow: ['test-grid-row-class'],
          gridCol: ['test-grid-col-class'],
        },
      },
    })

    cy.get('.usa-footer__nav > ul').should('have.class', 'test-grid-row-class')

    cy.get('.usa-footer__nav > ul > li').should(
      'have.class',
      'test-grid-col-class',
    )
  })

  it('`big` menu uses custom grid classes', () => {
    cy.mount(UsaFooterNav, {
      props: {
        items: testItems,
        customClasses: {
          gridRow: ['test-grid-row-class'],
          gridCol: ['test-grid-col-class'],
        },
      },
      global: {
        provide: {
          footerVariant: 'big',
        },
      },
    })

    cy.get('.usa-footer__nav > div').should('have.class', 'test-grid-row-class')

    cy.get('.usa-footer__nav > div > div').should(
      'have.class',
      'test-grid-col-class',
    )
  })

  it('`medium/slim` menu uses custom grid prefix and separator', () => {
    cy.mount(UsaFooterNav, {
      props: {
        items: testItems,
      },
      global: {
        provide: {
          'vueUswds.prefixSeparator': '@',
          'vueUswds.gridNamespace': 'test-grid-namespace-',
        },
      },
    })

    cy.get('.usa-footer__nav ul')
      .should('have.class', 'test-grid-namespace-row')
      .and('have.class', 'test-grid-namespace-gap')

    cy.get('.usa-footer__nav li')
      .and('have.class', 'mobile-lg@test-grid-namespace-col-6')
      .and('have.class', 'desktop@test-grid-namespace-col-auto')
  })

  it('`big` menu uses custom grid prefix and separator', () => {
    cy.mount(UsaFooterNav, {
      props: {
        items: testItems,
      },
      global: {
        provide: {
          footerVariant: 'big',
          'vueUswds.prefixSeparator': '@',
          'vueUswds.gridNamespace': 'test-grid-namespace-',
        },
      },
    })

    cy.get('.usa-footer__nav > div')
      .should('have.class', 'test-grid-namespace-row')
      .and('have.class', 'test-grid-namespace-gap-4')

    cy.get('.usa-footer__nav > div > div')
      .should('have.class', 'mobile-lg@test-grid-namespace-col-6')
      .and('have.class', 'desktop@test-grid-namespace-col-3')
  })
})
