interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-(--border-color) bg-(--bg-box-light) shadow-sm">
      <table className="w-full min-w-200 border-collapse">
        {/* Header */}
        <thead>
          <tr className="border-b border-(--border-color) bg-(--bg-box)">
            <th className="whitespace-nowrap px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-(--muted-text)">
              Prop
            </th>

            <th className="whitespace-nowrap px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-(--muted-text)">
              Type
            </th>

            <th className="whitespace-nowrap px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-(--muted-text)">
              Default
            </th>

            <th className="whitespace-nowrap px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-(--muted-text)">
              Description
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((row, index) => (
            <tr
              key={`${row.prop}-${index}`}
              className="border-b border-(--border-subtle) last:border-b-0 transition-colors hover:bg-(--hover-bg)"
            >
              {/* Prop */}
              <td className="px-5 py-4 align-top">
                <code className="rounded-md bg-(--primary-soft) px-2 py-1 font-mono text-xs font-medium text-(--primary-color)">
                  {row.prop}
                </code>
              </td>

              {/* Type */}
              <td className="px-5 py-4 align-top">
                <code className="font-mono text-xs leading-6 text-(--text-color)">
                  {row.type}
                </code>
              </td>

              {/* Default */}
              <td className="px-5 py-4 align-top">
                <code className="rounded-md bg-(--bg-box) px-2 py-1 font-mono text-xs text-(--text-color)">
                  {row.default}
                </code>
              </td>

              {/* Description */}
              <td className="max-w-md px-5 py-4 align-top text-sm leading-6 text-(--muted-text)">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;