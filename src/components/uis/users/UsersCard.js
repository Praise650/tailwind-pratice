import React from 'react'

function UsersCard({ employeeList = [], editAction, }) {
    function viewMore(item) {
        console.log("View More")
        console.log(item);
    }
    return (
        <>
            {
                employeeList.map((item, index) => {
                    return <div className={`rounded-xl shadow-xl
                         shadow-slate-200 
                         border-none  
                         mt-3 flex flex-col 
                         justify-between w-full 
                         pt-4
                         hover:shadow-lg 
                         hover:shadow-slate-500 
                    ${index % 2 == 0 ? 'bg-yellow-50' : 'bg-blue-50'}`}
                    >
                        {/* header */}
                        <div className='flex flex-row justify-between items-center w-full px-4'>
                            <h1 className='h-full flex items-center font-bold mb-2'>{item.id}</h1>
                            <button onClick={() => editAction()} className='text-blue-800  hover:underline border-b-slate-500'>
                                Edit
                            </button>
                        </div>
                        {/* header */}
                        {/* body */}
                        <div className='flex flex-row justify-start items-center w-full px-4'>
                            <img src='https://placekitten.com/1400' className='h-10 w-10 rounded-full mr-2' />
                            <div className='flex flex-col items-start truncate'>
                                <div className='text-black truncate font-bold'>{item.name}</div>
                                <div className='truncate'>{item.email}</div>
                                <div className='truncate'>{item.username}</div>
                            </div>
                        </div>
                        {/* body */}
                        {/* contact details */}
                        <div className='my-2 truncate px-4'>
                            <div className='text-black truncate font-bold flex flex-row space-x-2 justify-between'>
                                <h3>Address:</h3> <h4 className='truncate'>{item.address.city}</h4>
                            </div>
                            <div className='text-black truncate font-bold flex flex-row gap-1 justify-between'>
                                <h3>Company:</h3> <h4 className='truncate'>{item.company.name}</h4>
                            </div>
                            <div className='text-black truncate font-bold flex flex-row gap-1 justify-between'>
                                <h3>Phone:</h3> <h4 className='truncate'>{item.phone}</h4>
                            </div>
                            <div className='text-black truncate font-bold flex flex-row gap-1 justify-between'>
                                <h3>Website:</h3> <a className='truncate text-blue-300 hover:underline cursor-pointer'>{item.website}</a>
                            </div>
                        </div>
                        {/* contact details */}
                        <button
                            className='font-bold text-xl bg-teal-100 rounded-b-lg h-10 flex items-center justify-center text-white'
                            onClick={() => viewMore(item)}>View More</button>
                    </div>
                })
            }
        </>

    );
}

export default UsersCard;