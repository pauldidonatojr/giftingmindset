import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import { theme } from '../../../Theme'
import Divider from '@mui/material/Divider'
import HeaderRow from '../../../components/HeaderRow'
import { MainBackground } from '../../../components/StyledComponents'
import SingleButton from '../../../components/SingleButton'
import { useMemo } from 'react'
import { DirectTeamData } from '../../../utils/DummyData'
import Table from '../../../components/Table'
import KeyIcon from '@mui/icons-material/Key'

const ContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`
const TableImage = styled.img`
 height: 80px;
 width: 80px;
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

const DirectTeam = () => {
 const data = useMemo(() => DirectTeamData, [])
 const columns = useMemo(() =>
  DirectTeamData[0]
   ? Object.keys(DirectTeamData[0]).map((key) => {
      if (key == 'transaction_image') {
       return {
        Header: key,
        accessor: key,
        Cell: ({ value }) => <TableImage src={value} />,
       }
      }
      return { Header: key, accessor: key }
     })
   : []
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
        startIcon={<KeyIcon />}
        variant="contained"
        style={theme.table_btn_yellow}
       >
        Change Password
       </Button>
      </TableButtonContainer>
     )
    },
   },
  ])
 }

 return (
  <MainBackground>
   <HeaderRow heading={'Direct Distributor'} />
   {/* <Divider  light /> */}
   <ContentContainer>
    <Typography sx={{ marginY: '15px' }} variant="dashboard_subheading">
     DIRECT DISTRIBUTOR LIST
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

export default DirectTeam
