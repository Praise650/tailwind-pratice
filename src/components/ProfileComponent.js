import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ProfileComponent() {
    const items = [
        'Profile',
        'Settings',
        'Report',
        'Helooo',
        'Helooo',
        'Helooo',]
    const [dropdown, showDropdown] = useState(false);
    return (
        <>
            <div className='items-center flex gap-2 flex-row'>
                <div className='flex flex-col items-end'>
                    <span className='max-lg:hidden'>Praise Afuwape</span>
                    <span>Admin</span>
                </div>
                <button onClick={() => { showDropdown(!dropdown) }}>
                    <img class="h-[40px] w-[40px] rounded-full" src='https://placekitten.com/1400' alt="Rounded avatar" />
                </button>
            </div>
            <div
                className={`absolute bg-white shadow-xl top-0 mt-4 right-0 px-5 w-52 ${!dropdown && 'hidden'} overflow-y-hidden`}
            >
                <div className="flex flex-col justify-between text-black items-center gap-3 mt-3">
                    {items.map((item, index) => {
                        return <Link key={item.title} to={item.path} className="text-black w-[100%] py-2 px-6 text-start font-[0.6875rem] hover:bg-[#A97DF3]">
                            {item.title}
                        </Link>
                    })}
                </div>
                {/* <Link className="text-blue-300 hover:border-b-blue-400"
                        to={"/auth/signup"} >
                        Sign Out
                    </Link> */}
            </div>
        </>
    )
}

export default ProfileComponent;