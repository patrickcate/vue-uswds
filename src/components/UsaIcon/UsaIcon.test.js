import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaIcon from './UsaIcon.vue'

describe('UsaIcon', () => {
  it('renders the component', () => {
    mount(UsaIcon, {
      props: {
        name: 'flag',
      },
    })

    cy.get('svg.usa-icon')
      .should('have.attr', 'aria-hidden', 'true')
      .and('have.attr', 'role', 'img')
      .and('have.attr', 'focusable', 'false')

    cy.get('svg > use').should(
      'have.attr',
      'xlink:href',
      '/assets/img/sprite.svg#flag'
    )
  })

  it('attribute values match prop values', () => {
    mount(UsaIcon, {
      props: {
        name: 'github',
        ariaHidden: false,
        role: 'presentation',
        focusable: true,
        size: 3,
      },
      global: {
        provide: {
          'vueUswds.svgSpritePath': '/test.svg',
        },
      },
    })

    cy.get('.usa-icon')
      .should('have.attr', 'aria-hidden', 'false')
      .and('have.attr', 'role', 'presentation')
      .and('have.attr', 'focusable', 'true')
      .and('have.class', 'usa-icon--size-3')

    cy.get('svg > use').should('have.attr', 'xlink:href', '/test.svg#github')
  })

  it('custom slot content is used', () => {
    mount(UsaIcon, {
      props: {
        name: 'bug_report',
      },
      slots: {
        title: () => h('title', {}, 'custom title slot'),
      },
    })

    cy.get('svg title').should('contain', 'custom title slot')
  })

  it('warns in console about invalid `size` prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaIcon, {
      props: {
        name: 'zoom_out_map',
        size: 10,
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'10' is not a valid icon size`
    )
  })
})
