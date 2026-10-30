import React from "react";
import { Link } from "react-router-dom";

function VerticalCards({ data }) {
  if (!data) return null;
  return (
    <div className="flex flex-wrap gap-6 p-5 justify-center">
      {data.map((item, i) => (
        <Link
          key={i}
          to={`/${item.media_type}/${item.id}`}
          className="w-[180px] hover:scale-105 duration-300"
        >
          <div className="relative">
            <img
              className="w-[180px] h-[260px] object-cover rounded-xl"
              src={
                item.poster_path || item.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${item.poster_path || item.backdrop_path}`
                  : "/no-image.png"
              }
              alt={item.title || item.name}
            />
            <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/60 px-2 py-1 rounded-lg">
              <i className="ri-star-fill text-yellow-400 text-xs"></i>
              <span className="text-white text-xs font-semibold">{item.vote_average?.toFixed(1)}</span>
            </div>
          </div>
          <h2 className="text-white mt-2 text-sm font-semibold truncate">
            {item.title || item.name || item.original_title || item.original_name}
          </h2>
        </Link>
      ))}
    </div>
  );
}

export default VerticalCards;
