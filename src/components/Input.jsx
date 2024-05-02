import React, { forwardRef } from "react";

function Input({ type, className = "", ...props }, ref) {
  return (
    <input
      className={`w-full rounded-md ring-1 ring-inset ring-gray-300 placeholder:p-2 h-8 bg-white placeholder:text-slate-500 ${className}`}
      type={type}
      ref={ref}
      {...props}
    />
  );
}

export default forwardRef(Input);
