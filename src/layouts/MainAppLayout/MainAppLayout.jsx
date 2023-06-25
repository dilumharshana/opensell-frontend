import * as React from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";
import { BillingLayout } from "../BillingLayout/BillingLayout";
import { StocksLayout } from "../StocksLayout/StocksLayout";
import Box from "@mui/material/Box";
import { NavBar } from "../../Components/NavBar";
import { Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: "100vw" }}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function MainAppLayout() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navbar = document.getElementById("navbar");

  document.body.background = "green";

  return (
    <Grid container spacing={2}>
      <Grid item>
        <NavBar />
      </Grid>
      <Grid item>
        <Box
          sx={{
            display: "flex",
            width: "100vw",
            // height: `calc(100vh-${navbar.clientHeight}px)`,
          }}
        >
          <TabPanel value={value} index={0}>
            <BillingLayout />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <StocksLayout />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>

          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderLeft: 1, borderColor: "divider" }}
          >
            <Tab
              label="Billing"
              {...a11yProps(0)}
              icon={<ShoppingCartIcon />}
              sx={{ borderBottom: 1, borderColor: "divider" }}
            />
            <Tab
              label="Stocks"
              {...a11yProps(1)}
              icon={<LibraryBooksIcon />}
              sx={{ borderBottom: 1, borderColor: "divider" }}
            />
            <Tab
              label="Settings"
              {...a11yProps(2)}
              icon={<SettingsIcon />}
              sx={{ borderColor: "divider" }}
            />
          </Tabs>
        </Box>
      </Grid>
    </Grid>
  );
}
