import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import MenuButton from './buttons/menu-button';

function Header() {
    return (
        <div className='static '>
            <div className="w-full flex flex-row justify-between items-center bg-red-400 p-6">
                <div className='inline-flex h-fit'>
                    <div className='sm:hidden'><MenuButton /></div> <img className="h-[40px]" src={logo} alt='Logo' />
                </div>
                <nav className="flex flex-row justify-between gap-4">
                    <ul className="flex flex-row gap-4">
                        <li>Products</li>
                        <li>Abouts</li>
                        <li>Settings</li>
                    </ul>
                </nav>
                <div className="rounded-2xl border-white bg-black text-white px-3 py-2 w-fit">
                    <Link to={"/auth/signup"} >
                        Sign Out
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header