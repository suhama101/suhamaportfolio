import SectionHeading from "@/components/SectionHeading";

type SkillCard = {
  title: string;
  items: string[];
};

type SkillsSectionProps = {
  cards: SkillCard[];
};

export default function SkillsSection({ cards }: SkillsSectionProps) {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-0">
        <SectionHeading
          number="04"
          eyebrow="Skills"
          title="Core capabilities across frontend, backend, AI, and deployment"
          description="The stack below reflects the tools and technologies used across client delivery, independent products, and research work."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <article key={card.title} data-reveal className="card-surface p-6" style={{ transitionDelay: `${index * 100}ms` }}>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">{card.title}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <span key={item} className="tag-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}