import { MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MouseFollower() {
  const iconRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const visibleRef = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const onEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.2;
      pos.current.y += (target.current.y - pos.current.y) * 0.2;
      if (iconRef.current) {
        iconRef.current.style.transform = `translate3d(${pos.current.x - 10}px, ${pos.current.y - 10}px, 0)`;
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
    <div
      ref={iconRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] text-[var(--fg)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: "translate3d(-100px,-100px,0)",
        transition: "opacity 180ms ease",
        filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25))",
      }}
    >
      <MousePointer2 size={20} strokeWidth={1.9} />
    </div>
  );
}
