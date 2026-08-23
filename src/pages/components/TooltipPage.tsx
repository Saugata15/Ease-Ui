import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";
import PropsTable from "@/components/Personal/PropsTable";
import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsInstallation from "@/components/Personal/DocsInstallation";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";
import { Info, Heart, Settings, Trash2, User } from "lucide-react";
import {
  propsData,
  features,
  variantsCode,
  basicUsageCode,
} from "../utils/tooltipData";

const TooltipPage = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 text-(--text-color)">
      {/* Hero */}
      <DocsHeader
        title="Tooltip"
        description="A lightweight tooltip component for displaying contextual information when users hover over or focus an element."
        technologies={["React", "Tailwind CSS", "CVA"]}
      />

      {/* Usage */}
      <DocsDemoSection
        title="Usage"
        description="Wrap any element with Tooltip and provide the content you want to display. Customize its position and visual style using props."
        code={basicUsageCode}
        contentClassName="flex min-h-64 items-center justify-center gap-6 flex-wrap p-8"
      >
        <Tooltip content="This is a tooltip" position="top">
          <Button
            variant="outline"
            hoverAnimation="none"
            size="sm"
            className="border-(--border-color)"
          >
            <Info size={18} />
          </Button>
        </Tooltip>

        <Tooltip content="Edit your profile" position="right" variant="primary">
          <Button
            variant="outline"
            hoverAnimation="none"
            size="sm"
            className="border-(--border-color)"
          >
            <User size={18} />
          </Button>
        </Tooltip>

        <Tooltip content="Delete this item" position="bottom" variant="dark">
          <Button
            variant="outline"
            hoverAnimation="none"
            size="sm"
            className="border-(--border-color)"
          >
            <Trash2 size={18} />
          </Button>
        </Tooltip>

        <Tooltip content="More settings" position="left" variant="light">
          <Button
            variant="outline"
            hoverAnimation="none"
            size="sm"
            className="border-(--border-color)"
          >
            <Settings size={18} />
          </Button>
        </Tooltip>
      </DocsDemoSection>

      {/* Variants */}
      <DocsDemoSection
        title="Variants"
        description="Use different visual variants to match the context of your interface."
        code={variantsCode}
        contentClassName="flex min-h-48 items-center justify-center gap-6 flex-wrap p-8"
      >
        <Tooltip content="Light tooltip" variant="light">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border-color)">
            <Info size={16} />
            Light
          </button>
        </Tooltip>

        <Tooltip content="Dark tooltip" variant="dark">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border-color)">
            <Heart size={16} />
            Dark
          </button>
        </Tooltip>

        <Tooltip content="Primary tooltip" variant="primary">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border-color)">
            <Settings size={16} />
            Primary
          </button>
        </Tooltip>
      </DocsDemoSection>

      {/* Installation */}
      <DocsInstallation
        packageName="easeui-react"
        importCode={`import { Tooltip } from "easeui-react";`}
      />

      {/* Features */}
      <DocsFeatures features={features} />

      {/* API Reference */}
      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">API Reference</h2>

          <p className="text-(--muted-text-color)">
            Available props for customizing the Tooltip component.
          </p>
        </div>

        <div className="rounded-2xl border overflow-hidden bg-(--card-bg) border-(--border-color)">
          <PropsTable data={propsData} />
        </div>
      </section>
    </div>
  );
};

export default TooltipPage;
