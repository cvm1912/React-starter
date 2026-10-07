import { useState } from "react";
import React from 'react';
function FormComponent() {
    const [name, setName] = useState("");

    function handleChange(event){
        setName(event.target.value);
    }
    return (  
        <div className="flex items-center justify-center border w-[50%] m-auto p-5">
            <input 
            name="name"
            id="name"
            value = {name}
            type="text" 
            placeholder="Enter your name" 
            onChange = {handleChange}
            className="border p-2 m-auto w-full border-blue-500"/>
        </div>
    );
}

export default FormComponent;