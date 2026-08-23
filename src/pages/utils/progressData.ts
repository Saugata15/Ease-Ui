export const basicUsageCode = `import { Progress } from "easeui-react";

<Progress value={60} />`;

export const variantsCode = `import { Progress } from "easeui-react";

<Progress value={60} variant="default" />

<Progress value={60} variant="primary" />

<Progress value={60} variant="success" />

<Progress value={60} variant="warning" />

<Progress value={60} variant="danger" />

<Progress value={60} variant="info" />`;

export const sizesCode = `import { Progress } from "easeui-react";

<Progress value={60} size="sm" />

<Progress value={60} size="default" />

<Progress value={60} size="lg" />`;

export const showValueCode = `import { Progress } from "easeui-react";

<Progress
  value={25}
  showValue
/>

<Progress
  value={60}
  showValue
  variant="primary"
/>

<Progress
  value={90}
  showValue
  variant="success"
/>`;

export const progressStatesCode = `import { Progress } from "easeui-react";

<Progress
  value={0}
  variant="danger"
/>

<Progress
  value={25}
  variant="warning"
/>

<Progress
  value={50}
  variant="info"
/>

<Progress
  value={75}
  variant="primary"
/>

<Progress
  value={100}
  variant="success"
/>`;

export const features = [
  {
    title: "Multiple Variants",
    description:
      "Choose from default, primary, success, warning, danger, and info variants for different progress states.",
  },
  {
    title: "Flexible Sizes",
    description:
      "Use small, default, or large sizes to match the density and context of your interface.",
  },
  {
    title: "Accessible",
    description:
      "Includes progressbar ARIA attributes to communicate the current progress to assistive technologies.",
  },
];

export const propsData = [
  {
    prop: "value",
    type: "number",
    default: "0",
    description:
      "Controls the current progress value. Values are automatically constrained between 0 and 100.",
  },
  {
    prop: "variant",
    type:
      '"default" | "primary" | "success" | "warning" | "danger" | "info"',
    default: '"primary"',
    description:
      "Controls the visual style and color of the progress indicator.",
  },
  {
    prop: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description:
      "Controls the height of the progress bar.",
  },
  {
    prop: "showValue",
    type: "boolean",
    default: "false",
    description:
      "Displays the current progress percentage above the progress bar.",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description:
      "Additional Tailwind CSS classes for customizing the progress container.",
  },
];