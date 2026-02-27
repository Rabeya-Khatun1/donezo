import React from "react";
import { cn } from "../../lib/utils";

const SectionHeader = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "text-xl text-gray-800 leading-none tracking-tighter",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default SectionHeader;
