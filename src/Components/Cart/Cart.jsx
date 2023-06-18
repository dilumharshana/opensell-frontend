import { Grid } from "@mui/material";
import { CartItem } from "../CartItem/CartItem";
import { stringConstants } from "../../Constants/StringConstants";

export const Cart = () => {
  const items = [
    {
      id: 1,
      [stringConstants.itemName]: "Item 1",
      [stringConstants.itemDesc]: "Item description",
      [stringConstants.itemSellingPrice]: 100,
      [stringConstants.itemQuantity]: 1,
    },
    {
      id: 1,
      [stringConstants.itemName]: "Item 1",
      [stringConstants.itemDesc]: "Item description",
      [stringConstants.itemSellingPrice]: 100,
      [stringConstants.itemQuantity]: 1,
    },
    {
      id: 1,
      [stringConstants.itemName]: "Item 1",
      [stringConstants.itemDesc]: "Item description",
      [stringConstants.itemSellingPrice]: 100,
      [stringConstants.itemQuantity]: 1,
    },
    {
      id: 1,
      [stringConstants.itemName]: "Item 1",
      [stringConstants.itemDesc]: "Item description",
      [stringConstants.itemSellingPrice]: 100,
      [stringConstants.itemQuantity]: 1,
    },
    {
      id: 1,
      [stringConstants.itemName]: "Item 1",
      [stringConstants.itemDesc]: "Item description",
      [stringConstants.itemSellingPrice]: 100,
      [stringConstants.itemQuantity]: 1,
    },
    {
      id: 1,
      [stringConstants.itemName]: "Item 1",
      [stringConstants.itemDesc]: "Item description",
      [stringConstants.itemSellingPrice]: 100,
      [stringConstants.itemQuantity]: 1,
    },
    {
      id: 1,
      [stringConstants.itemName]: "Item 1",
      [stringConstants.itemDesc]: "Item description",
      [stringConstants.itemSellingPrice]: 100,
      [stringConstants.itemQuantity]: 1,
    },
  ];

  return (
    <Grid container spacing={1} direction="row">
      {items.map((item, index) => {
        return <CartItem key={index} item={item} />;
      })}
    </Grid>
  );
};
