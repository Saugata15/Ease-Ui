import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { createContext, useContext, useState, type ReactNode } from "react";

const tabsListVariants = cva(
  "inline-flex items-center gap-1 rounded-lg border p-1",
  {
    variants: {
      variant: {
        default:
          "border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800",
        line: "rounded-none border-0 border-b border-gray-200 bg-transparent p-0 dark:border-gray-700",
        pill: "rounded-full border-0 bg-gray-100 dark:bg-gray-800",
      },

      size: {
        sm: "gap-0.5 p-0.5",
        md: "gap-1 p-1",
        lg: "gap-1.5 p-1.5",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-md text-gray-600 hover:bg-white hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100",

        line: "rounded-none border-b-2 border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",

        pill: "rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
      },

      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-2.5 text-base",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
  variant: "default" | "line" | "pill";
  size: "sm" | "md" | "lg";
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be used inside <Tabs>.");
  }

  return context;
};

interface TabsProps {
  defaultValue: string;
  variant?: "default" | "line" | "pill";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

const Tabs = ({
  defaultValue,
  variant = "default",
  size = "md",
  children,
  className,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
        variant,
        size,
      }}
    >
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.displayName = "Tabs";

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

const TabsList = ({ children, className }: TabsListProps) => {
  const { variant, size } = useTabsContext();

  return (
    <div className={cn(tabsListVariants({ variant, size }), className)}>
      {children}
    </div>
  );
};

TabsList.displayName = "TabsList";

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

const TabsTrigger = ({
  value,
  children,
  disabled = false,
  className,
}: TabsTriggerProps) => {
  const { activeTab, setActiveTab, variant, size } = useTabsContext();

  const isActive = activeTab === value;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => setActiveTab(value)}
      className={cn(
        tabsTriggerVariants({
          variant,
          size,
        }),

        isActive &&
          variant === "default" &&
          "bg-white text-indigo-600 shadow-sm dark:bg-gray-900 dark:text-indigo-400",

        isActive &&
          variant === "line" &&
          "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400",

        isActive &&
          variant === "pill" &&
          "bg-indigo-600 text-white dark:bg-indigo-500",

        className,
      )}
    >
      {children}
    </button>
  );
};

TabsTrigger.displayName = "TabsTrigger";

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

const TabsContent = ({ value, children, className }: TabsContentProps) => {
  const { activeTab } = useTabsContext();

  if (activeTab !== value) {
    return null;
  }

  return <div className={cn("mt-4", className)}>{children}</div>;
};

TabsContent.displayName = "TabsContent";

export {
  Tabs,
  TabsTrigger,
  TabsContent,
  TabsList,
  tabsListVariants,
  tabsTriggerVariants,
};
