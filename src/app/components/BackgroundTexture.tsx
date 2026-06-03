import { useEffect, useRef } from "react";

export function BackgroundTexture({ dark }: { dark: boolean }) {
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -200, y: -200 });
  const pos = useRef({ x: -200, y: -200 });
  const hovering = useRef(false);

  useEffect(() => {
    if (matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      const el = e.target as HTMLElement | null;
      hovering.current = !!el?.closest("a, button, [data-cursor='pointer']");
    };

    const onLeave = () => {
      hovering.current = false;
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
    };

    const onEnter = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.14;
      pos.current.y += (target.current.y - pos.current.y) * 0.14;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
        glowRef.current.style.opacity = hovering.current ? "0.95" : "0.5";
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: dark
            ? [
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 28%)",
                "radial-gradient(circle at 80% 0%, rgba(56,189,248,0.08), transparent 26%)",
                "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
                "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.012) 0, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 8px)",
              ].join(", ")
            : [
                "radial-gradient(circle at 20% 20%, rgba(24,24,27,0.05), transparent 28%)",
                "radial-gradient(circle at 80% 0%, rgba(14,165,233,0.1), transparent 26%)",
                "linear-gradient(rgba(24,24,27,0.035) 1px, transparent 1px)",
                "linear-gradient(90deg, rgba(24,24,27,0.035) 1px, transparent 1px)",
                "repeating-linear-gradient(45deg, rgba(24,24,27,0.015) 0, rgba(24,24,27,0.015) 1px, transparent 1px, transparent 8px)",
              ].join(", "),
          backgroundSize: "100% 100%, 100% 100%, 36px 36px, 36px 36px, 12px 12px",
          opacity: 0.9,
        }}
      />

      <div
        ref={glowRef}
        className="absolute left-0 top-0"
        style={{
          width: "42rem",
          height: "42rem",
          marginLeft: "-21rem",
          marginTop: "-21rem",
          opacity: 0,
          transition: "opacity 220ms ease",
          background:
            dark
              ? "radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0.1) 20%, rgba(56,189,248,0.04) 36%, transparent 70%)"
              : "radial-gradient(circle, rgba(14,165,233,0.24) 0%, rgba(14,165,233,0.12) 20%, rgba(14,165,233,0.05) 36%, transparent 70%)",
          filter: "blur(20px)",
          mixBlendMode: dark ? "screen" : "multiply",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            dark
              ? "linear-gradient(180deg, rgba(9,9,11,0.18), rgba(9,9,11,0.02) 30%, rgba(9,9,11,0.22))"
              : "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.1))",
        }}
      />
    </div>
  );
}
