import { Input } from "@/components";
import {
  AnimatedInput,
  FloatingLabelInput,
  InputWithIcon,
} from "@/components/Input";
import { PasswordInput } from "@/components/Input/PasswordInput";
import { NumberInput } from "@/components/Input/NumberInput";

import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";
import DocsApiReference from "@/components/Personal/DocsApiReference";
import DocsInstallation from "@/components/Personal/DocsInstallation";

import { Search } from "lucide-react";

import {
  basicUsageCode,
  specializedInputsCode,
  statesCode,
  sizesCode,
  propsData,
  features,
} from "../utils/inputData";

const InputPage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-14 text-(--text-color)">
      {/* Header */}
      <DocsHeader
        title="Input"
        description="A flexible input component for forms with multiple sizes, specialized variations, labels, icons, and interactive behaviors."
        technologies={["React", "Tailwind CSS"]}
      />

      {/* Basic Usage */}
      <DocsDemoSection
        title="Basic Usage"
        description="Use the Input component for common form fields and customize it with labels, sizes, types, and native input properties."
        code={basicUsageCode}
        contentClassName="flex w-full flex-col gap-5 p-5 sm:p-8"
      >
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
      </DocsDemoSection>

      {/* Sizes */}
      <DocsDemoSection
        title="Sizes"
        description="Choose between small, medium, and large inputs to match different form layouts and content density."
        code={sizesCode}
        contentClassName="flex w-full flex-col gap-5 p-5 sm:p-8"
      >
        <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-(--muted-text-color)">
            Small
          </p>

          <Input
            label="Small Input"
            placeholder="Small input"
            size="sm"
          />
        </div>

        <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-(--muted-text-color)">
            Medium
          </p>

          <Input
            label="Medium Input"
            placeholder="Medium input"
            size="md"
          />
        </div>

        <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-(--muted-text-color)">
            Large
          </p>

          <Input
            label="Large Input"
            placeholder="Large input"
            size="lg"
          />
        </div>
      </DocsDemoSection>

      {/* Specialized Inputs */}
      <DocsDemoSection
        title="Specialized Inputs"
        description="Use specialized input components for common interaction patterns such as passwords, search, floating labels, and numeric values."
        code={specializedInputsCode}
        contentClassName="flex w-full flex-col gap-5 p-5 sm:p-8"
      >
        <div className="grid w-full gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5">
            <AnimatedInput
              label="Animated"
              placeholder="Focus me"
            />
          </div>

          <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5">
            <FloatingLabelInput
              label="Floating Label"
              placeholder=""
            />
          </div>

          <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5">
            <InputWithIcon
              label="Search"
              icon={<Search size={18} />}
              placeholder="Search..."
            />
          </div>

          <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5">
            <PasswordInput label="Password" />
          </div>

          <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5 md:col-span-2">
            <NumberInput
              label="Age"
              onChange={(value) => console.log(value)}
            />
          </div>
        </div>
      </DocsDemoSection>

      {/* States */}
      <DocsDemoSection
        title="States"
        description="Handle common form states such as default, disabled, required, and validation feedback."
        code={statesCode}
        contentClassName="flex w-full flex-col gap-5 p-5 sm:p-8"
      >
        <div className="grid w-full gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5">
            <Input
              label="Default"
              placeholder="Default input"
            />
          </div>

          <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5">
            <Input
              label="Disabled"
              placeholder="Disabled input"
              disabled
            />
          </div>

          <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5">
            <Input
              label="Required"
              placeholder="Required input"
              required
            />
          </div>

          <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5">
            <Input
              label="With Hint"
              placeholder="Enter your username"
              hint="Your username must be unique."
            />
          </div>

          <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-4 sm:p-5 md:col-span-2">
            <Input
              label="Error"
              placeholder="Invalid input"
              error="Please enter a valid value."
            />
          </div>
        </div>
      </DocsDemoSection>

      {/* Installation */}
      <DocsInstallation
        packageName="easeui-react"
        importCode={`import { Input } from "easeui-react";`}
      />

      {/* Features */}
      <DocsFeatures
        title="Input Features"
        description="Everything you need to build flexible and user-friendly form inputs."
        features={features}
      />

      {/* API Reference */}
      <DocsApiReference
        data={propsData}
        description="Available props for customizing the Input component."
      />
    </div>
  );
};

export default InputPage;