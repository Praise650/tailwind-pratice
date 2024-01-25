import React from 'react';


function MenuButton({ open, setAction }) {
  return (
    // <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
    //  <div class="flex flex-col justify-between w-[20px] h-[10px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-x-1.5 group-focus:rotate-180">
    //    <div class="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
    //      <div class={"bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"}></div>
    //    <div class="bg-yellow-500 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
    //  </div>
    // </div> 

    // function MenuButton({ open, setAction }) {
    //   return (
    //     <button className="relative group" onClick={() => setAction(!open)}>
    //       <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
    //         <div className="flex flex-col justify-between w-[20px] h-[10px] transform transition-all duration-300 origin-center overflow-hidden">
    //           <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150 ${!open && 'origin-left group-focus:-rotate-[0deg]'}`}></div>
    //           <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 ${!open && 'transition-none'}`}></div>
    //           <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150 ${!open && 'origin-left group-focus:-rotate-[0deg]'}`}></div>
    //         </div>
    //       </div>
    //     </button>
    //   );
    // }
    <button className={`relative group focus:outline-none lg:hidden`} onClick={() => setAction(!open)}>
      <div className="relative flex items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all ring-0 ring-slate-700 hover:ring-8 focus:ring-4 ring-opacity-30 duration-200 shadow-none focus:shadow-md">
        <div className="flex flex-col justify-between items-center w-[20px] h-[10px] transform transition-all duration-300 origin-center">
          <div className={`bg-white h-[2px] w-3 transform transition-all duration-300 origin-left ${open ? 'rotate-[42deg] w-2/3' : 'rotate-0'}`}></div>
          <div className={`bg-white h-[2px] w-3 rounded transform transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`bg-white h-[2px] w-3 transform transition-all duration-300 origin-left ${open ? 'rotate-[-42deg] w-2/3' : 'rotate-0'}`}></div>
        </div>
      </div>
      {/* <img className="h-[40px] " src={logo} alt='Logo' /> */}
    </button>
  );
}


export default MenuButton;
