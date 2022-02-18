import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    INCREMENT: (state) => {
      state.value += 1;
    },
  },
});

export const { INCREMENT } = demoSlice.actions;

export default demoSlice.reducer;

export const selectValue = (state) => state.demo.value;
