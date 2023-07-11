import { useEffect, useRef } from "react";
import { TextBoxComponent } from "../InputComponents/TextBoxComponent/TextBoxComponent";
import { ModalCopmonet } from "../ModalComponent/ModalComponent";
import { InputAdornment } from "@material-ui/core";

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
      title="Enter Selling Price"
    >
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
          startAdornment: <InputAdornment position="start">Rs.</InputAdornment>,
        }}
      />
    </ModalCopmonet>
  );
};
