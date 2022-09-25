import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import { theme } from '../../../Theme'
import Divider from '@mui/material/Divider'
import HeaderRow from '../../../components/HeaderRow'
import { MainBackground } from '../../../components/StyledComponents'
import SingleButton from '../../../components/SingleButton'
import BlockedUserDropdown from '../../../components/BlockedUserDropdown'
import { useMemo } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import KeyIcon from '@mui/icons-material/Key'
import BlockIcon from '@mui/icons-material/Block'
import { AllMembersData } from '../../../utils/DummyData'
import { SelectorButtonRow } from '../../../components/StyledComponents'
import Table from '../../../components/Table'

const ContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`

const TableContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`
const RowContainer = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;
`
const ButtonsContainer = styled.div`
 display: flex;
 flex-direction: row;
 width: 150px;
 gap: 10px;
`

const TableButtonContainer = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;
 justify-content: center;
 gap: 10px;
`

const AllMembers = () => {
 const data = useMemo(() => AllMembersData, [])
 const columns = useMemo(
  () => [
   { Header: 'ID', accessor: 'id' },
   { Header: 'User ID', accessor: 'userid' },
   { Header: 'Sponser Name(ID)', accessor: 'sponsername' },
   { Header: 'Password', accessor: 'password' },
   { Header: 'Plan', accessor: 'plan' },
   { Header: 'Mobile', accessor: 'mobile' },
  ],
  []
 )
 const tableHooks = (hooks) => {
  hooks.visibleColumns.push((columns) => [
   ...columns,
   {
    id: 'Action',
    Header: 'Action',
    Cell: ({ row }) => {
     return (
      <TableButtonContainer>
       <Button
        onClick={() => alert('Edit id: ' + row.values.id)}
        startIcon={<EditIcon />}
        variant="contained"
        style={theme.table_btn_green}
       >
        Edit
       </Button>
       <Button
        onClick={() => alert('Change password id: ' + row.values.id)}
        startIcon={<KeyIcon />}
        variant="contained"
        style={theme.table_btn_green}
       >
        Change Password
       </Button>
      </TableButtonContainer>
     )
    },
   },
   {
    id: 'Block Status',
    Header: 'Block Status',
    Cell: ({ row }) => {
     return (
      <Button
       onClick={() => alert('Block id: ' + row.values.id)}
       startIcon={<BlockIcon />}
       variant="contained"
       style={theme.table_btn_red}
      >
       Block
      </Button>
     )
    },
   },
  ])
 }

 return (
  <MainBackground>
   <HeaderRow heading={'Users'} />
   {/* <Divider  light /> */}
   <ContentContainer>
    <Typography sx={{ marginY: '15px' }} variant="dashboard_subheading">
     SELECT BLOCKED USER
    </Typography>
    <Divider light />
    <SelectorButtonRow>
     <BlockedUserDropdown />
     <SingleButton ButtonText={'Filter'} />
    </SelectorButtonRow>
    <Typography sx={{ marginY: '15px' }} variant="dashboard_subheading">
     Users
    </Typography>
    <Divider light />
    <TableContainer>
     <RowContainer>
      <ButtonsContainer>
       <SingleButton ButtonText={'CSV'} />
       <SingleButton ButtonText={'Excel'} />
      </ButtonsContainer>
     </RowContainer>
     <Table customColumn={columns} customData={data} tableHooks={tableHooks} />
    </TableContainer>
   </ContentContainer>
  </MainBackground>
 )
}

export default AllMembers
