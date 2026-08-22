export interface SkeletonFeature {
  title: string;
  description: string;
}

export const skeletonFeatures: SkeletonFeature[] = [
  {
    title: "Flexible Variants",
    description:
      "Choose from default, text, circle, and avatar variants for different loading layouts.",
  },
  {
    title: "Customizable",
    description:
      "Use Tailwind CSS classes to control the skeleton's size, spacing, and appearance.",
  },
  {
    title: "Optional Animation",
    description:
      "Use the pulse animation for dynamic loading states or disable it for static placeholders.",
  },
];

export const skeletonBasicCode = `import { Skeleton } from "@/components/Skeleton/Skeleton";

<Skeleton className="h-6 w-48" />`;

export const skeletonVariantsCode = `import { Skeleton } from "@/components/Skeleton/Skeleton";

<Skeleton
  variant="default"
  className="h-20 w-32"
/>

<Skeleton
  variant="text"
  className="w-32"
/>

<Skeleton
  variant="circle"
  className="h-12 w-12"
/>

<Skeleton
  variant="avatar"
  className="h-12 w-12"
/>`;

export const skeletonAnimationCode = `import { Skeleton } from "@/components/Skeleton/Skeleton";

<Skeleton
  animation="pulse"
  className="h-6 w-full"
/>

<Skeleton
  animation="none"
  className="h-6 w-full"
/>`;

export const skeletonCardCode = `import { Skeleton } from "@/components/Skeleton/Skeleton";

<div className="w-full max-w-sm space-y-4">
  <Skeleton className="h-48 w-full" />

  <div className="space-y-2">
    <Skeleton variant="text" className="w-3/4" />
    <Skeleton variant="text" className="w-full" />
    <Skeleton variant="text" className="w-1/2" />
  </div>

  <div className="flex items-center gap-3">
    <Skeleton
      variant="circle"
      className="h-10 w-10"
    />

    <div className="space-y-2">
      <Skeleton variant="text" className="w-24" />
      <Skeleton variant="text" className="w-16" />
    </div>
  </div>
</div>`;

export const skeletonListCode = `import { Skeleton } from "@/components/Skeleton/Skeleton";

<div className="space-y-5">
  {Array.from({ length: 4 }).map((_, index) => (
    <div
      key={index}
      className="flex items-center gap-4"
    >
      <Skeleton
        variant="circle"
        className="h-12 w-12 shrink-0"
      />

      <div className="flex-1 space-y-2">
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
</div>`;

export const skeletonPropsData = [
  {
    prop: "variant",
    type: '"default" | "circle" | "text" | "avatar"',
    default: '"default"',
    description: "Controls the shape and appearance of the skeleton.",
  },
  {
    prop: "animation",
    type: '"pulse" | "none"',
    default: '"pulse"',
    description:
      "Controls whether the skeleton uses the pulse animation.",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description:
      "Additional Tailwind CSS classes used to control size, spacing, and custom styling.",
  },
];