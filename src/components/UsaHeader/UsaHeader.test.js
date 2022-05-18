import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaHeader from './UsaHeader.vue'

describe('UsaHeader', () => {
  it('renders the component', () => {
    mount(UsaHeader, {
      slots: {
        default: () => 'Basic header slot content',
      },
    })

    cy.get('.usa-header').should('have.class', 'usa-header--basic')
    cy.get('.usa-nav-container').should('contain', 'Basic header slot content')
  })

  it('renders `extended` variant', () => {
    mount(UsaHeader, {
      props: {
        variant: 'extended',
      },
      slots: {
        default: () => 'Extended header slot content',
      },
    })

    cy.get('.usa-header')
      .should('have.class', 'usa-header--extended')
      .and('contain', 'Extended header slot content')
    cy.get('.usa-nav-container').should('not.exist')
  })

  it('add megamenu class', () => {
    mount(UsaHeader, {
      props: {
        megamenu: true,
      },
    })

    cy.get('.usa-header--megamenu').should('exist')
  })

  it('provide reactive `isExtendedHeader` prop value to child components', () => {
    const childComponent = {
      inject: ['isExtendedHeader'],
      template: `<span>Extended Variant: {{ isExtendedHeader }}</span>`,
    }

    mount(UsaHeader, {
      props: {
        variant: 'extended',
      },
      slots: {
        default: () => h(childComponent),
      },
    }).as('wrapper')

    cy.get('span').should('contain', 'Extended Variant: true')

    cy.get('@wrapper').invoke('setProps', { variant: 'basic' })

    cy.get('span').should('contain', 'Extended Variant: false')
  })

  it('provide reactive `isMegamenu` prop value to child components', () => {
    const childComponent = {
      inject: ['isMegamenu'],
      template: `<span>Megamenu: {{ isMegamenu }}</span>`,
    }

    mount(UsaHeader, {
      props: {
        megamenu: true,
      },
      slots: {
        default: () => h(childComponent),
      },
    }).as('wrapper')

    cy.get('span').should('contain', 'Megamenu: true')

    cy.get('@wrapper').invoke('setProps', { megamenu: false })

    cy.get('span').should('contain', 'Megamenu: false')
  })

  it('adds custom CSS classes', () => {
    mount(UsaHeader, {
      props: {
        customClasses: {
          navContainer: ['test-nav-container-class'],
        },
      },
    })

    cy.get('.usa-nav-container').should(
      'have.class',
      'test-nav-container-class'
    )
  })

  it('warns in console about invalid variant prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaHeader, {
      props: {
        variant: 'notvariant',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notvariant' is not a valid header variant`
    )
  })
})
