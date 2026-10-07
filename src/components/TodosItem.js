import React from "react";
function TodosItem({ todo, fetchTodoDetails}) {
    return (
        <div className={`p-4 mb-2 rounded shadow  ${todo.completed ? 'bg-green-100' : 'bg-red-100'}`}>
            <h3 className="text-lg font-bold mb-5">{todo.todo}</h3>
            <button 
            onClick={()=>{fetchTodoDetails(todo.id)}}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                show details
            </button>
        </div>
    );
}

export default TodosItem;