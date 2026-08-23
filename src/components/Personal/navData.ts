interface NavItem {
  label: string;
  path: string;
}

export interface NavbarProps {
  logo?: string;
  navItems?: NavItem[];
  showSearch?: boolean;
  showThemeToggle?: boolean;
}

export const defaultNavItems: NavItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Components",
    path: "/components",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Templates",
    path: "/templates",
  },
];

interface SearchItem {
  label: string;
  path: string;
}

export const searchItems: SearchItem[] = [
  { label: "Button", path: "/components/button" },
  { label: "Card", path: "/components/card" },
  { label: "Modal", path: "/components/modal" },
  { label: "Input", path: "/components/input" },
  { label: "Navbar", path: "/components/navbar" },
  { label: "Tooltip", path: "/components/tooltip" },
  { label: "Table", path: "/components/table" },
  { label: "Skeleton", path: "/components/skeleton" },
  { label: "Badge", path: "/components/badge" },
  { label: "Progress", path: "/components/progress" },
  { label: "Toast", path: "/components/toast" },
  { label: "Spinner", path: "/components/spinner" },
  { label: "Tabs", path: "/components/tabs" },
];