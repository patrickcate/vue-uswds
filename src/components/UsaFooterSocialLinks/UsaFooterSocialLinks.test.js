import { mount } from '@cypress/vue'
import UsaFooterSocialLinks from './UsaFooterSocialLinks.vue'

describe('UsaFooterSocialLinks', () => {
  const testItems = [
    {
      id: 'fb',
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: '/assets/img/usa-icons/facebook.svg',
    },
    {
      name: 'Twitter',
      to: 'https://twitter.com',
      icon: '/assets/img/usa-icons/twitter.svg',
    },
    {
      name: 'YouTube',
      to: '/youtube',
      icon: '/assets/img/usa-icons/youtube.svg',
      routerComponentName: 'nuxt-link',
    },
  ]

  it('renders the component', () => {
    mount(UsaFooterSocialLinks, {})

    cy.get('div.usa-footer__social-links').as('socialLink').should('exist')
    cy.get('@socialLink').children().should('have.length', 0)
  })

  it('display social media icons', () => {
    mount(UsaFooterSocialLinks, {
      props: {
        items: testItems,
      },
      attrs: {
        class: 'grid-row grid-gap-1',
      },
    })

    cy.get('.usa-footer__social-links').as('socialLink').should('exist')
    cy.get('@socialLink')
      .find('> div')
      .should('have.length', 3)
      .and('have.class', 'grid-col-auto')

    // Item 1
    cy.get('@socialLink').find('> div:nth-of-type(1)').as('item1')

    cy.get('@item1')
      .find('> a')
      .as('link1')
      .should('have.class', 'usa-social-link')
      .and('have.attr', 'href')
      .and('contain', 'https://facebook.com')

    cy.get('@link1')
      .find('> img')
      .as('icon1')
      .should('have.class', 'usa-social-link__icon')
      .and('have.attr', 'src')
      .and('contain', '/assets/img/usa-icons/facebook.svg')

    cy.get('@icon1').should('have.attr', 'alt').and('contain', 'Facebook')

    // Item 2
    cy.get('@socialLink').find('> div:nth-of-type(2)').as('item2')

    cy.get('@item2')
      .find('> a')
      .as('link2')
      .should('have.class', 'usa-social-link')
      .and('have.attr', 'href')
      .and('contain', 'https://twitter.com')

    cy.get('@link2')
      .find('> img')
      .as('icon2')
      .should('have.class', 'usa-social-link__icon')
      .and('have.attr', 'src')
      .and('contain', '/assets/img/usa-icons/twitter.svg')

    cy.get('@icon2').should('have.attr', 'alt').and('contain', 'Twitter')

    // Item 3
    cy.get('@socialLink').find('> div:nth-of-type(3)').as('item3')

    cy.get('@item3')
      .find('> nuxt-link')
      .as('link3')
      .should('have.class', 'usa-social-link')
      .and('have.attr', 'to')
      .and('contain', '/youtube')

    cy.get('@link3')
      .find('> img')
      .as('icon3')
      .should('have.class', 'usa-social-link__icon')
      .and('have.attr', 'src')
      .and('contain', '/assets/img/usa-icons/youtube.svg')

    cy.get('@icon3').should('have.attr', 'alt').and('contain', 'YouTube')
  })

  it('uses named icon scoped slots', () => {
    mount(UsaFooterSocialLinks, {
      props: {
        items: testItems,
      },
      slots: {
        fb: ({ item }) => `${item.name}`,
        twitter: ({ item }) => `${item.name}`,
        youtube: ({ item }) => `${item.name}`,
      },
    })

    cy.get('.usa-footer__social-links').as('socialLink').should('exist')

    cy.get('@socialLink')
      .find('> div:nth-of-type(1) > *')
      .should('contain', 'Facebook')

    cy.get('@socialLink')
      .find('> div:nth-of-type(2) > *')
      .should('contain', 'Twitter')

    cy.get('@socialLink')
      .find('> div:nth-of-type(3) > *')
      .should('contain', 'YouTube')
  })

  it('adds custom CSS classes', () => {
    mount(UsaFooterSocialLinks, {
      props: {
        items: testItems,
        customClasses: {
          gridCol: ['test-grid-col-class'],
          link: ['test-link-class'],
          icon: ['test-icon-class'],
        },
      },
    })

    cy.get('.usa-footer__social-links').as('socialLink').should('exist')

    cy.get('@socialLink')
      .find('> div')
      .should('have.length', 3)
      .and('have.class', 'test-grid-col-class')

    cy.get('@socialLink')
      .find('> div > *')
      .should('have.length', 3)
      .and('have.class', 'test-link-class')

    cy.get('@socialLink')
      .find('> div img')
      .should('have.length', 3)
      .and('have.class', 'test-icon-class')
  })
})
