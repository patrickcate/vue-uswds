import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaIconList from './UsaIconList.vue'

describe('UsaIconList', () => {
  it('renders the component', () => {
    mount(UsaIconList, {
      slots: {
        default: () => h('li', {}, 'Test icon list item'),
      },
    })

    cy.get('ul.usa-icon-list')
      .should('have.attr', 'class')
      .and('not.match', /usa-icon-list--/)
    cy.get('.usa-icon-list > li').should('contain', 'Test icon list item')
  })

  it('applied color and size CSS classes from prop values', () => {
    mount(UsaIconList, {
      props: {
        color: 'primary',
        size: 'xl',
      },
    })

    cy.get('.usa-icon-list')
      .should('have.class', 'usa-icon-list--primary')
      .and('have.class', 'usa-icon-list--size-xl')
  })

  it('formats RWD CSS size classes', () => {
    mount(UsaIconList, {
      props: {
        size: {
          mobile: 'sm',
          tablet: 'lg',
          desktop: '2xl',
        },
      },
    })

    cy.get('.usa-icon-list')
      .should('have.class', 'mobile:usa-icon-list--size-sm')
      .and('have.class', 'tablet:usa-icon-list--size-lg')
      .and('have.class', 'desktop:usa-icon-list--size-2xl')
  })

  it('uses custom responsive prefix separator', () => {
    mount(UsaIconList, {
      props: {
        size: {
          mobile: 'sm',
          tablet: 'lg',
          desktop: '2xl',
        },
      },
      global: {
        provide: {
          'vueUswds.prefixSeparator': '-',
        },
      },
    })

    cy.get('.usa-icon-list')
      .should('have.class', 'mobile-usa-icon-list--size-sm')
      .and('have.class', 'tablet-usa-icon-list--size-lg')
      .and('have.class', 'desktop-usa-icon-list--size-2xl')
  })

  it('warns in console about invalid `size` prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaIconList, {
      props: {
        size: 'invalidsize',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'invalidsize' is not a valid icon list size`
    )
  })
})
