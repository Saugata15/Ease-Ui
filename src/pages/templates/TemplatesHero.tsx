import { ArrowRight, LayoutDashboard } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/components/Button/Button";

const TemplatesHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_45%)]" />

      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-(--border-color) bg-(--card-bg) text-sm text-(--muted-text)">
          <LayoutDashboard size={15} />

          <span>EaseUI Templates</span>
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
          Build faster with{" "}
          <span className="text-(--primary-color)">
            ready-made templates
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-(--muted-text)">
          Start your next project with professionally designed React
          templates built using EaseUI components.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link to="/components">
            <Button
              variant="primary"
              size="lg"
              hoverAnimation="scale"
            >
              Explore Components
              <ArrowRight size={18} />
            </Button>
          </Link>

          <a href="#templates">
            <Button variant="outline" size="lg">
              View Templates
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TemplatesHero;