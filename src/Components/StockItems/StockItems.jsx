import { Grid } from "@mui/material";
import { StockItem } from "./StockItem";
import { stringConstants } from "../../Constants/StringConstants";
import { itemCard } from "../../Constants/styles";

export const StockItems = ({ items = [], isFetching, dispatch }) => {
  if (isFetching) return <>Loading items...</>;

  return (
    <Grid container spacing={1}>
      {items?.map((item) => (
        <StockItem
          item={item}
          key={item?.[stringConstants.itemId]}
          dispatch={dispatch}
          styles={itemCard}
        />
      ))}
    </Grid>
  );
};
