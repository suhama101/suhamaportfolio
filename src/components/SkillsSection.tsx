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
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Core capabilities across frontend, backend, AI, and deployment"
          description="The stack below reflects the tools and technologies used across client delivery, independent products, and research work."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {cards.map((card, index) => (
            <article key={card.title} className="card-surface group p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b25f35]/40 hover:bg-white/85">
              <p className="text-sm uppercase tracking-[0.3em] text-[#b25f35]">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-[#111111]">{card.title}</h3>
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