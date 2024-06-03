import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Waveform } from "@uiball/loaders";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function Register() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  let data = JSON.stringify({
    "name": name,
    "email": email,
    "password": password,
    "confirmPassword": confirmPassword,
    "phone_number": phone,
    "profile_pic_url": "https://example.com/profile_pic.jpg",
    "shortTermGoals": null,
  "longTermGoals": null,
  "preferredSubjects": null,
  "preferredStudyTimes": null,
  "studyEnvironment": null,
  "learningMaterials": null,
  "availability": null,
  "timeConstraints": null,
  "learningStyle": null,
  "learningPace": null,
  "progressTracking": null,
  "additionalInfo": null
});

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/students/register',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  const handleRegister = ()=>{
    setIsLoading(true)
    setTimeout(() => {
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate("/setupOne")
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
          <h1 className="text-center text-2xl font-semibold mb-8">Register</h1>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Profile Picture
              </label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div>     
          </div>

            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
                autoComplete="off"
              />
            </div>
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
              <label htmlFor="username" className="block text-gray-600">
                Phone 
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
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
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Confirm password
              </label>
              <input
                type="password"
                id="Cpassword"
                name="Cpassword"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
                autoComplete="off"
              />
            </div>
            <button
            type="button"
            className="flex items-center justify-center bg-gray-950 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            onClick={handleRegister}
          >
            {isLoading && <Waveform color="white" size={25} stroke={3.5} speed={1} />}
            {!isLoading && "Register"}
          </button>
          <div className="mt-6 text-gray-500 text-center">
          <NavLink to="/login">
            <p className="hover:underline">
              Login up Here
            </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
