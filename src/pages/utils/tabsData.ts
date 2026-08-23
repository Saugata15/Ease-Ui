export const basicUsageCode = `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "easeui-react";

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">
      Account
    </TabsTrigger>

    <TabsTrigger value="settings">
      Settings
    </TabsTrigger>

    <TabsContent value="account">
      <div className="rounded-lg border p-4">
        <h3 className="font-semibold">
          Account
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account information.
        </p>
      </div>
    </TabsContent>

    <TabsContent value="settings">
      <div className="rounded-lg border p-4">
        <h3 className="font-semibold">
          Settings
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Configure your preferences.
        </p>
      </div>
    </TabsContent>
  </TabsList>
</Tabs>`;

export const variantsCode = `<Tabs defaultValue="account" variant="default">
  <TabsList>
    <TabsTrigger value="account">
      Account
    </TabsTrigger>
    <TabsTrigger value="settings">
      Settings
    </TabsTrigger>
    <TabsTrigger value="billing">
      Billing
    </TabsTrigger>
  </TabsList>

  <TabsContent value="account">
    Account content
  </TabsContent>

  <TabsContent value="settings">
    Settings content
  </TabsContent>

  <TabsContent value="billing">
    Billing content
  </TabsContent>
</Tabs>

<Tabs defaultValue="account" variant="line">
  ...
</Tabs>

<Tabs defaultValue="account" variant="pill">
  ...
</Tabs>`;

export const sizesCode = `<Tabs defaultValue="small" size="sm">
  <TabsList>
    <TabsTrigger value="small">
      Small
    </TabsTrigger>
    <TabsTrigger value="medium">
      Medium
    </TabsTrigger>
    <TabsTrigger value="large">
      Large
    </TabsTrigger>
  </TabsList>

  <TabsContent value="small">
    Small tabs content
  </TabsContent>

  <TabsContent value="medium">
    Medium tabs content
  </TabsContent>

  <TabsContent value="large">
    Large tabs content
  </TabsContent>
</Tabs>`;

export const disabledCode = `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">
      Overview
    </TabsTrigger>

    <TabsTrigger value="analytics">
      Analytics
    </TabsTrigger>

    <TabsTrigger value="settings" disabled>
      Settings
    </TabsTrigger>
  </TabsList>

  <TabsContent value="overview">
    Overview content
  </TabsContent>

  <TabsContent value="analytics">
    Analytics content
  </TabsContent>

  <TabsContent value="settings">
    Settings content
  </TabsContent>
</Tabs>`;

export const contentCode = `<Tabs defaultValue="profile" variant="line">
  <TabsList>
    <TabsTrigger value="profile">
      Profile
    </TabsTrigger>

    <TabsTrigger value="security">
      Security
    </TabsTrigger>

    <TabsTrigger value="notifications">
      Notifications
    </TabsTrigger>
  </TabsList>

  <TabsContent
    value="profile"
    className="rounded-lg border p-5"
  >
    <h3 className="font-semibold">
      Profile
    </h3>

    <p className="mt-2 text-sm text-gray-500">
      Update your personal information.
    </p>
  </TabsContent>

  <TabsContent
    value="security"
    className="rounded-lg border p-5"
  >
    <h3 className="font-semibold">
      Security
    </h3>

    <p className="mt-2 text-sm text-gray-500">
      Manage your password and security settings.
    </p>
  </TabsContent>

  <TabsContent
    value="notifications"
    className="rounded-lg border p-5"
  >
    <h3 className="font-semibold">
      Notifications
    </h3>

    <p className="mt-2 text-sm text-gray-500">
      Choose how you receive notifications.
    </p>
  </TabsContent>
</Tabs>`;

export const propsData = [
  {
    prop: "defaultValue",
    type: "string",
    default: "-",
    description: "The value of the tab that should be active initially.",
  },
  {
    prop: "variant",
    type: '"default" | "line" | "pill"',
    default: '"default"',
    description: "Controls the visual style of the tabs.",
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Controls the size of the tab list and triggers.",
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "The TabsList and TabsContent components.",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional classes applied to the Tabs container.",
  },
];

export const tabsTriggerPropsData = [
  {
    prop: "value",
    type: "string",
    default: "-",
    description: "Unique value used to identify the tab.",
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Content displayed inside the tab trigger.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Prevents the tab from being selected.",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional classes applied to the tab trigger.",
  },
];

export const tabsContentPropsData = [
  {
    prop: "value",
    type: "string",
    default: "-",
    description:
      "Value that determines when this content should be displayed.",
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Content rendered when the tab is active.",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional classes applied to the tab content.",
  },
];

export const features = [
  {
    title: "Multiple Variants",
    description:
      "Choose between default, line, and pill styles to match your interface.",
  },
  {
    title: "Responsive Sizes",
    description:
      "Use small, medium, or large tabs depending on the available space.",
  },
  {
    title: "Composable API",
    description:
      "Build flexible tab interfaces using Tabs, TabsList, TabsTrigger, and TabsContent.",
  },
  {
    title: "Active State",
    description:
      "Active tabs are automatically styled based on the selected variant.",
  },
  {
    title: "Disabled Tabs",
    description:
      "Disable individual tab triggers when an option is unavailable.",
  },
  {
    title: "Custom Content",
    description:
      "Add any React content inside TabsContent and customize it with className.",
  },
  {
    title: "Dark Mode",
    description:
      "Built-in Tailwind dark mode styles provide consistent appearance across themes.",
  },
];