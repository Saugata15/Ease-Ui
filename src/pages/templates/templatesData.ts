import {
  Code2,
  FileText,
  LayoutDashboard,
  ShoppingBag,
  User,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export interface Template {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  tags: string[];
}

export const templates: Template[] = [
  {
    title: "SaaS Dashboard",
    description:
      "A clean and modern dashboard layout for SaaS applications and admin panels.",
    category: "Dashboard",
    icon: LayoutDashboard,
    tags: ["React", "Tailwind", "Dashboard"],
  },
  {
    title: "E-commerce Store",
    description:
      "A complete storefront layout with product sections, navigation, and shopping UI.",
    category: "E-commerce",
    icon: ShoppingBag,
    tags: ["React", "Tailwind", "Shop"],
  },
  {
    title: "Portfolio",
    description:
      "A minimal portfolio template designed for developers, designers, and creators.",
    category: "Portfolio",
    icon: User,
    tags: ["React", "Portfolio", "Responsive"],
  },
  {
    title: "Landing Page",
    description:
      "A conversion-focused landing page for products, startups, and applications.",
    category: "Landing Page",
    icon: FileText,
    tags: ["React", "Landing", "Marketing"],
  },
  {
    title: "Business Website",
    description:
      "A professional business website layout with services, testimonials, and CTA sections.",
    category: "Business",
    icon: Briefcase,
    tags: ["React", "Business", "Responsive"],
  },
  {
    title: "Developer Docs",
    description:
      "A documentation layout for developer tools, APIs, libraries, and open-source projects.",
    category: "Documentation",
    icon: Code2,
    tags: ["React", "Docs", "Developer"],
  },
];

export const templateCategories = [
  "All",
  "Dashboard",
  "E-commerce",
  "Portfolio",
  "Landing Page",
  "Business",
  "Documentation",
];