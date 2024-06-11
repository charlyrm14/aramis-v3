import React from "react";

interface InputProps {
  className?: string;
  type: string;
  placeHolder: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  placeHolder,
  name,
}) => {
  return (
    <div className="fv-row">
      <input
        className={`form-control mb-4 ${className}`}
        type={type}
        placeholder={placeHolder}
        name={name}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
