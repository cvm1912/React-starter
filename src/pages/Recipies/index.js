import React from "react";
import { useNavigate } from "react-router-dom";
function Recipies() {
    const navigate = useNavigate();
    return ( 
        <div className="bg-blue-200 h-screen">
            <div className="flex justify-center items-center h-full flex-col gap-4">
                <h1 className="text-4xl font-bold tracking-tighter">Recipes Details</h1>
                <button 
                onClick={()=>navigate('/')}
                className="bg-blue-500 text-white px-4 py-2 rounded ml-4">Back to home</button>
            </div>
        </div>
     );
}

export default Recipies;