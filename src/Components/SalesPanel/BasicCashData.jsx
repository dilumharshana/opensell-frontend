import { Box, Paper } from "@mui/material";
import moment from "moment/moment";
import React from "react";

export const BasicCashData = ({
  billId,
  totalAmount,
  discount,
  recieved,
  selledBy,
  saleDate,
  isCashInputPanel = false,
}) => {
  return (
    <Box className="basic-bill-details-container">
      <Box display="flex" alignItems="center">
        <Box className="basic-bill-descripion">Bill Number</Box>
        <Box className="basic-bill-value">{billId ? billId : 0}</Box>
      </Box>
      <Box display="flex" alignItems="center" mt={3}>
        <Box className="basic-bill-descripion">Total</Box>
        <Box className="basic-bill-value">
          <span className="currency-standard-label">Rs.</span>
          {totalAmount ? totalAmount : 0}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" mt={3}>
        <Box className="basic-bill-descripion">Discount Amount</Box>
        <Box className="basic-bill-value">
          <span className="currency-standard-label">Rs.</span>
          {discount ? discount : 0}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" mt={3}>
        <Box className="basic-bill-descripion">Recived Cash</Box>
        <Box className="basic-bill-value">
          <span className="currency-standard-label">Rs.</span>
          {recieved ? recieved : 0}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" mt={3}>
        <Box className="basic-bill-descripion">Balance</Box>
        <Box className="basic-bill-value">
          <span className="currency-standard-label">Rs.</span>
          {recieved ? recieved - (totalAmount - discount) : 0}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" mt={3}>
        <Box className="basic-bill-descripion">Selled By</Box>
        <Box className="basic-bill-value">Admin</Box>
      </Box>
      <Box display="flex" alignItems="center" mt={3}>
        <Box className="basic-bill-descripion">Date</Box>
        <Box className="basic-bill-value">
          {moment(saleDate).format("MMMM Do YYYY")}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" mt={3}>
        <Box className="basic-bill-descripion">Time</Box>
        <Box className="basic-bill-value">
          {moment(saleDate).format("h:mm a")}
        </Box>
      </Box>
    </Box>
  );
};
