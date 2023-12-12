import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import UsaBanner from './UsaBanner.vue'

describe('UsaBanner', () => {
  it('renders the component', () => {
    cy.mount(UsaBanner, {
      props: {
        customClasses: {},
      },
    })

    cy.get('section.usa-banner')
      .should('have.attr', 'aria-label')
      .and('contain', 'Official website of the United States government')

    cy.get('div.usa-accordion')
      .should('have.attr', 'class')
      .and('equal', 'usa-accordion')

    cy.get('header.usa-banner__header')
      .should('have.attr', 'class')
      .and('equal', 'usa-banner__header')

    cy.get('.usa-banner__inner')
      .should('have.attr', 'class')
      .and('equal', 'usa-banner__inner')

    cy.get('img.usa-banner__header-flag')
      .should('have.attr', 'alt', '')
      .and('have.attr', 'src', '/assets/img/us_flag_small.png')
      .and('have.attr', 'aria-hidden', 'true')

    cy.get('.usa-banner__header-text').should(
      'contain',
      'An official website of the United States government'
    )

    // Check that the default grid classes exist.
    cy.get('.grid-col-auto').should('exist')
    cy.get('.grid-col-fill').should('exist')
    cy.get(`.tablet\\:grid-col-auto`).and('have.attr', 'aria-hidden', 'true')

    cy.get('p.usa-banner__header-action').should(
      'contain',
      "Here's how you know"
    )
    cy.get('button.usa-banner__button')
      .as('button')
      .should('have.attr', 'type', 'button')
      .and('have.attr', 'aria-expanded')
      .and('contain', 'false')

    cy.get('@button').should('have.attr', 'aria-controls').and('not.be.empty')

    cy.get('@button')
      .should('have.attr', 'class')
      .and('equal', 'usa-accordion__button usa-banner__button')

    cy.get('@button').should('have.attr', 'aria-controls').and('not.be.empty')

    cy.get('span.usa-banner__button-text').should(
      'contain',
      "Here's how you know"
    )

    cy.get('.usa-banner__content')
      .as('bannerContent')
      .should('have.class', 'usa-accordion__content')
      .and('have.attr', 'id')

    cy.get('@bannerContent')
      .should('have.attr', 'class')
      .and('equal', 'usa-banner__content usa-accordion__content')

    cy.get('@bannerContent').and('not.be.visible').and('have.attr', 'hidden')
  })

  it('uses custom prop text', () => {
    cy.mount(UsaBanner, {
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
    cy.mount(UsaBanner, {
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
    cy.mount(UsaBanner, {
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
    // eslint-disable-next-line cypress/no-assigning-return-values
    const wrapper = cy
      .mount(UsaBanner, {
        props: {
          open: false,
          'onUpdate:open': async open => {
            await wrapper.vue().then(vm => {
              vm.setProps({ open: open })
            })
          },
        },
      })
      .its('wrapper')
      .as('wrapper')

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
    cy.mount(UsaBanner, {
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
    cy.mount(UsaBanner, {
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
