import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaButton from './UsaButton.vue'

describe('UsaButton', () => {
  it('renders the component', () => {
    cy.mount(UsaButton, {
      slots: {
        default: () => 'Button',
      },
    })

    cy.get('.usa-button').should('have.attr', 'type').and('contain', 'button')
  })

  it('render correct button type', () => {
    cy.mount(UsaButton, {
      props: {
        type: 'submit',
      },
      slots: {
        default: () => 'Button',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('button').should('have.attr', 'type').and('contain', 'submit')

    cy.get('@wrapper').invoke('setProps', { type: 'reset' })

    cy.get('button').should('have.attr', 'type').and('contain', 'reset')
  })

  it('`disabled` attr matches `disabled` prop', () => {
    cy.mount(UsaButton, {
      props: {
        disabled: true,
      },
      slots: {
        default: () => 'Button',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('button').should('have.attr', 'disabled')

    cy.get('@wrapper').invoke('setProps', { disabled: false })

    cy.get('button').should('not.have.attr', 'disabled')
  })

  it('adds the correct variant class', () => {
    const variants = [
      'secondary',
      'accent-cool',
      'accent-warm',
      'base',
      'outline',
      'inverse',
      'unstyled',
    ]

    cy.mount(UsaButton, {
      slots: {
        default: () => 'Button',
      },
    })

    variants.forEach(variant => {
      cy.get('.usa-button')
        .should('exist')
        .vue()
        .then(wrapper => {
          wrapper.setProps({ variant: variant })
        })
        .get(`.usa-button--${variant}`)
    })
  })

  it('the `inverse` variant gets both the `inverse` and `outline` classes', () => {
    cy.mount(UsaButton, {
      props: {
        variant: 'inverse',
      },
      slots: {
        default: () => 'Button',
      },
    })

    cy.get('button')
      .should('have.class', 'usa-button--inverse')
      .and('have.class', 'usa-button--outline')
  })

  it('adds the correct size class', () => {
    cy.mount(UsaButton, {
      slots: {
        default: () => 'Button',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('button').should('not.have.class', 'usa-button--big')

    cy.get('@wrapper').invoke('setProps', { size: 'big' })

    cy.get('button').should('have.class', 'usa-button--big')
  })

  it('uses the `before` and `after` slot content', () => {
    cy.mount(UsaButton, {
      slots: {
        before: () => 'Before Slot',
        default: () => 'Button',
        after: () => 'After Slot',
      },
    })

    cy.get('button')
      .should('contain', 'Before Slot')
      .and('contain', 'After Slot')
  })
})
