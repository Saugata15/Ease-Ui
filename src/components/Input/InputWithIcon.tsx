import React, { useEffect, useRef } from "react";
import { Input, type InputProps } from "./Input";
import { cn } from "@/libs/utils";
import gsap from "gsap";

type Props = InputProps & {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconColor?: string;
  animated?: boolean;
};

export const InputWithIcon = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      icon,
      iconPosition = "left",
      iconColor = "color-mix(in srgb, var(--text-color) 45%, transparent)",
      animated = true,
      className,
      size = "md",
      disabled,
      ...props
    },
    ref
  ) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const iconRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
      const iconElement = iconRef.current;
      const wrapper = wrapperRef.current;

      if (!animated || !iconElement || !wrapper) return;

      const input = wrapper.querySelector("input");
      if (!input) return;

      const handleFocus = () => {
        gsap.killTweensOf(iconElement);

        gsap.to(iconElement, {
          scale: 1.12,
          color: "var(--primary-color)",
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const handleBlur = () => {
        gsap.killTweensOf(iconElement);

        gsap.to(iconElement, {
          scale: 1,
          color: iconColor,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);

      return () => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);

        gsap.killTweensOf(iconElement);
      };
    }, [animated, iconColor]);

    if (!icon) {
      return (
        <Input
          ref={ref}
          {...props}
          size={size}
          disabled={disabled}
          className={className}
        />
      );
    }

    const paddingClass =
      iconPosition === "left" ? "pl-11" : "pr-11";

    const iconPositionClass = {
      sm: "top-[2.25rem]",
      md: "top-[2.75rem]",
      lg: "top-[3.25rem]",
    }[size ?? "md"];

    return (
      <div ref={wrapperRef} className="relative w-full">
        {iconPosition === "left" && (
          <span
            ref={iconRef}
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute left-3.5 z-10",
              "-translate-y-1/2",
              "flex items-center justify-center",
              "text-(--text-color)",
              "transition-colors duration-200",
              iconPositionClass,
              animated && "will-change-transform"
            )}
            style={{
              color: iconColor,
              opacity: disabled ? 0.4 : 0.6,
            }}
          >
            {icon}
          </span>
        )}

        <Input
          ref={ref}
          {...props}
          size={size}
          disabled={disabled}
          className={cn(
            "rounded-xl",
            "shadow-sm",
            "transition-all duration-200",
            paddingClass,
            className
          )}
        />

        {iconPosition === "right" && (
          <span
            ref={iconRef}
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute right-3.5 z-10",
              "-translate-y-1/2",
              "flex items-center justify-center",
              "text-(--text-color)",
              "transition-colors duration-200",
              iconPositionClass,
              animated && "will-change-transform"
            )}
            style={{
              color: iconColor,
              opacity: disabled ? 0.4 : 0.6,
            }}
          >
            {icon}
          </span>
        )}
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";