import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartitem } from "../../Features/cartSlice";
import { SearchBar } from "../Search/Search";
import { SelingPriceModal } from "../SellingPriceModal/SelingPriceModal";
import { BillDetails } from "./BillDetails";
import { stringConstants } from "../../Constants/StringConstants";

export const BillingPanel = () => {
  const [search, setSearch] = useState("");
  const [openPriceModal, setOpenPriceModal] = useState(false);
  const [sellingPrice, setSellingPrice] = useState("");
  const [sellingItem, setSellingItem] = useState({});
  const [mesurableAmount, setMesurableAmount] = useState({kg:0 , g:0});

  const stockItems = useSelector((state) => state.stockItems.stockItems);
  const cartDispatch = useDispatch();

  const handleSearch = () => {
    const item = stockItems.filter((item) => item.ITEM_CODE === search);
    if (item[0]) {
      setSellingItem(item[0]);
      setOpenPriceModal(true);
    }
  };

  const clearBillingState = () => {
    setSearch("");
    setSellingPrice("");
    setMesurableAmount("");
    setOpenPriceModal(false);
  };

  const handleAddItem = () => {

    let calculatedSellingPrice = sellingPrice

    //if mesuarable item
    if (sellingItem?.[stringConstants.mesurable] === 1) {
      const totalAmount = parseFloat(mesurableAmount.kg) + parseFloat(mesurableAmount.g / 1000);
      console.log(mesurableAmount , mesurableAmount.g / 1000 , totalAmount);
      calculatedSellingPrice =totalAmount * sellingPrice;
    }

    cartDispatch(
      addCartitem({
        [stringConstants.itemCode]: sellingItem?.[stringConstants.itemCode],
        [stringConstants.itemName]: sellingItem?.[stringConstants.itemName],
        [stringConstants.itemId]: sellingItem?.[stringConstants.itemId],
        [stringConstants.mesurable]: sellingItem?.[stringConstants.mesurable],
        [stringConstants.remainStockAmount]:
          sellingItem?.[stringConstants.stockAmount],
        [stringConstants.itemQuantity]:
          sellingItem?.[stringConstants.itemQuantity],
        [stringConstants.sellingPrice]: calculatedSellingPrice,
      })
    );
    clearBillingState();
  };

  const props = { search, setSearch, handleSearch };

  return (
    <>
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <SearchBar {...props} />
        </Grid>
        <Grid item lg={7} xl={7}>
          <BillDetails />
        </Grid>
      </Grid>
      <SelingPriceModal
        name={sellingItem[stringConstants.itemName]}
        currentSellingPrice={sellingItem[stringConstants.sellingPrice]}
        sellingPrice={sellingPrice}
        setSellingPrice={setSellingPrice}
        mesurable={sellingItem[stringConstants.mesurable]}
        mesurableAmount={mesurableAmount}
        setMesurableAmount={setMesurableAmount}
        clearBillingState={clearBillingState}
        handleAddItem={handleAddItem}
        openPriceModal={openPriceModal}
        cancelPriceModal={() => setOpenPriceModal(false)}
      />
    </>
  );
};
