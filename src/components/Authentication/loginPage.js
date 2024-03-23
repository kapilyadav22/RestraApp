import React, { useState } from 'react';
import './sideloginpopup.css';
import SignIn from './signinwithgoogle';
import { auth, googleProvider } from './firebase';
import { usePopup } from './popupContext';

export const LoginPage = (props) => {
    const {closeLoginPopup, updateUserName, updateLogin } = usePopup();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { onClose } = props;

    const handleSignUp = async () => {
        try {
            await auth.createUserWithEmailAndPassword(username, password);
            console.log('User signed up successfully');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
        onClose();
    };

    const handleSignIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(username, password);
            updateUserName(username);
            console.log('User signed in successfully');
        } catch (error) {
            console.error('Error signing in:', error.message);
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
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='UserName'
                    />

                    <input className='inputstyle'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                    />
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





