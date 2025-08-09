import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (searchParams = {}) => {
    const { description = "", location = "" } = searchParams;
    const API_URL = `https://remotive.com/api/remote-jobs?search=${description}&limit=20`;

    console.log(`API'den veri çekiliyor: ${API_URL}`);
    const response = await axios.get(API_URL);

    const jobsFromAPI = response.data.jobs.map((job) => ({
      id: job.id,
      company: job.company_name,
      title: job.title,
      location: job.candidate_required_location,
      type: job.job_type,
      posted: new Date(job.publication_date).toLocaleDateString(),
      url: job.url,
    }));

    return { jobs: jobsFromAPI, location: location };
  }
);

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { jobs, location } = action.payload;
        if (location) {
          const filteredJobs = jobs.filter((job) =>
            job.location.toLowerCase().includes(location.toLowerCase())
          );
          state.items = filteredJobs;
        } else {
          state.items = jobs;
        }
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Bir şeyler ters gitti.";
      });
  },
});

export default jobsSlice.reducer;
