

import logo from '../assets/images/logo.PNG';

const Logo = () => {
  return <img src={logo} style={{
        height: '3rem',
        marginTop: '0.5rem',
        width: '7rem',
        borderRadius: '1rem',
       }} alt='giftingmindset logo' className='logo' />;
};
export default Logo;
