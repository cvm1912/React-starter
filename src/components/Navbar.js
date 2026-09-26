import React from "react";

function Navbar() {
    return (  
        <nav className="bg-white shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
     
                 
                 <h1 className="text-2xl font-bold text-blue-500 tracking-tighter">Brand.</h1>
                 <ul className="border flex gap-6 font-medium text-gray-600">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/screen">Screen</a></li>
                 </ul>
            
            </div>
        </nav>
    );
}

export default Navbar;