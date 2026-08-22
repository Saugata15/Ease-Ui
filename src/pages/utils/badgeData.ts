export const basicUsageCode = `import { Badge } from "@/components/Badge/Badge";

<Badge>Default</Badge>`;

export const variantsCode = `import { Badge } from "@/components/Badge/Badge";

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
</Badge>`;

export const sizesCode = `import { Badge } from "@/components/Badge/Badge";

<Badge size="sm">
  Small
</Badge>

<Badge size="default">
  Default
</Badge>

<Badge size="lg">
  Large
</Badge>`;

export const iconsCode = `import { Check, Info, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/Badge/Badge";

<Badge variant="success" className="gap-1.5">
  <Check size={12} />
  Verified
</Badge>

<Badge variant="info" className="gap-1.5">
  <Info size={12} />
  Information
</Badge>

<Badge variant="warning" className="gap-1.5">
  <AlertTriangle size={12} />
  Warning
</Badge>`;

export const statusCode = `import { Badge } from "@/components/Badge/Badge";

<div className="flex items-center gap-3">
  <span>Account Status</span>

  <Badge variant="success">
    Active
  </Badge>
</div>

<div className="flex items-center gap-3">
  <span>Payment</span>

  <Badge variant="warning">
    Pending
  </Badge>
</div>

<div className="flex items-center gap-3">
  <span>Deployment</span>

  <Badge variant="danger">
    Failed
  </Badge>
</div>`;

export const features = [
  {
    title: "Multiple Variants",
    description:
      "Choose from semantic variants such as success, warning, danger, info, primary, and outline.",
  },
  {
    title: "Three Sizes",
    description:
      "Use small, default, or large sizes depending on the surrounding interface.",
  },
  {
    title: "Icon Friendly",
    description:
      "Combine badges with icons to create clear and informative status indicators.",
  },
];

export const propsData = [
  {
    prop: "variant",
    type:
      '"default" | "primary" | "success" | "warning" | "danger" | "info" | "outline" | "glass"',
    default: '"default"',
    description:
      "Controls the visual style and semantic meaning of the badge.",
  },
  {
    prop: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description:
      "Controls the size and typography of the badge.",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description:
      "Additional Tailwind CSS classes for customizing the badge.",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    default: "—",
    description:
      "The content displayed inside the badge.",
  },
];