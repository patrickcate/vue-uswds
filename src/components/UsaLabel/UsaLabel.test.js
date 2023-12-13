import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaLabel from './UsaLabel.vue'

describe('UsaLabel', () => {
  it('renders the component', () => {
    cy.mount(UsaLabel, {
      props: {
        for: 'test-id',
      },
      slots: {
        default: () => 'Test label',
      },
    })

    cy.get('label.usa-label')
      .should('contain', 'Test label')
      .and('have.attr', 'for')
      .and('contain', 'test-id')
  })

  it('adds CSS class when error prop is true', () => {
    cy.mount(UsaLabel, {
      props: {
        for: 'test-id',
        error: true,
      },
      slots: {
        default: () => 'Test label',
      },
    })

    cy.get('label.usa-label').should('have.class', 'usa-label--error')
  })

  it('shows required label and title attribute', () => {
    cy.mount(UsaLabel, {
      props: {
        for: 'test-id',
        required: true,
      },
      slots: {
        default: () => 'Test label',
      },
    })

    cy.get('.usa-hint--required')
      .should('contain', '*')
      .and('have.attr', 'title')
      .and('contain', 'required')
  })

  it('render custom require slot content', () => {
    cy.mount(UsaLabel, {
      props: {
        for: 'test-id',
        required: true,
      },
      slots: {
        default: () => 'Test label',
        required: () => '(test required)',
      },
    })

    cy.get('.usa-label').should('contain', '(test required)')
  })
})
