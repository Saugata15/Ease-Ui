import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/Table/Table";

import {
  tablePropsData,
  tableFeatures,
  footerCode,
  captionCode,
  sizesCode,
  variantsCode,
  basicUsageCode,
} from "../utils/tableData";
import DocsInstallation from "@/components/Personal/DocsInstallation";
import PropsTable from "@/components/Personal/PropsTable";
import DocsHeader from "@/components/Personal/DocsHeader";
import DocsFeatures from "@/components/Personal/DocsFeatures";
import DocsDemoSection from "@/components/Personal/DocsDemoSection";

const TablePage = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 text-(--text-color)">
      <DocsHeader
        title="Table"
        description="A flexible and responsive table component for displaying structured data with customizable styles, sizes, and compound components."
        technologies={["React", "Tailwind CSS", "CVA"]}
      />

      {/* Usage */}
      <DocsDemoSection
        title="Usage"
        description="Compose a table using Table, TableHeader, TableBody, TableRow, TableHead, and TableCell components."
        code={basicUsageCode}
        contentClassName="p-6 overflow-x-auto"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Saugata Das</TableCell>
              <TableCell>saugata@example.com</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>Designer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Sarah Smith</TableCell>
              <TableCell>sarah@example.com</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DocsDemoSection>

      {/* Variants */}
      <DocsDemoSection
        title="Variants"
        description="Choose a visual variant to match the style of your interface."
        code={variantsCode}
        contentClassName="space-y-8 p-6"
      >
        <div>
          <p className="mb-3 text-sm font-medium">Default</p>

          <Table variant="default">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Keyboard</TableCell>
                <TableCell>Accessories</TableCell>
                <TableCell>$80</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Monitor</TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>$250</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Bordered</p>

          <Table variant="bordered">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Keyboard</TableCell>
                <TableCell>Accessories</TableCell>
                <TableCell>$80</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Monitor</TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>$250</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Striped</p>

          <Table variant="striped">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Keyboard</TableCell>
                <TableCell>Accessories</TableCell>
                <TableCell>$80</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Monitor</TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>$250</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Glass</p>

          <Table variant="glass">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Keyboard</TableCell>
                <TableCell>Accessories</TableCell>
                <TableCell>$80</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Monitor</TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>$250</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DocsDemoSection>

      {/* Sizes */}
      <DocsDemoSection
        title="Sizes"
        description="Adjust the density of your table using the available size options."
        code={sizesCode}
        contentClassName="space-y-8 p-6"
      >
        <div>
          <p className="mb-3 text-sm font-medium">Small</p>

          <Table size="sm">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Saugata Das</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>Designer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Large</p>

          <Table size="lg">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Saugata Das</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>Designer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DocsDemoSection>

      {/* Caption */}
      <DocsDemoSection
        title="Caption"
        description="Add additional context to a table using TableCaption."
        code={captionCode}
        contentClassName="p-6 overflow-x-auto"
      >
        <Table>
          <TableCaption>A list of recently registered users.</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Saugata Das</TableCell>
              <TableCell>saugata@example.com</TableCell>
              <TableCell>Developer</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>Designer</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DocsDemoSection>

      {/* Footer */}
      <DocsDemoSection
        title="Footer"
        description="Use TableFooter to display summary information."
        code={footerCode}
        contentClassName="p-6 overflow-x-auto"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Keyboard</TableCell>
              <TableCell>$80</TableCell>
              <TableCell>2</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Mouse</TableCell>
              <TableCell>$40</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>$200</TableCell>
              <TableCell>3</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </DocsDemoSection>

      {/* Installations */}
      <DocsInstallation
        packageName="easeui-react"
        importCode={`import {Table, TableHeader, TableBody, TableRow, TableHead, TableCell} from "easeui-react";`}
      />

      {/* Features */}
      <DocsFeatures features={tableFeatures} />

      {/* API Reference */}
      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">API Reference</h2>

          <p className="text-(--muted-text-color)">
            Available props for customizing the Table component.
          </p>
        </div>

        <div className="rounded-2xl border overflow-hidden bg-(--card-bg) border-(--border-color)">
          <PropsTable data={tablePropsData} />
        </div>
      </section>
    </div>
  );
};

export default TablePage;
