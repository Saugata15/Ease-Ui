import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const tableVariants = cva("w-full caption-bottom text-sm border-collapse", {
  variants: {
    variant: {
      default: "",
      bordered: "border border-border",
      striped: "",
      glass:
        "rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10",
    },

    size: {
      sm: "[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2",
      default: "[&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3",
      lg: "[&_th]:px-5 [&_th]:py-4 [&_td]:px-5 [&_td]:py-4",
    },

    hover: {
      true: "[&_tbody_tr]:transition-colors [&_tbody_tr:hover]:bg-muted/50",
      false: "",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
    hover: true,
  },
});

interface TableProps
  extends
    React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant, size, hover, ...props }, ref) => {
    return (
      <div className="relative w-full overflow-x-auto">
        <table
          ref={ref}
          className={cn(tableVariants({ variant, size, hover }), className)}
          {...props}
        />
      </div>
    );
  },
);

Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return (
    <thead
      ref={ref}
      className={cn("border-b bg-muted/50 [&_tr]:border-b", className)}
      {...props}
    />
  );
});

TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return (
    <tbody
      ref={ref}
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
});

TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return (
    <tfoot
      ref={ref}
      className={cn("border-t bg-muted/50 font-medium", className)}
      {...props}
    />
  );
});

TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
  return (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors data-[state=selected]:bg-muted",
        className,
      )}
      {...props}
    />
  );
});

TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 text-left align-middle font-semibold text-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));

TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "align-middle text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));

TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));

TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
};
