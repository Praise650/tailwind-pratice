import React, { useEffect, useState } from 'react'
import { apiService } from '../service/api-service';
import ProfileImage from '../components/ProfileImage';

function Pagination() {
  const pageLimit = 2;
  const itemsPerPage = 10
  let currentPage = 0;
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const resData = await apiService.retrieveData('/users');
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const users = resData.splice(startIndex, endIndex);
      console.log(users);
      setList(users);
    } catch (error) {
      alert('Error fetching data:', error);
      console.error('Error fetching data:', error);
    }
  };

  function viewMore(item) {
    console.log("View More")
    console.log(item);
  }

  function next() {
    currentPage++;
    fetchData(currentPage);

  }
  function prev() {
    currentPage--;
    fetchData(currentPage);
  }
  return (
    <main>
      <h1 className='text-2xl font-bold'>Users</h1>

      {/* <div className='h-fit  grid grid-cols-2 gap-3 justify-center items-center text-black m-3'> */}
      <div className='h-fit flex flex-col justify-center items-center text-black my-5'>
        {
          list.map(
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
                  {/* <span>Website:</span> */}
                  <p class="font-normal text-blue-300 border-b-[1px] max-sm:hidden"> <a href={item.website}>{item.website}</a></p>
                  <button className='rounded-lg bg-black px-2 py-1 font-normal text-end' onClick={() => viewMore(item)}>view more</button>
                  <button className='rounded-lg bg-black px-2 py-1 font-normal text-end' onClick={() => viewMore(item)}>follow</button>
                </div>
                {/* trailing */}
              </div>
            }
          )}
      </div>
      <ActionButton limit={pageLimit} next={() => next()} prev={() => prev()} />

    </main>
  )
}

export default Pagination;


function ActionButton({ limit, prev, next }) {
  const elements = [];
  function hhhfhf() {
    for (let i = 0; i < limit; i++) {
      elements.push(
        <div key={i} className='bg-blue-300 rounded-full w-8 h-8 py-1 text-center'>
          {i + 1}
        </div>
      );
    }
    return <div className='text-blue-500 flex gap-3'>{elements}</div>;
  }
  return (
    <div onClick={prev} className='flex justify-center gap-10 text-white mt-3'>
      <button className='bg-black px-4 py-2 rounded-xl'>Prev</button>
      {hhhfhf()}
      <button onClick={next} className='bg-black px-4 py-2 rounded-xl'>Next</button>
    </div>
  )
}