import * as React from 'react'
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TreeItem from '@mui/lab/TreeItem'
import styled from 'styled-components'

const MuiTreeitem = styled(TreeItem)`
 label {
  & :hover {
   background-color: red;
  }
 }
`

export const ManageUsersTreeview = () => {
 const [selected, setSelected] = React.useState([])

 const handleSelect = (event, nodeIds) => {
  setSelected(nodeIds)
 }
 return (
  <TreeView
   aria-label="file system navigator"
   selected={null}
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
  >
   <MuiTreeitem nodeId="1" label="Manage Users">
    <MuiTreeitem nodeId="2" label="All Members" />
    <MuiTreeitem nodeId="3" label="Activate Request" />
    <MuiTreeitem nodeId="4" label="Inactive Members" />
    <MuiTreeitem nodeId="5" label="Blocked Members" />
   </MuiTreeitem>
  </TreeView>
 )
}

export const GenealogyTreeview = () => {
 return (
  <TreeView
   selected={null}
   aria-label="file system navigator"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
  >
   <TreeItem nodeId="1" label="Genealogy">
    <TreeItem nodeId="2" label="Direct team" />
    <TreeItem nodeId="3" label="Downline Team" />
   </TreeItem>
  </TreeView>
 )
}
export const SettingsTreeview = () => {
 return (
  <TreeView
   selected={null}
   aria-label="file system navigator"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
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

export const VouchersTreeview = () => {
 return (
  <TreeView
   selected={null}
   aria-label="file system navigator"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
  >
   <TreeItem nodeId="1" label="Vouchers">
    <TreeItem nodeId="2" label="Pending Vouchers" />
    <TreeItem nodeId="3" label="Used vouchers" />
   </TreeItem>
  </TreeView>
 )
}
export const SupportTreeview = () => {
 return (
  <TreeView
   selected={null}
   aria-label="file system navigator"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
  >
   <TreeItem nodeId="1" label="Support">
    <TreeItem nodeId="2" label="Pending Queries" />
    <TreeItem nodeId="3" label="Resolved Queries" />
   </TreeItem>
  </TreeView>
 )
}