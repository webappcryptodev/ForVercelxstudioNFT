import React from "react";
import { Link } from "react-router-dom";

// Primary Button
export const PrimaryButton = ({
  text,
  children,
  type,
  onClick,
  className,
  ...rest
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`focus:outline-none px-3 text-white py-2 bg-tag-brand text-base font-semibold hover:bg-opacity-80 hover:text-white ${className}`}
      {...rest}
    >
      {text ? text : children}
    </button>
  );
};

// Secondary Button
export const SecButton = ({
  children,
  type,
  onClick,
  className,
  to,
  state
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`focus:outline-none ${className}`}
    >
      <Link
        className={`px-4 py-3 bg-tag-dark text-white hover:bg-tag-dark text-base  trans hover:bg-opacity-80 hover:text-white ${className}`}
        to={to}
        state={state}
      >
        {children}
      </Link>
    </button>
  );
};

// gray Button without link
export const GrayButton = ({ children, type, onClick, className }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`px-4 py-2 bg-tag-darkOpac hover:bg-tag-dark text-sm  trans hover:bg-opacity-80 hover:text-white text-white focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
