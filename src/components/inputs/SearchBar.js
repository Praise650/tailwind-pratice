import React from 'react'
import search from '../../assets/svgs/search.svg';

function SearchBar() {
    return (
        <div className='py-[0.25px] px-4 h-fit text-black rounded-[0.9375rem] inline-flex bg-white gap-3 max-md:hidden'>
            <img src={search} alt='search' />
            <input className='border-none outline-none' type='text' placeholder='Search here' />
        </div>
    )
}

export default SearchBar;