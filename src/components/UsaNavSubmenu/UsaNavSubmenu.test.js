import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { ref, reactive } from 'vue'
import UsaNavSubmenu from './UsaNavSubmenu.vue'

describe('UsaNavSubmenu', () => {
  it('renders the component', () => {
    cy.mount(UsaNavSubmenu, {
      slots: {
        default: () => 'Test submenu',
      },
      global: {
        provide: {
          dropdownId: ref('test-dropdown-id'),
          dropdownItems: reactive({
            'test-dropdown-id': false,
          }),
        },
      },
    })

    cy.get('ul.usa-nav__submenu')
      .as('submenu')
      .should('have.id', 'test-dropdown-id')

    cy.get('@submenu').should('not.have.class', 'usa-megamenu')
    cy.get('@submenu').should('have.attr', 'hidden')
    cy.get('@submenu').should('contain', 'Test submenu')
  })

  it('`hidden` attribute is not added when submenu is open', () => {
    cy.mount(UsaNavSubmenu, {
      slots: {
        default: () => 'Test submenu',
      },
      global: {
        provide: {
          dropdownId: ref('test-dropdown-id'),
          dropdownItems: reactive({
            'test-dropdown-id': true,
          }),
        },
      },
    })

    cy.get('ul.usa-nav__submenu').should('not.have.attr', 'hidden')
  })

  it('megamenu displays single column', () => {
    cy.mount(UsaNavSubmenu, {
      props: {
        customClasses: {
          gridRow: ['test-grid-row'],
          gridCol: ['test-grid-col'],
        },
      },
      slots: {
        default: () => 'Test submenu',
      },
      global: {
        provide: {
          isMegamenu: ref(true),
          dropdownId: ref('test-dropdown-id'),
          dropdownItems: reactive({
            'test-dropdown-id': false,
          }),
        },
      },
    })

    cy.get('div.usa-nav__submenu')
      .as('submenu')
      .should('have.class', 'usa-megamenu')
      .and('have.attr', 'hidden')

    cy.get('@submenu')
      .find('> div')
      .should('have.class', 'grid-row')
      .and('have.class', 'grid-gap-4')
      .and('have.class', 'test-grid-row')

    cy.get('@submenu').find('> div > div').as('col').should('have.length', 1)

    cy.get('@col')
      .should('have.class', 'usa-col')
      .and('have.class', 'test-grid-col')

    cy.get('@col')
      .find('ul.usa-nav__submenu-list')
      .should('contain', 'Test submenu')
  })

  it('megamenu displays multiple columns', () => {
    cy.mount(UsaNavSubmenu, {
      props: {
        cols: 3,
        customClasses: {
          gridRow: ['test-grid-row'],
          gridCol: ['test-grid-col'],
        },
      },
      slots: {
        default: () => 'should-not-exist',
        'col-1': () => 'column 1 submenu',
        'col-2': () => 'column 2 submenu',
        'col-3': () => 'column 3 submenu',
      },
      global: {
        provide: {
          isMegamenu: ref(true),
          dropdownId: ref('test-dropdown-id'),
          dropdownItems: reactive({
            'test-dropdown-id': true,
          }),
          'vueUswds.gridNamespace': 'g-',
        },
      },
    })

    cy.get('div.usa-nav__submenu').as('submenu').and('not.have.attr', 'hidden')

    cy.get('@submenu').should('not.contain', 'should-not-exist')
    cy.get('@submenu')
      .find('> div')
      .should('have.class', 'g-row')
      .and('have.class', 'g-gap-4')
      .and('have.class', 'test-grid-row')

    cy.get('@submenu').find('> div').as('cols')

    cy.get('@cols').find('> div').should('have.length', 3)
    cy.get('@cols')
      .find('> div:nth-of-type(1)')
      .as('col1')
      .should('have.class', 'usa-col')
      .and('have.class', 'test-grid-col')

    cy.get('@col1')
      .find('> ul.usa-nav__submenu-list')
      .should('contain', 'column 1 submenu')

    cy.get('@cols')
      .find('> div:nth-of-type(2)')
      .as('col2')
      .should('have.class', 'usa-col')
      .and('have.class', 'test-grid-col')

    cy.get('@col2')
      .find('> ul.usa-nav__submenu-list')
      .should('contain', 'column 2 submenu')

    cy.get('@cols')
      .find('> div:nth-of-type(3)')
      .as('col3')
      .should('have.class', 'usa-col')
      .and('have.class', 'test-grid-col')

    cy.get('@col3')
      .find('> ul.usa-nav__submenu-list')
      .should('contain', 'column 3 submenu')
  })

  it('warns in console about invalid megamenu column number', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaNavSubmenu, {
      props: {
        cols: 0,
        customClasses: {},
      },
      global: {
        provide: {
          isMegamenu: ref(true),
          dropdownId: ref('test-dropdown-id'),
          dropdownItems: reactive({
            'test-dropdown-id': true,
          }),
        },
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      'Column count must be greater than or equal to 1'
    )
  })
})
