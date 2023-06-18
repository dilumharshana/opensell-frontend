import { Typography } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { greeTheme } from "../Constants/styles";

export const NavBar = () => {
  return (
    <>
      <AppBar style={{ background: greeTheme }} id="navbar">
        <Toolbar>
          <Typography variant="h5">OpenSell</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
