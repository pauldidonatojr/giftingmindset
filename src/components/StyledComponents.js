import styled from 'styled-components'
import { TextField } from '@mui/material'

export const WhiteBorderTextField = styled(TextField)`
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
export const SelectorButtonRow = styled.div`
 display: flex;
 flex-direction: row;
 width: 50%;
 height: fit-content;
 gap: 20px;
`
export const MainBackground = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 height: 100vh;
 background-color: #1e2026;
 align-items: center;
 overflow-y: auto;
`
