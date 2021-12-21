import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaBanner from './UsaBanner.vue'

describe('UsaBanner', () => {
  it('renders the component', () => {
    mount(UsaBanner, {})

    cy.get('section.usa-banner')
      .should('have.attr', 'aria-label')
      .and('contain', 'Official government website')
    cy.get('.usa-accordion').should('exist')
    cy.get('header.usa-banner__header').should('exist')
    cy.get('.usa-banner__inner').should('exist')

    cy.get('img.usa-banner__header-flag')
      .should('have.attr', 'alt')
      .and('contain', 'U.S. flag')
    cy.get('img.usa-banner__header-flag')
      .should('have.attr', 'src')
      .and('contain', '/assets/img/us_flag_small.png')

    cy.get('.usa-banner__header-text').should(
      'contain',
      'An official website of the United States government'
    )

    // Check that the default grid classes exist.
    cy.get('.grid-col-auto').should('exist')
    cy.get('.grid-col-fill').should('exist')
    cy.get(`.tablet\\:grid-col-auto`).should('exist')

    cy.get('p.usa-banner__header-action')
      .should('have.attr', 'aria-hidden')
      .and('contain', 'true')
    cy.get('p.usa-banner__header-action').should(
      'contain',
      "Here's how you know"
    )
    cy.get('button.usa-banner__button')
      .should('have.class', 'usa-accordion__button')
      .and('have.attr', 'aria-expanded')
      .and('contain', 'false')

    cy.get('button.usa-banner__button')
      .should('have.attr', 'aria-controls')
      .and('not.be.empty')

    cy.get('span.usa-banner__button-text').should(
      'contain',
      "Here's how you know"
    )

    cy.get('.usa-banner__content')
      .should('have.class', 'usa-accordion__content')
      .and('have.attr', 'id')

    cy.get('.usa-banner__content')
      .and('not.be.visible')
      .and('have.attr', 'hidden')
  })

  it('uses custom prop text', () => {
    mount(UsaBanner, {
      props: {
        open: true,
        ariaLabel: 'Test arial label',
        headerText: 'Test header text',
        actionText: 'Text action text',
      },
    })

    cy.get('.usa-banner')
      .should('have.attr', 'aria-label')
      .and('contain', 'Test arial label')

    cy.get('.usa-banner__header').should(
      'have.class',
      'usa-banner__header--expanded'
    )

    cy.get('.usa-banner__header-text').should('contain', 'Test header text')

    cy.get('.usa-banner__header-action').should('contain', 'Text action text')
    cy.get('.usa-banner__button-text').should('contain', 'Text action text')

    cy.get('.usa-banner__content').should('not.have.attr', 'hidden')
    cy.get('.usa-banner__content').and('be.visible')
  })

  it('uses custom CSS classes', () => {
    mount(UsaBanner, {
      props: {
        customClasses: {
          accordion: ['test-banner-class'],
          bannerHeader: ['test-banner-header-class'],
          bannerInner: ['test-banner-inner-class'],
          button: ['test-button-class'],
          bannerContent: ['test-banner-content-class'],
        },
      },
    })

    cy.get('.test-banner-class').should('exist')
    cy.get('.test-banner-header-class').should('exist')
    cy.get('.test-banner-inner-class').should('exist')
    cy.get('.test-button-class').should('exist')
    cy.get('.test-banner-content-class').should('exist')
  })

  it('click button toggle banner open/close', () => {
    mount(UsaBanner, {
      props: {
        id: 'test-id',
      },
    })

    // Should be closed.
    cy.get('.usa-banner__header').should(
      'not.have.class',
      'usa-banner__header--expanded'
    )

    cy.get('.usa-banner__button')
      .as('button')
      .should('have.attr', 'aria-expanded')
      .and('contain', 'false')

    cy.get('@button')
      .should('have.attr', 'aria-controls')
      .and('contain', 'test-id')

    cy.get('.usa-banner__content')
      .should('have.id', 'test-id')
      .and('have.attr', 'hidden')

    cy.get('.usa-banner__content').should('not.be.visible')

    // Toggle open.
    cy.get('@button').click()

    cy.get('.usa-banner__header').should(
      'have.class',
      'usa-banner__header--expanded'
    )

    // Should now be open.
    cy.get('@button')
      .should('have.attr', 'aria-expanded')
      .and('contain', 'true')

    cy.get('@button')
      .should('have.attr', 'aria-controls')
      .and('contain', 'test-id')

    cy.get('.usa-banner__content')
      .should('have.id', 'test-id')
      .and('not.have.attr', 'hidden')

    cy.get('.usa-banner__content').should('be.visible')

    // Toggle close.
    cy.get('@button').click()

    cy.get('.usa-banner__header').should(
      'not.have.class',
      'usa-banner__header--expanded'
    )

    cy.get('.usa-banner__button')
      .as('button')
      .should('have.attr', 'aria-expanded')
      .and('contain', 'false')

    cy.get('@button')
      .should('have.attr', 'aria-controls')
      .and('contain', 'test-id')

    cy.get('.usa-banner__content')
      .should('have.id', 'test-id')
      .and('have.attr', 'hidden')

    cy.get('.usa-banner__content').should('not.be.visible')
  })

  it('v-model binds to open prop and emits update event', () => {
    const wrapper = mount(UsaBanner, {
      props: {
        open: false,
        'onUpdate:open': async open => {
          await wrapper.vue().then(vm => {
            vm.setProps({ open: open })
          })
        },
      },
    }).as('wrapper')

    cy.get('.usa-banner__button').as('button').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:open')
        const currentOpenEvent = vm.emitted('update:open')
        expect(currentOpenEvent).to.have.length(1)
        expect(currentOpenEvent[currentOpenEvent.length - 1]).to.contain(true)
      })

    cy.get('.usa-banner__button').as('button').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:open')
        const currentOpenEvent = vm.emitted('update:open')
        expect(currentOpenEvent).to.have.length(2)
        expect(currentOpenEvent[currentOpenEvent.length - 1]).to.contain(false)
      })
  })

  it('uses custom slot content', () => {
    mount(UsaBanner, {
      props: {
        open: true,
        actionText: 'Scoped slot button action text',
      },
      slots: {
        flag: () => 'Test flag slot content',
        button: props =>
          h(
            'span',
            {
              'v-slot:button': 'props',
            },
            `${props.isOpen ? 'open' : 'closed'} - ${
              props.actionText
            } - Test button slot content`
          ),
        default: () => 'Test default slot content',
      },
    })

    cy.get('.usa-banner__inner > div:first-child').should(
      'contain',
      'Test flag slot content'
    )
    cy.get('.usa-accordion__button').should(
      'contain',
      'open - Scoped slot button action text - Test button slot content'
    )
    cy.get('.usa-banner__content').should(
      'contain',
      'Test default slot content'
    )
  })

  it('uses injected prop values', () => {
    mount(UsaBanner, {
      props: {},
      global: {
        provide: {
          'vueUswds.svgSpritePath': '/test.svg',
          'vueUswds.prefixSeparator': '@',
          'vueUswds.gridNamespace': 'test-grid-namespace-',
        },
      },
    })

    cy.get('.test-grid-namespace-col-auto').should('exist')
    cy.get('.test-grid-namespace-col-fill').should('exist')
    cy.get(`.tablet\\@test-grid-namespace-col-auto`).should('exist')
  })
})
