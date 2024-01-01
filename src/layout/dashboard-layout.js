import React, { useState } from 'react'
import Navbar from '../components/navbar';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className='bg-white'>
            <div className='flex h-screen overflow-hidden'>
                <Navbar sidebarOpen setSidebarOpen />
                <div className='w-full overflow-y-auto overflow-x-hidden'>
                    <Header open={sidebarOpen} setAction={setSidebarOpen}/>
                    <main>
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;