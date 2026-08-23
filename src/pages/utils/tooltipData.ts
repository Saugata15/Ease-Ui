export const propsData = [
    {
      prop: "content",
      type: "string",
      default: "—",
      description: "The text displayed inside the tooltip.",
    },
    {
      prop: "variant",
      type: '"light" | "dark" | "primary"',
      default: '"dark"',
      description: "Controls the visual style of the tooltip.",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description:
        "Controls the position of the tooltip relative to its trigger.",
    },
    {
      prop: "delay",
      type: "number",
      default: "2000",
      description: "Delay in milliseconds before the tooltip appears.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "—",
      description: "The element that triggers the tooltip.",
    },
  ];

export const features = [
    {
      title: "Multiple Positions",
      description:
        "Position tooltips above, below, to the left, or to the right of the trigger element.",
    },
    {
      title: "Visual Variants",
      description:
        "Choose between light, dark, and primary styles to match your interface.",
    },
    {
      title: "Hover & Focus",
      description:
        "Tooltips appear when the trigger is hovered or focused, making them useful for both mouse and keyboard users.",
    },
    {
      title: "Configurable Delay",
      description:
        "Control how quickly the tooltip appears using the delay prop.",
    },
  ];


export const basicUsageCode = `
import { Tooltip } from "easeui-react";
import { Button } from "easeui-react";
import { Info, User, Trash2, Settings } from "lucide-react";

<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>

<Tooltip
  content="Edit your profile"
  position="right"
  variant="primary"
>
  <Button>Profile</Button>
</Tooltip>

<Tooltip
  content="Delete this item"
  position="bottom"
  variant="dark"
>
  <Button>Delete</Button>
</Tooltip>

<Tooltip
  content="More information"
  position="left"
  variant="light"
>
  <Button>Info</Button>
</Tooltip>
`;

export const variantsCode = `
import { Tooltip } from "easeui-react";

<Tooltip content="Light tooltip" variant="light">
  <button>Light</button>
</Tooltip>

<Tooltip content="Dark tooltip" variant="dark">
  <button>Dark</button>
</Tooltip>

<Tooltip content="Primary tooltip" variant="primary">
  <button>Primary</button>
</Tooltip>
`;