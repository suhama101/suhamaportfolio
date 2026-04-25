import SectionHeading from "@/components/SectionHeading";

export default function ResearchSection() {
  return (
    <section id="research" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Research & Publications"
          title="Publication and ongoing academic work"
          description="Research work continues alongside product delivery and informs the design and implementation side of the portfolio."
        />

        <div className="mt-12 space-y-6">
          <article className="card-surface border-l-2 border-l-[#7f9e69] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4 sm:gap-6">
                <p className="font-display text-4xl font-semibold text-[#b25f35]">01</p>
                <div>
                  <h3 className="text-2xl font-semibold text-[#111111] sm:text-3xl">
                    Improving Floyd&apos;s Algorithm for Efficient Cycle Detection
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[#796b60]">
                    Mehran University Research Journal of Engineering &amp; Technology
                  </p>
                </div>
              </div>
              <span className="w-fit rounded-full border border-[#7f9e69]/30 bg-[#7f9e69]/12 px-3 py-1 text-xs font-medium text-[#5f7750]">
                Under Review
              </span>
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-[#4d433a] sm:text-base">
              Analyzed how list size, cycle length, and start position affect Floyd&apos;s cycle detection algorithm. Developed a predictive model to estimate detection steps, with applications in graph theory and real-time systems.
            </p>
            <p className="mt-5 text-sm leading-7 text-[#796b60] sm:text-base">
              Authors: Suhama Mustafa, Hikmat Ullah Khan, Irshad Ali, Hadia Abu Bakar, Anam Naz
            </p>
          </article>

          <article className="card-surface border-l-2 border-l-[#7f9e69] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4 sm:gap-6">
                <p className="font-display text-4xl font-semibold text-[#b25f35]">02</p>
                <div>
                  <h3 className="text-2xl font-semibold text-[#111111] sm:text-3xl">Food Distribution Application</h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[#796b60]">Research Paper in Progress</p>
                </div>
              </div>
              <span className="w-fit rounded-full border border-[#b25f35]/25 bg-[#b25f35]/10 px-3 py-1 text-xs font-medium text-[#8f5633]">
                In Progress
              </span>
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-[#4d433a] sm:text-base">
              Ongoing research exploring design and optimization of a food distribution platform.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}