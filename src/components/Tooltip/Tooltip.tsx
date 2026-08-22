import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { useEffect, useState } from "react";

interface TooltipProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {
  content: string;
  delay?: number;
  children: React.ReactNode;
}

const tooltipVariants = cva(
  "absolute z-50 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium shadow-lg transition-all duration-200",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-900 border border-gray-200",
        dark: "bg-slate-900 text-white border border-slate-700",
        primary: "bg-indigo-600 text-white",
      },

      position: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
    },

    defaultVariants: {
      variant: "dark",
      position: "top",
    },
  },
);

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    { className, variant, position, content, delay = 2000, children, ...props },
    ref,
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      let timer: ReturnType<typeof setTimeout>;

      if (isVisible) {
        timer = setTimeout(() => {
          setIsVisible(false);
        }, delay);
      }

      return () => clearTimeout(timer);
    }, [isVisible, delay]);

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleFocus = () => {
      setIsVisible(true);
    };

    const handleBlur = () => {
      setIsVisible(false);
    };

    return (
      <div
        className="relative inline-flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {children}

        {isVisible && (
          <div
            ref={ref}
            className={cn(tooltipVariants({ variant, position }), className)}
            {...props}
          >
            {content}
          </div>
        )}
      </div>
    );
  },
);

Tooltip.displayName = "Tooltip";
export { Tooltip, tooltipVariants };
