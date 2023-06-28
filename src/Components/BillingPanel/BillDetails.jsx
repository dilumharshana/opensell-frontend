import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextBoxComponent } from "../InputComponents/TextBoxComponent/TextBoxComponent";

export const BillDetails = () => {
  const [discount, setDiscount] = useState(0);
  const [recivedCash, setRecivedCash] = useState(0);

  if(discount === ""){
    setDiscount(0)
  }

  const cart = useSelector((state) => state?.cart);

  let total = 0;

  const cartItems = Object.keys(cart);

  cartItems.forEach((item) => {
    total +=
      parseFloat(cart[item]?.IEM_SELLING_PRICE) *
      parseInt(cart[item]?.ITEM_QUANTITY);
  });

  const discountedPrice = total - parseFloat(discount && discount);

  let balance = 0;
  if (recivedCash) {
    balance =
      parseFloat(recivedCash) - parseFloat(discountedPrice && discountedPrice);
  }

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Box display="flex">
          <Box mr={3}>TOTAL</Box>
          <Box>{total}</Box>
        </Box>
      </Grid>
      <Grid item>
        <Box display="flex" alignItems="center">
          <Box mr={3}>DISCOUNT</Box>
          <Box>
            <TextBoxComponent
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box display="flex" alignItems="center">
          <Box mr={3}>RECIVED</Box>
          <Box>
            <TextBoxComponent
              value={recivedCash}
              onChange={(e) => setRecivedCash(e.target.value)}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box display="flex">
          <Box mr={3}>BALANCE</Box>
          <Box>{balance}</Box>
        </Box>
      </Grid>
    </Grid>
  );
};
