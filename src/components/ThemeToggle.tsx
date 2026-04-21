"use client";

import { useEffect, useSyncExternalStore } from "react";

const subscribe = (cb: () => void) => {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
};
const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;
      document.documentElement.classList.toggle("dark", e.matches);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "switch to light theme" : "switch to dark theme"}
      aria-pressed={isDark}
      className="fixed top-4 right-4 lg:top-6 lg:right-6 inline-block min-w-[3ch] text-center text-sm lg:text-base tracking-tight text-neutral-900 dark:text-neutral-200 underline underline-offset-4 hover:opacity-60 transition-opacity focus-visible:outline-none focus-visible:decoration-2 z-10"
    >
      {isDark ? "light" : "dark"}
    </button>
  );
}
