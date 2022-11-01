import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <BrowserRouter>
  <ThemeProvider theme={theme}>
   <CssBaseline />
   <App tab="home" />
  </ThemeProvider>
 </BrowserRouter>
)
