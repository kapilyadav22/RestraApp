import React, { useState } from 'react'
import { logo_URl } from './constants'
import { Link } from 'react-router-dom';
// const loggedInUser = () => {
//   //API Call to check Authentication
//   return true;
// }

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className='Navigation'>
      <div>
        <img className='logo'
          src={logo_URl}
          alt="Food image" />
      </div>

      <div className='HeaderList'>
        <ul>
          <li><Link to="/" className="link">HOME</Link></li>
          <li><Link to="/about" className="link">ABOUT</Link></li>
          <li><Link to="/contactus" className="link">CONTACT US</Link></li>
          <li>CART</li>
        </ul>
      </div>
      <div className="loginbutton">
        {
          //we can input javascript expressions inside jsx, not statements.
          // ((a=10), console.log(a)) is a expression  , inside () is our expressions
          (isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            : <button onClick={() => setIsLoggedIn(true)}>Login</button>)
        }
      </div>
    </div>

  )
}
