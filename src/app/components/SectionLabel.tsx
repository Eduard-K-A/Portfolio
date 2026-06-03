export function SectionLabel({ children, id }: { children: string; id?: string }) {
  return (
    <div
      id={id}
      className="text-[var(--muted)] font-mono uppercase tracking-[0.15em] mb-5"
      style={{ fontSize: "0.6875rem" }}
    >
      {children}
    </div>
  );
}

export function Chip({
  children,
  dot,
  onClick,
  active,
  title,
}: {
  children: React.ReactNode;
  dot?: string;
  onClick?: () => void;
  active?: boolean;
  title?: string;
}) {
  const interactive = !!onClick;
  const base =
    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono transition-all duration-150 select-none";
  const visual = active
    ? "bg-[var(--fg)] text-[var(--bg)] border border-[var(--fg)]"
    : "bg-[var(--surface)] border border-[var(--border-color)] text-[var(--fg)]";
  const hover = interactive
    ? "cursor-pointer hover:-translate-y-0.5 hover:border-[var(--fg)] active:translate-y-0"
    : "";

  const content = (
    <>
      {dot && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot }} />}
      {children}
    </>
  );

  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        title={title}
        data-cursor="pointer"
        className={`${base} ${visual} ${hover}`}
        style={{ fontSize: "0.6875rem" }}
      >
        {content}
      </button>
    );
  }

  return (
    <span className={`${base} ${visual}`} style={{ fontSize: "0.6875rem" }}>
      {content}
    </span>
  );
}
