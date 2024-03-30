import React, { useEffect, useState } from 'react';
import '../../styling/sideloginpopup.css';
import SignIn from './signinwithgoogle';
import {auth} from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { usePopup } from './popupContext';

export const LoginPage = (props) => {
    const { updateUserName } = usePopup();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState('');
    const { onClose } = props;

    useEffect(() => {
        const timer = setTimeout(() => {
            setError(null);
            setSuccess('');
        }, 4000); 
        return () => clearTimeout(timer); 
    }, [error, success]);

    const handleSignUp = async () => {
        try {
        await createUserWithEmailAndPassword(auth, username, password);
            console.log('User signed up successfully');
            setSuccess('User Created Successfully');
        }
         catch(error)  {
                console.error('Error signing up:', error.message);
                setError(error.message);
            };
        // onClose();
    };

    const handleSignIn = async () => {
        try {
            await  signInWithEmailAndPassword(auth, username, password)
                updateUserName(username);
                console.log('User signed in successfully');
                setSuccess('User Signed in Successfully');
            }
            catch(error)  {
                console.error('Error signing in:', error.message);
                setError(error.message);
            }
        onClose();
    };

    return (
        <div>
            <div className="overlay" onClick={onClose}></div>

            <div className="side-login-popup">
                <button className='close-button' onClick={onClose}>Close</button>

                <div className="popup-content">

                    <input className='inputstyle'
                        name="username"
                        type="text"
                        value={username}
                        onChange={(e) => {setUsername(e.target.value); setError(null)}}
                        placeholder='UserName'
                    />

                    <input className='inputstyle'
                        type="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value); setError(null)}}
                        placeholder='Password'
                    />
                     {success && ( 
                        <div className="bg-green-100 border border-green-400 text-green-600 mx-10 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Success: </strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}
                      {error && ( 
                        <div className="bg-red-100 border border-red-400 text-red-700 max-10 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Error: </strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}
                    <div className='buttonstyle'>
                        <button onClick={handleSignUp}>SignUp</button>
                    </div>
                    <div className='buttonstyle'>
                        <button onClick={handleSignIn}>Login</button>
                    </div>
                    <SignIn />
                </div>
            </div>
        </div>
    );
}





