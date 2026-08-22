import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const badgeVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border font-medium transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "bg-gray-100 border-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200",

        primary: "bg-indigo-600 border-indigo-600 text-white",

        success:
          "bg-green-100 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-800 dark:text-green-400",

        warning:
          "bg-amber-100 border-amber-200 text-amber-700 dark:bg-amber-900/30 dark:border-amber-800 dark:text-amber-400",

        danger:
          "bg-red-100 border-red-200 text-red-700 dark:bg-red-900/30 dark:border-red-800 dark:text-red-400",

        info: "bg-blue-100 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-400",

        outline:
          "bg-transparent border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",

        glass:
          "bg-white/10 border-white/20 text-gray-700 backdrop-blur-md dark:text-white",
      },

      size: {
        default: "px-2.5 py-1 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-3 py-1.5 text-sm",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";
export { Badge, badgeVariants };
