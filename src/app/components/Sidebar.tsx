import { Mail, Linkedin, Github, Globe, MapPin, Clock, Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";
import lightModeImage from "../../assets/light-mode.png";
import darkModeImage from "../../assets/dark-mode.png";

export function Sidebar() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const phtTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));
      setTime(
        phtTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const email = "eduardkinganterola@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  const links = [
    { icon: Mail, label: email, href: `mailto:${email}` },
    { icon: Linkedin, label: "linkedin.com/in/eduard-king-anterola", href: "https://linkedin.com/in/eduard-king-anterola" },
    { icon: Github, label: "github.com/Eduard-K-A", href: "https://github.com/Eduard-K-A" },
  ];

  return (
    <aside className="w-full lg:fixed lg:top-[4.5rem] lg:left-[clamp(1.5rem,calc((100vw-1100px)/2+1.5rem),999rem)] lg:z-20 lg:w-[340px] lg:h-[calc(100vh-6rem)] shrink-0">
      <div className="flex flex-col gap-5 lg:h-full lg:overflow-y-auto lg:pr-2">
        <div
          className="relative w-full aspect-square rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] overflow-hidden group cursor-pointer transition-all duration-300 hover:border-[var(--fg)]"
        >
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.18] group-hover:opacity-30 transition-opacity"
            style={{
              backgroundImage:
                "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Theme image */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <img
              src={lightModeImage}
              alt="Eduard King Anterola"
              className="absolute inset-0 h-full w-full object-cover object-[center_32%] opacity-100 transition-opacity duration-500 ease-in-out dark:opacity-0"
              draggable={false}
            />
            <img
              src={darkModeImage}
              alt="Eduard King Anterola"
              className="absolute inset-0 h-full w-full object-cover object-[center_32%] opacity-0 transition-opacity duration-500 ease-in-out dark:opacity-100"
              draggable={false}
            />
          </div>
          {/* Status pill */}
          <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--bg)]/80 backdrop-blur border border-[var(--border-color)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            <span className="font-mono text-[var(--fg)]" style={{ fontSize: "0.625rem" }}>
              Available
            </span>
          </div>
          {/* Corner tag */}
          <div className="absolute bottom-3 right-3 font-mono text-[var(--muted)]" style={{ fontSize: "0.625rem" }}>
            PH · 2026
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 style={{ fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.2 }}>
            Eduard King Anterola
          </h1>
          <p style={{ fontSize: "0.875rem" }} className="text-[var(--muted)] leading-relaxed">
            Full-Stack Developer · CS Student · Aspiring ML Engineer
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-[var(--muted)]" style={{ fontSize: "0.8125rem" }}>
            <MapPin size={14} />
            <span>Lipa City, Philippines</span>
          </div>
          <div className="flex items-center gap-1.5 text-[var(--muted)] font-mono" style={{ fontSize: "0.75rem" }}>
            <Clock size={14} />
            <span>{time} · PHT · UTC+8</span>
          </div>
        </div>

        <div className="border-t border-[var(--border-color)]" />

        <div className="flex flex-col gap-2.5">
          {links.map((l, idx) => {
            const isEmail = idx === 0;
            return (
              <div key={l.label} className="flex items-center gap-2">
                <a
                  href={l.href}
                  target={isEmail ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[var(--muted)] hover:text-[var(--fg)] hover:translate-x-0.5 transition-all min-w-0 flex-1"
                  style={{ fontSize: "0.8125rem" }}
                >
                  <l.icon size={14} />
                  <span className="truncate">{l.label}</span>
                </a>
                {isEmail && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email"
                    className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors shrink-0"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="border-t border-[var(--border-color)]" />

        <div className="flex items-center gap-3">
          <a href="https://github.com/Eduard-K-A" target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--fg)] hover:-translate-y-0.5 transition-all">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/eduard-king-anterola" target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--fg)] hover:-translate-y-0.5 transition-all">
            <Linkedin size={18} />
          </a>
          <a href="https://eduard-king.vercel.app" target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--fg)] hover:-translate-y-0.5 transition-all">
            <Globe size={18} />
          </a>
        </div>
      </div>
    </aside>
  );
}
