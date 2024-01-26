import React from 'react';
import CarouselSlider from '../../sliders/CarouselSlider';

function AuthLeftSide({ navRight }) {

    return (
        <div className='bg-blue-700 px-11 py-10 w-[45%] flex flex-col justify-center max-lg:min-h-screen max-lg:min-w-full'>
            <div className='bg-gray-500'>
                <div className='text-white mb-20'>
                    <div className='inline-flex gap-2 items-center uppercase'>
                        <img className='h-8' src='https://imgs.search.brave.com/UfU2B1IfoF337hpJj5HBSaLxrafVjdR-7osUmf2Z4ko/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9iY2Fz/c2V0Y2RuLmNvbS9h/c3NldHMvaW1hZ2Vz/L2ljb25zL2NvbW1v/bi1sYXJnZS9jb21t/b24tbGFyZ2UtYXJ0/d29yay5zdmc.svg' />
                        <span className='font-black font-mono text-xl'>StartGlobal</span>
                    </div>
                    <div className='text-white mt-12'>
                        <h1 className='mb-10 text-5xl max-sm:text-2xl font-bold'>Let's setup your Operating Agreement</h1>
                        <h6 className='text-sm text-gray-300'>All-in-one solution to your business in the state.</h6>
                        <h6 className='text-sm text-gray-300'>Form a new company from scratch or onboard your existing US company</h6>
                    </div>
                </div>
                <CarouselSlider />
                {<div className='flex flex-col text-white items-end w-full lg:hidden'>
                        <button onClick={() => navRight()}>Next</button>
                    </div>}
            </div>
        </div>
    );
}

export default AuthLeftSide;