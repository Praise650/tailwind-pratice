import React, { useEffect, useState } from 'react'
import { apiService } from '../service/api-service';
import AddNewUser from '../components/dialogs/AddNewUser';
// import UsersTable from '../components/uis/users/UsersTable';
import UsersCard from '../components/uis/users/UsersCard';
import Loader from '../components/widgets/loader';
import ErrorWidget from '../components/uis/ErrorWidget';
import FAB from '../components/buttons/FAB';
import PaginationBtn from '../components/buttons/PaginationBtn'

function Users() {
  const [openModal, setModalState] = useState(false);
  const [editMode, setEditMode] = useState(false);
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
      <PaginationBtn limit={pageLimit} next={() => next()} prev={() => prev()} />
      {/* fab */}
      <FAB openModal={openModal} setModalState={setModalState} />
      {/* fab */}
      {openModal && <AddNewUser setOpenModal={setModalState} editMode={true} data={[...list]} />}

    </main>
  )
}

export default Users;


