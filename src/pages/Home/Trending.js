import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../Components/templates/Searchbar";
import Dropdown from "../../Components/templates/Dropdown";
import VerticalCards from "../../Components/templates/VerticalCards";
import Loading from "../../Components/Loading";
import Headers from "../../Components/templates/Headers";
import axios from '../../utils/axios'

function Trending() {
  const navigate = useNavigate()
  const [category, setCategory] = useState("all")
  const [duration, setDuration] = useState("day")
  const [trending, setTrending] = useState(null)
  const [wallpaper, setWallpaper] = useState(null)

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`)
      setTrending(data.results)
      setWallpaper(data.results[Math.floor(Math.random() * data.results.length)])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTrending()
  }, [category, duration])

  return (
    <div className="w-screen h-screen overflow-auto text-white">
      <div className="w-full h-[10vh] flex items-center gap-3 justify-between px-10 pt-5">
        <div className="flex items-center gap-3">
          <i onClick={() => navigate(-1)} className="ri-arrow-left-line text-2xl text-red-400 cursor-pointer"></i>
          <h1 className="text-2xl text-zinc-400 font-semibold">Trending</h1>
        </div>

        <Searchbar />
        <Dropdown
          title="category"
          options={[
            { label: "All", value: "all" },
            { label: "Movie", value: "movie" },
            { label: "TV", value: "tv" },
          ]}
          onChange={(val) => setCategory(val)}
        />
        <Dropdown
          title="Duration"
          options={[
            { label: "Day", value: "day" },
            { label: "Week", value: "week" },
          ]}
          onChange={(val) => setDuration(val)}
        />
      </div>

      <Headers data={wallpaper} />

      {!trending ? <Loading /> : <VerticalCards data={trending} />}
    </div>
  );
}

export default Trending;
