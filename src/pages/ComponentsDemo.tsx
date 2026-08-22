import { useState } from "react";
import { Code, Eye, EyeOff } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({
  children,
  code,
  showCode = false,
}: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(showCode);

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-xl border border-(--border-color) bg-(--card-bg) shadow-sm">
      {/* Header */}
      <div className="flex min-h-12 items-center justify-between gap-4 border-b border-(--border-color) bg-(--bg-box-light) px-3 sm:px-4">
        {/* Title */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-(--primary-soft)">
            <Eye size={14} className="text-(--primary-color)" />
          </div>

          <div>
            <p className="text-sm font-medium text-(--heading-color)">
              Preview
            </p>

            <p className="hidden text-xs text-(--muted-text) sm:block">
              Interactive component preview
            </p>
          </div>
        </div>

        {/* Code Toggle */}
        <button
          type="button"
          onClick={() => setIsCodeVisible((prev) => !prev)}
          aria-expanded={isCodeVisible}
          className="flex shrink-0 items-center gap-2 rounded-md border border-(--border-color) bg-(--card-bg) px-2.5 py-1.5 text-xs font-medium text-(--text-color) transition-all hover:bg-(--hover-bg) active:scale-[0.98] sm:px-3 sm:text-sm cursor-pointer"
        >
          {isCodeVisible ? <EyeOff size={14} /> : <Code size={14} />}

          <span className="hidden sm:inline">
            {isCodeVisible ? "Hide Code" : "View Code"}
          </span>

          <span className="sm:hidden">{isCodeVisible ? "Hide" : "Code"}</span>
        </button>
      </div>

      {/* Preview */}
      <div className="relative w-full min-w-0 overflow-hidden bg-(--bg-color) p-5 sm:p-8 lg:p-12">
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                var(--border-subtle) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                var(--border-subtle) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative flex min-h-48 w-full min-w-0 items-center justify-center">
          {children}
        </div>
      </div>

      {/* Code */}
      {isCodeVisible && (
        <div className="border-t border-(--border-color) bg-(--bg-box-light)">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
