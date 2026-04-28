import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-0">
        <SectionHeading
          number="01"
          eyebrow="About"
          title="Production experience across client delivery, SaaS, and research"
          description="Full Stack Developer with production experience building AI-powered web applications for live government clients. Proficient in Next.js, React, Node.js, and Groq integration, with end-to-end ownership of SaaS and ML projects from design to deployment. Currently pursuing MS Software Engineering at NUST while contributing to real-world client projects at Inotech Solutions."
        />

        <div data-reveal className="card-surface mt-12 p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.34em] text-[var(--text-secondary)]">Profile snapshot</p>
          <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
            Building polished frontends, reliable APIs, and deployable AI-enabled products for government clients, SaaS workflows, and machine learning experiments. The current focus is on practical delivery, code quality, and measurable client outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}