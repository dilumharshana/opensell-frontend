import { TextField } from "@mui/material";

export const TextBoxComponent = ({
  value,
  onChange,
  placeholder,
  style,
  error,
  type,
  variant,
  size = "small",
  label,
  fullWidth,
  className,
  onKeyDown
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      error={error}
      type={type}
      variant={variant}
      size={size}
      label={label}
      fullWidth={fullWidth}
      className={className}
      onKeyDown={onKeyDown}
    />
  );
};
