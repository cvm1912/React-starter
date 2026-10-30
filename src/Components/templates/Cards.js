import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Cards({ data, func, title }) {
  if (!data) return null;
  return (
    <div className="w-full p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-semibold text-zinc-400">{title}</h1>
        <Dropdown 
          title="Filter"
          options={[
            { label: "All", value: "all" },
            { label: "Movie", value: "movie" },
            { label: "TV", value: "tv" },
          ]}
          onChange={func}
        />
      </div>

      <div className="flex gap-4 overflow-x-auto pb-3">
        {data.map((item, i) => (
          <Link
            key={i}
            to="#"
            className="min-w-[150px] hover:scale-105 duration-300"
          >
            <img
              className="w-[150px] h-[220px] object-cover rounded-lg"
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path || item.backdrop_path}`}
              alt={item.title || item.name}
            />
            <h2 className="text-white mt-2 text-sm font-semibold truncate w-[150px]">
              {item.title || item.name || item.original_title || item.original_name}
            </h2>
            <div className="text-zinc-400 text-xs mt-1 w-[150px]">
              <p className="truncate">{item.overview?.slice(0, 60)}...</p>
              <p className="mt-1">{item.release_date || item.first_air_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
