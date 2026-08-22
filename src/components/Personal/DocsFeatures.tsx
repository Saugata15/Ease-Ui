interface Feature {
  title: string;
  description: string;
}

interface DocsFeaturesProps {
  title?: string;
  description?: string;
  features: Feature[];
}

const DocsFeatures = ({
  title = "Features",
  description = "Built to be flexible and easy to customize.",
  features,
}: DocsFeaturesProps) => {
  return (
    <section className="space-y-5">
      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="text-(--muted-text-color)">
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-1 bg-(--card-bg) border-(--border-color)"
          >
            <h3 className="mb-2 font-semibold">{feature.title}</h3>

            <p className="text-sm leading-6 text-(--muted-text-color)">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocsFeatures;
