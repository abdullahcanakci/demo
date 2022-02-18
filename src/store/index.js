import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "@/store/demoSlice";

export const store = configureStore({
  reducer: {
    demo: demoReducer,
  },
});
