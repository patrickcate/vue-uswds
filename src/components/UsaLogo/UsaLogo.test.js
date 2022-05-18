import { mount } from '@cypress/vue'
import UsaLogo from './UsaLogo.vue'

describe('UsaLogo', () => {
  it('renders the component', () => {
    mount(UsaLogo, {
      props: {
        title: 'Project Title',
        customClasses: {
          text: ['test-text-class'],
          link: ['test-link-class'],
        },
      },
    })

    cy.get('.usa-logo').should('exist')
    cy.get('em.usa-logo__text').should('have.class', 'test-text-class')

    cy.get('a').should('have.attr', 'to').and('contain', '/')
    cy.get('a')
      .should('have.class', 'test-link-class')
      .and('contain', 'Project Title')
  })

  it('uses slot content', () => {
    mount(UsaLogo, {
      slots: {
        default: () => 'Custom Title',
      },
    })

    cy.get('a').should('contain', 'Custom Title')
  })

  it('renders the custom router link tag and props', () => {
    mount(UsaLogo, {
      props: {
        title: 'Project Title',
        to: '/test-page',
        routerComponentName: 'router-link',
      },
    })

    cy.get('router-link').should('have.attr', 'to').and('contain', '/test-page')
  })
})
