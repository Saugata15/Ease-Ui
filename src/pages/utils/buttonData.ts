export const basicUsageCode = `
import { Button } from "easeui-react";

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
`;

export const variantsCode = `
import { Button } from "easeui-react";

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="dark">Dark</Button>
<Button variant="ok">Success</Button>
<Button variant="link">Link</Button>
`;

export const sizesCode = `
import { Button } from "easeui-react";

<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">+</Button>
<Button size="auto">Auto</Button>
<Button size="full">Full Width</Button>
`;

export const animationsCode = `
import { Button } from "easeui-react";

<Button animation="fadeIn">
  Fade In
</Button>

<Button animation="scaleIn">
  Scale In
</Button>

<Button animation="slideUp">
  Slide Up
</Button>

<Button animation="bounceIn">
  Bounce In
</Button>
`;

export const hoverAnimationsCode = `
import { Button } from "easeui-react";

<Button hoverAnimation="jiggle">
  Jiggle
</Button>

<Button hoverAnimation="scale">
  Scale
</Button>

<Button hoverAnimation="bounce">
  Bounce
</Button>

<Button hoverAnimation="none">
  None
</Button>
`;

export const propsData = [
  {
    prop: "variant",
    type: '"primary" | "secondary" | "outline" | "destructive" | "ghost" | "dark" | "ok" | "link"',
    default: '"primary"',
    description: "The visual style variant of the button.",
  },
  {
    prop: "size",
    type: '"sm" | "lg" | "xl" | "icon" | "auto" | "full"',
    default: '"lg"',
    description: "Controls the size of the button.",
  },
  {
    prop: "animation",
    type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
    default: '"none"',
    description: "Animation played when the component mounts.",
  },
  {
    prop: "hoverAnimation",
    type: '"jiggle" | "scale" | "bounce" | "none"',
    default: '"none"',
    description: "Animation triggered while hovering.",
  },
];

export const features = [
  {
    title: "Variants",
    description:
      "Multiple visual styles including primary, ghost, destructive, outline, and dark.",
  },
  {
    title: "Animations",
    description:
      "Entrance animations powered by GSAP for a smoother experience.",
  },
  {
    title: "Hover Effects",
    description:
      "Interactive hover animations like jiggle, bounce, and scale.",
  },
];