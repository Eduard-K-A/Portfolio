import { Sun, Moon } from "lucide-react";

export function Nav({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const links = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[var(--bg)]/80 border-b border-[var(--border-color)]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono" style={{ fontSize: "0.9375rem", fontWeight: 600 }}>
            EKA
          </span>
          <span className="hidden sm:inline text-[var(--muted)]" style={{ fontSize: "0.8125rem" }}>
            Eduard King Anterola
          </span>
        </div>
        <nav className="flex items-center gap-1 sm:gap-5">
          <div className="hidden sm:flex items-center gap-5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                style={{ fontSize: "0.8125rem" }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="ml-2 w-8 h-8 rounded border border-[var(--border-color)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
