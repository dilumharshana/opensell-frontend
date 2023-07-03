import { Grid } from "@mui/material";
import { CartItem } from "../CartItem/CartItem";
import { stringConstants } from "../../Constants/StringConstants";
import { useSelector } from "react-redux";
import { CartTitles } from "../CartItem/CartTitles";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Grid container spacing={1} direction="row">
      {Object.keys(cart)?.length > 0 && <CartTitles />}
      {Object.keys(cart).map((item, index) => {
        return <CartItem key={index} item={cart[item]} />;
      })}
    </Grid>
  );
};
