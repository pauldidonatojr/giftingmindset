import { Navbar } from '../components'
import styled from 'styled-components'
import Grow from '@mui/material/Grow'
import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import nodesBg from '../assets/images/nodesBg.jpg'
import workImg from '../assets/images/work.jpg'
import HowWork from '../assets/images/HowWeWork.jpg'
import Button from '@mui/material/Button'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import CampaignIcon from '@mui/icons-material/Campaign'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { useNavigate } from 'react-router-dom'

const Background = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 overflow-y: auto;
`
const BackgroundImgDiv = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 background-image: ${(props) => (props.bgImg ? `url(${props.bgImg})` : null)};
 background-repeat: no-repeat;
 background-size: cover;
 justify-content: center;
 height: 800px;
 @media (max-width: 600px) {
  height: fit-content;
 }
`
const imgStyle = {
 width: '600px',
 height: '400px',
 alignSelf: 'center',
}

const SimpleDiv = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;
 height: fit-content;
 background-color: black;
 padding-bottom: 30px;
`

const ButtonsContainer = styled.div`
 display: flex;
 flex-direction: row;
 height: fit-content;
 gap: 5px;
 margin: 50px;
`

const Footer = styled.div`
 display: flex;
 flex-direction: column;
 background-color: black;
 width: 100%;
 border-top: 1px solid grey;
`

const IconStyle = {
 color: 'white',
 fontSize: '45px',
 marginRight: '15px',
}
const RowDiv = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
`
const ColumnDiv = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 min-width: 300px;
 flex: 1;
