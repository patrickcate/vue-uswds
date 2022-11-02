import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaGraphicList from './UsaGraphicList.vue'
import UsaGraphicListRow from '@/components/UsaGraphicListRow'

describe('UsaGraphicList', () => {
  const GraphicListRows = {
    components: { UsaGraphicListRow },
    template: `
      <UsaGraphicListRow class="grid-row grid-gap">
        <div class="usa-media-block tablet:grid-col">
          <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
          <div class="usa-media-block__body">
            <h2 class="usa-graphic-list__heading">Graphic headings can vary.</h2>
            <p>Graphic headings can be used a few different ways, depending on what your landing page is for. Highlight your values, specific program areas, or results.</p>
          </div>
        </div>
        <div class="usa-media-block tablet:grid-col">
          <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
          <div class="usa-media-block__body">
            <h2 class="usa-graphic-list__heading">Stick to 6 or fewer words.</h2>
            <p>Keep body text to about 30 words. They can be shorter, but try to be somewhat balanced across all four. It creates a clean appearance with good spacing.</p>
          </div>
        </div>
      </UsaGraphicListRow>

      <UsaGraphicListRow class="grid-row grid-gap">
        <div class="usa-media-block tablet:grid-col">
          <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
          <div class="usa-media-block__body">
            <h2 class="usa-graphic-list__heading">Never highlight anything without a goal.</h2>
            <p>For anything you want to highlight here, understand what your users know now, and what activity or impression you want from them after they see it.</p>
          </div>
        </div>
        <div class="usa-media-block tablet:grid-col">
          <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
          <div class="usa-media-block__body">
            <h2 class="usa-graphic-list__heading">Could also have 2 or 6.</h2>
            <p>In addition to your goal, find out your users' goals. What do they want to know or do that supports your mission? Use these headings to show those.</p>
          </div>
        </div>
      </UsaGraphicListRow>
    `,
  }

  it('renders the component', () => {
    mount(UsaGraphicList, {
      slots: {
        default: () => h(GraphicListRows),
      },
    })
    cy.get('.usa-graphic-list').should('have.class', 'usa-section')
    cy.get('.grid-container').should('exist')
  })

  it('add variant CSS class', () => {
    mount(UsaGraphicList, {
      props: {
        variant: 'light',
      },
      slots: {
        default: () => h(GraphicListRows),
      },
    }).as('wrapper')

    cy.get('.usa-graphic-list').and('have.class', 'usa-section--light')
    cy.get('@wrapper').invoke('setProps', { variant: 'dark' })
    cy.get('.usa-graphic-list').and('have.class', 'usa-section--dark')
  })

  it('uses custom CSS Classes', () => {
    mount(UsaGraphicList, {
      props: {
        customClasses: {
          container: ['test-container-class'],
        },
      },
      slots: {
        default: () => h(GraphicListRows),
      },
    })

    cy.get('.test-container-class').should('exist')
  })

  it('`variant` prop is available in scoped slot', () => {
    mount(UsaGraphicList, {
      props: {
        variant: 'light',
      },
      slots: {
        default: props => h('span', {}, `variant is: ${props.variant}`),
      },
    }).as('wrapper')

    cy.get('.usa-graphic-list').should('contain', 'variant is: light')
    cy.get('@wrapper').invoke('setProps', { variant: 'dark' })
    cy.get('.usa-graphic-list').should('contain', 'variant is: dark')
  })

  it('warns in console about invalid variant prop', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaGraphicList, {
      props: {
        variant: 'notvariant',
      },
      slots: {
        default: () => 'Invalid Variant',
      },
    })

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notvariant' is not a valid graphic list variant`
    )
  })
})
