import { React } from 'react'
import logo from '../assets/images/logo.PNG'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'

const pages = ['About', 'Process', 'Contact']

const Navbar = () => {
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
       //    <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
       <a
        style={{ marginLeft: '15px', color: 'white', display: 'block' }}
        href={`#${page}`}
       >
        {page}
       </a>
      ))}
     </Box>
    </Toolbar>
   </Container>
  </AppBar>
 )
}

export default Navbar
