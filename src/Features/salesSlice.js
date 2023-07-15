import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endPoints } from "../Constants/endpoints";
import Api from "../Services/apiCallsHandler";

const initialState = {
  fetching: false,
  sales: [],
  error: "",
};

const api = new Api();

export const fetchSales = createAsyncThunk(
  "sales/fetchSales",
  () => {
    return api.get(endPoints.getSales);
  }
);

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addSale: (state, action) => {
      return {
        fetching: false,
        stockItems: [action.payload, ...state.sales],
        error: "",
      };
    },
    updateSale: (state, action) => {
     
      return {
        sales: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSales.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(fetchSales.fulfilled, (state, action) => {
      state.fetching = false;
      state.sales = action.payload.data;
    });
    builder.addCase(fetchSales.rejected, (state, action) => {
      state.fetching = false;
      state.error = action.error;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addSale, updateSale } = salesSlice.actions;
export default salesSlice.reducer;
