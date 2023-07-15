import { configureStore } from "@reduxjs/toolkit";
import stockSliceReduer from "../Features/stockSlice";
import cartReducer from "../Features/cartSlice";
import salesReducer from "../Features/salesSlice";


const store = configureStore({
  reducer: {
    stockItems:stockSliceReduer,
    cart:cartReducer,
    sales:salesReducer
  },

});

export default store;
