import React from 'react'
import MenuButton from './buttons/MenuButton';
import ProfileComponent from './ProfileComponent';

function HeaderBar({ open, setAction }) {
    return (
        // <header className="static top-0 z-999 flex w-full  bg-[#4F1DA0] drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
        <header>
                <div className="fixed w-full flex flex-row justify-between items-center bg-[#4F1DA0] text-white">
                    <MenuButton open={open} setAction={setAction} />
                    <ProfileComponent />
            </div>
        </header>
    );
}

export default HeaderBar;