// src/store/carsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
//   const response = await fetch("https://freetestapi.com/api/v1/cars");
//   const data = await response.json();
//   return data;
// });

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  try {
    const response = await fetch("https://www.freetestapi.com/api/v1/cars");
    if (!response.ok) throw new Error("Network response was not ok");

    const carss = await response.json();
    // console.log(carss);
    return carss;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
});

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCars.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch";
      });
  },
});

export default carsSlice.reducer;
