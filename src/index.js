import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AppProvider } from './utils/context'
import { store } from './store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme'
import CssBaseline from '@mui/material/CssBaseline'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <Provider store={store}>
  <AppProvider>
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <App tab="home" />
   </ThemeProvider>
  </AppProvider>
 </Provider>
)
