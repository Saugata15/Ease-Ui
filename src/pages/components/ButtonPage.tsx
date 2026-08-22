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
  animationsCode,
  hoverAnimationsCode,
  propsData,
  features,
} from "../utils/buttonData";

const ButtonPage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 text-(--text-color)">
      {/* Hero */}
      <DocsHeader
        title="Button"
        description="A flexible button component with multiple variants, sizes, entrance animations, and hover effects."
        technologies={["React", "Tailwind CSS", "GSAP"]}
      />

      {/* Basic Usage */}
      <DocsDemoSection
        title="Basic Usage"
        description="Import the Button component and customize it using variants, sizes, and animations."
        code={basicUsageCode}
        contentClassName="flex min-h-48 w-full items-center justify-center gap-4 flex-wrap p-4 sm:p-8"
      >
        <Button
          variant="primary"
          animation="scaleIn"
          hoverAnimation="jiggle"
          size="sm"
        >
          Jiggle
        </Button>

        <Button
          variant="secondary"
          animation="slideUp"
          hoverAnimation="bounce"
          size="lg"
        >
          Bounce
        </Button>

        <Button
          variant="destructive"
          animation="fadeIn"
          hoverAnimation="scale"
          size="xl"
        >
          Scale
        </Button>

        <Button
          variant="dark"
          animation="bounceIn"
          hoverAnimation="none"
          size="icon"
        >
          Dark
        </Button>
      </DocsDemoSection>

      {/* Variants */}
      <DocsDemoSection
        title="Variants"
        description="Choose from different visual styles to communicate the purpose and importance of an action."
        code={variantsCode}
        contentClassName="grid min-h-48 w-full grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4 p-4 sm:grid-cols-4 sm:p-8"
      >
        <Button variant="primary" hoverAnimation="none">
          Primary
        </Button>

        <Button variant="secondary" hoverAnimation="none">
          Secondary
        </Button>

        <Button variant="outline" hoverAnimation="none">
          Outline
        </Button>

        <Button variant="destructive" hoverAnimation="none">
          Destructive
        </Button>

        <Button variant="ghost" hoverAnimation="none">
          Ghost
        </Button>

        <Button variant="dark" hoverAnimation="none">
          Dark
        </Button>

        <Button variant="ok" hoverAnimation="none">
          Success
        </Button>

        <Button variant="link" hoverAnimation="none">
          Link
        </Button>
      </DocsDemoSection>

      {/* Sizes */}
      <DocsDemoSection
        title="Sizes"
        description="Use different sizes depending on the context and available space."
        code={sizesCode}
        contentClassName="flex min-h-48 w-full flex-wrap items-center justify-center gap-4 p-4 sm:p-8"
      >
        <Button size="sm" variant="primary" hoverAnimation="none">
          Small
        </Button>

        <Button size="lg" variant="primary" hoverAnimation="none">
          Large
        </Button>

        <Button size="xl" variant="primary" hoverAnimation="none">
          Extra Large
        </Button>

        <Button size="icon" variant="primary" hoverAnimation="none">
          +
        </Button>

        <Button size="auto" variant="outline" hoverAnimation="none">
          Auto
        </Button>

        <Button size="full" variant="secondary" hoverAnimation="none">
          Full Width
        </Button>
      </DocsDemoSection>

      {/* Entrance Animations */}
      <DocsDemoSection
        title="Entrance Animations"
        description="Add an entrance animation that plays when the Button component mounts."
        code={animationsCode}
        contentClassName="flex min-h-48 w-full flex-wrap items-center justify-center gap-4 p-4 sm:p-8"
      >
        <Button
          variant="primary"
          animation="fadeIn"
          hoverAnimation="none"
        >
          Fade In
        </Button>

        <Button
          variant="secondary"
          animation="scaleIn"
          hoverAnimation="none"
        >
          Scale In
        </Button>

        <Button
          variant="outline"
          animation="slideUp"
          hoverAnimation="none"
        >
          Slide Up
        </Button>

        <Button
          variant="dark"
          animation="bounceIn"
          hoverAnimation="none"
        >
          Bounce In
        </Button>
      </DocsDemoSection>

      {/* Hover Animations */}
      <DocsDemoSection
        title="Hover Animations"
        description="Add interactive hover effects to make button interactions feel more responsive."
        code={hoverAnimationsCode}
        contentClassName="flex min-h-48 w-full flex-wrap items-center justify-center gap-4 p-4 sm:p-8"
      >
        <Button
          variant="primary"
          animation="none"
          hoverAnimation="jiggle"
        >
          Jiggle
        </Button>

        <Button
          variant="secondary"
          animation="none"
          hoverAnimation="scale"
        >
          Scale
        </Button>

        <Button
          variant="outline"
          animation="none"
          hoverAnimation="bounce"
        >
          Bounce
        </Button>

        <Button
          variant="dark"
          animation="none"
          hoverAnimation="none"
        >
          None
        </Button>
      </DocsDemoSection>

      {/* Installation */}
      <DocsInstallation
        packageName="ease-ui"
        importCode={`import { Button } from "ease-ui";`}
      />

      {/* Features */}
      <DocsFeatures
        title="Button Features"
        description="Everything you need to create polished and interactive button experiences."
        features={features}
      />

      {/* API Reference */}
      <DocsApiReference
        data={propsData}
        description="Available props for customizing the Button component."
      />
    </div>
  );
};

export default ButtonPage;