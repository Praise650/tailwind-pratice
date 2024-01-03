import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import search from '../search.svg';
import notif from '../notif.svg';
import MenuButton from './buttons/menu-button';
import ProfileComponent from './ProfileComponent';

function Header({ open, setAction }) {
    return (
        // <header className="static top-0 z-999 flex w-full  bg-[#4F1DA0] drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
        <header>
            {/* <div className='static '> */}
            <div className="w-full flex flex-row justify-between items-center bg-[#4F1DA0] text-white">
                <div className='inline-flex h-fit lg:hidden'>
                    <div className={`${open && 'hidden'}`}>
                        <MenuButton open={open} setAction={setAction} />
                    </div>
                    <img className="h-[40px]" src={logo} alt='Logo' />
                </div>
                <div className='py-[0.25px] px-4  text-black rounded-[0.9375rem] inline-flex bg-white gap-3'>
                    <img src={search} alt='search' />
                    <input className='border-none outline-none' type='text' placeholder='Search here' />
                </div>
                <nav className="flex flex-row justify-between gap-4 items-center">
                    <ul className="flex flex-row gap-4">
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li>Members</li>
                        <li>Report</li>
                        <li>Help</li>
                    </ul>
                    <img src={notif} alt='' className='w-5 h-12 ml-4' />
                </nav>

                {/* profile icon */}
                <ProfileComponent />
                {/* profile icon */}
            </div>
            {/* </div> */}
        </header>
    );
}

export default Header