import HeroStats from "@/components/HeroStats";

type HeroMetric = {
  value: number;
  label: string;
};

type HeroSectionProps = {
  stats: HeroMetric[];
};

export default function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section id="home" className="pb-[120px] pt-8">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col justify-start pt-8 lg:pt-12">
          <div className="hero-badge w-fit" data-reveal>
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Open to Remote &amp; Relocation
          </div>
          <p data-reveal className="mt-8 text-xs uppercase tracking-[0.34em] text-[var(--text-secondary)]">
            Full Stack Developer | AI-Driven Development
          </p>
          <h1 data-reveal className="mt-5 max-w-4xl text-[clamp(3rem,7vw,6rem)] leading-[0.92] tracking-[-0.05em] text-[var(--text-primary)]" style={{ transitionDelay: "80ms" }}>
            Hi, I am <em>Suhama</em> Mustafa
          </h1>
          <p data-reveal className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg" style={{ transitionDelay: "140ms" }}>
            Full Stack Developer with production experience building AI-powered web applications for live government clients, SaaS products, and ML projects.
          </p>

          <div data-reveal className="mt-8 flex flex-wrap items-center gap-4" style={{ transitionDelay: "200ms" }}>
            <a href="#projects" className="btn-primary">
              Explore Projects
            </a>
            <a href="#about" className="btn-secondary">
              About
            </a>
          </div>

          <div data-reveal className="mt-10 grid gap-4 border-t border-[var(--border)] pt-6 sm:grid-cols-2" style={{ transitionDelay: "240ms" }}>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)]">Email</p>
              <a className="mt-2 block text-sm text-[var(--text-primary)] hover:text-[var(--accent)]" href="mailto:suhamamustafa1@gmail.com">
                suhamamustafa1@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)]">Phone</p>
              <a className="mt-2 block text-sm text-[var(--text-primary)] hover:text-[var(--accent)]" href="tel:+923441272583">
                +92 344 1272583
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)]">LinkedIn</p>
              <a
                className="mt-2 block break-words text-sm text-[var(--text-primary)] hover:text-[var(--accent)]"
                href="https://linkedin.com/in/suhama-mustafa-b58a152a5"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/suhama-mustafa-b58a152a5
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)]">GitHub</p>
              <a
                className="mt-2 block text-sm text-[var(--text-primary)] hover:text-[var(--accent)]"
                href="https://github.com/suhama101"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/suhama101
              </a>
            </div>
          </div>

          <div data-reveal className="mt-5 grid gap-4 border-t border-[var(--border)] pt-5 sm:grid-cols-2" style={{ transitionDelay: "280ms" }}>
            <div className="card-surface p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-secondary)]">Focus</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">Next.js, React, Node.js, and Groq-based AI integrations.</p>
            </div>
            <div className="card-surface p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-secondary)]">Current Study</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">MS Software Engineering at NUST while contributing to live client projects.</p>
            </div>
          </div>

          <HeroStats stats={stats} />
        </div>
      </div>
    </section>
  );
}