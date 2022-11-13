import * as React from 'react'
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TreeItem from '@mui/lab/TreeItem'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MuiTreeitem = styled(TreeItem)`
 label {
  & :hover {
   background-color: red;
  }
 }
`

export const ManageUsersTreeview = ({ usersExpanded }) => {
 let navigate = useNavigate()

 const [selected, setSelected] = useState([])

 const handleSelect = (event, nodeIds) => {
  setSelected(nodeIds)
 }
 return (
  <TreeView
   aria-label="file system navigator"
   expanded={usersExpanded}
   selected={null}
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400 }}
  >
   <MuiTreeitem nodeId="1" label="Manage Users">
    <MuiTreeitem
     nodeId="2"
     label="Add User"
     onClick={() => navigate('/adduser')}
    />
    <MuiTreeitem
     onClick={() => navigate('/allmembers')}
     nodeId="3"
     label="All Members"
    />
    <MuiTreeitem
     onClick={() => navigate('/activaterequest')}
     nodeId="4"
     label="Activate Request"
    />
    <MuiTreeitem nodeId="5" label="Inactive Members" />
    <MuiTreeitem nodeId="6" label="Blocked Members" />
   </MuiTreeitem>
  </TreeView>
 )
}

export const GenealogyTreeview = ({ geneExpanded }) => {
 let navigate = useNavigate()

 return (
  <TreeView
   expanded={geneExpanded}
   selected={null}
   aria-label="file system navigator"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400 }}
  >
   <TreeItem nodeId="1" label="Genealogy">
    <TreeItem
     onClick={() => navigate('/genealogytree')}
     nodeId="2"
     label="Genealogy tree"
    />
    <TreeItem
     onClick={() => navigate('/directteam')}
     nodeId="3"
     label="Direct team"
    />
    <TreeItem
     onClick={() => navigate('/downline')}
     nodeId="4"
     label="Downline Team"
    />
   </TreeItem>
  </TreeView>
 )
}

export const WalletDataView = ({ walletExpanded }) => {
 let navigate = useNavigate()

 return (
  <TreeView
   expanded={walletExpanded}
   selected={null}
   aria-label="file system navigator"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400 }}
  >
   <TreeItem nodeId="1" label="Wallet">
    <TreeItem
     onClick={() => navigate('/walletdata')}
     nodeId="2"
     label="Wallet Data"
    />
   </TreeItem>
  </TreeView>
 )
}

export const SettingsTreeview = ({ settingExpanded }) => {
 return (
  <TreeView
   expanded={settingExpanded}
   selected={null}
   aria-label="file system navigator"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400 }}
  >
   <TreeItem nodeId="1" label="Settings">
    <TreeItem nodeId="2" label="Logo" />
    <TreeItem nodeId="3" label="Slider" />
    <TreeItem nodeId="4" label="About" />
    <TreeItem nodeId="5" label="About Left" />
    <TreeItem nodeId="6" label="About Right" />
    <TreeItem nodeId="7" label="Success" />
    <TreeItem nodeId="8" label="Process Image" />
    <TreeItem nodeId="9" label="Change" />
    <TreeItem nodeId="10" label="Process" />
    <TreeItem nodeId="11" label="Contact" />
    <TreeItem nodeId="12" label="Footer" />
   </TreeItem>
  </TreeView>
 )
}

export const VouchersTreeview = ({ vouchExpanded }) => {
 return (
  <TreeView
   expanded={vouchExpanded}
   selected={null}
   aria-label="file system navigator"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400 }}
  >
   <TreeItem nodeId="1" label="Vouchers">
    <TreeItem nodeId="2" label="Pending Vouchers" />
    <TreeItem nodeId="3" label="Used vouchers" />
   </TreeItem>
  </TreeView>
 )
}
export const SupportTreeview = ({ suppExpanded }) => {
 let navigate = useNavigate()

 return (
  <TreeView
   expanded={suppExpanded}
   selected={null}
   aria-label="file system navigator"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400 }}
  >
   <TreeItem nodeId="1" label="Support">
    <TreeItem
     onClick={() => navigate('/pendingqueries')}
     nodeId="2"
     label="Pending Queries"
    />
    <TreeItem
     onClick={() => navigate('/resolvedqueries')}
     nodeId="3"
     label="Resolved Queries"
    />
   </TreeItem>
  </TreeView>
 )
}

export const UserSupportTreeview = ({ suppExpanded }) => {
 let navigate = useNavigate()

 return (
  <TreeView
   expanded={suppExpanded}
   selected={null}
   aria-label="file system navigator"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400 }}
  >
   <TreeItem nodeId="1" label="Support">
    <TreeItem
     onClick={() => navigate('/openticket')}
     nodeId="2"
     label="Open ticket"
    />
    <TreeItem nodeId="3" label="Closed ticket" />
   </TreeItem>
  </TreeView>
 )
}
