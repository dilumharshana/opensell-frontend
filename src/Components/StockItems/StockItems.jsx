import { Grid } from "@mui/material";
import { StockItem } from "./StockItem";

export const StockItems = ({ items = [], isFetching, dispatch }) => {
  if (isFetching) return <>Loading items...</>;

  return (
    <Grid container spacing={1}>
      {items?.map((item) => (
        <StockItem
          item={item}
          key={item.itemId}
          dispatch={dispatch}
        />
      ))}
    </Grid>
  );
};
