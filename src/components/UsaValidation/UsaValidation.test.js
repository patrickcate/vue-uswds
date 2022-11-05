import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaValidation from './UsaValidation.vue'

describe('UsaValidation', () => {
  it('renders the component', () => {
    const testValidations = [
      {
        id: 'item1',
        text: 'Use at least one number',
        validator: '\\d',
      },
      {
        id: 'item2',
        text: 'Use at least one uppercase character',
        validator: /[A-Z]/,
      },
      {
        text: 'Minimum length of 6 characters',
        validator: value => value.length > 6,
      },
      {
        text: 'Always true',
        checked: true,
      },
      {
        text: 'Always false',
        checked: false,
      },
      {
        text: 'No validator',
      },
    ]

    const wrapperComponent = {
      components: { UsaValidation },
      data() {
        return {
          inputValue: '',
          validations: testValidations,
          customClasses: {},
        }
      },
      template: `<div>
        <UsaValidation
          :validationValue="inputValue"
          :validations="validations"
          :custom-classes="customClasses"
          id="test-id"
          test-attr
        ></UsaValidation>
        <input v-model="inputValue" type="text" />
      </div>`,
    }

    mount(wrapperComponent, {})

    cy.get('.usa-alert--validation')
      .should('have.class', 'usa-alert')
      .and('have.class', 'usa-alert--info')
      .and('have.attr', 'test-attr', '')
      .and('not.have.attr', 'role')

    cy.get('.usa-alert__body').should('exist')
    cy.get('.usa-alert__heading').should('not.exist')

    cy.get('ul.usa-checklist').should('have.id', 'test-id')
    cy.get('ul.usa-checklist li.usa-checklist__item')
      .should('have.length', 6)
      .and('have.attr', 'tabindex', '0')

    cy.get('.usa-checklist__item:nth-of-type(1)')
      .as('item1')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one number status incomplete'
      )
      .and('contain', 'Use at least one number')

    cy.get('.usa-checklist__item:nth-of-type(2)')
      .as('item2')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one uppercase character status incomplete'
      )
      .and('contain', 'Use at least one uppercase character')

    cy.get('.usa-checklist__item:nth-of-type(3)')
      .as('item3')
      .should(
        'have.attr',
        'aria-label',
        'Minimum length of 6 characters status incomplete'
      )
      .and('contain', 'Minimum length of 6 characters')

    cy.get('.usa-checklist__item:nth-of-type(4)')
      .as('item4')
      .should('have.attr', 'aria-label', 'Always true status complete')
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Always true')

    cy.get('.usa-checklist__item:nth-of-type(5)')
      .as('item5')
      .should('have.attr', 'aria-label', 'Always false status incomplete')
      .and('contain', 'Always false')

    cy.get('span[data-validation-status]')
      .as('statusMessage')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and('have.attr', 'aria-atomic', 'true')
      .and('have.id', 'test-id-status-message')
      .and(
        'contain',
        'Use at least one number status incomplete. Use at least one uppercase character status incomplete. Minimum length of 6 characters status incomplete. Always true status complete. Always false status incomplete.'
      )

    // Type characters that don't validate.
    cy.get('input').type('ab')

    cy.get('@item1')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one number status incomplete'
      )
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one number')

    cy.get('@item2')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one uppercase character status incomplete'
      )
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one uppercase character')

    cy.get('@item3')
      .should(
        'have.attr',
        'aria-label',
        'Minimum length of 6 characters status incomplete'
      )
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Minimum length of 6 characters')

    cy.get('@item4')
      .should('have.attr', 'aria-label', 'Always true status complete')
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Always true')

    cy.get('@item5')
      .should('have.attr', 'aria-label', 'Always false status incomplete')
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Always false')

    cy.get('@statusMessage')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and('have.attr', 'aria-atomic', 'true')
      .and('have.id', 'test-id-status-message')
      .and(
        'contain',
        'Use at least one number status incomplete. Use at least one uppercase character status incomplete. Minimum length of 6 characters status incomplete. Always true status complete. Always false status incomplete.'
      )

    // Validate uppercase character.
    cy.get('input').type('Z')

    cy.get('@item1')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one number status incomplete'
      )
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one number')

    cy.get('@item2')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one uppercase character status complete'
      )
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one uppercase character')

    cy.get('@item3')
      .should(
        'have.attr',
        'aria-label',
        'Minimum length of 6 characters status incomplete'
      )
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Minimum length of 6 characters')

    cy.get('@item4')
      .should('have.attr', 'aria-label', 'Always true status complete')
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Always true')

    cy.get('@item5')
      .should('have.attr', 'aria-label', 'Always false status incomplete')
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Always false')

    cy.get('@statusMessage')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and('have.attr', 'aria-atomic', 'true')
      .and('have.id', 'test-id-status-message')
      .and(
        'contain',
        'Use at least one number status incomplete. Use at least one uppercase character status complete. Minimum length of 6 characters status incomplete. Always true status complete. Always false status incomplete.'
      )

    // Validate at least 1 number used.
    cy.get('input').type('9')

    cy.get('@item1')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one number status complete'
      )
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one number')

    cy.get('@item2')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one uppercase character status complete'
      )
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one uppercase character')

    cy.get('@item3')
      .should(
        'have.attr',
        'aria-label',
        'Minimum length of 6 characters status incomplete'
      )
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Minimum length of 6 characters')

    cy.get('@item4')
      .should('have.attr', 'aria-label', 'Always true status complete')
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Always true')

    cy.get('@item5')
      .should('have.attr', 'aria-label', 'Always false status incomplete')
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Always false')

    cy.get('@statusMessage')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and('have.attr', 'aria-atomic', 'true')
      .and('have.id', 'test-id-status-message')
      .and(
        'contain',
        'Use at least one number status complete. Use at least one uppercase character status complete. Minimum length of 6 characters status incomplete. Always true status complete. Always false status incomplete.'
      )

    // Validate min length.
    cy.get('input').type('876')

    cy.get('@item1')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one number status complete'
      )
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one number')

    cy.get('@item2')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one uppercase character status complete'
      )
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one uppercase character')

    cy.get('@item3')
      .should(
        'have.attr',
        'aria-label',
        'Minimum length of 6 characters status complete'
      )
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Minimum length of 6 characters')

    cy.get('@item4')
      .should('have.attr', 'aria-label', 'Always true status complete')
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Always true')

    cy.get('@item5')
      .should('have.attr', 'aria-label', 'Always false status incomplete')
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Always false')

    cy.get('@statusMessage')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and('have.attr', 'aria-atomic', 'true')
      .and('have.id', 'test-id-status-message')
      .and(
        'contain',
        'Use at least one number status complete. Use at least one uppercase character status complete. Minimum length of 6 characters status complete. Always true status complete. Always false status incomplete.'
      )

    // Delete input characters to test that validations re-evaluate.
    cy.get('input').type(
      '{backspace}{backspace}{backspace}{backspace}{backspace}'
    )

    cy.get('@item1')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one number status incomplete'
      )
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one number')

    cy.get('@item2')
      .should(
        'have.attr',
        'aria-label',
        'Use at least one uppercase character status incomplete'
      )
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one uppercase character')

    cy.get('@item3')
      .should(
        'have.attr',
        'aria-label',
        'Minimum length of 6 characters status incomplete'
      )
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Minimum length of 6 characters')

    cy.get('@item4')
      .should('have.attr', 'aria-label', 'Always true status complete')
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Always true')

    cy.get('@item5')
      .should('have.attr', 'aria-label', 'Always false status incomplete')
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Always false')

    cy.get('@statusMessage')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and('have.attr', 'aria-atomic', 'true')
      .and('have.id', 'test-id-status-message')
      .and(
        'contain',
        'Use at least one number status incomplete. Use at least one uppercase character status incomplete. Minimum length of 6 characters status incomplete. Always true status complete. Always false status incomplete.'
      )
  })

  it('test custom prop and emitted values', () => {
    mount(UsaValidation, {
      props: {
        validations: [
          {
            id: 'item1',
            text: 'Use at least one number',
            validator: '\\d',
          },
        ],
        heading: 'Test heading',
        headingTag: 'h4',
        validLabel: 'test status %s: valid',
        invalidLabel: 'test status %s: invalid',
        customClasses: {
          body: ['test-body-class'],
          heading: ['test-heading-class'],
          checklist: ['test-checklist-class'],
        },
      },
    }).as('wrapper')

    cy.get('.usa-alert__body').should('have.class', 'test-body-class')
    cy.get('h4.usa-alert__heading')
      .should('have.class', 'test-heading-class')
      .should('contain', 'Test heading')
    cy.get('.usa-checklist').should('have.class', 'test-checklist-class')

    cy.get('ul').children().should('have.length', 1)
    cy.get('.usa-checklist__item')
      .should(
        'have.attr',
        'aria-label',
        'test status Use at least one number: invalid'
      )
      .and('not.have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one number')

    cy.get('span[data-validation-status]')
      .should('have.class', 'usa-sr-only')
      .and('have.attr', 'aria-live', 'polite')
      .and('have.attr', 'aria-atomic', 'true')
      .and('have.id', 'vuswds-id-global-usa-validation-1-status-message')
      .and('contain', 'test status Use at least one number: invalid.')

    cy.get('@wrapper')
      .vue()
      .then(vm => {
        expect(vm.emitted()).to.have.property('update:validationId')
        expect(vm.emitted()).to.have.property('update:statusMessageId')

        const [currentValidationId] = vm.emitted('update:validationId')
        expect(
          currentValidationId[currentValidationId.length - 1].value
        ).to.contain('vuswds-id-global-usa-validation-1')

        const [currentStatusMessageId] = vm.emitted('update:statusMessageId')
        expect(
          currentStatusMessageId[currentStatusMessageId.length - 1].value
        ).to.contain('vuswds-id-global-usa-validation-1-status-message')
      })

    cy.get('@wrapper').invoke('setProps', {
      validationValue: 5,
    })

    cy.get('.usa-checklist__item')
      .should(
        'have.attr',
        'aria-label',
        'test status Use at least one number: valid'
      )
      .and('have.class', 'usa-checklist__item--checked')
      .and('contain', 'Use at least one number')

    cy.get('span[data-validation-status]').should(
      'contain',
      'test status Use at least one number: valid.'
    )
  })
})
