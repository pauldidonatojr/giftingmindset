import { AssistantDirection } from '@mui/icons-material'

export const FamilyTreeData = [
 {
  name: 'Root',
  gender: 'Male',
  id: 'GM123456789',
  children: [
   {
    name: 'Child 1',
    gender: 'Female',
    id: 'GM123456789',
    children: [
     {
      name: 'Grand Child',
      gender: 'Male',
      id: 'GM123456789',
     },
    ],
   },
   {
    name: 'Child 2',
    gender: 'Female',
    id: 'GM123456789',

    children: [
     {
      name: 'Grand Child',
      gender: 'Male',
      id: 'GM123456789',

      children: [
       {
        name: 'Great Grand Child 1',
        gender: 'Male',
        id: 'GM123456789',
       },
       {
        name: 'Grand Grand Child 2',
        gender: 'Female',
        id: 'GM123456789',
       },
      ],
     },
    ],
   },
   {
    name: 'Child 3',
    gender: 'Female',
    id: 'GM123456789',
   },
  ],
 },
]

export const AllMembersData = [
 {
  id: 1,
  userid: 11,
  name: 'Test 1',
  sponsername: 'Sponser A',
  password: '',
  plan: 10.23,
  mobile: 123456,
  country: 'USA',
 },
 {
  id: 2,
  userid: 12,
  name: 'Test 2',
  sponsername: 'Sponser B',
  password: 32145,
  plan: 10.23,
  mobile: 4.43,
  country: 'China',
 },
 {
  id: 3,
  userid: 13,
  name: 'Test 3',
  sponsername: 'Sponser C',
  password: 1499,
  plan: 10.23,
  mobile: 4.43,
  country: 'RUS',
 },
 {
  id: 4,
  userid: 14,
  name: 'Test 4',
  sponsername: 'Sponser D',
  password: 1499,
  plan: 10.23,
  mobile: 4.43,
  country: 'IND',
 },
 {
  id: 5,
  userid: 15,
  name: 'Test 5',
  sponsername: 'Sponser E',
  password: 22233,
  plan: 10.23,
  mobile: 4.43,
  country: 'PAK',
 },
 {
  id: 6,
  userid: 16,
  name: 'Test 6',
  sponsername: 'Sponser F',
  password: 122229,
  plan: 10.23,
  mobile: 4.43,
  country: 'BRA',
 },
]
export const DirectTeamData = [
 {
  Sr_no: 1,
  UserName: 'Test 1',
  Name: 'Name test',
  Email: 'Email test',
  Plan: 0,
  Date: '27/05/2022',
 },
]
export const GiftReceievedData = [
 {
  sr_no: 1,
  received_by: 11,
  payment_type: 'Sponser A',
  payment_info: '',
  amount: 10.23,
  transaction_details: 123456,
  transaction_id: 'USA',
  transaction_image: 'https://dummyjson.com/image/i/products/8/1.jpg',
  approved_date: '2022-07-25 08:05:30',
 },
]
export const DownlineData = [
 {
  ID: 1,
  Parent: 'admin',
  Distributor: 'test',
 },
]
export const ResolvedQueries = [
 {
  sr_no: '1',
  Title: 'testTitle',
  Description: 'test description',
  Image: '',
  Remark: '',
  closed_date: '05-07-97',
 },
]
export const PendingQueries = [
 {
  sr_no: '1',
  user_id: '12',
  Title: 'testTitle',
  Description: 'test description',
  Image: '',
  Date: '05-07-97',
  Action: '',
 },
]
export const WalletData = [
 {
  ID: 1,
  wallet_name: 'admin',
  wallet_link: 'test',
  wallet_account: 'test',
  Action: 'test',
 },
]
export const OpenTicketData = [
 {
  sr_no: 1,
  Title: '',
  Description: '',
  Image: '',
  Date: '',
 },
]
export const ActivateRequestData = [
 {
  sr_no: 1,
  given_by: 11,
  receieved_by: 'Test 1',
  payment_type: 'Sponser A',
  payment_info: '',
  amount: 10.23,
  transaction_remark: 123456,
  transaction_id: 'USA',
  transaction_image: 'https://dummyjson.com/image/i/products/8/1.jpg',
  admin_p_type: 'NA',
  admin_p_info: 'NA',
  admin_amount: 'NA',
  admin_transaction_remark: 'NA',
  admin_t_id: 'NA',
  admin_t_image: 'NA',
  date: '2022-07-25 08:05:30',
 },

 {
  sr_no: 2,
  given_by: 11,
  receieved_by: 'Test 1',
  payment_type: 'Sponser A',
  payment_info: '',
  amount: 10.23,
  transaction_remark: 123456,
  transaction_id: 'USA',
  transaction_image: 'https://dummyjson.com/image/i/products/8/1.jpg',
  admin_p_type: 'NA',
  admin_p_info: 'NA',
  admin_amount: 'NA',
  admin_transaction_remark: 'NA',
  admin_t_id: 'NA',
  admin_t_image: 'NA',
  date: '2022-07-25 08:05:30',
 },
 {
  sr_no: 3,
  given_by: 11,
  receieved_by: 'Test 1',
  payment_type: 'Sponser A',
  payment_info: '',
  amount: 10.23,
  transaction_remark: 123456,
  transaction_id: 'USA',
  transaction_image: 'https://dummyjson.com/image/i/products/8/1.jpg',
  admin_p_type: 'NA',
  admin_p_info: 'NA',
  admin_amount: 'NA',
  admin_transaction_remark: 'NA',
  admin_t_id: 'NA',
  admin_t_image: 'NA',
  date: '2022-07-25 08:05:30',
 },
 {
  sr_no: 4,
  given_by: 11,
  receieved_by: 'Test 1',
  payment_type: 'Sponser A',
  payment_info: '',
  amount: 10.23,
  transaction_remark: 123456,
  transaction_id: 'USA',
  transaction_image: 'https://dummyjson.com/image/i/products/8/1.jpg',
  admin_p_type: 'NA',
  admin_p_info: 'NA',
  admin_amount: 'NA',
  admin_transaction_remark: 'NA',
  admin_t_id: 'NA',
  admin_t_image: 'NA',
  date: '2022-07-25 08:05:30',
 },
 {
  sr_no: 5,
  given_by: 11,
  receieved_by: 'Test 1',
  payment_type: 'Sponser A',
  payment_info: '',
  amount: 10.23,
  transaction_remark: 123456,
  transaction_id: 'USA',
  transaction_image: 'https://dummyjson.com/image/i/products/8/1.jpg',
  admin_p_type: 'NA',
  admin_p_info: 'NA',
  admin_amount: 'NA',
  admin_transaction_remark: 'NA',
  admin_t_id: 'NA',
  admin_t_image: 'NA',
  date: '2022-07-25 08:05:30',
 },
 {
  sr_no: 6,
  given_by: 11,
  receieved_by: 'Test 1',
  payment_type: 'Sponser A',
  payment_info: '',
  amount: 10.23,
  transaction_remark: 123456,
  transaction_id: 'USA',
  transaction_image: 'https://dummyjson.com/image/i/products/8/1.jpg',
  admin_p_type: 'NA',
  admin_p_info: 'NA',
  admin_amount: 'NA',
  admin_transaction_remark: 'NA',
  admin_t_id: 'NA',
  admin_t_image: 'NA',
  date: '2022-07-25 08:05:30',
 },
]
const imgData = {
 id: 3,
 userid: 'Microsoft Surface Laptop 4',
 sponsername: 'Style and speed. Stand out on ...',
 password: 1499,
 plan: 10.23,
 mobile: 4.43,
 country: 68,
 action: 'Microsoft Surface',
 blockstatus: 'laptops',
 thumbnail: 'https://dummyjson.com/image/i/products/8/thumbnail.jpg',
 images: [
  'https://dummyjson.com/image/i/products/8/1.jpg',
  'https://dummyjson.com/image/i/products/8/2.jpg',
  'https://dummyjson.com/image/i/products/8/3.jpg',
  'https://dummyjson.com/image/i/products/8/4.jpg',
  'https://dummyjson.com/image/i/products/8/thumbnail.jpg',
 ],
}
