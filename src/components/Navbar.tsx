"use client";

import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f2ec]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-display text-lg font-semibold tracking-[0.2em] text-[#111111]">
          SM
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/60 text-[#111111] md:hidden"
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

      <div className={`border-t border-black/10 md:hidden ${open ? "block" : "hidden"}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link py-1" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}