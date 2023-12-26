import React from 'react';
import logo from '../logo.svg';

function AppLogo() {
    return (
        <div className="text-start font-bold text-[1.12rem] mb-8 mt-7 font-sans">
            <span className="inline-flex flex-row items-center justify-center">
                <img className="h-[1.22rem]" src={logo} alt='Logo' />
                <h2>Home</h2>
            </span>
        </div>
    )
}

export default AppLogo;