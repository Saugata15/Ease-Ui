import {
  AlertTriangle,
  Check,
  Info,
} from "lucide-react";

import { Badge } from "@/components/Badge/Badge";
import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";
import DocsApiReference from "@/components/Personal/DocsApiReference";
import DocsInstallation from "@/components/Personal/DocsInstallation";

import {
  basicUsageCode,
  variantsCode,
  sizesCode,
  iconsCode,
  statusCode,
  propsData,
  features,
} from "../utils/badgeData";

const BadgePage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 text-(--text-color)">
      {/* Hero */}
      <DocsHeader
        title="Badge"
        description="A compact label component for highlighting statuses, categories, metadata, and other contextual information."
        technologies={["React", "Tailwind CSS", "CVA"]}
      />

      {/* Basic Usage */}
      <DocsDemoSection
        title="Basic Usage"
        description="Import the Badge component and use it to display a compact label or status."
        code={basicUsageCode}
        contentClassName="flex min-h-48 w-full items-center justify-center p-4 sm:p-8"
      >
        <Badge>
          Default
        </Badge>
      </DocsDemoSection>

      {/* Variants */}
      <DocsDemoSection
        title="Variants"
        description="Choose from different visual styles to communicate status, meaning, or emphasis."
        code={variantsCode}
        contentClassName="grid min-h-48 w-full grid-cols-2 items-center justify-items-center gap-5 p-4 sm:grid-cols-4 sm:p-8"
      >
        <Badge variant="default">
          Default
        </Badge>

        <Badge variant="primary">
          Primary
        </Badge>

        <Badge variant="success">
          Success
        </Badge>

        <Badge variant="warning">
          Warning
        </Badge>

        <Badge variant="danger">
          Danger
        </Badge>

        <Badge variant="info">
          Info
        </Badge>

        <Badge variant="outline">
          Outline
        </Badge>

        <Badge variant="glass">
          Glass
        </Badge>
      </DocsDemoSection>

      {/* Sizes */}
      <DocsDemoSection
        title="Sizes"
        description="Use different sizes depending on the context and available space."
        code={sizesCode}
        contentClassName="flex min-h-48 w-full flex-wrap items-center justify-center gap-5 p-4 sm:p-8"
      >
        <Badge
          size="sm"
          variant="primary"
        >
          Small
        </Badge>

        <Badge
          size="default"
          variant="primary"
        >
          Default
        </Badge>

        <Badge
          size="lg"
          variant="primary"
        >
          Large
        </Badge>
      </DocsDemoSection>

      {/* Icons */}
      <DocsDemoSection
        title="With Icons"
        description="Combine badges with icons to make statuses and contextual information easier to understand."
        code={iconsCode}
        contentClassName="flex min-h-48 w-full flex-wrap items-center justify-center gap-4 p-4 sm:p-8"
      >
        <Badge
          variant="success"
          className="gap-1.5"
        >
          <Check size={12} />
          Verified
        </Badge>

        <Badge
          variant="info"
          className="gap-1.5"
        >
          <Info size={12} />
          Information
        </Badge>

        <Badge
          variant="warning"
          className="gap-1.5"
        >
          <AlertTriangle size={12} />
          Warning
        </Badge>
      </DocsDemoSection>

      {/* Status */}
      <DocsDemoSection
        title="Status"
        description="Use semantic badge variants to represent common application states."
        code={statusCode}
        contentClassName="flex min-h-48 w-full flex-col items-center justify-center gap-5 p-4 sm:p-8"
      >
        <div className="flex w-full max-w-sm items-center justify-between gap-4">
          <span className="text-sm font-medium">
            Account Status
          </span>

          <Badge variant="success">
            Active
          </Badge>
        </div>

        <div className="flex w-full max-w-sm items-center justify-between gap-4">
          <span className="text-sm font-medium">
            Payment
          </span>

          <Badge variant="warning">
            Pending
          </Badge>
        </div>

        <div className="flex w-full max-w-sm items-center justify-between gap-4">
          <span className="text-sm font-medium">
            Deployment
          </span>

          <Badge variant="danger">
            Failed
          </Badge>
        </div>
      </DocsDemoSection>

      {/* Installation */}
      <DocsInstallation
        packageName="easeui-react"
        importCode={`import { Badge } from "easeui-react";`}
      />

      {/* Features */}
      <DocsFeatures
        title="Badge Features"
        description="Everything you need to create clear and consistent labels and status indicators."
        features={features}
      />

      {/* API Reference */}
      <DocsApiReference
        data={propsData}
        description="Available props for customizing the Badge component."
      />
    </div>
  );
};

export default BadgePage;