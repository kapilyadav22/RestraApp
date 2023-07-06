import React, { useState } from 'react'
import { logo_URl } from './constants'
import { Link } from 'react-router-dom';
// const loggedInUser = () => {
//   //API Call to check Authentication
//   return true;
// }

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  return (
    <div className='flex justify-between m-2 bg-pink-100 shadow-lg sm:bg-yellow-50'>
      <div>
        <img className='w-20'
          src={logo_URl}
          alt="Food image" />
      </div>

      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'><Link to="/" className="link">HOME</Link></li>
          <li className='px-4'><Link to="/about" className="link">ABOUT</Link></li>
          <li className='px-4'><Link to="/contactus" className="link">CONTACT US</Link></li>
          <li className='px-4'>CART</li>
          <li>
          <button
            onClick={() => {
              isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login");
            }
            }>{isLoggedIn}
          </button>
        </li>
        </ul>
       
      </div>

    </div >
  )
}
