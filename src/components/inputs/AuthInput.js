import React from 'react';


function AuthInput({ name, type, placeholder }) {
    return (
        <label className="">
            <input name={name} 
            type={type ?? 'text'} 
            className="input rounded-lg flex items-center bg-[#eaeaea] h-12 p-2 " 
            placeholder={placeholder??"Enter email"} />
        </label>
    )
}

export default AuthInput;