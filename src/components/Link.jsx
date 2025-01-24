import React from "react";

const Link = ({ children, className, ...props }) => {
  return (
    <a
      className={`text-primary hover:text-primary/80 underline ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
