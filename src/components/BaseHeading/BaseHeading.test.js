import '@module/@uswds/uswds/dist/css/uswds.min.css'
import BaseHeading from './BaseHeading.vue'

describe('BaseHeading', () => {
  it('renders the component', () => {
    cy.mount(BaseHeading, {
      slots: {
        default: () => 'Test',
      },
    })
    cy.get('h2').should('contain', 'Test')
  })

  it('renders as a custom heading tag', () => {
    cy.mount(BaseHeading, {
      slots: {
        default: () => 'Test',
      },
      props: {
        tag: 'h1',
      },
    })

    const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

    // Loop through all valid heading tags.
    for (let index = 0; index < 6; index++) {
      cy.get(headingTags[index])
        .should('exist')
        .vue()
        .then(wrapper => {
          wrapper.setProps({ tag: headingTags[index + 1] })
        })
    }
  })

  it('warns in console about invalid heading tag', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(BaseHeading, {
      slots: {
        default: () => 'Test',
      },
      props: {
        tag: 'notheading',
      },
    })
    cy.get('notheading').should('contain', 'Test')

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notheading' is not a valid HTML heading element`
    )
  })
})
