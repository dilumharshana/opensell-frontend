import { createSlice } from "@reduxjs/toolkit";
import { stringConstants } from "../Constants/StringConstants";

const initialState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartitem: (state, action) => {
      if (state.hasOwnProperty(action.payload?.[stringConstants.itemCode])) {
        return {
          ...state,
          [action.payload?.[stringConstants.itemCode]]: {
            ...action.payload,
            [stringConstants.itemQuantity]:
              state[action.payload?.[stringConstants.itemCode]]?.[
                stringConstants.itemQuantity
              ] + 1,
          },
        };
      }
      return {
        ...state,
        [action.payload.ITEM_CODE]: { ...action.payload, ITEM_QUANTITY: 1 },
      };
    },
    removeCartItem: (state, action) => {
      delete state[action.payload];
      return state;
    },
    incrementItemQuantity: (state, action) => {
      state[action.payload].ITEM_QUANTITY =
        state[action.payload].ITEM_QUANTITY + 1;
      return state;
    },
    decrementItemQuantity: (state, action) => {
      if (state[action.payload].ITEM_QUANTITY === 1) {
        delete state[action.payload];
        return state;
      }

      state[action.payload].ITEM_QUANTITY =
        state[action.payload].ITEM_QUANTITY - 1;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCartitem,
  removeCartItem,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
