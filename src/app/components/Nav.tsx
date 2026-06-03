import { Sun, Moon } from "lucide-react";

export function Nav({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const cvUrl = new URL("../../imports/Eduard_King_Anterola_CV.pdf", import.meta.url).href;
  const links = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[var(--bg)]/88 border-b border-[var(--border-color)]">
      <div
        className="max-w-[1100px] mx-auto px-6 lg:px-10 h-12 flex items-center justify-between"
        style={{
          boxShadow: dark
            ? "0 10px 30px rgba(0, 0, 0, 0.24)"
            : "0 10px 30px rgba(9, 9, 11, 0.08)",
        }}
      >
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
          <a
            href={cvUrl}
            download="Eduard_King_Anterola_CV.pdf"
            data-cursor="pointer"
            className="hidden sm:inline-flex items-center justify-center rounded-md border border-[var(--border-color)] px-3 py-1.5 text-[var(--fg)] hover:bg-[var(--surface)] transition-colors"
            style={{ fontSize: "0.75rem", fontWeight: 500 }}
          >
            Download CV
          </a>
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
