import React, { useEffect, useState } from 'react'
import { apiService } from '../service/api-service';
import ProfileImage from '../components/ProfileImage';

function Pagination() {
  const pageLimit = 2;
  const itemsPerPage = 5
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
      <div>Users</div>

      {/* <div className='h-fit  grid grid-cols-2 gap-3 justify-center items-center text-black m-3'> */}
      <div className='h-fit flex flex-col justify-center items-center text-black my-5'>
        {
          list.map(
            function (item, index) {
              return <div id="listtile" class="w-full h-fit text-black bg-white py-1 border-t-2 flex justify-between items-center">
                {/* <span id="leading" class="uppercase font-bold ">{item.id}</span> */}
                {/* leading */}
                <div id='leading' className='inline-flex items-center gap-3 flex-wrap w-3/12'>
                  <ProfileImage height={20} width={20} />
                  <div id='body' className='inline-block'>
                    <span id="title" class="uppercase font-medium">Name: {item.name}</span>
                    <p id="subtitle" class="font-normal text-blue-200">Username: {item.username}</p>
                  </div>
                </div>
                {/* leading */}
                <p id="card-body" class="font-normal text-blue-200">Phone: {item.phone}</p>
                {/* trailing */}
                <div id='trailing' className='inline-flex gap-2'>
                  <p class="font-normal text-blue-200">Website: <a href={item.website}>{item.website}</a></p>
                  <button className='rounded-lg bg-black px-2 py-1 font-normal text-blue-200 text-end' onClick={() => viewMore(item)}>view more</button>
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