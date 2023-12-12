import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaStepIndicatorSegment from './UsaStepIndicatorSegment.vue'

const testSteps = ['First Step', 'Second Step', 'Third Step', 'Fourth Step']

describe('UsaStepIndicatorSegment', () => {
  it('renders the component', () => {
    cy.mount(UsaStepIndicatorSegment, {
      props: {
        label: testSteps[0],
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-step-indicator__segment').should('contain', testSteps[0])

    cy.get('@wrapper').invoke('setProps', { status: 'current' })
    cy.get('.usa-step-indicator__segment').should(
      'have.class',
      'usa-step-indicator__segment--current'
    )

    cy.get('@wrapper').invoke('setProps', { status: 'completed' })
    cy.get('.usa-step-indicator__segment').should(
      'have.class',
      'usa-step-indicator__segment--complete'
    )
  })

  it('warns in console about invalid step status', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaStepIndicatorSegment, {
      props: {
        label: testSteps[0],
      },
    })
      .its('wrapper')
      .as('wrapper')
      .should('exist')

    cy.get('@wrapper').invoke('setProps', { status: 'notastatus' })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Invalid prop: custom validator check failed for prop "status".`
    )
  })
})
