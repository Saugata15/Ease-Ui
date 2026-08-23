import { useState } from "react";

import { Toast } from "@/components/Toast/Toast";
import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";
import DocsApiReference from "@/components/Personal/DocsApiReference";
import DocsInstallation from "@/components/Personal/DocsInstallation";

import {
  basicUsageCode,
  variantsCode,
  sizesCode,
  closeButtonCode,
  autoDismissCode,
  controlledCode,
  propsData,
  features,
} from "../utils/toastData";

const ToastPage = () => {
  const [open, setOpen] = useState(true);
  const [controlledOpen, setControlledOpen] = useState(true);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 text-(--text-color)">
      {/* Hero */}
      <DocsHeader
        title="Toast"
        description="A compact notification component for displaying feedback, status updates, and short-lived messages."
        technologies={["React", "Tailwind CSS", "CVA"]}
      />

      {/* Basic Usage */}
      <DocsDemoSection
        title="Basic Usage"
        description="Use the Toast component to display a title and optional description."
        code={basicUsageCode}
        contentClassName="flex min-h-48 w-full items-center justify-center p-4 sm:p-8"
      >
        <Toast
          title="Success"
          description="Your changes have been saved."
          duration={0}
        />
      </DocsDemoSection>

      {/* Variants */}
      <DocsDemoSection
        title="Variants"
        description="Choose a semantic variant to communicate different notification states."
        code={variantsCode}
        contentClassName="grid min-h-48 w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:p-8"
      >
        <Toast
          variant="default"
          title="Default"
          description="This is a default notification."
          duration={0}
        />

        <Toast
          variant="primary"
          title="Primary"
          description="This is a primary notification."
          duration={0}
        />

        <Toast
          variant="success"
          title="Success"
          description="Your changes were saved successfully."
          duration={0}
        />

        <Toast
          variant="warning"
          title="Warning"
          description="Please review your information."
          duration={0}
        />

        <Toast
          variant="danger"
          title="Error"
          description="Something went wrong."
          duration={0}
        />

        <Toast
          variant="info"
          title="Information"
          description="Your account has been updated."
          duration={0}
        />
      </DocsDemoSection>

      {/* Sizes */}
      <DocsDemoSection
        title="Sizes"
        description="Use different sizes depending on the amount of content and available space."
        code={sizesCode}
        contentClassName="flex min-h-48 w-full flex-col items-center justify-center gap-4 p-4 sm:p-8"
      >
        <Toast
          size="sm"
          title="Small"
          description="Small toast notification."
          duration={0}
        />

        <Toast
          size="default"
          title="Default"
          description="Default toast notification."
          duration={0}
        />

        <Toast
          size="lg"
          title="Large"
          description="Large toast notification."
          duration={0}
        />
      </DocsDemoSection>

      {/* Close Button */}
      <DocsDemoSection
        title="Close Button"
        description="Dismiss a toast manually using the built-in close button."
        code={closeButtonCode}
        contentClassName="flex min-h-48 w-full flex-col items-center justify-center gap-4 p-4 sm:p-8"
      >
        {open ? (
          <Toast
            open={open}
            onClose={() => setOpen(false)}
            variant="success"
            title="Success"
            description="Profile updated successfully."
            duration={0}
          />
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Show Toast
          </button>
        )}
      </DocsDemoSection>

      {/* Auto Dismiss */}
      <DocsDemoSection
        title="Auto Dismiss"
        description="Automatically close the toast after a specified duration."
        code={autoDismissCode}
        contentClassName="flex min-h-48 w-full items-center justify-center p-4 sm:p-8"
      >
        <Toast
          title="Saved"
          description="This toast will close automatically."
          duration={3000}
          onClose={() => undefined}
        />
      </DocsDemoSection>

      {/* Controlled */}
      <DocsDemoSection
        title="Controlled"
        description="Control the visibility of a toast using React state and the open and onClose props."
        code={controlledCode}
        contentClassName="flex min-h-48 w-full flex-col items-center justify-center gap-4 p-4 sm:p-8"
      >
        {controlledOpen ? (
          <Toast
            open={controlledOpen}
            onClose={() => setControlledOpen(false)}
            variant="info"
            title="Profile Updated"
            description="Your profile was updated successfully."
            duration={0}
          />
        ) : (
          <button
            type="button"
            onClick={() => setControlledOpen(true)}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Show Toast
          </button>
        )}
      </DocsDemoSection>

      {/* Installation */}
      <DocsInstallation
        packageName="easeui-react"
        importCode={`import { Toast } from "easeui-react";`}
      />

      {/* Features */}
      <DocsFeatures
        title="Toast Features"
        description="Everything you need to provide clear and useful feedback to users."
        features={features}
      />

      {/* API Reference */}
      <DocsApiReference
        data={propsData}
        description="Available props for customizing the Toast component."
      />
    </div>
  );
};

export default ToastPage;
