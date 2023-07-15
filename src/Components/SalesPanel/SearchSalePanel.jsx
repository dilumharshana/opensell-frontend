import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SearchBar } from "../Search/Search";


export const SearchSalePanel = ({ setSale }) => {
  const [search, setSearch] = useState("");
  const [displaySalesList, setDisplaySalesList] = useState([]);

  const { fetching, sales, error } = useSelector((state) => state.sales);

  useEffect(() => {
    if (!error) {
      setDisplaySalesList(sales);
    }
  }, [fetching]);

  if (fetching) {
    return <>Loading ..</>;
  }

  if (error) {
    return <>Error in loading sales !</>;
  }

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={() => {}}
          label="Search Bill"
        />
      </Grid>
      <Grid item>
        <Box p={2} m={2} display="flex">
          <Box style={{ width: "40%" }}>Bill number</Box>
          <Box style={{ width: "60%" }}>Customer name</Box>
        </Box>
        {Object.keys(displaySalesList)?.map((sale) => (
          <Paper>
            <Box
              p={2}
              m={2}
              display="flex"
              onClick={() => setSale(sales[sale])}
            >
              <Box style={{ width: "40%" }}>{sale}</Box>
              <Box style={{ width: "60%" }}>
                {sales[sale?.SALE_ID]?.SALE_ID}
              </Box>
            </Box>
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
};
