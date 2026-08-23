import { Navbar } from "@/components/Navbar";
import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsInstallation from "@/components/Personal/DocsInstallation";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";
import { propsData, features, usageCode } from "../utils/navbarData";
import DocsApiReference from "@/components/Personal/DocsApiReference";

const NavbarPage = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-12 text-(--text-color)">
      {/* Hero */}
      <DocsHeader
        title="Navbar"
        description="A responsive navigation component with multiple visual variants, sizes, navigation items, action buttons, and entrance animations."
        technologies={["React", "Tailwind CSS", "GSAP", "Radix UI"]}
      />

      {/* Usage */}
      <DocsDemoSection
        title="Usage"
        description="Customize the navbar using different variants, sizes, navigation items, action buttons, and entrance animations."
        code={usageCode}
        contentClassName="flex w-full flex-col gap-6 p-6 sm:p-8"
      >
        {/* Primary */}
        <div className="w-full overflow-hidden">
          <Navbar
            variant="primary"
            size="sm"
            animation="scaleIn"
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
        </div>

        {/* Light */}
        <div className="w-full overflow-hidden">
          <Navbar
            variant="light"
            size="lg"
            animation="fadeIn"
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
        </div>

        {/* Dark */}
        <div className="w-full overflow-hidden bg-(--bg-color)">
          <Navbar
            variant="dark"
            size="xl"
            animation="slideUp"
            navButton={{
              label: "Contact",
              variant: "primary",
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
                label: "Customer",
                href: "#",
              },
            ]}
          />
        </div>
      </DocsDemoSection>

      {/* Installation */}
      <DocsInstallation
        packageName="easeui-react"
        importCode={`import { Navbar } from "easeui-react";`}
      />

      {/* Features */}
      <DocsFeatures features={features} />

      {/* API Reference */}
      <DocsApiReference
        data={propsData}
        description="Available props for customizing the Navbar component."
      />
    </div>
  );
};

export default NavbarPage;
