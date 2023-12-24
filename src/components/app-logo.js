import React from 'react';
import logo from '../logo.svg';

function AppLogo() {
    return (
        <div className="border-b-2 border-yellow-500 text-start font-bold text-4xl mb-8">
            <span className="inline-flex flex-row">
                <img className="h-[40px]" src={logo} alt='Logo' />
                <h2>Home</h2>
            </span>
        </div>
    )
}

export default AppLogo