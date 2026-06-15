import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

const variants = {
  primary: "bg-[#B8923F] text-[#0B1F3A] hover:bg-[#A68238] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8923F]",
  secondary: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  ghost: "text-white hover:text-[#B8923F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8923F]",
  outline: "border-2 border-[#B8923F] text-[#B8923F] hover:bg-[#B8923F]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8923F]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", isLoading, children, className = "", disabled, whileHover, whileTap, ...props }, ref) => {
    const hoverScale = whileHover ?? { scale: 1.02 };
    const tapScale = whileTap ?? { scale: 0.98 };

    return (
      <motion.button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={disabled || isLoading ? undefined : hoverScale}
        whileTap={disabled || isLoading ? undefined : tapScale}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";