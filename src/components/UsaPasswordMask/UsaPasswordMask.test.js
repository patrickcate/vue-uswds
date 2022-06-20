import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { h, ref } from 'vue'
import UsaPasswordMask from './UsaPasswordMask.vue'
import UsaTextInput from '@/components/UsaTextInput'

describe('UsaPasswordMask', () => {
  it('renders the component', () => {
    mount(UsaPasswordMask, {
      attrs: {
        'data-test': 'test-attr',
      },
    })

    cy.get('p.usa-form__note').should('exist')

    cy.get('a.usa-show-password')
      .as('toggle')
      .should('have.attr', 'href', '')
      .and('have.attr', 'data-test', 'test-attr')
      .and('have.attr', 'aria-controls', '')
      .and('have.attr', 'aria-pressed', 'false')
      .and('contain', 'Show password')

    cy.get('@toggle').click()

    cy.get('@toggle')
      .should('have.attr', 'aria-controls', '')
      .and('have.attr', 'data-test', 'test-attr')
      .and('have.attr', 'aria-pressed', 'true')
      .and('contain', 'Hide password')

    cy.get('@toggle').click()

    cy.get('@toggle')
      .should('have.attr', 'href', '')
      .and('have.attr', 'data-test', 'test-attr')
      .and('have.attr', 'aria-controls', '')
      .and('have.attr', 'aria-pressed', 'false')
      .and('contain', 'Show password')
  })

  it('displays custom show/hide text', () => {
    mount(UsaPasswordMask, {
      props: {
        showText: 'Custom show text',
        hideText: 'Custom hide text',
      },
    })

    cy.get('a.usa-show-password')
      .as('toggle')
      .should('have.attr', 'aria-pressed', 'false')
      .and('contain', 'Custom show text')

    cy.get('@toggle').click()

    cy.get('@toggle')
      .should('have.attr', 'aria-pressed', 'true')
      .and('contain', 'Custom hide text')

    cy.get('@toggle').click()

    cy.get('@toggle')
      .should('have.attr', 'aria-pressed', 'false')
      .and('contain', 'Custom show text')
  })

  it('toggles input types when pressed', () => {
    const wrapperComponent = {
      components: { UsaPasswordMask, UsaTextInput },
      data() {
        return {
          passwordValue: '',
          confirmPasswordValue: '',
        }
      },
      template: `<UsaPasswordMask v-slot="{ type }">
        <UsaTextInput v-model="passwordValue" id="password" label="Password" :type="type"></UsaTextInput>
        <UsaTextInput v-model="confirmPasswordValue" id="confirm-password" label="Confirm password" :type="type"></UsaTextInput>
        </UsaPasswordMask>`,
    }

    mount(wrapperComponent, {}).as('wrapper')

    cy.get('input:nth-of-type(1)')
      .as('input1')
      .should('have.attr', 'type', 'password')

    cy.get('input:nth-of-type(2)')
      .as('input2')
      .should('have.attr', 'type', 'password')

    cy.get('a.usa-show-password')
      .as('toggle')
      .should('have.attr', 'aria-controls', 'password confirm-password')
      .and('have.attr', 'aria-pressed', 'false')
      .and('contain', 'Show password')

    cy.get('@input1').type('123456789')
    cy.get('@input2').type('abcdefg')

    cy.get('@toggle').click()

    cy.get('@input1')
      .should('have.attr', 'type', 'text')
      .and('have.value', '123456789')

    cy.get('@input2')
      .should('have.attr', 'type', 'text')
      .and('have.value', 'abcdefg')

    cy.get('@toggle').click()

    cy.get('@input1')
      .should('have.attr', 'type', 'password')
      .and('have.value', '123456789')

    cy.get('@input2')
      .should('have.attr', 'type', 'password')
      .and('have.value', 'abcdefg')

    cy.get('@wrapper').invoke('unmount')

    cy.get('@input1').should('not.exist')
    cy.get('@input2').should('not.exist')
    cy.get('@toggle').should('not.exist')
  })
})
