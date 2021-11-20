import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaSiteAlert from './UsaSiteAlert.vue'

const defaultSlotContent = 'Test default slot content'

describe('UsaSiteAlert', () => {
  it('renders the component', () => {
    mount(UsaSiteAlert, {
      props: {
        heading: 'Test Heading Prop Text',
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-site-alert').should('exist')
    cy.get('.usa-alert__heading').should('contain', 'Test Heading Prop Text')
    cy.get('.usa-alert__text').should('contain', defaultSlotContent)
  })

  it('adds the correct variant classes', () => {
    const variants = ['info', 'emergency']

    mount(UsaSiteAlert, {
      props: {
        variant: 'info',
        heading: 'Short alert message',
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    variants.forEach(variant => {
      cy.get('.usa-site-alert')
        .should('exist')
        .vue()
        .then(wrapper => {
          wrapper.setProps({ variant: variant })
        })
        .get(`.usa-site-alert--${variant}`)
        .should('exist')
    })
  })

  it('does not render the heading element if there is no heading content', () => {
    mount(UsaSiteAlert, {
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-alert__heading').should('not.exist')
  })

  it('does not visually show the heading when the `slim` prop is true', () => {
    mount(UsaSiteAlert, {
      props: {
        heading: 'Test Heading',
        slim: true,
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-site-alert').should('have.class', 'usa-site-alert--slim')
    cy.get('.usa-alert__heading').should('has.class', 'usa-sr-only')
  })

  it('does not show the icon when the `no-icon` prop is true', () => {
    mount(UsaSiteAlert, {
      props: {
        heading: 'Test Heading',
        noIcon: true,
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-site-alert--no-icon').should('exist')
  })

  it('renders a custom role attribute', () => {
    mount(UsaSiteAlert, {
      props: {
        heading: 'Test Heading',
        role: 'custom-role',
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get(`[role='custom-role']`).should('exist')
  })

  it('renders custom heading tag', () => {
    mount(UsaSiteAlert, {
      props: {
        heading: 'Test Heading Prop',
        headingTag: 'h1',
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('h1.usa-alert__heading').should('exist')
  })

  it('uses the `heading` slot content', () => {
    mount(UsaSiteAlert, {
      props: {
        heading: 'Test Heading Prop',
      },
      slots: {
        default: () => defaultSlotContent,
        heading: () => 'Test Heading Slot',
      },
    })

    cy.get('.usa-alert__heading').should('contain', 'Test Heading Slot')
  })

  it('uses the `message` slot content', () => {
    mount(UsaSiteAlert, {
      props: {
        variant: 'info',
        heading: 'Test Heading Prop',
      },
      slots: {
        default: () => 'Test default slot content.',
        message: () => 'Test message slot content.',
      },
    })

    cy.get('.usa-site-alert').should('contain', 'Test message slot content.')
  })

  it('adds custom CSS classes', () => {
    mount(UsaSiteAlert, {
      props: {
        variant: 'info',
        heading: 'Test Heading',
        customClasses: {
          root: ['test-root-class'],
          body: ['test-body-class'],
          heading: ['test-heading-class'],
        },
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.test-root-class').should('exist')
    cy.get('.test-body-class').should('exist')
    cy.get('.test-heading-class').should('exist')
  })

  it('warns in console about invalid variant prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaSiteAlert, {
      props: {
        variant: 'notvariant',
        heading: 'Test Heading',
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notvariant' is not a valid site alert variant`
    )
  })
})
