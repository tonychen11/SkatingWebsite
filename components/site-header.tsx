"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Category", href: "#categories" },
  { label: "Stories", href: "#stories" },
  { label: "Gallery", href: "#gallery" },
];

export function SiteHeader() {
  const [activeHref, setActiveHref] = useState("#");

  useEffect(() => {
    const syncHash = () => {
      setActiveHref(window.location.hash || "#");
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(251,245,234,0.84)] backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-6 py-4">
        <a
          href="#"
          className="flex items-center gap-3"
          onClick={() => setActiveHref("#")}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-ink)] text-sm font-black tracking-[0.18em] text-white">
            GG
          </span>
          <div>
            <p className="display-title text-xl leading-none">Glide Guide</p>
            <p className="text-sm text-[var(--color-muted)]">
              Figure skating for young learners
            </p>
          </div>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/60 px-3 py-2 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveHref(item.href)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                activeHref === item.href
                  ? "bg-white text-[var(--color-coral)]"
                  : "text-[var(--color-muted)] hover:bg-white hover:text-[var(--color-ink)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
