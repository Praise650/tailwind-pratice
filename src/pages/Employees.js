import React, { useEffect, useState } from 'react'
import AddNewUser from '../components/dialogs/AddNewUser';
import { apiUrls } from '../service/api-urls';
import { employeesService } from '../service/employees-service';
import EmployeeTable from '../components/uis/employees/employee_table';
import EmployeeCardList from '../components/uis/employees/employees_card_list';
import HorizontalCardList from '../components/uis/employees/horizontal_card_widget';
import Loader from '../components/widgets/loader';
import ErrorWidget from '../components/uis/ErrorWidget';
import { assetsService } from '../service/asset_service';

function Employees() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [openModal, setModalState] = useState(false);
  const [selectedInterest, setInterest] = useState('');
  const [list, setList] = useState([]);
  const pageLimit = 2;
  const itemsPerPage = 6;
  let currentPage = 0;

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const resData = await employeesService.getEmployeeList(apiUrls.getEmployees);
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      // let users = resData.data.splice(startIndex, endIndex);
      setList(resData);
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
    <div>
      <h1 className='font-bold text-3xl mb-4'>Employees</h1>
      <div className='max-md:hidden'>
        <EmployeeTable employeeList={[...list]} />
      </div>
      {/* <div className='md:hidden max-sm:hidden'>
        <EmployeeCardList employeeList={[...list]} editAction={() => setModalState(!openModal)} />
      </div> */}
      <div className='md:hidden grid grid-cols-2 gap-3 max-sm:grid-cols-1'>
        <HorizontalCardList employeeList={[...list]} editAction={() => setModalState(!openModal)} />
      </div>

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
    </div>
  );
}

export default Employees;