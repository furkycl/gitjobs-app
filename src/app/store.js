import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs/jobsSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favoriteJobIds", serializedState);
  } catch (e) {
    console.warn("Uyarı: Favoriler yerel depolamaya kaydedilemedi.", e);
  }
};

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    favorites: favoritesReducer,
  },
});

store.subscribe(() => {
  const favoriteIds = store.getState().favorites.favoriteIds;
  saveState(favoriteIds);
});
