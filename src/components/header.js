import React from 'react'

function Header() {
    return (
        <div className='static '>
            <div className="w-full  flex flex-row justify-between bg-red-400 p-6">
                <div className="border-b border-green-100">
                    Logo
                </div>
                <nav className="flex flex-row justify-between gap-4">
                    <ul className="flex flex-row gap-4">
                        <li>Products</li>
                        <li>Abouts</li>
                        <li>Settings</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header