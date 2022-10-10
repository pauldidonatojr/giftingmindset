import axios from 'axios'

export const getAllMembersData = async () => {
 try {
  let res = await axios.post(
   'https://thegiftingmindset.com/includes/react_auth.php',
   {
    type: 'memdata',
   }
  )
  let data = res.data
  return data
 } catch (error) {
  console.log('getAllMembersData Function error : ', error)
 }
}
