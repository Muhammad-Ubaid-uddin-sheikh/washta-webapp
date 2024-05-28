import React from "react";

const sizes = {
  xs: "text-xl font-normal",
  lg: "text-[32px] font-medium md:text-3xl sm:text-[28px]",
  s: "text-2xl font-normal md:text-[22px]",
  "2xl": "text-[64px] font-medium md:text-5xl",
  "3xl": "text-7xl font-medium md:text-5xl",
  xl: "text-5xl font-medium md:text-[44px] sm:text-[38px]",
  md: "text-[28px] font-medium md:text-[26px] sm:text-2xl",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700_bf font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
