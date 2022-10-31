import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaPaginationItem from './UsaPaginationItem.vue'

describe('UsaPaginationItem', () => {
  it('renders the component', () => {
    mount(UsaPaginationItem, {
      props: {
        pageNumber: 1,
        ariaLabel: 'Page 1',
      },
    })

    cy.get('li.usa-pagination__item').should(
      'have.class',
      'usa-pagination__page-no'
    )

    cy.get('.usa-pagination__item button')
      .should('have.class', 'usa-button--unstyled')
      .and('have.class', 'usa-pagination__button')
      .and('not.have.class', 'usa-current')
      .and('have.attr', 'aria-label')
      .and('contain', 'Page 1')

    cy.get('.usa-pagination__item button')
      .should('contain', 1)
      .and('not.have.attr', 'aria-current')
  })

  it('current page should have `aria-current` attribute and `usa-current` CSS class', () => {
    mount(UsaPaginationItem, {
      props: {
        pageNumber: 2,
        ariaLabel: 'Page 2',
        isCurrentPage: true,
      },
    })

    cy.get('.usa-pagination__item button')
      .should('have.class', 'usa-current')
      .and('have.attr', 'aria-current')
      .and('contain', 'page')
  })

  it('should only have `usa-button--unstyled` CSS class if button', () => {
    mount(UsaPaginationItem, {
      props: {
        pageNumber: 3,
        ariaLabel: 'Page 3',
      },
    }).as('wrapper')

    cy.get('.usa-pagination__item button').should(
      'have.class',
      'usa-button--unstyled'
    )

    cy.get('@wrapper').invoke('setProps', {
      href: '/test-page',
    })

    cy.get('.usa-pagination__item a').should(
      'not.have.class',
      'usa-button--unstyled'
    )
  })

  it('renders as `router-link` if vue-router is detected', () => {
    mount(UsaPaginationItem, {
      props: {
        pageNumber: 3,
        ariaLabel: 'Page 3',
        to: '/test-page',
      },
      global: {
        mocks: {
          $router: true,
        },
      },
    })

    cy.get('.usa-pagination__item router-link').should('exist')
  })

  it('renders as `nuxt-link` if nuxt is detected', () => {
    mount(UsaPaginationItem, {
      props: {
        pageNumber: 3,
        ariaLabel: 'Page 3',
        to: '/test-page',
      },
      global: {
        mocks: {
          $nuxt: true,
        },
      },
    })

    cy.get('.usa-pagination__item nuxt-link').should('exist')
  })

  it('warns in console about required aria-label prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaPaginationItem, {
      props: {
        pageNumber: 3,
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Missing required prop: "ariaLabel"`
    )
  })

  it('warns in console about invalid `pageNumber` prop value', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaPaginationItem, {
      props: {
        pageNumber: 0,
        ariaLabel: 'Page 3',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Invalid prop: custom validator check failed for prop "pageNumber".`
    )
  })
})
