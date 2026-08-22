import { Code2, Github } from "lucide-react";

import { Button } from "@/components/Button/Button";
import { useNavigate } from "react-router";

const AboutCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="rounded-3xl border border-(--border-color) bg-(--card-bg) p-6 sm:p-8 lg:p-10">
      <div className="mx-auto max-w-2xl text-center">
        <Code2 size={28} className="mx-auto mb-4 text-(--primary-color)" />

        <h2 className="text-2xl font-semibold">Ready to build with Ease?</h2>

        <p className="mt-3 text-sm leading-6 text-(--muted-text-color)">
          Install Ease UI and start building consistent React interfaces with
          reusable components.
        </p>

        <div className="mx-auto mt-6 max-w-md rounded-xl border border-(--border-color) bg-(--bg-box) px-4 py-3 text-left font-mono text-sm">
          <span className="text-(--muted-text-color)">$</span> npm install
          ease-ui
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button
            variant="primary"
            hoverAnimation="scale"
            onClick={() => navigate("/components")}
          >
            Get Started
          </Button>

          <Button
            variant="outline"
            hoverAnimation="scale"
            onClick={() => {
              window.open("https://github.com/Saugata15/Ease-Ui", "_blank");
            }}
          >
            <Github size={16} />
            View Source
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
