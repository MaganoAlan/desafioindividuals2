import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./Character.store";

const store = configureStore({
  reducer: {
    charactersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
