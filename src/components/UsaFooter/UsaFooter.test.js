import { mount } from '@cypress/vue'
import UsaFooter from './UsaFooter.vue'

describe('UsaFooter', () => {
  it('renders the component', () => {
    mount(UsaFooter, {
      slots: {
        default: () => 'Default slot content here',
      },
    })

    cy.get('.usa-footer')
      .should('have.class', 'usa-footer--medium')
      .and('contain', 'Default slot content here')

    cy.get('.usa-footer__return-to-top').should('have.class', 'grid-container')

    cy.get('.usa-footer__return-to-top > a')
      .should('have.attr', 'href')
      .and('contain', '#')
    cy.get('.usa-footer__return-to-top > a').should('contain', 'Return to top')
  })

  it('adds the correct variant classes', () => {
    const variants = ['big', 'medium', 'slim']

    mount(UsaFooter, {})

    variants.forEach(variant => {
      cy.get('.usa-footer')
        .should('exist')
        .vue()
        .then(wrapper => {
          wrapper.setProps({ variant: variant })
        })
        .get(`.usa-footer--${variant}`)
        .should('exist')
    })
  })

  it('renders jump link slot content', () => {
    mount(UsaFooter, {
      slots: {
        'jump-link': () => 'Test jump link slot',
      },
    })

    cy.get('.usa-footer__return-to-top').should(
      'contain',
      'Test jump link slot'
    )
  })

  it('uses custom return to top link text', () => {
    mount(UsaFooter, {
      props: {
        jumpLinkText: 'Custom return to top',
      },
    })

    cy.get('.usa-footer__return-to-top').should(
      'contain',
      'Custom return to top'
    )
  })

  it('adds custom CSS classes', () => {
    mount(UsaFooter, {
      props: {
        customClasses: {
          container: ['test-container-class'],
        },
      },
    })

    cy.get('.usa-footer__return-to-top').should(
      'have.class',
      'test-container-class'
    )
  })

  it('warns in console about invalid variant prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaFooter, {
      props: {
        variant: 'notvariant',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notvariant' is not a valid footer variant`
    )
  })
})
