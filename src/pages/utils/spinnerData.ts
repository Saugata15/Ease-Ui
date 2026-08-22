export const basicUsageCode = `import { Spinner } from "@/components/Spinner/Spinner";

<Spinner />`;

export const variantsCode = `import { Spinner } from "@/components/Spinner/Spinner";

<Spinner variant="default" />

<Spinner variant="primary" />

<Spinner variant="success" />

<Spinner variant="warning" />

<Spinner variant="danger" />

<Spinner variant="info" />

<Spinner variant="white" />`;

export const sizesCode = `import { Spinner } from "@/components/Spinner/Spinner";

<Spinner size="sm" />

<Spinner size="default" />

<Spinner size="lg" />

<Spinner size="xl" />`;

export const buttonLoadingCode = `import { Spinner } from "@/components/Spinner/Spinner";

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
</Button>`;

export const fullPageCode = `import { Spinner } from "@/components/Spinner/Spinner";

<div className="flex min-h-64 items-center justify-center">
  <Spinner size="xl" />
</div>`;

export const features = [
  {
    title: "Multiple Variants",
    description:
      "Choose from different color variants to match the context of your loading state.",
  },
  {
    title: "Flexible Sizes",
    description:
      "Use small, default, large, or extra-large sizes depending on the surrounding interface.",
  },
  {
    title: "Easy to Compose",
    description:
      "Use the Spinner inside buttons, cards, pages, overlays, and other loading states.",
  },
];

export const propsData = [
  {
    prop: "variant",
    type: '"default" | "primary" | "success" | "warning" | "danger" | "info" | "white"',
    default: '"primary"',
    description: "Controls the color of the spinner.",
  },
  {
    prop: "size",
    type: '"sm" | "default" | "lg" | "xl"',
    default: '"default"',
    description:
      "Controls the width, height, and border thickness of the spinner.",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind CSS classes for customizing the spinner.",
  },
  {
    prop: "aria-label",
    type: "string",
    default: '"Loading"',
    description: "Accessible label describing the loading state.",
  },
];
