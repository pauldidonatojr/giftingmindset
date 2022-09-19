import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import HomeMaxIcon from '@mui/icons-material/HomeMax'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import SettingsIcon from '@mui/icons-material/Settings'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import LogoutIcon from '@mui/icons-material/Logout'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import {
 ManageUsersTreeview,
 GenealogyTreeview,
 SettingsTreeview,
 VouchersTreeview,
 SupportTreeview,
} from './DashboardMenuTreeview'
import { useNavigate } from 'react-router-dom'
import { removeUserFromLocalStorage } from '../utils/localStorage'
import GM_Logo from '../assets/images/GM_logo.png'

const drawerWidth = 300

const openedMixin = (theme) => ({
 width: drawerWidth,
 transition: theme.transitions.create('width', {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.enteringScreen,
 }),
 overflowX: 'hidden',
})

const closedMixin = (theme) => ({
 transition: theme.transitions.create('width', {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
 }),
 overflowX: 'hidden',
 width: `calc(${theme.spacing(7)} + 1px)`,
 [theme.breakpoints.up('sm')]: {
  width: `calc(${theme.spacing(8)} + 1px)`,
 },
})

const DrawerHeader = styled('div')(({ theme }) => ({
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'flex-end',
 padding: theme.spacing(0, 1),
 // necessary for content to be below app bar
 ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
 shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
 zIndex: theme.zIndex.drawer + 1,
 transition: theme.transitions.create(['width', 'margin'], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
 }),
 ...(open && {
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.enteringScreen,
  }),
 }),
}))

const Drawer = styled(MuiDrawer, {
 shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
 width: drawerWidth,
 flexShrink: 0,
 whiteSpace: 'nowrap',
 boxSizing: 'border-box',
 ...(open && {
  ...openedMixin(theme),
  '& .MuiDrawer-paper': openedMixin(theme),
 }),
 ...(!open && {
  ...closedMixin(theme),
  '& .MuiDrawer-paper': closedMixin(theme),
 }),
}))

const HeaderDrawer = () => {
 const { user, isLoading } = useSelector((store) => store.user)
 const navigate = useNavigate()

 const handleLogout = () => {
  removeUserFromLocalStorage()
  if (user) {
   navigate('/landing')
  }
 }
 const theme = useTheme()
 const [open, setOpen] = React.useState(false)
 const [anchorEl, setAnchorEl] = React.useState(null)

 const handleMenu = (event) => {
  setAnchorEl(event.currentTarget)
 }

 const handleClose = () => {
  setAnchorEl(null)
 }

 const handleDrawerOpen = () => {
  setOpen(true)
 }

 const handleDrawerClose = () => {
  setOpen(false)
 }

 return (
  <Box sx={{ display: 'flex' }}>
   <CssBaseline />
   <AppBar position="fixed" open={open}>
    <Toolbar>
     <Box
      component="img"
      sx={{
       height: 40,
       margin: 1,
       borderRadius: 1,
      }}
      alt="Your logo."
      src={GM_Logo}
     />
     <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={{
       marginRight: 5,
       ...(open && { display: 'none' }),
      }}
     >
      <MenuIcon />
     </IconButton>
     <Typography variant="h6" noWrap component="div">
      Admin
     </Typography>
     <div>
      <IconButton
       size="large"
       aria-label="account of current user"
       aria-controls="menu-appbar"
       aria-haspopup="true"
       onClick={handleMenu}
       color="inherit"
      >
       <AccountCircle />
      </IconButton>
      <Menu
       id="menu-appbar"
       anchorEl={anchorEl}
       anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
       }}
       keepMounted
       transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
       }}
       open={Boolean(anchorEl)}
       onClose={handleClose}
      >
       <MenuItem onClick={handleClose}>Profile</MenuItem>
       <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
     </div>
    </Toolbar>
   </AppBar>
   <Drawer variant="permanent" open={open}>
    <DrawerHeader>
     <IconButton onClick={handleDrawerClose}>
      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
     </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
     {[
      'Dashboard',
      <ManageUsersTreeview />,
      <GenealogyTreeview />,
      'Gift History',
      <SettingsTreeview />,
      'Completed Boards',
      <VouchersTreeview />,
      <SupportTreeview />,
      'Logout',
     ].map((text, index) => (
      <ListItem key={text} disablePadding sx={{ display: 'block' }}>
       <ListItemButton
        onClick={() => {
         if (index == 8) {
          console.log('Logout')
          return handleLogout()
         }
        }}
        sx={{
         minHeight: 48,
         justifyContent: open ? 'initial' : 'center',
         px: 2.5,
        }}
       >
        <ListItemIcon
         sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
         }}
        >
         {index === 0 ? (
          <HomeMaxIcon />
         ) : index === 1 ? (
          <PeopleAltIcon />
         ) : index === 2 ? (
          <AccountTreeIcon />
         ) : index === 3 ? (
          <CardGiftcardIcon />
         ) : index === 4 ? (
          <SettingsIcon />
         ) : index === 5 ? (
          <FactCheckIcon />
         ) : index === 6 ? (
          <ConfirmationNumberIcon />
         ) : index === 7 ? (
          <SupportAgentIcon />
         ) : (
          <LogoutIcon />
         )}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
       </ListItemButton>
      </ListItem>
     ))}
    </List>
   </Drawer>
  </Box>
 )
}

export default HeaderDrawer
