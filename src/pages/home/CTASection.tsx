import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/Button/Button";

const CTASection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-(--border-color) bg-(--card-bg) px-6 py-16 md:px-12 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_60%)]" />

        <Sparkles className="mx-auto text-indigo-500" size={28} />

        <h2 className="mt-5 text-3xl md:text-4xl font-bold">
          Ready to build with EaseUI?
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-(--muted-text-color)">
          Explore the components, read the documentation, and start building
          beautiful interfaces faster.
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

export default CTASection;