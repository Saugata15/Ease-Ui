import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const progressVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800",
  {
    variants: {
      variant: {
        default: "bg-gray-200 dark:bg-gray-800",
        primary: "bg-indigo-100 dark:bg-indigo-950",
        success: "bg-green-100 dark:bg-green-950",
        warning: "bg-amber-100 dark:bg-amber-950",
        danger: "bg-red-100 dark:bg-red-950",
        info: "bg-blue-100 dark:bg-blue-950",
      },

      size: {
        sm: "h-1.5",
        default: "h-2.5",
        lg: "h-4",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const progressIndicatorVariants = cva(
  "h-full rounded-full transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-gray-600 dark:bg-gray-300",
        primary: "bg-indigo-600",
        success: "bg-green-600",
        warning: "bg-amber-500",
        danger: "bg-red-600",
        info: "bg-blue-600",
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ProgressProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value?: number;
  showValue?: boolean;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    { className, variant, size, value = 0, showValue = false, ...props },
    ref,
  ) => {
    const normalizedValue = Math.min(100, Math.max(0, value));

    return (
      <div className="w-full">
        {showValue && (
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Progress
            </span>

            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {normalizedValue}%
            </span>
          </div>
        )}

        <div
          ref={ref}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={normalizedValue}
          className={cn(
            progressVariants({
              variant,
              size,
            }),
            className,
          )}
          {...props}
        >
          <div
            className={cn(
              progressIndicatorVariants({
                variant,
              }),
            )}
            style={{
              width: `${normalizedValue}%`,
            }}
          />
        </div>
      </div>
    );
  },
);

Progress.displayName = "Progress";
export { Progress, progressVariants, progressIndicatorVariants };
