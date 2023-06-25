import { Grid } from "@mui/material";
import { BillingPanel } from "../../Components/BillingPanel/BillingPanel";
import { Cart } from "../../Components/Cart/Cart";

export const BillingLayout = () => {
  

  return (
    <Grid container spacing={2}>
      <Grid item lg={8}>
        <BillingPanel  />
      </Grid>
      <Grid item lg={4}>
        <Cart />
      </Grid>
    </Grid>
  );
};
