import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import UsaHeader from './UsaHeader.vue'
import UsaNavbar from '@/components/UsaNavbar'
import UsaNav from '@/components/UsaNav'

describe('UsaHeader', () => {
  it('renders the component', () => {
    cy.mount(UsaHeader, {
      slots: {
        default: () => 'Basic header slot content',
      },
    })

    cy.get('.usa-header').should('have.class', 'usa-header--basic')
    cy.get('.usa-nav-container').should('contain', 'Basic header slot content')
  })

  it('renders `extended` variant', () => {
    cy.mount(UsaHeader, {
      props: {
        variant: 'extended',
      },
      slots: {
        default: () => 'Extended header slot content',
      },
    })

    cy.get('.usa-header')
      .should('have.class', 'usa-header--extended')
      .and('contain', 'Extended header slot content')
    cy.get('.usa-nav-container').should('not.exist')
  })

  it('add megamenu class', () => {
    cy.mount(UsaHeader, {
      props: {
        megamenu: true,
      },
    })

    cy.get('.usa-header--megamenu').should('exist')
  })

  it('provide reactive `isExtendedHeader` prop value to child components', () => {
    const childComponent = {
      inject: ['isExtendedHeader'],
      template: `<span>Extended Variant: {{ isExtendedHeader }}</span>`,
    }

    cy.mount(UsaHeader, {
      props: {
        variant: 'extended',
      },
      slots: {
        default: () => h(childComponent),
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('span').should('contain', 'Extended Variant: true')

    cy.get('@wrapper').invoke('setProps', { variant: 'basic' })

    cy.get('span').should('contain', 'Extended Variant: false')
  })

  it('provide reactive `isMegamenu` prop value to child components', () => {
    const childComponent = {
      inject: ['isMegamenu'],
      template: `<span>Megamenu: {{ isMegamenu }}</span>`,
    }

    cy.mount(UsaHeader, {
      props: {
        megamenu: true,
      },
      slots: {
        default: () => h(childComponent),
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('span').should('contain', 'Megamenu: true')

    cy.get('@wrapper').invoke('setProps', { megamenu: false })

    cy.get('span').should('contain', 'Megamenu: false')
  })

  it('provide reactive values to `UsaNav` and `UsaNavbar` components', () => {
    const childComponent = {
      components: { UsaNavbar, UsaNav },
      template: `
        <UsaNavbar>Test Navbar</UsaNavbar>
        <UsaNav>
          <template #primary><div>Primary slot</div></template>
          <template #secondary><div>Secondary slot</div></template>
        </UsaNav>
      `,
    }

    // eslint-disable-next-line cypress/no-assigning-return-values
    const wrapper = cy
      .mount(UsaHeader, {
        slots: {
          default: () => h(childComponent),
        },
      })
      .its('wrapper')
      .as('wrapper')

    cy.get('div.usa-overlay')
      .as('overlay')
      .should('not.have.class', 'is-visible')
      .and('not.be.visible')

    cy.get('.usa-navbar').should('contain', 'Test Navbar')

    cy.get('button.usa-menu-btn')
      .as('menuButton')
      .should(
        'have.attr',
        'aria-controls',
        'vuswds-id-global-mobile-header-menu',
      )

    cy.get('nav.usa-nav')
      .as('nav')
      .should('have.id', 'vuswds-id-global-mobile-header-menu')

    cy.get('@nav').should('not.have.class', 'is-visible').and('not.be.visible')
    cy.get('@nav').find('> div.usa-nav__inner').should('not.exist')

    cy.get('@nav').find('> button.usa-nav__close').as('closeButton')

    cy.get('body > .usa-overlay').should('not.exist')
    cy.get('body > nav').should('not.exist')
    cy.get('body > :not(nav)').should('not.have.attr', 'aria-hidden')
    cy.get('body > :not(.usa-overlay)').should('not.have.attr', 'aria-hidden')

    wrapper.vue().then(vm => {
      const usaHeaderComponent = vm.findComponent(UsaHeader)
      expect(usaHeaderComponent.emitted()).to.not.have.property(
        'mobileMenuOpen',
      )

      // Click mobile menu button.
      cy.get('@menuButton').click()

      wrapper.vue().then(vm => {
        const usaHeaderComponent = vm.findComponent(UsaHeader)

        expect(usaHeaderComponent.emitted()).to.have.property('mobileMenuOpen')

        const currentEvent = usaHeaderComponent.emitted('mobileMenuOpen')
        expect(currentEvent).to.have.length(1)
        expect(currentEvent[currentEvent.length - 1]).to.contain(true)
      })
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

    // Click mobile menu close button.
    cy.get('@closeButton').click()

    wrapper.vue().then(vm => {
      const usaHeaderComponent = vm.findComponent(UsaHeader)
      expect(usaHeaderComponent.emitted()).to.have.property('mobileMenuOpen')

      const currentEvent = usaHeaderComponent.emitted('mobileMenuOpen')
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
  })

  it('adds custom CSS classes', () => {
    cy.mount(UsaHeader, {
      props: {
        customClasses: {
          navContainer: ['test-nav-container-class'],
        },
      },
    })

    cy.get('.usa-nav-container').should(
      'have.class',
      'test-nav-container-class',
    )
  })

  it('warns in console about invalid variant prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaHeader, {
      props: {
        variant: 'notvariant',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notvariant' is not a valid header variant`,
    )
  })
})
