import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaLanguageSelector from './UsaLanguageSelector.vue'
import {
  testLanguages1,
  testLanguages2,
} from './UsaLanguageSelector.fixtures.js'

describe('UsaLanguageSelector', () => {
  it('renders the component', () => {
    cy.mount(UsaLanguageSelector, {
      props: {
        modelValue: 'en',
        languages: testLanguages1,
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-language-container').should('exist')

    cy.get('ul.usa-language__primary').should('have.class', 'usa-accordion')
    cy.get('li.usa-language__primary-item').should('have.length', 1)
    cy.get('button.usa-language__link')
      .should('have.attr', 'aria-expanded', 'false')
      .and('have.attr', 'aria-controls')
    cy.get('button.usa-language__link').should('contain', 'Languages')
    cy.get('ul.usa-language__submenu')
      .should('have.attr', 'hidden', 'hidden')
      .and('not.be.visible')
      .and('have.attr', 'id')

    cy.get('li.usa-language__submenu-item').should('have.length', 4)

    // Language 1
    cy.get('.usa-language__submenu-item:nth-of-type(1) a')
      .should('have.attr', 'href', '/ar')
      .within(() => {
        cy.get('span')
          .should('have.attr', 'lang', 'ar')
          .and('contain', `(${testLanguages1[0].text})`)
        cy.get('strong').should('contain', testLanguages1[0].nativeText)
      })

    // Language 2
    cy.get('.usa-language__submenu-item:nth-of-type(2) a')
      .should('have.attr', 'to', '/zh')
      .within(() => {
        cy.get('span')
          .should('have.attr', 'lang', 'zh')
          .and('not.contain', `(${testLanguages1[1].text})`)
        cy.get('strong').should('contain', testLanguages1[1].text)
      })

    // Language 3
    cy.get('.usa-language__submenu-item:nth-of-type(3) button').should(
      'not.have.attr',
      'to',
    )
    cy.get('.usa-language__submenu-item:nth-of-type(3) button').should(
      'not.have.attr',
      'href',
    )
    cy.get('.usa-language__submenu-item:nth-of-type(3) button').within(() => {
      cy.get('span')
        .should('have.attr', 'lang', 'en')
        .and('not.contain', `(${testLanguages1[2].text})`)
      cy.get('strong').should('contain', testLanguages1[2].text)
    })

    // Language 4
    cy.get('.usa-language__submenu-item:nth-of-type(4) button').should(
      'not.have.attr',
      'to',
    )
    cy.get('.usa-language__submenu-item:nth-of-type(4) button').should(
      'not.have.attr',
      'href',
    )
    cy.get('.usa-language__submenu-item:nth-of-type(4) button').within(() => {
      cy.get('span')
        .should('have.attr', 'lang', 'es')
        .and('contain', `(${testLanguages1[3].text})`)
      cy.get('strong').should('contain', testLanguages1[3].nativeText)
    })

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.not.have.property('update:open')
        expect(vm.emitted()).to.not.have.property('update:modalValue')
      })

    // Open with click.
    cy.get('.usa-language__link').click()
    cy.get('.usa-language__link').should('have.attr', 'aria-expanded', 'true')

    cy.get('ul.usa-language__submenu')
      .should('be.visible')
      .and('not.have.attr', 'hidden')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:open')
        const currentOpenEvent = vm.emitted('update:open')
        expect(currentOpenEvent).to.have.length(1)
        expect(currentOpenEvent[currentOpenEvent.length - 1]).to.contain(true)
      })

    // Close with escape key.
    cy.realPress('Escape')

    cy.get('.usa-language__link').should('have.attr', 'aria-expanded', 'false')
    cy.get('ul.usa-language__submenu')
      .should('not.be.visible')
      .and('have.attr', 'hidden', 'hidden')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:open')
        const currentOpenEvent = vm.emitted('update:open')
        expect(currentOpenEvent).to.have.length(2)
        expect(currentOpenEvent[currentOpenEvent.length - 1]).to.contain(false)
      })

    // Open again
    cy.get('.usa-language__link').click()

    cy.get('.usa-language__link').should('have.attr', 'aria-expanded', 'true')
    cy.get('ul.usa-language__submenu')
      .should('be.visible')
      .and('not.have.attr', 'hidden')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:open')
        const currentOpenEvent = vm.emitted('update:open')
        expect(currentOpenEvent).to.have.length(3)
        expect(currentOpenEvent[currentOpenEvent.length - 1]).to.contain(true)
      })

    // Click outside to close.
    cy.get('html').click('bottomLeft', { force: true })

    cy.get('.usa-language__link').should('have.attr', 'aria-expanded', 'false')
    cy.get('ul.usa-language__submenu')
      .should('not.be.visible')
      .and('have.attr', 'hidden', 'hidden')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:open')
        const currentOpenEvent = vm.emitted('update:open')
        expect(currentOpenEvent).to.have.length(4)
        expect(currentOpenEvent[currentOpenEvent.length - 1]).to.contain(false)
      })

    // Open again
    cy.get('.usa-language__link').click()

    cy.get('.usa-language__link').should('have.attr', 'aria-expanded', 'true')
    cy.get('ul.usa-language__submenu')
      .should('be.visible')
      .and('not.have.attr', 'hidden')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:open')
        const currentOpenEvent = vm.emitted('update:open')
        expect(currentOpenEvent).to.have.length(5)
        expect(currentOpenEvent[currentOpenEvent.length - 1]).to.contain(true)
      })

    // Click spanish language option.
    cy.get('.usa-language__submenu-item:nth-of-type(4) button').click()

    cy.get('.usa-language__link').should('have.attr', 'aria-expanded', 'false')
    cy.get('ul.usa-language__submenu')
      .should('not.be.visible')
      .and('have.attr', 'hidden', 'hidden')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:open')
        const currentOpenEvent = vm.emitted('update:open')
        expect(currentOpenEvent).to.have.length(6)
        expect(currentOpenEvent[currentOpenEvent.length - 1]).to.contain(false)

        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentModalValueEvent = vm.emitted('update:modelValue')
        expect(currentModalValueEvent).to.have.length(1)
        expect(
          currentModalValueEvent[currentModalValueEvent.length - 1],
        ).to.contain('es')
      })

    cy.get('.usa-language__link').click()
    cy.get('.usa-language__submenu-item:nth-of-type(1) a').then(([el]) => {
      el.addEventListener('click', e => {
        e.preventDefault()
      })
    })
    cy.get('.usa-language__submenu-item:nth-of-type(1) a').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:modelValue')
        const currentModalValueEvent = vm.emitted('update:modelValue')
        expect(currentModalValueEvent).to.have.length(2)
        expect(
          currentModalValueEvent[currentModalValueEvent.length - 1],
        ).to.contain('ar')
      })
  })

  it('component uses custom props', () => {
    cy.mount(UsaLanguageSelector, {
      props: {
        modelValue: 'ar',
        open: true,
        languages: testLanguages1,
        variant: 'unstyled',
        size: 'small',
        id: 'test-lang-selector-id',
        customClasses: {
          primary: ['test-primary-class'],
          primaryItem: ['test-primary-item-class'],
          button: ['test-button-class'],
          submenu: ['test-submenu-class'],
          submenuItem: ['test-submenu-item-class'],
          link: ['test-link-class'],
        },
      },
      slots: {
        default: 'Test Lang',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-language-container').should(
      'have.class',
      'usa-language--small',
    )

    cy.get('.usa-language__primary').should('have.class', 'test-primary-class')
    cy.get('.usa-language__primary-item').should(
      'have.class',
      'test-primary-item-class',
    )
    cy.get('.usa-language__link').should('have.class', 'test-button-class')
    cy.get('.usa-language__submenu').should('have.class', 'test-submenu-class')
    cy.get('.usa-language__submenu-item').should(
      'have.class',
      'test-submenu-item-class',
    )
    cy.get('.usa-language__submenu-item a').should(
      'have.class',
      'test-link-class',
    )

    cy.get('.usa-language__link')
      .should('have.attr', 'aria-expanded', 'true')
      .and('have.attr', 'aria-controls', 'test-lang-selector-id')
      .and('contain', 'Test Lang')
    cy.get('.usa-language__submenu')
      .should('be.visible')
      .and('have.id', 'test-lang-selector-id')
      .and('not.have.attr', 'hidden')
  })

  it('component render toggle button when two languages are used', () => {
    const wrapperComponent = {
      components: { UsaLanguageSelector },
      data() {
        return {
          modelValue: 'es',
          languages: testLanguages2,
          customClasses: {
            button: ['test-button-class'],
          },
        }
      },
      template: `
        <UsaLanguageSelector
          v-model="modelValue"
          :languages="languages"
          :custom-classes="{ button: ['test-button-class'] }"
        ></UsaLanguageSelector>`,
    }

    cy.mount(wrapperComponent, {}).its('wrapper').as('wrapper')

    cy.get('.usa-language-container').should('exist')
    cy.get('button.usa-button').should('have.class', 'test-button-class')
    cy.get('button span')
      .should('have.attr', 'lang', testLanguages2[1].langCode)
      .and('contain', testLanguages2[1].nativeText)

    cy.get('button').click()

    cy.get('button span')
      .should('have.attr', 'lang', testLanguages2[0].langCode)
      .and('contain', testLanguages2[0].text)
  })

  it('warns in console about invalid prop values', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaLanguageSelector, {
      props: {
        modelValue: 'en',
        languages: [
          {
            href: '/en',
          },
        ],
        variant: 'notvariant',
        size: 'notsize',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      'A least two languages must be provided',
    )
    cy.get('@consoleWarn').should(
      'be.calledWith',
      'A `lang` property is required for each language',
    )
    cy.get('@consoleWarn').should(
      'be.calledWith',
      'A `text` and/or `nativeText` property is required for each language',
    )
    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notvariant' is not a valid language selector variant`,
    )
    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notsize' is not a valid language selector size`,
    )
  })
})
