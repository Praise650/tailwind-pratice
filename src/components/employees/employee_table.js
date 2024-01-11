import React from 'react'

function EmployeeTable({ employeeList = [] }) {
  return (
    <>
      <table className='w-full'>
        {/* border-separate border-spacing-2 border border-slate-500 */}
        <thead className='h-16 border-2 bg-gray-100 max-md:hidden'>
          {/* <tr className='bg-gray-300 text-center'> */}
          <th className='border-r-2 border-slate-500'>ID</th>
          <th className=''>Image</th>
          <th className=''>First Name</th>
          <th className=''>Last Name</th>
          <th className=''>Phone</th>
          {/* </tr> */}
        </thead>
        <tbody className='w-full max-md:block' >
          {employeeList.map((item, index) => {
            return <tr key={index} className={`text-center h-16 border-2 my-2 ${index % 2 == 0 ? 'bg-yellow-50' : 'bg-blue-50'} max-md:w-full max-md:block`}>
              <td className='text-center md:border-r-2 border-slate-500 max-md:w-full max-md:block'>{item.id + 1}</td>
              <td className='text-center w-fit max-md:w-full max-md:block'>
                <div className="flex items-center justify-center h-10 w-full">
                  <img className='rounded-full w-10'
                    // src={item.imageUrl}
                    src='https://placekitten.com/1400'
                    alt="Rounded avatar" />
                </div>
              </td>
              <td className='text-center uppercase text-lg font-bold max-md:w-full max-md:block'>{item.firstName}</td>
              <td className='text-center uppercase text-lg font-bold max-md:w-full max-md:block'>{item.lastName}</td>
              <td className='text-center max-md:w-full max-md:block'>{item.contactNumber}</td>
            </tr>
          })}
        </tbody>
      </table>
      <div ></div>
    </>
  );
}

export default EmployeeTable;