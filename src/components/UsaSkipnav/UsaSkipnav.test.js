import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaSkipnav from './UsaSkipnav.vue'

describe('UsaSkipnav', () => {
  it('renders the component', () => {
    mount(UsaSkipnav, {
      props: {
        anchor: '#main-content',
      },
    })

    cy.get('.usa-skipnav')
      .as('skiplink')
      .should('contain', 'Skip to main content')
      .and('have.class', 'usa-skipnav')
      .and('have.attr', 'href')
      .and('contain', '#main-content')

    // Have to test visibility by CSS properties.
    cy.get('@skiplink')
      .and('have.css', 'position', 'absolute')
      .and('have.css', 'left', '0px')
      .and('have.css', 'top', '-60.8px')

    // Should be visible after focus.
    cy.get('@skiplink')
      .focus()
      .realHover()
      .then(() => {
        cy.get('@skiplink')
          .should('have.css', 'top', '0px')
          .and('have.css', 'outline', 'rgb(36, 145, 255) solid 4px')
      })
      // After focus is removed, it should not be visible.
      .blur()
      .and('have.css', 'position', 'absolute')
      .and('have.css', 'left', '0px')
      .and('have.css', 'top', '-60.8px')
  })

  it('uses custom slot content', () => {
    mount(UsaSkipnav, {
      props: {
        anchor: '#main-content',
      },
      slots: {
        default: () => 'Test skip link',
      },
    })

    cy.get('.usa-skipnav').should('contain', 'Test skip link')
  })

  it('warns in console about invalid anchor prop value', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaSkipnav, {
      props: {
        anchor: 'badanchor',
      },
      slots: {
        default: () => 'Test skip link',
      },
    }).should('exist')

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `The anchor prop is required and must start with a "#" symbol`
    )
  })
})
