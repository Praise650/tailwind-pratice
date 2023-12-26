import React, { useEffect, useState } from 'react'
import { apiService } from '../service/api-service';

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
      let users = resData.splice(startIndex, endIndex);
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
      <div>Pagination</div>

      <div className='h-fit  grid grid-cols-2 gap-3 justify-center items-center text-black m-3'>
        {
          list.map(
            function (item, index) {
              return <div id="card" class="w-fit h-fit text-black bg-white my-5 p-3 rounded-sm shadow-md">
                <span id="card-title" class="uppercase font-bold">ID: {item.id}</span><br />
                <span id="card-title" class="uppercase font-bold">Name: {item.name}</span>
                <p id="card-body" class="font-normal text-blue-200">Username: {item.username}</p>
                <div>
                  <p id="card-body" class="font-normal text-blue-200">Phone: {item.phone}</p>
                  <p id="card-body" class="font-normal text-blue-200">Website: <a href={item.website}>{item.website}</a></p>
                </div>
                <button className='border-b-2 font-normal text-blue-200 text-end' onClick={() => viewMore(item)}>view more</button>
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