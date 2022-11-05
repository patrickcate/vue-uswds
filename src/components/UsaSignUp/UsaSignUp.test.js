import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaSignUp from './UsaSignUp.vue'

describe('UsaSignUp', () => {
  it('renders the component', () => {
    mount(UsaSignUp, {
      slots: {
        default: () => h('strong', {}, 'Test default slot content'),
      },
    })

    cy.get('div.usa-sign-up').should('exist')
    cy.get('h2')
      .should('have.class', 'usa-sign-up__heading')
      .and('contain', 'Sign up')
    cy.get('.usa-sign-up > strong').should(
      'contain',
      'Test default slot content'
    )
  })

  it('heading contains slot text instead of prop text', () => {
    mount(UsaSignUp, {
      props: {
        heading: 'Custom test heading',
      },
      slots: {
        heading: () => 'Custom slot test heading',
      },
    })

    cy.get('.usa-sign-up__heading').should(
      'contain',
      'Custom slot test heading'
    )
  })

  it('heading matches `heading` prop value and uses correct heading tag', () => {
    mount(UsaSignUp, {
      props: {
        heading: 'Custom test heading',
        headingTag: 'h4',
      },
    })

    cy.get('h4').should('contain', 'Custom test heading')
  })

  it('custom CSS class are added to correct elements', () => {
    mount(UsaSignUp, {
      props: {
        customClasses: {
          heading: ['test-heading-class'],
        },
      },
    })

    cy.get('.usa-sign-up__heading').should('have.class', 'test-heading-class')
  })
})
