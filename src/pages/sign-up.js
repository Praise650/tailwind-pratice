import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import Loader from '../components/widgets/loader';
import AuthInput from '../components/inputs/AuthInput';

function SignUp() {
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

        createUserWithEmailAndPassword(auth, email, password)
            .then(data => {
                console.log(data.user.email);
                setLoading(false);
                setSuccess(true);
                setTimeout(() => {
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
        <div className='bg-gradient-to-b from-black to-white bg-no-repeat'>
            <div className=' h-screen flex flex-col justify-center items-center'>
                <form onSubmit={(e) => handleSignUp(e)}>
                    <div className='shadow-md w-[500px] md:w-[90%] md:p-5 rounded-sm p-8 max-sm:shadow-none max-sm:overflow-x-auto'>
                        <div className='flex flex-col gap-6 items-center'>
                            <h3 className="header">Create an Account</h3>
                            <AuthInput name='email' placeholder="jondoe@gmail.com" />
                            <AuthInput name='fullname' placeholder="Jon Doe" />
                            <AuthInput name='username' placeholder="jon_doe" />
                            <AuthInput name='password' placeholder="*******" type="password" />
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
                                    <button className="auth-action" type="submit">Register</button>
                                )}
                            </div>
                            <>Already have an account?, Login </>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;