import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorWidget({ errorText, refresh}) {
    const navigate = useNavigate();

    return (
        <div className=' h-screen flex justify-center items-center'>
            <div className='flex flex-col'>
                <div>Error</div>
                <div>Failed to {errorText}</div>
                <button onClick={()=> navigate('/dashboard')}>Go back</button>
            </div>
        </div>
    )
}

export default ErrorWidget;