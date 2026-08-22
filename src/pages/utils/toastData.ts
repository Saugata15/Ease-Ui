export const basicUsageCode = `import { Toast } from "@/components/Toast/Toast";

<Toast
  title="Success"
  description="Your changes have been saved."
/>`;

export const variantsCode = `import { Toast } from "@/components/Toast/Toast";

<Toast
  variant="default"
  title="Default"
  description="This is a default notification."
/>

<Toast
  variant="primary"
  title="Primary"
  description="This is a primary notification."
/>

<Toast
  variant="success"
  title="Success"
  description="Your changes were saved successfully."
/>

<Toast
  variant="warning"
  title="Warning"
  description="Please review your information."
/>

<Toast
  variant="danger"
  title="Error"
  description="Something went wrong."
/>

<Toast
  variant="info"
  title="Information"
  description="Your account has been updated."
/>`;

export const sizesCode = `import { Toast } from "@/components/Toast/Toast";

<Toast
  size="sm"
  title="Small"
  description="Small toast notification."
/>

<Toast
  size="default"
  title="Default"
  description="Default toast notification."
/>

<Toast
  size="lg"
  title="Large"
  description="Large toast notification."
/>`;

export const closeButtonCode = `import { useState } from "react";
import { Toast } from "@/components/Toast/Toast";

const Example = () => {
  const [open, setOpen] = useState(true);

  return (
    <Toast
      open={open}
      onClose={() => setOpen(false)}
      variant="success"
      title="Success"
      description="Profile updated successfully."
    />
  );
};`;

export const autoDismissCode = `import { Toast } from "@/components/Toast/Toast";

<Toast
  title="Saved"
  description="Your changes have been saved."
  duration={3000}
  onClose={() => console.log("Toast closed")}
/>`;

export const controlledCode = `import { useState } from "react";
import { Toast } from "@/components/Toast/Toast";

const Example = () => {
  const [open, setOpen] = useState(true);

  return (
    <Toast
      open={open}
      onClose={() => setOpen(false)}
      variant="success"
      title="Profile Updated"
      description="Your profile was updated successfully."
      duration={0}
    />
  );
};`;

export const features = [
  {
    title: "Multiple Variants",
    description:
      "Choose from default, primary, success, warning, danger, and info variants for different notification states.",
  },
  {
    title: "Auto Dismiss",
    description:
      "Automatically close notifications after a configurable duration or disable automatic dismissal when needed.",
  },
  {
    title: "Controlled Visibility",
    description:
      "Control the visibility of a toast using the open and onClose props for interactive notification flows.",
  },
];

export const propsData = [
  {
    prop: "title",
    type: "string",
    default: "—",
    description: "The title displayed at the top of the toast notification.",
  },
  {
    prop: "description",
    type: "string",
    default: "—",
    description: "Additional information displayed below the toast title.",
  },
  {
    prop: "variant",
    type: '"default" | "primary" | "success" | "warning" | "danger" | "info"',
    default: '"default"',
    description: "Controls the visual style and semantic meaning of the toast.",
  },
  {
    prop: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "Controls the width and padding of the toast.",
  },
  {
    prop: "open",
    type: "boolean",
    default: "true",
    description: "Controls whether the toast is visible.",
  },
  {
    prop: "onClose",
    type: "() => void",
    default: "—",
    description: "Callback invoked when the toast is dismissed.",
  },
  {
    prop: "duration",
    type: "number",
    default: "5000",
    description:
      "Controls how long the toast remains visible before automatically closing. Set to 0 to disable automatic dismissal.",
  },
  {
    prop: "showClose",
    type: "boolean",
    default: "true",
    description: "Controls whether the close button is displayed.",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional Tailwind CSS classes for customizing the toast.",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    default: "—",
    description: "Additional custom content rendered inside the toast.",
  },
];
