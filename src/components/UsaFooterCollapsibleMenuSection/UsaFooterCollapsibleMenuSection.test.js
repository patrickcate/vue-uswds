import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { reactive } from 'vue'
import UsaFooterCollapsibleMenu from '@/components/UsaFooterCollapsibleMenu'
import UsaFooterCollapsibleMenuSection from './UsaFooterCollapsibleMenuSection.vue'

describe('UsaFooterCollapsibleMenuSection', () => {
  let testItem

  beforeEach(() => {
    testItem = {
      text: 'Test Item 1',
      children: [
        {
          href: '/test-1/test-1-1',
          text: 'Test Item 1.1',
        },
        {
          href: '/test-1/test-1-2',
          text: 'Test Item 1.2',
        },
        {
          href: '/test-1/test-1-3',
          text: 'Test Item 1.3',
        },
      ],
    }
  })

  it('renders the component', () => {
    const wrapperComponent = {
      components: { UsaFooterCollapsibleMenu },
      props: ['items'],
      template: `<UsaFooterCollapsibleMenu :items="items"></UsaFooterCollapsibleMenu>`,
    }

    mount(wrapperComponent, {
      props: {
        items: [testItem],
      },
    })

    cy.get('section.usa-footer__primary-content--collapsible').should(
      'have.class',
      'usa-footer__primary-content'
    )

    cy.get('section > h4')
      .should('have.class', 'usa-footer__primary-link')
      .and('not.have.class', 'usa-footer__primary-link--button')
      .and('contain', 'Test Item 1')

    cy.get('section > button').should('not.exist')

    cy.get('section > ul')
      .as('submenu')
      .should('have.class', 'usa-list')
      .and('have.class', 'usa-list--unstyled')
      .and('be.visible')
      .and('not.have.css', 'display', 'none')
      .and('have.attr', 'id')

    cy.get('section > ul > li')
      .should('have.length', 3)
      .and('have.class', 'usa-footer__secondary-link')

    cy.get('section a').should('have.length', 3)

    cy.get('ul > li:nth-of-type(1) a')
      .should('have.attr', 'href', '/test-1/test-1-1')
      .and('contain', 'Test Item 1.1')

    cy.get('ul > li:nth-of-type(2) a')
      .should('have.attr', 'href', '/test-1/test-1-2')
      .and('contain', 'Test Item 1.2')

    cy.get('ul > li:nth-of-type(3) a')
      .should('have.attr', 'href', '/test-1/test-1-3')
      .and('contain', 'Test Item 1.3')

    cy.viewport('iphone-6')

    cy.get('section > h4').should('not.exist')

    cy.get('section > button')
      .as('button')
      .should('have.class', 'usa-footer__primary-link')
      .and('have.class', 'usa-footer__primary-link--button')
      .and('have.attr', 'aria-expanded', 'false')
      .and('have.attr', 'type', 'button')
      .and('have.attr', 'aria-controls')

    cy.get('section > button').should('contain', 'Test Item 1')

    cy.get('@submenu').and('have.css', 'display', 'none').and('not.be.visible')

    cy.get('section > ul > li')
      .should('have.length', 3)
      .and('have.class', 'usa-footer__secondary-link')

    cy.get('section a').should('have.length', 3)

    cy.get('ul > li:nth-of-type(1) a')
      .should('have.attr', 'href', '/test-1/test-1-1')
      .and('contain', 'Test Item 1.1')

    cy.get('ul > li:nth-of-type(2) a')
      .should('have.attr', 'href', '/test-1/test-1-2')
      .and('contain', 'Test Item 1.2')

    cy.get('ul > li:nth-of-type(3) a')
      .should('have.attr', 'href', '/test-1/test-1-3')
      .and('contain', 'Test Item 1.3')

    cy.get('@button').click().should('have.attr', 'aria-expanded', 'true')

    cy.get('@submenu').and('not.have.css', 'display', 'none').and('be.visible')

    cy.get('@button').click().should('have.attr', 'aria-expanded', 'false')
    cy.get('@submenu').and('have.css', 'display', 'none').and('not.be.visible')

    cy.viewport('macbook-15')

    cy.get('section > h4')
      .should('have.class', 'usa-footer__primary-link')
      .and('not.have.class', 'usa-footer__primary-link--button')
      .and('contain', 'Test Item 1')

    cy.get('section > button').should('not.exist')

    cy.get('section a').should('have.length', 3)
    cy.get('@submenu').and('not.have.css', 'display', 'none').and('be.visible')
  })

  it('uses custom heading tag', () => {
    mount(UsaFooterCollapsibleMenuSection, {
      props: {
        item: testItem,
        headingTag: 'h3',
      },
      global: {
        provide: {
          menuSections: () => reactive({}),
          registerMenuSection: () => {},
          unregisterMenuSection: () => {},
          toggleMenuSection: () => {},
          footerMenuIsCollapsible: false,
        },
      },
    })

    cy.get('section > h3')
      .should('have.class', 'usa-footer__primary-link')
      .should('not.have.class', 'usa-footer__primary-link--button')
      .and('contain', 'Test Item 1')
  })

  it('does not render submenu items if not in item prop', () => {
    delete testItem.children

    mount(UsaFooterCollapsibleMenuSection, {
      props: {
        item: testItem,
      },
      global: {
        provide: {
          menuSections: () => reactive({}),
          registerMenuSection: () => {},
          unregisterMenuSection: () => {},
          toggleMenuSection: () => {},
          footerMenuIsCollapsible: false,
        },
      },
    })

    cy.get('section > ul').should('not.exist')
  })

  it('un-registers section when unmounted', () => {
    testItem.id = 'test-item-1'

    mount(UsaFooterCollapsibleMenuSection, {
      props: {
        item: testItem,
      },
      global: {
        provide: {
          menuSections: () => reactive({}),
          registerMenuSection: cy.stub().as('registerMenuSection'),
          unregisterMenuSection: cy.stub().as('unregisterMenuSection'),
          toggleMenuSection: () => {},
          footerMenuIsCollapsible: false,
        },
      },
    }).as('wrapper')

    cy.get('@registerMenuSection').should('be.calledWith', 'test-item-1')

    cy.get('section.usa-footer__primary-content--collapsible').should(
      'have.class',
      'usa-footer__primary-content'
    )

    cy.get('section > ul').should('have.id', 'test-item-1')

    cy.get('@wrapper').invoke('unmount')

    cy.get('@unregisterMenuSection').should('be.called')
  })

  it('uses correct `BaseLink` prop values', () => {
    testItem.children[0].href = null
    testItem.children[0].to = '/test-1/test-1-1'
    testItem.children[2].href = null
    testItem.children[2].to = '/test-1/test-1-3'
    testItem.children[2].routerComponentName = 'nuxt-link'

    mount(UsaFooterCollapsibleMenuSection, {
      props: {
        item: testItem,
      },
      global: {
        provide: {
          menuSections: () => reactive({}),
          registerMenuSection: () => {},
          unregisterMenuSection: () => {},
          toggleMenuSection: () => {},
          footerMenuIsCollapsible: false,
        },
      },
    })

    cy.get('ul > li:nth-of-type(1) a')
      .should('have.attr', 'to', '/test-1/test-1-1')
      .and('contain', 'Test Item 1.1')

    cy.get('ul > li:nth-of-type(2) a')
      .should('have.attr', 'href', '/test-1/test-1-2')
      .and('contain', 'Test Item 1.2')

    cy.get('ul > li:nth-of-type(3) nuxt-link')
      .should('have.attr', 'to', '/test-1/test-1-3')
      .and('contain', 'Test Item 1.3')
  })
})
