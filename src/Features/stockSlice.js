import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Services/apiCallsHandler";
import { endPoints } from "../Constants/endpoints";
import { stringConstants } from "../Constants/StringConstants";

const initialState = {
  fetching: false,
  stockItems: [],
  error: "",
};

const api = new Api();

export const fetchStockItems = createAsyncThunk(
  "stockitems/fetchStockItems",
  () => {
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
        stockItems: [action.payload, ...state.stockItems],
        error: "",
      };
    },
    updateItem: (state, action) => {
      const updatedStock = state.stockItems.map((selectedItem) => {
        if (
          selectedItem?.[stringConstants.itemId] !==
          action?.payload?.[stringConstants.itemId]
        )
          return selectedItem;

        return {
          [stringConstants?.itemId]: action.payload?.[stringConstants.itemId],
          [stringConstants?.itemCode]:
            action.payload?.[stringConstants.itemCode],
          [stringConstants?.itemName]:
            action.payload?.[stringConstants.itemName],
          [stringConstants?.itemDesc]:
            action.payload?.[stringConstants.itemDesc],
          [stringConstants?.stockAmount]:
            action.payload?.[stringConstants.stockAmount],
          [stringConstants?.sellingPrice]:
            action.payload?.[stringConstants.sellingPrice],
          [stringConstants?.purchasePrice]:
            action.payload?.[stringConstants.purchasePrice],
        };
      });

      return {
        stockItems: updatedStock,
      };
    },
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
export const { additems, updateItem } = stockSlice.actions;
export default stockSlice.reducer;
