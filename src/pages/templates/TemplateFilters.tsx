import { templateCategories } from "./templatesData";

interface TemplateFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const TemplateFilters = ({
  selectedCategory,
  onCategoryChange,
}: TemplateFiltersProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {templateCategories.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
              isActive
                ? "border-(--primary-color) bg-(--primary-color) text-white"
                : "border-(--border-color) bg-(--card-bg) text-(--muted-text) hover:text-(--text-color) hover:border-(--primary-color)"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default TemplateFilters;