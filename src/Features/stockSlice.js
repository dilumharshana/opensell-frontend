import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Services/apiCallsHandler";
import { endPoints } from "../Constants/endpoints";

const initialState = {
  fetching: false,
  stockItems: [],
  error: "",
};

const api = new Api();

export const fetchStockItems = createAsyncThunk(
  "stockitems/fetchStockItems",
  () => {
    console.log("called");
    return api.get(endPoints.getStock);
  }
);

export const stockSlice = createSlice({
  name: "stockItems",
  initialState,
  reducers: {
    additems: (state, action) => {
        return {
        fetching: false,
        stockItems: [...state.stockItems, action.payload],
        error: "",
      };
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStockItems.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(fetchStockItems.fulfilled, (state, action) => {
      state.fetching = false;
      state.stockItems = action.payload.data;
    });
    builder.addCase(fetchStockItems.rejected, (state, action) => {
      state.fetching = false;
      state.error = action.error;
    });
  },
});

// Action creators are generated for each case reducer function
export const { additems } = stockSlice.actions;
export default stockSlice.reducer;
