import { Spinner } from "@/components/Spinner/Spinner";
import { Button } from "@/components/Button/Button";

import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";
import DocsApiReference from "@/components/Personal/DocsApiReference";
import DocsInstallation from "@/components/Personal/DocsInstallation";

import {
  basicUsageCode,
  variantsCode,
  sizesCode,
  buttonLoadingCode,
  fullPageCode,
  propsData,
  features,
} from "../utils/spinnerData";

const SpinnerPage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 text-(--text-color)">
      {/* Hero */}
      <DocsHeader
        title="Spinner"
        description="A lightweight loading indicator for communicating ongoing processes, asynchronous actions, and content loading states."
        technologies={["React", "Tailwind CSS", "CVA"]}
      />

      {/* Basic Usage */}
      <DocsDemoSection
        title="Basic Usage"
        description="Use the Spinner component to indicate that an operation is currently in progress."
        code={basicUsageCode}
        contentClassName="flex min-h-48 w-full items-center justify-center p-4 sm:p-8"
      >
        <Spinner />
      </DocsDemoSection>

      {/* Variants */}
      <DocsDemoSection
        title="Variants"
        description="Choose a variant to match the visual context of your loading state."
        code={variantsCode}
        contentClassName="grid min-h-48 w-full grid-cols-2 items-center justify-items-center gap-8 p-4 sm:grid-cols-4 sm:p-8"
      >
        <div className="flex flex-col items-center gap-3">
          <Spinner variant="default" />

          <span className="text-xs text-(--muted-text-color)">
            Default
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Spinner variant="primary" />

          <span className="text-xs text-(--muted-text-color)">
            Primary
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Spinner variant="success" />

          <span className="text-xs text-(--muted-text-color)">
            Success
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Spinner variant="warning" />

          <span className="text-xs text-(--muted-text-color)">
            Warning
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Spinner variant="danger" />

          <span className="text-xs text-(--muted-text-color)">
            Danger
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Spinner variant="info" />

          <span className="text-xs text-(--muted-text-color)">
            Info
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-xl bg-slate-900 px-6 py-4">
          <Spinner variant="white" />

          <span className="text-xs text-slate-300">
            White
          </span>
        </div>
      </DocsDemoSection>

      {/* Sizes */}
      <DocsDemoSection
        title="Sizes"
        description="Choose the appropriate spinner size based on the surrounding component and available space."
        code={sizesCode}
        contentClassName="flex min-h-48 w-full flex-wrap items-center justify-center gap-10 p-4 sm:p-8"
      >
        <div className="flex flex-col items-center gap-3">
          <Spinner size="sm" />

          <span className="text-xs text-(--muted-text-color)">
            Small
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Spinner size="default" />

          <span className="text-xs text-(--muted-text-color)">
            Default
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Spinner size="lg" />

          <span className="text-xs text-(--muted-text-color)">
            Large
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Spinner size="xl" />

          <span className="text-xs text-(--muted-text-color)">
            Extra Large
          </span>
        </div>
      </DocsDemoSection>

      {/* Button Loading */}
      <DocsDemoSection
        title="Button Loading"
        description="Combine Spinner with a Button to communicate that an action is being processed."
        code={buttonLoadingCode}
        contentClassName="flex min-h-48 w-full items-center justify-center p-4 sm:p-8"
      >
        <Button
          variant="primary"
          disabled
          className="gap-2"
        >
          <Spinner
            size="sm"
            variant="white"
          />

          Loading...
        </Button>
      </DocsDemoSection>

      {/* Full Page */}
      <DocsDemoSection
        title="Full-Page Loading"
        description="Center a larger spinner inside a container when an entire section or page is waiting for content."
        code={fullPageCode}
        contentClassName="w-full p-4 sm:p-8"
      >
        <div className="flex min-h-64 w-full items-center justify-center rounded-xl border border-(--border-color) bg-(--bg-box-light)">
          <Spinner size="xl" />
        </div>
      </DocsDemoSection>

      {/* Installation */}
      <DocsInstallation
        packageName="easeui-react"
        importCode={`import { Spinner } from "easeui-react";`}
      />

      {/* Features */}
      <DocsFeatures
        title="Spinner Features"
        description="A simple and flexible loading indicator that fits naturally into different interface patterns."
        features={features}
      />

      {/* API Reference */}
      <DocsApiReference
        data={propsData}
        description="Available props for customizing the Spinner component."
      />
    </div>
  );
};

export default SpinnerPage;