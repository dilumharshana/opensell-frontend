import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import { BasicCashData } from "./BasicCashData";

export const SalesDataPanel = ({ sale, loading }) => {
  const totalAmount = sale?.ITEMS?.reduce(
    (total, item) => total + item?.QUANTITY * item?.SELLED_PRICE,
    0
  );

  if (Object.keys(sale).length === 0) {
    return (
      <div className="bill-search-default-container">
        <img
          src="bill-search.jpg"
          className="bill-search-default-container-image"
        />
        <span className="bill-search-default-container-text">
          {loading ? "Searching ..." : "Search with Bill Number ( ex:110304 )"}
        </span>
      </div>
    );
  }

  return (
    <Grid container>
      <Grid item lg={9} xl={9}>
        <Box style={{ height: "75vh", overflowY: "scroll" }}>
        <Box p={2} m={2} display="flex" >
              <Box className="bold-text gray-text basic-font" style={{ width: "60%" }}>
                Item Name
              </Box>
              <Box className="bold-text gray-text basic-font" style={{ width: "20%" }}>Quantity</Box>
              <Box className="bold-text gray-text basic-font" style={{ width: "20%" }}>Price</Box>
            </Box>
          {sale?.ITEMS?.map((sale) => (
            <Box p={2} m={2} display="flex" className="salled-items-label">
              <Box style={{ width: "60%" }}>
                <span className="bold-text"> {sale.ITEM_NAME} </span>
              </Box>
              <Box style={{ width: "20%" }}>{sale.QUANTITY}</Box>
              <Box style={{ width: "20%" }}>Rs. {sale.SELLED_PRICE * sale.QUANTITY}</Box>
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item lg={3} xl={3}>
        <BasicCashData
          billId={sale?.SALE_ID}
          totalAmount={totalAmount}
          recieved={sale?.RECIVED_CASH}
          discount={sale?.DISCOUNT}
          selledBy={sale?.SELLED_BY}
          saleDate={sale?.SALE_DATE}
        />
      </Grid>
    </Grid>
  );
};
