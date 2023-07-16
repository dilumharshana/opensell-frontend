import { Grid } from "@mui/material";
import { SalesDataPanel } from "../../Components/SalesPanel/SalesDataPanel";
import { SearchSalePanel } from "../../Components/SalesPanel/SearchSalePanel";
import { useState } from "react";

export const SalesLayout = () => {
  const [sale, setSale] = useState({});
  const [fetchingBill, setetchingBill] = useState(false);
  
  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <SearchSalePanel setSale={setSale} setetchingBill={setetchingBill} />
      </Grid>
      <Grid item lg={12}>
        <SalesDataPanel sale={sale} loading={fetchingBill} />
      </Grid>
    </Grid>
  );
};
