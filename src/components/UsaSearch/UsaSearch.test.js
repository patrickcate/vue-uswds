import { mount } from '@cypress/vue'
import UsaSearch from './UsaSearch.vue'
import { h } from 'vue'

describe('UsaSearch', () => {
  it('renders the component', () => {
    mount(UsaSearch, {
      props: {
        customClasses: {},
      },
    })

    cy.get('form.usa-search')
      .should('have.class', 'usa-search--medium')
      .and('have.attr', 'role')
      .and('contain', 'search')

    cy.get('input.usa-input')
      .as('input')
      .should('have.attr', 'type')
      .and('contain', 'search')

    cy.get('label.usa-label')
      .as('label')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'for')
    cy.get('@label')
      .should('have.attr', 'class')
      .and('equal', 'usa-label usa-sr-only')
    cy.get('@label').should('contain', 'Search')

    cy.get('@input').should('have.attr', 'name').and('contain', 'search')
    cy.get('@input').should('have.attr', 'id')
    cy.get('@input').should('have.attr', 'class').and('equal', 'usa-input')

    cy.get('button.usa-button')
      .as('button')
      .should('have.attr', 'type')
      .and('contain', 'submit')
    cy.get('@button').should('have.attr', 'class').and('equal', 'usa-button')

    cy.get('span.usa-search__submit-text').should('contain', 'Search')

    cy.get('img.usa-search__submit-icon')
      .as('buttonIcon')
      .should('have.attr', 'src')
      .and('contain', '/assets/img/usa-icons-bg/search--white.svg')

    cy.get('@buttonIcon').should('have.attr', 'alt').and('contain', 'Search')
    cy.get('@buttonIcon')
      .should('have.attr', 'class')
      .and('equal', 'usa-search__submit-icon')
  })

  it('displays each variant size type', () => {
    mount(UsaSearch, {}).as('wrapper')

    cy.get('.usa-search').should('have.class', 'usa-search--medium')

    cy.get('.usa-search__submit-text').should('exist')
    cy.get('.usa-search__submit-icon').should('not.be.visible')

    cy.get('@wrapper').invoke('setProps', { variant: 'big' })

    cy.get('.usa-search').should('have.class', 'usa-search--big')

    cy.get('.usa-search__submit-text').should('exist')
    cy.get('.usa-search__submit-icon').should('not.be.visible')

    cy.get('@wrapper').invoke('setProps', { variant: 'small' })

    cy.get('.usa-search').should('have.class', 'usa-search--small')

    cy.get('.usa-search__submit-text').should('not.exist')
    cy.get('.usa-search__submit-icon').should('be.visible')

    cy.get('@wrapper').invoke('setProps', { variant: 'medium' })

    cy.get('.usa-search').should('have.class', 'usa-search--medium')

    cy.get('.usa-search__submit-text').should('exist')
    cy.get('.usa-search__submit-icon').should('not.be.visible')
  })

  it('uses custom `id`, `label`, `inputAttrs`, and `buttonLabel` prop values', () => {
    mount(UsaSearch, {
      props: {
        label: 'Test label',
        id: 'custom-id',
        buttonLabel: 'Test button label',
        inputAttrs: {
          placeholder: 'Test placeholder',
        },
      },
    })

    cy.get('.usa-label').as('label').should('contain', 'Test label')
    cy.get('@label').should('have.attr', 'for').and('contain', 'custom-id')

    cy.get('.usa-input')
      .should('have.id', 'custom-id')
      .and('have.attr', 'placeholder')
      .and('contain', 'Test placeholder')

    cy.get('.usa-search__submit-text').should('contain', 'Test button label')
  })

  it('uses `icon` slot', () => {
    mount(UsaSearch, {
      props: {
        // Icon only displays with small variant.
        variant: 'small',
      },
      slots: {
        icon: () =>
          h(
            'strong',
            { className: 'usa-search__submit-icon' },
            'Custom icon slot'
          ),
      },
    })

    cy.get('.usa-button > strong').should('contain', 'Custom icon slot')
  })

  it('icon image path uses custom injected `imagePath` value', () => {
    mount(UsaSearch, {
      props: {},
      global: {
        provide: {
          'vueUswds.imagePath': '/custom/image/path',
        },
      },
    })

    cy.get('.usa-search__submit-icon')
      .should('have.attr', 'src')
      .and('contain', '/custom/image/path/usa-icons-bg/search--white.svg')
  })

  it('emits input event when changed', () => {
    mount(UsaSearch, {
      props: {
        modelValue: 'Test',
      },
    }).as('wrapper')

    cy.get('.usa-input').as('input').should('have.value', 'Test')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:modalValue')
      })

    cy.get('@input').type(' search term')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentRangeEvent = vm.emitted('update:modelValue')
        expect(currentRangeEvent).to.have.length(12)
        expect(currentRangeEvent[currentRangeEvent.length - 1]).to.contain(
          'Test search term'
        )
      })
  })

  it('uses custom CSS classes', () => {
    mount(UsaSearch, {
      props: {
        customClasses: {
          label: ['test-label-class'],
          input: ['test-input-class'],
          button: ['test-button-class'],
          icon: ['test-icon-class'],
        },
      },
      attrs: {
        class: ['test-component-class'],
      },
    })

    cy.get('.usa-search').should('have.class', 'test-component-class')
    cy.get('.usa-label').should('have.class', 'test-label-class')
    cy.get('.usa-input').should('have.class', 'test-input-class')
    cy.get('.usa-button').should('have.class', 'test-button-class')
    cy.get('.usa-search__submit-icon').should('have.class', 'test-icon-class')
  })

  it('warns in console invalid `variant` prop value', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaSearch, {
      props: {
        variant: 'invalidvariant',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'invalidvariant' is not a valid search variant`
    )
  })
})
