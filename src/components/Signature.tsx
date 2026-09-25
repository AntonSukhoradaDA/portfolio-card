"use client";

import { useState } from "react";

// Click the name and a hand-drawn flourish signs itself underneath.
// Click again to erase it.
export default function Signature({ name }: { name: string }) {
  const [signed, setSigned] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setSigned((s) => !s)}
      aria-pressed={signed}
      className="relative inline-block cursor-pointer select-text text-left focus-visible:outline-none focus-visible:opacity-60"
    >
      {name}
      <svg
        className="pointer-events-none absolute left-0 top-full -mt-[0.12em] h-[0.45em] w-[115%] overflow-visible"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="sig"
          data-signed={signed}
          d="M1 13 C 14 6, 22 16, 34 10 S 52 3, 60 12 S 78 18, 86 9 S 96 4, 99 11"
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </button>
  );
}
