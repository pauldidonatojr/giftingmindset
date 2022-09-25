import styled from 'styled-components'
import TableSearchbar from './TableSearchbar'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import {
 useTable,
 useGlobalFilter,
 usePagination,
 useSortBy,
} from 'react-table'
import { theme } from '../Theme'

const TableStyles = styled.div`
 padding: 1rem;
 table {
  width: 100%;
  border-spacing: 0;
  border: 1px solid black;

  tr {
   :last-child {
    td {
     border-bottom: 0;
    }
   }
  }

  th {
   padding-top: 8px;
   padding-bottom: 8px;
   color: #e0e0e0;
  }

  td {
   margin: 0;
   padding: 0.5rem;
   border-bottom: 1px solid black;
   border-right: 1px solid black;

   :last-child {
    border-right: 0;
   }
  }
 }
`

const Table = ({ customColumn, customData, tableHooks }) => {
 const columns = customColumn
 const data = customData

 const tableInstance = useTable(
  { columns, data, initialState: { pageIndex: 0 } },
  useGlobalFilter,
  tableHooks,
  useSortBy,
  usePagination
 )

 const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
  page,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  preGlobalFilteredRows,
  setGlobalFilter,
  state: { pageIndex, pageSize, globalFilter },
 } = tableInstance

 const isEven = (idx) => idx % 2 == 0

 return (
  <TableStyles>
   <>
    <TableSearchbar
     preGlobalFilteredRows={preGlobalFilteredRows}
     setGlobalFilter={setGlobalFilter}
     globalFilter={globalFilter}
    />
    <table {...getTableProps()}>
     <thead>
      {headerGroups.map((headerGroup) => (
       <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
         <th {...column.getHeaderProps(column.getSortByToggleProps())}>
          {column.render('Header')}
          {column.isSortedDesc ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
         </th>
        ))}
       </tr>
      ))}
     </thead>
     <tbody {...getTableBodyProps()}>
      {page.map((row, idx) => {
       prepareRow(row)
       return (
        <tr
         {...row.getRowProps()}
         style={isEven(idx) ? theme.even_row_table : theme.odd_row_table}
        >
         {row.cells.map((cell) => {
          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
         })}
        </tr>
       )
      })}
     </tbody>
    </table>
    <div className="pagination">
     <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
      {'<<'}
     </button>{' '}
     <button onClick={() => previousPage()} disabled={!canPreviousPage}>
      {'<'}
     </button>{' '}
     <button onClick={() => nextPage()} disabled={!canNextPage}>
      {'>'}
     </button>{' '}
     <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
      {'>>'}
     </button>{' '}
     <span>
      Page{' '}
      <strong>
       {pageIndex + 1} of {pageOptions.length}
      </strong>{' '}
     </span>
     <span>
      | Go to page:{' '}
      <input
       type="number"
       defaultValue={pageIndex + 1}
       onChange={(e) => {
        const page = e.target.value ? Number(e.target.value) - 1 : 0
        gotoPage(page)
       }}
       style={{ width: '100px' }}
      />
     </span>{' '}
     <select
      value={pageSize}
      onChange={(e) => {
       setPageSize(Number(e.target.value))
      }}
     >
      {[10, 20, 30, 40, 50].map((pageSize) => (
       <option key={pageSize} value={pageSize}>
        Show {pageSize}
       </option>
      ))}
     </select>
    </div>
   </>
  </TableStyles>
 )
}

export default Table
