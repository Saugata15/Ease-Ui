import { ArrowRight } from "lucide-react";

import type { Template } from "./templatesData";

interface TemplateCardProps {
  template: Template;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  const Icon = template.icon;

  return (
    <article className="group overflow-hidden rounded-2xl border border-(--border-color) bg-(--card-bg) transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Preview */}
      <div className="relative aspect-16/10 overflow-hidden border-b border-(--border-color) bg-(--bg-color)">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.14),transparent_55%)]" />

        <div className="absolute inset-6 rounded-xl border border-(--border-color) bg-(--card-bg) shadow-lg p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-(--primary-color)/10 text-(--primary-color) flex items-center justify-center">
              <Icon size={16} />
            </div>

            <div className="space-y-1">
              <div className="w-20 h-2 rounded bg-(--border-color)" />
              <div className="w-12 h-1.5 rounded bg-(--border-color)/60" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-5">
            <div className="h-16 rounded-lg bg-(--border-color)/40" />
            <div className="h-16 rounded-lg bg-(--border-color)/40" />
            <div className="h-16 rounded-lg bg-(--border-color)/40" />
          </div>

          <div className="mt-3 h-20 rounded-lg bg-(--border-color)/30" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-(--primary-color)">
              {template.category}
            </p>

            <h3 className="mt-2 text-xl font-semibold">{template.title}</h3>
          </div>

          <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center bg-(--primary-color)/10 text-(--primary-color)">
            <Icon size={20} />
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-(--muted-text)">
          {template.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {template.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md border border-(--border-color) text-xs text-(--muted-text)"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-(--primary-color) hover:gap-3 transition-all">
          View Template
          <ArrowRight size={16} />
        </span>
      </div>
    </article>
  );
};

export default TemplateCard;
