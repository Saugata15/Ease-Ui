import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/Tabs/Tabs";

import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";
import DocsApiReference from "@/components/Personal/DocsApiReference";
import DocsInstallation from "@/components/Personal/DocsInstallation";

import {
  basicUsageCode,
  variantsCode,
  sizesCode,
  disabledCode,
  contentCode,
  propsData,
  tabsTriggerPropsData,
  tabsContentPropsData,
  features,
} from "../utils/tabsData";

const TabsPage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 text-(--text-color)">
      {/* Hero */}
      <DocsHeader
        title="Tabs"
        description="A flexible tab component for organizing related content into interactive panels."
        technologies={["React", "Tailwind CSS", "Context API"]}
      />

      {/* Basic Usage */}
      <DocsDemoSection
        title="Basic Usage"
        description="Create interactive tab navigation using Tabs, TabsList, TabsTrigger, and TabsContent."
        code={basicUsageCode}
        contentClassName="w-full p-4 sm:p-8 overflow-x-auto"
      >
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent
            value="account"
            className="rounded-lg border border-gray-200 p-5 dark:border-gray-700"
          >
            <h3 className="font-semibold">Account</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage your account information and profile settings.
            </p>
          </TabsContent>

          <TabsContent
            value="settings"
            className="rounded-lg border border-gray-200 p-5 dark:border-gray-700"
          >
            <h3 className="font-semibold">Settings</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Configure your application preferences and settings.
            </p>
          </TabsContent>

          <TabsContent
            value="billing"
            className="rounded-lg border border-gray-200 p-5 dark:border-gray-700"
          >
            <h3 className="font-semibold">Billing</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage your billing information and subscription.
            </p>
          </TabsContent>
        </Tabs>
      </DocsDemoSection>

      {/* Variants */}
      <DocsDemoSection
        title="Variants"
        description="Choose between default, line, and pill styles depending on the visual hierarchy of your interface."
        code={variantsCode}
        contentClassName="flex min-h-64 w-full flex-col gap-10 p-4 sm:p-8 overflow-x-auto"
      >
        {/* Default */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-(--text-color)">Default</p>

          <Tabs defaultValue="account" variant="default">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Account information and profile settings.
              </p>
            </TabsContent>

            <TabsContent value="settings">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Application settings and preferences.
              </p>
            </TabsContent>

            <TabsContent value="billing">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Billing and subscription information.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Line */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-(--text-color)">Line</p>

          <Tabs defaultValue="account" variant="line">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Account information and profile settings.
              </p>
            </TabsContent>

            <TabsContent value="settings">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Application settings and preferences.
              </p>
            </TabsContent>

            <TabsContent value="billing">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Billing and subscription information.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Pill */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-(--text-color)">Pill</p>

          <Tabs defaultValue="account" variant="pill">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Account information and profile settings.
              </p>
            </TabsContent>

            <TabsContent value="settings">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Application settings and preferences.
              </p>
            </TabsContent>

            <TabsContent value="billing">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Billing and subscription information.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </DocsDemoSection>

      {/* Sizes */}
      <DocsDemoSection
        title="Sizes"
        description="Use different tab sizes to match the density and scale of your interface."
        code={sizesCode}
        contentClassName="flex min-h-48 w-full flex-wrap items-center justify-center gap-8 p-4 sm:p-8 overflow-x-auto"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-gray-500">Small</span>

          <Tabs defaultValue="overview" size="sm">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <span className="text-sm text-gray-500">Overview content</span>
            </TabsContent>

            <TabsContent value="activity">
              <span className="text-sm text-gray-500">Activity content</span>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-gray-500">Medium</span>

          <Tabs defaultValue="overview" size="md">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <span className="text-sm text-gray-500">Overview content</span>
            </TabsContent>

            <TabsContent value="activity">
              <span className="text-sm text-gray-500">Activity content</span>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-gray-500">Large</span>

          <Tabs defaultValue="overview" size="lg">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <span className="text-sm text-gray-500">Overview content</span>
            </TabsContent>

            <TabsContent value="activity">
              <span className="text-sm text-gray-500">Activity content</span>
            </TabsContent>
          </Tabs>
        </div>
      </DocsDemoSection>

      {/* Disabled */}
      <DocsDemoSection
        title="Disabled Tabs"
        description="Disable individual tab triggers when a section is unavailable or requires additional permissions."
        code={disabledCode}
        contentClassName="flex min-h-48 w-full items-center justify-center p-4 sm:p-8 overflow-x-auto"
      >
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings" disabled>
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="overview"
            className="rounded-lg border border-gray-200 p-5 dark:border-gray-700"
          >
            <h3 className="font-semibold">Overview</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              This tab is available and can be selected normally.
            </p>
          </TabsContent>

          <TabsContent
            value="analytics"
            className="rounded-lg border border-gray-200 p-5 dark:border-gray-700"
          >
            <h3 className="font-semibold">Analytics</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              View analytics and performance information.
            </p>
          </TabsContent>

          <TabsContent
            value="settings"
            className="rounded-lg border border-gray-200 p-5 dark:border-gray-700"
          >
            <h3 className="font-semibold">Settings</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              This content cannot be accessed while the tab is disabled.
            </p>
          </TabsContent>
        </Tabs>
      </DocsDemoSection>

      {/* Custom Content */}
      <DocsDemoSection
        title="Custom Content"
        description="TabsContent accepts any React content, allowing you to build rich tab panels."
        code={contentCode}
        contentClassName="w-full p-4 sm:p-8 overflow-x-auto"
      >
        <Tabs defaultValue="profile" variant="line">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent
            value="profile"
            className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50"
          >
            <div className="space-y-2">
              <h3 className="font-semibold">Profile</h3>

              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                Update your personal information, profile details, and
                preferences.
              </p>

              <button
                type="button"
                className="mt-3 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
              >
                Edit Profile
              </button>
            </div>
          </TabsContent>

          <TabsContent
            value="security"
            className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50"
          >
            <div className="space-y-2">
              <h3 className="font-semibold">Security</h3>

              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                Manage your password, authentication methods, and account
                security.
              </p>

              <button
                type="button"
                className="mt-3 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
              >
                Security Settings
              </button>
            </div>
          </TabsContent>

          <TabsContent
            value="notifications"
            className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50"
          >
            <div className="space-y-2">
              <h3 className="font-semibold">Notifications</h3>

              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                Choose which notifications you want to receive and how they
                should be delivered.
              </p>

              <button
                type="button"
                className="mt-3 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
              >
                Notification Preferences
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </DocsDemoSection>

      {/* Installation */}
      <DocsInstallation
        packageName="easeui-react"
        importCode={`import { Tabs , TabsList , TabsTrigger , TabsContent } from "easeui-react";`}
      />

      {/* Features */}
      <DocsFeatures
        title="Tabs Features"
        description="Everything you need to create flexible and interactive tabbed interfaces."
        features={features}
      />

      {/* API Reference - Tabs */}
      <DocsApiReference
        data={propsData}
        description="Available props for customizing the Tabs component."
      />

      {/* API Reference - TabsTrigger */}
      <DocsApiReference
        data={tabsTriggerPropsData}
        title="TabsTrigger API Reference"
        description="Available props for customizing individual tab triggers."
      />

      {/* API Reference - TabsContent */}
      <DocsApiReference
        data={tabsContentPropsData}
        title="TabsContent API Reference"
        description="Available props for customizing tab content panels."
      />
    </div>
  );
};

export default TabsPage;
