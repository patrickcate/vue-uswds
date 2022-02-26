import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaAccordionItem from './UsaAccordionItem.vue'
import UsaAccordion from '@/components/UsaAccordion'

describe('UsaAccordionItem', () => {
  it('renders the component', () => {
    const AccordionWrapper = {
      components: { UsaAccordion, UsaAccordionItem },
      template: `
        <UsaAccordion>
          <UsaAccordionItem label="Test Accordion Label">
            <p>Test Accordion Content</p>
          </UsaAccordionItem>
        </UsaAccordion>
      `,
    }

    mount(AccordionWrapper, {})

    cy.get('.usa-accordion__button').should('contain', 'Test Accordion Label')
    cy.get('.usa-accordion__content').should(
      'contain',
      'Test Accordion Content'
    )
  })

  it('uses custom `id` attribute', () => {
    const AccordionWrapper = {
      components: { UsaAccordion, UsaAccordionItem },
      template: `
        <UsaAccordion>
          <UsaAccordionItem id="test-accordion-item-id" label="Test Accordion Label">
            <p>Test Accordion Content</p>
          </UsaAccordionItem>
        </UsaAccordion>
      `,
    }

    mount(AccordionWrapper, {})

    cy.get('.usa-accordion__button')
      .should('have.attr', 'aria-controls')
      .and('contain', 'test-accordion-item-id')
    cy.get('.usa-accordion__content').should(
      'have.id',
      'test-accordion-item-id'
    )
  })

  it('uses label slot content', () => {
    const AccordionWrapper = {
      components: { UsaAccordion, UsaAccordionItem },
      template: `
        <UsaAccordion>
          <UsaAccordionItem id="test-accordion-item-id" label="Test Accordion Label">
            <template #label>Custom Accordion Slot Label</template>
            <template #default><p>Test Accordion Content</p></template>
          </UsaAccordionItem>
        </UsaAccordion>
      `,
    }

    mount(AccordionWrapper, {})

    cy.get('.usa-accordion__button').should(
      'contain',
      'Custom Accordion Slot Label'
    )
  })

  it('adds custom CSS classes', () => {
    const AccordionWrapper = {
      components: { UsaAccordion, UsaAccordionItem },
      template: `
        <UsaAccordion>
          <UsaAccordionItem
            label="Test Accordion Label"
            :custom-classes="{
              heading: ['test-heading-class'],
              button: ['test-button-class'],
              content: ['test-content-class'],
            }"
          >
            <p>Test Accordion Content</p>
          </UsaAccordionItem>
        </UsaAccordion>
      `,
    }

    mount(AccordionWrapper, {})

    cy.get('.test-heading-class').should('exist')
    cy.get('.test-button-class').should('exist')
    cy.get('.test-content-class').should('exist')
  })
})
