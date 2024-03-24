import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaBannerContent from './UsaBannerContent.vue'

describe('UsaBannerContent', () => {
  it('renders the component', () => {
    cy.mount(UsaBannerContent, {})

    cy.get('[data-v-app] > div').should('exist')
    cy.get('.usa-banner__guidance').should('have.length', 2)
    cy.get('.usa-media-block__body').should('have.length', 2)

    cy.get('img.usa-banner__icon[src$="icon-dot-gov.svg"]')
      .as('tldIcon')
      .should('have.class', 'usa-media-block__img')
      .and('have.attr', 'role', 'img')
      .and('have.attr', 'alt', '')
      .and('have.attr', 'aria-hidden', 'true')

    cy.get('img.usa-banner__icon[src$="icon-https.svg"]')
      .as('httpsIcon')
      .should('have.class', 'usa-media-block__img')
      .and('have.attr', 'role', 'img')
      .and('have.attr', 'alt', '')
      .and('have.attr', 'aria-hidden', 'true')

    cy.get('span.icon-lock').should('exist')

    cy.get('svg.usa-banner__lock-image')
      .should('have.attr', 'focusable', 'false')
      .and('have.attr', 'role', 'img')
      .and('have.attr', 'aria-labelledby', 'banner-lock-description')
  })

  it('uses custom slot content', () => {
    cy.mount(UsaBannerContent, {
      slots: {
        'tld-icon': () => 'test tld icon',
        'tld-description': () => 'test tld description',
        'https-icon': () => 'test https icon',
        'https-description': () => 'test https description',
      },
    })

    cy.get('.usa-banner__guidance').should('contain', 'test tld icon')
    cy.get('.usa-media-block__body').should('contain', 'test tld description')
    cy.get('.usa-banner__guidance').should('contain', 'test https icon')
    cy.get('.usa-media-block__body').should('contain', 'test https description')
  })

  it('uses injected prop values', () => {
    cy.mount(UsaBannerContent, {
      global: {
        provide: {
          'vueUswds.svgSpritePath': '/test.svg',
          'vueUswds.prefixSeparator': '@',
          'vueUswds.gridNamespace': 'test-grid-namespace-',
        },
      },
    })

    cy.get('.test-grid-namespace-row').should('exist')
    cy.get('.test-grid-namespace-gap-lg').should('exist')
    cy.get(`.tablet\\@test-grid-namespace-col-6`).should('have.length', 2)
  })

  it('warns in console of deprecated slots', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaBannerContent, {
      slots: {
        tldIcon: () => 'deprecated test tld icon',
        tldDescription: () => 'deprecated test tld description',
        httpsIcon: () => 'deprecated test https icon',
        httpsDescription: () => 'deprecated test https description',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `The 'tldIcon' slot is deprecated, use 'tld-icon' instead.`,
    )
    cy.get('@consoleWarn').should(
      'be.calledWith',
      `The 'tldDescription' slot is deprecated, use 'tld-description' instead.`,
    )
    cy.get('@consoleWarn').should(
      'be.calledWith',
      `The 'httpsIcon' slot is deprecated, use 'https-icon' instead.`,
    )
    cy.get('@consoleWarn').should(
      'be.calledWith',
      `The 'httpsDescription' slot is deprecated, use 'https-description' instead.`,
    )

    cy.get('.usa-banner__guidance').should(
      'contain',
      'deprecated test tld icon',
    )
    cy.get('.usa-media-block__body').should(
      'contain',
      'deprecated test tld description',
    )
    cy.get('.usa-banner__guidance').should(
      'contain',
      'deprecated test https icon',
    )
    cy.get('.usa-media-block__body').should(
      'contain',
      'deprecated test https description',
    )
  })
})
