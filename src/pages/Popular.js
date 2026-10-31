import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../utils/axios'
import Searchbar from "../Components/templates/Searchbar";
import Dropdown from "../Components/templates/Dropdown";
import VerticalCards from "../Components/templates/VerticalCards";
import Loading from "../Components/Loading";

function Popular() {
  const navigate = useNavigate()
  const [category, setCategory] = useState("movie")
  const [popular, setPopular] = useState([])

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular`)
      setPopular(data.results)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPopular()
  }, [category])

  return (
    <div id="scrollDiv" className="w-full h-full overflow-auto text-white">
      <div className="w-full h-[10vh] flex items-center gap-3 justify-between px-10 pt-5">
        <div className="flex items-center gap-3">
          <i onClick={() => navigate(-1)} className="ri-arrow-left-line text-2xl text-red-400 cursor-pointer"></i>
          <h1 className="text-2xl text-zinc-400 font-semibold">Popular</h1>
        </div>

        <Searchbar />
        <Dropdown
          title="Category"
          options={[
            { label: "Movie", value: "movie" },
            { label: "TV", value: "tv" },
          ]}
          onChange={(val) => setCategory(val)}
        />
      </div>

      <VerticalCards data={popular} />
    </div>
  );
}

export default Popular;
