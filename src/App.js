import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Comments from "./pages/Comments";
import Recipies from "./pages/Recipies";
import RecipiesDetails from "./pages/Recipes-Details";

function App() {
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
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/comments" element={<Comments/>} />
        <Route path="/recipies" element={<Recipies/>} />
        <Route path="/recipes-details/:id" element={<RecipiesDetails/>} />
      </Routes>
    </div>
  );
}

export default App;