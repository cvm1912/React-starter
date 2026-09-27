import React from "react";
import images from "../images.json";
function Galllary() {
    return ( 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {images.map((img) => (
            <img key={img.id} src={img.src} alt={img.alt} className="border rounded-2xl w-full object-cover h-64"/>
        ))}
        
    </div>
    )
}

export default Galllary;