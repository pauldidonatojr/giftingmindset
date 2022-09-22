import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../assets/images/logo.PNG'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../utils/context'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LoginIcon from '@mui/icons-material/Login'

const pages = ['About', 'Team', 'Process', 'Contact']

const Navbar = () => {
 const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
 }
 const [values, setValues] = useState(initialState)
 const { user, isLoading } = useSelector((store) => store.user)
 const dispatch = useDispatch()
 const navigate = useNavigate()

 const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
 useEffect(() => {
  if (user) {
   setTimeout(() => {
    navigate('/')
   }, 2000)
  }
 }, [user])

 return (
  <AppBar position="static" style={{ backgroundColor: '#231f20' }}>
   <Container maxWidth="xl">
    <Toolbar disableGutters>
     <Avatar
      variant="square"
      src={logo}
      sx={{
       mr: 2,
       display: { xs: 'none', md: 'flex' },
      }}
      style={{
       height: '3rem',
       width: '7rem',
       borderRadius: '0.5rem',
      }}
      alt="giftingmindset logo"
     />

     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
       size="large"
       aria-label="account of current user"
       aria-controls="menu-appbar"
       aria-haspopup="true"
       color="inherit"
      >
       <MenuIcon />
      </IconButton>
      <Menu
       id="menu-appbar"
       anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
       }}
       keepMounted
       transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
       }}
       sx={{
        display: { xs: 'block', md: 'none' },
       }}
      >
       {pages.map((page) => (
        <MenuItem key={page}>
         <Typography textAlign="center">{page}</Typography>
        </MenuItem>
       ))}
      </Menu>
     </Box>
     <Typography
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
       mr: 2,
       display: { xs: 'flex', md: 'none' },
       flexGrow: 1,
       fontFamily: 'monospace',
       fontWeight: 700,
       letterSpacing: '.1rem',
       color: 'inherit',
       textDecoration: 'none',
      }}
     >
      GIFTING MINDSET
     </Typography>
     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
       <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
        {page}
       </Button>
      ))}
     </Box>
     {user ? null : (
      
      <Box style={{ cursor: 'pointer' }} sx={{ flexGrow: 0 }}>
      <Link to="/register">
        <LoginIcon fontSize="large" style={{color:"white"}} />
        </Link>
      </Box>
     )}
    </Toolbar>
   </Container>
  </AppBar>
 )
}

export default Navbar
