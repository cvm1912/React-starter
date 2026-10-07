import React from "react";
function TodoDetails({ todoDetails, openDialog, setOpenDialog }) {
    if (!openDialog || !todoDetails) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-2">{todoDetails.todo}</h2>
                <p className="text-gray-600">Status: {todoDetails.completed ? "Completed" : "Pending"}</p>
                <button
                    onClick={() => setOpenDialog(false)}
                    className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Close
                </button>
            </div>
        </div>
    );
}

export default TodoDetails;