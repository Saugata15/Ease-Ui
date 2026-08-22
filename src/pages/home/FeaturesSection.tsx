import {
  Code2,
  Layers3,
  Palette,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast to Build",
    description:
      "Ready-to-use components help you move from idea to interface faster.",
  },
  {
    icon: Palette,
    title: "Customizable",
    description:
      "Customize variants, sizes, styles, and behavior to match your design.",
  },
  {
    icon: Layers3,
    title: "Reusable",
    description:
      "Build consistent interfaces with a collection of reusable React components.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description:
      "Simple APIs and clear documentation make components easy to understand and use.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500">
          Why EaseUI
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          Everything you need to build better UIs
        </h2>

        <p className="mt-4 text-(--muted-text-color)">
          Focus on your application instead of rebuilding common interface
          components from scratch.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-(--border-color) bg-(--card-bg) p-6"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <Icon size={22} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-(--muted-text-color)">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;