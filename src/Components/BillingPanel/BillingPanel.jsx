import { Grid } from "@material-ui/core";
import { SearchBar } from "../Search/Search";

export const BillingPanel = (props) => {
  return (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <SearchBar {...props} />
      </Grid>
      <Grid item>options</Grid>
    </Grid>
  );
};
