import React, { useState, useEffect } from 'react'
import Sidenav from '../../Components/templates/Sidenav'
import Nav from '../../Components/templates/Nav'
import axios from '../../utils/axios'
import Headers from '../../Components/templates/Headers'

function Home(){
  document.title = "MBS | Homepage "
  const[wallpaper, setWallpaper]= useState(null);
  const getHeaderWallpaper = async ()=>{
    try{
      const {data} = await axios.get(`/trending/all/day`);
      let randomdata= data.results[Math.floor(Math.random()*data.results.length)]
      setWallpaper(randomdata);
    }catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{
    getHeaderWallpaper();
  },[])

  console.log(wallpaper);
  return (
   <>
     <Sidenav/>
    <div className='w-[80%] h-full '>
      <Nav/>
      <Headers data={wallpaper}/>
    </div>
   </>
  )
}

export default Home
