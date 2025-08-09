import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../features/jobs/jobsSlice";

function SearchBar() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchJobs({ description, location }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-[-3rem] z-10 relative">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          placeholder="İş pozisyonu, anahtar kelime..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <input
          type="text"
          placeholder="Lokasyon (örn: Berlin, remote)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button
          type="submit"
          className="w-full bg-sky-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-700 transition-colors duration-300"
        >
          İş Ara
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
