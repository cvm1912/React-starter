import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-8  text-white'>

      <h1 className='font-bold text-3xl'>
        <i className="text-[#EF2121] ri-netflix-fill"></i>
        <span className='text-white '>Netflix</span>
      </h1>

      <nav className='flex flex-col text-xl py-10 gap-1 border-b'>
        <Link to="/trending" className='hover:bg-red-600  p-3 duration-300 rounded-xl'><span className='mr-3'><i class="ri-fire-line"></i></span>Trending</Link>
        <Link to="/popular" className='hover:bg-red-600 p-3 rounded-xl duration-300'><span className='mr-3'><i class="ri-sparkling-line"></i></span>Popular</Link>
        <Link to="/movies" className='hover:bg-red-600 p-3 rounded-xl duration-300'><span className='mr-3'><i class="ri-sparkling-line"></i></span>Movies</Link>
        <Link to="/tv-shows" className='hover:bg-red-600 p-3 rounded-xl duration-300'><span className='mr-3'><i class="ri-tv-2-line"></i></span>TV Shows</Link>
        <Link to="/tv-shows" className='hover:bg-red-600 p-3 rounded-xl duration-300'><span className='mr-3'><i class="ri-team-line"></i></span>People</Link>
      </nav>

      <nav className='flex flex-col text-xl py-10 gap-1'>
        <h1 className='font-bold mb-2'>Web information</h1>
        <Link to="/about" className='hover:bg-red-600  p-3 duration-300 rounded-xl'><span className='mr-3'><i class="ri-info-i"></i></span>About</Link>
        <Link to="/content" className='hover:bg-red-600 p-3 rounded-xl duration-300'><span className='mr-3'><i class="ri-phone-line"></i></span>Contact</Link>
       
      </nav>

    </div>
  )
}

export default Sidenav
