import React from 'react'
import '../css/auth-body.css';
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import Loader from '../components/widgets/loader';
import { useState } from 'react';

function SignIn() {
    <div>SignIn</div>
    
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);



    const goto = () => {
        navigate('/homepage');
    }

    const handleSignUp = (event) => {
        event.preventDefault();

        setLoading(true);
        setSuccess(false);
        setError(null);

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(data => {
                setTimeout(() => {
                    console.log(data.user.email);
                    setLoading(false);
                    setSuccess(true);
                    goto();
                }, 3000);
            })
            .catch(error => {
                setTimeout(() => {
                    setLoading(false);
                    setError(error.message);
                    console.log("Error creating user:" + error);
                    alert(error.message);
                }, 4000);
            });
    }

    return (
        <form onSubmit={(e) => handleSignUp(e)}>
            <h3 className="header">Login to your Account</h3>
            <label className="input-field">
                <input name="email" className="input" placeholder="Enter email" />
            </label>
            <label className="input-field">
                <input name="password" type="password" className="input" placeholder="Enter password" />
            </label>
            {error && (
                <div className='footer' style={{ color: 'red' }}>{error}</div>
            )}
            <br />
            <div className="footer">
                {loading ? (
                    // Displaying spinner while the process is ongoing
                    <Loader loading={false} />
                ) : success ? (
                    // Displaying success message if the process is successful
                    <Loader loading={true} />
                ) : (
                    // Displaying the button if not loading or successful
                    <button className="auth-action" type="submit">Login</button>
                )}
            </div>
        </form>
    );
}

export default SignIn;