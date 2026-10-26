import React from 'react'
import Sidenav from '../../Components/templates/Sidenav'
import Nav from '../../Components/templates/Nav'

function Home(){
  document.title = "MBS | Homepage "
  return (
   <>
     <Sidenav/>
    <div className='w-[80%] h-full '>
      <Nav/>
    </div>
   </>
  )
}

export default Home
