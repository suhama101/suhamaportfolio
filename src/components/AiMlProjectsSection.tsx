import SectionHeading from "@/components/SectionHeading";

type AiMlProject = {
  title: string;
  description: string;
};

type AiMlProjectsSectionProps = {
  items: AiMlProject[];
};

export default function AiMlProjectsSection({ items }: AiMlProjectsSectionProps) {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI / Machine Learning Projects"
          title="Experiments and applied ML work"
          description="Focused ML and automation work that complements the product portfolio with model evaluation and workflow design."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="card-surface p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#b25f35]">Applied work</p>
              <h3 className="mt-4 text-xl font-semibold text-[#111111]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#4d433a]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
