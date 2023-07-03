import { Grid } from "@mui/material";
import { StockManagePanel } from "../../Components/StockManagePanel/StockManagePanel";
import { AddStockItems } from "../../Components/AddStockItems/AddStockItems";
import { useEffect, useReducer, useState } from "react";
import { stringConstants } from "../../Constants/StringConstants";

const initialItemData = {
  [stringConstants.itemId]: null,
  [stringConstants.itemName]: "",
  [stringConstants.itemCode]: "",
  [stringConstants.itemDesc]: "",
  [stringConstants.purchasePrice]: null,
  [stringConstants.sellingPrice]: null,
  [stringConstants.stockAmount]: null,
};

const reducer = (state, action) => {
  if (action.type === "RESET_STATE") {
    console.log(action);
    
    return {
      ...state,
      ...action.payload,
    };
  }

  return {
    ...state,
    [action?.type]: action?.payload,
  };
};

export const StocksLayout = () => {
  const [item, dispatch] = useReducer(reducer, initialItemData);
  
  console.log(item);

  return (
    <Grid container>
      <Grid item sm={12} md={12} lg={9} xl={9}>
        <StockManagePanel dispatch={dispatch} />
      </Grid>
      <Grid item sm={12} md={12} lg={3} xl={3}>
        <AddStockItems item={item} dispatch={dispatch} />
      </Grid>
    </Grid>
  );
};
