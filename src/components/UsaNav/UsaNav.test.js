import { mount } from '@cypress/vue'
import { h, ref } from 'vue'
import UsaNav from './UsaNav.vue'
import UsaNavbar from '@/components/UsaNavbar'

describe('UsaNav', () => {
  const wrapperComponent = {
    components: { UsaNavbar, UsaNav },
    props: {
      ariaLabel: {
        type: String,
        default: 'Primary navigation',
      },
      closeButtonLabel: {
        type: String,
        default: 'Close',
      },
      customClasses: {
        type: Object,
        default: () => {
          return {
            button: [],
          }
        },
      },
    },
    template: `
    <UsaNavbar>
      <UsaNav
        :aria-label="ariaLabel"
        :close-button-label="closeButtonLabel"
        :custom-classes="customClasses"
      >
        <template #primary><slot name="primary"></slot></template>
        <template #secondary><slot name="secondary"></slot></template>
      </UsaNav>
    </UsaNavbar>`,
  }

  it('renders the component', () => {
    cy.viewport('iphone-6')

    const wrapper = mount(wrapperComponent, {
      props: {
        customClasses: {
          button: ['test-button-class'],
        },
      },
      slots: {
        primary: () =>
          h(
            'a',
            {
              href: '#',
              onClick: async () => {
                await wrapper.vue().then(vm => {
                  const usaNavComponent = vm.findComponent(UsaNav)
                  usaNavComponent.vm.closeMobileMenu()
                })
              },
            },
            'Test primary slot'
          ),
        secondary: () =>
          h(
            'a',
            {
              href: '#',
              onClick: async () => {
                await wrapper.vue().then(vm => {
                  const usaNavComponent = vm.findComponent(UsaNav)
                  usaNavComponent.vm.closeMobileMenu()
                })
              },
            },
            'Test secondary slot'
          ),
      },
    })

    cy.get('div.usa-overlay')
      .as('overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')

    cy.get('nav.usa-nav').as('nav').should('have.attr', 'id')
    cy.get('@nav')
      .should('have.attr', 'aria-label')
      .and('contain', 'Primary navigation')

    cy.get('@nav').should('not.have.class', 'is-visible').and('not.be.visible')
    cy.get('@nav').find('> div.usa-nav__inner').should('not.exist')

    cy.get('@nav')
      .find('> button.usa-nav__close')
      .as('closeButton')
      .should('have.class', 'test-button-class')

    cy.get('@closeButton')
      .find('> img')
      .as('closeButtonIcon')
      .should('have.attr', 'src')
      .and('contain', '/assets/img/usa-icons/close.svg')
    cy.get('@closeButtonIcon').should('have.attr', 'role').and('contain', 'img')
    cy.get('@closeButtonIcon')
      .should('have.attr', 'alt')
      .and('contain', 'Close')

    cy.get('@nav')
      .find('> a:nth-of-type(1)')
      .as('link1')
      .should('contain', 'Test secondary slot')
    cy.get('@nav')
      .find('> a:nth-of-type(2)')
      .as('link2')
      .should('contain', 'Test primary slot')

    cy.get('body > .usa-overlay').should('not.exist')
    cy.get('body > nav').should('not.exist')
    cy.get('body > :not(nav)').should('not.have.attr', 'aria-hidden')
    cy.get('body > :not(.usa-overlay)').should('not.have.attr', 'aria-hidden')

    wrapper.vue().then(vm => {
      const usaNavbarComponent = vm.findComponent(UsaNavbar)
      expect(usaNavbarComponent.emitted()).to.not.have.property(
        'mobileMenuOpen'
      )
    })

    // Click mobile menu button.
    cy.get('.usa-menu-btn').as('menuButton').click()

    wrapper.vue().then(vm => {
      const usaNavbarComponent = vm.findComponent(UsaNavbar)
      expect(usaNavbarComponent.emitted()).to.have.property('mobileMenuOpen')

      const currentEvent = usaNavbarComponent.emitted('mobileMenuOpen')
      expect(currentEvent).to.have.length(1)
      expect(currentEvent[currentEvent.length - 1]).to.contain(true)
    })

    cy.get('body > .usa-overlay').should('exist')
    cy.get('body > nav').should('exist')
    cy.get('body > :not(nav)')
      .should('have.attr', 'aria-hidden')
      .and('contain', true)
    cy.get('body > :not(.usa-overlay)').should('have.attr', 'aria-hidden')

    cy.get('@overlay').should('have.class', 'is-visible').and('be.visible')
    cy.get('@nav').should('have.class', 'is-visible').and('be.visible')

    cy.get('@closeButton').should('have.focus')

    // Tab to next link.
    cy.realPress('Tab')

    cy.get('@link1').should('have.focus')

    // Tab to next link.
    cy.realPress('Tab')

    cy.get('@link2').should('have.focus')

    // Tab to close button.
    cy.realPress('Tab')

    cy.get('@closeButton').should('have.focus')

    // Click mobile menu close button.
    cy.get('@closeButton').click()

    wrapper.vue().then(vm => {
      const usaNavbarComponent = vm.findComponent(UsaNavbar)
      expect(usaNavbarComponent.emitted()).to.have.property('mobileMenuOpen')

      const currentEvent = usaNavbarComponent.emitted('mobileMenuOpen')
      expect(currentEvent).to.have.length(2)
      expect(currentEvent[currentEvent.length - 1]).to.contain(false)
    })

    cy.get('@menuButton').should('have.focus')

    cy.get('body > .usa-overlay').should('not.exist')
    cy.get('body > nav').should('not.exist')
    cy.get('body > :not(nav)').should('not.have.attr', 'aria-hidden')
    cy.get('body > :not(.usa-overlay)').should('not.have.attr', 'aria-hidden')

    cy.get('@overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')
    cy.get('@nav').should('not.have.class', 'is-visible').and('not.be.visible')

    // Open mobile menu again.
    cy.get('@menuButton').click()

    cy.get('@overlay').should('have.class', 'is-visible').and('be.visible')
    cy.get('@nav').should('have.class', 'is-visible').and('be.visible')

    // Close with escape key.
    cy.realPress('Escape')

    cy.get('@overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')
    cy.get('@nav').should('not.have.class', 'is-visible').and('not.be.visible')

    // Open mobile menu again.
    cy.get('@menuButton').click()

    cy.get('@overlay').should('have.class', 'is-visible').and('be.visible')
    cy.get('@nav').should('have.class', 'is-visible').and('be.visible')

    cy.get('html').click('bottomLeft')

    cy.get('@overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')
    cy.get('@nav').should('not.have.class', 'is-visible').and('not.be.visible')

    // Open mobile menu again.
    cy.get('@menuButton').click()

    cy.get('@overlay').should('have.class', 'is-visible').and('be.visible')
    cy.get('@nav').should('have.class', 'is-visible').and('be.visible')

    // Close menu with click on nav link.
    cy.get('@link2').click()

    cy.get('@overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')
    cy.get('@nav').should('not.have.class', 'is-visible').and('not.be.visible')
  })

  it('slot positions change on mobile screens', () => {
    cy.viewport('iphone-6')

    mount(wrapperComponent, {
      props: {
        ariaLabel: 'Custom aria label',
        closeButtonLabel: 'Custom close button label',
      },
      slots: {
        primary: () => h('span', {}, 'Test primary slot'),
        secondary: () => h('span', {}, 'Test secondary slot'),
      },
    })

    cy.get('.usa-menu-btn').as('menuButton').click()

    cy.get('div.usa-overlay')
      .as('overlay')
      .should('have.class', 'is-visible')
      .and('be.visible')

    cy.get('.usa-nav')
      .as('nav')
      .should('have.class', 'is-visible')
      .and('be.visible')
    cy.get('@nav')
      .should('have.attr', 'aria-label')
      .and('contain', 'Custom aria label')

    cy.get('@nav').find('> button.usa-nav__close').as('closeButton')

    cy.get('@closeButton').find('> img').as('closeButtonIcon')

    cy.get('@closeButtonIcon')
      .should('have.attr', 'alt')
      .and('contain', 'Custom close button label')

    cy.get('@nav')
      .find('> span:nth-of-type(1)')
      .should('contain', 'Test secondary slot')
    cy.get('@nav')
      .find('> span:nth-of-type(2)')
      .should('contain', 'Test primary slot')

    // Mobile menu should close on larger screens.
    cy.viewport('macbook-15')

    cy.get('@nav')
      .find('> span:nth-of-type(1)')
      .should('contain', 'Test primary slot')

    cy.get('@nav')
      .find('> span:nth-of-type(2)')
      .should('contain', 'Test secondary slot')

    cy.get('@overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')
    cy.get('@nav').should('not.have.class', 'is-visible')

    cy.viewport('iphone-6')

    cy.get('@nav')
      .find('> span:nth-of-type(1)')
      .should('contain', 'Test secondary slot')
    cy.get('@nav')
      .find('> span:nth-of-type(2)')
      .should('contain', 'Test primary slot')

    cy.get('@overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')

    cy.get('@nav').should('not.have.class', 'is-visible').and('not.be.visible')
  })

  it('add extended header inner element and uses custom image path', () => {
    mount(UsaNav, {
      global: {
        provide: {
          isExtendedHeader: ref(true),
          'vueUswds.imagePath': '/test',
          mobileMenuId: 'test-mobile-menu-id',
          closeMobileMenu: () => {},
        },
      },
    })

    cy.get('.usa-nav').as('nav')

    cy.get('@nav').find('> .usa-nav__inner').should('exist')

    cy.get('@nav')
      .find('.usa-nav__close > img')
      .should('have.attr', 'src')
      .and('contain', '/test/usa-icons/close.svg')
  })

  it('uses custom global mobile breakpoint', () => {
    cy.viewport('iphone-6')

    mount(wrapperComponent, {
      global: {
        provide: {
          'vueUswds.imagePath': '/test',
          'vueUswds.mobileMenuBreakpoint': '400px',
          closeMobileMenu: () => {},
        },
      },
    })

    cy.get('.usa-menu-btn').as('menuButton').click()

    cy.get('div.usa-overlay')
      .as('overlay')
      .should('have.class', 'is-visible')
      .and('be.visible')

    cy.get('.usa-nav')
      .as('nav')
      .should('have.class', 'is-visible')
      .and('be.visible')

    cy.viewport(800, 800)

    cy.get('@overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')

    cy.get('@nav').should('not.have.class', 'is-visible')
  })

  it('uses custom button slot', () => {
    mount(UsaNav, {
      props: {
        closeButtonLabel: 'Custom close button slot',
      },
      slots: {
        'close-button': ({ closeButtonLabel }) => closeButtonLabel,
      },
      global: {
        provide: {
          mobileMenuId: 'test-mobile-menu-id',
          closeMobileMenu: () => {},
        },
      },
    })

    cy.get('.usa-nav').as('nav')
    cy.get('@nav')
      .find('.usa-nav__close')
      .should('contain', 'Custom close button slot')
  })
})
