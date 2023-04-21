import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';

import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';



function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>
       
    <div className='header__left'>
        <LinkedInIcon className='logo' style={{color:"blue" , fontSize: "40px"}} />

        <div className='header__search'>
            <SearchIcon/>
            <input placeholder='Search' type='text'/>
        </div>
    </div>

    <div className='header__right'>
        <HeaderOption Icon={HomeIcon}  title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon}  title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon}  title='Jobs'/>
        <HeaderOption Icon={ChatIcon}  title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon}  title='Notifications'/>
        <HeaderOption 
        avatar= {true}
        title='Me' 
        onClick={logoutOfApp}
        />

    </div>
        
    </div>
  )
}

export default Header