import { Grid } from "@mui/material";
import { StockManagePanel } from "../../Components/StockManagePanel/StockManagePanel";
import { AddStockItems } from "../../Components/AddStockItems/AddStockItems";
import { useEffect, useReducer, useState } from "react";
import { stringConstants } from "../../Constants/StringConstants";

const initialItemData = {
  [stringConstants.itemId]: "",
  [stringConstants.itemName]: "",
  [stringConstants.itemCode]: "",
  [stringConstants.itemDesc]: "",
  [stringConstants.purchasePrice]: "",
  [stringConstants.sellingPrice]: "",
  [stringConstants.stockAmount]: "",
};

const reducer = (state, action) => {
  if (action.type === "RESET_STATE") {
    return initialItemData;
  }

  if (action.type === "UPDATE_STATE") {
    return {
      ...state,
      ...action.payload
    };
  }

  return {
    ...state,
    [action?.type]: action?.payload,
  };
};

export const StocksLayout = () => {
  const [item, dispatch] = useReducer(reducer, initialItemData);

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
