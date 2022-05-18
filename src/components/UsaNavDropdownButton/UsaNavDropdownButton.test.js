import { mount } from '@cypress/vue'
import { ref, reactive } from 'vue'
import UsaNavDropdownButton from './UsaNavDropdownButton.vue'

describe('UsaNavDropdownButton', () => {
  it('renders the component', () => {
    mount(UsaNavDropdownButton, {
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

    cy.get('@button')
      .should('have.attr', 'data-test')
      .and('contain', 'test-attr')

    cy.get('@button').should('have.attr', 'aria-expanded').and('contain', false)

    cy.get('@button')
      .should('have.attr', 'aria-controls')
      .and('contain', 'test-dropdown-id')

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

    mount(UsaNavDropdownButton, {
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

    cy.get('@button')
      .should('have.attr', 'data-test')
      .and('contain', 'test-attr')

    cy.get('@button').should('have.attr', 'aria-expanded').and('contain', true)

    cy.get('@button')
      .should('have.attr', 'aria-controls')
      .and('contain', 'test-dropdown-id')

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

    mount(UsaNavDropdownButton, {
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
