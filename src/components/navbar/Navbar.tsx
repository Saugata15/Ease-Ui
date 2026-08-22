import { Slot } from "@radix-ui/react-slot";
import React, { useEffect, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { Button } from "../Button";
import { Menu } from "lucide-react";

const navbarVariants = cva(
  `relative w-full flex items-center justify-between
   px-4 sm:px-6 py-4 rounded-md border border-gray-200
   transition-all overflow-visible`,
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",
        light: "bg-white text-gray-800 shadow",
        primary: "bg-indigo-600 text-white",
        glass: "backdrop-blur-md bg-white/10 text-white border border-white/20",
      },

      size: {
        default: "h-16",
        sm: "h-12",
        lg: "h-20",
        xl: "h-24",
      },
    },

    defaultVariants: {
      variant: "light",
      size: "default",
    },
  },
);

interface NavItem {
  label: string;
  href: string;
}

interface NavbarButton {
  label: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
}

interface NavbarProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  asChild?: boolean;
  navItems: NavItem[];
  navButton: NavbarButton;
  animation?: keyof typeof entranceAnimations;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      variant,
      size,
      navItems = [],
      navButton,
      asChild = false,
      animation = "fadeIn",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "nav";
    const navbarRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (!navbarRef.current || animation === "none") return;
      entranceAnimations[animation]?.(navbarRef.current);
    }, [animation]);

    return (
      <Comp
        ref={(node) => {
          navbarRef.current = node as HTMLElement;

          if (typeof ref === "function") {
            ref(node as HTMLElement);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLElement | null>).current = node;
          }
        }}
        className={cn(navbarVariants({ variant, size }), className)}
        {...props}
      >
        {/* Logo */}
        <h1 className="shrink-0 text-lg font-semibold sm:text-xl">Logo</h1>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 md:flex">
          {navItems?.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Profile */}
        <div className="hidden shrink-0 md:block">
          <Button hoverAnimation="none" variant={navButton.variant}>
            <a href={navButton?.href || "#"}>{navButton?.label}</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex shrink-0 items-center justify-center rounded-md p-2 transition-colors hover:bg-black/10 md:hidden"
        >
          <Menu size={22} />
        </button>
      </Comp>
    );
  },
);

Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };
