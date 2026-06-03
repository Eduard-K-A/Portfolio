import { Github, ExternalLink, X } from "lucide-react";
import { Chip } from "./SectionLabel";

type Project = {
  title: string;
  year: string;
  type: string;
  desc: string;
  tags: string[];
  github?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Ely Sales Agent",
    year: "2026",
    type: "Hackathon",
    desc: "Desktop AI voice sales assistant for live calls. Built on a Cloudflare Worker with a cross-platform Electron shell. Top 10 Finalist at Agora-sponsored hackathon.",
    tags: ["TypeScript", "Electron", "Agora RTC", "Agora RTM", "Groq API", "SQLite"],
  },
  {
    title: "The-Vault",
    year: "2026",
    type: "Personal",
    desc: "Offline-first mobile POS for retail and multi-branch teams — auth, inventory, sales, receipts, analytics in one app.",
    tags: ["TypeScript", "React Native", "Supabase", "PowerSync", "Expo", "Zustand", "SQLite"],
  },
  {
    title: "TaskOverflow",
    year: "2026",
    type: "Personal",
    desc: "Minimalist desktop task manager with groups, subtasks, and deadlines. Local-first persistence.",
    tags: ["TypeScript", "Electron", "React 19", "SQLite"],
  },
{
    title: "Faith Hack Formation Act",
    year: "2026",
    type: "Animodev Team Project",
    desc: "Team project built under time pressure within DLSL AnimoDev. Rapid prototyping, team coordination, iterative development.",
    tags: ["TypeScript", "Next.js", "Supabase", "Team Project"],
    link: "https://faith-hack-formation-act.vercel.app/",
  },
  {
    title: "Faith Hack",
    year: "2026",
    type: "Animodev Team Project",
    desc: "A CLI-aesthetic web application for submitting Bug Reports and Debug Logs.",
    tags: ["TypeScript", "Next.js", "Supabase", "Team Project"],
    link: "https://faith-hack-frontend.vercel.app/",
  },
  {
    title: "CleanOps",
    year: "2025",
    type: "Personal",
    desc: "Full-stack cleaning service marketplace with PostGIS real-time geolocation, mock escrow, Supabase Realtime, and multi-role auth — no Express backend.",
    tags: ["Next.js 14", "TypeScript", "Supabase", "PostGIS", "Tailwind CSS", "Server Actions"],
    link: "https://clean-ops-alpha.vercel.app",
  },
  {
    title: "Flur Chat",
    year: "2025",
    type: "Personal",
    desc: "Real-time chat client with live messaging, a clean UI, and fast performance.",
    tags: ["React", "TypeScript", "Vite", "CSS"],
    link: "https://flur-chat-client.vercel.app",
  },
  {
    title: "Hotel Reservation System",
    year: "2024",
    type: "Academic",
    desc: "Full-stack capstone: database design, REST API, and a polished React UI.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://webdev-finals-frontend.vercel.app",
  },
];

export function Projects({
  filterTag,
  onClearFilter,
  onTagClick,
}: {
  filterTag?: string | null;
  onClearFilter?: () => void;
  onTagClick?: (tag: string) => void;
}) {
  const filtered = filterTag ? projects.filter((p) => p.tags.includes(filterTag)) : projects;

  return (
    <div className="flex flex-col">
      {filterTag && (
        <div className="mb-4 flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border-color)]">
          <span className="text-[var(--muted)]" style={{ fontSize: "0.75rem" }}>
            Filtered by{" "}
            <span className="font-mono text-[var(--fg)]" style={{ fontWeight: 500 }}>
              {filterTag}
            </span>{" "}
            · {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
          <button
            type="button"
            onClick={onClearFilter}
            className="flex items-center gap-1 text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
            style={{ fontSize: "0.75rem" }}
          >
            <X size={12} /> Clear
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-[var(--muted)] py-6" style={{ fontSize: "0.8125rem" }}>
          No projects use{" "}
          <span className="font-mono text-[var(--fg)]">{filterTag}</span> yet.
        </div>
      )}

      {filtered.map((p, i) => {
        const cardContent = (
          <>
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 600 }}>{p.title}</h3>
                <span
                  className="bg-[var(--bg)] border border-[var(--border-color)] px-2 py-0.5 rounded font-mono text-[var(--muted)]"
                  style={{ fontSize: "0.625rem" }}
                >
                  {p.type}
                </span>
              </div>
              <span className="font-mono text-[var(--muted)] shrink-0" style={{ fontSize: "0.75rem" }}>
                {p.year}
              </span>
            </div>
            <p className="text-[var(--muted)] mb-3 leading-relaxed" style={{ fontSize: "0.8125rem" }}>
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.tags.map((t) => (
                <Chip
                  key={t}
                  active={t === filterTag}
                  onClick={onTagClick ? () => onTagClick(t) : undefined}
                  title={`Filter projects by ${t}`}
                >
                  {t}
                </Chip>
              ))}
            </div>
            {(p.github || p.link) && (
              <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                  >
                    <Github size={14} />
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                    style={{ fontSize: "0.75rem" }}
                  >
                    <ExternalLink size={12} />
                    <span>Live</span>
                  </a>
                )}
              </div>
            )}
          </>
        );

        const cardClass =
          "group relative rounded-lg border border-[var(--border-color)] bg-[var(--surface)] p-4 transition-all duration-200 hover:border-[var(--fg)] hover:-translate-y-0.5";

        return (
          <div key={p.title} className={i !== 0 ? "mt-3" : ""}>
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className={`${cardClass} block`}
              >
                {cardContent}
              </a>
            ) : (
              <div className={cardClass}>{cardContent}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
