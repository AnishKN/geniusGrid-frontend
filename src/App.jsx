import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Register from './pages/authentication/Register'
import Login from './pages/authentication/Login'
import Home from './pages/landing/Home'
import Dashboard from './pages/authentication/Dashboard'
import SetupOne from './pages/authentication/profile/SetupOne';
import SetupTwo from './pages/authentication/profile/SetupTwo';
import SetupThree from './pages/authentication/profile/SetupThree';
import { extendTheme } from '@chakra-ui/react'
import { SaasProvider, theme as baseTheme } from '@saas-ui/react'
import './App.css'
import "react-multi-carousel/lib/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/landing/NotFound';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors }, baseTheme)

function App() {
  
 
  return (
    <SaasProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard/*" element={<Dashboard />} />
            <Route path="setupOne" element={<SetupOne />} />
            <Route path="setupTwo" element={<SetupTwo />} />
            <Route path="setupThree" element={<SetupThree />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </SaasProvider>
  )
}

export default App
