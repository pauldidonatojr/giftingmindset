import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Auth } from 'aws-amplify'

import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import AdminList from './AdminList'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import UserList from './UserList'
import GM_Logo from '../assets/images/GM_logo.png'
import { useState } from 'react'
import { theme } from '../Theme'
import { useEffect } from 'react'

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
 backgroundColor: theme.palette.light_black,
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

const HeaderDrawer = ({ setIsLoggedIn, user }) => {
 const [usersExpanded, setUsersExpanded] = useState([])
 const [geneExpanded, setGeneExpanded] = useState([])
 const [settingExpanded, setSettingExpanded] = useState([])
 const [vouchExpanded, setVouchExpanded] = useState([])
 const [suppExpanded, setSuppExpanded] = useState([])
 const [open, setOpen] = useState(false)
 const [anchorEl, setAnchorEl] = useState(null)
 const [userType, setUserType] = useState()
 const handleMenu = (event) => {
  setAnchorEl(event.currentTarget)
 }

 const handleClose = () => {
  setAnchorEl(null)
 }
 const handleDrawerClose = () => {
  setOpen(false)
  setUsersExpanded([])
  setGeneExpanded([])
  setSettingExpanded([])
  setVouchExpanded([])
  setSuppExpanded([])
 }
 const handleDrawerOpen = () => {
  setOpen(true)
 }

 useEffect(() => {
  const getUserType = async () => {
   let user = await Auth.currentAuthenticatedUser()

   if (user.attributes['custom:type'] === 'admin') {
    setUserType('admin')
   } else if (user.attributes['custom:type'] === 'admin') {
    setUserType('user')
   }
  }
  getUserType()
 }, [])
 return (
  <Box>
   <AppBar position="fixed" open={open}>
    <Toolbar style={{ justifyContent: 'space-between' }}>
     <div style={{ display: 'flex' }}>
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
      <Box
       component="img"
       style={{
        height: 40,
        margin: 5,
        borderRadius: 5,
       }}
       alt="Your logo."
       src={GM_Logo}
      />
     </div>
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
    {userType === 'admin' ? (
     <AdminList
      usersExpanded={usersExpanded}
      setUsersExpanded={setUsersExpanded}
      geneExpanded={geneExpanded}
      setGeneExpanded={setGeneExpanded}
      settingExpanded={settingExpanded}
      setSettingExpanded={setSettingExpanded}
      vouchExpanded={vouchExpanded}
      setVouchExpanded={setVouchExpanded}
      setSuppExpanded={setSuppExpanded}
      suppExpanded={suppExpanded}
      setIsLoggedIn={setIsLoggedIn}
      open={open}
      setOpen={setOpen}
     />
    ) : (
     <UserList
      setIsLoggedIn={setIsLoggedIn}
      usersExpanded={usersExpanded}
      setUsersExpanded={setUsersExpanded}
      geneExpanded={geneExpanded}
      setGeneExpanded={setGeneExpanded}
      settingExpanded={settingExpanded}
      setSettingExpanded={setSettingExpanded}
      vouchExpanded={vouchExpanded}
      setVouchExpanded={setVouchExpanded}
      setSuppExpanded={setSuppExpanded}
      suppExpanded={suppExpanded}
      open={open}
      setOpen={setOpen}
     />
    )}
   </Drawer>
  </Box>
 )
}

export default HeaderDrawer
