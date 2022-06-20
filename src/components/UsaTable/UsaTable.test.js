import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { naturalSort } from '@/utils/sorting.js'
import { h } from 'vue'
import UsaTable from './UsaTable.vue'

describe('UsaTable', () => {
  let testHeaders
  let testRows

  beforeEach(() => {
    testHeaders = [
      {
        id: 'alphabetical',
        label: 'Alphabetical',
        sortable: true,
        headerRow: true,
      },
      {
        id: 'month',
        label: 'Month',
        sortable: true,
      },
      {
        id: 'percent',
        label: 'Percent',
        sortable: true,
      },
      {
        id: 'count',
        label: 'Count',
        sortable: true,
      },
    ]

    testRows = [
      {
        alphabetical: 'Tango',
        month: {
          sortValue: 3,
          displayValue: 'March',
        },
        percent: {
          sortValue: 0.206,
          displayValue: '20.6%',
        },
        count: {
          sortValue: 23612,
          displayValue: '23,612',
        },
      },
      {
        alphabetical: 'Foxtrot',
        month: {
          sortValue: 4,
          displayValue: 'April',
        },
        percent: {
          sortValue: 0.026,
          displayValue: '2.6%',
        },
        count: -32,
      },
      {
        alphabetical: 'hilo',
        month: {
          sortValue: 1,
          displayValue: 'January',
        },
        percent: {
          sortValue: -3.006,
          displayValue: '-3.6%',
        },
        count: {
          sortValue: 0.002,
          displayValue: '0.002',
        },
      },
      {
        alphabetical: 'Bravo',
        month: {
          sortValue: 12,
          displayValue: 'December',
        },
        percent: {
          sortValue: -0.036,
          displayValue: '-300.6%',
        },
        count: 0,
      },
    ]
  })

  it('renders the component', () => {
    const testData = [
      {
        sortHeader: null,
        sortDirection: null,
        nextButton: 1,
        data: [...testRows],
      },
      {
        sortHeader: 'alphabetical',
        sortDirection: 'ascending',
        nextButton: 1,
        data: naturalSort(testRows).asc(
          row => row.alphabetical?.sortValue || row.alphabetical
        ),
      },
      {
        sortHeader: 'alphabetical',
        sortDirection: 'descending',
        nextButton: 2,
        data: naturalSort(testRows).desc(
          row => row.alphabetical?.sortValue || row.alphabetical
        ),
      },
      {
        sortHeader: 'month',
        sortDirection: 'ascending',
        nextButton: 2,
        data: naturalSort(testRows).asc(
          row => row.month?.sortValue || row.month
        ),
      },
      {
        sortHeader: 'month',
        sortDirection: 'descending',
        nextButton: 3,
        data: naturalSort(testRows).desc(
          row => row.month?.sortValue || row.month
        ),
      },
      {
        sortHeader: 'percent',
        sortDirection: 'ascending',
        nextButton: 3,
        data: naturalSort(testRows).asc(
          row => row.percent?.sortValue || row.percent
        ),
      },
      {
        sortHeader: 'percent',
        sortDirection: 'descending',
        nextButton: 4,
        data: naturalSort(testRows).desc(
          row => row.percent?.sortValue || row.percent
        ),
      },
      {
        sortHeader: 'count',
        sortDirection: 'ascending',
        nextButton: 4,
        data: naturalSort(testRows).asc(
          row => row.count?.sortValue || row.count
        ),
      },
      {
        sortHeader: 'count',
        sortDirection: 'descending',
        nextButton: null,
        data: naturalSort(testRows).desc(
          row => row.count?.sortValue || row.count
        ),
      },
    ]

    mount(UsaTable, {
      props: {
        headers: testHeaders,
        rows: testRows,
      },
      attrs: {
        'data-test': 'test',
      },
    })

    cy.get('.usa-table-container--scrollable').should('not.exist')
    cy.get('table.usa-table')
      .as('table')
      .should('not.have.class', 'usa-table--borderless')
    cy.get('@table').should('not.have.class', 'usa-table--striped')
    cy.get('@table').should('not.have.class', 'usa-table--compact')
    cy.get('@table').should('not.have.class', 'usa-table--stacked')
    cy.get('@table').should('not.have.class', 'usa-table--stacked-header')

    cy.get('@table').should('have.attr', 'data-test').and('equal', 'test')

    cy.get('.usa-table > caption').should('not.exist')

    cy.get('div.usa-table__announcement-region')
      .as('announcementRegion')
      .should('have.class', 'usa-sr-only')
      .and('be.empty')
      .and('have.attr', 'aria-live')
      .and('equal', 'polite')

    cy.wrap(testHeaders).each((header, headerIndex) => {
      cy.get(`.usa-table thead th:nth-of-type(${headerIndex + 1})`).as(
        `header${headerIndex + 1}`
      )
      cy.get(`.usa-table thead th:nth-of-type(${headerIndex + 1}) button`).as(
        `header${headerIndex + 1}Button`
      )
    })

    cy.get('.usa-table > thead > tr')
      .as('headerRow')
      .within(() => {
        cy.get('th')
          .should('have.length', 4)
          .and($th => {
            testHeaders.forEach((header, headerIndex) => {
              expect($th.eq(headerIndex).attr('scope')).to.equal('col')
              expect($th.eq(headerIndex).attr('data-sortable')).to.equal('true')
              expect($th.eq(headerIndex).attr('role')).to.equal('columnheader')
              expect($th.eq(headerIndex).attr('aria-label')).to.equal(
                `${header.label}, sortable column, currently unsorted`
              )
              expect($th.eq(headerIndex).text()).to.equal(header.label)
            })
          })

        cy.get('th button').should($button => {
          testHeaders.forEach((header, headerIndex) => {
            expect($button.eq(headerIndex).attr('tabindex')).to.equal('0')

            expect($button.eq(headerIndex).attr('title')).to.equal(
              `Click to sort by ${header.label} in ascending order.`
            )
          })
        })
      })

    // Rows
    cy.wrap(testData).each((test, testIndex) => {
      let currentRowIndex = 0
      cy.get('tbody > tr')
        .should('have.length', 4)
        .each(($tr, rowIndex) => {
          currentRowIndex = rowIndex

          cy.get(`tbody > tr:nth-of-type(${rowIndex + 1})`).within(() => {
            cy.get('th, td')
              .should('have.length', 4)
              .each(($td, cellIndex) => {
                const headerLabel = $td.attr('data-label')
                const header = testHeaders.find(
                  headerItem => headerItem.label === headerLabel
                )
                const cell = test.data[rowIndex][header.id]

                expect(headerLabel).not.to.be.empty
                expect($td).to.have.attr('data-label', headerLabel)

                expect(header).not.to.equal(undefined)

                if (cellIndex === 0) {
                  expect($td).to.have.attr('scope', 'row')
                  expect($td).to.have.attr('role', 'rowheader')
                  expect($td).to.have.prop('tagName', 'TH')
                } else {
                  expect($td).not.to.have.attr('scope')
                  expect($td).not.to.have.attr('role')
                  expect($td).to.have.prop('tagName', 'TD')
                }

                if (test.sortHeader === header.id) {
                  expect($td).to.have.attr('data-sort-active', 'true')
                } else {
                  expect($td).not.to.have.attr('data-sort-active')
                }

                expect($td).to.have.attr(
                  'data-sort-value',
                  cell?.sortValue ? cell.sortValue : cell
                )

                expect($td).to.have.text(
                  cell?.displayValue ? cell.displayValue : cell
                )
              })
          })
        })
        .then(() => {
          if (test.nextButton && currentRowIndex === 3) {
            cy.get(`@header${test.nextButton}Button`).click()

            if (test.sortDirection) {
              const nextTest = testData[testIndex + 1]
              const header = testHeaders.find(
                headerItem => nextTest.sortHeader === headerItem.id
              )
              cy.get(`@header${test.nextButton}`).should(
                'have.attr',
                'aria-sort',
                nextTest.sortDirection
              )

              cy.get('@announcementRegion').contains(
                `The table is now sorted by "${header.label}" in ${nextTest.sortDirection} order.`
              )
            }
          }
        })
    })
  })

  it('uses slot content', () => {
    mount(UsaTable, {
      props: {
        caption: 'Test caption',
        headers: testHeaders,
        rows: testRows,
      },
      slots: {
        caption: () => 'Test caption slot.',
        headers: () => h('tr', {}, [h('th', {}, 'Test header slot content.')]),
        default: () => h('tr', {}, [h('td', {}, 'Test default slot content.')]),
      },
    }).as('wrapper')

    cy.get('.usa-table caption').should('contain', 'Test caption slot.')
    cy.get('.usa-table thead > tr > th').should(
      'contain',
      'Test header slot content.'
    )
    cy.get('.usa-table tbody > tr > td').should(
      'contain',
      'Test default slot content.'
    )

    cy.get('.usa-table__announcement-region').should('not.exist')

    cy.get('@wrapper').invoke('setProps', { caption: '' })

    cy.get('.usa-table caption').should('contain', 'Test caption slot.')

    cy.get('.usa-table__announcement-region').should('not.exist')
  })

  it('wraps scrollable table in div', () => {
    mount(UsaTable, {
      props: {
        caption: 'Test caption',
        scrollable: true,
      },
      attrs: {
        // Should not be inherited by root element.
        'data-test': 'test',
      },
    })

    cy.get('div.usa-table-container--scrollable').should(
      'have.attr',
      'tabindex',
      '0'
    )
    cy.get('div.usa-table-container--scrollable').should(
      'not.have.attr',
      'data-test',
      'test'
    )

    cy.get('.usa-table-container--scrollable > table').should(
      'have.attr',
      'data-test',
      'test'
    )

    cy.get('.usa-table caption').should('contain', 'Test caption')
  })

  it('add CSS classes for styling props', () => {
    mount(UsaTable, {
      props: {
        caption: 'Test caption',
        borderless: true,
        striped: true,
        compact: true,
        stacked: true,
        stackedHeader: true,
      },
    })

    cy.get('.usa-table').should('have.class', 'usa-table--borderless')
    cy.get('.usa-table').should('have.class', 'usa-table--striped')
    cy.get('.usa-table').should('have.class', 'usa-table--compact')
    cy.get('.usa-table').should('have.class', 'usa-table--stacked')
    cy.get('.usa-table').should('have.class', 'usa-table--stacked-header')

    cy.get('.usa-table thead tr').should('not.exist')
    cy.get('.usa-table tbody tr').should('not.exist')
  })

  it('uses default sort column and direction', () => {
    const testData = naturalSort(testRows).desc(
      row => row.percent?.sortValue || row.percent
    )

    mount(UsaTable, {
      props: {
        defaultSortHeader: 'percent',
        defaultSortDirection: 'descending',
        headers: testHeaders,
        rows: testRows,
      },
      slots: {
        caption: h('span', {}, 'Test caption'),
      },
    })

    cy.get('.usa-table > thead > tr').within(() => {
      cy.get('th')
        .should('have.length', 4)
        .and($th => {
          testHeaders.forEach((header, headerIndex) => {
            expect($th.eq(headerIndex).text()).to.equal(header.label)

            if (headerIndex === 2) {
              expect($th.eq(headerIndex).attr('aria-sort')).to.equal(
                'descending'
              )
              expect($th.eq(headerIndex).attr('aria-label')).to.equal(
                `${header.label}, sortable column, currently sorted descending`
              )
            } else {
              expect($th.eq(headerIndex).attr('aria-label')).to.equal(
                `${header.label}, sortable column, currently unsorted`
              )
            }
          })
        })
    })

    // Rows
    cy.get('tbody > tr')
      .should('have.length', 4)
      .each(($tr, rowIndex) => {
        cy.get(`tbody > tr:nth-of-type(${rowIndex + 1})`).within(() => {
          cy.get('th, td')
            .should('have.length', 4)
            .each(($td, cellIndex) => {
              const headerLabel = $td.attr('data-label')
              const header = testHeaders.find(
                headerItem => headerItem.label === headerLabel
              )
              const cell = testData[rowIndex][header.id]

              if (cellIndex === 2) {
                expect($td).to.have.attr('data-sort-active', 'true')
              } else {
                expect($td).not.to.have.attr('data-sort-active')
              }

              expect($td).to.have.attr(
                'data-sort-value',
                cell?.sortValue ? cell.sortValue : cell
              )

              expect($td).to.have.text(
                cell?.displayValue ? cell.displayValue : cell
              )
            })
        })
      })

    cy.get('.usa-table caption span').should('contain', 'Test caption')

    cy.get('.usa-table__announcement-region').should(
      'contain',
      'The table named "Test caption" is now sorted by "Percent" in descending order.'
    )
    cy.get('.usa-table__announcement-region span').should('not.exist')
  })

  it('only the age column is sortable', () => {
    mount(UsaTable, {
      props: {
        caption: 'Test Table',
        headers: [
          'Name',
          {
            label: 'Age',
            sortable: true,
          },
        ],
        rows: [
          {
            name: 'John',
            age: 21,
          },
          {
            name: 'Adam',
            age: {
              displayValue: 18,
            },
          },
        ],
      },
    })

    cy.get('.usa-table thead th:nth-of-type(1)').should(
      'not.have.attr',
      'data-sortable'
    )
    cy.get('.usa-table thead th:nth-of-type(1)').should('not.have.attr', 'role')
    cy.get('.usa-table thead th:nth-of-type(1)').should(
      'not.have.attr',
      'aria-label'
    )
    cy.get('.usa-table thead th:nth-of-type(1) button').should('not.exist')

    cy.get('.usa-table thead th:nth-of-type(2)').should(
      'have.attr',
      'data-sortable',
      'true'
    )
    cy.get('.usa-table thead th:nth-of-type(2)').should(
      'have.attr',
      'role',
      'columnheader'
    )
    cy.get('.usa-table thead th:nth-of-type(2)').should(
      'have.attr',
      'aria-label',
      'Age, sortable column, currently unsorted'
    )

    cy.get('.usa-table tbody th').should('not.exist')

    cy.get('.usa-table thead th:nth-of-type(2) button').click()

    cy.get('.usa-table thead th:nth-of-type(2)').should(
      'have.attr',
      'aria-label',
      'Age, sortable column, currently sorted ascending'
    )

    cy.get('.usa-table caption').should('contain', 'Test Table')

    cy.get('.usa-table__announcement-region').should(
      'contain',
      'The table named "Test Table" is now sorted by "Age" in ascending order.'
    )
  })

  it('uses header and body scoped slots', () => {
    mount(UsaTable, {
      props: {
        headers: [
          'User ID',
          { id: 'first_name', label: 'First Name', sortable: true },
          { id: 'Height', label: 'Height' },
        ],
        rows: [
          {
            'user-id': 1,
            first_name: 'John',
            Height: 5.9,
          },
          {
            'user-id': 2,
            first_name: 'Adam',
            Height: 6,
          },
        ],
      },
      slots: {
        'header-user-id': () => 'User #',
        'cell-first_name': props =>
          h(
            'a',
            { href: `/user/${props.row['user-id'].sortValue}` },
            props.row.first_name.displayValue
          ),
        'table-announcement': () => 'Test table announcement slot',
      },
    })

    cy.get('.usa-table tbody td:nth-child(2) a').should($link => {
      expect($link.eq(0).attr('href')).to.equal('/user/1')
      expect($link.eq(0)).to.contain('John')

      expect($link.eq(1).attr('href')).to.equal('/user/2')
      expect($link.eq(1)).to.contain('Adam')
    })

    cy.get('.usa-table__announcement-region').should(
      'contain',
      'Test table announcement slot'
    )
  })
})

// TODO: Check that all scoped slot prop values are passed to scoped slots.
