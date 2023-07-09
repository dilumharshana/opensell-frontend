import { Grid } from "@mui/material";
// import { useFetchStockItemsQuery } from "../../Features/Api/apiSlice";
import { useSelector } from "react-redux";
import { SearchBar } from "../Search/Search";
import { StockItems } from "../StockItems/StockItems";
import { useState } from "react";
import { stringConstants } from "../../Constants/StringConstants";

export const StockManagePanel = ({ dispatch }) => {
  const [search, setSearch] = useState([]);
  const [searchItem, setSearchItem] = useState([]);

  const data = useSelector((state) => state?.stockItems);

  const handleSearch = (e) => {
    const filterdItem = data.stockItems.filter((item) => {
      return (
        item?.[stringConstants.itemName].includes(e.target.value) ||
        item?.[stringConstants.itemCode].includes(e.target.value)
      );
    });

    setSearchItem(filterdItem);
  };

  return (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <SearchBar
          search={search}
          setSearch={setSearch}
          onKeyPress={handleSearch}
        />
      </Grid>
      <Grid item>
        <StockItems
          items={search.length > 0 ? searchItem : data?.stockItems}
          isFetching={data?.isFetching}
          dispatch={dispatch}
        />
      </Grid>
    </Grid>
  );
};
