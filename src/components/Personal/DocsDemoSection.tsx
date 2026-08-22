import React from "react";
import ComponentDemo from "../../pages/ComponentsDemo";

interface DocsDemoSectionProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  contentClassName?: string;
}

const DocsDemoSection = ({
  title,
  description,
  code,
  children,
  contentClassName = "",
}: DocsDemoSectionProps) => {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>

        {description && (
          <p className="text-sm md:text-base text-(--muted-text-color)">
            {description}
          </p>
        )}
      </div>

      <div className="rounded-2xl border overflow-hidden bg-(--card-bg) border-(--border-color)">
        <ComponentDemo code={code}>
          <div className={contentClassName}>{children}</div>
        </ComponentDemo>
      </div>
    </section>
  );
};

export default DocsDemoSection;