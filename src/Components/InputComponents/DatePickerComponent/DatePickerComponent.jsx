import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextBoxComponent } from "../TextBoxComponent/TextBoxComponent";

export const DatePickerComponent = ({
  value,
  onChange,
  placeHolder,
  style,
  error,
  label,
  format,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          value={value}
          onChange={onChange}
          label={label}
          placeHolder={placeHolder}
          error={error}
          renderInput={(params) => (
            <TextBoxComponent {...params} fullWidth={true} />
          )}
          style={style}
          format={format}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
