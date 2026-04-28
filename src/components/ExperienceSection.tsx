import SectionHeading from "@/components/SectionHeading";

type ExperienceItem = {
  role: string;
  period: string;
  points: string[];
};

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export default function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-0">
        <SectionHeading
          number="02"
          eyebrow="Experience"
          title="Hands-on delivery across product and client work"
          description="A timeline of client-facing execution, platform delivery, and design work that aligns with the professional summary and project history."
        />

        <div className="mt-12 space-y-6">
          {items.map((item) => (
            <article key={item.role} data-reveal className="card-surface p-6 sm:p-7" style={{ transitionDelay: `${items.indexOf(item) * 100}ms` }}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{item.role}</h3>
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--text-tertiary)]">{item.period}</p>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-[var(--accent)]">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}