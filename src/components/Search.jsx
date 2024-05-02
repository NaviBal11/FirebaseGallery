import React from "react";

function Search({ type, className = "", ...props }) {
  return (
    <input
      type={type}
      className={`ring-1 ring-inset ring-gray-300 rounded-md placeholder:text-gray-400 placeholder:p-2 ${className}`}
      {...props}
    />
  );
}

export default Search;
