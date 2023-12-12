import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import UsaSidenav from './UsaSidenav.vue'

const testItems = [
  {
    to: '/home',
    text: 'Home',
  },
  {
    to: {
      path: '/section-1',
    },
    text: 'Section 1',
    routerComponentName: 'router-link',
    children: [
      {
        to: '/section-1/page-1',
        text: 'Section 1 - Page 1',
        routerComponentName: 'router-link',
      },
      {
        to: '/section-1/page-2',
        text: 'Section 1 - Page 2',
        routerComponentName: 'nuxt-link',
        children: [
          {
            to: '/section-1/page-2/sub-section-1',
            text: 'Sub section 1',
            children: [],
          },
          {
            to: '/section-1/page-2/sub-section-2',
            text: 'Sub section 2',
          },
          {
            to: '/section-1/page-2/sub-section-3',
            text: 'Sub section 3',
            children: [
              {
                to: '/section-1/page-2/sub-section-3/sub-page-1',
                text: 'Sub section 3 - Page 1',
              },
              {
                to: '/section-1/page-2/sub-section-3/sub-page-2',
                text: 'Sub section 3 - Page 2',
              },
            ],
          },
        ],
      },
      {
        to: '/section-1/page-3',
        text: 'Section 1 - Page 3',
        routerComponentName: 'g-link',
      },
    ],
  },
  {
    to: '/section-2',
    text: 'Section 2',
    children: [
      {
        to: '/section-2/page-1',
        text: 'Section 2 - Page 1',
        children: [
          {
            to: '/section-2/page-1/sub-section-1',
            id: 'sub-section-id',
            text: 'Sub section 1',
          },
          {
            to: '/section-2/page-1/sub-section-2',
            text: 'Sub section 2',
          },
          {
            to: '/section-2/page-1/sub-section-3',
            text: 'Sub section 3',
          },
        ],
      },
    ],
  },
  {
    href: 'https://google.com',
    text: 'Google',
    attrs: {
      target: '_blank',
    },
  },
]

describe('UsaSidenav', () => {
  beforeEach(() => {
    // Set viewport large enough that all links show.
    cy.viewport('ipad-mini')
  })

  it('renders the component', () => {
    cy.mount(UsaSidenav, {
      props: {
        items: testItems,
      },
    })

    cy.get('nav')
      .should('have.attr', 'aria-label')
      .and('contain', 'Secondary navigation')

    cy.get('ul.usa-sidenav').should('exist')

    // Should have 4 top level items.
    cy.get('ul.usa-sidenav > li.usa-sidenav__item').should('have.length', 4)

    // Home Link
    cy.get('ul.usa-sidenav > li.usa-sidenav__item:nth-of-type(1) a')
      .should('have.attr', 'to')
      .and('contain', '/home')
    cy.get('ul.usa-sidenav > li.usa-sidenav__item:nth-of-type(1) a').should(
      'contain',
      'Home'
    )

    // Section 1
    cy.get('ul.usa-sidenav > li.usa-sidenav__item:nth-of-type(2)').as(
      'section1'
    )

    cy.get('@section1')
      .find('router-link')
      .should('have.attr', 'to')
      .and('contain', '[object Object]')
    cy.get('@section1').find('router-link').should('contain', 'Section 1')

    // Section 1 Sublist
    cy.get('@section1')
      .find(' > ul.usa-sidenav__sublist > li.usa-sidenav__item')
      .should('have.length', 3)

    cy.get('@section1')
      .find(
        ' > ul.usa-sidenav__sublist > li.usa-sidenav__item:nth-of-type(1) > router-link'
      )
      .should('have.attr', 'to')
      .and('contain', '/section-1/page-1')
    cy.get('@section1')
      .find(
        ' > ul.usa-sidenav__sublist > li.usa-sidenav__item:nth-of-type(1) > router-link'
      )
      .should('contain', 'Section 1 - Page 1')

    cy.get('@section1')
      .find(
        ' > ul.usa-sidenav__sublist > li.usa-sidenav__item:nth-of-type(2) > nuxt-link'
      )
      .should('have.attr', 'to')
      .and('contain', '/section-1/page-2')
    cy.get('@section1')
      .find(
        ' > ul.usa-sidenav__sublist > li.usa-sidenav__item:nth-of-type(2) > nuxt-link'
      )
      .should('contain', 'Section 1 - Page 2')

    cy.get('@section1')
      .find(
        ' > ul.usa-sidenav__sublist > li.usa-sidenav__item:nth-of-type(3) > g-link'
      )
      .should('have.attr', 'to')
      .and('contain', '/section-1/page-3')
    cy.get('@section1')
      .find(
        ' > ul.usa-sidenav__sublist > li.usa-sidenav__item:nth-of-type(3) > g-link'
      )
      .should('contain', 'Section 1 - Page 3')

    cy.get('@section1')
      .find(
        ' > ul.usa-sidenav__sublist > li.usa-sidenav__item:nth-of-type(2) > ul.usa-sidenav__sublist'
      )
      .as('section1-sublist')

    // Section 1 Sublist.
    cy.get('@section1-sublist')
      .find('> li.usa-sidenav__item')
      .should('have.length', 3)

    cy.get('@section1-sublist')
      .find('> li.usa-sidenav__item:nth-of-type(1) > a')
      .should('have.attr', 'to')
      .and('contain', '/section-1/page-2/sub-section-1')
    cy.get('@section1-sublist')
      .find('> li.usa-sidenav__item:nth-of-type(1) > a')
      .should('contain', 'Sub section 1')

    cy.get('@section1-sublist')
      .find('> li.usa-sidenav__item:nth-of-type(2) > a')
      .should('have.attr', 'to')
      .and('contain', '/section-1/page-2/sub-section-2')
    cy.get('@section1-sublist')
      .find('> li.usa-sidenav__item:nth-of-type(2) > a')
      .should('contain', 'Sub section 2')

    cy.get('@section1-sublist')
      .find('> li.usa-sidenav__item:nth-of-type(3) > a')
      .should('have.attr', 'to')
      .and('contain', '/section-1/page-2/sub-section-3')
    cy.get('@section1-sublist')
      .find('> li.usa-sidenav__item:nth-of-type(3) > a')
      .should('contain', 'Sub section 3')

    // Sub-Section 3
    cy.get('@section1-sublist')
      .find('> li.usa-sidenav__item:nth-of-type(3) > ul.usa-sidenav__sublist')
      .as('sub-section-3')

    cy.get('@sub-section-3')
      .find('> li.usa-sidenav__item')
      .should('have.length', 2)

    cy.get('@sub-section-3')
      .find('> li.usa-sidenav__item:nth-of-type(1) > a')
      .should('have.attr', 'to')
      .and('contain', '/section-1/page-2/sub-section-3/sub-page-1')
    cy.get('@sub-section-3')
      .find('> li.usa-sidenav__item:nth-of-type(1) > a')
      .should('contain', 'Sub section 3 - Page 1')

    cy.get('@sub-section-3')
      .find('> li.usa-sidenav__item:nth-of-type(2) > a')
      .should('have.attr', 'to')
      .and('contain', '/section-1/page-2/sub-section-3/sub-page-2')
    cy.get('@sub-section-3')
      .find('> li.usa-sidenav__item:nth-of-type(2) > a')
      .should('contain', 'Sub section 3 - Page 2')

    // Section 2
    cy.get('ul.usa-sidenav > li.usa-sidenav__item:nth-of-type(3)').as(
      'section2'
    )

    cy.get('@section2')
      .find('a')
      .should('have.attr', 'to')
      .and('contain', '/section-2')
    cy.get('@section2').find('a').should('contain', 'Section 2')

    // Section 2 Sublist
    cy.get('@section2')
      .find(' > ul.usa-sidenav__sublist > li.usa-sidenav__item')
      .should('have.length', 1)

    cy.get('@section2')
      .find(
        ' > ul.usa-sidenav__sublist > li.usa-sidenav__item:only-of-type > a'
      )
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-1')
    cy.get('@section2')
      .find(
        ' > ul.usa-sidenav__sublist > li.usa-sidenav__item:nth-of-type(1) > a'
      )
      .should('contain', 'Section 2 - Page 1')

    // Subsection 2
    cy.get('@section2')
      .find(
        '> ul.usa-sidenav__sublist > li.usa-sidenav__item:only-of-type > ul.usa-sidenav__sublist'
      )
      .as('sub-section-2')

    cy.get('@sub-section-2')
      .find('> li.usa-sidenav__item')
      .should('have.length', 3)

    cy.get('@sub-section-2')
      .find('> li.usa-sidenav__item:nth-of-type(1) > a')
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-1/sub-section-1')
    cy.get('@sub-section-2')
      .find('> li.usa-sidenav__item:nth-of-type(1) > a')
      .should('contain', 'Sub section 1')

    cy.get('@sub-section-2')
      .find('> li.usa-sidenav__item:nth-of-type(2) > a')
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-1/sub-section-2')
    cy.get('@sub-section-2')
      .find('> li.usa-sidenav__item:nth-of-type(2) > a')
      .should('contain', 'Sub section 2')

    cy.get('@sub-section-2')
      .find('> li.usa-sidenav__item:nth-of-type(3) > a')
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-1/sub-section-3')
    cy.get('@sub-section-2')
      .find('> li.usa-sidenav__item:nth-of-type(3) > a')
      .should('contain', 'Sub section 3')

    // External link.
    cy.get('ul.usa-sidenav > li.usa-sidenav__item:nth-of-type(4) a')
      .should('have.attr', 'href')
      .and('contain', 'https://google.com')
    cy.get('ul.usa-sidenav > li.usa-sidenav__item:nth-of-type(4) a')
      .should('have.attr', 'target')
      .and('contain', '_blank')
    cy.get('ul.usa-sidenav > li.usa-sidenav__item:nth-of-type(4) a').should(
      'contain',
      'Google'
    )
  })

  it('adds custom CSS classes', () => {
    cy.mount(UsaSidenav, {
      props: {
        items: testItems,
        customClasses: {
          list: ['test-list-class'],
          item: ['test-item-class'],
          link: ['test-link-class'],
          sublist: ['test-sublist-class'],
        },
      },
    })

    cy.get('.test-list-class').should('have.length', 1)
    cy.get('.test-item-class').should('have.length', 16)
    cy.get('.test-link-class').should('have.length', 16)
    cy.get('.test-sublist-class').should('have.length', 5)
  })

  it('render custom aria label', () => {
    cy.mount(UsaSidenav, {
      props: {
        items: testItems,
        ariaLabel: 'Custom aria label',
      },
    })

    cy.get('nav')
      .should('have.attr', 'aria-label')
      .and('contain', 'Custom aria label')
  })

  it('uses custom slot content', () => {
    cy.mount(UsaSidenav, {
      props: {
        items: testItems,
      },
      slots: {
        before: () => h('p', {}, 'Before slot content'),
        after: () => h('p', {}, 'After slot content'),
        default: props =>
          h(
            'span',
            {
              'v-slot:items': 'props',
              class: 'test-class',
            },
            `${props.items[0].to} - ${props.items[0].text}`
          ),
      },
    })

    cy.get('p:first-of-type').should('contain', 'Before slot content')
    cy.get('p:last-of-type').should('contain', 'After slot content')
    cy.get('span.test-class').should('contain', '/home - Home')
  })
})
