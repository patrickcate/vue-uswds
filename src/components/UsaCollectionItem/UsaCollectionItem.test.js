import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import UsaCollectionItem from './UsaCollectionItem.vue'
import UsaCollectionMeta from '@/components/UsaCollectionMeta'
import UsaCollectionMetaItem from '@/components/UsaCollectionMetaItem'

describe('UsaCollectionItem', () => {
  const testMedia = h(
    'img',
    {
      src: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
      alt: 'A placeholder image',
    },
    null
  )

  const testHref =
    'https://www.performance.gov/presidents-winners-press-release/'

  const testHeadingText = 'Gears of Government Presidents Award winners'

  const testContent = `Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.`

  const testMetaItems = h({
    components: { UsaCollectionMeta, UsaCollectionMetaItem },
    template: `
      <UsaCollectionMeta aria-label="'More information'">
        <UsaCollectionMetaItem class="usa-tag">Meta 1</UsaCollectionMetaItem>
        <UsaCollectionMetaItem class="usa-tag">Meta 2</UsaCollectionMetaItem>
      </UsaCollectionMeta>
    `,
  })

  it('renders the component', () => {
    cy.mount(UsaCollectionItem, {
      props: {
        href: testHref,
        heading: testHeadingText,
        customClasses: {},
      },
      slots: {
        media: () => testMedia,
        calendar: () =>
          h(
            'div',
            { class: 'test-calendar-slot' },
            'Custom calendar slot content'
          ),
        default: () => testContent,
        meta: () => testMetaItems,
      },
    })

    cy.get('li.usa-collection__item').should('exist')
    cy.get('.usa-collection__img')
      .should('have.attr', 'class')
      .and('equal', 'usa-collection__img')

    cy.get('.usa-collection__img img')
      .should('have.attr', 'src')
      .and(
        'contain',
        'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg'
      )
    cy.get('.usa-collection__img img')
      .should('have.attr', 'alt')
      .and('contain', 'A placeholder image')
    cy.get('.usa-collection__body').should('exist')

    cy.get('.test-calendar-slot').should('not.exist')

    cy.get('h2.usa-collection__heading').should('contain', testHeadingText)
    cy.get('.usa-collection__heading')
      .should('have.attr', 'class')
      .and('equal', 'usa-collection__heading')

    cy.get('a.usa-link').should('have.attr', 'href').and('contain', testHref)
    cy.get('.usa-link').should('have.attr', 'class').and('equal', 'usa-link')

    cy.get('p.usa-collection__description').and('contain', testContent)
    cy.get('.usa-collection__description')
      .should('have.attr', 'class')
      .and('equal', 'usa-collection__description')

    cy.get('ul.usa-collection__meta').should('exist')
    cy.get('li.usa-collection__meta-item:nth-child(1)').should(
      'contain',
      'Meta 1'
    )
    cy.get('li.usa-collection__meta-item:nth-child(2)').should(
      'contain',
      'Meta 2'
    )
  })

  it('`media` slot wrapper markup should not render if `media` slot is not used', () => {
    cy.mount(UsaCollectionItem, {
      props: {
        header: testHeadingText,
      },
      slots: {
        default: () => testContent,
      },
    })

    cy.get('.usa-collection__img').should('not.exist')
  })

  it('`default` slot wrapper markup should not render if `default` slot is not used', () => {
    cy.mount(UsaCollectionItem, {
      props: {
        header: testHeadingText,
      },
    })

    cy.get('.usa-collection__description').should('not.exist')
  })

  it('`description` slot overrides default slot content', () => {
    cy.mount(UsaCollectionItem, {
      props: {
        header: testHeadingText,
      },
      slots: {
        default: () => testContent,
        description: () => 'Description slot content',
      },
    })

    cy.get('.usa-collection__description').should('not.exist')
  })

  it('uses the `heading` slot content', () => {
    cy.mount(UsaCollectionItem, {
      props: {
        href: testHref,
        heading: testHeadingText,
      },
      slots: {
        media: () => testMedia,
        heading: () => h('h3', null, 'Custom slot heading text'),
        default: () => testContent,
      },
    })

    cy.get('h3').should('contain', 'Custom slot heading text')
  })

  it('uses the `calendar` slot content', () => {
    cy.mount(UsaCollectionItem, {
      props: {
        href: testHref,
        heading: testHeadingText,
      },
      slots: {
        calendar: () =>
          h(
            'div',
            { class: 'test-calendar-slot' },
            'Custom calendar slot content'
          ),
        default: () => testContent,
      },
    })

    cy.get('div.test-calendar-slot').should(
      'contain',
      'Custom calendar slot content'
    )
  })

  it('renders custom heading tag', () => {
    cy.mount(UsaCollectionItem, {
      props: {
        heading: 'Test header text',
        headingTag: 'h4',
      },
      slots: {
        media: () => testMedia,
        default: () => testContent,
      },
    })

    cy.get('h4.usa-collection__heading').should('exist')
  })

  it('adds custom CSS classes', () => {
    cy.mount(UsaCollectionItem, {
      props: {
        heading: 'Test header text',
        customClasses: {
          media: ['test-media-class'],
          heading: ['test-heading-class'],
          link: ['test-link-class'],
          description: ['test-description-class'],
        },
      },
      slots: {
        media: () => testMedia,
        default: () => testContent,
      },
    })

    cy.get('.test-media-class').should('exist')
    cy.get('.test-heading-class').should('exist')
    cy.get('.test-link-class').should('exist')
    cy.get('.test-description-class').should('exist')
  })

  it('renders the custom router link tag and props', () => {
    cy.mount(UsaCollectionItem, {
      props: {
        heading: 'Test header text',
        to: '/test-page',
        routerComponentName: 'router-link',
      },
      slots: {
        media: () => testMedia,
        default: () => testContent,
      },
    })

    cy.get('router-link').should('have.attr', 'to').and('contain', '/test-page')
  })
})
