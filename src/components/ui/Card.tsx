import { motion, HTMLMotionProps } from "framer-motion";
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
  ({ variant = "default", hover = false, padding = "md", className = "", children, whileHover, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`rounded-2xl overflow-hidden ${variants[variant]} ${paddings[padding]} ${className}`}
        whileHover={hover ? (whileHover ?? { y: -4, transition: { duration: 0.3 } }) : undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";