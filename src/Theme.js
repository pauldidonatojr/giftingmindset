import { createTheme } from '@mui/material/styles'
import facepaint from 'facepaint'
import { hover } from '@testing-library/user-event/dist/hover'
export const theme = createTheme({
 palette: {
  yellow: '#1e2026',
  divider_black: '#1b1d22',
  dull_white: '#E0E0E0',
  dark_black: '#1B1D22',
  light_black: '#1E2026',
 },
 login_Button: {
  color: 'white',
  backgroundColor: '#231F20',
  width: '80%',
  fontFamily: 'Lato',
  fontSize: 18,
  textTransform: 'none',
  borderRadius: 2,
  marginTop: 20,
  letterSpacing: 0,
  gap: 10,
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
  plain_center: {
   fontSize: '16px',
   textAlign: 'center',
  },
  landing_heading: {
   fontSize: '40px',
   fontWeight: '500',
   color: 'white',
   textAlign: 'center',
   padding: '30px',
   '@media (max-width: 450px)': {
    padding: '0px',
   },
  },
  landing_paragraph: {
   fontSize: '18px',
   color: 'white',
   textAlign: 'center',
   paddingLeft: '50px',
   paddingRight: '50px',
   '@media (max-width: 450px)': {
    paddingLeft: '0px',
    paddingRight: '0px',
   },
  },
  landing_hero_text: {
   fontSize: '30px',
   fontWeight: '400',
   color: 'white',
   maxWidth: '800px',
   marginLeft: '50px',
   '@media (max-width: 600px)': {
    fontSize: '20px',
   },
  },
  clicktext_lower_black: {
   fontFamily: 'Lato',
   fontSize: 14,
   fontWeight: 600,
   color: '#231F20',
  },
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

export default theme
