import AddCircleIcon from "@mui/icons-material/AddCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { greeTheme, redTheme } from "../../Constants/styles";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeCartItem,
} from "../../Features/cartSlice";

export const CartItem = ({ item, styles = null }) => {
  const cartItemDispatch = useDispatch();

  const removeItem = () => cartItemDispatch(removeCartItem(item.ITEM_CODE));
  const incrementItem = () =>
    cartItemDispatch(incrementItemQuantity(item.ITEM_CODE));
  const decrementItem = () =>
    cartItemDispatch(decrementItemQuantity(item.ITEM_CODE));

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Card sx={styles}>
        <Grid container alignItems="center"> 
          {/* name and description */}
          <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
            <CardContent >
              <Typography component="div" variant="h5">
                {item?.ITEM_NAME && item.ITEM_NAME}
              </Typography>
            </CardContent>
          </Grid>

          {/* quantity */}
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
            xl={2}

          >
            <CardContent >
              <span className="item-quantity">{item?.ITEM_QUANTITY}</span>
            </CardContent>
          </Grid>

          {/* price */}
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
            xl={2}

          >
            <CardContent >
              <span className="item-quantity">
                {item?.ITEM_QUANTITY * item.IEM_SELLING_PRICE}
              </span>
            </CardContent>
          </Grid>

          {/* options */}
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={1}
            xl={1}

          >
            <CardContent >
              <Box sx={{ display: "flex", alignItems: "center"}}>
                <IconButton aria-label="previous" onClick={incrementItem}>
                  <AddCircleIcon sx={{ color: greeTheme }} />
                </IconButton>
                <IconButton aria-label="next" onClick={decrementItem}>
                  <RemoveCircleIcon />
                </IconButton>
                <IconButton aria-label="play/pause" onClick={removeItem}>
                  <HighlightOffIcon sx={{ color: redTheme }} />
                </IconButton>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
