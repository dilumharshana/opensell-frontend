import { CardContent } from "@material-ui/core";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Box, Card, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { stringConstants } from "../../Constants/StringConstants";
import { createDispatchAction } from "../../Utills/createDispatchAction";
import { ItemModal } from "../ItemModal/ItemModal";

export const StockItem = ({ item, styles, dispatch }) => {
  const [popupItem, setPopupItem] = useState({});

  return (
    <>
      <Grid item sx={12} sm={12} md={4} lg={3} xl={3}>
        <Card sx={styles} elevation={2}>
          <Grid container>
            {/* name and description */}
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              onClick={() => setPopupItem(item)}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography className="white-text" component="div" variant="h5">
                  {item?.[stringConstants.itemName] &&
                    item[stringConstants.itemName]}
                </Typography>
                <Typography
                  className="white-text"
                  variant="subtitle1"
                  component="div"
                >
                  Code:
                  {item?.[stringConstants.itemCode] &&
                    item[stringConstants.itemCode]}
                </Typography>

                <Box display="flex" mt={3}>
                  <Box className="stock-item-price-box">
                    <Typography
                      className="white-text"
                      variant="subtitle1"
                      component="div"
                      display="flex"
                      alignItems="center"
                    >
                      <AttachMoneyIcon />
                      <Box ml={1}>
                        {item?.[stringConstants.sellingPrice] &&
                          item[stringConstants.sellingPrice]}
                      </Box>
                    </Typography>
                  </Box>
                  <Box pl={3}>
                    <Typography
                      className="white-text"
                      variant="subtitle1"
                      component="div"
                      display="flex"
                      alignItems="center"
                    >
                      <LocalGroceryStoreIcon style={{ color: "#fff" }} />
                      <Box ml={2}>
                        {item?.[stringConstants.stockAmount] &&
                          item?.[stringConstants.stockAmount]}
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Grid>

            {/* options */}
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              lg={2}
              xl={2}
              display="flex"
              alignItems="center"
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  pl={5}
                >
                  <IconButton
                    aria-label="previous"
                    onClick={() =>
                      dispatch(createDispatchAction("UPDATE_STATE", item))
                    }
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="next">
                    <DeleteIcon />
                  </IconButton>
                  {/* <IconButton aria-label="play/pause">
                  <HighlightOffIcon sx={{ color: redTheme }} />
                </IconButton> */}
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <ItemModal
        openItemModal={popupItem.hasOwnProperty([stringConstants.itemId])}
        item={popupItem}
        onOkitem={() => setPopupItem({})}
      />
    </>
  );
};
