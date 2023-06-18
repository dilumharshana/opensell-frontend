import { Grid } from "@mui/material";
import { useFetchStockItemsQuery } from "../../Features/Api/apiSlice";
import { SearchBar } from "../Search/Search";
import { StockItems } from "../StockItems/StockItems";

export const StockManagePanel = () => {
  const { data, isFetching } = useFetchStockItemsQuery();

  return (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <SearchBar />
      </Grid>
      <Grid item>
        <StockItems items={data?.data} isFetching={isFetching} />
      </Grid>
    </Grid>
  );
};
