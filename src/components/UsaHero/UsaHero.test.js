import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaHero from './UsaHero.vue'

describe('UsaHero', () => {
  const testBackgroundImage =
    'https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.app.cloud.gov/preview/uswds/uswds/develop/dist/img/hero.png'

  const testAriaLabel = 'Test aria label'

  it('renders the component', () => {
    mount(UsaHero, {
      props: {
        ariaLabel: testAriaLabel,
        customClasses: {},
      },
    })

    cy.get('section.usa-hero')
      .as('hero')
      .should('have.attr', 'aria-label')
      .and('contain', testAriaLabel)

    cy.get('@hero').should('not.have.attr', 'style')

    cy.get('@hero')
      .find('.grid-container')
      .should('have.attr', 'class')
      .and('equals', 'grid-container')
  })

  it('sets correct background image', () => {
    mount(UsaHero, {
      props: {
        ariaLabel: testAriaLabel,
        backgroundImage: testBackgroundImage,
      },
    })

    cy.get('section.usa-hero')
      .as('hero')
      .should('have.css', 'background-image', `url("${testBackgroundImage}")`)
  })

  it('adds custom CSS classes', () => {
    mount(UsaHero, {
      props: {
        ariaLabel: testAriaLabel,
        backgroundImage: testBackgroundImage,
        customClasses: {
          gridContainer: ['test-grid-container-class'],
        },
      },
    })

    cy.get('.test-grid-container-class').should('exist')
  })

  it('uses custom grid prefix for CSS grid classes', () => {
    mount(UsaHero, {
      props: {
        ariaLabel: testAriaLabel,
        backgroundImage: testBackgroundImage,
      },
      global: {
        provide: {
          'vueUswds.gridNamespace': 'custom-grid-prefix-',
        },
      },
    })

    cy.get('.custom-grid-prefix-container').should('exist')
  })
})
