import SectionHeading from "@/components/SectionHeading";
import Tooltip from "@/components/Tooltip";

type Project = {
  title: string;
  tech: string[];
  description: string;
  buttonLabel: string;
  href?: string;
  disabled?: boolean;
  tooltip?: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-0">
        <SectionHeading
          number="05"
          eyebrow="Projects"
          title="Client work delivered across government and production environments"
          description="These projects reflect shipped work, stakeholder review cycles, and production constraints across frontend, backend, database, and deployment layers."
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <article key={project.title} data-reveal className="card-surface overflow-hidden" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="border-b border-[var(--border)] p-6 sm:p-7">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">0{index + 1}</p>
                <h3 className="mt-4 max-w-2xl text-2xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">{project.description}</p>
                <div className="mt-6">
                  {project.disabled ? (
                    <Tooltip content={project.tooltip ?? "Unavailable"}>
                      <button
                        type="button"
                        className="btn-secondary cursor-not-allowed text-sm opacity-60"
                        disabled
                      >
                        {project.buttonLabel}
                      </button>
                    </Tooltip>
                  ) : (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm"
                    >
                      {project.buttonLabel}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}