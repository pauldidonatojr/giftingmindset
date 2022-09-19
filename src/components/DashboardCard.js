import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import AddTaskIcon from '@mui/icons-material/AddTask'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'

const CardContainer = styled(CardContent)`
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: gray;
`
const DashboardCard = ({ card_title, card_data }) => {
 return (
  <Card sx={{ width: 450, height: 'fit-content' }}>
   <CardContainer>
    {card_title == 'Joined today' ? (
     <AddTaskIcon
      style={{
       fontSize: '38px',
       backgroundColor: '#e0e0e0',
       borderRadius: '18px',
       padding: '5px',
       boxShadow: ' 2px 7px 15px -7px rgba(0,0,0,0.37)',
      }}
     />
    ) : card_title == 'Active Ids' ? (
     <HowToRegIcon
      style={{
       fontSize: '38px',
       backgroundColor: '#e0e0e0',
       borderRadius: '18px',
       padding: '5px',
       boxShadow: ' 2px 7px 15px -7px rgba(0,0,0,0.37)',
      }}
     />
    ) : card_title == 'Total Users' ? (
     <PeopleAltIcon
      style={{
       fontSize: '38px',
       backgroundColor: '#e0e0e0',
       borderRadius: '18px',
       padding: '5px',
       boxShadow: ' 2px 7px 15px -7px rgba(0,0,0,0.37)',
      }}
     />
    ) : card_title == 'Total Investment' ? (
     <CurrencyExchangeIcon
      style={{
       fontSize: '38px',
       backgroundColor: '#e0e0e0',
       borderRadius: '18px',
       padding: '5px',
       boxShadow: ' 2px 7px 15px -7px rgba(0,0,0,0.37)',
      }}
     />
    ) : null}
    <Typography
     mt={'5px'}
     gutterBottom
     variant="h5"
     component="div"
     color="text.secondary"
    >
     {card_title}
    </Typography>
    <Typography textAlign="center" variant="h4">
     {card_data}
    </Typography>
   </CardContainer>
  </Card>
 )
}

export default DashboardCard
