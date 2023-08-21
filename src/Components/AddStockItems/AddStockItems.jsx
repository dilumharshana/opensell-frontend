import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { stringConstants } from "../../Constants/StringConstants";
import { endPoints } from "../../Constants/endpoints";
import { additems, updateItem } from "../../Features/stockSlice";
import Api from "../../Services/apiCallsHandler";
import { createDispatchAction } from "../../Utills/createDispatchAction";
import { ButtonComponent } from "../InputComponents/ButtonComponent/ButtonComponent";
import { DatePickerComponent } from "../InputComponents/DatePickerComponent/DatePickerComponent";
import { TextBoxComponent } from "../InputComponents/TextBoxComponent/TextBoxComponent";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { InputWrapperStack } from "../InputWrapperStack/InputWrapperStack";
import { greeTheme } from "../../Constants/styles";
import { Box, Paper } from "@mui/material";
import { Checkbox } from "@mui/material";

export const AddStockItems = ({ item, dispatch }) => {
  const stockItemDispatch = useDispatch();

  const handlAddItem = async () => {
    const api = new Api();

    const response = await api.post(endPoints.addItem, item);
    if (response?.status === 200) {
      const generatedId = response?.data[stringConstants.itemId];

      if (!generatedId) return alert("Error occurd !");

      stockItemDispatch(
        additems({
          ...item,
          [stringConstants.itemId]: generatedId,
        })
      );
    }

    dispatch("RESET_STATE");
  };

  const handleUpdateItem = async () => {
    const api = new Api();

    const response = await api.post(endPoints.addItem, item);
    if (response?.status === 200) {
      stockItemDispatch(updateItem(item));
    }

    dispatch(createDispatchAction("RESET_STATE"), null);
  };

  return (
    <Paper elevation={4}>
      <Box className="bold-text gray-text basic-font" m={2} pt={2}>
        Add Item
      </Box>

      <InputWrapperStack>
        {/* item code */}
        <InputWrapper>
          <TextBoxComponent
            label="Item Code"
            value={item[stringConstants.itemCode]}
            fullWidth={true}
            onChange={(e) =>
              dispatch(
                createDispatchAction(stringConstants.itemCode, e.target.value)
              )
            }
          />
        </InputWrapper>

        {/* item name */}
        <InputWrapper>
          <TextBoxComponent
            label="Item Name"
            value={item[stringConstants.itemName]}
            fullWidth={true}
            onChange={(e) =>
              dispatch(
                createDispatchAction(stringConstants.itemName, e.target.value)
              )
            }
          />
        </InputWrapper>

        {/* item description */}
        <InputWrapper>
          <TextBoxComponent
            label="Item Description"
            value={item[stringConstants.itemDesc]}
            fullWidth={true}
            onChange={(e) =>
              dispatch(
                createDispatchAction(stringConstants.itemDesc, e.target.value)
              )
            }
          />
        </InputWrapper>

        {/* item purchase price */}
        <InputWrapper>
          <TextBoxComponent
            label="Item purchase price"
            value={item[stringConstants.purchasePrice]}
            fullWidth={true}
            onChange={(value) =>
              dispatch(
                createDispatchAction(stringConstants.purchasePrice, value)
              )
            }
            numericInput={true}
            thousandSeparator={true}
          />
        </InputWrapper>

        {/* item selling amount */}
        <InputWrapper>
          <TextBoxComponent
            label="Item selling price"
            value={item[stringConstants.sellingPrice]}
            fullWidth={true}
            onChange={(value) =>
              dispatch(
                createDispatchAction(stringConstants.sellingPrice, value)
              )
            }
            numericInput={true}
            thousandSeparator={true}
          />
        </InputWrapper>

        {/* item amount */}
        <InputWrapper>
          <TextBoxComponent
            label="Item amount"
            value={item[stringConstants.stockAmount]}
            fullWidth={true}
            onChange={(value) =>
              dispatch(createDispatchAction(stringConstants.stockAmount, value))
            }
            numericInput={true}
          />
        </InputWrapper>

        {/*is  mesurable item  */}
        <InputWrapper>
          <Checkbox
            value={item[stringConstants.mesurable === 1]}
            onChange={(e) => {
              dispatch(
                createDispatchAction(
                  stringConstants.mesurable,
                  item[stringConstants.mesurable] === 0 ? 1 : 0
                )
              );
            }}
            defaultChecked={item[stringConstants.mesurable === 1]}
          />
          Mesurable Item ( 1 Kg )
        </InputWrapper>

        {/* item purchase date */}
        {/* <InputWrapper>
          <DatePickerComponent
            label="Item purchase date"
            value={item[stringConstants.purchaseDate]}
            fullWidth={true}
            onChange={(date) =>
              dispatch(
                createDispatchAction(
                  stringConstants.purchaseDate,
                  moment(date).format("MMMM Do YYYY")
                )
              )
            }
          />
        </InputWrapper> */}

        {/* item description */}
        <InputWrapper>
          <ButtonComponent
            label={
              item?.[stringConstants.itemId] === "" ? "Add Item" : "Update Item"
            }
            style={{ width: "100%" }}
            onClick={() =>
              item?.[stringConstants.itemId]
                ? handleUpdateItem(item)
                : handlAddItem(item)
            }
            sx={{
              background:
                item?.[stringConstants.itemId] === "" ? null : greeTheme,
            }}
          />
        </InputWrapper>
      </InputWrapperStack>
    </Paper>
  );
};
