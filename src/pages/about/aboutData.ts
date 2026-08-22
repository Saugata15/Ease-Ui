import {
  Code2,
  Layers3,
  Palette,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface AboutFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutFeatures: AboutFeature[] = [
  {
    icon: Code2,
    title: "Developer Friendly",
    description:
      "Simple APIs and predictable component behavior make EaseUI easy to learn and integrate.",
  },
  {
    icon: Palette,
    title: "Customizable",
    description:
      "Customize variants, sizes, colors, and styles to fit your application's design system.",
  },
  {
    icon: Layers3,
    title: "Reusable",
    description:
      "Build consistent interfaces using reusable components instead of recreating UI patterns.",
  },
  {
    icon: Zap,
    title: "Fast Development",
    description:
      "Use ready-made components to spend less time building UI infrastructure and more time building your product.",
  },
];

export const technologies = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "CVA",
  "Lucide Icons",
];