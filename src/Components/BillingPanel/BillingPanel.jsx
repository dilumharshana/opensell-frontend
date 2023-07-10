import { Grid } from "@material-ui/core";
import { useState } from "react";
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

  const stockItems = useSelector((state) => state.stockItems.stockItems);
  const cartDispatch = useDispatch();

  const handleSearch = () => {
    const item = stockItems.filter((item) => item.ITEM_CODE === search);
    if (item[0]) {
      setSellingItem(item);
      setOpenPriceModal(true);
    }
  };

  const clearBillingState = () => {
    setSearch("");
    setSellingPrice("");
    setOpenPriceModal(false);
  };

  const handleAddItem = () => {
    console.log(sellingItem[0]);
    cartDispatch(
      addCartitem({
        [stringConstants.itemCode]: sellingItem[0]?.[stringConstants.itemCode],
        [stringConstants.itemName]: sellingItem[0]?.[stringConstants.itemName],
        [stringConstants.itemQuantity]:
          sellingItem[0]?.[stringConstants.itemQuantity],
        [stringConstants.sellingPrice]: sellingPrice,
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
        <Grid item>
          <BillDetails />
        </Grid>
      </Grid>
      <SelingPriceModal
        sellingPrice={sellingPrice}
        setSellingPrice={setSellingPrice}
        clearBillingState={clearBillingState}
        handleAddItem={handleAddItem}
        openPriceModal={openPriceModal}
        cancelPriceModal={() => setOpenPriceModal(false)}
      />
    </>
  );
};
