import axios from 'axios'

export const getFamTreeData = async (id) => {
 try {
  let res = await axios.get('https://thegiftingmindset.com/includes/tree.php', {
   params: {
    user_id: id,
   },
  })
  let data = res.data
  return data
 } catch (error) {
  console.log('getFamTree Function error : ', error)
 }
}
