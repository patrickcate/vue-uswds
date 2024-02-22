import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h, ref } from 'vue'
import UsaNavbar from './UsaNavbar.vue'

describe('UsaNavbar', () => {
  it('renders the component', () => {
    const isOpen = ref(false)

    cy.mount(UsaNavbar, {
      global: {
        provide: {
          isMobileMenuOpen: isOpen,
          mobileMenuId: 'test-id',
          toggleMobileMenu: () => {
            if (isOpen.value) {
              isOpen.value = false
            } else {
              isOpen.value = true
            }
          },
        },
      },
    })
      .its('wrapper')
      .as('wrapper')

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
    cy.mount(UsaNavbar, {
      slots: {
        default: () => h('span', {}, 'Test default slot content'),
        'menu-button': ({ menuButtonLabel }) =>
          `Test button slot content: ${menuButtonLabel}`,
      },
      global: {
        provide: {
          isMobileMenuOpen: ref(false),
          mobileMenuId: 'test-id',
          toggleMobileMenu: () => {},
        },
      },
    })

    cy.get('.usa-navbar > span').should('contain', 'Test default slot content')
    cy.get('.usa-menu-btn').should('contain', 'Test button slot content: Menu')
  })

  it('button contains custom label text', () => {
    cy.mount(UsaNavbar, {
      props: {
        menuButtonLabel: 'Custom Menu',
      },
      global: {
        provide: {
          isMobileMenuOpen: ref(false),
          mobileMenuId: 'test-id',
          toggleMobileMenu: () => {},
        },
      },
    })

    cy.get('button.usa-menu-btn').should('contain', 'Custom Menu')
  })

  it('button has custom CSS class', () => {
    cy.mount(UsaNavbar, {
      props: {
        customClasses: {
          button: ['test-button-class'],
        },
      },
      global: {
        provide: {
          isMobileMenuOpen: ref(false),
          mobileMenuId: 'test-id',
          toggleMobileMenu: () => {},
        },
      },
    })

    cy.get('.usa-menu-btn').should('have.class', 'test-button-class')
  })
})
