import React from 'react'

function ErrorWidget({ errorText, refresh}) {
    return (
        <div className=' h-screen flex justify-center items-center'>
            <div className='flex flex-col'>
                <div>Error</div>
                <div>Failed to {errorText}</div>
                <button onClick={()=>refresh()}>Go back</button>
            </div>
        </div>
    )
}

export default ErrorWidget;