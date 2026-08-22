export const cardImage =
  "https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1015";

export const animatedCard = `
import { Card } from "ease-ui";
import { Button } from "ease-ui";

<Card
  title="Modern Animated Card"
  description="This card fades in and jiggles on hover!"
  image="${cardImage}"
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
`;

export const darkCard = `
import { Card } from "ease-ui";
import { Button } from "ease-ui";

<Card
  title="Modern Animated Card"
  description="This card fades in and jiggles on hover!"
  image="${cardImage}"
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
`;

export const outlineCard = `
import { Card } from "ease-ui";
import { Button } from "ease-ui";

<Card
  title="Modern Animated Card"
  description="This card fades in and bounces on hover!"
  image="${cardImage}"
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
`;

export const wobbleCard = `
import { Card } from "ease-ui";
import { Button } from "ease-ui";

<Card
  title="Wobble Follow"
  description="Hover over the card to see the wobble interaction."
  image="${cardImage}"
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
`;

export const propsData = [
  {
    prop: "variant",
    type: `"light" | "dark" | "outline"`,
    default: `"light"`,
    description:
      "Defines the visual style of the card background and border.",
  },
  {
    prop: "hoverAnimation",
    type: `"none" | "jiggle" | "scale" | "shadowPulse" | "float3D" | "wobbleFollow"`,
    default: `"none"`,
    description:
      "Specifies the GSAP-powered hover animation for interactive motion effects.",
  },
  {
    prop: "animate",
    type: "boolean",
    default: "false",
    description:
      "When true, the card applies an entrance animation when mounted.",
  },
  {
    prop: "animationType",
    type: `"fadeIn" | "slideUp" | "zoomIn" | ...`,
    default: `"fadeIn"`,
    description:
      "Specifies which entrance animation to use when the card mounts.",
  },
  {
    prop: "title",
    type: "string",
    default: "-",
    description:
      "Optional title displayed at the top of the card.",
  },
  {
    prop: "description",
    type: "string",
    default: "-",
    description:
      "Optional description displayed below the title.",
  },
  {
    prop: "image",
    type: "string",
    default: "-",
    description:
      "URL of an image displayed at the top of the card.",
  },
  {
    prop: "ratio",
    type: `"square" | "16:9" | "4:3"`,
    default: `"16:9"`,
    description:
      "Controls the image aspect ratio.",
  },
  {
    prop: "size",
    type: `"sm" | "md" | "lg"`,
    default: `"md"`,
    description:
      "Controls the internal padding and text size of the card.",
  },
  {
    prop: "footer",
    type: "React.ReactNode",
    default: "-",
    description:
      "Optional footer content such as buttons or links.",
  },
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description:
      "Allows the Card to render as a different HTML element using Radix Slot.",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description:
      "Additional custom class names for extended styling.",
  },
];

export const features = [
  {
    title: "Variants",
    description:
      "Choose between light, dark, and outline styles to match different design contexts.",
  },
  {
    title: "Animations",
    description:
      "Add entrance animations and GSAP-powered hover interactions for engaging cards.",
  },
  {
    title: "Flexible Content",
    description:
      "Add titles, descriptions, images, custom footers, and other React content.",
  },
];