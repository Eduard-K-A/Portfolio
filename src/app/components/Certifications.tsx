const certs = [
  { name: "Introduction to Python", date: "Feb 08, 2026", hours: "4 hrs" },
  { name: "Intermediate Python", date: "Feb 10, 2026", hours: "4 hrs" },
  { name: "Data Manipulation with pandas", date: "Feb 16, 2026", hours: "4 hrs" },
  { name: "Joining Data with pandas", date: "Mar 01, 2026", hours: "4 hrs" },
  { name: "Introduction to Statistics in Python", date: "Mar 11, 2026", hours: "4 hrs" },
  { name: "Introduction to R", date: "Mar 17, 2026", hours: "4 hrs" },
  { name: "Intermediate R", date: "Mar 25, 2026", hours: "6 hrs" },
  { name: "Intro to Data Visualization with Matplotlib", date: "Mar 31, 2026", hours: "4 hrs" },
  { name: "Intro to Data Visualization with Seaborn", date: "Apr 06, 2026", hours: "4 hrs" },
  { name: "Working with the OpenAI API", date: "Apr 12, 2026", hours: "3 hrs" },
  { name: "Prompt Engineering with the OpenAI API", date: "Apr 25, 2026", hours: "4 hrs" },
  { name: "Working with Hugging Face", date: "May 12, 2026", hours: "2 hrs" },
  { name: "LLMOps Concepts", date: "May 18, 2026", hours: "1 hr" },
  { name: "Developing AI Systems with the OpenAI API", date: "June 04, 2026", hours: "3 hrs" },
];

export function Certifications() {
  return (
    <div>
      <div className="flex flex-col rounded-lg border border-[var(--border-color)] overflow-hidden">
        {certs.map((c, i) => (
          <div
            key={c.name}
            className={`flex items-center justify-between gap-3 px-4 py-2.5 cursor-default transition-colors hover:bg-[var(--surface)] ${i !== 0 ? "border-t border-[var(--border-color)]" : ""}`}
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <span className="truncate" style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
                {c.name}
              </span>
              <span
                className="hidden sm:inline-flex shrink-0 px-1.5 py-0.5 rounded font-mono"
                style={{
                  fontSize: "0.625rem",
                  backgroundColor: "rgba(3, 218, 162, 0.12)",
                  color: "#03b487",
                }}
              >
                DataCamp
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[var(--muted)] font-mono hidden sm:inline" style={{ fontSize: "0.6875rem" }}>
                {c.date}
              </span>
              <span className="font-mono text-[var(--fg)] bg-[var(--surface)] border border-[var(--border-color)] px-1.5 py-0.5 rounded" style={{ fontSize: "0.625rem" }}>
                {c.hours}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border-color)] text-[var(--muted)]" style={{ fontSize: "0.8125rem" }}>
        <span className="text-[var(--fg)]" style={{ fontWeight: 600 }}>48 total hours</span> · Python, pandas, R, statistics, OpenAI API, Hugging Face, LLMOps
      </div>
    </div>
  );
}
