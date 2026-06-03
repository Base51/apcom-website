type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  size?: "lg" | "xl";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  as = "h2",
  size = "lg",
}: PageHeaderProps) {
  const Heading = as;
  const titleClass =
    size === "xl"
      ? "text-4xl font-semibold tracking-tight md:text-5xl"
      : "text-2xl font-semibold tracking-tight md:text-3xl";

  return (
    <div className="flex flex-col gap-3">
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </span>
      ) : null}
      <Heading className={titleClass}>{title}</Heading>
      {description ? (
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
