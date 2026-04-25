import SectionHeading from "@/components/SectionHeading";

type AboutSectionProps = {
  stats: string[];
};

export default function AboutSection({ stats }: AboutSectionProps) {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional Summary"
          title="Production experience across client delivery, SaaS, and research"
          description="Full Stack Developer with production experience building AI-powered web applications for live government clients. Proficient in Next.js, React, Node.js, and Groq integration, with end-to-end ownership of SaaS and ML projects from design to deployment. Currently pursuing MS Software Engineering at NUST while contributing to real-world client projects at Inotech Solutions."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="card-surface p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b25f35]">Profile snapshot</p>
            <p className="mt-5 text-lg leading-8 text-[#2a241f]">
              Building polished frontends, reliable APIs, and deployable AI-enabled products for government clients, SaaS workflows, and machine learning experiments. The current focus is on practical delivery, code quality, and measurable client outcomes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat} className="card-surface flex min-h-32 items-end p-6">
                <p className="font-display text-2xl font-semibold text-[#111111]">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}