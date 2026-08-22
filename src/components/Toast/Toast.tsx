import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import React, { useEffect } from "react";

const toastVariants = cva(
  "pointer-events-auto relative flex w-full items-start gap-3 rounded-xl border p-4 shadow-lg backdrop-blur-md transition-all",
  {
    variants: {
      variant: {
        default:
          "border-gray-200 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",

        primary:
          "border-indigo-200 bg-indigo-50 text-indigo-900 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-100",

        success:
          "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100",

        warning:
          "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100",

        danger:
          "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100",

        info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100",
      },

      size: {
        sm: "max-w-xs p-3",
        default: "max-w-sm p-4",
        lg: "max-w-md p-5",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ToastProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  title?: string;
  description?: string;
  duration?: number;
  open?: boolean;
  onClose?: () => void;
  showClose?: boolean;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      variant,
      size,
      title,
      description,
      duration = 4000,
      open = true,
      onClose,
      showClose = true,
      children,
      ...props
    },
    ref,
  ) => {
    useEffect(() => {
      if (!open || !duration || !onClose) return;

      const timer = window.setTimeout(() => {
        onClose();
      }, duration);

      return () => window.clearTimeout(timer);
    }, [open, duration, onClose]);

    if (!open) {
      return null;
    }
    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        className={cn(
          toastVariants({
            variant,
            size,
          }),
          className,
        )}
        {...props}
      >
        <div className="min-w-0 flex-1">
          {title && <p className="text-sm font-semibold">{title}</p>}

          {description && (
            <p className="mt-1 text-sm leading-5 opacity-80">{description}</p>
          )}

          {children}
        </div>

        {showClose && onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close notification"
            className="shrink-0 rounded-md p-1 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
          >
            <X size={16} />
          </button>
        )}
      </div>
    );
  },
);

Toast.displayName = "Toast";
export { Toast, toastVariants };
