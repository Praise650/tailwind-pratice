import React from 'react';
import AuthInput from '../../inputs/AuthInput';
import { useNavigate } from "react-router-dom";

function RegisterFormField({ handleSignUp, back }) {
    let navigate = useNavigate();
    const goto = () => {
        navigate('/');
    }
    return (
        <form onSubmit={(e) => handleSignUp(e)} className='max-lg:p-5'>
            {
                <div className='col-span-2 text-start w-full lg:hidden'>
                    <button
                        className='underline'
                        onClick={() => { back() }}
                    >Go back</button>
                </div>
            }
            <br/>
            <br/>
            <div className='inline-flex gap-2 items-center uppercase mb-5 w-full md:hidden'>
                <img className='h-8' src='https://imgs.search.brave.com/UfU2B1IfoF337hpJj5HBSaLxrafVjdR-7osUmf2Z4ko/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9iY2Fz/c2V0Y2RuLmNvbS9h/c3NldHMvaW1hZ2Vz/L2ljb25zL2NvbW1v/bi1sYXJnZS9jb21t/b24tbGFyZ2UtYXJ0/d29yay5zdmc.svg' alt='app logo' />
                <span className='font-black font-mono text-xl'>StartGlobal</span>
            </div>
            <div className='w-full mb-14'>
                <h1 className='font-bold text-2xl'>Let's get started</h1>
            </div>
            <div className='grid grid-cols-2 gap-8 max-sm:grid-cols-1'>
                <div className='col-span-1 max-sm:col-span-2 '>
                    <AuthInput name='firstname' placeholder="Jon" labelText='First name' width={'w-full'} />
                </div>
                <div className='col-span-1 max-sm:col-span-2 '>
                    <AuthInput name='lastname' placeholder="Dover" labelText='Last name' width={'w-full'} />
                </div>
                <div className='col-span-2'>
                    <AuthInput name='email' placeholder="jondoe@gmail.com" labelText='Email' width='w-full' />
                </div>
                <div className='col-span-1 max-sm:col-span-2 '>
                    <AuthInput name='country' placeholder="Nigeria" labelText='Country of residence' width='w-full' />
                </div>
                <div className='col-span-1 max-sm:col-span-2 '>
                    <AuthInput name='state' placeholder="Lagos state" labelText='State' width='w-full' />
                </div>
                <div className='col-span-2'>
                    <AuthInput name='phone' placeholder="+234 814 260 2528" labelText='Phone number' width='w-full' />
                </div>
                <div className='col-span-2'>
                    <AuthInput name='password' placeholder="*******" type="password" labelText='Password' width='w-full' />
                </div>
                <div className='col-span-2'>
                    <button className="text-white rounded-lg bg-blue-500 text-center py-3 w-full" type="submit">Get Started</button>
                </div>
                {
                    // isTablet === false && 
                    <div className='col-span-2 text-center w-full max-lg:hidden'>
                        <button
                            className='underline'
                            onClick={() => { goto() }}
                        >Already a Member? SignIn</button>
                    </div>
                }
            </div>
            <br/>
            <br/>
            <br/>
        </form>
    )
}

export default RegisterFormField;