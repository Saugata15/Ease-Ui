import { Skeleton } from "@/components/Skeleton/Skeleton";
import DocsInstallation from "@/components/Personal/DocsInstallation";
import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";
import DocsApiReference from "@/components/Personal/DocsApiReference";

import {
  skeletonFeatures,
  skeletonBasicCode,
  skeletonVariantsCode,
  skeletonAnimationCode,
  skeletonCardCode,
  skeletonListCode,
  skeletonPropsData,
} from "../utils/skeletonData";

const SkeletonPage = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-12 text-(--text-color)">
      {/* Header */}
      <DocsHeader
        title="Skeleton"
        description="A loading placeholder that provides a lightweight visual representation while content is being loaded."
        technologies={["React", "Tailwind CSS", "CVA"]}
      />

      {/* Basic */}
      <DocsDemoSection
        title="Basic"
        description="Use the Skeleton component as a lightweight placeholder while content is loading."
        code={skeletonBasicCode}
        contentClassName="w-full max-w-md"
      >
        <Skeleton className="h-6 w-48" />
      </DocsDemoSection>

      {/* Variants */}
      <DocsDemoSection
        title="Variants"
        description="Choose from different shapes to match the content being loaded."
        code={skeletonVariantsCode}
        contentClassName="w-full p-6"
      >
        <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Default */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium">
              Default
            </span>

            <Skeleton className="h-20 w-32" />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium">
              Text
            </span>

            <Skeleton
              variant="text"
              className="w-32"
            />
          </div>

          {/* Circle */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium">
              Circle
            </span>

            <Skeleton
              variant="circle"
              className="h-12 w-12"
            />
          </div>

          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium">
              Avatar
            </span>

            <Skeleton
              variant="avatar"
              className="h-12 w-12"
            />
          </div>
        </div>
      </DocsDemoSection>

      {/* Animation */}
      <DocsDemoSection
        title="Animation"
        description="Add a pulse animation to create a dynamic loading state, or disable it for a static placeholder."
        code={skeletonAnimationCode}
        contentClassName="w-full max-w-lg"
      >
        <div className="w-full space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                Pulse
              </span>

              <span className="text-xs text-(--muted-text-color)">
                animation="pulse"
              </span>
            </div>

            <Skeleton
              animation="pulse"
              className="h-6 w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                Static
              </span>

              <span className="text-xs text-(--muted-text-color)">
                animation="none"
              </span>
            </div>

            <Skeleton
              animation="none"
              className="h-6 w-full"
            />
          </div>
        </div>
      </DocsDemoSection>

      {/* Card */}
      <DocsDemoSection
        title="Card"
        description="Combine multiple Skeleton elements to create realistic loading states for cards and content blocks."
        code={skeletonCardCode}
        contentClassName="w-full"
      >
        <div className="w-full max-w-sm rounded-xl border border-(--border-color) bg-(--card-bg) p-4 shadow-sm">
          <div className="space-y-4">
            <Skeleton className="h-48 w-full" />

            <div className="space-y-2">
              <Skeleton
                variant="text"
                className="w-3/4"
              />

              <Skeleton
                variant="text"
                className="w-full"
              />

              <Skeleton
                variant="text"
                className="w-1/2"
              />
            </div>

            <div className="flex items-center gap-3 border-t border-(--border-subtle) pt-4">
              <Skeleton
                variant="circle"
                className="h-10 w-10 shrink-0"
              />

              <div className="space-y-2">
                <Skeleton
                  variant="text"
                  className="w-24"
                />

                <Skeleton
                  variant="text"
                  className="w-16"
                />
              </div>
            </div>
          </div>
        </div>
      </DocsDemoSection>

      {/* List */}
      <DocsDemoSection
        title="List"
        description="Create loading states for lists by combining avatar and text skeletons."
        code={skeletonListCode}
        contentClassName="w-full"
      >
        <div className="w-full max-w-lg space-y-1">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg p-3"
            >
              <Skeleton
                variant="circle"
                className="h-12 w-12 shrink-0"
              />

              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton
                  variant="text"
                  className="w-1/3"
                />

                <Skeleton
                  variant="text"
                  className="w-2/3"
                />
              </div>
            </div>
          ))}
        </div>
      </DocsDemoSection>

      {/* Installation */}
      <DocsInstallation
        packageName="easeui-react"
        importCode={`import { Skeleton } from "easeui-react";`}
      />

      {/* Features */}
      <DocsFeatures
        features={skeletonFeatures}
      />

      {/* API Reference */}
      <DocsApiReference
        title="API Reference"
        description="Available props for customizing the Skeleton component."
        data={skeletonPropsData}
      />
    </div>
  );
};

export default SkeletonPage;