import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import theme from '../../../../Theme'
import Divider from '@mui/material/Divider'
import HeaderRow from '../../../../components/HeaderRow'
import { MainBackground } from '../../../../components/StyledComponents'
import SingleButton from '../../../../components/SingleButton'
import { useMemo } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { GiftReceievedData } from '../../../../utils/DummyData'
import Table from '../../../../components/Table'
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

const GiftReceievedHistory = () => {
 const data = useMemo(() => GiftReceievedData, [])
 const columns = useMemo(() =>
  GiftReceievedData[0]
   ? Object.keys(GiftReceievedData[0]).map((key) => {
      if (key == 'transaction_image') {
       return {
        Header: 'Transaction Image',
        accessor: key,
        Cell: ({ value }) => <TableImage src={value} />,
       }
      } else if (key == 'sr_no') {
       return {
        Header: 'Sr No',
        accessor: key,
       }
      } else if (key == 'received_by') {
       return {
        Header: 'Received By',
        accessor: key,
       }
      } else if (key == 'payment_type') {
       return {
        Header: 'Payment type',
        accessor: key,
       }
      } else if (key == 'payment_info') {
       return {
        Header: 'Payment info',
        accessor: key,
       }
      } else if (key == 'amount') {
       return {
        Header: 'Amount',
        accessor: key,
       }
      } else if (key == 'transaction_details') {
       return {
        Header: 'Transcation details',
        accessor: key,
       }
      } else if (key == 'transaction_id') {
       return {
        Header: 'Transaction id',
        accessor: key,
       }
      } else if (key == 'approved_date') {
       return {
        Header: 'Approved Date',
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
   <HeaderRow heading={'Gift Received History'} />
   {/* <Divider  light /> */}
   <ContentContainer>
    <Typography sx={{ marginY: '15px' }} variant="dashboard_subheading">
     Gift Received History
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

export default GiftReceievedHistory
