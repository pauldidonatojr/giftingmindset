import { createTheme } from '@mui/material/styles'
export const theme = createTheme({
 overrides: {
  MuiInputBase: {
   input: {
    background: 'red',
    color: 'red',
   },
  },
 },
 palette: {
  yellow: '#1e2026',
  divider_black: '#1b1d22',
  dull_white: '#E0E0E0',
 },
 typography: {
  dashboard_header_text: {
   color: '#E0E0E0',
   fontWeight: 500,
   fontSize: 23,
  },
  dashboard_subheading: {
   color: '#E0E0E0',
   fontWeight: 'bold',
   fontSize: 15,
  },
 },
})
