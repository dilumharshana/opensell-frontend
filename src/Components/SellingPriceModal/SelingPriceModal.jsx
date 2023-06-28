import { Box, Stack } from "@mui/material";
import { ModalCopmonet } from "../ModalComponent/ModalComponent";
import { TextBoxComponent } from "../InputComponents/TextBoxComponent/TextBoxComponent";
import { ButtonComponent } from "../InputComponents/ButtonComponent/ButtonComponent";

export const SelingPriceModal = ({
  sellingPrice,
  setSellingPrice,
  clearBillingState,
  handleAddItem,
  openPriceModal,
  setOpenPriceModal
}) => {
  return (
    <ModalCopmonet open={openPriceModal} handleClose={setOpenPriceModal}>
      <Box
        style={{
          width: "20vw",
          height: "10vh",
          position: "absolute",
          top: "40%",
          left: "40%",
          background: "#fff",
          padding: "2%",
        }}
        alignItems="center"
      >
        <Stack mt={1} direction="row" spacing={2} alignItems="center">
          <span>Enter Selling Price</span>
          <TextBoxComponent
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </Stack>
        <Stack mt={4} direction="row" spacing={2} justifyContent="flex-end">
          <ButtonComponent
            label="Cancel"
            variant="outlined"
            onClick={clearBillingState}
          />
          <ButtonComponent
            label="Add Item"
            onClick={handleAddItem}
            disabled={sellingPrice.length === 0}
          />
        </Stack>
      </Box>
    </ModalCopmonet>
  );
};
