import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Comments from "./pages/Comments";
import Recipies from "./pages/Recipies";
import RecipiesDetails from "./pages/Recipes-Details";
import { useRoutes } from "react-router-dom";

function App() {
  function Routes(){
     const element = useRoutes([
       {path: '/', element: <Home/>},
       {path: '/blogs', element: <Blogs/>},
       {path: '/comments', element: <Comments/>},
       {path: '/recipies', element: <Recipies/>},
       {path: '/recipes-details/:id', element: <RecipiesDetails/>}
     ])

     return element;
  }
  return (  
    <div className="App">
      <nav className="bg-white text-black p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tighter">Kuchu puchu</h1>
        <div>
          <Link to="/" className="px-4 py-2 rounded hover:bg-gray-200">Home</Link>
          <Link to="/blogs" className="px-4 py-2 rounded hover:bg-gray-200">Blogs</Link>
          <Link to="/comments" className="px-4 py-2 rounded hover:bg-gray-200">Comments</Link>
          <Link to="/recipies" className="px-4 py-2 rounded hover:bg-gray-200">Recipes</Link>
        </div>
      </nav>
      <Routes>
        <Routes/>
      </Routes>
    </div>
  );
}

export default App;