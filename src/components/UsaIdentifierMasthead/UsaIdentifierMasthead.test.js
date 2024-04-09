import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaIdentifierMasthead from './UsaIdentifierMasthead.vue'

describe('UsaIdentifierMasthead', () => {
  it('renders the component', () => {
    cy.mount(UsaIdentifierMasthead, {})

    cy.get('section.usa-identifier__section--masthead')
      .should('have.class', 'usa-identifier__section')
      .and('have.attr', 'aria-label')
      .and('contain', 'Agency identifier')

    cy.get(
      '.usa-identifier__section--masthead > .usa-identifier__container',
    ).should('exist')

    cy.get('.usa-identifier__identity').should('not.exist')
    cy.get('.usa-identifier__identity-disclaimer').should('not.exist')
  })

  it('shows default slot content', () => {
    cy.mount(UsaIdentifierMasthead, {
      slots: {
        default: () => 'Test default slot',
      },
    })

    cy.get('.usa-identifier__section--masthead').should('exist')

    cy.get(
      '.usa-identifier__section--masthead > .usa-identifier__container',
    ).and('contain', 'Test default slot')

    cy.get('.usa-identifier__logos').should('not.exist')
    cy.get('.usa-identifier__identity').should('not.exist')
    cy.get('.usa-identifier__identity-domain').should('not.exist')
    cy.get('.usa-identifier__identity-disclaimer').should('not.exist')
  })

  it('shows `domain` slot content', () => {
    cy.mount(UsaIdentifierMasthead, {
      slots: {
        domain: () => 'www.test.com',
      },
    })

    cy.get('.usa-identifier__identity')
      .should('have.attr', 'aria-label')
      .and('contain', 'Agency description')

    cy.get('p.usa-identifier__identity-domain').should(
      'contain',
      'www.test.com',
    )

    cy.get('p.usa-identifier__identity-disclaimer').should('not.exist')
  })

  it('shows `disclaimer` slot content', () => {
    cy.mount(UsaIdentifierMasthead, {
      slots: {
        disclaimer: () => 'Test disclaimer',
      },
    })

    cy.get('p.usa-identifier__identity-disclaimer').should(
      'contain',
      'Test disclaimer',
    )

    cy.get('.usa-identifier__identity-domain').should('not.exist')
  })

  it('shows `logos` slot content', () => {
    cy.mount(UsaIdentifierMasthead, {
      slots: {
        logos: () => 'Test logo',
      },
    })

    cy.get('.usa-identifier__logos').should('contain', 'Test logo')
  })

  it('use custom aria labels', () => {
    cy.mount(UsaIdentifierMasthead, {
      props: {
        ariaLabel: 'Test aria label',
        descriptionAriaLabel: 'Test description aria label',
      },
      slots: {
        logos: () => 'Test logo',
        disclaimer: () => 'Test disclaimer',
        domain: () => 'www.test.com',
      },
    })

    cy.get('section.usa-identifier__section--masthead')
      .should('have.attr', 'aria-label')
      .and('contain', 'Test aria label')

    cy.get('.usa-identifier__logos').should('contain', 'Test logo')

    cy.get('.usa-identifier__identity')
      .should('have.attr', 'aria-label')
      .and('contain', 'Test description aria label')

    cy.get('p.usa-identifier__identity-domain').should(
      'contain',
      'www.test.com',
    )

    cy.get('p.usa-identifier__identity-disclaimer').should(
      'contain',
      'Test disclaimer',
    )
  })
})
