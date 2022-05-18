import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaModal from './UsaModal.vue'

describe('UsaModal', () => {
  it('renders the component', () => {
    mount(UsaModal, {
      props: {
        visible: true,
        heading: 'Test Modal',
        customClasses: {
          focusTrap: ['test-focus-trap-class'],
          modal: ['test-modal-class'],
          overlay: ['test-overlay-class'],
          content: ['test-content-class'],
          main: ['test-main-class'],
          heading: ['test-heading-class'],
          description: ['test-description-class'],
          footer: ['test-footer-class'],
        },
      },
      slots: {
        default: () => 'Test modal component',
        footer: () => 'Test footer slot',
      },
    })

    cy.get('.js-focus-trap-wrapper').should(
      'have.class',
      'test-focus-trap-class'
    )
    cy.get('.usa-modal-wrapper')
      .should('have.class', 'is-visible')
      .should('have.attr', 'role')
      .and('contain', 'dialog')

    cy.get('.usa-modal')
      .should('have.class', 'test-modal-class')
      .and('have.attr', 'tabindex')
      .and('contain', '-1')

    cy.get('.usa-modal-overlay').should('have.class', 'test-overlay-class')
    cy.get('.usa-modal__content').should('have.class', 'test-content-class')
    cy.get('.usa-modal__main').should('have.class', 'test-main-class')

    cy.get('h2.usa-modal__heading')
      .should('have.class', 'test-heading-class')
      .and('contain', 'Test Modal')

    cy.get('.test-description-class')
      .should('exist')
      .and('contain', 'Test modal component')

    cy.get('.usa-modal__footer')
      .should('have.class', 'test-footer-class')
      .and('contain', 'Test footer slot')

    cy.get('button.usa-modal__close')
      .should('have.class', 'usa-button')
      .and('have.attr', 'aria-label')
      .and('contain', 'Close this window')
  })

  it('add `size` prop CSS class', () => {
    mount(UsaModal, {
      props: {
        visible: true,
        size: 'lg',
      },
    })

    cy.get('.usa-modal').should('have.class', 'usa-modal--lg')
  })

  it('`visible` prop toggles modal visibility', () => {
    const wrapper = mount(UsaModal, {
      props: {
        'onUpdate:visible': async currentlyVisible => {
          await wrapper.vue().then(vm => {
            vm.setProps({ visible: currentlyVisible })
          })
        },
      },
    }).as('wrapper')

    cy.get('.js-focus-trap-wrapper').should('not.exist')
    cy.get('.usa-modal-wrapper').should('not.exist')
    cy.get('.usa-modal-overlay').should('not.exist')
    cy.get('.usa-modal').should('not.exist')
    cy.get('body').should('not.have.class', 'usa-js-modal--active')
    cy.get('body > :not(.js-focus-trap-class)').should(
      'not.have.attr',
      'aria-hidden'
    )

    // Trigger model open with prop change.
    cy.get('@wrapper').invoke('setProps', { visible: true })
    cy.get('.js-focus-trap-wrapper').should('exist')
    cy.get('.usa-modal-wrapper').should('exist')
    cy.get('.usa-modal-overlay').should('exist')
    cy.get('body').should('have.class', 'usa-js-modal--active')
    cy.get('body > :not(.js-focus-trap-class)')
      .should('have.attr', 'aria-hidden')
      .and('contain', 'true')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:visible')
      })

    // Close modal with click on close button.
    cy.get('.usa-modal__close').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:visible')
        expect(vm.emitted()['update:visible']).to.have.lengthOf(1)
      })

    cy.get('.js-focus-trap-wrapper').should('not.exist')
    cy.get('.usa-modal-wrapper').should('not.exist')
    cy.get('.usa-modal-overlay').should('not.exist')
    cy.get('.usa-modal').should('not.exist')
    cy.get('body').should('not.have.class', 'usa-js-modal--active')
    cy.get('body > :not(.js-focus-trap-class)').should(
      'not.have.attr',
      'aria-hidden'
    )

    // Open modal again.
    cy.get('@wrapper').invoke('setProps', { visible: true })

    cy.get('.js-focus-trap-wrapper').should('exist')
    cy.get('.usa-modal-wrapper').should('exist')
    cy.get('.usa-modal-overlay').should('exist')
    cy.get('body').should('have.class', 'usa-js-modal--active')
    cy.get('body > :not(.js-focus-trap-class)')
      .should('have.attr', 'aria-hidden')
      .and('contain', 'true')

    // Close modal by clicking outside.
    cy.get('body').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:visible')
        expect(vm.emitted()['update:visible']).to.have.lengthOf(2)
      })

    cy.get('.js-focus-trap-wrapper').should('not.exist')
    cy.get('.usa-modal-wrapper').should('not.exist')
    cy.get('.usa-modal-overlay').should('not.exist')
    cy.get('.usa-modal').should('not.exist')
    cy.get('body').should('not.have.class', 'usa-js-modal--active')
    cy.get('body > :not(.js-focus-trap-class)').should(
      'not.have.attr',
      'aria-hidden'
    )

    // Open modal again.
    cy.get('@wrapper').invoke('setProps', { visible: true })

    cy.get('.js-focus-trap-wrapper').should('exist')
    cy.get('.usa-modal-wrapper').should('exist')
    cy.get('.usa-modal-overlay').should('exist')
    cy.get('body').should('have.class', 'usa-js-modal--active')
    cy.get('body > :not(.js-focus-trap-class)')
      .should('have.attr', 'aria-hidden')
      .and('contain', 'true')

    // Close modal by pressing escape key.
    cy.realPress('Escape')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:visible')
        expect(vm.emitted()['update:visible']).to.have.lengthOf(3)
      })

    cy.get('.js-focus-trap-wrapper').should('not.exist')
    cy.get('.usa-modal-wrapper').should('not.exist')
    cy.get('.usa-modal-overlay').should('not.exist')
    cy.get('.usa-modal').should('not.exist')
    cy.get('body').should('not.have.class', 'usa-js-modal--active')
    cy.get('body > :not(.js-focus-trap-class)').should(
      'not.have.attr',
      'aria-hidden'
    )
  })

  it('`forceAction` prop limits modal close options', () => {
    const wrapper = mount(UsaModal, {
      props: {
        forceAction: true,
        'onUpdate:visible': async currentlyVisible => {
          await wrapper.vue().then(vm => {
            vm.setProps({ visible: currentlyVisible })
          })
        },
      },
      slots: {
        footer: () =>
          h(
            'button',
            {
              class: 'test-close-button',
              onClick: async () => {
                await wrapper.vue().then(vm => {
                  vm.setProps({ visible: false })
                })
              },
            },
            'Close Modal'
          ),
      },
    }).as('wrapper')

    cy.get('.js-focus-trap-wrapper').should('not.exist')
    cy.get('.usa-modal-wrapper').should('not.exist')
    cy.get('.usa-modal-overlay').should('not.exist')
    cy.get('.usa-modal').should('not.exist')
    cy.get('.usa-modal__close').should('not.exist')
    cy.get('body').should('not.have.class', 'usa-js-modal--active')
    cy.get('body').should('not.have.class', 'usa-js-no-click')
    cy.get('body > :not(.js-focus-trap-class)').should(
      'not.have.attr',
      'aria-hidden'
    )

    // Open modal.
    cy.get('@wrapper').invoke('setProps', { visible: true })

    // Close button shouldn't exist when `forceAction` is true.
    cy.get('.usa-modal__close').should('not.exist')

    cy.get('.js-focus-trap-wrapper').should('exist')
    cy.get('.usa-modal-wrapper').should('exist')
    cy.get('.usa-modal-overlay').should('exist')
    cy.get('body').should('have.class', 'usa-js-modal--active')
    cy.get('body').should('have.class', 'usa-js-no-click')
    cy.get('body > :not(.js-focus-trap-class)')
      .should('have.attr', 'aria-hidden')
      .and('contain', 'true')

    // Try closing modal by clicking outside.
    cy.get('body').click({ force: true })

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:visible')
      })

    cy.get('.usa-modal__close').should('not.exist')

    cy.get('.js-focus-trap-wrapper').should('exist')
    cy.get('.usa-modal-wrapper').should('exist')
    cy.get('.usa-modal-overlay').should('exist')
    cy.get('body').should('have.class', 'usa-js-modal--active')
    cy.get('body').should('have.class', 'usa-js-no-click')
    cy.get('body > :not(.js-focus-trap-class)')
      .should('have.attr', 'aria-hidden')
      .and('contain', 'true')

    // Try closing modal by pressing escape key.
    cy.realPress('Escape')

    cy.get('.usa-modal__close').should('not.exist')

    cy.get('.js-focus-trap-wrapper').should('exist')
    cy.get('.usa-modal-wrapper').should('exist')
    cy.get('.usa-modal-overlay').should('exist')
    cy.get('body').should('have.class', 'usa-js-modal--active')
    cy.get('body').should('have.class', 'usa-js-no-click')
    cy.get('body > :not(.js-focus-trap-class)')
      .should('have.attr', 'aria-hidden')
      .and('contain', 'true')

    cy.get('.test-close-button').click()

    cy.get('.js-focus-trap-wrapper').should('not.exist')
    cy.get('.usa-modal-wrapper').should('not.exist')
    cy.get('.usa-modal-overlay').should('not.exist')
    cy.get('.usa-modal').should('not.exist')
    cy.get('.usa-modal__close').should('not.exist')
    cy.get('body').should('not.have.class', 'usa-js-modal--active')
    cy.get('body').should('not.have.class', 'usa-js-no-click')
    cy.get('body > :not(.js-focus-trap-class)').should(
      'not.have.attr',
      'aria-hidden'
    )
  })

  it('keyword focus is trapped while modal is open', () => {
    const wrapper = mount(UsaModal, {
      props: {
        visible: true,
        'onUpdate:visible': async currentlyVisible => {
          await wrapper.vue().then(vm => {
            vm.setProps({ visible: currentlyVisible })
          })
        },
      },
      slots: {
        footer: () => [
          h(
            'button',
            {
              class: 'test-close-button',
            },
            'Close Modal'
          ),
          h(
            'button',
            {
              class: 'test-close-button-2',
            },
            'Also Close Modal'
          ),
        ],
      },
    }).as('wrapper')

    cy.get('.test-close-button').should('have.focus')

    // Tab to next button.
    cy.realPress('Tab')
    cy.get('.test-close-button-2').should('have.focus')

    // Tab to modal close button.
    cy.realPress('Tab')
    cy.get('.usa-modal__close').should('have.focus')

    // Tab back to the first button.
    cy.realPress('Tab')
    cy.get('.test-close-button').should('have.focus')
  })

  it('applies custom id and aria attributes', () => {
    mount(UsaModal, {
      props: {
        visible: true,
        id: 'test-id',
        heading: 'Test modal heading.',
        customClasses: {
          description: ['test-description-class'],
        },
      },
      slots: {
        default: () => 'Test modal content',
      },
    })

    cy.get('.usa-modal-wrapper').should('have.id', 'test-id-modal')
    cy.get('.usa-modal-wrapper')
      .should('have.attr', 'aria-labelledby')
      .and('contain', 'test-id-heading')
    cy.get('.usa-modal-wrapper')
      .should('have.attr', 'aria-describedby')
      .and('contain', 'test-id-description')

    cy.get('.usa-modal__heading').should('have.id', 'test-id-heading')
    cy.get('.test-description-class').should('have.id', 'test-id-description')
  })

  it('should not have aria attributes if no content', () => {
    mount(UsaModal, {
      props: {
        visible: true,
        id: 'test-id',
        customClasses: {
          description: ['test-description-class'],
        },
      },
    })

    cy.get('.usa-modal-wrapper').should('have.id', 'test-id-modal')
    cy.get('.usa-modal-wrapper').should('not.have.attr', 'aria-labelledby')

    cy.get('.usa-modal-wrapper').should('not.have.attr', 'aria-describedby')

    cy.get('.usa-modal__heading').should('not.exist')
    cy.get('.test-description-class').should('not.exist')

    // Footer slot should not exist if slot is not used.
    cy.get('.usa-modal__footer').should('not.exist')
  })

  it('warns in console about invalid size prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaModal, {
      props: {
        visible: true,
        size: 'notasize',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notasize' is not a valid modal size`
    )
  })

  it('uses custom close button label text', () => {
    mount(UsaModal, {
      props: {
        visible: true,
        closeButtonLabel: 'Test close button label',
      },
    })

    cy.get('.usa-modal__close')
      .should('have.attr', 'aria-label')
      .and('contain', 'Test close button label')
  })

  it('renders close button slot', () => {
    mount(UsaModal, {
      props: {
        visible: true,
      },
      slots: {
        closeButton: () =>
          h('button', { class: 'test-close-slot' }, 'Custom close button'),
      },
    })

    cy.get('button.test-close-slot').should('contain', 'Custom close button')
  })

  it('heading slot content overrides heading prop', () => {
    mount(UsaModal, {
      props: {
        visible: true,
        heading: 'Modal heading',
        headingTag: 'h4',
      },
      slots: {
        heading: () => 'Test custom modal heading',
      },
    })

    cy.get('h4').should('contain', 'Test custom modal heading')
  })
})
