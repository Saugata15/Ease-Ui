import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";

const textareaCls = cva(
  [
    "w-full rounded-xl border",
    "bg-[var(--bg-color)]",
    "text-[var(--text-color)]",
    "placeholder:text-[color-mix(in_srgb,var(--text-color)_40%,transparent)]",
    "border-[color-mix(in_srgb,var(--text-color)_18%,transparent)]",
    "shadow-sm",
    "outline-none",
    "resize-y",
    "transition-all duration-200 ease-out",
    "hover:border-[color-mix(in_srgb,var(--primary-color)_45%,transparent)]",
    "focus:border-[var(--primary-color)]",
    "focus:ring-4",
    "focus:ring-[color-mix(in_srgb,var(--primary-color)_12%,transparent)]",
    "disabled:cursor-not-allowed",
    "disabled:opacity-60",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "min-h-20 px-3 py-2 text-sm",
        md: "min-h-28 px-4 py-3 text-base",
        lg: "min-h-36 px-5 py-4 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  size?: "sm" | "md" | "lg";
}

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ label, size, className, ...props }, ref) => {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className="text-sm font-semibold text-[var(--text-color)]">
          {label}
        </label>
      )}

      <textarea
        ref={ref}
        className={cn(textareaCls({ size }), className)}
        {...props}
      />
    </div>
  );
});

Textarea.displayName = "Textarea";