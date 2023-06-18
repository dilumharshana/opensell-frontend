import { CardContent } from "@material-ui/core";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Box, Card, Grid, IconButton, Typography } from "@mui/material";
import { greeTheme } from "../../Constants/styles";

export const StockItem = ({ item, styles }) => {
  return (
    <Grid item sx={12} sm={12} md={4} lg={3} xl={3}>
      <Card sx={styles}>
        <Grid container>
          {/* name and description */}
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {item?.ITEM_NAME && item.ITEM_NAME}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {item?.ITEM_DESC && item.ITEM_DESC}
              </Typography>

              <Box display="flex" mt={3}>
                <Box className="stock-item-price-box">
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    display="flex"
                    alignItems="center"
                  >
                    <AttachMoneyIcon />
                    <Box ml={1}>
                      {item?.SELLING_PRICE && item.SELLING_PRICE}
                    </Box>
                  </Typography>
                </Box>
                <Box pl={3}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    display="flex"
                    alignItems="center"
                  >
                    <LocalGroceryStoreIcon style={{ color: greeTheme }} />
                    <Box ml={2}> {item?.STOCK_AMOUNT && item.STOCK_AMOUNT}</Box>
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
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
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
  );
};
