import { createSlice } from "@reduxjs/toolkit";
const loadFavoritesFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("favoriteJobIds");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load favorites from local storage", e);
    return [];
  }
};

const initialState = {
  favoriteIds: loadFavoritesFromLocalStorage(),
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
