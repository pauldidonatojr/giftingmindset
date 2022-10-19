import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import gift from '../assets/images/giftlogo.svg'
import { useGlobalContext } from '../utils/context'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ type:'AffiliateLogin', username: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);
  return (
    <Wrapper className='full-page'>
    {/*<img style={{'position':'absolute'}} src={gift} className="p-image" alt="phone" /><img style={{'position':'absolute'}} src={gift} className="phone-img" alt="phone" />*/}
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        
       
        {/* name field */}
        <fieldset>
        <legend>{values.isMember ? 'Login' : 'Sign Up!'}</legend>
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type='text'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />

        </fieldset>
        
        <button type='submit' className='button' disabled={isLoading}>
          {isLoading ? 'loading...' : 'Submit'}
        </button>
        <button
          type='button'
          className='button'
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: 'testUser@test.com', password: 'secret' })
            )
          }
        >
          {isLoading ? 'loading...' : 'Demo App'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
        
      </form>
    </Wrapper>
  );
}
export default Register;
