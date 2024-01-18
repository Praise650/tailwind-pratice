import React from 'react';


function AuthInput({ name, type, placeholder, width, outterPadding, labelText}) {
    return (
        <label className="">
            <h4 className='mb-2'>{labelText}</h4>
            <input name={name} 
            required
            type={type ?? 'text'} 
            className={`rounded-lg flex items-center bg-[#eaeaea] h-12 p-2 ${width} ${outterPadding}`} 
            placeholder={placeholder??"Enter email"} />
        </label>
    )
}

export default AuthInput;