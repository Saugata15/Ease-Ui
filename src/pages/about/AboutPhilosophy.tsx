import { Badge } from "@/components/Badge/Badge";

interface Principle {
  number: string;
  title: string;
  description: string;
}

interface AboutPhilosophyProps {
  principles: Principle[];
}

const AboutPhilosophy = ({
  principles,
}: AboutPhilosophyProps) => {
  return (
    <section className="grid gap-8 rounded-3xl border border-(--border-color) bg-(--card-bg) p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
      <div>
        <Badge
          variant="outline"
          className="mb-4"
        >
          Design Philosophy
        </Badge>

        <h2 className="text-2xl font-semibold">
          Simple by design.
        </h2>

        <p className="mt-3 text-sm leading-6 text-(--muted-text-color)">
          Components should provide sensible defaults while
          giving developers enough flexibility to make them
          fit their own applications.
        </p>
      </div>

      <div className="space-y-6">
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="flex gap-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--border-color) bg-(--card-bg) text-xs font-semibold text-(--primary-color)">
              {principle.number}
            </div>

            <div>
              <h3 className="mb-1 font-semibold">
                {principle.title}
              </h3>

              <p className="text-sm leading-6 text-(--muted-text-color)">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPhilosophy;