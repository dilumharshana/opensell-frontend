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

export const CartItem = ({ item, styles = null }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
      <Card sx={styles}>
        <Grid container>
          {/* name and description */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {item?.itemName && item.itemName}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {item?.itemDesc && item.itemDesc}
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
            display="flex"
            alignItems="center"
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <span className="item-quantity">{item?.itemQuantity}</span>
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
                  <AddCircleIcon sx={{ color: greeTheme }} />
                </IconButton>
                <IconButton aria-label="next">
                  <RemoveCircleIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
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
