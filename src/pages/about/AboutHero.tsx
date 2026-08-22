import { Github, Sparkles } from "lucide-react";

import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import { useNavigate } from "react-router";

const AboutHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-(--border-color) bg-(--card-bg) px-6 py-14 text-center sm:px-10 sm:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-(--primary-color) blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <Badge variant="primary" className="mb-5 gap-1.5">
          <Sparkles size={12} />
          React UI Component Library
        </Badge>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Build beautiful interfaces
          <span className="block text-(--primary-color)">with Ease.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-(--muted-text-color) sm:text-base">
          Ease UI is a modern and reusable React component library designed to
          help developers build consistent, customizable, and polished user
          interfaces faster.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            variant="primary"
            hoverAnimation="scale"
            onClick={() => navigate("/components")}
          >
            Explore Components
          </Button>

          <Button
            variant="outline"
            hoverAnimation="scale"
            onClick={() => {
              window.open("https://github.com/Saugata15/Ease-Ui", "_blank");
            }}
          >
            <Github size={16} />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
