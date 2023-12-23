import React from 'react'

function ImageHeader() {
    return (
        <div className='flex flex-col items-start'>
            <div className='items-center flex gap-2 flex-row'>
                <img class="h-[50px] w-[50px] rounded-full" src='https://placekitten.com/1400' alt="Rounded avatar" />
                <div className='flex flex-col items-start'>
                    <span>Praise</span>
                    <span>EditorTechBro</span>
                </div>
            </div>
            <span className='text-sm font-medium text-black'>ayokanmi1275@gmail.com</span>
        </div>
        //     <span className="h-[150px] w-[150px] bg-no-repeat rounded-full">
        //     <img src='https://placekitten.com/1400' alt="User" />
        //   </span>
        // <div className="rounded-full bg-slate-500 h-[150px] w-[150px] bg-[url(https://placekitten.com/1400)] bg-no-repeat bg-">
        //     {/* Image */}
        // </div>

    )
}

export default ImageHeader