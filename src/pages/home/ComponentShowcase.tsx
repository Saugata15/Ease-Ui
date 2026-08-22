import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip/Tooltip";

const ComponentShowcase = () => {
  return (
    <section className="border-y border-(--border-color) bg-(--card-bg)/40">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500">
            Component Library
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Designed for real projects
          </h2>

          <p className="mt-4 text-(--muted-text-color)">
            From simple buttons to interactive overlays, EaseUI gives you
            the building blocks for modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {/* Button */}
          <div className="rounded-2xl border border-(--border-color) bg-(--card-bg) p-6">
            <div className="h-40 flex items-center justify-center rounded-xl bg-(--background-color) border border-(--border-color)">
              <Button variant="primary" size="lg">
                Button
              </Button>
            </div>

            <h3 className="mt-5 text-lg font-semibold">Button</h3>

            <p className="mt-2 text-sm text-(--muted-text-color)">
              Flexible buttons with variants, sizes, animations, and hover
              effects.
            </p>

            <Link
              to="/components/button"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-indigo-500 hover:text-indigo-400"
            >
              View Button
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Tooltip */}
          <div className="rounded-2xl border border-(--border-color) bg-(--card-bg) p-6">
            <div className="h-40 flex items-center justify-center rounded-xl bg-(--background-color) border border-(--border-color)">
              <Tooltip
                content="This is a tooltip"
                position="top"
                variant="dark"
              >
                <Button variant="outline">Hover me</Button>
              </Tooltip>
            </div>

            <h3 className="mt-5 text-lg font-semibold">Tooltip</h3>

            <p className="mt-2 text-sm text-(--muted-text-color)">
              Provide contextual information with lightweight hover and
              focus tooltips.
            </p>

            <Link
              to="/components/tooltip"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-indigo-500 hover:text-indigo-400"
            >
              View Tooltip
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Modal Preview */}
          <div className="rounded-2xl border border-(--border-color) bg-(--card-bg) p-6">
            <div className="h-40 flex items-center justify-center rounded-xl bg-(--background-color) border border-(--border-color)">
              <div className="w-full max-w-xs rounded-xl border border-(--border-color) bg-(--card-bg) p-5 shadow-lg">
                <div className="w-2/3 h-4 rounded bg-(--border-color)" />
                <div className="w-full h-3 rounded bg-(--border-color) mt-3" />
                <div className="w-5/6 h-3 rounded bg-(--border-color) mt-2" />

                <div className="flex justify-end gap-2 mt-5">
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>

                  <Button variant="primary" size="sm">
                    Confirm
                  </Button>
                </div>
              </div>
            </div>

            <h3 className="mt-5 text-lg font-semibold">Modal</h3>

            <p className="mt-2 text-sm text-(--muted-text-color)">
              Create focused dialogs for confirmations, forms, and interactive
              content.
            </p>

            <Link
              to="/components/modal"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-indigo-500 hover:text-indigo-400"
            >
              View Modal
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;