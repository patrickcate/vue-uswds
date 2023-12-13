import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaModalCloseButton from './UsaModalCloseButton.vue'

describe('UsaModalCloseButton', () => {
  it('renders the component', () => {
    cy.mount(UsaModalCloseButton, {
      props: {
        ariaLabel: 'Close Modal',
      },
      global: {
        provide: {
          'vueUswds.svgSpritePath': '/test.svg',
        },
      },
    })

    cy.get('button.usa-modal__close')
      .should('have.class', 'usa-button')
      .and('have.attr', 'type', 'button')
      .and('have.attr', 'aria-label', 'Close Modal')

    cy.get('svg.usa-icon')
      .as('svgIcon')
      .should('have.attr', 'aria-hidden', 'true')
      .and('have.attr', 'focusable', 'false')
      .and('have.attr', 'role', 'img')

    cy.get('@svgIcon')
      .find('use')
      .should('have.attr', 'xlink:href', '/test.svg#close')
  })

  it('shows scoped slot content', () => {
    cy.mount(UsaModalCloseButton, {
      props: {
        ariaLabel: 'Close Modal',
      },
      slots: {
        default: props => `${props.svgSpritePath}`,
      },
      global: {
        provide: {
          'vueUswds.svgSpritePath': '/test.svg',
        },
      },
    })

    cy.get('.usa-modal__close').should('contain', '/test.svg')
  })

  it('warns in console about required `aria-label` prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaModalCloseButton, {})

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Missing required prop: "ariaLabel"`
    )
  })
})
