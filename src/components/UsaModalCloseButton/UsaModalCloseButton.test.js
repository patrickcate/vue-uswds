import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaModalCloseButton from './UsaModalCloseButton.vue'

describe('UsaModalCloseButton', () => {
  it('renders the component', () => {
    mount(UsaModalCloseButton, {
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
      .and('have.attr', 'aria-label')
      .and('contain', 'Close Modal')

    cy.get('svg.usa-icon')
      .as('svgIcon')
      .should('have.attr', 'aria-hidden')
      .and('contain', 'true')

    cy.get('@svgIcon').should('have.attr', 'focusable').and('contain', 'false')

    cy.get('@svgIcon').should('have.attr', 'role').and('contain', 'img')

    cy.get('@svgIcon')
      .find('use')
      .should('have.attr', 'xlink:href')
      .and('contain', '/test.svg#close')
  })

  it('emit `closeModal` event when clicked', () => {
    mount(UsaModalCloseButton, {
      props: {
        ariaLabel: 'Close Modal',
      },
    }).as('wrapper')

    // We need to force the click event since the button is displayed off-screen.
    cy.get('.usa-modal__close').click({ force: true })

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('closeModal')
        expect(vm.emitted('closeModal')).to.have.length(1)
      })
  })

  it('shows scoped slot content', () => {
    mount(UsaModalCloseButton, {
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

    mount(UsaModalCloseButton, {})

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Missing required prop: "ariaLabel"`
    )
  })
})
