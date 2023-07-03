import { Grid } from "@mui/material";
// import { useFetchStockItemsQuery } from "../../Features/Api/apiSlice";
import { useSelector } from "react-redux";
import { SearchBar } from "../Search/Search";
import { StockItems } from "../StockItems/StockItems";

export const StockManagePanel = ({ dispatch }) => {
  const data = useSelector((state) => state?.stockItems);

  return (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <SearchBar />
      </Grid>
      <Grid item>
        <StockItems
          items={data?.stockItems}
          isFetching={data?.isFetching}
          dispatch={dispatch}
        />
      </Grid>
    </Grid>
  );
};
