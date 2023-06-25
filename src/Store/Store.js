import { configureStore } from "@reduxjs/toolkit";
import stockSliceReduer from "../Features/stockSlice";
import cartReducer from "../Features/cartSlice";


const store = configureStore({
  reducer: {
    stockItems:stockSliceReduer,
    cart:cartReducer
  },

});

export default store;
