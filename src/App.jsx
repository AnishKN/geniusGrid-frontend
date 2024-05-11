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
import './App.css'
import "react-multi-carousel/lib/styles.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="SetupOne" element={<SetupOne />} />
            <Route path="SetupTwo" element={<SetupTwo />} />
            <Route path="SetupThree" element={<SetupThree />} />

            <Route path="*" element={"Error 404"} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
