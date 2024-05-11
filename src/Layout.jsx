import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function Layout() {
  const location = useLocation();
  let isAuther = false
  
  if(location.pathname === '/Login' || 
     location.pathname === '/Register' ||
     location.pathname === '/SetupOne' ||
     location.pathname === '/SetupTwo' ||
     location.pathname === '/SetupThree'){
    isAuther = true;
  }

  return (
    <>
      <Navbar hideNavbar={isAuther}/>
      <Outlet />
      <Footer hideFooter={isAuther} />
    </>
  );
}

export default Layout;
