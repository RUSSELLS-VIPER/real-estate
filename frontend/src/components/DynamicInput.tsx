import { TextField } from "@mui/material";

import type {
  FieldValues
} from "react-hook-form";
import type { DynamicInputProps } from "../type/type/component.type";



const DynamicInput = <T extends FieldValues>({
  name,
  label,
  type = "text",
  rows,
  required = false,
  register,
  errors,
  placeholder
}: DynamicInputProps<T>) => {
  const error = errors[name];
  const errorMessage = error?.message as string | undefined;

  return (
    <TextField
    className="w-full px-4 py-3.5 rounded-xl border border-gray-100 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors text-sm placeholder-gray-300 text-gray-800"
      label={
        required ? (
          <>
            {label} <span  style={{ color: "red" }}>*</span>
          </>
        ) : (
          label
        )
      }
      type={type === "textarea" ? "text" : type}
      fullWidth
      multiline={type === "textarea"}
      rows={type === "textarea" ? (rows ?? 4) : undefined}
      error={!!errorMessage}
      helperText={errorMessage}
      {...register(name)}
      placeholder={placeholder}
    />
  );
};

export default DynamicInput;
