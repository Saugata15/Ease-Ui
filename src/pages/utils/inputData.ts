export const basicUsageCode = `
import { Input } from "easeui-react";

<Input
  label="Full Name"
  placeholder="Enter your name"
  size="sm"
/>

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  size="md"
/>

<Input
  label="Phone"
  type="tel"
  placeholder="Enter your phone number"
  size="lg"
/>
`;

export const specializedInputsCode = `
import {
  AnimatedInput,
  FloatingLabelInput,
  InputWithIcon,
  PasswordInput,
  NumberInput,
} from "easeui-react";
import { Search } from "lucide-react";

<AnimatedInput
  label="Animated"
  placeholder="Focus me"
/>

<FloatingLabelInput
  label="Floating"
  placeholder=""
/>

<InputWithIcon
  label="Search"
  icon={<Search />}
  placeholder="Search..."
/>

<PasswordInput label="Password" />

<NumberInput
  label="Age"
  onChange={(value) => console.log(value)}
/>
`;

export const sizesCode = `
import { Input } from "easeui-react";

<Input
  label="Small Input"
  placeholder="Small input"
  size="sm"
/>

<Input
  label="Medium Input"
  placeholder="Medium input"
  size="md"
/>

<Input
  label="Large Input"
  placeholder="Large input"
  size="lg"
/>
`;

export const statesCode = `
import { Input } from "easeui-react";

<Input
  label="Default"
  placeholder="Default input"
/>

<Input
  label="Disabled"
  placeholder="Disabled input"
  disabled
/>

<Input
  label="Required"
  placeholder="Required input"
  required
/>

<Input
  label="With Hint"
  placeholder="Enter your username"
  hint="Your username must be unique."
/>

<Input
  label="Error"
  placeholder="Invalid input"
  error="Please enter a valid value."
/>
`;

export const propsData = [
  {
    prop: "label",
    type: "string",
    default: "undefined",
    description: "Label displayed above the input.",
  },
  {
    prop: "placeholder",
    type: "string",
    default: "undefined",
    description: "Placeholder text displayed inside the input.",
  },
  {
    prop: "type",
    type: "string",
    default: `"text"`,
    description:
      "Defines the input type such as text, email, password, or number.",
  },
  {
    prop: "value",
    type: "string",
    default: "undefined",
    description: "Controls the current value of the input.",
  },
  {
    prop: "onChange",
    type: "(e: React.ChangeEvent<HTMLInputElement>) => void",
    default: "undefined",
    description: "Callback fired whenever the input value changes.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the input when set to true.",
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Controls the size of the input.",
  },
  {
  prop: "tone",
  type: '"default" | "error" | "success" | "warning"',
  default: '"default"',
  description:
    "Controls the visual state and border styling of the input.",
},
{
  prop: "hint",
  type: "string",
  default: "undefined",
  description:
    "Displays supporting text below the input.",
},
{
  prop: "error",
  type: "string",
  default: "undefined",
  description:
    "Displays an error message and automatically applies the error tone.",
},
];

export const features = [
  {
    title: "Multiple Variations",
    description:
      "Includes standard, animated, floating label, icon, password, and number input variations.",
  },
  {
    title: "Flexible Sizing",
    description:
      "Choose between small, medium, and large input sizes to fit different form layouts.",
  },
  {
    title: "Form Friendly",
    description:
      "Supports common input properties such as labels, placeholders, values, change handlers, and disabled states.",
  },
];