import React from 'react';
import { auth } from './firebase';

const SignOutButton = ({ updateLogin, updateUserName }) => {
  const signOutWithGoogle = async () => {
    try {
      await auth.signOut();
      updateLogin();
      updateUserName("Login");
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <li style={{ cursor: 'pointer' }} className='mr-4' onClick={() => signOutWithGoogle()}>
      Sign Out
    </li>
  );
};

export default SignOutButton;



