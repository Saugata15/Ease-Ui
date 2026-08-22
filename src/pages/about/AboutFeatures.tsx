import { aboutFeatures } from "./aboutData";

const AboutFeatures = () => {
  return (
    <section className="border-y border-(--border-color) bg-(--card-bg)/40">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-(--primary-color)">
            Why EaseUI
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Designed around developer experience
          </h2>

          <p className="mt-4 text-(--muted-text)">
            EaseUI focuses on making reusable components simple to understand,
            customize, and integrate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {aboutFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-(--border-color) bg-(--card-bg) p-6"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-(--primary-color)/10 text-(--primary-color)">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 font-semibold text-lg">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-(--muted-text)">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;