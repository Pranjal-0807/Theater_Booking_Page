import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import seatReducer from "./slices/seatSlice";

export const store = configureStore({
  reducer: {
    seat: seatReducer,
    theme: themeReducer,
  },
});
