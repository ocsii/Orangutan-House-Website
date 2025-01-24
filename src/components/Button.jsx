import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
