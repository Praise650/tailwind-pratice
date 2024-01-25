import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className='bg-white'>
            <div className='flex h-screen overflow-hidden'>
                <SideBar open={sidebarOpen} setSidebar={setSidebarOpen} />
                <div className='w-full overflow-y-auto overflow-x-hidden'>
                    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                        <Header open={sidebarOpen} setAction={setSidebarOpen} />
                        <main>
                            <div className="mx-auto mt-8 max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                                <Outlet />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;