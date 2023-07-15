import { Grid } from "@mui/material";
import { SalesDataPanel } from "../../Components/SalesPanel/SalesDataPanel";
import { SearchSalePanel } from "../../Components/SalesPanel/SearchSalePanel";
import { useState } from "react";


export const SalesLayout = () => {
    const [sale , setSale] = useState({})
  return (
   
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <SearchSalePanel setSale={setSale} />
          </Grid>
          <Grid item lg={8}>
            <SalesDataPanel sale={sale}/>
          </Grid>
        </Grid>
      );
  
}
