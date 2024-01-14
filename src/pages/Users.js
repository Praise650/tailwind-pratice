import React, { useEffect, useState } from 'react'
import { apiService } from '../service/api-service';
import AddNewUser from '../components/dialogs/AddNewUser';
import { assetsService } from '../service/asset_service';
// import UsersTable from '../components/uis/users/UsersTable';
import UsersCard from '../components/uis/users/UsersCard';
import Loader from '../components/widgets/loader';
import ErrorWidget from '../components/uis/ErrorWidget';

function Users() {
  const [openModal, setModalState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const pageLimit = 2;
  const itemsPerPage = 10
  let currentPage = 0;
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const resData = await apiService.retrieveData('/users');
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const users = resData.splice(startIndex, endIndex);
      console.log(users);
      setList(users);
      setLoading(false);
    } catch (error) {
      // alert('Error fetching data:', error);
      console.error('Error fetching data:', error);
      setLoading(false);
      setError(true);
    }
  };

  function next() {
    currentPage++;
    fetchData(currentPage);

  }
  function prev() {
    currentPage--;
    fetchData(currentPage);
  }

  if (loading === true) return <Loader />;

  if (error === true) return <ErrorWidget />


  return (
    <main>
      <h1 className='text-2xl font-bold'>Users</h1>
      <div className='grid grid-cols-2 gap-3 max-sm:grid-cols-1 lg:grid-cols-3'>
        <UsersCard employeeList={[...list]} editAction={() => setModalState(!openModal)} />
      </div>
      {/* <div className='h-fit flex flex-col justify-center items-center text-black my-5'>
        <UsersTable employeeList={[...list]} editAction={() => setModalState(!openModal)} />
      </div> */}
      <ActionButton limit={pageLimit} next={() => next()} prev={() => prev()} />
      {/* fab */}
      <button onClick={() => setModalState(!openModal)}>
        <div className='absolute right-0 bottom-0 rounded-full h-10 w-10 m-10 shadow-2xl bg-blue-400 flex items-center justify-center'>
          <span className='text-white font-bold text-lg'>
            <img src={assetsService.add} alt='add new user' />
          </span>
        </div>
      </button>
      {/* fab */}
      {openModal && <AddNewUser setOpenModal={setModalState} />}

    </main>
  )
}

export default Users;


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