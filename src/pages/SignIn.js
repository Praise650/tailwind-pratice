import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Loader from '../components/widgets/loader';
import { authService } from '../service/auth-service';
import AuthLeftSide from '../components/uis/auth/AuthLeftSide';
import LoginFormField from '../components/uis/auth/LoginFormField';

function SignIn() {

    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const goto = () => {
        navigate('/dashboard');
    }

    const handleSignUp = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        setLoading(true);
        setError(null);
        const resVal = await authService.sigin(email, password);
        console.log(resVal);
        if (resVal.isSuccess === true) {
            setLoading(false);
            goto();
        } else {
            setError(resVal.failed);
            setLoading(false);
        }
    }

    if (loading === true) return <Loader />

    return (
        <div className='w-screen min-h-screen flex flex-row'>
            {/* left */}
                <AuthLeftSide />
            {/* left */}
            <div className='w-full px-11 py-10 min-h-screen flex flex-col justify-center'>
            <div className='bg-blue-50 rounded-lg p-4 shadow-lg w-full h-full flex justify-center items-center flex-col max-sm:bg-transparent max-sm:rounded-none max-sm:shadow-none'>
                    <LoginFormField handleSignUp={handleSignUp}  />
                    {/* {error != null?  <div className='text-red-500'>{error}</div>:<></>} */}
                </div>
            </div>
        </div>
    );

    {/* <div className='shadow-lg shadow-slate-400 p-6 m-3 flex flex-col gap-4 justify-center items-center'>
                    {error && (
                        <div className='footer' style={{ color: 'red' }}>{error}</div>
                    )}
                    <button className="space-y-2 mt-2" type="submit">Login</button>
                    <button onClick={() => { navigate('/auth/signup') }}>Already a Member? SignIn</button>
                    {/* <div className="footer">
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
                </div> */}
}

export default SignIn;