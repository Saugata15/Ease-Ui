import {
  Accessibility,
  Blocks,
  Palette,
  Puzzle,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface AboutFeaturesProps {
  features: Feature[];
}

const AboutFeatures = ({
  features,
}: AboutFeaturesProps) => {
  const icons = [
    Blocks,
    Palette,
    Puzzle,
    Accessibility,
  ];

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">
          Why Ease UI?
        </h2>

        <p className="max-w-2xl text-sm leading-6 text-(--muted-text-color)">
          Ease UI focuses on making reusable React components
          simple to understand, customize, and integrate into
          real-world applications.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = icons[index];

          return (
            <div
              key={feature.title}
              className="group rounded-2xl border border-(--border-color) bg-(--card-bg) p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-(--primary-soft) text-(--primary-color)">
                <Icon size={21} />
              </div>

              <h3 className="mb-2 text-base font-semibold">
                {feature.title}
              </h3>

              <p className="text-sm leading-6 text-(--muted-text-color)">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutFeatures;