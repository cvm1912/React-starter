import React, { useRef } from "react";
import { useEffect } from 'react';

function Hooks() {
    const countValue = useRef(0);
    const divRef = useRef()

  useEffect(() => {
    divRef.current.style.color = 'red';
  }, [])


    function handleclick(){
        countValue.current++
        console.log(countValue.current);
    }

    return ( 
        <div className="bg-gray-200 h-screen">
            <div className="flex justify-center items-center h-full flex-col gap-4">
                <h1 
                ref={divRef}
                className="text-4xl font-bold tracking-tighter">Hooks Page</h1>
                <button 
                onClick={handleclick}
                className="bg-blue-600 px-5 py-2 rounded-lg text-white font-bold">Click</button>

            </div>
        </div>
     );
}

export default Hooks;