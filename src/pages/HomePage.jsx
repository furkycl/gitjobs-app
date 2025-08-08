import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobsSlice";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";

function HomePage() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.items);
  const jobStatus = useSelector((state) => state.jobs.status);
  const error = useSelector((state) => state.jobs.error);
  useEffect(() => {
    if (jobStatus === "idle") {
      dispatch(fetchJobs());
    }
  }, [jobStatus, dispatch]);

  let content;

  if (jobStatus === "loading") {
    content = (
      <p className="text-center text-gray-500 text-lg">
        İş ilanları yükleniyor...
      </p>
    );
  } else if (jobStatus === "succeeded") {
    content = (
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    );
  } else if (jobStatus === "failed") {
    content = <p className="text-center text-red-500 text-lg">{error}</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchBar />
        {content}{" "}
      </main>
    </div>
  );
}

export default HomePage;
