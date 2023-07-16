import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SearchBar } from "../Search/Search";
import Api from "../../Services/apiCallsHandler";
import { endPoints } from "../../Constants/endpoints";

export const SearchSalePanel = ({ setSale, setetchingBill, fetchingBill }) => {
  const [search, setSearch] = useState("");

  const api = new Api();

  const handleSearch = async () => {
    setetchingBill(true);
    const response = await api.get(endPoints.getSales, { saleId: search });
    if (response?.status === 200) {
      setSale(response?.data);
    }
    setetchingBill(false);
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          label="Search Bill"
          disableButton={fetchingBill}
        />
      </Grid>
    </Grid>
  );
};