`

const ButtonStyle = {
 color: 'white',
 border: '1px solid white',
}

const PageTexts = {
 first: 'THE RIGHT MINDSET IS CRUCIAL IN ACHIEVING SUCCESS.',
 second:
  'IF YOU ARE READY TO CHANGE YOUR LIFE,YOU HAVE CERTAINLY COME TO THE RIGHT PLACE AT THE RIGHT TIME.',
 third: 'About Us',
 fourth:
  ' This program is phenomenal and all of the hard work of creating it has been diminished. The originator of this program has been involved in fund gathering platforms for more than 5 years and has studied these platforms inside and out. She has answered every question with a solution and she has taken all of the guess work out of the equation. Much, much work has been put into this program and it has been made the easiest and the most brilliant funding program.',
 fifth: 'WHEN THE LIGHTS COME ON!',
 sixth:
  ' Each individual that joins this program has the opportunity to gift forward $100 and receives a place into our automated system to begin immediately. Everyone that chooses to secure a place, will follow the very same protocol with no special exceptions for anyone which keeps the entire system flowing smoothly and functioning properly.',
 seventh:
  'These things are vital to your success in the Gifting Mindset program. Please make sure you have done all of these items. 1. Hear a zoom meeting and stay abreast of the Gifting Mindset Group to know when there will and will not be a meeting; or go to our website in the "Gifting Mindset Breaking News" section on the home page at www.giftingmindset.org 2. *YOU MUST SIGN IN TO THE AUTOMATED SYSTEM PER EACH ACCOUNT YOU WOULD LIKE TO HAVE* You are allowed multiple positions if you"d like, and they are to be listed (Your Name 1), (Your Name 2) and (Your Name 3) etc... Each time you place your name 1, 2 and 3, a separate "JOIN US", GIFTING and (GM NUMBER) will be assigned to you so you will need to keep up with all of your account dashboards. 3. Apply for a One United bank account (mandatory) and Apply for a Chime account. It would be helpful to have other methods of payment such as: Zelle, Revolut, Venmo, PayPal, Cash App, etc... you may download those apps through the website, www.giftingmindset.org 4. Once your bank accounts are activated, send $1 to your inviter, this is practice so you will not just have the accounts but know how to send your gifts. If you are introduced through the website you may chat in the group and ask someone to help you with this transaction. 5. Make sure all of your gifting preferences are listed in your profile so your 3 gifters/ (Juniors) will be able to gift you. 6. Unfortunately, at this present time, we are unable to serve internationally due to gifting preference issues.',
 eighth: 'Listen Up!',
 ninth: 'THE RIGHT MINDSET IS CRUCIAL IN ACHIEVING SUCCESS.',
 tenth:
  'These are unsettling and unprecedented times. The speed at which coronavirus has taken hold around the world, and the dramatic changes to our lives that it has brought, would have been difficult for many of us to contemplate on. With this strain on our finances we turn to each other for support. As we all do our part for the greater good, we can hold onto our routines, connect with our loved ones and community, learn, and stay informed, many of us from the safety of our homes are able to work and support our family, kids taking online classes and so much more. Welcome to Gifting Mindset, a community where everyone is treated equally. Our program is built with integrity and stability. The Gifting Mindset program was created to change the lives of each and every member of its community. We joined together to make our neighbourhoods, our cities, and our world a better place. Gifting Mindset is filled with like-minded individuals who share and practice the Universal Laws of giving and receiving. When we share something with the people around us, no matter how small or insignificant it seems, it can help us make connections we never realized we could. Gifting Mindset has bettered countless lives. People about to lose their homes have been saved from financial ruin. College education has been made possible. All from one easy choice, to join together in the act of gifting. By joining Gifting Mindset you understand that you are donating into the lives of others and in return others are donating into your life and wellbeing. What we stand for: Putting God First Positive Vibes at ALL Times! Team Building Full Transparency Respect To Every Member Have Faith-Trust OUR system and Trust OUR process!',
 eleventh: 'OUR PROCESS AND HOW WE WORK',
 twelveth:
  " 3 people will be placed on your board. You will be gifted when you reach the desired position. Each time you receive a certain amount you will be prompted by the system to gift over $100 to your system generated neighbor which will be your Senior's, Seniors, Senior or Pure Gift. The gifting preference for Pure Gift will most likely be One United Bank. In any case, Our leader, Tink will be the governing faction on this decision. The process is simple and easy. You will receive your gifts non-stop until you decide to leave the system.",
 thirteen:
  " What is 'Pure Gift' And What Is it For; The concept of 'Pure Gift' is to help sustain our community and to ensure it will never be without a steady stream of new members. Our Pure Gift is a multitude of accounts that operate just like a person and will automatically be placed on the board to aid in the growth and sustainability of our board to eliminate the stalling process.",
 fourteen:
  ' Gifting Mindset has 2 main gifting methods and would prefer and encourage you to utilize both methods of gifting and receiving your gifts. Chime bank--------------------No fees, Downloadable app One United Bank--------------Downloadable app, Open a checking or savings account Other methods include: Zelle PayPal Revolut Venmo Cash App',
}

const Landing = () => {
 const navigate = useNavigate()
 const [showText, setShowText] = useState(false)

 const handleClickSignUp = () => {
  navigate('/signUp')
 }
 const handleClickSignIn = () => {
  navigate('/signIn')
 }

 const timeOutFunction = () => {
  setTimeout(() => {
   setShowText((prev) => !prev)
  }, 4000)
 }

 useEffect(() => {
  timeOutFunction()
 }, [])
 return (
  <Background>
   <Navbar />
   <BackgroundImgDiv bgImg={nodesBg}>
    <Grow in={!showText} {...(showText ? { timeout: 1000 } : {})}>
     <Typography variant="landing_hero_text">{PageTexts.first}</Typography>
    </Grow>
    <Grow
     in={showText}
     {...(showText ? { timeout: 1000 } : {})}
     addEndListener={timeOutFunction}
    >
     <Typography variant="landing_hero_text">{PageTexts.second}</Typography>
    </Grow>
    <ButtonsContainer>
     <Button onClick={handleClickSignUp} style={ButtonStyle} variant="outlined">
      Join us
     </Button>
     <Button onClick={handleClickSignIn} style={ButtonStyle} variant="outlined">
      Login
     </Button>
    </ButtonsContainer>
   </BackgroundImgDiv>
   <SimpleDiv id="About">
    <Typography variant="landing_heading">{PageTexts.third}</Typography>
    <Typography variant="landing_paragraph">{PageTexts.fourth}</Typography>
    <RowDiv>
     <ColumnDiv>
      <Typography variant="landing_heading">
       <>
        <LightbulbIcon style={IconStyle} />
        {PageTexts.fifth}
       </>
      </Typography>
      <Typography variant="landing_paragraph">{PageTexts.sixth}</Typography>
     </ColumnDiv>
     <ColumnDiv>
      <Typography variant="landing_heading">
       <>
        <CampaignIcon style={IconStyle} />
        {PageTexts.eighth}
       </>
      </Typography>
      <Typography variant="landing_paragraph">{PageTexts.seventh}</Typography>
     </ColumnDiv>
    </RowDiv>
    <Typography variant="landing_heading">{PageTexts.ninth}</Typography>
    <Typography variant="landing_paragraph">{PageTexts.tenth}</Typography>
   </SimpleDiv>
   <BackgroundImgDiv id="Process" bgImg={workImg}>
    <Typography variant="landing_heading">{PageTexts.eleventh}</Typography>
    <img alt="" style={imgStyle} src={HowWork} />
   </BackgroundImgDiv>
   <SimpleDiv>
    <Typography variant="landing_heading">Step #1</Typography>
    <Typography variant="landing_paragraph">Attend a zoom call.</Typography>
    <Typography variant="landing_heading">Step #2</Typography>
    <Typography variant="landing_paragraph">
     Click on “ Join Now” and fill in the form to be a gifter.
    </Typography>
    <Typography variant="landing_heading">Step #3</Typography>
    <Typography variant="landing_paragraph">
     Gift over to your Senior's, Seniors, Senior $100 usd.
    </Typography>
    <Typography variant="landing_heading">Step #4</Typography>
    <Typography variant="landing_paragraph">{PageTexts.twelveth}</Typography>
    <Typography variant="landing_heading">PURE GIFT</Typography>
    <Typography variant="landing_paragraph">{PageTexts.thirteen}</Typography>
    <Typography variant="landing_heading">THE GIFTING METHODS</Typography>
    <Typography variant="landing_paragraph">{PageTexts.fourteen}</Typography>
   </SimpleDiv>
   <Footer id="Contact">
    <ColumnDiv>
     <RowDiv>
      <ColumnDiv>
       <Typography variant="landing_heading">Gifting Mindset</Typography>
       <Typography variant="landing_paragraph">
        True value is not having money but helping others seek value in
        themselves.
       </Typography>
      </ColumnDiv>
      <ColumnDiv>
       <Typography variant="landing_heading">Contact Us</Typography>
       <Typography variant="landing_paragraph">TEL: +12024686465</Typography>
       <Typography variant="landing_paragraph">
        ONLINE WWW.GIFTINGMINDSET.ORG
       </Typography>
       <Typography variant="landing_paragraph">ladies3.dt@gmail.com</Typography>
       <Typography variant="landing_paragraph">
        www.giftingmindset.org
       </Typography>
       <RowDiv>
        <FacebookIcon style={IconStyle} />
        <TwitterIcon style={IconStyle} />
        <YouTubeIcon style={IconStyle} />
       </RowDiv>
      </ColumnDiv>
     </RowDiv>
     <Typography variant="landing_paragraph">
      © 2022 All Rights Reserved. Gifting Mindset.
     </Typography>
    </ColumnDiv>
   </Footer>
  </Background>
 )
}

export default Landing
