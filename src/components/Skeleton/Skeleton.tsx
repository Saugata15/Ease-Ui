import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const skeletonVariants = cva(
  [
    "animate-pulse",
    "bg-[color-mix(in_srgb,var(--text-color)_10%,transparent)]",
    "rounded-md",
  ],
  {
    variants: {
      variant: {
        default: "",
        circle: "rounded-full",
        text: "rounded-md h-4",
        avatar: "rounded-full aspect-square",
      },
      animation: {
        pulse: "animate-pulse",
        none: "animate-none",
      },
    },
    defaultVariants: {
      variant: "default",
      animation: "pulse",
    },
  },
);

export interface SkeletonProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, animation, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, animation }), className)}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";
export { Skeleton, skeletonVariants };
