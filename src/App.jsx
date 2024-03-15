import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Register from './pages/authentication/Register'
import Login from './pages/authentication/Login'
import Home from './pages/landing/Home'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="*" element={"Error 404"} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
