import styled from 'styled-components'
import { Typography } from '@mui/material'
import theme from '../../../Theme'
import Divider from '@mui/material/Divider'
import HeaderRow from '../../../components/HeaderRow'
import SingleButton from '../../../components/SingleButton'
import { MainBackground } from '../../../components/StyledComponents'
import { useMemo } from 'react'
import { DownlineData } from '../../../utils/DummyData'
import Table from '../../../components/Table'
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

const Downline = () => {
 const data = useMemo(() => DownlineData, [])
 const columns = useMemo(() =>
  DownlineData[0]
   ? Object.keys(DownlineData[0]).map((key) => {
      return { Header: key, accessor: key }
     })
   : []
 )
 const tableHooks = (hooks) => {
  'null'
 }

 return (
  <MainBackground>
   <HeaderRow heading={'Downline Distributor'} />
   {/* <Divider  light /> */}
   <ContentContainer>
    <Typography sx={{ marginY: '15px' }} variant="dashboard_subheading">
     Downline Distributor
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

export default Downline
