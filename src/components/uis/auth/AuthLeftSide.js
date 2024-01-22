import React, { useState } from 'react';
import ReactStars from 'react-rating-star-with-type'
import useMediaQuery from '../../../hooks/useMediaQuery';

function AuthLeftSide({ navRight }) {
    const [star, setStar] = useState(5);
    const isTablet = useMediaQuery(1024);

    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    return (
        <>
            <div className='text-white'>
                <div className='inline-flex gap-2 items-center uppercase'>
                    <img className='h-8' src='https://imgs.search.brave.com/UfU2B1IfoF337hpJj5HBSaLxrafVjdR-7osUmf2Z4ko/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9iY2Fz/c2V0Y2RuLmNvbS9h/c3NldHMvaW1hZ2Vz/L2ljb25zL2NvbW1v/bi1sYXJnZS9jb21t/b24tbGFyZ2UtYXJ0/d29yay5zdmc.svg' />
                    <span className='font-black font-mono text-xl'>StartGlobal</span>
                </div>
                <div className='text-white mt-12'>
                    <h1 className='mb-10 text-5xl font-bold'>Let's setup your Operating Agreement</h1>
                    <h6 className='text-sm text-gray-300'>All-in-one solution to your business in the state.</h6>
                    <h6 className='text-sm text-gray-300'>Form a new company from scratch or onboard your existing US company</h6>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 justify-center text-white'>
                <div className='bg-blue-400 w-full flex flex-col gap-4 rounded-lg p-4 mt-3'>
                    <h2 className='text-xl font-semibold'>I barely have to do anything</h2>
                    <div>
                        Love the experience. Got my business set up and all necessary details in about a month and i barely had to do anything
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='inline-flex items-center gap-3'>
                            <img src='http://placekitten.com/200/300' className='h-10 w-10 rounded-full' alt='profile-image' />
                            <h4>Catherine Johns</h4>
                        </div>
                        <ReactStars
                            onChange={onChange}
                            value={5}
                            edit={false}
                            activeColors={['white']}
                        />
                    </div>
                </div>
                <div className='flex '>
                    {[1, 2, 3].map((item, index) => {
                        return <div className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-400'} m-2`}></div>
                    })}
                </div>
                {isTablet && <div className='flex flex-col items-end w-full'>
                    <button onClick={() => navRight()}>Next</button>
                </div>
                }
            </div>
        </>
    );
}

export default AuthLeftSide;