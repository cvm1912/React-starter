import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trending from "./pages/Home/Trending";
import Popular from "./pages/Popular";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import People from "./pages/People";
import Sidenav from "./Components/templates/Sidenav";

function App() {
  return (  
    <div className="w-screen h-screen bg-black flex">
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/trending" element={<Trending/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/movies" element={<Movie/>}/>
          <Route path="/tv-shows" element={<Tv/>}/>
          <Route path="/people" element={<People/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;