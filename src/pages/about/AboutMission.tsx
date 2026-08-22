import { Layers3 } from "lucide-react";

const AboutMission = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-(--primary-color)">
            Our Mission
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Less time building components. More time building products.
          </h2>

          <p className="mt-5 leading-relaxed text-(--muted-text)">
            Building a modern application often means repeatedly creating
            buttons, modals, tooltips, navigation elements, cards, and other
            interface patterns.
          </p>

          <p className="mt-4 leading-relaxed text-(--muted-text)">
            EaseUI brings these common building blocks together into a
            consistent component library so developers can focus on creating
            meaningful experiences instead of rebuilding the same UI patterns.
          </p>
        </div>

        <div className="rounded-3xl border border-(--border-color) bg-(--card-bg) p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-(--primary-color)/10 text-(--primary-color)">
              <Layers3 size={24} />
            </div>

            <div>
              <h3 className="font-semibold">A growing component system</h3>

              <p className="text-sm text-(--muted-text)">
                Built for modern React applications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              ["Reusable", "Components"],
              ["Flexible", "APIs"],
              ["Modern", "Styling"],
              ["Open", "Documentation"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-(--border-color) p-5"
              >
                <p className="text-xl sm:text-2xl font-bold">{title}</p>

                <p className="mt-1 text-sm text-(--muted-text)">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;