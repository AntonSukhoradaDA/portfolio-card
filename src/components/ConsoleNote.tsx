"use client";

import { useEffect } from "react";

// A note for whoever opens devtools. Plain, no colours, one small hint.
export default function ConsoleNote() {
  useEffect(() => {
    console.log(
      "%chi, curious one.\n%cthe rest of my work lives at github.com/AntonSukhoradaDA\nthere are a few more secrets on this page. try selecting everything.",
      "font: 500 15px Inter, system-ui, sans-serif;",
      "font: 12px ui-monospace, SFMono-Regular, Menlo, monospace; opacity: 0.7;",
    );
  }, []);

  return null;
}
