import React from "react";

function SearchBar() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-[-3rem] z-10 relative">
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="İş pozisyonu, anahtar kelime..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <input
          type="text"
          placeholder="Lokasyon (örn: Berlin, remote)"
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
