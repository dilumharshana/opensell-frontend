import { useReducer } from "react";
import { stringConstants } from "../../Constants/StringConstants";
import { createDispatchAction } from "../../Utills/createDispatchAction";
import { TextBoxComponent } from "../InputComponents/TextBoxComponent/TextBoxComponent";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { InputWrapperStack } from "../InputWrapperStack/InputWrapperStack";
import { ButtonComponent } from "../InputComponents/ButtonComponent/ButtonComponent";
import Api from "../../Services/apiCallsHandler";
import { DatePickerComponent } from "../InputComponents/DatePickerComponent/DatePickerComponent";
import { endPoints } from "../../Constants/endpoints";
import moment from "moment";
import { additems } from "../../Features/stockSlice";
import { useDispatch } from "react-redux";

;

const initialItemData = {
  [stringConstants.itemName]: "",
  [stringConstants.itemCode]: "",
  [stringConstants.itemDesc]: "",
  [stringConstants.itemPurchasePrice]: null,
  [stringConstants.itemSellingPrice]: null,
  [stringConstants.itemAmount]: null,
};

const reducer = (state, action) => {
  return {
    ...state,
    [action?.type]: action?.payload,
  };
};

export const AddStockItems = () => {
  const [item, dispatch] = useReducer(reducer, initialItemData);
  
  const stockItemDispatch =useDispatch()

  const handlAddItem = async () => {
    const api = new Api();
  
    const response = await api.post(endPoints.addItem, item);
    if (response.status === 200) {
      stockItemDispatch(additems(item));
    }
  }

  return (
    <>
      <p>Add Item</p>

      <InputWrapperStack>
        {/* item code */}
        <InputWrapper>
          <TextBoxComponent
            label="Item Code"
            value={item.itemCode}
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
            value={item.itemName}
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
            value={item.itemDesc}
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
            value={item.itemPurchasePrice}
            fullWidth={true}
            onChange={(e) =>
              dispatch(
                createDispatchAction(
                  stringConstants.itemPurchasePrice,
                  e.target.value
                )
              )
            }
          />
        </InputWrapper>

        {/* item selling amount */}
        <InputWrapper>
          <TextBoxComponent
            label="Item selling price"
            value={item.itemSellingPrice}
            fullWidth={true}
            onChange={(e) =>
              dispatch(
                createDispatchAction(
                  stringConstants.itemSellingPrice,
                  e.target.value
                )
              )
            }
          />
        </InputWrapper>

        {/* item amount */}
        <InputWrapper>
          <TextBoxComponent
            label="Item amount"
            value={item.itemAmount}
            fullWidth={true}
            onChange={(e) =>
              dispatch(
                createDispatchAction(stringConstants.itemAmount, e.target.value)
              )
            }
          />
        </InputWrapper>

        {/* item purchase date */}
        <InputWrapper>
          <DatePickerComponent
            label="Item purchase date"
            value={item.itemPurchaseDate}
            fullWidth={true}
            onChange={(date) =>
              dispatch(
                createDispatchAction(
                  stringConstants.itemPurchaseDate,
                  moment(date).format("MMMM Do YYYY")
                )
              )
            }
          />
        </InputWrapper>

        {/* item description */}
        <InputWrapper>
          <ButtonComponent
            label="Add Item"
            style={{ width: "100%" }}
            onClick={() => handlAddItem(item)}
          />
        </InputWrapper>
      </InputWrapperStack>
    </>
  );
};
