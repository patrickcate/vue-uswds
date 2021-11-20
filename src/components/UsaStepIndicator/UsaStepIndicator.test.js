import '@module/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import { mount } from '@cypress/vue'
import UsaStepIndicator from './UsaStepIndicator.vue'

const testSteps = ['First Step', 'Second Step', 'Third Step', 'Fourth Step']

describe('UsaStepIndicator', () => {
  it('renders the component', () => {
    mount(UsaStepIndicator, {
      props: {
        steps: testSteps,
      },
    })

    cy.viewport('macbook-15')

    cy.get('.usa-step-indicator')
      .should('exist')
      .should('have.attr', 'aria-label')
      .and('contain', 'progress')

    cy.get('ol.usa-step-indicator__segments')

    // Make sure the segment text is printed and is visible.
    cy.get(
      'li.usa-step-indicator__segment:nth-child(1) .usa-step-indicator__segment-label'
    )
      .should('contain', testSteps[0])
      .and('be.visible')
    cy.get(
      'li.usa-step-indicator__segment:nth-child(2) .usa-step-indicator__segment-label'
    )
      .should('contain', testSteps[1])
      .and('be.visible')
    cy.get(
      'li.usa-step-indicator__segment:nth-child(3) .usa-step-indicator__segment-label'
    )
      .should('contain', testSteps[2])
      .and('be.visible')
    cy.get(
      'li.usa-step-indicator__segment:nth-child(4) .usa-step-indicator__segment-label'
    )
      .should('contain', testSteps[3])
      .and('be.visible')

    // Labels are hidden on smaller screens.
    cy.viewport('iphone-5')

    cy.get(
      'li.usa-step-indicator__segment:nth-child(1) .usa-step-indicator__segment-label'
    ).should('not.be.visible')
    cy.get(
      'li.usa-step-indicator__segment:nth-child(2) .usa-step-indicator__segment-label'
    ).should('not.be.visible')
    cy.get(
      'li.usa-step-indicator__segment:nth-child(3) .usa-step-indicator__segment-label'
    ).should('not.be.visible')
    cy.get(
      'li.usa-step-indicator__segment:nth-child(4) .usa-step-indicator__segment-label'
    ).should('not.be.visible')
  })

  it('adds the correct CSS classes for each prop', () => {
    mount(UsaStepIndicator, {
      props: {
        steps: testSteps,
        counters: true,
        smallCounters: true,
        center: true,
        noLabels: true,
        customClasses: {
          list: ['test-list-class'],
          segment: ['test-segment-class'],
          header: ['test-header-class'],
        },
      },
    })

    cy.get('.usa-step-indicator')
      .should('exist')
      .and('have.class', 'usa-step-indicator--counters')
      .and('have.class', 'usa-step-indicator--counters-sm')
      .and('have.class', 'usa-step-indicator--center')
      .and('have.class', 'usa-step-indicator--no-labels')

    cy.get('.test-list-class').should('exist')
    cy.get('.test-segment-class').should('exist')
    cy.get('.test-header-class').should('exist')
  })

  it('renders custom heading tag', () => {
    mount(UsaStepIndicator, {
      props: {
        steps: testSteps,
        headingTag: 'h4',
      },
    })

    cy.get('h4.usa-step-indicator__heading').should('exist')
  })

  it('status CSS classes, attributes, and text, is applied to segments when steps change', () => {
    mount(UsaStepIndicator, {
      props: {
        steps: testSteps,
        currentStepNumber: 1,
      },
    })
      .as('wrapper')
      .should('exist')

    cy.get('li.usa-step-indicator__segment:nth-child(1)').as('step1')
    cy.get('li.usa-step-indicator__segment:nth-child(2)').as('step2')
    cy.get('li.usa-step-indicator__segment:nth-child(3)').as('step3')
    cy.get('li.usa-step-indicator__segment:nth-child(4)').as('step4')

    cy.get('@step1')
      .should('have.class', 'usa-step-indicator__segment--current')
      .and('not.have.class', 'usa-step-indicator__segment--complete')
      .and('have.attr', 'aria-current')
      .and('contain', 'true')

    cy.get('.usa-step-indicator__heading-text').should('contain', testSteps[0])

    cy.get('@step2')
      .should('not.have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step2').find('.usa-sr-only').should('contain', 'not completed')

    cy.get('@step3')
      .should('not.have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step3').find('.usa-sr-only').should('contain', 'not completed')

    cy.get('@step4')
      .should('not.have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step4').find('.usa-sr-only').should('contain', 'not completed')

    // Go to Step 2.
    cy.get('@wrapper').invoke('setProps', { currentStepNumber: 2 })

    cy.get('.usa-step-indicator__heading-text').should('contain', testSteps[1])

    cy.get('@step1')
      .should('have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step1').find('.usa-sr-only').should('contain', 'completed')

    cy.get('@step2')
      .should('have.class', 'usa-step-indicator__segment--current')
      .and('not.have.class', 'usa-step-indicator__segment--complete')
      .and('have.attr', 'aria-current')
      .and('contain', 'true')

    cy.get('@step3')
      .should('not.have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step3').find('.usa-sr-only').should('contain', 'not completed')

    cy.get('@step4')
      .should('not.have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step4').find('.usa-sr-only').should('contain', 'not completed')

    // Go to Step 3.
    cy.get('@wrapper').invoke('setProps', { currentStepNumber: 3 })

    cy.get('.usa-step-indicator__heading-text').should('contain', testSteps[2])

    cy.get('@step1')
      .should('have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step1').find('.usa-sr-only').should('contain', 'completed')

    cy.get('@step2')
      .should('have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step2').find('.usa-sr-only').should('contain', 'completed')

    cy.get('@step3')
      .should('have.class', 'usa-step-indicator__segment--current')
      .and('not.have.class', 'usa-step-indicator__segment--complete')
      .and('have.attr', 'aria-current')
      .and('contain', 'true')

    cy.get('@step4')
      .should('not.have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step4').find('.usa-sr-only').should('contain', 'not completed')

    // Go to Step 4.
    cy.get('@wrapper').invoke('setProps', { currentStepNumber: 4 })

    cy.get('.usa-step-indicator__heading-text').should('contain', testSteps[3])

    cy.get('@step1')
      .should('have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step1').find('.usa-sr-only').should('contain', 'completed')

    cy.get('@step2')
      .should('have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step2').find('.usa-sr-only').should('contain', 'completed')

    cy.get('@step3')
      .should('have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step3').find('.usa-sr-only').should('contain', 'completed')

    cy.get('@step4')
      .should('have.class', 'usa-step-indicator__segment--current')
      .and('not.have.class', 'usa-step-indicator__segment--complete')
      .and('have.attr', 'aria-current')
      .and('contain', 'true')

    // Complete Step 4.
    cy.get('@wrapper').invoke('setProps', { currentStepNumber: 5 })

    cy.get('.usa-step-indicator__heading-text').should('contain', testSteps[3])

    cy.get('@step1')
      .should('have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step1').find('.usa-sr-only').should('contain', 'completed')

    cy.get('@step2')
      .should('have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step2').find('.usa-sr-only').should('contain', 'completed')

    cy.get('@step3')
      .should('have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step3').find('.usa-sr-only').should('contain', 'completed')

    cy.get('@step4')
      .should('have.class', 'usa-step-indicator__segment--complete')
      .and('not.have.class', 'usa-step-indicator__segment--current')
      .and('not.have.attr', 'aria-current')
    cy.get('@step4').find('.usa-sr-only').should('contain', 'completed')
  })

  it('uses the `default` slot content', () => {
    mount(UsaStepIndicator, {
      props: {
        steps: testSteps,
      },
      slots: {
        default: () => h('li', null, 'Test default slot'),
      },
    })

    cy.get('.usa-step-indicator')
      .find('li')
      .should('contain', 'Test default slot')
  })

  it('uses the `header` slot content', () => {
    mount(UsaStepIndicator, {
      props: {
        steps: testSteps,
      },
      slots: {
        header: () => 'Test header slot',
      },
    })

    cy.get('.usa-step-indicator').should('contain', 'Test header slot')
  })

  it('warns in console about invalid step number being < 1', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaStepIndicator, {
      props: {
        steps: testSteps,
      },
    })
      .as('wrapper')
      .should('exist')

    cy.get('@wrapper').invoke('setProps', { currentStepNumber: 0 })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `[Vue warn]: Invalid prop: custom validator check failed for prop "currentStepNumber".`
    )
  })
})
