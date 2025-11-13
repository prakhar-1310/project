import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search")?.toLowerCase() || "";

  const [memes, setMemes] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const allMemes = data.data.memes;
          const result = allMemes.filter((m) =>
            m.name.toLowerCase().includes(search)
          );
          setMemes(result);
          setFiltered(result);
        }
      })
      .catch((err) => console.error("Error fetching memes:", err));
  }, [search]);

  return (
    <div
      className="min-h-screen text-white px-6 py-8 flex flex-col items-center
                 bg-gradient-to-br from-fuchsia-700 via-purple-800 to-indigo-900"
    >
      {/* Back Button */}
      <Link
        to="/"
        className="mb-6 text-fuchsia-300 hover:text-white text-lg font-semibold transition-colors duration-200"
      >
        ← Back to Home
      </Link>

      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center drop-shadow-lg">
        Results for: <span className="text-fuchsia-200">{search}</span>
      </h1>

      {/* Meme Grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-300 mt-10 text-lg">No memes found 😢</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl">
          {filtered.map((meme) => (
            <div
              key={meme.id}
              className="bg-gray-900/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <img
                src={meme.url}
                alt={meme.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-3 text-center text-gray-200 text-sm truncate">
                {meme.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
