import SectionHeading from "@/components/SectionHeading";

type IndependentProject = {
  title: string;
  tech: string[];
  description: string;
  href?: string;
};

type IndependentProjectsSectionProps = {
  items: IndependentProject[];
};

export default function IndependentProjectsSection({ items }: IndependentProjectsSectionProps) {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Independent Projects"
          title="Self-directed products and deployments"
          description="Independent work that shows product ownership, implementation depth, and the ability to ship beyond client scope."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {items.map((item, index) => (
            <article key={item.title} className="card-surface p-6 sm:p-7">
              <p className="text-sm uppercase tracking-[0.3em] text-[#b25f35]">0{index + 1}</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#111111]">{item.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-[#4d433a] sm:text-base">{item.description}</p>
              {item.href ? (
                <div className="mt-6">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                    Live Demo
                  </a>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
