import React, { useContext } from 'react';
import { logo_URl } from './urlConstants';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../utils/useOnlineStatus';
import { usePopup } from './Authentication/popupContext';
import SignOutButton from './Authentication/signoutfromgoogle';
import UserContext from './Authentication/UserContext';
import { useSelector } from 'react-redux';

export default function Header() {
  const { userName, isLoggedIn, updateLogin, updateUserName } = usePopup();
  const { openLoginPopup } = usePopup();
  const onlineStatus = useOnlineStatus();

  //subscribing to the store using useSelector
  const totalItemCount = useSelector((store) => store.cart.totalItems);
  const data = useContext(UserContext);

  return (
    <div className='flex justify-between m-1 bg-pink-100 shadow-lg sm:bg-gray-200 py-2'>
      <div>
        <img className='w-14'
          src={logo_URl}
          alt="Food " />
      </div>

      <div className='flex items-center'>

        <ul className='flex p-1 m-2 mr-10'>
        {userName!=='Login' && <SignOutButton updateLogin={updateLogin} updateUserName={updateUserName} />}
          <li>Online Status: {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li className='px-2'>
            <Link to="/" className="link">Home</Link>
          </li>
          <li className='px-4'><Link to="/about" className="link">About</Link>
          </li>
          <li className='px-4'><Link to="/contactus" className="link">Contact Us</Link>
          </li>
          {/* <li className='px-4'><Link to="/grocery" className="link">Grocery</Link>
          </li> */}
          <li className='px-4 font-bold text-l'>
            <Link to="/cart" className="link">
              Cart {totalItemCount!==0  && `(${totalItemCount} ${totalItemCount === 1 ? 'item' : 'items'})`}
            </Link>
          </li>
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
