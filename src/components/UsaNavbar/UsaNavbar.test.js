import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaNavbar from './UsaNavbar.vue'

describe('UsaNavbar', () => {
  it('renders the component', () => {
    mount(UsaNavbar, {}).as('wrapper')

    cy.get('div.usa-navbar').should('exist')
    cy.get('button.usa-menu-btn')
      .as('button')
      .should('have.attr', 'type', 'button')
      .and('contain', 'Menu')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('mobileMenuOpen')
      })

    cy.get('@button').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('mobileMenuOpen')
        expect(vm.emitted()['mobileMenuOpen']).to.have.lengthOf(1)
      })
  })

  it('custom slot content is rendered', () => {
    mount(UsaNavbar, {
      slots: {
        default: () => h('span', {}, 'Test default slot content'),
        'menu-button': ({ menuButtonLabel }) =>
          `Test button slot content: ${menuButtonLabel}`,
      },
    })

    cy.get('.usa-navbar > span').should('contain', 'Test default slot content')
    cy.get('.usa-menu-btn').should('contain', 'Test button slot content: Menu')
  })

  it('button contains custom label text', () => {
    mount(UsaNavbar, {
      props: {
        menuButtonLabel: 'Custom Menu',
      },
    })

    cy.get('button.usa-menu-btn').should('contain', 'Custom Menu')
  })

  it('button has custom CSS class', () => {
    mount(UsaNavbar, {
      props: {
        customClasses: {
          button: ['test-button-class'],
        },
      },
    })

    cy.get('.usa-menu-btn').should('have.class', 'test-button-class')
  })
})
