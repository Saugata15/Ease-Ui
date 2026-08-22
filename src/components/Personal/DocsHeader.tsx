interface DocsHeaderProps {
  title: string;
  description: string;
  technologies?: string[];
}

const DocsHeader = ({
  title,
  description,
  technologies = [],
}: DocsHeaderProps) => {
  return (
    <header
      className="relative overflow-hidden rounded-3xl border p-7 md:p-10"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Decorative background */}
      <div
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-20"
        style={{
          backgroundColor: "var(--primary-color)",
        }}
      />

      <div className="relative space-y-5">
        {/* Category */}
        <span
          className="inline-flex rounded-full border px-3 py-1 text-sm font-medium"
          style={{
            color: "var(--primary-color)",
            borderColor: "var(--primary-color)",
            backgroundColor: "var(--bg-color)",
          }}
        >
          Components
        </span>

        {/* Title + Description */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h1>

          <p
            className="max-w-2xl text-lg"
            style={{
              color: "var(--muted-text-color)",
            }}
          >
            {description}
          </p>
        </div>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border px-3 py-1 text-sm"
                style={{
                  backgroundColor: "var(--bg-color)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-color)",
                }}
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default DocsHeader;