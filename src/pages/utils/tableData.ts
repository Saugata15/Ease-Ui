export const tablePropsData = [
  {
    prop: "variant",
    type: '"default" | "bordered" | "striped" | "glass"',
    default: '"default"',
    description: "Controls the visual style of the table.",
  },
  {
    prop: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "Controls the spacing and size of table cells.",
  },
  {
    prop: "hover",
    type: "boolean",
    default: "true",
    description:
      "Controls whether table rows display a hover background effect.",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description:
      "Additional Tailwind CSS classes applied to the table.",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    default: "—",
    description:
      "Table content including headers, rows, cells, body, and footer.",
  },
];

export const tableFeatures = [
  {
    title: "Compound Components",
    description:
      "Build tables using Table, TableHeader, TableBody, TableRow, TableHead, and TableCell components.",
  },
  {
    title: "Multiple Variants",
    description:
      "Choose from default, bordered, striped, and glass styles.",
  },
  {
    title: "Responsive",
    description:
      "Tables automatically support horizontal scrolling on smaller screens.",
  },
  {
    title: "Flexible Sizes",
    description:
      "Use small, default, or large sizes to control table density.",
  },
  {
    title: "Customizable",
    description:
      "Customize individual table elements using className.",
  },
  {
    title: "Accessible Structure",
    description:
      "Uses semantic HTML table elements for a more accessible structure.",
  },
];

export const basicUsageCode = `
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "easeui-react";

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
`;

export const variantsCode = `
<Table variant="default">
  ...
</Table>

<Table variant="bordered">
  ...
</Table>

<Table variant="striped">
  ...
</Table>

<Table variant="glass">
  ...
</Table>
`;

export const sizesCode = `
<Table size="sm">
  ...
</Table>

<Table size="default">
  ...
</Table>

<Table size="lg">
  ...
</Table>
`;

export const captionCode = `
<Table>
  <TableCaption>
    A list of recently registered users.
  </TableCaption>

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
  </TableBody>
</Table>
`;

export const footerCode = `
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
`;