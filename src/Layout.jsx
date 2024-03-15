import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'

function Layout() {
  const location = useLocation();
  let isAuther = false
  
  if(location.pathname === '/Login' || location.pathname === '/Register'){
    isAuther = true;
  }

  return (
    <>
      <Navbar hideNavbar={isAuther}/>
      <Outlet />
      {/* <Footer hideFooter={isPlaygroundPage} /> */}
    </>
  );
}

export default Layout;
