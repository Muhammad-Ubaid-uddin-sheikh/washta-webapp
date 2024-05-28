import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[30px]",
};
const variants = {
  fill: {
    indigo_300: "bg-indigo-300 shadow-xs text-white-A700",
  },
};
const sizes = {
  xs: "h-[42px] px-7 text-2xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "indigo_300",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer text-white-A700 text-2xl font-medium bg-indigo-300 shadow-xs rounded-[30px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_300"]),
};

export { Button };
