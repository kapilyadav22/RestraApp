import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import './sideloginpopup.css';
import googleImage from '../../assets/icons/google.png'
import { usePopup } from './popupContext';

const SignIn = () => {
    const {closeLoginPopup, updateUserName, updateLogin } = usePopup();
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log('Google user signed in:', user);
            updateLogin();
            updateUserName(user.displayName);
            closeLoginPopup();
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Google Sign-In Error:', errorCode, errorMessage);
        }
    };

    return (
        <div className='buttonstyle primary' onClick={signInWithGoogle} >
        <img className='w-10 mr-2' src={googleImage} alt="google"/>
        Sign In with Google
      </div>
    );
};



export default SignIn;
