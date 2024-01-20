import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import notif from '../assets/svgs/notif.svg';
import SearchBar from './inputs/SearchBar';

function ProfileComponent() {
    const items = [
        {'title':'Profile', 'path':'/profile'},
        {'title':'Settings', 'path':'/profile'},
        {'title':'Report', 'path':'/profile'},
        {'title':'Sign Out', 'path':'/auth/signup'},]
    const [dropdown, showDropdown] = useState(false);
    return (
        <div className='inline-flex justify-between items-center gap-4 lg:w-full'>
            <SearchBar />
            <ul className="flex flex-row items-center gap-4 mr-5 max-md:hidden">
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li>Members</li>
                <li>Report</li>
                <li>Help</li>
                <li><img src={notif} alt='' className='w-5 h-12 ml-4' /></li>
            </ul>

            <div className='items-center flex gap-2 flex-row justify-end w-max px-2'>
                <div className='flex flex-col items-end'>
                    <span className='max-lg:hidden'>Praise Afuwape</span>
                    <span>Admin</span>
                </div>
                <button onClick={() => { showDropdown(!dropdown) }}>
                    <img class="h-[40px] w-[40px] rounded-full" src='https://placekitten.com/1400' alt="Rounded avatar" />
                </button>
            </div>
            <div
                className={`absolute bg-white text-black shadow-xl top-[31px] mt-4 right-0 w-52 ${!dropdown && 'hidden'} z-50 overflow-y-hidden`}
            >
                <div className="flex flex-col justify-between items-start gap-3 ">
                    {items.map(function (item, index) {
                        return <Link key={item.title} to={item.path} className="w-full py-2 px-6 text-start font-[0.6875rem] hover:bg-[#A97DF3]">
                            {item.title}
                        </Link>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;