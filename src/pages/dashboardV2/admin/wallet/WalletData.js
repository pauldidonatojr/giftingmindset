import styled from 'styled-components'
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import HeaderRow from '../../../../components/HeaderRow'
import SingleButton from '../../../../components/SingleButton'
import { useMemo } from 'react'
import { MainBackground } from '../../../../components/StyledComponents'
import { WalletData } from '../../../../utils/DummyData'
import Table from '../../../../components/Table'
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

const Wallet = () => {
 const data = useMemo(() => WalletData, [])
 const columns = useMemo(() =>
  WalletData[0]
   ? Object.keys(WalletData[0]).map((key) => {
      if (key == 'wallet_name') {
       return {
        Header: 'Wallet Name',
        accessor: key,
       }
      } else if (key == 'wallet_link') {
       return {
        Header: 'Wallet Link',
        accessor: key,
       }
      } else if (key == 'wallet_account') {
       return {
        Header: 'Wallet Account',
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

export default Wallet
