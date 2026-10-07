import React, { useEffect, useState } from "react";
import TodosItem from "./components/TodosItem";
import TodoDetails from "./components/TodoDetails";
function App() {

  const [loading,setLoading] = useState(false);
  const [todoList, setTodoList] =useState([]);
  const [error, setError] = useState(null);

  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);


  async function fetchTodos(){
    try{
      setLoading(true);
      const response = await fetch('https://dummyjson.com/todos');
      const data = await response.json();
      console.log(data.todos);
      setTodoList(data?.todos);
      setLoading(false);
      setError(null);
    }catch(error){
      console.log(error);
      setError('error occurred while fetching todos');
      setLoading(false);
    }
  }

  async function fetchTodoDetails(id){
   try{
      console.log('fetching details for todo id:',id);
      const response = await fetch(`https://dummyjson.com/todos/${id}`);
      const data = await response.json();
      console.log(data);
      setTodoDetails(data);
      setOpenDialog(true);
   }catch(error){
    setTodoDetails(null);
    setOpenDialog(false);
    console.log(error);
    setError('error occurred while fetching todo details');
   }
  }


  useEffect(()=>{
      fetchTodos();
  },[]);
  
  return (  
    <div className="App">
      <h1 className='text-center text-2xl font-bold tracking-tighter shadow-md p-5'>Todos Application using material UI</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10'>
        {
          todoList && todoList.length > 0 ?
          todoList.map((todo)=>(
            <TodosItem key={todo.id} todo={todo} fetchTodoDetails={fetchTodoDetails}/>
          )) : null
        }
      </div>
      <TodoDetails todoDetails={todoDetails} openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
}

export default App;