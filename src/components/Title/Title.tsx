import React from "react";

interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <h1 className={`fw-semibold me-3 ${className}`}>{title}</h1>
    </div>
  );
};

export default Title;
