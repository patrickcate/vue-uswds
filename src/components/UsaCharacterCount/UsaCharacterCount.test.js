import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaCharacterCount from './UsaCharacterCount.vue'
import UsaTextInput from '@/components/UsaTextInput'
import UsaTextarea from '@/components/UsaTextarea'

describe('UsaCharacterCount', () => {
  it('renders the component with text input', () => {
    mount(UsaCharacterCount, {
      props: {
        maxlength: 10,
      },
      slots: {
        default: () => h(UsaTextInput),
      },
    }).as('wrapper')

    cy.get('div.usa-character-count').should('exist')
    cy.get('span.usa-hint')
      .as('message')
      .should('have.class', 'usa-character-count__message')
      .and('have.attr', 'id')

    cy.get('@message')
      .should('not.have.class', 'usa-character-count__message--invalid')
      .and('have.attr', 'aria-live')
      .and('contain', 'polite')

    cy.get('@message').should('contain', '10 characters allowed')

    cy.get('.usa-input')
      .as('input')
      .should('have.class', 'usa-character-count__field')
      .and('have.attr', 'maxlength')
      .and('equal', '10')

    cy.get('@input').type('12345')
    cy.get('@message').should('contain', '5 characters left')

    cy.get('@input').type('6789')
    cy.get('@message').should('contain', '1 character left')

    cy.get('@input').type('1')
    cy.get('@message').should('contain', '0 characters left')

    cy.get('@input').type('0')
    cy.get('@message').should('contain', '0 characters left')

    cy.get('@input').invoke('val', 12345678912).trigger('input')
    cy.get('@message')
      .should('have.class', 'usa-character-count__message--invalid')
      .and('contain', '1 character over limit')

    cy.get('@input').invoke('val', 123456789123).trigger('input')
    cy.get('@message')
      .should('have.class', 'usa-character-count__message--invalid')
      .and('contain', '2 characters over limit')
  })

  it('renders the component with textarea form element', () => {
    mount(UsaCharacterCount, {
      props: {
        maxlength: 10,
      },
      slots: {
        default: () => h(UsaTextarea),
      },
    }).as('wrapper')

    cy.get('div.usa-character-count').should('exist')
    cy.get('span.usa-hint')
      .as('message')
      .should('have.class', 'usa-character-count__message')
      .and('have.attr', 'id')

    cy.get('@message')
      .should('not.have.class', 'usa-character-count__message--invalid')
      .and('have.attr', 'aria-live')
      .and('contain', 'polite')

    cy.get('@message').should('contain', '10 characters allowed')

    cy.get('.usa-textarea')
      .as('textarea')
      .should('have.class', 'usa-character-count__field')
      .and('have.attr', 'maxlength')
      .and('contain', 10)

    cy.get('@textarea').type('12345')
    cy.get('@message').should('contain', '5 characters left')

    cy.get('@textarea').type('6789')
    cy.get('@message').should('contain', '1 character left')

    cy.get('@textarea').as('input').type('1')
    cy.get('@message').should('contain', '0 characters left')

    cy.get('@textarea').type('0')
    cy.get('@message').should('contain', '0 characters left')

    // Force value over maxlength.
    cy.get('@textarea').invoke('val', 12345678912).trigger('input')
    cy.get('@message')
      .should('have.class', 'usa-character-count__message--invalid')
      .and('contain', '1 character over limit')

    // Force value over maxlength.
    cy.get('@textarea').invoke('val', 123456789123).trigger('input')
    cy.get('@message')
      .should('have.class', 'usa-character-count__message--invalid')
      .and('contain', '2 characters over limit')
  })

  it('character count for text input form element includes default value', () => {
    mount(UsaCharacterCount, {
      props: {
        maxlength: 10,
      },
      slots: {
        default: () => h(UsaTextInput, { 'model-value': 12345 }),
      },
    }).as('wrapper')

    cy.get('.usa-input').should('have.value', 12345)
    cy.get('.usa-character-count__message').should(
      'contain',
      '5 characters left'
    )
  })

  it('character count for textarea form element includes default value', () => {
    mount(UsaCharacterCount, {
      props: {
        maxlength: 10,
      },
      slots: {
        default: () => h(UsaTextarea, { 'model-value': 12345 }),
      },
    }).as('wrapper')

    cy.get('.usa-textarea').should('have.value', 12345)
    cy.get('.usa-character-count__message').should(
      'contain',
      '5 characters left'
    )
  })

  it('custom id is added to message element and referenced on text input form element', () => {
    mount(UsaCharacterCount, {
      props: {
        maxlength: 10,
        id: 'test-id',
      },
      slots: {
        default: () => h(UsaTextInput),
      },
    })

    cy.get('.usa-hint').should('have.id', 'test-id')
    cy.get('.usa-input')
      .should('have.attr', 'aria-describedby')
      .and('contain', 'test-id')
  })

  it('custom id is added to message element and referenced on textarea form element', () => {
    mount(UsaCharacterCount, {
      props: {
        maxlength: 10,
        id: 'test-id',
      },
      slots: {
        default: () => h(UsaTextarea),
      },
    })

    cy.get('.usa-hint').should('have.id', 'test-id')
    cy.get('.usa-textarea')
      .should('have.attr', 'aria-describedby')
      .and('contain', 'test-id')
  })

  it('uses custom slot content and scoped values', () => {
    mount(UsaCharacterCount, {
      props: {
        maxlength: 5,
      },
      slots: {
        default: () => h(UsaTextInput),
        'equal-message': ({ maxlength }) =>
          h(
            'span',
            { class: 'equal-message' },
            `equal, maxlength: ${maxlength}`
          ),
        'remaining-message': ({ maxlength, charactersRemaining }) =>
          h(
            'span',
            { class: 'remaining-message' },
            `under, maxlength: ${maxlength}, charactersRemaining: ${charactersRemaining}`
          ),
        'over-message': ({ maxlength, charactersOver }) =>
          h(
            'span',
            { class: 'over-message' },
            `over, maxlength: ${maxlength}, charactersOver: ${charactersOver}`
          ),
      },
    }).as('wrapper')

    cy.get('span.remaining-message').should('not.exist')
    cy.get('span.over-message').should('not.exist')

    cy.get('span.equal-message').should('contain', 'equal, maxlength: 5')

    cy.get('.usa-input').as('input').type(1)

    cy.get('span.equal-message').should('not.exist')
    cy.get('span.over-message').should('not.exist')

    cy.get('span.remaining-message')
      .as('remainingMessage')
      .should('contain', 'under, maxlength: 5, charactersRemaining: 4')

    // Force value over maxlength.
    cy.get('@input').invoke('val', 123456).trigger('input')

    cy.get('span.over-message').should(
      'contain',
      'over, maxlength: 5, charactersOver: 1'
    )
  })

  it('console prints warning about invalid `maxlength` prop value', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    mount(UsaCharacterCount, {
      props: {
        maxlength: 0,
      },
      slots: {
        default: () => h(UsaTextInput),
      },
    })

    cy.get('@consoleWarn').should('be.calledWith', `0 is not a valid maxlength`)
  })
})
