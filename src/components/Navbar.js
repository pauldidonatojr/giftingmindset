import { React,useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom'
import logo from '../assets/images/logo.PNG'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../utils/context'
const Navbar = () => {
  const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);

 return (
  <nav className="nav">
   <div className="nav-center">
    <div className="nav-header">
     <button className="btn toggle-btn" onClick={openSidebar}>
      <FaBars />
     </button>
    </div>
    {user ? null: 
    <ul className="nav-links">
     <li>
      <Link to="/">
       {' '}
       <button className="link-btn">About</button>
      </Link>
     </li>
     <li>
      <Link to="/">
       <button className="link-btn">Team</button>
      </Link>
     </li>
     <li>
      <Link to="/">
       <button className="link-btn">Process</button>
      </Link>
     </li>
     <li>
      <Link to="/">
       <button className="link-btn">Contact</button>
      </Link>
     </li>
    <div>
    <Link to="/register">
        <button className="btn signin-btn">Sign In</button>
    </Link>
    </div>
    </ul>
  }

   </div>
  </nav>
 )
}

export default Navbar
