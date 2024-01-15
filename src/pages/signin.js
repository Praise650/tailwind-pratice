import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Loader from '../components/widgets/loader';
import AuthInput from '../components/inputs/AuthInput';
import { authService } from '../service/auth-service';
import AuthLeftSide from '../components/uis/auth/AuthLeftSide';

function SignIn() {
    //   aProps = {
    //     name: 'email',
    //     type: 'text',
    //     placeholder: 'Enter email'
    // };

    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const goto = () => {
        navigate('/dashboard');
    }

    const handleSignUp = async (event) => {
        event.preventDefault();

        setLoading(true);
        setError(null);

        const email = event.target.email.value;
        const password = event.target.password.value;
        const resVal = await authService.sigin(email, password);
        console.log(resVal);
        if (resVal.isSuccess === true) {
            setLoading(false);
            goto();
        } else {
            // setError(resVal.failed);
            setLoading(false);
        }
    }

    if (loading === true) return <Loader />

    return (
        <div className='w-screen h-screen flex flex-row'>
            {/* left */}
            <div className='bg-blue-700 px-11 py-10 w-[45%] max-md:hidden flex flex-col justify-between'>
                <AuthLeftSide />
            </div>
            {/* left */}
            <div className='bg-white px-11 py-10 w-full flex flex-col'>
                <div className='bg-green-400 text-center'>css color seperator</div>
                <div className='bg-lime-100 flex flex-col mt-12 items-center'>
                    <div className='bg-blue-100 rounded-lg w-fit px-4 py-2'>
                        <h1 className='text-black font-bold text-2xl mb-12 text-start'>Let's get started</h1>
                        <form onSubmit={(e) => handleSignUp(e)}>
                            <div className='grid grid-cols-2 gap-4 max-md:grid-cols-1'>
                                <AuthInput name='firstname' placeholder="Bend" labelText='First name' />
                                <AuthInput name='lastname' placeholder="Dover" labelText='Last name' />
                                <div className='col-span-2 max-md:grid-cols-1'>
                                    <AuthInput name='email' placeholder="jondoe@gmail.com" labelText='Email' width='w-full' />
                                </div>
                                <AuthInput name='country' placeholder="Nigeria" labelText='Country of residence' />
                                <AuthInput name='state' placeholder="Lagos state" labelText='State' />
                                <div className='col-span-2'>
                                    <AuthInput name='phone' placeholder="+234 814 260 2528" labelText='Phone number' width='w-full' />
                                </div>
                                <div className='col-span-2'>
                                    <AuthInput name='password' placeholder="*******" type="password" labelText='Password' width='w-full' />
                                </div>
                                <div className='col-span-2'>
                                    <button className="text-white rounded-lg bg-blue-500 text-center py-3 w-full" type="submit">Get Started</button>
                                </div>
                                <div className='col-span-2 text-center w-full'>
                                <button 
                                    className='underline'
                                    onClick={() => { 
                                        navigate('/dashboard') 
                                    }}
                                    >Already a Member? SignIn</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    {/* <div className='shadow-lg shadow-slate-400 p-6 m-3 flex flex-col gap-4 justify-center items-center'>
                    <h3 className="header">Login to your Account</h3>
                    <AuthInput name='email' placeholder="jondoe@gmail.com" />
                    <AuthInput name='password' placeholder="*******" type="password" />
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