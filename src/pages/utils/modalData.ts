export const lightModalCode = `
import { useState } from "react";
import { Button } from "ease-ui";
import { Modal } from "ease-ui";

const [isOpen, setIsOpen] = useState(false);

<Button
  variant="primary"
  onClick={() => setIsOpen(true)}
>
  Light Modal
</Button>

<Modal
  variant="light"
  size="sm"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <h2 className="text-lg font-semibold">
    Modal Title
  </h2>

  <p>
    This is modal content.
  </p>
</Modal>
`;

export const darkModalCode = `
import { useState } from "react";
import { Button } from "ease-ui";
import { Modal } from "ease-ui";

const [isOpen, setIsOpen] = useState(false);

<Button
  variant="dark"
  onClick={() => setIsOpen(true)}
>
  Dark Modal
</Button>

<Modal
  variant="dark"
  size="lg"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <h2 className="text-lg font-semibold">
    Modal Title
  </h2>

  <p>
    This is modal content.
  </p>
</Modal>
`;

export const outlineModalCode = `
import { useState } from "react";
import { Button } from "ease-ui";
import { Modal } from "ease-ui";

const [isOpen, setIsOpen] = useState(false);

<Button
  variant="outline"
  onClick={() => setIsOpen(true)}
>
  Outline Modal
</Button>

<Modal
  variant="outline"
  size="sm"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <h2 className="text-lg font-semibold">
    Modal Title
  </h2>

  <p>
    This is modal content.
  </p>
</Modal>
`;

export const propsData = [
  {
    prop: "isOpen",
    type: "boolean",
    default: "false",
    description: "Controls modal visibility.",
  },
  {
    prop: "variant",
    type: '"light" | "dark" | "outline"',
    default: '"light"',
    description: "Controls the visual style of the Modal.",
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg" | ...',
    default: '"md"',
    description: "Controls the width and overall size of the modal.",
  },
  {
    prop: "onClose",
    type: "() => void",
    default: "-",
    description: "Callback function called when the modal closes.",
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Content rendered inside the modal.",
  },
];

export const features = [
  {
    title: "Variants",
    description:
      "Choose between light, dark, and outline styles to match your application's visual theme.",
  },
  {
    title: "Controlled State",
    description:
      "Control the modal visibility using isOpen and handle closing with the onClose callback.",
  },
  {
    title: "Flexible Content",
    description:
      "Render any React content inside the modal, including text, forms, buttons, and custom layouts.",
  },
];