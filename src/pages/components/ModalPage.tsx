import { useState } from "react";

import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";

import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";
import DocsApiReference from "@/components/Personal/DocsApiReference";

import {
  lightModalCode,
  darkModalCode,
  outlineModalCode,
  propsData,
  features,
} from "../utils/modalData";
import DocsInstallation from "@/components/Personal/DocsInstallation";

const ModalPage = () => {
  const [lightModal, setLightModal] = useState(false);
  const [darkModal, setDarkModal] = useState(false);
  const [outlineModal, setOutlineModal] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <DocsHeader
        title="Modal"
        description="A flexible overlay component for displaying dialogs, forms, confirmations, and other focused content."
        technologies={["React", "Tailwind CSS"]}
      />

      {/* Usage */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Usage</h2>

          <p className="text-sm md:text-base text-(--muted-text-color)">
            Click the buttons below to preview the different Modal variants.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Light Modal */}
          <DocsDemoSection
            title="Light"
            description="Clean light modal for standard content."
            code={lightModalCode}
            contentClassName="flex min-h-56 items-center justify-center p-8"
          >
            <Button variant="primary" onClick={() => setLightModal(true)}>
              Light Modal
            </Button>

            <Modal
              variant="light"
              size="sm"
              isOpen={lightModal}
              onClose={() => setLightModal(false)}
            >
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">Light Modal</h2>

                <p>This is an example of a light modal.</p>
              </div>
            </Modal>
          </DocsDemoSection>

          {/* Dark Modal */}
          <DocsDemoSection
            title="Dark"
            description="Dark modal for darker interfaces."
            code={darkModalCode}
            contentClassName="flex min-h-56 items-center justify-center p-8"
          >
            <Button variant="dark" onClick={() => setDarkModal(true)}>
              Dark Modal
            </Button>

            <Modal
              variant="dark"
              size="lg"
              isOpen={darkModal}
              onClose={() => setDarkModal(false)}
            >
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">Dark Modal</h2>

                <p>This is an example of a dark modal.</p>
              </div>
            </Modal>
          </DocsDemoSection>

          {/* Outline Modal */}
          <DocsDemoSection
            title="Outline"
            description="Subtle bordered modal for minimal interfaces."
            code={outlineModalCode}
            contentClassName="flex min-h-56 items-center justify-center p-8"
          >
            <Button variant="outline" onClick={() => setOutlineModal(true)}>
              Outline Modal
            </Button>

            <Modal
              variant="outline"
              size="sm"
              isOpen={outlineModal}
              onClose={() => setOutlineModal(false)}
            >
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">Outline Modal</h2>

                <p>This is an example of an outline modal.</p>
              </div>
            </Modal>
          </DocsDemoSection>
        </div>
      </section>

      {/* Installation */}
      <DocsInstallation
        packageName="ease-ui"
        importCode={`import { Modal } from "ease-ui";`}
      />

      {/* Features */}
      <DocsFeatures
        title="Modal Features"
        description="Everything you need to create flexible and accessible modal experiences."
        features={features}
      />

      {/* API Reference */}
      <DocsApiReference
        data={propsData}
        description="Available props for customizing the Modal component."
      />
    </div>
  );
};

export default ModalPage;
