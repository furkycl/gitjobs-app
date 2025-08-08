import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
});

export default jobsSlice.reducer;
