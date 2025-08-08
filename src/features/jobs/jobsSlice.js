import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const sampleJobs = [
  {
    id: 1,
    company: "Innovatech",
    title: "Senior React Developer",
    location: "Remote",
    type: "Full-Time",
    posted: "1d ago",
  },
  {
    id: 2,
    company: "Data Systems",
    title: "Node.js Backend Engineer",
    location: "New York, USA",
    type: "Full-Time",
    posted: "2d ago",
  },
  {
    id: 3,
    company: "Creative Minds",
    title: "UI/UX Designer",
    location: "London, UK",
    type: "Part-Time",
    posted: "5d ago",
  },
  {
    id: 4,
    company: "CloudNet",
    title: "DevOps Engineer",
    location: "Berlin, Germany",
    type: "Full-Time",
    posted: "1w ago",
  },
  {
    id: 5,
    company: "MobileFirst",
    title: "iOS Developer",
    location: "Remote",
    type: "Contract",
    posted: "3h ago",
  },
];

const fetchJobsFromAPI = () => {
  return new Promise((resolve) => setTimeout(() => resolve(sampleJobs), 1000));
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await fetchJobsFromAPI();
  return response;
});

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
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
