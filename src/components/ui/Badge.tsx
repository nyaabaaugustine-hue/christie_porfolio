import { HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "navy" | "success" | "outline";
  size?: "sm" | "md";
}

const variants = {
  default: "bg-[#0B1F3A] text-white",
  gold: "bg-[#B8923F] text-[#0B1F3A]",
  navy: "bg-[#0B1F3A] text-white",
  success: "bg-green-100 text-green-800",
  outline: "border-2 border-[#B8923F] text-[#B8923F] bg-transparent",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", size = "md", className = "", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`inline-flex items-center gap-1.5 font-medium rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";