import { mount } from '@cypress/vue'
import UsaIdentifierLogo from './UsaIdentifierLogo.vue'

describe('UsaIdentifierLogo', () => {
  it('renders the component', () => {
    mount(UsaIdentifierLogo, {
      slots: {
        default: () => 'Test default slot',
      },
    })

    cy.get('a.usa-identifier__logo').should('contain', 'Test default slot')
    cy.get('.usa-identifier__logo-img').should('not.exist')
  })

  it('displays logo image', () => {
    mount(UsaIdentifierLogo, {
      props: {
        href: '/test-page',
        src: '/assets/img/circle-gray-20.svg',
        alt: 'Test alt text',
        customClasses: {
          image: ['test-image-class'],
        },
      },
    })

    cy.get('a.usa-identifier__logo')
      .should('have.attr', 'href')
      .and('contain', '/test-page')

    cy.get('.usa-identifier__logo-img')
      .should('have.class', 'test-image-class')
      .and('have.attr', 'src')
      .and('contain', '/assets/img/circle-gray-20.svg')

    cy.get('.usa-identifier__logo-img')
      .should('have.attr', 'alt')
      .and('contain', 'Test alt text')

    cy.get('.usa-identifier__logo-img')
      .should('have.attr', 'role')
      .and('contain', 'img')
  })
})
