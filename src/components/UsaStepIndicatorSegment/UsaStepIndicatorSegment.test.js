import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaStepIndicatorSegment from './UsaStepIndicatorSegment.vue'

const testSteps = ['First Step', 'Second Step', 'Third Step', 'Fourth Step']

describe('UsaStepIndicatorSegment', () => {
  it('renders the component', () => {
    mount(UsaStepIndicatorSegment, {
      props: {
        label: testSteps[0],
      },
    }).as('wrapper')

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

    mount(UsaStepIndicatorSegment, {
      props: {
        label: testSteps[0],
      },
    })
      .as('wrapper')
      .should('exist')

    cy.get('@wrapper').invoke('setProps', { status: 'notastatus' })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Invalid prop: custom validator check failed for prop "status".`
    )
  })
})
