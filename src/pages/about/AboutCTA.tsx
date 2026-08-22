import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/Button/Button";

const AboutCTA = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-(--border-color) bg-(--card-bg) px-6 py-16 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_60%)]" />

        <Sparkles
          size={28}
          className="mx-auto text-(--primary-color)"
        />

        <h2 className="mt-5 text-3xl md:text-4xl font-bold">
          Start building with EaseUI
        </h2>

        <p className="max-w-xl mx-auto mt-4 text-(--muted-text)">
          Explore the component library and find the building blocks you need
          for your next project.
        </p>

        <div className="flex justify-center mt-8">
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
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;