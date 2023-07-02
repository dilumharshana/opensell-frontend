import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextBoxComponent } from "../InputComponents/TextBoxComponent/TextBoxComponent";
import { ButtonComponent } from "../InputComponents/ButtonComponent/ButtonComponent";
import { Br, Cut, Line, Text, Row, render } from 'react-thermal-printer';


export const BillDetails = () => {
  const [discount, setDiscount] = useState(0);
  const [recivedCash, setRecivedCash] = useState(0);

  if (discount === "") {
    setDiscount(0);
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

  const receipt =(
    <Printer type="epson" width={42} characterSet="korea">
      <Text size={{ width: 2, height: 2 }}>9,500원</Text>
      <Text bold={true}>결제 완료</Text>
      <Br />
      <Line />
      <Row left="결제방법" right="체크카드" />
      <Row left="카드번호" right="123456**********" />
      <Row left="할부기간" right="일시불" />
      <Row left="결제금액" right="9,500" />
      <Row left="부가세액" right="863" />
      <Row left="공급가액" right="8,637" />
      <Line />
      <Row left="맛있는 옥수수수염차 X 2" right="11,000" />
      <Text>옵션1(500)/옵션2/메모</Text>
      <Row left="(-) 할인" right="- 500" />
      <Br />
      <Line />
      <Row left="합계" right="9,500" />
      <Row left="(-) 할인 2%" right="- 1,000" />
      <Line />
      <Row left="대표" right="김대표" />
      <Row left="사업자등록번호" right="000-00-00000" />
      <Row left="대표번호" right="0000-0000" />
      <Row left="주소" right="어디시 어디구 어디동 몇동몇호" />
      <Line />
      <Br />
      <Text align="center">Wifi: some-wifi / PW: 123123</Text>
      <Cut />
    </Printer>
  );

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
      <Grid item>
        <ButtonComponent
          label="Sell"
          onClick={() => {
            const bill = receipt();
            console.log(bill);
          }}
        />
      </Grid>
    </Grid>
  );
};
