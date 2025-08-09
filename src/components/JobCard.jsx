import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

const HeartIcon = ({ isFavorite }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 cursor-pointer transition-colors duration-200 ${
      isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-400"
    }`}
    fill={isFavorite ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z"
    />
  </svg>
);

function JobCard({ job }) {
  const dispatch = useDispatch();
  const { favoriteIds } = useSelector((state) => state.favorites);
  const isFavorite = favoriteIds.includes(job.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(job.id));
  };

  if (!job) return null;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-sky-500 flex flex-col">
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">{job.company}</p>
            <h3 className="text-xl font-bold text-gray-800 mt-1">
              {job.title}
            </h3>
            <p className="text-gray-600 mt-2">{job.location}</p>
          </div>
          <div onClick={handleToggleFavorite}>
            <HeartIcon isFavorite={isFavorite} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end mt-4">
        <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap">
          {job.type}
        </span>
        <p className="text-sm text-gray-400">{job.posted}</p>
      </div>
    </div>
  );
}

export default JobCard;
