import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import { mount } from '@cypress/vue'
import UsaPagination from './UsaPagination.vue'
import UsaPaginationArrow from '@/components/UsaPaginationArrow'

function generateTestItems(numberOfItems, contents) {
  const items = []

  for (let i = 0; i < numberOfItems; i++) {
    let link = { ...contents }

    if (link.to) {
      link.to = link.to.replace('#', i + 1)
    }

    if (link.href) {
      link.href = link.href.replace('#', i + 1)
    }

    items.push(link)
  }

  return items
}

describe('UsaPagination', () => {
  beforeEach(() => {
    // Set viewport large enough that the previous/next links will always show.
    // The are hidden on smaller screens.
    cy.viewport('ipad-mini')
  })

  it('renders the component', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 2,
        items: generateTestItems(8, {}),
      },
    })

    cy.get('li.usa-pagination__item:nth-child(1)').as('itemPrevious')
    cy.get('li.usa-pagination__item:nth-child(2)').as('item1')
    cy.get('li.usa-pagination__item:nth-child(3)').as('item2')
    cy.get('li.usa-pagination__item:nth-child(4)').as('item3')
    cy.get('li.usa-pagination__item:nth-child(5)').as('item4')
    cy.get('li.usa-pagination__item:nth-child(6)').as('item5')
    cy.get('li.usa-pagination__item:nth-child(7)').as('item6')
    cy.get('li.usa-pagination__item:nth-child(8)').as('item7')
    cy.get('li.usa-pagination__item:nth-child(9)').as('itemNext')

    cy.get('nav.usa-pagination').should('have.attr', 'aria-label', 'Pagination')

    cy.get('ul.usa-pagination__list li').should('have.length', 9)

    cy.get('@itemPrevious')
      .should('have.class', 'usa-pagination__arrow')
      .children()
      .should('have.class', 'usa-pagination__link')
      .and('have.class', 'usa-pagination__previous-page')
      .and('have.attr', 'aria-label', 'Previous page')

    cy.get('@itemPrevious')
      .find('svg')
      .should('have.class', 'usa-icon')
      .and('have.attr', 'aria-hidden', 'true')
      .and('have.attr', 'role', 'img')

    cy.get('@itemPrevious')
      .find('svg use')
      .should(
        'have.attr',
        'xlink:href',
        '/assets/img/sprite.svg#navigate_before'
      )

    cy.get('@itemPrevious').find('span').should('contain', 'Previous')

    cy.get('@item1')
      .should('have.class', 'usa-pagination__page-no')
      .children()
      .should('have.class', 'usa-pagination__button')
      .and('have.attr', 'aria-label', 'First page, page 1')

    cy.get('@item2').children().should('have.attr', 'aria-current', 'page')

    for (let i = 2; i <= 5; i++) {
      cy.get(`@item${i}`)
        .should('have.class', 'usa-pagination__page-no')
        .children()
        .should('have.class', 'usa-pagination__button')
        .and('have.attr', 'aria-label', `Page ${i}`)
    }

    cy.get('@item6')
      .should('have.class', 'usa-pagination__overflow')
      .and('not.have.attr', 'role', 'presentation')
      .and('have.attr', 'aria-label', 'ellipsis indicating non-visible pages')
      .get('@item6')
      .find('span')
      .should('contain', '…')

    cy.get('@item7')
      .should('have.class', 'usa-pagination__page-no')
      .children()
      .should('have.class', 'usa-pagination__button')
      .and('have.attr', 'aria-label', 'Last page, page 8')

    cy.get('@itemNext')
      .should('have.class', 'usa-pagination__arrow')
      .children()
      .should('have.class', 'usa-pagination__link')
      .and('have.class', 'usa-pagination__next-page')
      .and('have.attr', 'aria-label', 'Next page')

    cy.get('@itemNext')
      .find('svg')
      .should('have.class', 'usa-icon')
      .and('have.attr', 'aria-hidden', 'true')
      .and('have.attr', 'role', 'img')

    cy.get('@itemNext')
      .find('svg use')
      .should('have.attr', 'xlink:href', '/assets/img/sprite.svg#navigate_next')

    cy.get('@itemNext').find('span').should('contain', 'Next')
  })

  it('does not show the previous/next links on the first/last pages', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 1,
        items: generateTestItems(8, {}),
      },
    }).as('wrapper')

    cy.get('li.usa-pagination__item:nth-child(1)').as('itemPrevious')
    cy.get('li.usa-pagination__item:nth-child(9)').as('itemNext')

    // Start on first page.
    cy.get('@itemPrevious')
      .should('have.class', 'usa-pagination__item--hidden')
      .and('not.be.visible')

    // Go to second page.
    cy.get('@wrapper').invoke('setProps', { currentPage: 2 })

    cy.get('@itemPrevious')
      .should('not.have.class', 'usa-pagination__item--hidden')
      .and('be.visible')

    cy.get('@itemNext')
      .should('not.have.class', 'usa-pagination__item--hidden')
      .and('be.visible')

    // Go to last page.
    cy.get('@wrapper').invoke('setProps', { currentPage: 8 })

    cy.get('@itemNext')
      .should('have.class', 'usa-pagination__item--hidden')
      .and('not.be.visible')
  })

  it('when `unbound` prop is true, the last slot is always a overflow item unless on the last page', () => {
    mount(UsaPagination, {
      props: {
        unbounded: true,
        currentPage: 10,
        items: generateTestItems(20, {}),
      },
    }).as('wrapper')

    cy.get('li.usa-pagination__item:nth-child(8)').as('item7')

    cy.get('@item7')
      .should('have.class', 'usa-pagination__overflow')
      .and('not.have.attr', 'role', 'presentation')
      .and('have.attr', 'aria-label', 'ellipsis indicating non-visible pages')
      .find('span')
      .should('contain', '…')

    // Go to next to last page.
    cy.get('@wrapper').invoke('setProps', { currentPage: 19 })
    cy.get('@item7')
      .should('have.class', 'usa-pagination__overflow')
      .and('not.have.attr', 'role', 'presentation')
      .and('have.attr', 'aria-label', 'ellipsis indicating non-visible pages')
      .find('span')
      .should('contain', '…')

    // Go to last page.
    cy.get('@wrapper').invoke('setProps', { currentPage: 20 })
    cy.get('@item7')
      .should('not.have.class', 'usa-pagination__overflow')
      .and('not.have.attr', 'role', 'presentation')
      .and(
        'not.have.attr',
        'aria-label',
        'ellipsis indicating non-visible pages'
      )
      .children()
      .should('contain', '20')
  })

  it('shows custom aria label', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 1,
        items: generateTestItems(1, {}),
        ariaLabel: 'Test aria label',
      },
    })

    cy.get('nav.usa-pagination').should(
      'have.attr',
      'aria-label',
      'Test aria label'
    )
  })

  it('shows custom item labels', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 2,
        items: generateTestItems(10, {}),
        previousLinkText: 'TEST Previous',
        nextLinkText: 'TEST Next',
        firstPageAriaLabel: 'TEST First page, page %s',
        previousPageAriaLabel: 'TEST Previous page',
        numberPageAriaLabel: 'TEST Page %s',
        nextPageAriaLabel: 'TEST Next page',
        lastPageAriaLabel: 'TEST Last page, page %s',
      },
    })

    cy.get('li.usa-pagination__item:nth-child(1)').as('itemPrevious')
    cy.get('li.usa-pagination__item:nth-child(2)').as('item1')
    cy.get('li.usa-pagination__item:nth-child(3)').as('item2')
    cy.get('li.usa-pagination__item:nth-child(4)').as('item3')
    cy.get('li.usa-pagination__item:nth-child(5)').as('item4')
    cy.get('li.usa-pagination__item:nth-child(6)').as('item5')
    cy.get('li.usa-pagination__item:nth-child(8)').as('item7')
    cy.get('li.usa-pagination__item:nth-child(9)').as('itemNext')

    cy.get('@itemPrevious')
      .children()
      .should('have.attr', 'aria-label', 'TEST Previous page')

    cy.get('@itemPrevious').find('span').should('contain', 'TEST Previous')

    cy.get('@item1')
      .children()
      .should('have.attr', 'aria-label', 'TEST First page, page 1')

    for (let i = 2; i <= 5; i++) {
      cy.get(`@item${i}`)
        .children()
        .should('have.attr', 'aria-label', `TEST Page ${i}`)
    }

    cy.get('@item7')
      .children()
      .should('have.attr', 'aria-label', 'TEST Last page, page 10')

    cy.get('@itemNext')
      .children()
      .should('have.attr', 'aria-label', 'TEST Next page')

    cy.get('@itemNext').find('span').should('contain', 'TEST Next')
  })

  it('adds custom CSS classes', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 2,
        items: generateTestItems(8, {}),
        customClasses: {
          list: ['test-list-class'],
        },
      },
    })

    cy.get('ul.usa-pagination__list').should('have.class', 'test-list-class')
  })

  it('renders custom content in previous and next icon/label slots', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 2,
        items: generateTestItems(8, {}),
      },
      slots: {
        'previous-label': () => h('span', null, 'Test previous label slot'),
        'previous-icon': () => h('span', null, 'Test previous icon slot'),
        'next-icon': () => h('span', null, 'Test next icon slot'),
        'next-label': () => h('span', null, 'Test next label slot'),
      },
    })

    cy.get('.usa-pagination__list').should('contain', 'Test previous icon slot')
    cy.get('.usa-pagination__list').should(
      'contain',
      'Test previous label slot'
    )
    cy.get('.usa-pagination__list').should('contain', 'Test next icon slot')
    cy.get('.usa-pagination__list').should('contain', 'Test next label slot')
  })

  it('all items show if there are <= to 7 items total', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 1,
        items: generateTestItems(1, {}),
      },
    }).as('wrapper')

    for (let i = 1; i <= 7; i++) {
      for (let j = 1; j <= i; j++) {
        cy.get(`li.usa-pagination__item:nth-child(${j + 1})`)
          .children()
          .should('contain', j)
      }

      if (i !== 7) {
        cy.get('@wrapper').invoke('setProps', {
          items: generateTestItems(i + 1, {}),
        })
      }
    }
  })

  it('correct items show when clicking through available `bounded` pages', () => {
    const wrapper = mount(UsaPagination, {
      props: {
        currentPage: 1,
        items: generateTestItems(12, {}),
        'onUpdate:current-page': async currentPage => {
          await wrapper.vue().then(vm => {
            vm.setProps({ currentPage: currentPage })
          })
        },
      },
    }).as('wrapper')

    // Pages 1-4
    for (let i = 1; i <= 4; i++) {
      cy.get('li.usa-pagination__item:nth-child(1)')
        .as('itemPrevious')
        .should('exist')
      cy.get('li.usa-pagination__item:nth-child(2) > *')
        .as('item1')
        .should('exist')
      cy.get('li.usa-pagination__item:nth-child(3) > *')
        .as('item2')
        .should('exist')
      cy.get('li.usa-pagination__item:nth-child(4) > *')
        .as('item3')
        .should('exist')
      cy.get('li.usa-pagination__item:nth-child(5) > *')
        .as('item4')
        .should('exist')
      cy.get('li.usa-pagination__item:nth-child(6) > *')
        .as('item5')
        .should('exist')
      cy.get('li.usa-pagination__item:nth-child(7) > *')
        .as('item6')
        .should('exist')
      cy.get('li.usa-pagination__item:nth-child(8) > *')
        .as('item7')
        .should('exist')
      cy.get('li.usa-pagination__item:nth-child(9) > *')
        .as('itemNext')
        .should('exist')

      if (i > 1) {
        cy.get('@itemPrevious').should(
          'not.have.class',
          'usa-pagination__item--hidden'
        )
      } else {
        cy.get('@itemPrevious').should(
          'have.class',
          'usa-pagination__item--hidden'
        )
      }

      cy.get(`@item${i}`)
        .should('have.class', 'usa-current')
        .and('contain', `${i}`)

      for (let j = 1; j <= 5; j++) {
        cy.get(`@item${j}`).and('contain', `${j}`)
      }

      cy.get('@item6').should('contain', '…')
      cy.get('@item7')
        .should('not.have.class', 'usa-current')
        .and('contain', '12')

      cy.get('@itemNext').should(
        'not.have.class',
        'usa-pagination__item--hidden'
      )

      // Click on next item
      cy.get(`@item${i + 1}`).click()

      cy.get('@wrapper')
        .vue()
        .then(vm => {
          expect(vm.emitted()).to.have.property('update:currentPage')
          const currentPageEvent = vm.emitted('update:currentPage')
          expect(currentPageEvent[currentPageEvent.length - 1]).to.contain(
            i + 1
          )
          expect(currentPageEvent).to.have.length(i)
        })

      cy.get(`@item${i + 1}`)
        .should('have.class', 'usa-current')
        .should('contain', `${i + 1}`)

      cy.get(`@item${i}`).should('not.have.class', 'usa-current')
    }

    // Pages 5-8
    for (let i = 5; i < 9; i++) {
      cy.get(`li.usa-pagination__item:nth-child(5) > *`)
        .should('contain', `${i}`)
        .and('have.class', 'usa-current')
        .then(() => {
          cy.get('li.usa-pagination__item:nth-child(1)')
            .as('itemPrevious')
            .should('exist')
          cy.get('li.usa-pagination__item:nth-child(2) > *')
            .as('item1')
            .should('exist')
          cy.get('li.usa-pagination__item:nth-child(3) > *')
            .as('item2')
            .should('exist')
          cy.get('li.usa-pagination__item:nth-child(4) > *')
            .as('item3')
            .should('exist')
          cy.get('li.usa-pagination__item:nth-child(5) > *')
            .as('item4')
            .should('exist')
          cy.get('li.usa-pagination__item:nth-child(6) > *')
            .as('item5')
            .should('exist')
          cy.get('li.usa-pagination__item:nth-child(7) > *')
            .as('item6')
            .should('exist')
          cy.get('li.usa-pagination__item:nth-child(8) > *')
            .as('item7')
            .should('exist')
          cy.get('li.usa-pagination__item:nth-child(9)')
            .as('itemNext')
            .should('exist')

          cy.get('@itemPrevious').should(
            'not.have.class',
            'usa-pagination__item--hidden'
          )

          cy.get('@item1')
            .should('contain', '1')
            .and('not.have.class', 'usa-current')
          cy.get('@item2')
            .should('contain', '…')
            .and('not.have.class', 'usa-current')
          cy.get('@item3')
            .should('contain', `${i - 1}`)
            .and('not.have.class', 'usa-current')
          cy.get(`@item4`)
            .should('contain', `${i}`)
            .and('have.class', 'usa-current')
          cy.get(`@item5`)
            .should('contain', `${i + 1}`)
            .and('not.have.class', 'usa-current')
          cy.get('@item6')
            .should('contain', '…')
            .and('not.have.class', 'usa-current')
          cy.get('@item7')
            .should('contain', '12')
            .and('not.have.class', 'usa-current')

          cy.get('@itemNext').should(
            'not.have.class',
            'usa-pagination__item--hidden'
          )

          // Click on next item
          cy.get('.usa-current').parent().next().children().click()

          cy.get('@wrapper')
            .vue()
            .then(vm => {
              expect(vm.emitted()).to.have.property('update:currentPage')
              const currentPageEvent = vm.emitted('update:currentPage')
              expect(currentPageEvent[currentPageEvent.length - 1]).to.contain(
                i + 1
              )
              expect(currentPageEvent).to.have.length(i)
            })
        })
    }

    // Pages 9-12
    for (let i = 9; i < 12; i++) {
      cy.get(`li.usa-pagination__item:nth-child(${i - 4}) > *`)
        .should('have.class', 'usa-current')
        .then(() => {
          cy.get('li.usa-pagination__item:nth-child(1)').should('exist')
          cy.get('li.usa-pagination__item:nth-child(2) > *')
            .should('contain', '1')
            .and('not.have.class', 'usa-current')
          cy.get('li.usa-pagination__item:nth-child(3) > *')
            .should('contain', '…')
            .and('not.have.class', 'usa-current')
          cy.get('li.usa-pagination__item:nth-child(4) > *')
            .should('contain', `8`)
            .and('not.have.class', 'usa-current')
          cy.get('li.usa-pagination__item:nth-child(5) > *').should(
            'contain',
            '9'
          )
          cy.get('li.usa-pagination__item:nth-child(6) > *').should(
            'contain',
            '10'
          )
          cy.get('li.usa-pagination__item:nth-child(7) > *').should(
            'contain',
            '11'
          )
          cy.get('li.usa-pagination__item:nth-child(8) > *').should(
            'contain',
            '12'
          )
          cy.get('li.usa-pagination__item:nth-child(9)').should('exist')

          // Click on last item
          cy.get('.usa-current').parent().next().children().click()

          cy.get('@wrapper')
            .vue()
            .then(vm => {
              expect(vm.emitted()).to.have.property('update:currentPage')
              const currentPageEvent = vm.emitted('update:currentPage')
              expect(currentPageEvent[currentPageEvent.length - 1]).to.contain(
                i + 1
              )
              expect(currentPageEvent).to.have.length(i)
            })

          // Add guard to make sure DOM has been updated before moving on.
          cy.get(`li.usa-pagination__item:nth-child(${i - 3}) > *`).should(
            'have.class',
            'usa-current'
          )
          cy.get(`li.usa-pagination__item:nth-child(${i - 4}) > *`).should(
            'not.have.class',
            'usa-current'
          )
        })
    }
  })

  it('the total pages always matches the `total-pages` prop value', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 1,
        items: generateTestItems(2, {}),
      },
    }).as('wrapper')

    cy.get('li.usa-pagination__item:nth-last-child(2)')
      .children()
      .should('contain', 2)

    cy.get('@wrapper').invoke('setProps', { items: generateTestItems(7, {}) })
    cy.get('li.usa-pagination__item:nth-last-child(2)')
      .children()
      .should('contain', 7)

    cy.get('@wrapper').invoke('setProps', { items: generateTestItems(12, {}) })
    cy.get('li.usa-pagination__item:nth-last-child(2)')
      .children()
      .should('contain', 12)

    cy.get('@wrapper').invoke('setProps', { items: generateTestItems(100, {}) })
    cy.get('li.usa-pagination__item:nth-last-child(2)')
      .children()
      .should('contain', 100)
  })

  it('shows `previous` and `next` arrow slot content', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 4,
        items: generateTestItems(7, {}),
      },
      slots: {
        previous: () =>
          h(
            UsaPaginationArrow,
            {
              ariaLabel: 'Test aria label previous',
            },
            () => 'Test Previous Slot'
          ),
        next: () =>
          h(
            UsaPaginationArrow,
            {
              ariaLabel: 'Test aria label next',
            },
            () => 'Test Next Slot'
          ),
      },
    })

    cy.get('li.usa-pagination__item:nth-child(1)')
      .as('itemPrevious')
      .children()
      .should('contain', 'Test Previous Slot')
      .and('have.attr', 'aria-label', 'Test aria label previous')

    cy.get('li.usa-pagination__item:nth-last-child(1)')
      .as('itemNext')
      .children()
      .should('contain', 'Test Next Slot')
      .and('have.attr', 'aria-label', 'Test aria label next')
  })

  it('clicking next/previous link goes to the next/previous page', () => {
    const wrapper = mount(UsaPagination, {
      props: {
        currentPage: 1,
        items: generateTestItems(6, {}),
        'onUpdate:current-page': async currentPage => {
          await wrapper.vue().then(vm => {
            vm.setProps({ currentPage: currentPage })
          })
        },
      },
    })

    cy.get('li.usa-pagination__item:nth-child(1)').as('itemPrevious')
    cy.get('li.usa-pagination__item:nth-last-child(1)').as('itemNext')

    for (let i = 1; i < 6; i++) {
      cy.get(`li.usa-pagination__item:nth-child(${i + 1})`)
        .children()
        .should('have.class', 'usa-current')
      cy.get('@itemNext').children().click()
    }

    for (let i = 6; i > 1; i--) {
      cy.get(`li.usa-pagination__item:nth-child(${i + 1})`)
        .children()
        .should('have.class', 'usa-current')
      cy.get('@itemPrevious').children().click()
    }
  })

  it('page links renders as `router-link` if vue-router is detected', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 2,
        items: generateTestItems(6, {
          to: '/test/page/#',
        }),
      },
      global: {
        mocks: {
          $router: true,
        },
      },
    })

    cy.get('li.usa-pagination__item router-link').should('have.length', 8)
  })

  it('page links renders as `nuxt-link` if nuxt is detected', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 2,
        items: generateTestItems(6, {
          to: '/test/page/#',
        }),
      },
      global: {
        mocks: {
          $nuxt: true,
        },
      },
    })

    cy.get('li.usa-pagination__item nuxt-link').should('have.length', 8)
  })

  it('page links renders as `a` tags if `href` prop is used`', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 2,
        items: generateTestItems(6, {
          href: 'http://google.com',
        }),
      },
    })

    cy.get('li.usa-pagination__item a').should('have.length', 8)
  })

  it('page links renders as `button` tags if no `BaseLink` props are provided', () => {
    mount(UsaPagination, {
      props: {
        currentPage: 2,
        items: generateTestItems(6, {}),
      },
    })

    cy.get('li.usa-pagination__item button').should('have.length', 8)
  })

  it('props are bound to scoped slots', () => {
    const wrapper = mount(UsaPagination, {
      props: {
        currentPage: 4,
        items: generateTestItems(6, {}),
        'onUpdate:current-page': async currentPage => {
          await wrapper.vue().then(vm => {
            vm.setProps({ currentPage: currentPage })
          })
        },
      },
      slots: {
        previous: props =>
          h(
            'span',
            {
              'v-slot:previous': 'props',
            },
            `${props.isFirstPage ? 'true' : 'false'} - ${
              props.toPreviousPage ? 'true' : 'false'
            }`
          ),
        next: props =>
          h(
            'span',
            {
              'v-slot:next': 'props',
            },
            `${props.isLastPage ? 'true' : 'false'} - ${
              props.toNextPage ? 'true' : 'false'
            } `
          ),
      },
    })

    cy.get('li.usa-pagination__item:nth-of-type(1) button').as('firstItem')
    cy.get('li.usa-pagination__item:nth-last-of-type(1) button').as('lastItem')

    cy.get('.usa-pagination__list > span:first-of-type')
      .as('previousSlot')
      .should('contain', 'false - true')

    cy.get('.usa-pagination__list > span:last-of-type')
      .as('nextSlot')
      .should('contain', 'false - true')

    // Go to first item.
    cy.get('@firstItem').click()
    cy.get('@previousSlot').should('contain', 'true - true')

    // Go to last item.
    cy.get('@lastItem').click()
    cy.get('@nextSlot').should('contain', 'true - true')
  })

  it('warns in console of deprecated placeholder character and slots', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaPagination, {
      props: {
        currentPage: 2,
        items: generateTestItems(8, {}),
        firstPageAriaLabel: 'deprecated first page #',
        numberPageAriaLabel: 'deprecated page #',
        lastPageAriaLabel: 'deprecated last page #',
      },
      slots: {
        previousLabel: () =>
          h(
            'span',
            { class: 'test-previous-label' },
            'deprecated previous label slot'
          ),
        previousIcon: () =>
          h(
            'span',
            { class: 'test-previous-icon' },
            'deprecated previous icon slot'
          ),
        nextIcon: () =>
          h('span', { class: 'test-next-label' }, 'deprecated next label slot'),
        nextLabel: () =>
          h('span', { class: 'test-next-icon' }, 'deprecated next icon slot'),
      },
    })

    cy.get('li.usa-pagination__item:nth-child(2)').as('itemFirst')
    cy.get('li.usa-pagination__item:nth-child(3)').as('item2')
    cy.get('li.usa-pagination__item:nth-child(8)').as('itemLast')

    cy.get('span.test-previous-icon').should(
      'contain',
      'deprecated previous icon slot'
    )

    cy.get('span.test-previous-label').should(
      'contain',
      'deprecated previous label slot'
    )

    cy.get('span.test-next-label').should(
      'contain',
      'deprecated next label slot'
    )

    cy.get('span.test-next-icon').should('contain', 'deprecated next icon slot')

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `The 'previousIcon' slot is deprecated, use 'previous-icon' instead.`
    )

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `The 'previousLabel' slot is deprecated, use 'previous-label' instead.`
    )

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `The 'nextIcon' slot is deprecated, use 'next-icon' instead.`
    )
    cy.get('@consoleWarn').should(
      'be.calledWith',
      `The 'nextLabel' slot is deprecated, use 'next-label' instead.`
    )

    cy.get('span.test-next-label').should(
      'contain',
      'deprecated next label slot'
    )

    cy.get('@itemFirst')
      .children()
      .and('have.attr', 'aria-label', 'deprecated first page 1')

    cy.get('@item2')
      .children()
      .and('have.attr', 'aria-label', 'deprecated page 2')

    cy.get(`@itemLast`)
      .children()
      .and('have.attr', 'aria-label', 'deprecated last page 8')

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `The '#' placeholder is deprecated, use '%s' instead.`
    )
  })
})
