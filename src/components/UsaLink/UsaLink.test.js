import '@module/uswds/dist/css/uswds.min.css'
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@cypress/vue'
import UsaLink from './UsaLink.vue'

describe('UsaLink', () => {
  let router

  beforeEach(() => {
    const TestPage = { template: '<div>Test Page</div>' }

    const routes = [{ path: '/test-page', component: TestPage }]

    router = createRouter({
      history: createWebHistory(),
      routes,
    })
  })

  it('renders the component with the correct CSS classes', () => {
    mount(UsaLink, {
      props: {
        to: '/test-page',
        alt: true,
        external: true,
      },
      attrs: {
        class: 'custom-class',
      },
      slots: {
        default: () => 'test link',
      },
      global: {
        mocks: {
          $nuxt: {},
        },
        plugins: [router],
      },
    })

    cy.get('.usa-link')
      .should('contain', 'test link')
      .and('have.class', 'usa-link--alt')
      .and('have.class', 'usa-link--external')
      .and('have.class', 'custom-class')

    cy.get('.usa-link').should('not.have.attr', 'alt')
    cy.get('.usa-link').should('not.have.attr', 'external')
  })

  it('renders as a static `a` tag', () => {
    mount(UsaLink, {
      props: {
        href: '/test-page',
      },
      slots: {
        default: () => 'test link',
      },
    })

    cy.get('.usa-link')
      .should('contain', 'test link')
      .should('have.attr', 'href')
      .and('contain', '/test-page')
  })
})
