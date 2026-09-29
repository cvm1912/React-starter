import React from "react";

function ProductItem({title, price, image}) {
    return ( 
        <div className="border rounded-2xl overflow-hidden bg-white shadow-xl">
            <img src={image} alt={title} className="w-full h-48 object-contain shadow-xl" />
            <div className="p-4">
                <h1 className="text-black font-bold text-xl tracking-tight">{title}</h1>
                <p className="text-blue-600 font-medium mt-1">{price}</p>
            </div>
        </div>
     );
}

export default ProductItem;
