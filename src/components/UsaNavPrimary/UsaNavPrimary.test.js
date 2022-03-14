import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaNavPrimary from './UsaNavPrimary.vue'

describe('UsaNavPrimary', () => {
  const testItems = [
    {
      href: '/section-1',
      text: 'Section 1',
    },
    {
      href: 'https://google.com',
      text: 'Google',
      attrs: {
        target: '_blank',
      },
    },
    {
      to: {
        path: '/section-2',
      },
      text: 'Section 2',
      cols: 2,
      attrs: {
        'data-test': 'test',
      },
      children: [
        {
          to: '/section-2/page-1',
          text: 'Section 2 - Page 1',
          col: 1,
          routerComponentName: 'router-link',
        },
        {
          id: 'section-2-page-2',
          to: '/section-2/page-2',
          text: 'Section 2 - Page 2',
          col: 1,
          routerComponentName: 'nuxt-link',
        },
        {
          to: '/section-2/page-3',
          text: 'Section 2 - Page 3',
          routerComponentName: 'g-link',
          attrs: {
            target: '_blank',
          },
          col: 1,
          children: [],
        },
        {
          to: '/section-2/page-4',
          text: 'Section 2 - Page 4',
          col: 2,
          children: [
            {
              href: '/section-2/page-4/sub-section-1',
              text: 'Section 2 - Page 4 - Sub Section 1',
              col: 1,
            },
          ],
        },
        {
          href: '/section-2/page-5',
          text: 'Section 2 - Page 5',
          col: 2,
        },
      ],
    },
    {
      to: {
        path: '/section-3',
      },
      text: 'Section 3',
      children: [
        {
          href: '/section-3/page-1',
          text: 'Section 3 - Page 1',
        },
      ],
    },
  ]

  it('renders the component', () => {
    mount(UsaNavPrimary, {
      props: {
        items: [
          {
            text: 'Test primary nav items',
          },
        ],
      },
      slots: {
        default: ({ items }) => `${items[0].text}`,
      },
    })

    cy.get('ul.usa-nav__primary')
      .should('have.class', 'usa-accordion')
      .and('contain', 'Test primary nav items')
  })

  it('non-megamenu from items', () => {
    mount(UsaNavPrimary, {
      props: {
        items: testItems,
      },
    })

    cy.get('.usa-nav__primary > li.usa-nav__primary-item').should(
      'have.length',
      4
    )

    // Item 1
    cy.get('.usa-nav__primary > li:nth-of-type(1').as('item1')

    cy.get('@item1')
      .find('> a')
      .as('link1')
      .should('have.class', 'usa-nav__link')

    cy.get('@link1').should('have.attr', 'href').and('contain', '/section-1')

    cy.get('@link1').find('> span').should('contain', 'Section 1')

    // Item 2
    cy.get('.usa-nav__primary > li:nth-of-type(2').as('item2')

    cy.get('@item2')
      .find('> a')
      .as('link2')
      .should('have.class', 'usa-nav__link')

    cy.get('@link2')
      .should('have.attr', 'href')
      .and('contain', 'https://google.com')
    cy.get('@link2').should('have.attr', 'target').and('contain', '_blank')

    cy.get('@link2').find('> span').should('contain', 'Google')

    // Item 3
    cy.get('.usa-nav__primary > li:nth-of-type(3').as('item3')

    cy.get('@item3')
      .find('> button')
      .as('dropdownButton1')
      .should('have.class', 'usa-nav__link')
      .and('have.class', 'usa-accordion__button')

    cy.get('@dropdownButton1')
      .should('have.attr', 'data-test')
      .and('contain', 'test')
    cy.get('@dropdownButton1')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownButton1')
      .should('have.attr', 'aria-controls')
      .and('contain', '__vuswds-id-global-usa-nav-dropdown-')

    cy.get('@dropdownButton1').find('> span').should('contain', 'Section 2')

    // Item 3 Submenu
    cy.get('@item3')
      .find('> ul')
      .as('submenu1')
      .should('have.class', 'usa-nav__submenu')
      .and('have.attr', 'id')
      .and('contain', '__vuswds-id-global-usa-nav-dropdown-')
    cy.get('@submenu1').should('have.attr', 'hidden')

    // Item 3-1
    cy.get('@submenu1')
      .find('> li.usa-nav__submenu-item')
      .should('have.length', 5)

    // Submenu Item 1
    cy.get('@submenu1').find('> li:nth-of-type(1)').as('submenuItem1')

    cy.get('@submenuItem1')
      .find('> router-link')
      .as('submenuLink1')
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-1')

    cy.get('@submenuLink1').should('contain', 'Section 2 - Page 1')

    // Submenu Item 2
    cy.get('@submenu1').find('> li:nth-of-type(2)').as('submenuItem2')

    cy.get('@submenuItem2')
      .find('> nuxt-link')
      .as('submenuLink2')
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-2')

    cy.get('@submenuLink2').should('contain', 'Section 2 - Page 2')

    // Submenu Item 3
    cy.get('@submenu1').find('> li:nth-of-type(3)').as('submenuItem3')

    cy.get('@submenuItem3')
      .find('> g-link')
      .as('submenuLink3')
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-3')

    cy.get('@submenuLink3')
      .should('have.attr', 'target')
      .and('contain', '_blank')
    cy.get('@submenuLink3').should('contain', 'Section 2 - Page 3')

    // Submenu Item 4
    cy.get('@submenu1').find('> li:nth-of-type(4)').as('submenuItem4')

    cy.get('@submenuItem4')
      .find('> a')
      .as('submenuLink4')
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-4')

    cy.get('@submenuLink4').should('contain', 'Section 2 - Page 4')
    cy.get('@submenuLink4').children().should('have.length', 0)

    // Submenu Item 5
    cy.get('@submenu1').find('> li:nth-of-type(5)').as('submenuItem5')

    cy.get('@submenuItem5')
      .find('> a')
      .as('submenuLink5')
      .should('have.attr', 'href')
      .and('contain', '/section-2/page-5')

    cy.get('@submenuLink5').should('contain', 'Section 2 - Page 5')

    // Item 4
    cy.get('.usa-nav__primary > li:nth-of-type(4').as('item4')

    cy.get('@item4')
      .find('> button')
      .as('dropdownButton2')
      .should('have.class', 'usa-nav__link')
      .and('have.class', 'usa-accordion__button')

    cy.get('@dropdownButton2').should('not.have.attr', 'to')
    cy.get('@dropdownButton2')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownButton2')
      .should('have.attr', 'aria-controls')
      .and('contain', '__vuswds-id-global-usa-nav-dropdown-')

    cy.get('@dropdownButton2').find('> span').should('contain', 'Section 3')

    // Item 4 Submenu
    cy.get('@item4')
      .find('> ul')
      .as('submenu2')
      .should('have.class', 'usa-nav__submenu')
      .and('have.attr', 'id')
      .and('contain', '__vuswds-id-global-usa-nav-dropdown-')
    cy.get('@submenu2').should('have.attr', 'hidden')

    // Item 4-1
    cy.get('@submenu2')
      .find('> li.usa-nav__submenu-item')
      .should('have.length', 1)

    // Submenu Item 1
    cy.get('@submenu2').find('> li:nth-of-type(1)').as('submenuItem2')

    cy.get('@submenuItem2')
      .find('> a')
      .as('submenuLink6')
      .should('have.attr', 'href')
      .and('contain', '/section-3/page-1')

    cy.get('@submenuLink6').should('contain', 'Section 3 - Page 1')
  })

  it('megamenu from items', () => {
    mount(UsaNavPrimary, {
      props: {
        items: testItems,
      },
      global: {
        provide: {
          isMegamenu: true,
        },
      },
    })

    cy.get('.usa-nav__primary > li.usa-nav__primary-item').should(
      'have.length',
      4
    )

    // Item 1
    cy.get('.usa-nav__primary > li:nth-of-type(1').as('item1')

    cy.get('@item1')
      .find('> a')
      .as('link1')
      .should('have.class', 'usa-nav__link')

    cy.get('@link1').should('have.attr', 'href').and('contain', '/section-1')

    cy.get('@link1').find('> span').should('contain', 'Section 1')

    // Item 2
    cy.get('.usa-nav__primary > li:nth-of-type(2').as('item2')

    cy.get('@item2')
      .find('> a')
      .as('link2')
      .should('have.class', 'usa-nav__link')

    cy.get('@link2')
      .should('have.attr', 'href')
      .and('contain', 'https://google.com')
    cy.get('@link2').should('have.attr', 'target').and('contain', '_blank')

    cy.get('@link2').find('> span').should('contain', 'Google')

    // Item 3
    cy.get('.usa-nav__primary > li:nth-of-type(3').as('item3')

    cy.get('@item3')
      .find('> button')
      .as('dropdownButton1')
      .should('have.class', 'usa-nav__link')
      .and('have.class', 'usa-accordion__button')

    cy.get('@dropdownButton1')
      .should('have.attr', 'data-test')
      .and('contain', 'test')
    cy.get('@dropdownButton1')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownButton1')
      .should('have.attr', 'aria-controls')
      .and('contain', '__vuswds-id-global-usa-nav-dropdown-')

    cy.get('@dropdownButton1').find('> span').should('contain', 'Section 2')

    // Item 3 Submenu
    cy.get('@item3')
      .find('> div.usa-nav__submenu')
      .should('have.attr', 'hidden')
    cy.get('@item3')
      .find('> div.usa-nav__submenu')
      .should('have.attr', 'id')
      .and('contain', '__vuswds-id-global-usa-nav-dropdown-')

    cy.get('@item3')
      .find('> div.usa-nav__submenu > div')
      .should('have.class', 'grid-row')
      .and('have.class', 'grid-gap-4')

    cy.get('@item3')
      .find('> div.usa-nav__submenu > div')
      .children()
      .should('have.length', 2)
      .and('have.class', 'usa-col')

    cy.get('@item3')
      .find('> .usa-nav__submenu > div > .usa-col:nth-of-type(1)')
      .as('submenuCol1')

    cy.get('@submenuCol1')
      .find('> ul')
      .as('submenuCol1List')
      .should('have.class', 'usa-nav__submenu-list')

    // Item 3 - Col 1
    cy.get('@submenuCol1List')
      .find('> li.usa-nav__submenu-item')
      .should('have.length', 3)
      .and('have.class', 'usa-nav__submenu-item')

    // Submenu Item 1
    cy.get('@submenuCol1List')
      .find('> li.usa-nav__submenu-item:nth-of-type(1)')
      .as('submenuItem1')

    cy.get('@submenuItem1')
      .find('router-link')
      .as('submenuLink1')
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-1')

    cy.get('@submenuLink1').should('contain', 'Section 2 - Page 1')

    // Submenu Item 2
    cy.get('@submenuCol1List')
      .find('> li.usa-nav__submenu-item:nth-of-type(2)')
      .as('submenuItem2')

    cy.get('@submenuItem2')
      .find('nuxt-link')
      .as('submenuLink2')
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-2')

    cy.get('@submenuLink2').should('contain', 'Section 2 - Page 2')

    // Submenu Item 3
    cy.get('@submenuCol1List')
      .find('> li.usa-nav__submenu-item:nth-of-type(3)')
      .as('submenuItem3')

    cy.get('@submenuItem3')
      .find('g-link')
      .as('submenuLink3')
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-3')

    cy.get('@submenuLink3')
      .should('have.attr', 'target')
      .and('contain', '_blank')
    cy.get('@submenuLink3').should('contain', 'Section 2 - Page 3')

    // Item 3 - Col 2
    cy.get('@item3')
      .find('> .usa-nav__submenu > div > .usa-col:nth-of-type(2)')
      .as('submenuCol2')

    cy.get('@submenuCol2')
      .find('> ul')
      .as('submenuCol2List')
      .should('have.class', 'usa-nav__submenu-list')

    cy.get('@submenuCol2List')
      .find('> li.usa-nav__submenu-item')
      .should('have.length', 2)
      .and('have.class', 'usa-nav__submenu-item')

    // Submenu Item 4
    cy.get('@submenuCol2List')
      .find('> li.usa-nav__submenu-item:nth-of-type(1)')
      .as('submenuItem4')

    cy.get('@submenuItem4')
      .find('a')
      .as('submenuLink4')
      .should('have.attr', 'to')
      .and('contain', '/section-2/page-4')

    cy.get('@submenuLink4').should('contain', 'Section 2 - Page 4')
    cy.get('@submenuLink4').children().should('have.length', 0)

    // Submenu Item 5
    cy.get('@submenuCol2List').find('> li:nth-of-type(2)').as('submenuItem5')

    cy.get('@submenuItem5')
      .find('a')
      .as('submenuLink5')
      .should('have.attr', 'href')
      .and('contain', '/section-2/page-5')

    cy.get('@submenuLink5').should('contain', 'Section 2 - Page 5')

    // Item 4
    cy.get('.usa-nav__primary > li:nth-of-type(4').as('item4')

    cy.get('@item4')
      .find('> button')
      .as('dropdownButton2')
      .should('have.class', 'usa-nav__link')
      .and('have.class', 'usa-accordion__button')

    cy.get('@dropdownButton2').should('not.have.attr', 'to')
    cy.get('@dropdownButton2')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownButton2')
      .should('have.attr', 'aria-controls')
      .and('contain', '__vuswds-id-global-usa-nav-dropdown-')

    cy.get('@dropdownButton2').find('> span').should('contain', 'Section 3')

    // Item 3 Submenu
    cy.get('@item4')
      .find('> div.usa-nav__submenu')
      .should('have.attr', 'hidden')
    cy.get('@item4')
      .find('> div.usa-nav__submenu')
      .should('have.attr', 'id')
      .and('contain', '__vuswds-id-global-usa-nav-dropdown-')

    cy.get('@item4')
      .find('> div.usa-nav__submenu > div')
      .should('have.class', 'grid-row')
      .and('have.class', 'grid-gap-4')

    cy.get('@item4')
      .find('> div.usa-nav__submenu > div')
      .children()
      .should('have.length', 1)
      .and('have.class', 'usa-col')

    cy.get('@item4')
      .find('> .usa-nav__submenu > div > .usa-col:nth-of-type(1)')
      .as('submenuCol3')

    cy.get('@submenuCol3')
      .find('> ul')
      .as('submenuCol3List')
      .should('have.class', 'usa-nav__submenu-list')

    // Submenu Item 1
    cy.get('@submenuCol3List')
      .find('> li.usa-nav__submenu-item:nth-of-type(1)')
      .as('submenuItem6')

    cy.get('@submenuItem6')
      .find('a')
      .as('submenuLink6')
      .should('have.attr', 'href')
      .and('contain', '/section-3/page-1')

    cy.get('@submenuLink6').should('contain', 'Section 3 - Page 1')
  })

  it('escape key and clicking outside closes all dropdowns', () => {
    mount(UsaNavPrimary, {
      props: {
        items: testItems,
      },
    })

    cy.get('.usa-nav__primary > .usa-nav__primary-item:nth-of-type(3)').as(
      'dropdown'
    )

    cy.get('@dropdown').find('> button').as('dropdownButton')
    cy.get('@dropdown').find('> ul').as('dropdownMenu')

    cy.get('@dropdownButton')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)

    cy.get('@dropdownMenu').should('have.attr', 'hidden')

    cy.get('@dropdownButton').click()

    cy.get('@dropdownButton')
      .should('have.attr', 'aria-expanded')
      .and('contain', true)

    cy.get('@dropdownMenu').should('not.have.attr', 'hidden')

    cy.realPress('Escape')

    cy.get('@dropdownButton')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)

    cy.get('@dropdownMenu').should('have.attr', 'hidden')

    cy.get('@dropdownButton').click()

    cy.get('@dropdownButton')
      .should('have.attr', 'aria-expanded')
      .and('contain', true)

    cy.get('@dropdownMenu').should('not.have.attr', 'hidden')

    cy.get('html').click('topLeft')

    cy.get('@dropdownButton')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)

    cy.get('@dropdownMenu').should('have.attr', 'hidden')
  })

  it('dropdowns are multiselectable on mobile screens', () => {
    cy.viewport('iphone-6')

    mount(UsaNavPrimary, {
      props: {
        items: testItems,
      },
    })

    cy.get('.usa-nav__primary > .usa-nav__primary-item:nth-of-type(3)').as(
      'dropdown1'
    )
    cy.get('@dropdown1').find('> button').as('dropdownButton1')
    cy.get('@dropdown1').find('> ul').as('dropdownMenu1')

    cy.get('.usa-nav__primary > .usa-nav__primary-item:nth-of-type(4)').as(
      'dropdown2'
    )
    cy.get('@dropdown2').find('> button').as('dropdownButton2')
    cy.get('@dropdown2').find('> ul').as('dropdownMenu2')

    cy.get('@dropdownButton1')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownMenu1').should('have.attr', 'hidden')

    cy.get('@dropdownButton2')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownMenu2').should('have.attr', 'hidden')

    // Click first dropdown.
    cy.get('@dropdownButton1').click()

    cy.get('@dropdownButton1')
      .should('have.attr', 'aria-expanded')
      .and('contain', true)
    cy.get('@dropdownMenu1').should('not.have.attr', 'hidden')

    cy.get('@dropdownButton2')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownMenu2').should('have.attr', 'hidden')

    // Click second dropdown.
    cy.get('@dropdownButton2').click()

    cy.get('@dropdownButton1')
      .should('have.attr', 'aria-expanded')
      .and('contain', true)
    cy.get('@dropdownMenu1').should('not.have.attr', 'hidden')

    cy.get('@dropdownButton2')
      .should('have.attr', 'aria-expanded')
      .and('contain', true)
    cy.get('@dropdownMenu2').should('not.have.attr', 'hidden')

    // Click first dropdown again.
    cy.get('@dropdownButton1').click()

    cy.get('@dropdownButton1')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownMenu1').should('have.attr', 'hidden')

    cy.get('@dropdownButton2')
      .should('have.attr', 'aria-expanded')
      .and('contain', true)
    cy.get('@dropdownMenu2').should('not.have.attr', 'hidden')

    cy.get('@dropdownButton2').click()

    // Set for large screens.
    cy.viewport('macbook-15')

    cy.get('@dropdownButton1')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownMenu1').should('have.attr', 'hidden')

    cy.get('@dropdownButton2')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownMenu2').should('have.attr', 'hidden')

    // Click first dropdown.
    cy.get('@dropdownButton1').click()

    cy.get('@dropdownButton1')
      .should('have.attr', 'aria-expanded')
      .and('contain', true)
    cy.get('@dropdownMenu1').should('not.have.attr', 'hidden')

    cy.get('@dropdownButton2')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownMenu2').should('have.attr', 'hidden')

    // Click second dropdown.
    cy.get('@dropdownButton2').click()

    cy.get('@dropdownButton1')
      .should('have.attr', 'aria-expanded')
      .and('contain', false)
    cy.get('@dropdownMenu1').should('have.attr', 'hidden')

    cy.get('@dropdownButton2')
      .should('have.attr', 'aria-expanded')
      .and('contain', true)
    cy.get('@dropdownMenu2').should('not.have.attr', 'hidden')
  })

  it('clicking dropdown emits items in event', () => {
    mount(UsaNavPrimary, {
      props: {
        items: testItems,
      },
    }).as('wrapper')

    cy.get('.usa-nav__primary > .usa-nav__primary-item:nth-of-type(3)').as(
      'dropdown'
    )
    cy.get('@dropdown').find('> button').as('dropdownButton')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:items')
        const currentRangeEvent = vm.emitted('update:items')
        expect(currentRangeEvent).to.have.length(2)

        const dropdownIds = Object.keys(
          currentRangeEvent[currentRangeEvent.length - 1][0]
        )
        expect(currentRangeEvent[currentRangeEvent.length - 1][0]).to.contain({
          [dropdownIds[0]]: false,
          [dropdownIds[1]]: false,
        })
      })

    cy.get('@dropdown').click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:items')
        const currentRangeEvent = vm.emitted('update:items')
        expect(currentRangeEvent).to.have.length(3)

        const dropdownIds = Object.keys(
          currentRangeEvent[currentRangeEvent.length - 1][0]
        )
        expect(currentRangeEvent[currentRangeEvent.length - 1][0]).to.contain({
          [dropdownIds[0]]: true,
          [dropdownIds[1]]: false,
        })
      })
  })
})
