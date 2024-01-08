import React from 'react'
import logo from '../assets/svgs/logo.svg';
import MenuButton from './buttons/menu-button';
import ProfileComponent from './ProfileComponent';
import SearchBar from './inputs/SearchBar';

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
                    <img className="h-[40px] mr-3" src={logo} alt='Logo' />
                </div>
                {/* profile icon */}
                <ProfileComponent />
                {/* profile icon */}
            </div>
            {/* </div> */}
        </header>
    );
}

export default Header