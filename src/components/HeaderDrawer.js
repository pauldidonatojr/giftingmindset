import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
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
import {
 ManageUsersTreeview,
 GenealogyTreeview,
 SettingsTreeview,
 VouchersTreeview,
 SupportTreeview,
} from './DashboardMenuTreeview'
import { useNavigate } from 'react-router-dom'
import GM_Logo from '../assets/images/GM_logo.png'
import { useState } from 'react'
import { theme } from '../Theme'
import { Auth } from 'aws-amplify'

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

const HeaderDrawer = ({ setIsLoggedIn }) => {
 const navigate = useNavigate()

 const handleLogout = async () => {
  try {
   await Auth.signOut()
   setIsLoggedIn(false)
   navigate('/landing')
  } catch (error) {
   console.log('error signing out: ', error)
  }
 }
 const [open, setOpen] = useState(false)
 const [anchorEl, setAnchorEl] = useState(null)
 const [usersExpanded, setUsersExpanded] = useState([])
 const [geneExpanded, setGeneExpanded] = useState([])
 const [settingExpanded, setSettingExpanded] = useState([])
 const [vouchExpanded, setVouchExpanded] = useState([])
 const [suppExpanded, setSuppExpanded] = useState([])

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
  setUsersExpanded([])
  setGeneExpanded([])
  setSettingExpanded([])
  setVouchExpanded([])
  setSuppExpanded([])
 }

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
    <List>
     {[
      'Dashboard',
      <ManageUsersTreeview usersExpanded={usersExpanded} />,
      <GenealogyTreeview geneExpanded={geneExpanded} />,
      'Gift History',
      <SettingsTreeview settingExpanded={settingExpanded} />,
      'Completed Boards',
      <VouchersTreeview vouchExpanded={vouchExpanded} />,
      <SupportTreeview suppExpanded={suppExpanded} />,
      'Logout',
     ].map((text, index) => (
      <ListItem key={index} disablePadding sx={{ display: 'block' }}>
       <ListItemButton
        onClick={() => {
         if (index == 8) {
          console.log('Logout')
          return handleLogout()
         } else if (index == 1) {
          usersExpanded.length == 0
           ? setUsersExpanded(['1'])
           : setUsersExpanded([])
          handleDrawerOpen()
         } else if (index == 2) {
          geneExpanded.length == 0
           ? setGeneExpanded(['1'])
           : setGeneExpanded([])
          handleDrawerOpen()
         } else if (index == 4) {
          settingExpanded.length == 0
           ? setSettingExpanded(['1'])
           : setSettingExpanded([])
          handleDrawerOpen()
         } else if (index == 6) {
          vouchExpanded.length == 0
           ? setVouchExpanded(['1'])
           : setVouchExpanded([])
          handleDrawerOpen()
         } else if (index == 7) {
          suppExpanded.length == 0
           ? setSuppExpanded(['1'])
           : setSuppExpanded([])
          handleDrawerOpen()
         } else if (index == 0) {
          return navigate('/dashboard')
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
