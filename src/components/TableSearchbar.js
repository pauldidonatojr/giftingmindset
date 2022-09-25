import * as React from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'
import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { theme } from '../Theme'
import styled from 'styled-components'
import { useMemo } from 'react'

const WhiteBorderFormControl = styled(FormControl)`
 & label {
  color: white;
 }
 & label.Mui-focused {
  color: white;
 }
 & .MuiOutlinedInput-root {
  &.Mui-focused fieldset {
   border-color: white;
  }
 }
`

const MyFormHelperText = ({ rowsCount }) => {
 const { focused } = useFormControl() || {}

 const helperText = useMemo(() => {
  return `Total rows ${rowsCount}`
 }, [focused])

 return <FormHelperText sx={{ color: 'white' }}>{helperText}</FormHelperText>
}

const TableSearchbar = ({
 preGlobalFilteredRows,
 globalFilter,
 setGlobalFilter,
}) => {
 const count = preGlobalFilteredRows.length
 const [value, setValue] = useState(globalFilter)
 const onChange = useAsyncDebounce((value) => {
  setGlobalFilter(value || undefined)
 }, 300)
 return (
  <Box component="form" noValidate autoComplete="off">
   <WhiteBorderFormControl
    sx={{
     width: '25ch',
     '& .MuiInputBase-root': {
      color: 'white',
     },
    }}
   >
    <OutlinedInput
     sx={{
      mt: '20px',
      backgroundColor: theme.palette.dark_black,
     }}
     value={value || ''}
     onChange={(e) => {
      setValue(e.target.value)
      onChange(e.target.value)
     }}
     placeholder="Search table"
    />
    <MyFormHelperText rowsCount={count} />
   </WhiteBorderFormControl>
  </Box>
 )
}
export default TableSearchbar
