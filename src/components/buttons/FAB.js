import React from 'react';
import { assetsService } from '../../service/asset_service';

function FAB({openModal,setModalState}) {
  return (
    <button onClick={() => setModalState(!openModal)}>
        <div className='fixed right-0 bottom-0 rounded-full h-16 w-16 m-10 shadow-2xl bg-blue-400 flex items-center justify-center'>
          <span className='text-white font-bold text-lg'>
            <img src={assetsService.add} className='h-12 w-12' alt='add new user' />
          </span>
        </div>
      </button>
  )
}

export default FAB