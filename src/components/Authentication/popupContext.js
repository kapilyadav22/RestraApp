// PopupContext.js
import React, { createContext, useContext, useState } from 'react';
import { LoginPage } from './loginPage';
import { LogOutPage } from './logOutPage';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUsername] = useState("Login");

  const updateLogin = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  const updateUserName = (name) =>{
    setUsername(name);
  }
  const openLoginPopup = () => {
    setLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  return (
    <PopupContext.Provider value={{ isLoginPopupOpen, openLoginPopup, closeLoginPopup, userName, updateUserName, isLoggedIn, updateLogin  }}>
      {children}
      
      {userName==="Login" && isLoginPopupOpen && <LoginPage onClose={closeLoginPopup}> </LoginPage>
      }

    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  return useContext(PopupContext);
};
