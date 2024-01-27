import { useState } from "react";
import ReactStars from 'react-rating-star-with-type';

function CarouselItem({ index, currentindex, items }) {
    const [star, setStar] = useState(5);
    const onChange = (nextValue) => {
        setStar(nextValue)
    }
    return (
        <div className='flex flex-col items-center gap-2 justify-center text-white'>
            <div className={`bg-blue-500 translate-x-1 duration-500 w-full flex flex-col gap-4 rounded-lg p-4 mt-3`}>
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
                        value={index + 1}
                        edit={false}
                        activeColors={['yellow','red','green']}
                    />
                </div>
            </div>
            <div className='flex'>
                {Array.from({ length: items.length }).map((_,index)=>{
                    return <div className={`h-2 w-2 rounded-full ${index === currentindex ? 'bg-white' : 'bg-gray-400'} m-2`}></div>
                })}
            </div>

        </div>
    )
}

export default CarouselItem;