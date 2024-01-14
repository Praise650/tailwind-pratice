import React from 'react';
import ProfileImage from '../../ProfileImage';

function UsersTable({ employeeList = [], editAction, }) {
    function viewMore(item) {
        console.log("View More")
        console.log(item);
    }
    return (
        <>
            {
          employeeList.map(
            function (item, index) {
              return <div id="listtile" class="w-full h-fit text-black bg-white py-1 border-t-2 flex flex-shrink-1 basis-1 flex-grow-0 justify-between items-center">
                {/* leading */}
                <div id='leading' className='inline-flex items-center gap-3 flex-wrap whitespace-nowrap w-[30%] max-sm:w-fit'>
                  <ProfileImage height={20} width={20} />
                  <div className='inline-flex flex-col flex-nowrap'>
                    <span id="title" className="uppercase font-bold whitespace-nowrap truncate">{item.name}</span>
                    <span>Username: <span id="subtitle" className="font-semibold uppercase">{item.username}</span></span>
                  </div>
                </div>
                {/* leading */}
                <div id="body" className='w-[30%] font-normal text-blue-200 max-sm:hidden'>
                  <p>Phone: {item.phone}</p>
                  <p>{item.email}</p>
                </div>
                {/* trailing */}
                <div id='trailing' className='inline-flex justify-end gap-5 text-white w-[40%]'>
                  <p class="font-normal text-blue-300 border-b-[1px] max-sm:hidden"> <a href={item.website}>{item.website}</a></p>
                  <button className='rounded-lg bg-black px-2 py-1 font-normal text-end' onClick={() => viewMore(item)}>view more</button>
                  <button className='rounded-lg bg-black px-2 py-1 font-normal text-end' onClick={() => viewMore(item)}>follow</button>
                </div>
                {/* trailing */}
              </div>
            }
          )}
        </>

    );
}

export default UsersTable;