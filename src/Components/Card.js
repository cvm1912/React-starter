import React from "react";
function Card() {
    return ( 
        <div className="border-1 p-8 text-center rounded-xl bg-white shadow-md ">
            <h1 className="text-2xl font-bold mb-2">Some text</h1>
            <p className="text-xl font-semibold text-gray-600 tracking-tighter">this is some card content</p>
        </div>
     );
}

export default Card;