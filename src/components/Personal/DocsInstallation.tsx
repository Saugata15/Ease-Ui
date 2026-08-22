import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";

interface DocsInstallationProps {
  packageName?: string;
  importCode?: string;
}

const DocsInstallation = ({
  packageName = "ease-ui",
  importCode,
}: DocsInstallationProps) => {
  const [copied, setCopied] = useState<"install" | "import" | null>(null);

  const installCommand = `npm install ${packageName}`;

  const handleCopy = async (
    text: string,
    type: "install" | "import"
  ) => {
    await navigator.clipboard.writeText(text);

    setCopied(type);

    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  return (
    <section className="space-y-5">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-(--text-color)">
          Installation
        </h2>

        <p className="text-(--muted-text-color)">
          Install the package using your preferred package manager.
        </p>
      </div>

      {/* Install command */}
      <div className="overflow-hidden rounded-xl border border-(--border-color) bg-(--card-bg)">
        <div className="flex items-center justify-between border-b border-(--border-color) px-4 py-3">
          <div className="flex items-center gap-2">
            <Terminal size={16} />

            <span className="text-sm font-medium">
              Install
            </span>
          </div>

          <button
            type="button"
            onClick={() =>
              handleCopy(installCommand, "install")
            }
            className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs transition-colors hover:bg-black/5 dark:hover:bg-white/10"
          >
            {copied === "install" ? (
              <>
                <Check size={14} />
                Copied
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy
              </>
            )}
          </button>
        </div>

        <pre className="overflow-x-auto p-4 text-sm">
          <code>
            <span className="text-(--muted-text-color)">
              $
            </span>{" "}
            {installCommand}
          </code>
        </pre>
      </div>

      {/* Import */}
      {importCode && (
        <div className="overflow-hidden rounded-xl border border-(--border-color) bg-(--card-bg)">
          <div className="flex items-center justify-between border-b border-(--border-color) px-4 py-3">
            <span className="text-sm font-medium">
              Import
            </span>

            <button
              type="button"
              onClick={() =>
                handleCopy(importCode, "import")
              }
              className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              {copied === "import" ? (
                <>
                  <Check size={14} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={14} />
                  Copy
                </>
              )}
            </button>
          </div>

          <pre className="overflow-x-auto p-4 text-sm">
            <code>{importCode}</code>
          </pre>
        </div>
      )}
    </section>
  );
};

export default DocsInstallation;