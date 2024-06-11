import React from "react";

interface InputProps {
  className?: string;
  type: string;
  placeHolder: string;
  name?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  placeHolder,
  name,
  onChange,
}) => {
  const valueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="fv-row">
      <input
        className={`form-control ${className}`}
        type={type}
        placeholder={placeHolder}
        name={name}
        autoComplete="off"
        onChange={valueChange}
      />
    </div>
  );
};

export default Input;
