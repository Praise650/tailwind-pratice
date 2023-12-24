import React from 'react'
import Navbar from '../components/navbar';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div className='bg-white'>
            <div className='flex h-screen overflow-hidden'>
                <Navbar />
                <div className='w-full overflow-y-auto overflow-x-hidden'>
                    <Header />

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