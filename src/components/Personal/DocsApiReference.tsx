import PropsTable from "./PropsTable";

interface DocsApiReferenceProps {
  data: any[];
  description?: string;
  title?: string;
}

const DocsApiReference = ({
  data,
  title = "API Reference",
  description = "Available props for customizing the component.",
}: DocsApiReferenceProps) => {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="text-(--muted-text-color)">
          {description}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-(--border-color) bg-(--card-bg)">
        <PropsTable data={data} />
      </div>
    </section>
  );
};

export default DocsApiReference;