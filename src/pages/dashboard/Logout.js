import { useState,useEffect } from 'react';
import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
	const navigate = useNavigate();
  const { isLoading, user } = useSelector((store) => store.user);
  // var user = '';
    useEffect(() => {
    	console.log(user);
    if (user) {
    	delete [user];
    	setTimeout(() => {
        navigate('/register');
      }, 2000);
    }
  }, [user]);
};
export default Logout;
