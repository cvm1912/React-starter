import React from 'react'
import Sidenav from '../../Components/templates/Sidenav'

function Home(){
  document.title = "MBS | Homepage "
  return (
   <>
     <Sidenav/>
    <div className='w-[80%] h-full '></div>
   </>
  )
}

export default Home
