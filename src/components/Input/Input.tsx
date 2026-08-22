import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const inputVariants = cva(
  [
    "w-full rounded-lg border",
    "bg-[var(--bg-color)] text-[var(--text-color)]",
    "placeholder:text-[color-mix(in_srgb,var(--text-color)_40%,transparent)]",
    "shadow-sm",
    "transition-all duration-200 ease-out",
    "outline-none",
    "hover:border-[color-mix(in_srgb,var(--primary-color)_40%,transparent)]",
    "focus:ring-4",
    "disabled:cursor-not-allowed",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-3.5 text-sm",
        lg: "h-12 px-4 text-base",
      },

      tone: {
        default: [
          "border-[color-mix(in_srgb,var(--text-color)_18%,transparent)]",
          "focus:border-[var(--primary-color)]",
          "focus:ring-[color-mix(in_srgb,var(--primary-color)_15%,transparent)]",
        ].join(" "),

        error: [
          "border-red-400",
          "focus:border-red-500",
          "focus:ring-4",
          "focus:ring-red-500/10",
        ].join(" "),

        success: [
          "border-green-400",
          "focus:border-green-500",
          "focus:ring-4",
          "focus:ring-green-500/10",
        ].join(" "),

        warning: [
          "border-amber-400",
          "focus:border-amber-500",
          "focus:ring-4",
          "focus:ring-amber-500/10",
        ].join(" "),
      },
    },

    defaultVariants: {
      size: "md",
      tone: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  hint?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      className,
      size = "md",
      tone = "default",
      id,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? `input-${generatedId}`;

    const hasError = Boolean(error);
    const descriptionId = `${inputId}-description`;

    const currentTone = hasError ? "error" : tone;

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="flex items-center gap-1 text-sm font-medium text-(--text-color)"
          >
            <span>{label}</span>

            {required && (
              <span
                className="text-red-500"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            hint || error ? descriptionId : undefined
          }
          className={cn(
            inputVariants({
              size,
              tone: currentTone,
            }),
            className
          )}
          {...props}
        />

        {(error || hint) && (
          <p
            id={descriptionId}
            className={cn(
              "text-xs leading-5",
              error
                ? "text-red-500"
                : "text-[color-mix(in_srgb,var(--text-color)_60%,transparent)]"
            )}
          >
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };