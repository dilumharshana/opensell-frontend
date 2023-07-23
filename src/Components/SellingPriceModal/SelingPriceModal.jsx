import { useEffect, useRef } from "react";
import { Grid, Box } from "@material-ui/core";
import { TextBoxComponent } from "../InputComponents/TextBoxComponent/TextBoxComponent";
import { ModalCopmonet } from "../ModalComponent/ModalComponent";
import { InputAdornment } from "@material-ui/core";
import { ButtonComponent } from "../InputComponents/ButtonComponent/ButtonComponent";

export const SelingPriceModal = ({
  name,
  currentSellingPrice,
  sellingPrice,
  setSellingPrice,
  clearBillingState,
  handleAddItem,
  openPriceModal,
  cancelPriceModal,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <ModalCopmonet
      open={openPriceModal}
      onCancel={cancelPriceModal}
      onOk={handleAddItem}
      okuttonDisabled={sellingPrice.length === 0}
      centerd={true}
      title={`Enter Selling Price : ${name}`}
    >
      <Box display="flex" mt={3} alignItems="center">
        <Box>
          <Box display="flex" p={1}>
            <Box style={{ minWidth: "60px" }}> Price</Box>
            <Box>{`: Rs. ${currentSellingPrice}`}</Box>
          </Box>
          <ButtonComponent label={`Proceed with price`} />
        </Box>
        <Box p={2}>Or</Box>
        <Box>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextBoxComponent
                value={sellingPrice}
                onChange={(value) => setSellingPrice(value)}
                ref={ref}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddItem();
                  }
                }}
                numericInput={true}
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rs.</InputAdornment>
                  ),
                }}
                placeholder="Add selling price"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ModalCopmonet>
  );
};
