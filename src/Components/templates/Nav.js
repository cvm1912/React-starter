import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    if (e.key === 'Enter' && inputRef.current.value.trim()) {
      navigate(`/search?query=${inputRef.current.value}`)
    }
  }

  return (
    <div className='text-white w-full h-[10vh] flex items-center justify-center px-8'>

      <div className='flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full w-[50%]'>
        <i className="text-zinc-400 text-lg ri-search-ai-line"></i>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search movies, tv shows..."
          onKeyDown={handleSearch}
          className='bg-transparent text-sm font-normal text-white outline-none placeholder-zinc-500 w-full'
        />
        <i onClick={() => inputRef.current.value = ''} className="ri-close-line text-zinc-400 cursor-pointer hover:text-white"></i>
      </div>

    </div>
  )
}

export default Nav
