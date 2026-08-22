import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Input, type InputProps } from "./Input";

export const AnimatedInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      const input = inputRef.current;
      if (!input) return;

      input.style.willChange = "transform, box-shadow";

      const ctx = gsap.context(() => {
        const handleFocus = () => {
          gsap.killTweensOf(input);

          gsap.to(input, {
            y: -2,
            boxShadow:
              "0 8px 24px color-mix(in srgb, var(--primary-color) 14%, transparent)",
            duration: 0.2,
            ease: "power2.out",
          });
        };

        const handleBlur = () => {
          gsap.killTweensOf(input);

          gsap.to(input, {
            y: 0,
            boxShadow:
              "0 2px 8px color-mix(in srgb, var(--text-color) 8%, transparent)",
            duration: 0.25,
            ease: "power2.out",
          });
        };

        input.addEventListener("focus", handleFocus);
        input.addEventListener("blur", handleBlur);

        return () => {
          input.removeEventListener("focus", handleFocus);
          input.removeEventListener("blur", handleBlur);
        };
      }, input);

      return () => {
        ctx.revert();
        gsap.killTweensOf(input);
        input.style.willChange = "";
      };
    }, []);

    return (
      <Input
        ref={(node) => {
          inputRef.current = node;

          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        {...props}
        className={className}
      />
    );
  }
);

AnimatedInput.displayName = "AnimatedInput";