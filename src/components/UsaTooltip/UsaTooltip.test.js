import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaTooltip from './UsaTooltip.vue'

describe('UsaTooltip', () => {
  it('renders the component', () => {
    cy.mount(UsaTooltip, {
      props: {
        id: 'test-tooltip-id',
        label: 'Test tooltip label',
        customClasses: {},
      },
      slots: {
        default: () => 'Test tooltip trigger',
      },
    })

    cy.get('span.usa-tooltip').as('tooltip').should('exist')

    cy.get('span.usa-tooltip__trigger')
      .as('tooltipTrigger')
      .should('have.attr', 'tabindex', '0')
      .and('have.attr', 'aria-describedby', 'test-tooltip-id')
      .and('contain', 'Test tooltip trigger')

    cy.get('span.usa-tooltip__body')
      .as('tooltipLabel')
      .should('have.id', 'test-tooltip-id')
      .and('not.have.class', 'is-set')
      .and('not.have.class', 'is-visible')
      .and('have.attr', 'role', 'tooltip')
      .and('have.attr', 'aria-hidden', 'true')
      .and('have.class', 'usa-tooltip__body--bottom')
      .and('contain', 'Test tooltip label')
      .and('be.hidden')

    cy.get('@tooltipTrigger').trigger('mouseover')

    cy.get('@tooltipLabel')
      .should('be.visible')
      .and('have.class', 'is-set')
      .and('have.class', 'is-visible')
      .and('have.class', 'usa-tooltip__body--bottom')
      .and('have.attr', 'aria-hidden', 'false')
      .and('have.attr', 'style')

    cy.get('@tooltipTrigger').trigger('mouseout')

    cy.get('@tooltipLabel')
      .should('be.hidden')
      .and('not.have.class', 'is-set')
      .and('not.have.class', 'is-visible')
      .and('have.attr', 'aria-hidden', 'true')

    cy.get('@tooltipTrigger').focus()

    cy.get('@tooltipLabel')
      .should('be.visible')
      .and('have.class', 'is-set')
      .and('have.class', 'is-visible')
      .and('have.attr', 'aria-hidden', 'false')

    cy.get('@tooltipTrigger').blur()

    cy.get('@tooltipLabel')
      .should('be.hidden')
      .and('not.have.class', 'is-set')
      .and('not.have.class', 'is-visible')
      .and('have.attr', 'aria-hidden', 'true')

    cy.get('@tooltipTrigger').trigger('mouseover')

    cy.get('@tooltipLabel')
      .should('be.visible')
      .and('have.class', 'is-set')
      .and('have.class', 'is-visible')
      .and('have.attr', 'aria-hidden', 'false')

    cy.get('@tooltip').type('{esc}')

    cy.get('@tooltipLabel')
      .should('be.hidden')
      .and('not.have.class', 'is-set')
      .and('not.have.class', 'is-visible')
      .and('have.attr', 'aria-hidden', 'true')

    cy.get('@tooltipTrigger').focus()

    cy.get('@tooltipLabel')
      .should('be.visible')
      .and('have.class', 'is-set')
      .and('have.class', 'is-visible')
      .and('have.attr', 'aria-hidden', 'false')

    cy.get('@tooltip').type('{enter}')

    cy.get('@tooltipLabel')
      .should('be.hidden')
      .and('not.have.class', 'is-set')
      .and('not.have.class', 'is-visible')
      .and('have.attr', 'aria-hidden', 'true')
  })

  it('renders with custom tags, CSS classes, and label slot content', () => {
    cy.mount(UsaTooltip, {
      props: {
        wrapperTag: 'div',
        tag: 'nuxt-link',
        label: 'Test tooltip label',
        customClasses: {
          component: ['test-component-class'],
          label: ['test-label-class'],
        },
      },
      attrs: {
        to: '/test-link',
        class: 'test-tooltip-trigger-class',
      },
      slots: {
        default: () => 'Test tooltip trigger',
        label: () => 'Test label slot',
      },
    })

    cy.get('div.usa-tooltip')
      .and('have.class', 'test-component-class')
      .should('not.have.class', 'test-tooltip-trigger-class')
      .and('not.have.attr', 'to')

    cy.get('nuxt-link.usa-tooltip__trigger')
      .and('have.class', 'test-tooltip-trigger-class')
      .and('have.attr', 'aria-describedby', 'vuswds-id-global-usa-tooltip-1')
      .and('have.attr', 'to', '/test-link')
      .and('contain', 'Test tooltip trigger')

    cy.get('span.usa-tooltip__body')
      .should('have.id', 'vuswds-id-global-usa-tooltip-1')
      .and('have.class', 'test-label-class')
      .and('contain', 'Test label slot')
  })

  it('sets correct CSS class for each position', () => {
    const positions = ['top', 'bottom', 'left', 'right']

    positions.forEach(position => {
      const wrapperComponent = {
        components: { UsaTooltip },
        data() {
          return {
            position: position,
            label: 'Test tooltip label',
          }
        },
        template: `<div style="padding:150px;"><UsaTooltip :position="position" :label="label">Test tooltip trigger</UsaTooltip></div>`,
      }

      cy.mount(wrapperComponent, {}).its('wrapper').as('wrapper')

      cy.get('.usa-tooltip__body').and(
        'have.class',
        `usa-tooltip__body--${position}`
      )

      cy.get('@wrapper').invoke('unmount')
    })
  })

  it('warns in console about invalid `position` prop value', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaTooltip, {
      props: {
        position: 'notavalidposition',
        label: 'Test tooltip label',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notavalidposition' is not a valid tooltip position`
    )
  })
})
