import { Check } from "lucide-react";

const benefits = [
  "Reusable React components",
  "Tailwind CSS styling",
  "TypeScript-friendly APIs",
  "Variant-based customization",
  "Clear component documentation",
];

const DeveloperExperience = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500">
            Developer Experience
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Simple APIs. Consistent components.
          </h2>

          <p className="mt-5 text-(--muted-text-color) leading-relaxed">
            EaseUI is designed to keep component APIs predictable while giving
            you enough flexibility to create interfaces that feel unique.
          </p>

          <div className="mt-7 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-indigo-500/10 text-indigo-500">
                  <Check size={14} />
                </div>

                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-(--border-color) bg-(--card-bg) overflow-hidden shadow-xl">
          <div className="px-5 py-4 border-b border-(--border-color)">
            <span className="text-sm text-(--muted-text-color)">Example</span>
          </div>

          <pre className="p-6 overflow-x-auto text-sm leading-7 text-(--muted-text-color)">
            <code>{`import { Button } from "ease-ui";

<Button
  variant="primary"
  size="lg"
>
  Get Started
</Button>`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default DeveloperExperience;
