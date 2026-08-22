import { Card } from "@/components/Card/Card";
import { Button } from "@/components";
import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";
import DocsApiReference from "@/components/Personal/DocsApiReference";
import DocsInstallation from "@/components/Personal/DocsInstallation";

import {
  cardImage,
  animatedCard,
  darkCard,
  outlineCard,
  wobbleCard,
  propsData,
  features,
} from "../utils/cardData";

const CardPage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 text-(--text-color)">
      {/* Header */}
      <DocsHeader
        title="Card"
        description="A flexible container component for grouping content with images, text, actions, variants, and interactive animations."
        technologies={["React", "Tailwind CSS", "GSAP", "Radix UI"]}
      />

      {/* Usage */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Usage</h2>

          <p className="text-sm md:text-base text-(--muted-text-color)">
            Use the Card component to create flexible content containers with
            different visual variants and interactive animations.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-2 lg:gap-8">
          {/* Dark */}
          <DocsDemoSection
            title="Dark Variant"
            description="A dark visual style with an interactive hover effect."
            code={darkCard}
            contentClassName="flex min-h-105 w-full items-center justify-center p-4 sm:min-h-130 sm:p-8"
          >
            <div className="w-full max-w-md">
              <Card
                title="Modern Animated Card"
                description="This card fades in and jiggles on hover!"
                image={cardImage}
                variant="dark"
                size="md"
                animate
                hoverAnimation="jiggle"
                footer={
                  <Button
                    animation="scaleIn"
                    variant="primary"
                    hoverAnimation="jiggle"
                    size="sm"
                  >
                    Jiggle
                  </Button>
                }
              />
            </div>
          </DocsDemoSection>

          {/* Outline */}
          <DocsDemoSection
            title="Outline Variant"
            description="A subtle bordered style suitable for clean layouts."
            code={outlineCard}
            contentClassName="flex min-h-105 w-full items-center justify-center p-4 sm:min-h-130 sm:p-8"
          >
            <div className="w-full max-w-md">
              <Card
                title="Modern Animated Card"
                description="This card fades in and bounces on hover!"
                image={cardImage}
                variant="outline"
                size="md"
                animate
                hoverAnimation="bounce"
                footer={
                  <Button
                    animation="scaleIn"
                    variant="primary"
                    hoverAnimation="jiggle"
                    size="sm"
                  >
                    Jiggle
                  </Button>
                }
              />
            </div>
          </DocsDemoSection>
        </div>
      </section>

      {/* Animations */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Animations</h2>

          <p className="text-sm md:text-base text-(--muted-text-color)">
            Add motion to your cards with different GSAP-powered hover
            animations.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-2 lg:gap-8">
          {/* Float 3D */}
          <DocsDemoSection
            title="Float 3D"
            description="Hover over the card to see the 3D floating effect."
            code={animatedCard}
            contentClassName="flex min-h-105 w-full items-center justify-center p-4 sm:min-h-130 sm:p-8"
          >
            <div className="w-full max-w-md">
              <Card
                title="Float 3D"
                description="Hover over the card to see the 3D floating effect."
                image={cardImage}
                variant="light"
                size="md"
                animate
                hoverAnimation="float3D"
                footer={
                  <Button
                    animation="scaleIn"
                    variant="primary"
                    hoverAnimation="jiggle"
                    size="sm"
                  >
                    Jiggle
                  </Button>
                }
              />
            </div>
          </DocsDemoSection>

          {/* Wobble Follow */}
          <DocsDemoSection
            title="Wobble Follow"
            description="Hover over the card to see the wobble interaction."
            code={wobbleCard}
            contentClassName="flex min-h-105 w-full items-center justify-center p-4 sm:min-h-130 sm:p-8"
          >
            <div className="w-full max-w-md">
              <Card
                title="Wobble Follow"
                description="Hover over the card to see the wobble interaction."
                image={cardImage}
                variant="light"
                size="md"
                animate
                hoverAnimation="wobbleFollow"
                footer={
                  <Button
                    animation="scaleIn"
                    variant="primary"
                    hoverAnimation="jiggle"
                    size="sm"
                  >
                    Jiggle
                  </Button>
                }
              />
            </div>
          </DocsDemoSection>
        </div>
      </section>

      {/* Installation */}
      <DocsInstallation
        packageName="ease-ui"
        importCode={`import { Card } from "ease-ui";`}
      />

      {/* Features */}
      <DocsFeatures
        title="Card Features"
        description="Everything you need to build flexible and interactive content cards."
        features={features}
      />

      {/* API Reference */}
      <DocsApiReference
        data={propsData}
        description="Available props for customizing the Card component."
      />
    </div>
  );
};

export default CardPage;