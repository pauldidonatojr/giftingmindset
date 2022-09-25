import { createTheme } from '@mui/material/styles'
import { hover } from '@testing-library/user-event/dist/hover'
export const theme = createTheme({
 palette: {
  yellow: '#1e2026',
  divider_black: '#1b1d22',
  dull_white: '#E0E0E0',
  dark_black: '#1B1D22',
  light_black: '#1E2026',
 },

 even_row_table: {
  backgroundColor: '#1B1D22',
  color: '#E0E0E0',
  fontWeight: 'bold',
 },
 odd_row_table: {
  backgroundColor: '#1E2026',
  color: '#E0E0E0',
  fontWeight: 'bold',
 },
 table_btn_red: {
  backgroundColor: '#D9534F',
  color: 'white',
 },
 table_btn_green: {
  backgroundColor: '#5CB85C',
  color: 'white',
 },
 table_btn_yellow: {
  backgroundColor: '#F0AD4E',
  color: 'white',
 },
 add_user_btn: {
  backgroundColor: '#E0E0E0',
  color: '#1B1D22',
  fontWeight: 'bolder',
 },
 typography: {
  tree_parent: {
   color: 'white',
   fontSize: '20px',
   fontWeight: 'bold',
  },
  tree_child: {
   color: 'white',
   fontSize: '15px',
  },
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
