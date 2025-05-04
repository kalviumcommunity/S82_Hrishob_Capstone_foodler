import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`rounded-2xl bg-gray-800 p-4 shadow-xl ${className || ""}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
