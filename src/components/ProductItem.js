import React from "react";
function ProductItem() {
    return ( 
        
                <div className="border rounded-2xl overflow-hidden bg-white shadow-xl">
                    <img src="https://picsum.photos/300/200" alt="product" className="w-full shadow-xl" />
                    <h1 className="text-black font-bold text-xl p-4 tracking-tight">Picture is beautiful</h1>
                </div>
        
     );
}

export default ProductItem;