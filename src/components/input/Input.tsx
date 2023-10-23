import { InputProps } from "./Input.Model";

const Input = ({ type, placeholder, value, onChange }:InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
