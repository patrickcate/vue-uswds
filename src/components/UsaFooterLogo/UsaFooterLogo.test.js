import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaFooterLogo from './UsaFooterLogo.vue'

describe('UsaFooterLogo', () => {
  it('renders the component', () => {
    mount(UsaFooterLogo, {})

    cy.get('div.usa-footer__logo').should('exist')

    cy.get('.usa-footer__logo > div:nth-of-type(1)')
      .as('logoCol')
      .should('have.class', 'mobile-lg:grid-col-auto')

    cy.get('@logoCol').children().should('have.length', 0)

    cy.get('.usa-footer__logo > div:nth-of-type(2)')
      .as('headingCol')
      .should('have.class', 'mobile-lg:grid-col-auto')

    cy.get('@headingCol').find('p.usa-footer__logo-heading').should('be.empty')
  })

  it('logo and heading text match prop values', () => {
    mount(UsaFooterLogo, {
      props: {
        src: 'https://designsystem.digital.gov/assets/img/logo-img.png',
        alt: 'Test footer logo',
        heading: 'Test footer heading',
        customClasses: {
          logoGridCol: ['test-icon-grid-col-class'],
          headingGridCol: ['test-heading-grid-col-class'],
        },
      },
    })

    cy.get('.usa-footer__logo > div:nth-of-type(1)')
      .as('logoCol')
      .should('have.class', 'test-icon-grid-col-class')

    cy.get('@logoCol')
      .find('img.usa-footer__logo-img')
      .as('logoImg')
      .should('have.attr', 'src')
      .and(
        'contain',
        'https://designsystem.digital.gov/assets/img/logo-img.png'
      )
    cy.get('@logoImg')
      .should('have.attr', 'alt')
      .and('contain', 'Test footer logo')

    cy.get('.usa-footer__logo > div:nth-of-type(2)')
      .as('headingCol')
      .should('have.class', 'test-heading-grid-col-class')

    cy.get('@headingCol')
      .find('p.usa-footer__logo-heading')
      .should('contain', 'Test footer heading')
  })

  it('renders custom logo and heading slot content', () => {
    mount(UsaFooterLogo, {
      slots: {
        logo: () => 'Test logo slot',
        heading: () => 'Test heading slot',
      },
    })

    cy.get('.usa-footer__logo > div:nth-of-type(1)').should(
      'contain',
      'Test logo slot'
    )

    cy.get('.usa-footer__logo > div:nth-of-type(2)').as('headingCol')

    cy.get('@headingCol').find('p').should('contain', 'Test heading slot')
  })
})
