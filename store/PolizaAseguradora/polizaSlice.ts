import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Poliza {
  message?: string;
  polizas: any;
  total_polizas: any;
}

interface PolizaState {
  data?: Poliza | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PolizaState = {
  data: null,
  status: "idle",
  error: null,
};

// const url = import.meta.env.VITE_BASE_QA;

export const fetchPolizas = createAsyncThunk(
  "poliza/fetchPolizas",
  async (value: string) => {
    const response = await axios.get(
      `https://middleware.insuranceservices.mx/api/v1/aramis/endosos/search-policy/insurance-policy/${value}`
    );
    return response.data;
  }
);

const polizaSlice = createSlice({
  name: "poliza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolizas.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPolizas.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPolizas.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error fetching data";
      });
  },
});

export default polizaSlice.reducer;
