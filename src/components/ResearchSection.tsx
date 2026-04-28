import SectionHeading from "@/components/SectionHeading";

export default function ResearchSection() {
  return (
    <section id="research" className="section-shell">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-0">
        <SectionHeading
          number="08"
          eyebrow="Research & Publications"
          title="Publication and ongoing academic work"
          description="Research work continues alongside product delivery and informs the design and implementation side of the portfolio."
        />

        <div className="mt-12 space-y-6">
          <article data-reveal className="card-surface p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4 sm:gap-6">
                <p className="text-4xl font-semibold text-[var(--accent)]">01</p>
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                    Improving Floyd&apos;s Algorithm for Efficient Cycle Detection
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[var(--text-secondary)]">
                    Mehran University Research Journal of Engineering &amp; Technology
                  </p>
                </div>
              </div>
              <span className="w-fit rounded-full border border-[var(--border)] bg-[var(--accent-dim)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                Under Review
              </span>
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              Analyzed how list size, cycle length, and start position affect Floyd&apos;s cycle detection algorithm. Developed a predictive model to estimate detection steps, with applications in graph theory and real-time systems.
            </p>
            <p className="mt-5 text-sm leading-7 text-[var(--text-tertiary)] sm:text-base">
              Authors: Suhama Mustafa, Hikmat Ullah Khan, Irshad Ali, Hadia Abu Bakar, Anam Naz
            </p>
          </article>

          <article data-reveal className="card-surface p-6 sm:p-8" style={{ transitionDelay: "120ms" }}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4 sm:gap-6">
                <p className="text-4xl font-semibold text-[var(--accent)]">02</p>
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">Food Distribution Application</h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[var(--text-secondary)]">Research Paper in Progress</p>
                </div>
              </div>
              <span className="w-fit rounded-full border border-[var(--border)] bg-[var(--accent-dim)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                In Progress
              </span>
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              Ongoing research exploring design and optimization of a food distribution platform.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}