import React, { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/libs/utils";
import { Input, type InputProps } from "./Input";

type NumberProps = Omit<
  InputProps,
  "type" | "onChange" | "value" | "label"
> & {
  label?: string;
  value?: number;
  onChange?: (value: number) => void;
  step?: number;
  min?: number;
  max?: number;
};

export const NumberInput = React.forwardRef<
  HTMLInputElement,
  NumberProps
>(
  (
    {
      label = "Age",
      value,
      defaultValue,
      onChange,
      step = 1,
      min,
      max,
      disabled = false,
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string>(
      value !== undefined
        ? String(value)
        : defaultValue !== undefined
          ? String(defaultValue)
          : ""
    );

    const isControlled = value !== undefined;

    const currentValue = isControlled
      ? String(value)
      : internalValue;

    useEffect(() => {
      if (isControlled) {
        setInternalValue(String(value));
      }
    }, [value, isControlled]);

    const updateValue = (nextValue: number) => {
      if (min !== undefined && nextValue < min) return;
      if (max !== undefined && nextValue > max) return;

      if (!isControlled) {
        setInternalValue(String(nextValue));
      }

      onChange?.(nextValue);
    };

    const handleChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const rawValue = event.target.value;

      if (rawValue === "") {
        if (!isControlled) {
          setInternalValue("");
        }
        return;
      }

      const numericValue = Number(rawValue);

      if (Number.isNaN(numericValue)) return;

      if (min !== undefined && numericValue < min) return;
      if (max !== undefined && numericValue > max) return;

      if (!isControlled) {
        setInternalValue(rawValue);
      }

      onChange?.(numericValue);
    };

    const increment = () => {
      const current = Number(currentValue) || 0;
      updateValue(current + step);
    };

    const decrement = () => {
      const current = Number(currentValue) || 0;
      updateValue(current - step);
    };

    const numericValue = Number(currentValue);

    const incrementDisabled =
      disabled ||
      (max !== undefined &&
        !Number.isNaN(numericValue) &&
        numericValue + step > max);

    const decrementDisabled =
      disabled ||
      (min !== undefined &&
        !Number.isNaN(numericValue) &&
        numericValue - step < min);

    return (
      <div className="w-full">
        <div
          className={cn(
            "relative flex items-stretch",
            "rounded-xl border",
            "border-[color-mix(in_srgb,var(--text-color)_20%,transparent)]",
            "bg-[var(--bg-color)]",
            "transition-all duration-200",

            !disabled &&
              "focus-within:border-[var(--primary-color)]",

            !disabled &&
              "focus-within:ring-4 focus-within:ring-[color-mix(in_srgb,var(--primary-color)_12%,transparent)]",

            disabled && "cursor-not-allowed opacity-60"
          )}
        >
          {/* Floating border label */}
          {label && (
            <span
              className={cn(
                "absolute -top-2.5 left-3 px-2",
                "text-xs font-medium",
                "bg-[var(--bg-color)]",
                "text-[color-mix(in_srgb,var(--text-color)_65%,transparent)]",
                "transition-colors duration-200",

                !disabled &&
                  "peer-focus:text-[var(--primary-color)]"
              )}
            >
              {label}
            </span>
          )}

          {/* Input */}
          <div className="min-w-0 flex-1">
            <Input
              {...props}
              ref={ref}
              type="number"
              value={currentValue}
              disabled={disabled}
              size={size}
              onChange={handleChange}
              min={min}
              max={max}
              step={step}
              className={cn(
                "rounded-none border-0 bg-transparent shadow-none",
                "focus:border-0 focus:ring-0",
                "[appearance:textfield]",
                "[&::-webkit-inner-spin-button]:appearance-none",
                "[&::-webkit-outer-spin-button]:appearance-none",
                className
              )}
            />
          </div>

          {/* Buttons */}
          <div
            className={cn(
              "flex shrink-0 items-stretch",
              "border-l",
              "border-[color-mix(in_srgb,var(--text-color)_12%,transparent)]"
            )}
          >
            <button
              type="button"
              onClick={decrement}
              disabled={decrementDisabled}
              aria-label={`Decrease ${label}`}
              className={cn(
                "flex w-10 items-center justify-center",
                "text-[var(--text-color)]",
                "transition-all duration-150",
                "hover:bg-[color-mix(in_srgb,var(--primary-color)_8%,transparent)]",
                "hover:text-[var(--primary-color)]",
                "active:scale-95",
                "disabled:pointer-events-none",
                "disabled:opacity-30"
              )}
            >
              <Minus size={16} />
            </button>

            <div
              className={cn(
                "my-2 w-px",
                "bg-[color-mix(in_srgb,var(--text-color)_10%,transparent)]"
              )}
            />

            <button
              type="button"
              onClick={increment}
              disabled={incrementDisabled}
              aria-label={`Increase ${label}`}
              className={cn(
                "flex w-10 items-center justify-center",
                "text-[var(--text-color)]",
                "transition-all duration-150",
                "hover:bg-[color-mix(in_srgb,var(--primary-color)_8%,transparent)]",
                "hover:text-[var(--primary-color)]",
                "active:scale-95",
                "disabled:pointer-events-none",
                "disabled:opacity-30"
              )}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

NumberInput.displayName = "NumberInput";