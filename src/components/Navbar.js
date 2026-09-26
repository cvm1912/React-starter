import React, { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (  
        <nav className="bg-white shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold text-blue-500 tracking-tighter">Brand.</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 font-medium text-gray-600">
                    <li><a href="/home" className="hover:text-blue-500">Home</a></li>
                    <li><a href="/about" className="hover:text-blue-500">About</a></li>
                    <li><a href="/screen" className="hover:text-blue-500">Screen</a></li>
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
                        {isOpen ? "✕" : "🦀"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 mt-2 pb-4 ">
                    <ul className="flex flex-col gap-4 font-medium text-gray-600">
                        <li><a href="/home" className="hover:text-blue-500 border">Home</a></li>
                        <li><a href="/about" className="hover:text-blue-500">About</a></li>
                        <li><a href="/screen" className="hover:text-blue-500">Screen</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
