import { Grid } from "@mui/material";
import { StockManagePanel } from "../../Components/StockManagePanel/StockManagePanel";
import { AddStockItems } from "../../Components/AddStockItems/AddStockItems";

export const StocksLayout = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={12} lg={9} xl={9}>
        <StockManagePanel />
      </Grid>
      <Grid item sm={12} md={12} lg={3} xl={3}>
        <AddStockItems />
      </Grid>
    </Grid>
  );
};
