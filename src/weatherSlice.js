import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: {},
    isLoading: false,
  },
  reducers: {
    getWeatherFetch: (state) => {
      state.isLoading = true;
    },
    getWeatherSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getWeatherFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getWeatherFetch, getWeatherSuccess, getWeatherFailure } =
  weatherSlice.actions;

export default weatherSlice.reducer;
