import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../components/JobCard";

function FavoritesPage() {
  const allJobs = useSelector((state) => state.jobs.items);
  const { favoriteIds } = useSelector((state) => state.favorites);

  const favoriteJobs = allJobs.filter((job) => favoriteIds.includes(job.id));

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Favori İlanlarım
      </h2>
      {favoriteJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-12">
          Henüz favori olarak işaretlenmiş bir iş ilanı bulunmuyor.
        </p>
      )}
    </div>
  );
}

export default FavoritesPage;
