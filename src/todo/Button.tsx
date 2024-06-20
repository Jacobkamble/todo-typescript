import React, { FormEvent } from "react";

interface ButtonProps {
  lable: string;
  onClick: (e: FormEvent) => void;
  style: {
    color?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    padding?: string;
    cursor?: string;
  };
}

const Button: React.FC<ButtonProps> = ({ lable, onClick, style }) => {
  return (
    <>
      <button style={style} onClick={onClick}>
        {lable}
      </button>
    </>
  );
};

export default Button;
