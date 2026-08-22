export const propsData = [
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "glass"',
      default: '"light"',
      description:
        "Controls the visual style and color theme of the navbar.",
    },
    {
      prop: "size",
      type: '"sm" | "default" | "lg" | "xl"',
      default: '"default"',
      description: "Controls the height of the navbar.",
    },
    {
      prop: "navItems",
      type: "NavItem[]",
      default: "[]",
      description:
        "Defines the navigation links displayed in the navbar. Each item contains a label and a URL.",
    },
    {
      prop: "navButton",
      type: "NavbarButton",
      default: "required",
      description:
        "Defines the action button displayed on the right side of the navbar.",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "slideUp" | "zoomIn" | ...',
      default: '"fadeIn"',
      description:
        "Controls the entrance animation applied when the navbar appears.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description:
        "When true, renders the navbar using the child element provided through Radix Slot.",
    },
    {
      prop: "className",
      type: "string",
      default: "undefined",
      description:
        "Adds custom CSS classes to extend or override the navbar styling.",
    },
  ];

export const features = [
    {
      title: "Variants",
      description:
        "Multiple visual styles including light, dark, primary, and glass variants.",
    },
    {
      title: "Responsive",
      description:
        "Designed to adapt across screen sizes with navigation links and actions.",
    },
    {
      title: "Animations",
      description:
        "Entrance animations powered by GSAP for smooth and engaging navigation.",
    },
  ];

export const usageCode = `
import { Navbar } from "@/components/navbar"

<Navbar
  variant="light"
  size="lg"
  animation="fadeIn"
  navButton={{
    label: "Profile",
    variant: "outline",
  }}
  navItems={[
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About",
      href: "#",
    },
    {
      label: "Contact",
      href: "#",
    },
  ]}
/>

<Navbar
  variant="dark"
  size="xl"
  animation="slideUp"
  navButton={{
    label: "Call Now",
  }}
  navItems={[
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Services",
      href: "#",
    },
    {
      label: "Customer",
      href: "#",
    },
  ]}
/>

<Navbar
  variant="primary"
  size="sm"
  animation="scaleIn"
  navButton={{
    label: "Contact",
    variant: "primary",
  }}
  navItems={[
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Customer",
      href: "/customer",
    },
  ]}
/>
`;