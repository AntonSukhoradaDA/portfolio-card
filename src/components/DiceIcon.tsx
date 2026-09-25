"use client";

import { useEffect, useRef, useState } from "react";

type Pip = "tl" | "tr" | "ml" | "mr" | "c" | "bl" | "br";

const PIP_POS: Record<Pip, [number, number]> = {
  tl: [11, 11],
  tr: [21, 11],
  ml: [11, 16],
  mr: [21, 16],
  c: [16, 16],
  bl: [11, 21],
  br: [21, 21],
};

const FACES: Pip[][] = [
  ["c"],
  ["tl", "br"],
  ["tl", "c", "br"],
  ["tl", "tr", "bl", "br"],
  ["tl", "tr", "c", "bl", "br"],
  ["tl", "tr", "ml", "mr", "bl", "br"],
];

// The Monomakh die. The CSS hover animation tumbles it; while it is mid-air
// we swap the face, so every roll lands on a random number.
export default function DiceIcon({ className }: { className?: string }) {
  const [face, setFace] = useState(4);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const onRoll = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setFace((prev) => {
        let next = Math.floor(Math.random() * 6);
        if (next === prev) next = (next + 1) % 6;
        return next;
      });
    }, 260);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      onAnimationStart={onRoll}
    >
      <rect width="32" height="32" rx="7" fill="#1F4FD1" />
      <rect x="6" y="6" width="20" height="20" rx="5" fill="#F5C518" />
      {FACES[face].map((pip) => {
        const [cx, cy] = PIP_POS[pip];
        const center = pip === "c";
        return <circle key={pip} cx={cx} cy={cy} r={center ? 2.576 : 2.3} fill={center ? "#D2372B" : "#1B1A17"} />;
      })}
    </svg>
  );
}
