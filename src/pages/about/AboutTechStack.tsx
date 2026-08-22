interface Technology {
  name: string;
  description: string;
}

interface AboutTechStackProps {
  technologies: Technology[];
}

const AboutTechStack = ({
  technologies,
}: AboutTechStackProps) => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">
          Built With
        </h2>

        <p className="max-w-2xl text-sm leading-6 text-(--muted-text-color)">
          Ease UI combines modern React tooling with reusable
          styling and accessible component patterns.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="rounded-xl border border-(--border-color) bg-(--card-bg) p-5 transition-all duration-200 hover:-translate-y-1"
          >
            <h3 className="mb-1 font-semibold">
              {technology.name}
            </h3>

            <p className="text-sm leading-6 text-(--muted-text-color)">
              {technology.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTechStack;