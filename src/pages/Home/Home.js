import React, { useState, useEffect } from 'react'
import Sidenav from '../../Components/templates/Sidenav'
import Nav from '../../Components/templates/Nav'
import axios from '../../utils/axios'
import Searchbar from '../../Components/templates/Searchbar'
import Headers from '../../Components/templates/Headers'
import Cards from '../../Components/templates/Cards'
import Loading from '../../Components/Loading'

function Home(){
  document.title = "MBS | Homepage "
  const[wallpaper, setWallpaper]= useState(null);
  const [trending,setTrending] = useState(null);
  const [category,setCategory] =useState("all")
  const getHeaderWallpaper = async ()=>{
    try{
      const {data} = await axios.get(`/trending/all/day`);
      let randomdata= data.results[Math.floor(Math.random()*data.results.length)]
      setWallpaper(randomdata);
    }catch(err){
      console.log(err)
    }
  }

  const getTrending = async ()=>{
    try{
      const {data} = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    }catch(err){
      console.log(err)
    }
  }
  
  
  useEffect(()=>{
    getHeaderWallpaper();
    getTrending();
  },[category])

  console.log(wallpaper);
  return (
   <>
     <Sidenav/>
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
      <Nav/>
      <Headers data={wallpaper}/>
      {!trending ? <Loading /> : <Cards data={trending} func={setCategory} />}
    </div>
   </>
  )
}

export default Home
