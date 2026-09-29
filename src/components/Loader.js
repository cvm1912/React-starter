import React from "react";

function Loader() {
    return (
        <div className="border rounded-2xl overflow-hidden bg-white shadow-xl animate-pulse">
            <div className="w-full h-48 bg-gray-200" />
            <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/4" />
            </div>
        </div>
    );
}

export default Loader;
