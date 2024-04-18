import React from "react";

const sizes = {
  xs: "text-[11px] font-normal",
  lg: "text-lg font-medium",
  s: "text-xs font-medium",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
