export interface AboutFeature {
  title: string;
  description: string;
}

export interface AboutTechnology {
  name: string;
  description: string;
}

export interface AboutPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface AboutComponent {
  name: string;
  description: string;
}

export const aboutFeatures: AboutFeature[] = [
  {
    title: "Reusable",
    description:
      "Build interfaces faster with components designed to work across different React projects.",
  },
  {
    title: "Customizable",
    description:
      "Customize variants, sizes, spacing, and styling without fighting against the component API.",
  },
  {
    title: "Composable",
    description:
      "Combine small building blocks to create larger and more complex interface patterns.",
  },
  {
    title: "Accessible",
    description:
      "Use semantic HTML and accessible primitives where appropriate to create better experiences.",
  },
];

export const technologies: AboutTechnology[] = [
  {
    name: "React",
    description:
      "Component-based architecture for building modern user interfaces.",
  },
  {
    name: "TypeScript",
    description:
      "Type-safe APIs and a better developer experience.",
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first styling for flexible and customizable components.",
  },
  {
    name: "Class Variance Authority",
    description:
      "Structured component variants and reusable styling patterns.",
  },
  {
    name: "Radix UI",
    description:
      "Accessible primitives used where composable behavior is needed.",
  },
  {
    name: "cn Utility",
    description:
      "Convenient class composition and conditional styling.",
  },
];

export const designPrinciples: AboutPrinciple[] = [
  {
    number: "01",
    title: "Simple API",
    description:
      "Components should be easy to understand without requiring developers to learn a complicated abstraction layer.",
  },
  {
    number: "02",
    title: "Composable",
    description:
      "Small components should work independently while also being easy to combine into larger interface patterns.",
  },
  {
    number: "03",
    title: "Flexible",
    description:
      "Use variants for common patterns while keeping className available for project-specific customization.",
  },
];

export const aboutComponents: AboutComponent[] = [
  {
    name: "Button",
    description:
      "Flexible actions with variants, sizes, and animations.",
  },
  {
    name: "Badge",
    description:
      "Compact labels for statuses and contextual information.",
  },
  {
    name: "Input",
    description:
      "Customizable form input with reusable styling.",
  },
  {
    name: "Modal",
    description:
      "Flexible dialog interface for focused interactions.",
  },
  {
    name: "Tooltip",
    description:
      "Contextual information displayed on user interaction.",
  },
  {
    name: "Table",
    description:
      "Structured data presentation with reusable styling.",
  },
  {
    name: "Skeleton",
    description:
      "Loading placeholders for smooth content transitions.",
  },
  {
    name: "Progress",
    description:
      "Visual indicators for task and process completion.",
  },
  {
    name: "Toast",
    description:
      "Compact notifications for feedback and status updates.",
  },
];