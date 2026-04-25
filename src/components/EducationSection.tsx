import SectionHeading from "@/components/SectionHeading";

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  description: string;
};

type EducationSectionProps = {
  items: EducationItem[];
};

export default function EducationSection({ items }: EducationSectionProps) {
  return (
    <section id="education" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation supporting product delivery"
          description="Formal study and current postgraduate work that strengthen the engineering, systems, and analytical side of the portfolio."
        />

        <div className="mt-12 space-y-6">
          {items.map((item) => (
            <article key={item.degree} className="card-surface p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#111111]">{item.degree}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-[#b25f35]">{item.institution}</p>
                </div>
                <div className="text-sm uppercase tracking-[0.28em] text-[#796b60] sm:text-right">
                  <p>{item.period}</p>
                  <p className="mt-1">{item.location}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="tag-pill">GPA {item.grade}</span>
              </div>
              <p className="mt-5 text-sm leading-7 text-[#4d433a] sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
