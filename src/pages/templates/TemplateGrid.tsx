import { useMemo, useState } from "react";

import TemplateCard from "./TemplateCard";
import TemplateFilters from "./TemplateFilters";
import { templates } from "./templatesData";

const TemplateGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates = useMemo(() => {
    if (selectedCategory === "All") {
      return templates;
    }

    return templates.filter(
      (template) => template.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section
      id="templates"
      className="max-w-7xl mx-auto px-6 max-md:pt-8 pb-20 md:pb-24"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-(--primary-color)">
            Template Collection
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Start with a solid foundation
          </h2>

          <p className="mt-3 text-(--muted-text)">
            Choose a template and customize it for your project.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-10">
        <TemplateFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.title}
            template={template}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-(--muted-text)">
            No templates found in this category.
          </p>
        </div>
      )}
    </section>
  );
};

export default TemplateGrid;