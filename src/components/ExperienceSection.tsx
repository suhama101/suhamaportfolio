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
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on delivery across product and client work"
          description="A timeline of client-facing execution, platform delivery, and design work that aligns with the professional summary and project history."
        />

        <div className="mt-12 space-y-6">
          {items.map((item) => (
            <article key={item.role} className="card-surface p-6 sm:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-[#111111]">{item.role}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-[#b25f35]">{item.period}</p>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4d433a] sm:text-base">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#7f9e69]" />
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