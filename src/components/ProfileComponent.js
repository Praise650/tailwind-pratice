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
            <div className={`absolute bg-white shadow-xl top-0 right-0 px-5 w-52 ${!dropdown && 'hidden'} overflow-y-hidden`}>
                    <div className="flex flex-col justify-between items-center gap-3 mt-3">
                        {items.map((item, index) => {
                            return <Link to={item.path} className="text-blue-600 w-[100%] py-2 px-6 text-start font-[0.6875rem] hover:bg-[#A97DF3] hover:text-white">
                                <div key={item.title} >
                                    {item.title}
                                </div>
                            </Link>
                        })}
                    </div>
                    <Link className="text-blue-300 hover:border-b-blue-400"
                        to={"/auth/signup"} >
                        Sign Out
                    </Link>
                </div>
        </>
    )
}

export default ProfileComponent;