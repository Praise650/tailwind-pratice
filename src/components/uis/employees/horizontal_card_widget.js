import React from 'react'

function HorizontalCardList({ employeeList = [], editAction }) {
    return (
        <>
            {
                employeeList.map((item, index) => {
                    return <div 
                    className={`rounded-xl shadow-xl shadow-slate-400 border-none  my-3 flex flex-col justify-between w-full p-4 
                    ${index % 2 == 0 ? 'bg-yellow-50' : 'bg-blue-50'}`} 
                    >
                        <h1 className='h-full flex items-center font-bold mb-2'>{item.id + 1}</h1>
                        <div className='flex flex-row justify-between items-center w-full'>
                            <img src='https://placekitten.com/1400' className='h-10 w-10 rounded-full' />
                            <button onClick={() => editAction()} className='text-blue-800  hover:border-b-[1px] border-b-slate-500'>
                                Edit
                            </button>
                        </div>
                        <div className='my-2'>
                            <div className='text-black truncate font-bold'>{item.firstName} {item.lastName}</div>
                            <div className='truncate'>{item.dob}</div>
                            <div className='truncate'>{item.email}</div>
                        </div>
                    </div>
                })
            }
        </>

    );
}

export default HorizontalCardList;