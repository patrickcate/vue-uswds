import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h, toRaw } from 'vue'
import UsaAccordion from './UsaAccordion.vue'
import UsaAccordionItem from '@/components/UsaAccordionItem'

describe('UsaAccordion', () => {
  it('renders the component', () => {
    cy.mount(UsaAccordion, {
      slots: {
        default: () => [
          h(UsaAccordionItem, { label: 'Accordion 1' }, () =>
            h('p', 'Accordion 1'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 2' }, () =>
            h('p', 'Accordion 2'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 3' }, () =>
            h('p', 'Accordion 3'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 4' }, () =>
            h('p', 'Accordion 4'),
          ),
        ],
      },
    })

    cy.get('.usa-accordion')
      .should('not.have.class', 'usa-accordion--bordered')
      .and('not.have.attr', 'aria-multiselectable')

    const items = [1, 2, 3, 4]

    items.forEach(item => {
      const id = `vuswds-id-global-usa-accordion-item-${item}`

      cy.get(`h2.usa-accordion__heading:nth-of-type(${item})`).should('exist')
      cy.get(
        `h2.usa-accordion__heading:nth-of-type(${item}) button.usa-accordion__button`,
      )
        .should('contain', `Accordion ${item}`)
        .and('have.attr', 'aria-expanded')
        .and('contain', 'false')

      cy.get(
        `h2.usa-accordion__heading:nth-of-type(${item}) button.usa-accordion__button`,
      )
        .should('have.attr', 'aria-controls')
        .and('contain', id)

      cy.get(`.usa-accordion__content:nth-of-type(${item})`)
        .should('have.id', id)
        .and('contain', `Accordion ${item}`)
        .and('have.attr', 'hidden')

      cy.get(`#${id}`).should('have.length', 1)
    })
  })

  it('add bordered CSS class', () => {
    cy.mount(UsaAccordion, {
      props: {
        bordered: true,
      },
    })

    cy.get('.usa-accordion').should('have.class', 'usa-accordion--bordered')
  })

  it('add `aria-multiselectable` attribute', () => {
    cy.mount(UsaAccordion, {
      props: {
        multiselectable: true,
      },
    })

    cy.get('.usa-accordion')
      .should('have.attr', 'aria-multiselectable')
      .and('contain', 'true')
  })

  it('toggle accordion items when clicked', () => {
    cy.mount(UsaAccordion, {
      props: {},
      slots: {
        default: () => [
          h(UsaAccordionItem, { label: 'Accordion 1' }, () =>
            h('p', 'Accordion 1'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 2' }, () =>
            h('p', 'Accordion 2'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 3' }, () =>
            h('p', 'Accordion 3'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 4' }, () =>
            h('p', 'Accordion 4'),
          ),
        ],
      },
    })

    const items = ['first', 'second', 'third', 'fourth']

    cy.get('.usa-accordion__heading:nth-of-type(1) .usa-accordion__button').as(
      'firstButton',
    )
    cy.get('.usa-accordion__content:nth-of-type(1)').as('firstContent')

    cy.get('.usa-accordion__heading:nth-of-type(2) .usa-accordion__button').as(
      'secondButton',
    )
    cy.get('.usa-accordion__content:nth-of-type(2)').as('secondContent')

    cy.get('.usa-accordion__heading:nth-of-type(3) .usa-accordion__button').as(
      'thirdButton',
    )
    cy.get('.usa-accordion__content:nth-of-type(3)').as('thirdContent')

    cy.get('.usa-accordion__heading:nth-of-type(4) .usa-accordion__button').as(
      'fourthButton',
    )
    cy.get('.usa-accordion__content:nth-of-type(4)').as('fourthContent')

    items.forEach((item, index) => {
      cy.get(`@${item}Content`).should('have.attr', 'hidden')
      cy.get(`@${item}Content`).and('not.be.visible')
      cy.get(`@${item}Button`).click()
      cy.get(`@${item}Content`).should('not.have.attr', 'hidden')
      cy.get(`@${item}Content`).and('be.visible')

      if (index > 0) {
        cy.get(`@${items[index - 1]}Content`).should('have.attr', 'hidden')
        cy.get(`@${items[index - 1]}Content`).and('not.be.visible')
      }
    })
  })

  it('items stay open when `multiselectable` prop is used', () => {
    cy.mount(UsaAccordion, {
      props: { multiselectable: true },
      slots: {
        default: () => [
          h(UsaAccordionItem, { label: 'Accordion 1' }, () =>
            h('p', 'Accordion 1'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 2' }, () =>
            h('p', 'Accordion 2'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 3' }, () =>
            h('p', 'Accordion 3'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 4' }, () =>
            h('p', 'Accordion 4'),
          ),
        ],
      },
    })

    const items = ['first', 'second', 'third', 'fourth']

    cy.get('.usa-accordion__heading:nth-of-type(1) .usa-accordion__button').as(
      'firstButton',
    )
    cy.get('.usa-accordion__content:nth-of-type(1)').as('firstContent')

    cy.get('.usa-accordion__heading:nth-of-type(2) .usa-accordion__button').as(
      'secondButton',
    )
    cy.get('.usa-accordion__content:nth-of-type(2)').as('secondContent')

    cy.get('.usa-accordion__heading:nth-of-type(3) .usa-accordion__button').as(
      'thirdButton',
    )
    cy.get('.usa-accordion__content:nth-of-type(3)').as('thirdContent')

    cy.get('.usa-accordion__heading:nth-of-type(4) .usa-accordion__button').as(
      'fourthButton',
    )
    cy.get('.usa-accordion__content:nth-of-type(4)').as('fourthContent')

    items.forEach((item, index) => {
      cy.get(`@${item}Content`).should('have.attr', 'hidden')
      cy.get(`@${item}Content`).and('not.be.visible')
      cy.get(`@${item}Button`).click()
      cy.get(`@${item}Content`).should('not.have.attr', 'hidden')
      cy.get(`@${item}Content`).and('be.visible')

      if (index > 0) {
        cy.get(`@${items[index - 1]}Content`).should('not.have.attr', 'hidden')
        cy.get(`@${items[index - 1]}Content`).and('be.visible')
      }
    })
  })

  it('items with `open` prop are open by default', () => {
    cy.mount(UsaAccordion, {
      slots: {
        default: () => [
          h(UsaAccordionItem, { label: 'Accordion 1' }, () =>
            h('p', 'Accordion 1'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 2', open: true }, () =>
            h('p', 'Accordion 2'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 3' }, () =>
            h('p', 'Accordion 3'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 4' }, () =>
            h('p', 'Accordion 4'),
          ),
        ],
      },
    })

    const items = ['first', 'second', 'third', 'fourth']

    cy.get('.usa-accordion__content:nth-of-type(1)').as('firstContent')
    cy.get('.usa-accordion__content:nth-of-type(2)').as('secondContent')
    cy.get('.usa-accordion__content:nth-of-type(3)').as('thirdContent')
    cy.get('.usa-accordion__content:nth-of-type(4)').as('fourthContent')

    items.forEach(item => {
      if (item === 'second') {
        cy.get(`@${item}Content`).should('not.have.attr', 'hidden')
        cy.get(`@${item}Content`).and('be.visible')
      } else {
        cy.get(`@${item}Content`).should('have.attr', 'hidden')
        cy.get(`@${item}Content`).and('not.be.visible')
      }
    })
  })

  it('only last default open item allowed if not `multiselectable`', () => {
    cy.mount(UsaAccordion, {
      slots: {
        default: () => [
          h(UsaAccordionItem, { label: 'Accordion 1', open: true }, () =>
            h('p', 'Accordion 1'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 2', open: true }, () =>
            h('p', 'Accordion 2'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 3', open: true }, () =>
            h('p', 'Accordion 3'),
          ),
        ],
      },
    })

    const items = ['first', 'second', 'third']

    cy.get('.usa-accordion__heading:nth-of-type(1) .usa-accordion__button').as(
      'firstButton',
    )
    cy.get('.usa-accordion__content:nth-of-type(1)').as('firstContent')

    cy.get('.usa-accordion__heading:nth-of-type(2) .usa-accordion__button').as(
      'secondButton',
    )
    cy.get('.usa-accordion__content:nth-of-type(2)').as('secondContent')

    cy.get('.usa-accordion__heading:nth-of-type(3) .usa-accordion__button').as(
      'thirdButton',
    )
    cy.get('.usa-accordion__content:nth-of-type(3)').as('thirdContent')

    items.forEach(item => {
      if (item === 'third') {
        cy.get(`@${item}Button`)
          .should('have.attr', 'aria-expanded')
          .and('contain', 'true')
        cy.get(`@${item}Content`).should('not.have.attr', 'hidden')
        cy.get(`@${item}Content`).and('be.visible')
      } else {
        cy.get(`@${item}Button`)
          .should('have.attr', 'aria-expanded')
          .and('contain', 'false')
        cy.get(`@${item}Content`).should('have.attr', 'hidden')
        cy.get(`@${item}Content`).and('not.be.visible')
      }
    })
  })

  it('custom heading tag is used', () => {
    cy.mount(UsaAccordion, {
      props: {
        headingTag: 'h4',
      },
      slots: {
        default: () => [
          h(UsaAccordionItem, { label: 'Accordion 1' }, () =>
            h('p', 'Accordion 1'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 2' }, () =>
            h('p', 'Accordion 2'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 3' }, () =>
            h('p', 'Accordion 3'),
          ),
        ],
      },
    })

    cy.get('h4.usa-accordion__heading').should('have.length', 3)
  })

  it('emits accordion item changes', () => {
    cy.mount(UsaAccordion, {
      slots: {
        default: () => [
          h(UsaAccordionItem, { label: 'Accordion 1' }, () =>
            h('p', 'Accordion 1'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 2', open: true }, () =>
            h('p', 'Accordion 2'),
          ),
          h(UsaAccordionItem, { label: 'Accordion 3' }, () =>
            h('p', 'Accordion 3'),
          ),
        ],
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const currentAccordionItemsEvent = vm.emitted('update:accordionItems')
        expect(Object.keys(currentAccordionItemsEvent)).to.have.lengthOf(1)

        const accordionItemEventObject = toRaw(currentAccordionItemsEvent[0][0])
        expect(Object.keys(accordionItemEventObject)).to.have.lengthOf(3)

        const accordionItems = accordionItemEventObject
        const accordionItemKeys = Object.keys(accordionItems)

        expect(accordionItems[accordionItemKeys[0]]).to.equal(false)
        expect(accordionItems[accordionItemKeys[1]]).to.equal(true)
        expect(accordionItems[accordionItemKeys[2]]).to.equal(false)
      })

    cy.get(
      '.usa-accordion__heading:nth-of-type(1) .usa-accordion__button',
    ).click()

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        const currentAccordionItemsEvent = vm.emitted('update:accordionItems')
        expect(Object.keys(currentAccordionItemsEvent)).to.have.lengthOf(2)

        const accordionItemEventObject = toRaw(currentAccordionItemsEvent[1][0])
        expect(Object.keys(accordionItemEventObject)).to.have.lengthOf(3)

        const accordionItems = accordionItemEventObject
        const accordionItemKeys = Object.keys(accordionItems)

        expect(accordionItems[accordionItemKeys[0]]).to.equal(true)
        expect(accordionItems[accordionItemKeys[1]]).to.equal(false)
        expect(accordionItems[accordionItemKeys[2]]).to.equal(false)
      })
  })
})
