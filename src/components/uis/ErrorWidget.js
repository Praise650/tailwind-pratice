import React from 'react'

function ErrorWidget({ errorText }) {
    return (
        <div className=' h-screen flex justify-center items-center'>
            <div className='flex flex-col'>
                <div>Error</div>
                <div>Failed to {errorText}</div>
            </div>
        </div>
    )
}

export default ErrorWidget;