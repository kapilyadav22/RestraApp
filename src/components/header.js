import React, { useContext } from 'react';
import { logo_URl } from './urlConstants';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../utils/useOnlineStatus';
import { usePopup } from './Authentication/popupContext';
import SignOutButton from './Authentication/signoutfromgoogle';
import UserContext from './Authentication/UserContext';

export default function Header() {
  const { userName, isLoggedIn, updateLogin, updateUserName } = usePopup();
  const { openLoginPopup } = usePopup();
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  console.log(data);

  return (
    <div className='flex justify-between m-1 bg-pink-100 shadow-lg sm:bg-yellow-50'>
      <div>
        <img className='w-14'
          src={logo_URl}
          alt="Food " />
      </div>

      <div className='flex items-center'>

        <ul className='flex p-1 m-1'>
          <SignOutButton updateLogin={updateLogin} updateUserName={updateUserName} />
          <li>Online Status: {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li className='px-2'><Link to="/" className="link">HOME</Link></li>
          <li className='px-4'><Link to="/about" className="link">ABOUT</Link></li>
          <li className='px-4'><Link to="/contactus" className="link">CONTACT US</Link></li>
          <li className='px-4'><Link to="/grocery" className="link">Grocery</Link></li>
          <li className='px-4'>CART</li>
          <li>
            <div style={{ cursor: "pointer" }}
              onClick={() => {
                isLoggedIn == false ? openLoginPopup() : <></>
              }
              }>{userName}
            </div>

          </li>
        </ul>
      </div>

    </div >
  )
}
