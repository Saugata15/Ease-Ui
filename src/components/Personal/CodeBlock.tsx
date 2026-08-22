import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "tsx" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-xl border border-(--border-color) bg-(--bg-box-light) shadow-sm">
      {/* Editor Header */}
      <div className="flex h-11 items-center justify-between border-b border-(--border-color) bg-(--bg-box-light) px-3 sm:px-4">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {/* Window Controls */}
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          {/* Language */}
          <span className="font-mono text-xs font-medium uppercase text-(--text-color) opacity-60">
            {language}
          </span>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-(--text-color) opacity-70 transition-all hover:bg-black/5 hover:opacity-100 dark:hover:bg-white/10"
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="flex max-h-125 overflow-auto bg-(--bg-box-light)">
        {/* Line Numbers */}
        <div className="shrink-0 select-none border-r border-(--border-color) px-3 py-4 text-right font-mono text-xs leading-6 text-(--text-color) opacity-30 sm:px-4">
          {lines.map((_, index) => (
            <div key={index}>{index + 1}</div>
          ))}
        </div>

        {/* Code */}
        <pre className="min-w-max flex-1 p-4 font-mono text-xs leading-6 sm:text-sm">
          <code className="text-(--text-color)">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
