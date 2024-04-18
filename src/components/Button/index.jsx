import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[5px]",
};
const variants = {
  fill: {
    indigo_400: "bg-indigo-400 text-white-A700",
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700_b2",
    gray_100_01: "bg-gray-100_01 text-green-500",
    deep_orange_50: "bg-deep_orange-50 text-red-500",
  },
};
const sizes = {
  md: "h-[54px] px-[35px] text-sm",
  xs: "h-[21px] px-2.5 text-[9px]",
  sm: "h-[40px] px-[22px] text-xs",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "deep_purple_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_400", "deep_purple_A200", "gray_100_01", "deep_orange_50"]),
};

export { Button };
