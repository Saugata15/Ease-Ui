import { Code2 } from "lucide-react";
import { technologies } from "./aboutData";

const AboutTechnology = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-(--primary-color)">
            Built With
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Modern tools for modern interfaces
          </h2>

          <p className="mt-5 leading-relaxed text-(--muted-text)">
            EaseUI is built using technologies that make component development
            fast, maintainable, and flexible.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="px-4 py-2 rounded-lg border border-(--border-color) bg-(--card-bg) text-sm font-medium"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-(--border-color) bg-(--card-bg) overflow-hidden shadow-xl">
          <div className="px-5 py-4 border-b border-(--border-color)">
            <div className="flex items-center gap-2">
              <Code2
                size={17}
                className="text-(--primary-color)"
              />

              <span className="text-sm font-medium">
                Component Example
              </span>
            </div>
          </div>

          <pre className="p-6 overflow-x-auto text-sm leading-7 text-(--muted-text)">
            <code>{`<Button
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

export default AboutTechnology;