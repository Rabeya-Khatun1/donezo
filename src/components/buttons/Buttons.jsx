import React from "react";
import { cn } from "../../lib/utils";

const Button = ({
  text,
  onClick,
  variant = "primary",
  icon: Icon,
  className,
  iconSize = 18,
}) => {
  const variants = {
    primary:
      "bg-gradient-to-br from-[#006442] via-[#006442] to-[#0D442A] text-white hover:opacity-90 w-full md:w-40",
    secondary:
      "bg-white border border-[#0D442A] hover:bg-gray-50 text-[#0D442A] w-full md:w-30",
  };

  const hasCustomHeight = className?.split(' ').some(cls => cls.startsWith('h-'));

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 md:gap-4 md:text-sm rounded-full font-bold text-[14px] transition-all duration-300 active:scale-95 shadow-sm cursor-pointer justify-center",
        !hasCustomHeight && "h-10 md:h-12",
        variants[variant],
        className
      )}
    >
      {Icon && <Icon size={iconSize} />}
      {text}
    </button>
  );
};

export default Button;