import { Link } from "react-router";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip/Tooltip";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_45%)]" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-(--border-color) bg-(--card-bg) text-sm text-(--muted-text-color)">
            <Sparkles size={15} />
            <span>Modern React Component Library</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Build beautiful interfaces with{" "}
            <span className="text-indigo-500">EaseUI</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-(--muted-text-color) max-w-2xl mx-auto">
            A collection of reusable, customizable, and developer-friendly React
            components designed to help you build modern interfaces faster.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/components">
              <Button variant="primary" size="lg" hoverAnimation="scale">
                Explore Components
                <ArrowRight size={18} />
              </Button>
            </Link>

              <Button variant="outline" size="lg" hoverAnimation="scale">
                View Documentation
              </Button>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-(--border-color) bg-(--card-bg) shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-(--border-color)">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />

              <span className="ml-3 text-sm text-(--muted-text-color)">
                EaseUI Preview
              </span>
            </div>

            <div className="min-h-72 flex items-center justify-center p-8">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>

                <Tooltip
                  content="Built for React developers"
                  position="top"
                  variant="dark"
                >
                  <Button variant="secondary" size="lg">
                    <Code2 size={18} />
                    React
                  </Button>
                </Tooltip>

                <Button variant="outline" size="lg">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
