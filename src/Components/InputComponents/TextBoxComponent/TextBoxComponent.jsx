import { TextField } from "@mui/material";

export const TextBoxComponent = ({
  value,
  onChange,
  placeHolder,
  style,
  error,
  type,
  variant,
  size = "small",
  label,
  fullWidth,
  className,
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeHolder={placeHolder}
      style={style}
      error={error}
      type={type}
      variant={variant}
      size={size}
      label={label}
      fullWidth={fullWidth}
      className={className}
    />
  );
};
