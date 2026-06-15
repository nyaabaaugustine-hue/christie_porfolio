import { forwardRef, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variants = {
  default: "bg-white",
  elevated: "bg-white shadow-lg",
  outlined: "bg-white border border-gray-200",
};

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", hover = false, padding = "md", className = "", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-2xl overflow-hidden ${variants[variant]} ${paddings[padding]} ${className} ${hover ? "hover:-translate-y-1 hover:shadow-xl transition-all duration-300" : ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";