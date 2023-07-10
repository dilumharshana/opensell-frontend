import { Box, Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { connectPrinter } from "../../Services/connectPrinter";
import { ButtonComponent } from "../InputComponents/ButtonComponent/ButtonComponent";
import { TextBoxComponent } from "../InputComponents/TextBoxComponent/TextBoxComponent";
import Api from "../../Services/apiCallsHandler";
import { endPoints } from "../../Constants/endpoints";
import { stringConstants } from "../../Constants/StringConstants";

export const BillDetails = () => {
  const [discount, setDiscount] = useState();
  const [recivedCash, setRecivedCash] = useState();
  const cart = useSelector((state) => state?.cart);

  const ePosDevice = useRef();
  const printer = useRef();

  const api = new Api();

  const print = (text) => {
    let prn = printer.current;
    if (!prn) {
      alert("Not connected to printer");
      return;
    }

    prn.addText(text);
    prn.addFeedLine(5);
    prn.addCut(prn.CUT_FEED);

    prn.send();
  };

  const handlePrint = () => {
    printer.current = connectPrinter(ePosDevice);
    print();
  };

  if (discount === "") {
    setDiscount(0);
  }

  let total = 0;

  const cartItems = Object.keys(cart);

  cartItems.forEach((item) => {
    total +=
      parseFloat(cart[item]?.[stringConstants.sellingPrice]) *
      parseInt(cart[item]?.[stringConstants.itemQuantity]);
  });

  const discountedPrice = total - parseFloat(discount ? discount : 0);

  let balance = 0;

  if (recivedCash) {
    balance =
      parseFloat(recivedCash) - parseFloat(discountedPrice && discountedPrice);
  }

  const handleSaveBill = async () => {
    const data = {
      cart,
      discount,
      total,
      recivedCash,
    };

    const response = await api.post(endPoints.saveBill, data);
  };

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
              onChange={(value) => setDiscount(value)}
              numericInput={true}
              thousandSeparator={true}
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
              onChange={(value) => setRecivedCash(value)}
              numericInput={true}
              thousandSeparator={true}
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
      <Grid item>
        <ButtonComponent label="Sell" onClick={handleSaveBill} />
      </Grid>
    </Grid>
  );
};
