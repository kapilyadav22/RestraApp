import React, { createContext, useContext, useState, useEffect } from 'react';
import { LoginPage } from './loginPage';
import { LogOutPage } from './logOutPage';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUsername] = useState(() => {
    // Initialize username from localStorage, default to "Login" if not found
    return localStorage.getItem('userName') || "Login";
  });

  const updateLogin = () => {
    setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn);
  };

  const updateUserName = (name) => {
    setUsername(name);
    // Save the updated username to localStorage
    localStorage.setItem('userName', name);
  };

  const openLoginPopup = () => {
    setLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  // Ensure that the username is updated in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  return (
    <PopupContext.Provider value={{ isLoginPopupOpen, openLoginPopup, closeLoginPopup, userName, updateUserName, isLoggedIn, updateLogin }}>
      {children}
      {userName === "Login" && isLoginPopupOpen && <LoginPage onClose={closeLoginPopup}> </LoginPage>}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  return useContext(PopupContext);
};
