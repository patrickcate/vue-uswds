import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaIconListItem from './UsaIconListItem.vue'
import { h } from 'vue'

describe('UsaIconListItem', () => {
  it('renders the component', () => {
    cy.mount(UsaIconListItem, {
      props: {
        icon: 'flag',
      },
      slots: {
        default: () => h('p', {}, 'Test item content'),
      },
    })

    cy.get('li.usa-icon-list__item').should('exist')
    cy.get('div.usa-icon-list__icon > svg.usa-icon').should('exist')
    cy.get('h2.usa-icon-list__title').should('not.exist')
    cy.get('div.usa-icon-list__content > p').should(
      'contain',
      'Test item content'
    )
  })

  it('renders custom title tag and slot content', () => {
    cy.mount(UsaIconListItem, {
      props: {
        icon: 'flag',
        title: 'TestTitleProp',
        titleTag: 'h3',
      },
      slots: {
        icon: () => h('span', { class: 'test-icon-slot' }, 'Test icon slot'),
        title: () => 'Test item title slot',
        default: () => 'Test item content',
      },
    })

    cy.get('.usa-icon-list__icon > span.test-icon-slot').should(
      'contain',
      'Test icon slot'
    )
    cy.get('h3.usa-icon-list__title').should('contain', 'Test item title slot')
  })

  it('title heading element displays title prop text', () => {
    cy.mount(UsaIconListItem, {
      props: {
        icon: 'flag',
        title: 'Test item title',
      },
      slots: {
        default: () => 'Test item content',
      },
    })

    cy.get('h2.usa-icon-list__title').should('contain', 'Test item title')
  })

  it('adds custom CSS classes', () => {
    cy.mount(UsaIconListItem, {
      props: {
        icon: 'flag',
        title: 'Test item title',
        customClasses: {
          icon: ['test-icon-class'],
          content: ['test-content-class'],
          title: ['test-title-class'],
        },
      },
      slots: {
        default: () => 'Test item content',
      },
    })

    cy.get('.usa-icon-list__icon').should('have.class', 'test-icon-class')
    cy.get('.usa-icon-list__content').should('have.class', 'test-content-class')
    cy.get('.usa-icon-list__title').should('have.class', 'test-title-class')
  })
})
