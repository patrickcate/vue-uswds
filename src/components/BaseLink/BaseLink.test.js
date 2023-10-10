import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import BaseLink from './BaseLink.vue'

describe('BaseLink', () => {
  it('renders the component', () => {
    mount(BaseLink, {
      props: {
        to: '/test-page',
      },
      slots: {
        default: () => 'Test Link',
      },
      global: {
        mocks: {
          $router: true,
          $nuxt: false,
        },
      },
    })

    cy.get('router-link').should('contain', 'Test Link')
    cy.get('router-link').should('have.attr', 'to').and('contain', '/test-page')
  })

  it('renders a regular `a` tag if the `href` prop is used', () => {
    mount(BaseLink, {
      props: {
        href: '/test-page',
      },
      slots: {
        default: () => 'Test Regular Link',
      },
    })

    cy.get('a').should('contain', 'Test Regular Link')
    cy.get('a').should('have.attr', 'href').and('contain', '/test-page')
  })

  it('renders a regular `a` tag if the `to` prop is an external URL', () => {
    mount(BaseLink, {
      props: {
        to: 'https://google.com',
      },
      slots: {
        default: () => 'Test Regular Link',
      },
    })

    cy.get('a').should('contain', 'Test Regular Link')
    cy.get('a').should('have.attr', 'href').and('contain', 'https://google.com')
  })

  it('renders as a `nuxt-link` if $nuxt is detected', () => {
    mount(BaseLink, {
      props: {
        to: '/test-page',
      },
      slots: {
        default: () => 'Test Nuxt Link',
      },
      global: {
        mocks: {
          $nuxt: true,
        },
      },
    })

    cy.get('nuxt-link').should('contain', 'Test Nuxt Link')
    cy.get('nuxt-link').should('have.attr', 'to').and('contain', '/test-page')
  })

  it('`routerComponentName` prop overrides what component is rendered', () => {
    mount(BaseLink, {
      props: {
        to: '/test-page',
        routerComponentName: 'g-link',
      },
      slots: {
        default: () => 'Test Custom Component Link',
      },
      global: {
        mocks: {
          $nuxt: true,
        },
      },
    })

    cy.get('g-link').should('contain', 'Test Custom Component Link')
    cy.get('g-link').should('have.attr', 'to').and('contain', '/test-page')
  })

  it('uses globally injected router component name', () => {
    mount(BaseLink, {
      props: {
        to: '/test-page',
      },
      slots: {
        default: () => 'Test Global Component Link',
      },
      global: {
        provide: {
          'vueUswds.routerComponentName': 'test-global-router-component',
        },
        mocks: {
          $nuxt: true,
        },
      },
    })

    cy.get('test-global-router-component').should(
      'contain',
      'Test Global Component Link'
    )
    cy.get('test-global-router-component')
      .should('have.attr', 'to')
      .and('contain', '/test-page')
  })

  it('spacebar triggers click if `a` has `usa-button` class', () => {
    mount(BaseLink, {
      props: {
        href: '#',
      },
      attrs: {
        class: 'usa-button',
      },
      slots: {
        default: () => 'Test spacebar click',
      },
    }).as('wrapper')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        cy.spy(vm.vm, 'handleSpaceKeydown').as('handleSpaceKeydownStub')
        const emitted = vm.emitted()
        expect(emitted).not.to.have.property('keydown')
      })

    cy.get('a').focus()
    cy.get('a').should('have.focus').type(' ')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const emitted = vm.emitted()
        expect(emitted).to.have.property('keydown')
        expect(emitted.keydown[0][0].code).to.eq('Space')
      })

    cy.get('@handleSpaceKeydownStub').should('have.been.called')
  })
})
