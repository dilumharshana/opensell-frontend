import { Box } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import { stringConstants } from "../../Constants/StringConstants";
import { ModalCopmonet } from "../ModalComponent/ModalComponent";
import { ButtonComponent } from "../InputComponents/ButtonComponent/ButtonComponent";

export const ItemModal = ({ item, openItemModal, onOkitem }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <ModalCopmonet
      open={openItemModal}
      title={item?.[stringConstants.itemName]}
      footer={<ButtonComponent label="Ok" onClick={onOkitem} />}
    >
      <>
        <Stack direction="row">
          <Box className="item-modal-titles">Item code</Box>
          <Box>: {item?.[stringConstants.itemName]}</Box>
        </Stack>

        <Stack direction="row">
          <Box className="item-modal-titles">Item description</Box>
          <Box>: {item?.[stringConstants.itemDesc]}</Box>
        </Stack>

        <Stack direction="row">
          <Box className="item-modal-titles">Item current stock</Box>
          <Box>: {item?.[stringConstants.stockAmount]}</Box>
        </Stack>

        <Stack direction="row">
          <Box className="item-modal-titles">Item selling price</Box>
          <Box>: Rs. {item?.[stringConstants.sellingPrice]}</Box>
        </Stack>
      </>
    </ModalCopmonet>
  );
};
