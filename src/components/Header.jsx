import React from "react";
import { Link } from "react-router-dom"; // Link komponentini import et

function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <Link to="/">
        {" "}
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-600 font-logo">
          GitJobs
        </h1>
      </Link>
      <nav>
        <Link
          to="/favorites"
          className="text-lg font-medium text-gray-600 hover:text-sky-600 transition-colors"
        >
          Favorilerim
        </Link>
      </nav>
    </header>
  );
}

export default Header;
