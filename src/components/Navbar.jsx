import React from 'react'
import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/' },
  { name: 'How it works', href: '/' },
]
const Navbar = ({ hideNavbar }) => {
  if (hideNavbar) {
    return null;
  }
  return (
    <>
     <header className="sticky top-0 bg-white shadow-lg z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <NavLink to="/" className="flex p-1.5 justify-center items-center gap-3">
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt="logo"
              />
              <h1 className='text-lg'><b>GeniusGrid</b></h1>
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink to={item.href}  key={item.name} className="text-sm font-bold leading-6 text-gray-900">
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink to="/Login">
            <button className="text-sm bg-gray-800 w-full text-white rounded-lg
            px-8 py-3 block shadow-xl hover:text-white hover:bg-black">
            Login
            </button>
            </NavLink>
          </div>
        </nav>
      </header> 
    </>
  )
}

export default Navbar
