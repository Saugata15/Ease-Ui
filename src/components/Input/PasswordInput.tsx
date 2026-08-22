import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input, type InputProps } from "./Input";
import { cn } from "@/libs/utils";

type Props = Omit<InputProps, "type">;

export const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      placeholder = "Enter your password",
      className,
      disabled,
      size = "md",
      ...props
    },
    ref
  ) => {
    const [show, setShow] = useState(false);

    const iconPosition = {
      sm: "top-[2.25rem]",
      md: "top-[2.75rem]",
      lg: "top-[3.25rem]",
    }[size];

    return (
      <div className="relative w-full">
        <Input
          {...props}
          ref={ref}
          size={size}
          disabled={disabled}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className={cn(
            "pr-12",
            className
          )}
        />

        <button
          type="button"
          disabled={disabled}
          aria-label={show ? "Hide password" : "Show password"}
          aria-pressed={show}
          onClick={() => setShow((current) => !current)}
          className={cn(
            "absolute right-3 -translate-y-1/2",
            iconPosition,
            "z-10 flex items-center justify-center",
            "rounded-md p-1.5",
            "text-[color-mix(in_srgb,var(--text-color)_50%,transparent)]",
            "transition-all duration-200",
            "hover:bg-[color-mix(in_srgb,var(--primary-color)_8%,transparent)]",
            "hover:text-[var(--primary-color)]",
            "active:scale-90",
            "focus:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-[color-mix(in_srgb,var(--primary-color)_30%,transparent)]",
            "disabled:pointer-events-none",
            "disabled:opacity-40"
          )}
        >
          {show ? (
            <EyeOff size={18} strokeWidth={1.8} />
          ) : (
            <Eye size={18} strokeWidth={1.8} />
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";