import { Sparkles } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_45%)]" />

      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-(--border-color) bg-(--card-bg) text-sm text-(--muted-text)">
          <Sparkles size={15} />
          <span>About EaseUI</span>
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
          Build better interfaces with{" "}
          <span className="text-(--primary-color)">EaseUI</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-(--muted-text)">
          EaseUI is a reusable React component library created to make
          building modern, consistent, and beautiful interfaces simpler and
          faster.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;