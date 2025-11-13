import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/results?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white px-4
      bg-gradient-to-br from-fuchsia-700 via-purple-800 to-indigo-900">
      {/* 👆 gradient background */}

      <h1 className="text-5xl font-extrabold mb-8 tracking-wide drop-shadow-lg">
        <span className="text-fuchsia-300">Meme Search</span>
      </h1>

      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center w-full max-w-md"
      >
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for memes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 pr-12 rounded-2xl bg-gray-900/70 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-fuchsia-400 backdrop-blur-md shadow-lg"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-fuchsia-300 transition-colors duration-200"
          >
            <Search size={22} />
          </button>
        </div>
      </form>
    </div>
  );
}
