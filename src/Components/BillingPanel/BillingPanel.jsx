import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartitem } from "../../Features/cartSlice";
import { SearchBar } from "../Search/Search";
import { SelingPriceModal } from "../SellingPriceModal/SelingPriceModal";
import { BillDetails } from "./BillDetails";

export const BillingPanel = () => {
  const [search, setSearch] = useState("");
  const [openPriceModal, setOpenPriceModal] = useState(false);
  const [sellingPrice, setSellingPrice] = useState("");

  const stockItems = useSelector((state) => state.stockItems.stockItems);
  const cartDispatch = useDispatch();

  const handleSearch = () => {
    setOpenPriceModal(true);
  };

  const clearBillingState = () => {
    setSearch("");
    setSellingPrice("");
    setOpenPriceModal(false);
  };

  const handleAddItem = () => {
    console.log("Called");
    const item = stockItems.filter((item) => item.ITEM_CODE === search);
    cartDispatch(addCartitem({ ...item[0], IEM_SELLING_PRICE: sellingPrice }));
    clearBillingState();
  };

  const props = { search, setSearch, handleSearch };

  return (
    <>
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <SearchBar {...props} />
        </Grid>
        <Grid item><BillDetails/></Grid>
      </Grid>
      <SelingPriceModal
        sellingPrice={sellingPrice}
        setSellingPrice={setSellingPrice}
        clearBillingState={clearBillingState}
        handleAddItem={handleAddItem}
        openPriceModal={openPriceModal}
        setOpenPriceModal={setOpenPriceModal}
      />
    </>
  );
};
