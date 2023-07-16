import { Typography } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { greeTheme } from "../Constants/styles";

export const NavBar = () => {
  return (
    <>
      <AppBar style={{ background: greeTheme }} id="navbar">
        <Toolbar>
          <Typography variant="h4" style={{marginRight:"15px"}}><span className="bold-text">GIHAN STORES </span> </Typography>
          
          <Typography variant="h5"><small>by OpenSel</small>l</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
