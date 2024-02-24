import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { ref, reactive, markRaw } from 'vue'
import UsaNavDropdownButton from './UsaNavDropdownButton.vue'

describe('UsaNavDropdownButton', () => {
  it('renders the component', () => {
    cy.mount(UsaNavDropdownButton, {
      attrs: {
        'data-test': 'test-attr',
      },
      slots: {
        default: () => 'Test dropdown button',
      },
      global: {
        provide: {
          dropdownId: ref('test-dropdown-id'),
          dropdownItems: reactive({
            'test-dropdown-id': false,
          }),
          toggleDropdown: cy.stub().as('toggleDropdown'),
        },
      },
    })

    cy.get('button.usa-accordion__button')
      .as('button')
      .should('have.class', 'usa-nav__link')
      .and('have.attr', 'type', 'button')

    cy.get('@button').should('have.attr', 'data-test', 'test-attr')

    cy.get('@button').should('have.attr', 'aria-expanded', 'false')
    cy.get('@button').should('have.attr', 'aria-controls', 'test-dropdown-id')

    cy.get('@button').find('span').should('contain', 'Test dropdown button')

    cy.get('@toggleDropdown').should('not.be.called')

    cy.get('@button').click()

    cy.get('@toggleDropdown').should('be.calledWith', 'test-dropdown-id')
  })

  it('renders as button with vue-router active prop and open attributes', () => {
    const routerLinkStub = {
      name: 'RouterLink',
      data() {
        return {
          isActive: true,
          isExactActive: false,
        }
      },
      template:
        '<slot :isActive="isActive" :isExactActive="isExactActive"></slot>',
    }

    cy.mount(UsaNavDropdownButton, {
      attrs: {
        'data-test': 'test-attr',
      },
      slots: {
        default: () => 'Test dropdown button',
      },
      global: {
        stubs: { 'router-link': routerLinkStub },
        provide: {
          'vueUswds.routerComponentName': 'router-link',
          dropdownId: ref('test-dropdown-id'),
          dropdownItems: reactive({
            'test-dropdown-id': true,
          }),
          toggleDropdown: cy.stub().as('toggleDropdown'),
        },
      },
    })

    cy.get('button.usa-accordion__button')
      .as('button')
      .should('have.class', 'usa-nav__link')
      .and('have.class', 'usa-current')

    cy.get('@button').should('have.attr', 'data-test', 'test-attr')

    cy.get('@button')
      .should('have.attr', 'aria-expanded', 'true')
      .and('have.attr', 'aria-controls', 'test-dropdown-id')

    cy.get('@button').find('span').should('contain', 'Test dropdown button')

    cy.get('@toggleDropdown').should('not.be.called')

    cy.get('@button').click()

    cy.get('@toggleDropdown').should('be.calledWith', 'test-dropdown-id')
  })

  it('renders as button with router-link current CSS class', () => {
    const routerLinkStub = {
      name: 'RouterLink',
      data() {
        return {
          isActive: false,
          isExactActive: true,
        }
      },
      template:
        '<slot :isActive="isActive" :isExactActive="isExactActive"></slot>',
    }

    cy.mount(UsaNavDropdownButton, {
      slots: {
        default: () => 'Test dropdown button',
      },
      global: {
        stubs: { 'router-link': routerLinkStub },
        provide: {
          'vueUswds.routerComponentName': 'router-link',
          dropdownId: ref('test-dropdown-id'),
          dropdownItems: reactive({
            'test-dropdown-id': true,
          }),
          toggleDropdown: () => {},
        },
      },
    })

    cy.get('button.usa-accordion__button')
      .should('have.class', 'usa-nav__link')
      .and('have.class', 'usa-current')
  })
})

it('renders button with local router component', () => {
  const routerLinkStub = {
    name: 'RouterLink',
    data() {
      return {
        isActive: true,
        isExactActive: false,
      }
    },
    template:
      '<div class="test-router-link"><slot :isActive="isActive" :isExactActive="isExactActive"></slot></div>',
  }

  const nuxtLinkStub = {
    name: 'NuxtLink',
    data() {
      return {
        isActive: false,
        isExactActive: false,
      }
    },
    template:
      '<div class="test-nuxt-link"><slot :isActive="isActive" :isExactActive="isExactActive"></slot></div>',
  }

  cy.mount(UsaNavDropdownButton, {
    props: {
      routerComponentName: markRaw(nuxtLinkStub),
      href: '/test-href',
      to: '/test-to',
    },
    slots: {
      default: () => 'Test dropdown button',
    },
    global: {
      stubs: { 'router-link': routerLinkStub },
      provide: {
        'vueUswds.routerComponentName': 'router-link',
        dropdownId: ref('test-dropdown-id'),
        dropdownItems: reactive({
          'test-dropdown-id': false,
        }),
        toggleDropdown: cy.stub().as('toggleDropdown'),
      },
    },
  })
    .its('wrapper')
    .as('wrapper')

  cy.get('div.test-nuxt-link')
    .should('have.attr', 'to', '/test-to')
    .and('not.have.attr', 'href')
  cy.get('div.test-router-link').should('not.exist')

  cy.get('.test-nuxt-link button.usa-accordion__button')
    .should('have.class', 'usa-nav__link')
    .and('not.have.class', 'usa-current')

  cy.get('@wrapper').invoke('setProps', { routerComponentName: null })

  cy.get('div.test-nuxt-link').should('not.exist')
  cy.get('div.test-router-link')
    .should('have.attr', 'to', '/test-to')
    .and('not.have.attr', 'href')

  cy.get('.test-router-link button.usa-accordion__button')
    .should('have.class', 'usa-nav__link')
    .and('have.class', 'usa-current')

  cy.get('@wrapper').invoke('setProps', { to: '' })

  cy.get('div.test-nuxt-link').should('not.exist')
  cy.get('div.test-router-link')
    .should('have.attr', 'to', '/test-href')
    .and('not.have.attr', 'href')

  cy.get('.test-router-link button.usa-accordion__button')
    .should('have.class', 'usa-nav__link')
    .and('have.class', 'usa-current')
})
