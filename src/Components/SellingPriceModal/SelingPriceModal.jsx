import { Box, Stack } from "@mui/material";
import { ModalCopmonet } from "../ModalComponent/ModalComponent";
import { TextBoxComponent } from "../InputComponents/TextBoxComponent/TextBoxComponent";
import { ButtonComponent } from "../InputComponents/ButtonComponent/ButtonComponent";
import { sellingPriceModal } from "../../Constants/styles";
import { useEffect, useRef } from "react";

export const SelingPriceModal = ({
  sellingPrice,
  setSellingPrice,
  clearBillingState,
  handleAddItem,
  openPriceModal,
  cancelPriceModal,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    console.log("ref => ", ref);
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
    >
      <Stack mt={1} direction="row" spacing={2} alignItems="center">
        <span>Enter Selling Price</span>
        <TextBoxComponent
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
          ref={ref}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddItem();
            }
          }}
        />
      </Stack>
    </ModalCopmonet>
  );
};
