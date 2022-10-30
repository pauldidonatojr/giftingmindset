import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import { theme } from '../../../Theme'
import Divider from '@mui/material/Divider'
import HeaderRow from '../../../components/HeaderRow'
import { MainBackground } from '../../../components/StyledComponents'
import SingleButton from '../../../components/SingleButton'
import { useMemo } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { ActivateRequestData } from '../../../utils/DummyData'
import Table from '../../../components/Table'
import CheckIcon from '@mui/icons-material/Check'

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

const ActivateRequest = () => {
 const data = useMemo(() => ActivateRequestData, [])
 const columns = useMemo(() =>
  ActivateRequestData[0]
   ? Object.keys(ActivateRequestData[0]).map((key) => {
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
        startIcon={<CheckIcon />}
        variant="contained"
        style={theme.table_btn_green}
       >
        Approved User
       </Button>
      </TableButtonContainer>
     )
    },
   },
  ])
 }

 return (
  <MainBackground>
   <HeaderRow heading={'Activate Request'} />
   {/* <Divider  light /> */}
   <ContentContainer>
    <Typography sx={{ marginY: '15px' }} variant="dashboard_subheading">
     ACTIVATE REQUEST
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

export default ActivateRequest
