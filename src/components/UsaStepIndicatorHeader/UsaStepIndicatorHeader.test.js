import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaStepIndicatorHeader from './UsaStepIndicatorHeader.vue'

const testSteps = ['First Step', 'Second Step', 'Third Step', 'Fourth Step']
const defaultProps = {
  currentStepNumber: 1,
  currentStepLabel: testSteps[0],
  totalSteps: testSteps.length,
}

describe('UsaStepIndicatorHeader', () => {
  it('renders the component', () => {
    cy.mount(UsaStepIndicatorHeader, {
      props: {
        ...defaultProps,
      },
    })

    cy.get('.usa-step-indicator__header').should('exist')
    cy.get('h2.usa-step-indicator__heading').should('exist')
    cy.get('.usa-step-indicator__current-step').should('contain', 1)
    cy.get('.usa-step-indicator__total-steps').should(
      'contain',
      testSteps.length,
    )
    cy.get('.usa-step-indicator__heading-text').should('contain', testSteps[0])
  })

  it('renders custom heading tag', () => {
    cy.mount(UsaStepIndicatorHeader, {
      props: {
        ...defaultProps,
        headingTag: 'h4',
      },
    })

    cy.get('h4.usa-step-indicator__heading').should('exist')
  })

  it('adds custom CSS classes', () => {
    cy.mount(UsaStepIndicatorHeader, {
      props: {
        ...defaultProps,
        customClasses: {
          heading: ['test-heading-class'],
          counter: ['test-counter-class'],
          label: ['test-label-class'],
        },
      },
    })

    cy.get('.test-heading-class').should('exist')
    cy.get('.test-counter-class').should('exist')
    cy.get('.test-label-class').should('exist')
  })

  it('correct step number and header are displayed when step changes', () => {
    cy.mount(UsaStepIndicatorHeader, {
      props: {
        ...defaultProps,
      },
    })
      .its('wrapper')
      .as('wrapper')

    let currentStep = 1

    testSteps.forEach((step, index) => {
      cy.get('.usa-step-indicator__current-step').should('contain', currentStep)
      cy.get('.usa-step-indicator__total-steps').should(
        'contain',
        testSteps.length,
      )
      cy.get('.usa-step-indicator__heading-text').should('contain', step)

      currentStep++

      if (currentStep <= testSteps.length) {
        cy.get('@wrapper').invoke('setProps', {
          currentStepNumber: currentStep,
          currentStepLabel: testSteps[index + 1],
        })
      }
    })
  })

  it('the displayed current step is always > 0 and < total steps', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaStepIndicatorHeader, {
      props: {
        ...defaultProps,
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-step-indicator__current-step').should('contain', 1)
    cy.get('.usa-step-indicator__heading-text').should('contain', testSteps[0])

    // Step number should still display 1.
    cy.get('@wrapper').invoke('setProps', {
      currentStepNumber: 0,
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Invalid prop: custom validator check failed for prop "currentStepNumber".`,
    )

    cy.get('.usa-step-indicator__current-step').should('contain', 1)

    // Step number should still display 4.
    cy.get('@wrapper').invoke('setProps', {
      currentStepNumber: 5,
    })
    cy.get('.usa-step-indicator__current-step').should('contain', 4)
  })
})
