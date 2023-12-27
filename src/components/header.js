import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import search from '../search.svg';
import notif from '../notif.svg';
import MenuButton from './buttons/menu-button';
import ImageHeader from './image-header';

function Header() {
    return (
        <div className='static '>
            <div className="w-full flex flex-row justify-between items-center bg-[#4F1DA0] p-5 text-white">
                <div className='inline-flex h-fit lg:hidden'>
                    <MenuButton /> <img className="h-[40px]" src={logo} alt='Logo' />
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
                    <img src={notif} className='w-5 h-12 ml-4' />
                </nav>

                {/* profile icon */}
                <div className='items-center flex gap-2 flex-row'>
                    <div className='flex flex-col items-end'>
                        <span>Praise Afuwape</span>
                        <span>Admin</span>
                    </div>
                    <img class="h-[40px] w-[40px] rounded-full" src='https://placekitten.com/1400' alt="Rounded avatar" />
                </div>
                {/* profile icon */}
            </div>
        </div>
    );
}

export default Header