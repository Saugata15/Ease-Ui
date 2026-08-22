import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const spinnerVariants = cva(
  "inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent",
  {
    variants: {
      variant: {
        default: "text-gray-500 dark:text-gray-400",
        primary: "text-indigo-600 dark:text-indigo-400",
        success: "text-green-600 dark:text-green-400",
        warning: "text-amber-500 dark:text-amber-400",
        danger: "text-red-600 dark:text-red-400",
        info: "text-blue-600 dark:text-blue-400",
        white: "text-white",
      },

      size: {
        sm: "h-3.5 w-3.5 border-2",
        default: "h-5 w-5 border-2",
        lg: "h-7 w-7 border-2",
        xl: "h-10 w-10 border-[3px]",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface SpinnerProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn(
          spinnerVariants({
            variant,
            size,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Spinner.displayName = "Spinner";
export { Spinner, spinnerVariants };
