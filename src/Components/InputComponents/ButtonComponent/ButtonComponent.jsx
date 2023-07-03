import { Button } from "@mui/material";

export const ButtonComponent = ({
  label,
  onClick,
  isLoading,
  variant = "contained",
  style,
  disabled,
  className,
  size,
  sx
}) => {
  return (
    <Button
      label={label}
      size={size}
      onClick={onClick}
      isLoading={isLoading}
      variant={variant}
      style={style}
      disabled={disabled}
      className={className}
      sx={sx}
    >
      {label}
    </Button>
  );
};
