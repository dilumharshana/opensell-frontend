import { CardContent } from "@material-ui/core";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";

export const CartTitles = ({ styles }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Grid container>
        {/* name and description */}
        <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
          <CardContent>ITEM</CardContent>
        </Grid>

        {/* quantity */}
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2} display="flex">
          <CardContent>Qty</CardContent>
        </Grid>

        {/* price */}
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2} display="flex">
          <CardContent>PRICE</CardContent>
        </Grid>

        {/* options */}
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={3}
          xl={3}
          display="flex"
          justifyContent="center"
        >
          <CardContent>OPTIONS</CardContent>
        </Grid>
      </Grid>
    </Grid>
  );
};
