import '@module/uswds/dist/css/uswds.min.css'
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@cypress/vue'
import BaseLink from './BaseLink.vue'

describe('BaseLink', () => {
  let router

  beforeEach(() => {
    const TestPage = { template: '<div>Test Page</div>' }

    const routes = [{ path: '/test-page', component: TestPage }]

    router = createRouter({
      history: createWebHistory(),
      routes,
    })
  })

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
          $nuxt: false,
        },
        plugins: [router],
      },
    })

    cy.get('a').should('contain', 'Test Link')
    cy.get('a').should('have.attr', 'href').and('contain', '/test-page')
  })

  it('renders a regular `a` tag if the `href` prop is used', () => {
    mount(BaseLink, {
      props: {
        href: '/test-page',
      },
      slots: {
        default: () => 'Test Regular Link',
      },
      global: {
        mocks: {
          $nuxt: false,
        },
        plugins: [router],
      },
    })

    cy.get('a').should('contain', 'Test Regular Link')
    cy.get('a').should('have.attr', 'href').and('contain', '/test-page')
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
          $nuxt: {},
        },
        plugins: [router],
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
          $nuxt: {},
        },
        plugins: [router],
      },
    })

    cy.get('g-link').should('contain', 'Test Custom Component Link')
    cy.get('g-link').should('have.attr', 'to').and('contain', '/test-page')
  })
})
