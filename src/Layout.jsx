import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
//   const location = useLocation();
//   let isPlaygroundPage = false
//   if(location.pathname === '/playground' || location.pathname.startsWith('/problem/')){
//    isPlaygroundPage = true;
//   }

  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer hideFooter={isPlaygroundPage} /> */}
    </>
  );
}

export default Layout;
