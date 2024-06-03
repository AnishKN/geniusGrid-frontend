import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Waveform } from "@uiball/loaders";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  let data = JSON.stringify({
    "email": email,
    "password": password
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/students/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  const handleLogin = ()=>{
    setIsLoading(true)
    setTimeout(() => {
      axios.request(config)
      .then((response) => {
        localStorage.setItem("authToken",response.data.token)
        navigate("/dashboard")
      })
      .catch((error) => {
        let message = error.response.data.errors[0].msg
        toast.error(message)
      });
      setIsLoading(false);
    }, 2000);
  }



  return (
    <>
    <NavLink to="/">
      <img src="/logo.png" alt="logo" className="absolute m-4 h-8 w-8" />
    </NavLink>
      <div className="bg-white flex justify-center items-center h-full">
      <ToastContainer />
        <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
          <h1 className="text-center text-2xl font-semibold mb-8">Login</h1>
          {/* <form action="#" method="POST"> */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-6 text-gray-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="button"
            className="flex items-center justify-center bg-gray-950 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            onClick={handleLogin}
          >
            {isLoading && <Waveform color="white" size={25} stroke={3.5} speed={1} />}
            {!isLoading && "Login"}
          </button>
          <div className="mt-6 text-gray-500 text-center">
            <NavLink to="/register">
              <p href="#" className="hover:underline">
                Register Here
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
