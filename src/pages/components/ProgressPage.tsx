import { Progress } from "@/components/Progress/Progress";
import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";
import DocsApiReference from "@/components/Personal/DocsApiReference";
import DocsInstallation from "@/components/Personal/DocsInstallation";

import {
  basicUsageCode,
  variantsCode,
  sizesCode,
  showValueCode,
  progressStatesCode,
  propsData,
  features,
} from "../utils/progressData";

const ProgressPage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 text-(--text-color)">
      {/* Hero */}
      <DocsHeader
        title="Progress"
        description="A flexible progress indicator for displaying the completion status of tasks, uploads, processes, and other operations."
        technologies={["React", "Tailwind CSS", "CVA"]}
      />

      {/* Basic Usage */}
      <DocsDemoSection
        title="Basic Usage"
        description="Set a value between 0 and 100 to control how much of the progress bar is filled."
        code={basicUsageCode}
        contentClassName="flex min-h-48 w-full items-center justify-center p-4 sm:p-8"
      >
        <Progress value={60} className="w-full max-w-xl" />
      </DocsDemoSection>

      {/* Variants */}
      <DocsDemoSection
        title="Variants"
        description="Choose from different semantic variants to represent different states or levels of importance."
        code={variantsCode}
        contentClassName="w-full space-y-6 p-4 sm:p-8"
      >
        <div className="space-y-3">
          <p className="text-sm font-medium">Default</p>

          <Progress value={60} variant="default" />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Primary</p>

          <Progress value={60} variant="primary" />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Success</p>

          <Progress value={60} variant="success" />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Warning</p>

          <Progress value={60} variant="warning" />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Danger</p>

          <Progress value={60} variant="danger" />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Info</p>

          <Progress value={60} variant="info" />
        </div>
      </DocsDemoSection>

      {/* Sizes */}
      <DocsDemoSection
        title="Sizes"
        description="Use different sizes depending on the context and visual density of your interface."
        code={sizesCode}
        contentClassName="w-full space-y-8 p-4 sm:p-8"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Small</p>

            <span className="text-xs text-(--muted-text-color)">size="sm"</span>
          </div>

          <Progress value={60} size="sm" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Default</p>

            <span className="text-xs text-(--muted-text-color)">
              size="default"
            </span>
          </div>

          <Progress value={60} size="default" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Large</p>

            <span className="text-xs text-(--muted-text-color)">size="lg"</span>
          </div>

          <Progress value={60} size="lg" />
        </div>
      </DocsDemoSection>

      {/* Show Value */}
      <DocsDemoSection
        title="Show Value"
        description="Display the current percentage above the progress bar using the showValue prop."
        code={showValueCode}
        contentClassName="w-full max-w-xl space-y-8 p-4 sm:p-8"
      >
        <Progress value={25} showValue variant="warning" />

        <Progress value={60} showValue variant="primary" />

        <Progress value={90} showValue variant="success" />
      </DocsDemoSection>

      {/* Progress States */}
      <DocsDemoSection
        title="Progress States"
        description="Use different values and variants to represent the current state of a task or process."
        code={progressStatesCode}
        contentClassName="w-full space-y-6 p-4 sm:p-8"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Not Started</span>

            <span className="text-xs text-(--muted-text-color)">0%</span>
          </div>

          <Progress value={0} variant="danger" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Getting Started</span>

            <span className="text-xs text-(--muted-text-color)">25%</span>
          </div>

          <Progress value={25} variant="warning" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">In Progress</span>

            <span className="text-xs text-(--muted-text-color)">50%</span>
          </div>

          <Progress value={50} variant="info" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Almost Complete</span>

            <span className="text-xs text-(--muted-text-color)">75%</span>
          </div>

          <Progress value={75} variant="primary" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Completed</span>

            <span className="text-xs text-(--muted-text-color)">100%</span>
          </div>

          <Progress value={100} variant="success" />
        </div>
      </DocsDemoSection>

      {/* Installation */}
      <DocsInstallation
        packageName="ease-ui"
        importCode={`import { Progress } from "ease-ui";`}
      />

      {/* Features */}
      <DocsFeatures
        title="Progress Features"
        description="Everything you need to communicate task completion and loading states clearly."
        features={features}
      />

      {/* API Reference */}
      <DocsApiReference
        data={propsData}
        description="Available props for customizing the Progress component."
      />
    </div>
  );
};

export default ProgressPage;
