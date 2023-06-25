import { Grid } from "@material-ui/core";
import { SearchBar } from "../Search/Search";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartitem } from "../../Features/cartSlice";

export const BillingPanel = () => {
  const [search, setSearch] = useState("");

  const stockItems = useSelector(state => state.stockItems.stockItems)
  const cartDispatch = useDispatch()

  const handleSearch = () => {
    const item = stockItems.filter(item => item.ITEM_CODE === search)
    cartDispatch(addCartitem(item[0]))
  };

  const props = { search, setSearch, handleSearch };

  return (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <SearchBar {...props} />
      </Grid>
      <Grid item>options</Grid>
    </Grid>
  );
};
