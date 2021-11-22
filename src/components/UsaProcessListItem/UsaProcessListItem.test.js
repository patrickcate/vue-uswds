import '@module/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import { mount } from '@cypress/vue'
import UsaProcessList from '@/components/UsaProcessList'
import UsaProcessListItem from './UsaProcessListItem.vue'

describe('UsaProcessListItem', () => {
  const ProcessListWrapper = {
    components: { UsaProcessList, UsaProcessListItem },
    template: `
      <UsaProcessList>
        <UsaProcessListItem heading="Test heading 1">
          <p>Test content 1</p>
        </UsaProcessListItem>
        <UsaProcessListItem heading="Test heading 2">
          <p>Test content 2</p>
        </UsaProcessListItem>
        <UsaProcessListItem heading="Test heading 3">
          <p>Test content 3</p>
        </UsaProcessListItem>
      </UsaProcessList>
    `,
  }

  it('renders the component', () => {
    mount(ProcessListWrapper, {})

    cy.get('ol.usa-process-list').should('exist')
    cy.get('li.usa-process-list__item').should('exist')
    cy.get('h2.usa-process-list__heading').should('exist')

    cy.get('li:first-child h2').should('contain', 'Test heading 1')
    cy.get('li:first-child p').should('contain', 'Test content 1')

    cy.get('li:nth-child(2) h2').should('contain', 'Test heading 2')
    cy.get('li:nth-child(2) p').should('contain', 'Test content 2')

    cy.get('li:last-child h2').should('contain', 'Test heading 3')
    cy.get('li:last-child p').should('contain', 'Test content 3')
  })

  it('adds custom CSS classes', () => {
    const ProcessListWrapper = {
      components: { UsaProcessList, UsaProcessListItem },
      template: `
        <UsaProcessList>
          <UsaProcessListItem
          heading="Test heading 1"
            :custom-classes="{ heading: ['test-heading-class'] }"
          >
            <p>Test content 1</p>
          </UsaProcessListItem>
        </UsaProcessList>
      `,
    }

    mount(ProcessListWrapper, {})

    cy.get('.test-heading-class').should('exist')
  })

  it('uses the `heading` slot content', () => {
    const ProcessListWrapper = {
      components: { UsaProcessList, UsaProcessListItem },
      template: `
        <UsaProcessList>
          <UsaProcessListItem heading="Test heading 1">
            <template #heading>Test Heading Slot</template>
            <template #default>
              <p>Test content 1</p>
            </template>
          </UsaProcessListItem>
        </UsaProcessList>
      `,
    }

    mount(ProcessListWrapper, {})

    cy.get('.usa-process-list__heading').contains('Test Heading Slot')
  })

  it('renders custom heading tag', () => {
    const ProcessListWrapper = {
      components: { UsaProcessList, UsaProcessListItem },
      template: `
        <UsaProcessList>
          <UsaProcessListItem heading="Test heading 1" heading-tag="h1">
            <p>Test content 1</p>
          </UsaProcessListItem>
        </UsaProcessList>
      `,
    }

    mount(ProcessListWrapper, {})

    cy.get('h1.usa-process-list__heading').should('exist')
  })

  it('renders custom heading tag from parent process list component', () => {
    const processListItem = {
      components: { UsaProcessList, UsaProcessListItem },
      template: `
        <UsaProcessList :heading-tag="'h4'">
          <UsaProcessListItem :heading="'Test heading 1'" :heading-tag="'h1'">
            <p>Test content 1</p>
          </UsaProcessListItem>
        </UsaProcessList>
      `,
    }

    mount(UsaProcessList, {
      slots: {
        default: () => h(processListItem),
      },
    })
      .get('h4.usa-process-list__heading')
      .should('exist')
  })
})
