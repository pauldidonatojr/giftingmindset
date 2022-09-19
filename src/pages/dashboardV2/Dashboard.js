import styled from 'styled-components'
import DashboardCard from '../../components/DashboardCard'
import HeaderDrawer from '../../components/HeaderDrawer'

const MainBackground = styled.div`
 display: flex;
 background-color: #1e2026;
 flex-direction: row;
 flex-wrap: wrap;
 /* align-items: center; */
 justify-content: center;
 width: 100%;
 height: 100vh;
 /* padding-left: 3%; */
 padding-top: 70px;
 gap: 10px;
`
const DashboardV2 = () => {
 return (
  <>
   <MainBackground>
    <HeaderDrawer />
    <DashboardCard card_data={'0'} card_title={'Joined today'} />
    <DashboardCard card_data={'1'} card_title={'Active Ids'} />
    <DashboardCard card_data={'2'} card_title={'Total Users'} />
    <DashboardCard card_data={'3'} card_title={'Total Investment'} />
   </MainBackground>
  </>
 )
}

export default DashboardV2
