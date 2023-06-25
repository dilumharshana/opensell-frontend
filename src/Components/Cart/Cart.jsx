import { Grid } from "@mui/material";
import { CartItem } from "../CartItem/CartItem";
import { stringConstants } from "../../Constants/StringConstants";
import { useSelector } from "react-redux";

export const Cart = () => {

  const cart = useSelector(state => state.cart)

console.log(cart);
  return (
    <Grid container spacing={1} direction="row">
      {Object.keys(cart).map((item, index) => {
        return <CartItem key={index} item={cart[item]} />;
      })}
    </Grid>
  );
};
