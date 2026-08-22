import { Check } from "lucide-react";

import { Badge } from "@/components/Badge/Badge";

interface ComponentItem {
  name: string;
  description: string;
}

interface AboutComponentsProps {
  components: ComponentItem[];
}

const AboutComponents = ({
  components,
}: AboutComponentsProps) => {
  return (
    <section className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            Component Library
          </h2>

          <p className="max-w-2xl text-sm leading-6 text-(--muted-text-color)">
            A growing collection of reusable components for
            common interface patterns.
          </p>
        </div>

        <Badge variant="success">
          Growing Library
        </Badge>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <div
            key={component.name}
            className="flex items-start gap-3 rounded-xl border border-(--border-color) bg-(--card-bg) p-4"
          >
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--primary-soft) text-(--primary-color)">
              <Check size={15} />
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                {component.name}
              </h3>

              <p className="mt-1 text-xs leading-5 text-(--muted-text-color)">
                {component.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutComponents;