import { forwardRef } from "react";
import { TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

export const TextBoxComponent = forwardRef(
  (
    {
      value,
      onChange,
      placeholder,
      style,
      error,
      type,
      variant,
      size = "small",
      label,
      fullWidth = true,
      className,
      onKeyDown,
      focus,
      autoFocus,
      thousandSeparator = false,
      required = false,
      numericInput = false,
    },
    ref
  ) => {
    if (numericInput) {
      return (
        <NumericInput
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          thousandSeparator={thousandSeparator}
          required={required}
          lablel={label}
          ref={ref}
        />
      );
    }

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
        inputRef={ref}
        focused={focus}
        autoFocus={autoFocus}
        required={required}
      />
    );
  }
);

const NumericInput = forwardRef(
  (
    { value, onChange, onKeyDown, thousandSeparator, required, lablel },
    ref
  ) => {
    return (
      <NumericFormat
        customInput={TextBoxComponent}
        variant="outlined"
        thousandSeparator={thousandSeparator}
        label={lablel}
        value={value}
        decimalScale={2}
        onValueChange={(e) => {
          const { value } = e;
          onChange(value);
        }}
        required={required}
        onKeyDown={onKeyDown}
        ref={ref}
      />
    );
  }
);
