import { Grid } from "@mui/material";
import { useState } from "react";
import { BillingPanel } from "../../Components/BillingPanel/BillingPanel";
import { Cart } from "../../Components/Cart/Cart";

export const BillingLayout = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {};

  const props = { search, setSearch, handleSearch };

  return (
    <Grid container spacing={2}>
      <Grid item lg={8}>
        <BillingPanel {...props} />
      </Grid>
      <Grid item lg={4}>
        <Cart />
      </Grid>
    </Grid>
  );
};
