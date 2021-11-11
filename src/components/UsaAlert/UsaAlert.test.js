import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaAlert from './UsaAlert.vue'

const defaultSlotContent = 'Test default slot content'

describe('UsaAlert', () => {
  it('renders the component', () => {
    mount(UsaAlert, {
      props: {
        heading: 'Test Heading Prop Text',
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-alert').should('exist')
    cy.get('.usa-alert__heading').should('contain', 'Test Heading Prop Text')
    cy.get('.usa-alert__text').should('contain', defaultSlotContent)
  })

  it('adds the correct variant classes', () => {
    const variants = [
      'info',
      'warning',
      'error',
      'success',
      'emergency',
      'validation',
    ]

    mount(UsaAlert, {
      props: {
        variant: 'info',
        heading: 'Informative status',
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    variants.forEach(variant => {
      cy.get('.usa-alert')
        .should('exist')
        .vue()
        .then(wrapper => {
          wrapper.setProps({ variant: variant })
        })
        .get(`.usa-alert--${variant}`)
    })
  })

  it('does not render the heading element if there is no heading content', () => {
    mount(UsaAlert, {
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-alert__heading').should('not.exist')
  })

  it('does not visually show the heading when the `slim` prop is true', () => {
    mount(UsaAlert, {
      props: {
        variant: 'info',
        heading: 'Test Heading',
        slim: true,
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-alert').should('have.class', 'usa-alert--slim')
    cy.get('.usa-alert__heading').should('has.class', 'usa-sr-only')
  })

  it('does not show the icon when the `no-icon` prop is true', () => {
    mount(UsaAlert, {
      props: {
        variant: 'info',
        heading: 'Test Heading',
        noIcon: true,
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-alert--no-icon').should('exist')
  })

  it('adds a custom `role` prop value', () => {
    mount(UsaAlert, {
      props: {
        variant: 'info',
        heading: 'Test Heading',
        role: 'custom-role',
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get(`[role='custom-role']`).should('exist')
  })

  it('adds a default role of `alert` for error messages', () => {
    mount(UsaAlert, {
      props: {
        variant: 'error',
        heading: 'Test Heading',
        role: 'custom-role',
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get(`[role='custom-role']`)
      .should('exist')
      .vue()
      .then(wrapper => {
        wrapper.setProps({ role: '' })
      })
      .get(`[role='alert']`)
      .should('exist')
  })

  it('renders custom heading tag', () => {
    mount(UsaAlert, {
      props: {
        variant: 'info',
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
    mount(UsaAlert, {
      props: {
        variant: 'info',
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
    mount(UsaAlert, {
      props: {
        variant: 'info',
        heading: 'Test Heading Prop',
      },
      slots: {
        default: () => 'Test default slot content.',
        message: () => 'Test message slot content.',
      },
    })

    cy.get('.usa-alert').should('contain', 'Test message slot content.')
  })

  it('adds custom CSS classes', () => {
    mount(UsaAlert, {
      props: {
        variant: 'info',
        heading: 'Test Heading',
        customClasses: {
          body: ['test-body-class'],
          heading: ['test-heading-class'],
        },
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.test-body-class').should('exist')
    cy.get('.test-heading-class').should('exist')
  })

  it('warns in console about invalid variant prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaAlert, {
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
      `'notvariant' is not a valid alert variant`
    )
  })
})
