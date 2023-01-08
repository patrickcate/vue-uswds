import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import { mount } from '@cypress/vue'
import UsaHeroCallout from './UsaHeroCallout.vue'

describe('UsaHeroCallout', () => {
  const testHeadingAlt = 'Hero callout:'
  const testHeading = 'Bring attention to a project priority'
  const textContent =
    "Support the callout with some short explanatory text. You don't need more than a couple of sentences."

  it('renders the component', () => {
    mount(UsaHeroCallout, {
      props: {
        headingAlt: testHeadingAlt,
        heading: testHeading,
      },
      slots: {
        default: () => h('p', null, textContent),
      },
    })

    cy.get('.usa-hero__callout').should('exist')
    cy.get('h1.usa-hero__heading').should('contain', testHeading)
    cy.get('.usa-hero__heading--alt').should('contain', testHeadingAlt)
    cy.get('.usa-hero__callout p').should('contain', textContent)
  })

  it('`heading` and `headingAlt` slot content overrides prop values', () => {
    mount(UsaHeroCallout, {
      props: {
        headingAlt: testHeadingAlt,
        heading: testHeading,
      },
      slots: {
        'heading-alt': () => 'Custom heading alt slot content',
        heading: () => 'Custom heading slot content',
        default: () => h('p', null, textContent),
      },
    })

    cy.get('.usa-hero__heading').should(
      'contain',
      'Custom heading slot content'
    )

    cy.get('.usa-hero__heading--alt').should(
      'contain',
      'Custom heading alt slot content'
    )
  })

  it('`heading` and `headingAlt` slot content renders even if `heading` and `headingAlt` prop values not used', () => {
    mount(UsaHeroCallout, {
      slots: {
        'heading-alt': () => 'Custom heading alt slot content',
        heading: () => 'Custom heading slot content',
        default: () => h('p', null, textContent),
      },
    })

    cy.get('.usa-hero__heading').should(
      'contain',
      'Custom heading slot content'
    )

    cy.get('.usa-hero__heading--alt').should(
      'contain',
      'Custom heading alt slot content'
    )
  })

  it('`headingAlt` text renders if `heading` prop not used', () => {
    mount(UsaHeroCallout, {
      slots: {
        'heading-alt': () => 'Custom heading alt slot content',
        default: () => h('p', null, textContent),
      },
    })

    cy.get('.usa-hero__heading').should('exist')

    cy.get('.usa-hero__heading--alt').should(
      'contain',
      'Custom heading alt slot content'
    )
  })

  it('renders custom heading tag', () => {
    mount(UsaHeroCallout, {
      props: {
        headingAlt: testHeadingAlt,
        heading: testHeading,
        headingTag: 'h4',
      },
      slots: {
        default: () => h('p', null, textContent),
      },
    })

    cy.get('h4.usa-hero__heading')
  })

  it('adds custom CSS classes', () => {
    mount(UsaHeroCallout, {
      props: {
        headingAlt: testHeadingAlt,
        heading: testHeading,
        customClasses: {
          headingAlt: ['test-heading-alt-class'],
          heading: ['test-heading-class'],
        },
      },
      slots: {
        default: () => h('p', null, textContent),
      },
    })

    cy.get('.test-heading-alt-class').should('exist')
    cy.get('.test-heading-class').should('exist')
  })

  it('warns in console of deprecated slots', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaHeroCallout, {
      props: {
        headingAlt: testHeadingAlt,
        heading: testHeading,
      },
      slots: {
        headingAlt: () => 'deprecated heading alt slot content',
      },
    })

    cy.get('.usa-hero__heading--alt').should(
      'contain',
      'deprecated heading alt slot content'
    )

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `The 'headingAlt' slot is deprecated, use 'heading-alt' instead.`
    )
  })
})
