import { Grid } from "@mui/material";
import { appConstants } from "../../Constants/appConstants";

export const InputWrapper = ({ children, variant = appConstants.default }) => {
  return (
    <Grid sm={12} md={12} lg={12} xl={12} p={appConstants.inputWrapperMargin}>
      {children}
    </Grid>
  );
};
