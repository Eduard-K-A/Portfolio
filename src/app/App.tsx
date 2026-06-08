import { useEffect, useRef, useState } from "react";
import { Nav } from "./components/Nav";
import { Sidebar } from "./components/Sidebar";
import { SectionLabel, Chip } from "./components/SectionLabel";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { CharacterReferences } from "./components/CharacterReferences";
import { MouseFollower } from "./components/MouseFollower";

const themeVars = {
  light: {
    "--bg": "#FFFFFF",
    "--surface": "#F4F4F5",
    "--fg": "#09090B",
    "--muted": "#71717A",
    "--border-color": "#E4E4E7",
    "--accent": "#18181B",
  },
  dark: {
    "--bg": "#09090B",
    "--surface": "#18181B",
    "--fg": "#FAFAFA",
    "--muted": "#A1A1AA",
    "--border-color": "#27272A",
    "--accent": "#FFFFFF",
  },
} as const;

const stack = {
  Frontend: ["JavaScript", "TypeScript", "React", "Next.js 14", "Vite", "Tailwind CSS", "HTML5", "Shadcn/UI"],
  "Backend & Database": ["Node.js", "Express.js", "MongoDB", "Supabase", "Firebase", "PostgreSQL", "PostGIS", "SQLite", "REST APIs", "JWT Auth", "Zustand"],
  "Data Science / ML": ["Python", "R", "Pandas", "Statistical Analysis", "Hugging Face", "MLOps", "LLMOps"],
  "Mobile & Tools": ["React Native", "Expo", "Git", "GitHub Actions", "Vercel", "Render", "Figma", "PowerSync"],
};

const dotColor: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  React: "#61DAFB",
  "Next.js 14": "#A1A1AA",
  Vite: "#646CFF",
  "Tailwind CSS": "#38BDF8",
  HTML5: "#E34F26",
  "Shadcn/UI": "#A1A1AA",
  "Node.js": "#3C873A",
  "Express.js": "#A1A1AA",
  MongoDB: "#47A248",
  Supabase: "#3ECF8E",
  Firebase: "#FFCA28",
  PostgreSQL: "#336791",
  PostGIS: "#1F6FEB",
  SQLite: "#003B57",
  "REST APIs": "#A1A1AA",
  "JWT Auth": "#D63AFF",
  Zustand: "#A1A1AA",
  Python: "#3776AB",
  R: "#276DC3",
  Pandas: "#150458",
  "Statistical Analysis": "#A1A1AA",
  "Hugging Face": "#FFD21E",
  MLOps: "#A1A1AA",
  LLMOps: "#A1A1AA",
  "React Native": "#61DAFB",
  Expo: "#A1A1AA",
  Git: "#F05032",
  "GitHub Actions": "#2088FF",
  Vercel: "#A1A1AA",
  Render: "#46E3B7",
  Figma: "#F24E1E",
  PowerSync: "#7C3AED",
};

