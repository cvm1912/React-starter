import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-8  text-white'>

      <h1 className='font-bold text-2xl'>
        <i className="text-[#EF2121] ri-netflix-fill"></i>
        <span className='text-white tracking-tighter'>Netflix</span>
      </h1>

      <nav className='flex flex-col text-xl py-10 gap-2'>
        <Link to="/trending" className='hover:bg-red-600  p-5 duration-300 rounded-xl'>Trending</Link>
        <Link to="/popular" className='hover:bg-red-600 p-5 rounded-xl duration-300'>Popular</Link>
        <Link to="/movies" className='hover:bg-red-600 p-5 rounded-xl duration-300'>Movies</Link>
        <Link to="/tv-shows" className='hover:bg-red-600 p-5 rounded-xl duration-300'>TV Shows</Link>
      </nav>

    </div>
  )
}

export default Sidenav
