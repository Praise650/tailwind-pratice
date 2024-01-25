import React from 'react'
import AuthInput from '../inputs/AuthInput';
import { useNavigate } from 'react-router-dom';

function AddNewUser({ setOpenModal, data, editMode }) {

    const popDialog = () => {
        setOpenModal(false);
    }
    const handleEdit = (event)=>{
        event.preventDefault();
        popDialog();
    }

    return (
        <div className='fixed bg-black inset-0 bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
            <form className='p-3 rounded bg-white' onSubmit={(e) => handleEdit(e)}>
                <div className='flex flex-row items-start justify-between my-5'>
                    <span>Create new user</span>
                    <button type='button' className='' onClick={popDialog}>Close</button>
                </div>
                <div className='grid grid-cols-2 items-center gap-2 max-sm:grid-cols-1 max-sm:gap-3'>
                    <label htmlFor="avatar">Choose a profile picture:</label>

                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />

                    <div className='col-span-2 max-sm:col-span-1'>
                        <AuthInput name='' placeholder='Joe Soppi' type='text' width='w-full' />
                    </div>
                    <AuthInput name='' placeholder='$40,000' type='text' width='w-full' />
                    <AuthInput name='' placeholder='DOB' type='text' width='w-full' />
                    <AuthInput name='' placeholder='Phone' type='text' width='w-full' />
                    <AuthInput name='' placeholder='Salary' type='text' width='w-full' />
                    <div className=' w-full col-span-2 max-sm:col-span-1'>
                        <button type='submit' className="w-full px-5 py-2 bg-gray-700 text-white rounded col-span-2 my-5">
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddNewUser;