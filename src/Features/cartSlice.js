import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartitem: (state, action) => {
      if (state.hasOwnProperty(action.payload.ITEM_CODE)) {
        return {
          ...state,
          [action.payload.ITEM_CODE]: {
            ...action.payload,
            ITEM_QUANTITY: state[action.payload.ITEM_CODE]?.ITEM_QUANTITY + 1,
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
