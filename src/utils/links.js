import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  { id: 1, text: 'Dasboard', path: '/', icon: <IoBarChartSharp /> },
  { id: 3, text: 'Manage Users', path: 'manageusers', icon: <FaWpforms /> },
  { id: 4, text: 'Genealogy', path: 'Genealogy', icon: <ImProfile /> },
  { id: 5, text: 'Gift History', path: 'Gifthistory', icon: <ImProfile /> },
  { id: 6, text: 'Settings', path: 'Settings', icon: <ImProfile /> },
  { id: 7, text: 'Complete Boards', path: 'Completeboards', icon: <ImProfile /> },
  { id: 8, text: 'Vouchers', path: 'Vouchers', icon: <ImProfile /> },
  { id: 9, text: 'Support', path: 'Support', icon: <ImProfile /> },
  { id: 10, text: 'Logout', path: 'logout', icon: <ImProfile /> },
];

export default links;
