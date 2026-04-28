"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.18, 0.34, 0.5, 0.68],
        rootMargin: "-18% 0px -60% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="nav-shell">
      <div className="mx-auto flex max-w-[900px] items-center justify-between px-4 py-5 sm:px-6 lg:px-0">
        <a href="#home" className="text-sm font-medium tracking-[0.22em] text-[var(--text-primary)]">
          Suhama Mustafa
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? "is-active" : ""}`}
              aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div className={`border-t border-[var(--border)] md:hidden ${open ? "block" : "hidden"}`}>
        <div className="mx-auto flex max-w-[900px] flex-col gap-4 px-4 py-4 sm:px-6 lg:px-0">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link py-1 ${activeSection === link.href.slice(1) ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}