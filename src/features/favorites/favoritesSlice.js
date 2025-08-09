import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const jobId = action.payload;
      const jobIndex = state.favoriteIds.indexOf(jobId);

      if (jobIndex >= 0) {
        state.favoriteIds.splice(jobIndex, 1);
      } else {
        state.favoriteIds.push(jobId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