export default function App() {
  const [dark, setDark] = useState(true);
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vars = dark ? themeVars.dark : themeVars.light;
    Object.entries(vars).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
    document.documentElement.classList.toggle("dark", dark);
    document.body.style.backgroundColor = vars["--bg"];
    document.body.style.color = vars["--fg"];
  }, [dark]);

  useEffect(() => {
    const noCursor = !matchMedia("(hover: none)").matches;
    if (noCursor) {
      document.documentElement.classList.add("custom-cursor");
    }
    return () => {
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  const handleTagClick = (tag: string) => {
    setFilterTag((current) => (current === tag ? null : tag));
    requestAnimationFrame(() => {
      projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}>
      <MouseFollower />
      <div className="relative z-10">
        <Nav dark={dark} setDark={setDark} />

        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 pt-18 pb-10 lg:pt-20 lg:pb-16">
          <div className="flex flex-col gap-10 lg:block lg:pl-[380px]">
            <Sidebar />

            <main className="flex-1 min-w-0 max-w-[680px]">
              {/* ABOUT */}
              <section className="mb-14">
                <SectionLabel id="about">About</SectionLabel>
                <p className="leading-relaxed mb-5" style={{ fontSize: "0.9375rem" }}>
                  Computer Science student at <span style={{ fontWeight: 500 }}>De La Salle Lipa</span> building
                  full-stack web, mobile, and desktop applications. Back-End Developer Head at the AWS Learning Club.
                  Formerly DevOps Head of AnimoDev. Top 10 Finalist at an Agora-sponsored hackathon with an AI-powered
                  real-time voice sales assistant. Currently deepening expertise in Python, R, machine learning, and
                  LLMOps — 51+ hours of structured DataCamp learning and counting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Chip>🏆 Aspiring AI/ML Engineer</Chip>
                  <Chip>☁ AWS Learning Club Head</Chip>
                  <Chip>📚 51+ hrs ML Coursework</Chip>
                </div>
              </section>

              {/* STACK */}
              <section className="mb-14">
                <SectionLabel id="stack">Stack</SectionLabel>
                <div className="flex flex-col gap-5">
                  {Object.entries(stack).map(([category, items]) => (
                    <div key={category}>
                      <div className="text-[var(--muted)] mb-2" style={{ fontSize: "0.75rem", fontWeight: 500 }}>
                        {category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((t) => (
                          <Chip
                            key={t}
                            dot={dotColor[t] || "#A1A1AA"}
                            active={filterTag === t}
                            onClick={() => handleTagClick(t)}
                            title={`Show projects using ${t}`}
                          >
                            {t}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROJECTS */}
              <section className="mb-14" ref={projectsRef}>
                <SectionLabel id="projects">Projects</SectionLabel>
                <Projects
                  filterTag={filterTag}
                  onClearFilter={() => setFilterTag(null)}
                  onTagClick={handleTagClick}
                />
              </section>

              {/* EXPERIENCE */}
              <section className="mb-14">
                <SectionLabel id="experience">Experience & Leadership</SectionLabel>
                <div className="relative pl-5 border-l border-[var(--border-color)] flex flex-col gap-7">
                  <div className="relative">
                    <span className="absolute -left-[23px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <h3 style={{ fontSize: "0.9375rem", fontWeight: 600 }}>Back-End Developer Head</h3>
                      <span className="font-mono text-[var(--muted)]" style={{ fontSize: "0.6875rem" }}>
                        May 2026 – Present
                      </span>
                    </div>
                    <div className="text-[var(--muted)] mb-2" style={{ fontSize: "0.8125rem" }}>
                      AWS Learning Club · De La Salle Lipa
                    </div>
                    <p className="text-[var(--muted)] leading-relaxed" style={{ fontSize: "0.8125rem" }}>
                      Leading backend system design and cloud-native development using AWS. Mentoring members in
                      backend architecture, APIs, and databases, and promoting best practices in scalable,
                      maintainable, cloud-first engineering.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[23px] top-1.5 w-2 h-2 rounded-full bg-[var(--muted)]" />
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <h3 style={{ fontSize: "0.9375rem", fontWeight: 600 }}>DevOps Head</h3>
                      <span className="font-mono text-[var(--muted)]" style={{ fontSize: "0.6875rem" }}>
                        Aug 2025 – May 2026
                      </span>
                    </div>
                    <div className="text-[var(--muted)] mb-2" style={{ fontSize: "0.8125rem" }}>
                      DLSL AnimoDev · De La Salle Lipa
                    </div>
                    <p className="text-[var(--muted)] leading-relaxed" style={{ fontSize: "0.8125rem" }}>
                      Managed deployment pipelines and GitHub Workflows for org-wide projects. Collaborated on web
                      and software builds under tight deadlines while contributing to a culture of technical
                      excellence.
                    </p>
                  </div>
                </div>
              </section>

              {/* EDUCATION */}
              <section className="mb-14">
                <SectionLabel id="education">Education</SectionLabel>
                <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 600 }}>
                    B.S. in Computer Science
                  </h3>
                  <span className="font-mono text-[var(--muted)]" style={{ fontSize: "0.6875rem" }}>
                    In Progress
                  </span>
                </div>
                <div className="text-[var(--muted)] mb-2" style={{ fontSize: "0.8125rem" }}>
                  De La Salle Lipa · Lipa City, Philippines
                </div>
                <p className="text-[var(--muted)] leading-relaxed" style={{ fontSize: "0.8125rem" }}>
                  Coursework: Data Structures, Algorithms, OOP, Web & Mobile Development, Artificial Intelligence,
                  Machine Learning, Database Systems.
                </p>
              </section>

              {/* CERTIFICATIONS */}
              <section className="mb-14">
                <SectionLabel id="certifications">Certifications</SectionLabel>
                <Certifications />
              </section>

              {/* CHARACTER REFERENCES */}
              <section className="mb-14">
                <SectionLabel id="references">Character References</SectionLabel>
                <CharacterReferences />
              </section>

              {/* CTA */}
              <section className="mb-10">
                <SectionLabel>What I'm Looking For</SectionLabel>
                <div
                  className="rounded-lg border border-[var(--border-color)] bg-[var(--surface)] p-5 border-l-[4px]"
                  style={{ borderLeftColor: "var(--accent)" }}
                >
                  <p className="mb-1" style={{ fontSize: "0.875rem" }}>
                    <span style={{ fontWeight: 600 }}>Open to:</span>{" "}
                    <span className="text-[var(--muted)]">Internships · Freelance · Entry-level · Remote</span>
                  </p>
                  <p className="mb-4" style={{ fontSize: "0.875rem" }}>
                    <span style={{ fontWeight: 600 }}>Focus areas:</span>{" "}
                    <span className="text-[var(--muted)]">Full-Stack Web · Full-Stack Mobile · AI / ML Engineering</span>
                  </p>
                  <a
                    href="mailto:eduardkinganterola@gmail.com"
                    className="inline-flex items-center gap-1 hover:underline"
                    style={{ fontSize: "0.875rem", fontWeight: 500 }}
                  >
                    Get in touch → eduardkinganterola@gmail.com
                  </a>
                </div>
              </section>
            </main>
          </div>
        </div>

        <footer className="mt-10 pt-6 border-t border-[var(--border-color)] flex items-center justify-between text-[var(--muted)]" style={{ fontSize: "0.75rem" }}>
          <span>Built by Eduard King Anterola</span>
          <span className="flex items-center gap-3">
            <a href="https://github.com/Eduard-K-A" target="_blank" rel="noreferrer" className="hover:text-[var(--fg)] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/eduard-king-anterola" target="_blank" rel="noreferrer" className="hover:text-[var(--fg)] transition-colors">LinkedIn</a>
            <span>© 2026</span>
          </span>
        </footer>
      </div>
    </div>
  );
}
