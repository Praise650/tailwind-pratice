import React from 'react';


function AuthInput({ name, type, placeholder, width, outterPadding}) {
    return (
        <label className="">
            <input name={name} 
            type={type ?? 'text'} 
            className={`rounded-lg flex items-center bg-[#eaeaea] h-12 p-2 ${width} ${outterPadding}`} 
            placeholder={placeholder??"Enter email"} />
        </label>
    )
}

export default AuthInput;