import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaBannerContent from './UsaBannerContent.vue'

describe('UsaBannerContent', () => {
  it('renders the component', () => {
    mount(UsaBannerContent, {})

    cy.get('[data-v-app] > div').should('exist')
    cy.get('.usa-banner__guidance').should('have.length', 2)
    cy.get('.usa-media-block__body').should('have.length', 2)

    cy.get('img.usa-banner__icon[src$="icon-dot-gov.svg"]')
      .as('tldIcon')
      .should('have.class', 'usa-media-block__img')
      .and('have.attr', 'role')
      .and('contain', 'img')

    cy.get('@tldIcon').should('have.attr', 'alt').and('be.empty')
    cy.get('@tldIcon').should('have.attr', 'aria-hidden').and('contain', 'true')

    cy.get('img.usa-banner__icon[src$="icon-https.svg"]')
      .as('httpsIcon')
      .should('have.class', 'usa-media-block__img')
      .and('have.attr', 'role')
      .and('contain', 'img')

    cy.get('@httpsIcon').should('have.attr', 'alt').and('be.empty')
    cy.get('@httpsIcon')
      .should('have.attr', 'aria-hidden')
      .and('contain', 'true')

    cy.get('svg.usa-banner__lock-image')
      .should('have.attr', 'focusable')
      .and('contain', 'false')
  })

  it('uses custom slot content', () => {
    mount(UsaBannerContent, {
      slots: {
        tldIcon: () => 'test tld icon',
        tldDescription: () => 'test tld description',
        httpsIcon: () => 'test https icon',
        httpsDescription: () => 'test https description',
      },
    })

    cy.get('.usa-banner__guidance').should('contain', 'test tld icon')
    cy.get('.usa-media-block__body').should('contain', 'test tld description')
    cy.get('.usa-banner__guidance').should('contain', 'test https icon')
    cy.get('.usa-media-block__body').should('contain', 'test https description')
  })

  it('uses injected prop values', () => {
    mount(UsaBannerContent, {
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
})
