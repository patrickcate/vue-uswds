import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaPaginationArrow from './UsaPaginationArrow.vue'

describe('UsaPaginationArrow', () => {
  beforeEach(() => {
    // Set viewport large enough that the previous/next links will always show.
    // The are hidden on smaller screens.
    cy.viewport('ipad-mini')
  })

  it('renders the component', () => {
    cy.mount(UsaPaginationArrow, {
      props: {
        direction: 'previous',
        label: 'Previous',
        ariaLabel: 'Previous page',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('li.usa-pagination__item.usa-pagination__arrow')
      .as('arrowItem')
      .should('exist')

    cy.get('@arrowItem')
      .find('button')
      .should('have.class', 'usa-pagination__previous-page')
      .and('have.class', 'usa-pagination__link')
      .and('have.class', 'usa-button--unstyled')
      .and('have.attr', 'aria-label', 'Previous page')

    cy.get('@arrowItem')
      .find('span')
      .should('have.class', 'usa-pagination__link-text')
      .and('contain', 'Previous')

    cy.get('@wrapper').invoke('setProps', {
      direction: 'next',
      label: 'Next',
      ariaLabel: 'Next page',
    })

    cy.get('@arrowItem')
      .find('button')
      .should('have.class', 'usa-pagination__next-page')
      .and('have.attr', 'aria-label', 'Next page')

    cy.get('@arrowItem')
      .find('span')
      .should('have.class', 'usa-pagination__link-text')
      .and('contain', 'Next')
  })

  it('default slot override `label` prop', () => {
    cy.mount(UsaPaginationArrow, {
      props: {
        direction: 'previous',
        label: 'Previous',
        ariaLabel: 'Previous page',
      },
      slots: {
        default: () => 'Test default slot',
      },
    })

    cy.get('.usa-pagination__arrow').as('arrowItem')

    cy.get('@arrowItem')
      .find('.usa-pagination__link-text')
      .should('contain', 'Test default slot')
  })

  it('renders default icon svgs', () => {
    cy.mount(UsaPaginationArrow, {
      props: {
        direction: 'previous',
        label: 'Previous',
        ariaLabel: 'Previous page',
      },
      global: {
        provide: {
          'vueUswds.svgSpritePath': '/test.svg',
        },
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-pagination__arrow svg')
      .as('arrowSvg')
      .should('have.class', 'usa-icon')
      .and('have.attr', 'role', 'img')

    cy.get('@arrowSvg').should('have.attr', 'aria-hidden', 'true')

    cy.get('@arrowSvg')
      .find('use')
      .should('have.attr', 'xlink:href', '/test.svg#navigate_before')

    cy.get('@wrapper').invoke('setProps', {
      direction: 'next',
      label: 'Next',
      ariaLabel: 'Next page',
    })

    cy.get('.usa-pagination__arrow svg')
      .as('arrowSvg')
      .should('have.class', 'usa-icon')
      .and('have.attr', 'role', 'img')

    cy.get('@arrowSvg').should('have.attr', 'aria-hidden', 'true')

    cy.get('@arrowSvg')
      .find('use')
      .should('have.attr', 'xlink:href', '/test.svg#navigate_next')
  })

  it('renders custom `before` and `after` slot content', () => {
    cy.mount(UsaPaginationArrow, {
      props: {
        direction: 'previous',
        label: 'Previous',
        ariaLabel: 'Previous page',
      },
      slots: {
        before: () => 'Test previous slot',
        after: () => 'Test next slot',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-pagination__arrow').as('arrowItem').should('exist')

    cy.get('@arrowItem')
      .find('.usa-pagination__link')
      .should('contain', 'Test previous slot')

    cy.get('@wrapper').invoke('setProps', {
      direction: 'next',
      label: 'Next',
      ariaLabel: 'Next page',
    })

    cy.get('@arrowItem')
      .find('.usa-pagination__link')
      .should('contain', 'Test next slot')
  })

  it('adds custom CSS classes', () => {
    cy.mount(UsaPaginationArrow, {
      props: {
        direction: 'previous',
        label: 'Previous',
        ariaLabel: 'Previous page',
        customClasses: {
          link: ['test-link-class'],
          text: ['test-text-class'],
        },
      },
    })

    cy.get('.usa-pagination__arrow').as('arrowItem').should('exist')

    cy.get('@arrowItem')
      .find('.usa-pagination__link')
      .should('have.class', 'test-link-class')

    cy.get('@arrowItem')
      .find('.usa-pagination__link-text')
      .should('have.class', 'test-text-class')
  })

  it('warns in console about invalid direction prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaPaginationArrow, {
      props: {
        direction: 'notdirection',
        label: 'Previous',
        ariaLabel: 'Previous page',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Invalid prop: custom validator check failed for prop "direction".`
    )
  })

  it('warns in console about required aria-label prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaPaginationArrow, {
      props: {
        direction: 'previous',
        label: 'Previous',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Missing required prop: "ariaLabel"`
    )
  })

  it('should only have `usa-button--unstyled` CSS class if button', () => {
    cy.mount(UsaPaginationArrow, {
      props: {
        direction: 'previous',
        label: 'Previous',
        ariaLabel: 'Previous page',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-pagination__arrow button').should(
      'have.class',
      'usa-button--unstyled'
    )

    cy.get('@wrapper').invoke('setProps', {
      href: '/test-page',
    })

    cy.get('.usa-pagination__arrow a').should(
      'not.have.class',
      'usa-button--unstyled'
    )
  })

  it('renders as `router-link` if vue-router is detected', () => {
    cy.mount(UsaPaginationArrow, {
      props: {
        direction: 'previous',
        label: 'Previous',
        to: '/test-page',
        ariaLabel: 'Previous page',
      },
      global: {
        mocks: {
          $router: true,
        },
      },
    })

    cy.get('.usa-pagination__arrow router-link').should('exist')
  })

  it('renders as `nuxt-link` if nuxt is detected', () => {
    cy.mount(UsaPaginationArrow, {
      props: {
        direction: 'previous',
        label: 'Previous',
        to: '/test-page',
        ariaLabel: 'Previous page',
      },
      global: {
        mocks: {
          $nuxt: true,
        },
      },
    })

    cy.get('.usa-pagination__arrow nuxt-link').should('exist')
  })
})
