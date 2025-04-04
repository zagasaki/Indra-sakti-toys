import React from "react";

const Card = ({ children }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-xl text-center">
      {children}
    </div>
  );
};

export default Card;
