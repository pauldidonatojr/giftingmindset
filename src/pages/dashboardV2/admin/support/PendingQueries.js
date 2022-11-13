import styled from 'styled-components'
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import HeaderRow from '../../../../components/HeaderRow'
import { MainBackground } from '../../../../components/StyledComponents'
import SingleButton from '../../../../components/SingleButton'
import { useMemo } from 'react'
import Table from '../../../../components/Table'
import { PendingQueries as PendingData } from '../../../../utils/DummyData'

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

const PendingQueries = () => {
 const data = useMemo(() => PendingData, [])
 const columns = useMemo(() =>
  PendingData[0]
   ? Object.keys(PendingData[0]).map((key) => {
      if (key == 'Image') {
       return {
        Header: key,
        accessor: key,
        Cell: ({ value }) => <TableImage src={value} />,
       }
      } else if (key == 'sr_no') {
       return {
        Header: 'Sr no',
        accessor: key,
       }
      } else if (key == 'user_id') {
       return {
        Header: 'User Id',
        accessor: key,
       }
      }
      return { Header: key, accessor: key }
     })
   : []
 )
 const tableHooks = (hooks) => {
  'null'
 }

 return (
  <MainBackground>
   <HeaderRow heading={'Open Ticket'} />
   {/* <Divider  light /> */}
   <ContentContainer>
    <Typography sx={{ marginY: '15px' }} variant="dashboard_subheading">
     Open Ticket
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

export default PendingQueries
