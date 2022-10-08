import axios from 'axios'

export const getFamTreeData = async () => {
 try {
  let res = await axios.post(
   'https://thegiftingmindset.com/includes/react_auth.php',
   {
    type: 'admin_genetree',
    user_id: '1',
   }
  )
  let data = res.data
  return data
 } catch (error) {
  console.log('getFamTree Function error : ', error)
 }
}
