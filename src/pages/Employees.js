import React, { useEffect, useState } from 'react'
import AddNewUser from '../components/dialogs/AddNewUser';
import { apiUrls } from '../service/api-urls';
import { employeesService } from '../service/employees-service';
import newUserIcon from '../assets/svgs/add.svg';
import EmployeeTable from '../components/employees/employee_table';

function Employees() {

  const [selectedInterest, setInterest] = useState('');
  const [list, setList] = useState([]);
  const pageLimit = 2;
  const itemsPerPage = 6;
  let currentPage = 0;

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const resData = await employeesService.getEmployeeList(apiUrls.getEmployees);
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      // let users = resData.data.splice(startIndex, endIndex);
      // console.log(users);
      setList(resData);
    } catch (error) {
      // alert('Error fetching data:', error);
      console.error('Error fetching data:', error);
    }
  };

  // function viewMore(item) {
  //     console.log("View More")
  //     console.log(item);
  //     console.log(selectedInterest);
  // }

  function next() {
    currentPage++;
    fetchData(currentPage);

  }
  function prev() {
    currentPage--;
    fetchData(currentPage);
  }
  const [openModal, setModalState] = useState(false);
  return (
    <div>
      <div className='mb-5'>Employees</div>
      <EmployeeTable employeeList={[...list]} />

      {/* fab */}
      <button onClick={() => setModalState(!openModal)}>
        <div className='absolute right-0 bottom-0 rounded-full h-10 w-10 m-10 shadow-2xl bg-blue-400 flex items-center justify-center'>

          <span className='text-white font-bold text-lg'>
            <img src={newUserIcon} alt='add new user' />
          </span>
        </div>
      </button>
      {/* fab */}
      {openModal && <AddNewUser setOpenModal={setModalState} />}
    </div>
  );
}

export default Employees;