import React, { ChangeEvent } from "react";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, label }) => {
  
  return (
    <>
      <label htmlFor="input">{label}</label>
      <input
        name="input"
        type="text"
        placeholder="Enter Here...."
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
