import React from 'react'
import AuthInput from '../inputs/AuthInput';
import { useNavigate } from 'react-router-dom';

function AddNewUser({ setOpenModal }) {
    let navigate = useNavigate();

    const gotoLogin = () => {
        setOpenModal(false);
        // signOut(auth).then(value => {
        // navigate('/');
    }
    // );
    // };
    return (
        <div className='fixed bg-black inset-0 bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
            <form className='p-5 rounded bg-white w-fit'>
                <div className='flex flex-row justify-between my-5'>
                    <span>Create new user</span>
                    <button onClick={gotoLogin}>Close</button>
                </div>
                <div className='grid grid-cols-2 auto-rows-auto items-center md:gap-2 sm:gap-[14rem] '>
                    <div className='col-span-2'>
                        <AuthInput name='' placeholder='Joe Soppi' type='text' width='w-full' outterPadding='mb-3' />
                    </div>
                    <div className='mr-2'>
                        <AuthInput name='' placeholder='$40,000' type='text' outterPadding='mb-3' />
                    </div>
                    <div className='ml-2'>
                        <AuthInput name='' placeholder='DOB' type='text' outterPadding='mb-3' />
                    </div>
                    <div className='mr-2'>
                        <AuthInput name='' placeholder='Salary' type='text' />
                    </div>
                    <div className='ml-2'>
                        <AuthInput name='' placeholder='Salary' type='text' />
                    </div>
                    <button onClick={gotoLogin} className="px-5 py-2 bg-gray-700 text-white rounded col-span-2 mx-12 my-5">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddNewUser;