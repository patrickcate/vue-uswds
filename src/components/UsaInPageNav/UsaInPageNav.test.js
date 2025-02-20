import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaInPageNav from './UsaInPageNav.vue'
import {
  testNavMenu1,
  testNavMenu2,
  testSlotContent1,
  testSlotContent2,
} from './UsaInPageNav.fixtures.js'

describe('UsaInPageNav', () => {
  beforeEach(() => {
    cy.viewport('ipad-mini')
  })

  it('renders the component', () => {
    cy.mount(UsaInPageNav, {
      slots: {
        default: testSlotContent1,
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-in-page-nav-container').children().should('have.length', 2)

    cy.get('.usa-in-page-nav-container > aside.usa-in-page-nav')
      .should('exist')
      .within(() => {
        cy.get('nav.usa-in-page-nav__nav').should(
          'have.attr',
          'aria-label',
          'On this page',
        )
        cy.get('nav > h4.usa-in-page-nav__heading').should(
          'have.text',
          'On this page',
        )
        cy.get('nav > ul.usa-in-page-nav__list')
          .children()
          .should('have.length', 8)
        cy.get('.usa-in-page-nav__list > li.usa-in-page-nav__item a').should(
          'have.class',
          'usa-in-page-nav__link',
        )
      })

    cy.get('.usa-in-page-nav-container > main').should('exist')

    cy.get('.usa-in-page-nav__list > li:nth-of-type(1)').should(
      'have.class',
      'usa-in-page-nav__item--primary',
    )
    cy.get('.usa-in-page-nav__list > li:nth-of-type(2)').should(
      'have.class',
      'usa-in-page-nav__item--primary',
    )
    cy.get('.usa-in-page-nav__list > li:nth-of-type(5)').should(
      'have.class',
      'usa-in-page-nav__item--primary',
    )

    cy.get('.usa-in-page-nav__list > li:first-of-type a').should(
      'have.class',
      'usa-current',
    )

    cy.wrap(testNavMenu1).each((heading, index) => {
      cy.get(`main ${heading.element}`)
        .contains(heading.text)
        .find('> a')
        .should('have.attr', 'id', heading.id)

      cy.get(`.usa-in-page-nav__list > li:nth-of-type(${index + 1}) a`)
        .as('headingLink')
        .should('have.length', 1)
        .and('have.text', heading.text)
        .and('have.attr', 'href', `#${heading.id}`)

      cy.get('@headingLink').click()

      cy.get('@headingLink').should('have.class', 'usa-current')
      cy.get(`${heading.element}`).contains(heading.text).should('be.visible')

      cy.get('@wrapper')
        .vue()
        .then(vm => {
          expect(vm.emitted()).to.have.property('activeHeading')
          const currentActiveHeadingEvent = vm.emitted('activeHeading')
          expect(
            currentActiveHeadingEvent[currentActiveHeadingEvent.length - 1],
          ).to.contain(heading.id)
        })
    })

    cy.scrollTo('top', { duration: 2000 })

    cy.wrap(testNavMenu1).each((heading, index) => {
      cy.get(`main ${heading.element}`)
        .contains(heading.text)
        .find('> a')
        .should('have.attr', 'id', heading.id)

      cy.get(`.usa-in-page-nav__list > li:nth-of-type(${index + 1}) a`)
        .as('headingLink')
        .should('have.length', 1)
        .and('have.text', heading.text)
        .and('have.attr', 'href', `#${heading.id}`)

      cy.get('@headingLink').type('{enter}')

      cy.get('@headingLink').should('have.class', 'usa-current')
      cy.get(`${heading.element}`).contains(heading.text).should('be.visible')
    })
  })

  it('custom prop values and classes are used', () => {
    cy.mount(UsaInPageNav, {
      props: {
        title: 'Test title',
        mainContentSelector: '.test-main-content',
        headingLevel: 'h6',
        headingElements: ['h4', 'h5', 'h6'],
        scrollOffset: 100,
        rootMargin: '20px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
        customClasses: {
          aside: ['test-aside'],
          nav: ['test-nav'],
          heading: ['test-heading'],
          list: ['test-list'],
          item: ['test-item'],
          link: ['test-link'],
        },
      },
      slots: {
        default: testSlotContent2,
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-in-page-nav').should('have.class', 'test-aside')
    cy.get('.usa-in-page-nav__nav')
      .should('have.class', 'test-nav')
      .and('have.attr', 'aria-label', 'Test title')
    cy.get('h6.usa-in-page-nav__heading')
      .should('have.class', 'test-heading')
      .and('contain', 'Test title')
    cy.get('.usa-in-page-nav__list').should('have.class', 'test-list')
    cy.get('.usa-in-page-nav__list > li').should('have.length', 5)
    cy.get('.usa-in-page-nav__item').should('have.class', 'test-item')
    cy.get('.usa-in-page-nav__link').should('have.class', 'test-link')

    cy.wrap(testNavMenu2).each((heading, index) => {
      cy.get(`.test-main-content ${heading.element}`)
        .contains(heading.text)
        .find('> a')
        .should('have.attr', 'id', heading.id)

      cy.get(`.usa-in-page-nav__list > li:nth-of-type(${index + 1}) a`)
        .as('headingLink')
        .should('have.length', 1)
        .and('have.text', heading.text)
        .and('have.attr', 'href', `#${heading.id}`)

      cy.get('@headingLink').click()

      cy.get('@headingLink').should('have.class', 'usa-current')

      cy.get(`${heading.element}`)
        .contains(heading.text)
        .should('be.visible')
        .then(([element]) => element.offsetTop)
        .then(offset => {
          const topOffset = offset - 100
          cy.window()
            .its('scrollY')
            .should('be.within', topOffset - 1, topOffset + 1)
        })
    })

    cy.then(() => {
      const newHeading = document.createElement('h4')
      newHeading.textContent = 'Test Adding New Heading'
      const newParagraph = document.createElement('p')
      newParagraph.textContent = 'Test adding new paragraph'

      const main = document.querySelector('.test-main-content')
      main.append(newHeading)
      main.append(newParagraph)

      cy.get('.usa-in-page-nav__list > li').should('have.length', 6)
      cy.get('.usa-in-page-nav__list > li:last-of-type a')
        .should('have.attr', 'href', '#test-adding-new-heading')
        .and('contain', 'Test Adding New Heading')

      cy.get('.test-main-content')
        .contains('Test Adding New Heading')
        .find('a')
        .should('have.attr', 'id', 'test-adding-new-heading')
    })

    // Test that changing heading text also changes id and link text.
    cy.get('h4')
      .contains('Suspendisse id velit')
      .then(([heading]) => {
        heading.textContent = 'Aliquam erat volutpat'
      })

    cy.get('h4')
      .contains('Aliquam erat volutpat')
      .find('a')
      .should('have.attr', 'id', 'aliquam-erat-volutpat')

    cy.get('.usa-in-page-nav__list > li:nth-of-type(2)').should(
      'have.class',
      'usa-in-page-nav__item--primary',
    )

    cy.get('.usa-in-page-nav__list > li:nth-of-type(2) a')
      .should('have.attr', 'href', '#aliquam-erat-volutpat')
      .and('contain', 'Aliquam erat volutpat')

    cy.get('@wrapper').invoke('unmount')
  })

  it('menu not rendered if below minimum heading count', () => {
    cy.mount(UsaInPageNav, {
      props: {
        minimumHeadingCount: 3,
      },
      slots: {
        default: `<main><h2>Test Heading 1</h2><p>Test paragraph 1</p><h2>Test Heading 2</h2><p>Test paragraph 2</p></main>`,
      },
    })

    cy.get('.usa-in-page-nav-container').should('exist')
    cy.get('main').should('exist')
    cy.get('main a').should('not.exist')
    cy.get('.usa-in-page-nav').should('not.exist')
  })

  it('warns in console about invalid variant prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaInPageNav, {
      props: {
        headingLevel: 'notaheadinglevel',
        headingElements: ['notaheadinglevel', 'h2'],
      },
      slots: {
        default: testSlotContent1,
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notaheadinglevel' is not a valid HTML heading element`,
    )

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'headingElements' contains an invalid HTML heading element`,
    )
  })
})
