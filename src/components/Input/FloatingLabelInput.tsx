import React, { useId, useState } from "react";
import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

const wrapper = cva("relative w-full");

const inputCls = cva(
  [
    "peer w-full bg-transparent",
    "border-0 border-b-2",
    "pb-2 pt-6",
    "text-[var(--text-color)]",
    "placeholder:text-transparent",
    "outline-none",
    "transition-all duration-200",
    "disabled:cursor-not-allowed",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },

      tone: {
        default:
          "border-[color-mix(in_srgb,var(--text-color)_20%,transparent)]",
        error: "border-red-400",
        success: "border-green-400",
      },

      disabled: {
        true: [
          "border-[color-mix(in_srgb,var(--text-color)_10%,transparent)]",
          "text-[color-mix(in_srgb,var(--text-color)_40%,transparent)]",
          "opacity-70",
        ].join(" "),
      },
    },

    defaultVariants: {
      size: "md",
      tone: "default",
      disabled: false,
    },
  }
);

type InputVariantProps = VariantProps<typeof inputCls>;

export interface FloatingLabelProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size" | "disabled"
    >,
    Omit<InputVariantProps, "size" | "disabled"> {
  label: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  error?: string;
  hint?: string;
}

export const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelProps
>(
  (
    {
      label,
      size = "md",
      tone = "default",
      error,
      hint,
      disabled = false,
      required,
      className,
      id,
      value,
      defaultValue,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? `floating-input-${generatedId}`;

    const [focused, setFocused] = useState(false);

    const hasValue =
      value !== undefined
        ? String(value).length > 0
        : defaultValue !== undefined
          ? String(defaultValue).length > 0
          : false;

    const shrink = focused || hasValue || props.type === "date";

    const hasError = Boolean(error);
    const currentTone = hasError ? "error" : tone;

    const descriptionId = `${inputId}-description`;

    return (
      <div className={wrapper()}>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              error || hint ? descriptionId : undefined
            }
            placeholder=" "
            {...props}
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
            className={cn(
              inputCls({
                size,
                tone: currentTone,
                disabled,
              }),
              className
            )}
          />

          <label
            htmlFor={inputId}
            className={cn(
              "pointer-events-none absolute left-0 origin-left",
              "text-(--text-color)",
              "transition-all duration-200 ease-out",
              shrink
                ? "-translate-y-1 scale-75 opacity-70"
                : "top-1/2 -translate-y-1/2 scale-100 opacity-60"
            )}
          >
            {label}

            {required && (
              <span
                className="ml-1 text-red-500"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>

          <span
            className={cn(
              "pointer-events-none absolute bottom-0 left-0 h-0.5",
              "origin-left rounded-full",
              "transition-transform duration-300 ease-out",
              focused && !disabled
                ? "w-full scale-x-100"
                : "w-full scale-x-0"
            )}
            style={{
              backgroundColor: hasError
                ? "#ef4444"
                : tone === "success"
                  ? "#22c55e"
                  : "var(--primary-color)",
            }}
          />
        </div>

        {(error || hint) && (
          <p
            id={descriptionId}
            className={cn(
              "mt-1 text-xs leading-5",
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

FloatingLabelInput.displayName = "FloatingLabelInput";