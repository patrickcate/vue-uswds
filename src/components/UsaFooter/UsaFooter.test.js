import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import UsaFooter from './UsaFooter.vue'

describe('UsaFooter', () => {
  it('renders the component', () => {
    cy.mount(UsaFooter, {
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

    cy.mount(UsaFooter, {})

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
    cy.mount(UsaFooter, {
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
    cy.mount(UsaFooter, {
      props: {
        jumpLinkText: 'Custom return to top',
      },
    })

    cy.get('.usa-footer__return-to-top').should(
      'contain',
      'Custom return to top'
    )
  })

  it('provide `footerVariant` prop value to child components', () => {
    const childComponent = {
      inject: ['footerVariant'],
      template: `<span>Footer Variant: {{ footerVariant }}</span>`,
    }

    cy.mount(UsaFooter, {
      props: {
        variant: 'slim',
      },
      slots: {
        default: () => h(childComponent),
      },
    })

    cy.get('span').should('contain', 'Footer Variant: slim')
  })

  it('adds custom CSS classes', () => {
    cy.mount(UsaFooter, {
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

    cy.mount(UsaFooter, {
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
