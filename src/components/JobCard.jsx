import React from "react";
function JobCard({ job }) {
  if (!job) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-sky-500">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{job.company}</p>
          <h3 className="text-xl font-bold text-gray-800 mt-1">{job.title}</h3>
          <p className="text-gray-600 mt-2">{job.location}</p>
        </div>
        <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap">
          {job.type}
        </span>
      </div>
      <div className="text-right text-sm text-gray-400 mt-4">
        <p>{job.posted}</p>
      </div>
    </div>
  );
}

export default JobCard;
