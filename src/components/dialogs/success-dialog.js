import React from "react";
import "../../css/success-dialog.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "@firebase/auth";
import { auth } from '../../firebase';

function SuccessDialog({ setOpenModal }) {
    let navigate = useNavigate();

    const gotoLogin = () => {
        setOpenModal(false);
          signOut(auth).then(value => {
            navigate('/');
        }
    )};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Thank you
        </h1>
        <br/>
        {/* <p className="text-center text-gray-700 mb-5">Sign in</p> */}

         <div className="flex flex-col">
         <p className="text-center text-gray-700 mb-5">
            Thank you for taking your time to fill out the form
            Your input has been recorded and would give us to provide a better service
         </p>
        {/*  <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="email@example.com"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="********"
          /> */}
        </div> 
        <div className="text-center">
          <button onClick={gotoLogin} className="px-5 py-2 bg-gray-700 text-white rounded">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessDialog;