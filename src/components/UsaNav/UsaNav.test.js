import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h, ref } from 'vue'
import UsaNav from './UsaNav.vue'

describe('UsaNav', () => {
  it('renders the component', () => {
    const isOpen = ref(false)

    cy.viewport('iphone-6')

    cy.mount(UsaNav, {
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
            },
            'Test primary slot'
          ),
        secondary: () =>
          h(
            'a',
            {
              href: '#',
            },
            'Test secondary slot'
          ),
      },
      global: {
        provide: {
          isMobileMenuOpen: isOpen,
          mobileMenuId: 'test-id',
          closeMobileMenu: () => (isOpen.value = false),
        },
      },
    })

    cy.get('div.usa-overlay')
      .as('overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')

    cy.get('nav.usa-nav').as('nav').should('have.id', 'test-id')
    cy.get('@nav')
      .should('have.attr', 'aria-label')
      .and('contain', 'Primary navigation')

    cy.get('@nav').should('not.have.class', 'is-visible').and('not.be.visible')
    cy.get('@nav').find('> div.usa-nav__inner').should('not.exist')

    cy.get('@nav')
      .find('> button.usa-nav__close')
      .as('closeButton')
      .should('have.class', 'test-button-class')
      .and('have.attr', 'type', 'button')

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

    // Open mobile menu.
    cy.then(() => {
      isOpen.value = true
    })

    cy.get('body > .usa-overlay').should('exist')
    cy.get('body > nav').should('exist')

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

    cy.get('body > .usa-overlay').should('not.exist')
    cy.get('body > nav').should('not.exist')

    cy.get('@overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')
    cy.get('@nav').should('not.have.class', 'is-visible').and('not.be.visible')

    // Open mobile menu again.
    cy.then(() => {
      isOpen.value = true
    })

    cy.get('@overlay').should('have.class', 'is-visible').and('be.visible')
    cy.get('@nav').should('have.class', 'is-visible').and('be.visible')

    // Close with escape key.
    cy.realPress('Escape')

    cy.get('@overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')
    cy.get('@nav').should('not.have.class', 'is-visible').and('not.be.visible')

    // Open mobile menu again.
    cy.then(() => {
      isOpen.value = true
    })

    cy.get('@overlay').should('have.class', 'is-visible').and('be.visible')
    cy.get('@nav').should('have.class', 'is-visible').and('be.visible')

    cy.get('html').click('topLeft')

    cy.get('@overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')
    cy.get('@nav').should('not.have.class', 'is-visible').and('not.be.visible')

    // Open mobile menu again.
    cy.then(() => {
      isOpen.value = true
    })

    cy.get('@overlay').should('have.class', 'is-visible').and('be.visible')
    cy.get('@nav').should('have.class', 'is-visible').and('be.visible')
  })

  it('slot positions change on mobile screens', () => {
    const isOpen = ref(true)

    cy.viewport('iphone-6')

    cy.mount(UsaNav, {
      props: {
        ariaLabel: 'Custom aria label',
        closeButtonLabel: 'Custom close button label',
      },
      slots: {
        primary: () => h('span', {}, 'Test primary slot'),
        secondary: () => h('span', {}, 'Test secondary slot'),
      },
      global: {
        provide: {
          isMobileMenuOpen: isOpen,
          mobileMenuId: 'test-id',
          closeMobileMenu: () => (isOpen.value = false),
        },
      },
    })

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
    cy.mount(UsaNav, {
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
    const isOpen = ref(false)

    cy.viewport('iphone-6')

    cy.mount(UsaNav, {
      global: {
        provide: {
          'vueUswds.imagePath': '/test',
          'vueUswds.mobileMenuBreakpoint': '400px',
          isMobileMenuOpen: isOpen,
          mobileMenuId: 'test-mobile-menu-id',
          closeMobileMenu: () => (isOpen.value = false),
        },
      },
    })

    // Open mobile menu.
    cy.then(() => {
      isOpen.value = true
    })

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

  it('mobile menu is closed when unmounted', () => {
    cy.viewport('iphone-6')

    cy.mount(UsaNav, {
      global: {
        provide: {
          mobileMenuId: 'test-mobile-menu-id',
          closeMobileMenu: cy.stub().as('closeMobileMenu'),
          isMobileMenuOpen: ref(true),
        },
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-nav').should('exist')

    cy.get('@wrapper').invoke('unmount')

    cy.get('@closeMobileMenu').should('be.called')
  })

  it('uses custom button slot', () => {
    cy.mount(UsaNav, {
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
