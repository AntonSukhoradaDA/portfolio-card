"use client";

import { useEffect, useRef, useState } from "react";

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = LOWER.toUpperCase();

const randomGlyph = (ch: string) => {
  const pool = ch === ch.toUpperCase() ? UPPER : LOWER;
  return pool[Math.floor(Math.random() * pool.length)];
};

// Hovering the text cycles each letter through random glyphs, then settles
// back to the real word left to right, like a decoder locking on.
export default function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [shown, setShown] = useState(text);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const start = () => {
    if (frame.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const t0 = performance.now();
    let lastFlip = 0;

    const tick = (now: number) => {
      const elapsed = now - t0;
      let settled = true;

      if (now - lastFlip > 45) {
        lastFlip = now;
        const next = text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return ch;
            if (elapsed >= 180 + i * 40) return ch;
            settled = false;
            return randomGlyph(ch);
          })
          .join("");
        setShown(next);
      } else {
        settled = elapsed >= 180 + (text.length - 1) * 40;
      }

      if (settled) {
        setShown(text);
        frame.current = null;
      } else {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
  };

  return (
    <span className={className} onMouseEnter={start} onFocus={start}>
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
