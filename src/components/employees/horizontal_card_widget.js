import React from 'react'

function HorizontalCardList({ employeeList = [], editAction }) {
    return (
        <>
            {
                employeeList.map((item, index) => {
                    return <div className='bg-white rounded-xl shadow-xl shadow-slate-400 border-none h-32 my-3 flex flex-row justify-between max-sm:flex-col max-sm:h-fit'>
                        <div className='flex flex-row justify-start items-center w-full rounded-l-xl bg-slate-600'>
                            <img src='https://placekitten.com/1400' className='h-full rounded-l-xl max-sm:h-[200px] max-sm:w-[200px]' />
                            <h1 className='bg-blue-300 h-full flex items-center font-bold max-sm:hidden'>{item.id}</h1>
                            <div className='flex flex-col flex-wrap justify-center h-full pl-2 bg-yellow-600 max-sm:h-[200px] max-sm:w-full max-sm: rounded-r-xl max-sm:whitespace-normal'>
                                <div className='text-black font-bold'>{item.firstName} {item.lastName}</div>
                                <div>{item.dob}</div>
                                <div>{item.email}</div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center p-6 rounded-r-xl w-[10%] bg-teal-200 max-sm:w-full'>
                            <button onClick={() => editAction()} className='text-blue-800  hover:border-b-[1px] border-b-slate-500'>
                                Edit
                            </button>
                        </div>
                    </div>
                })
            }
        </>

    );
}

export default HorizontalCardList;