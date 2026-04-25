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
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key Projects - Professional"
          title="Client work delivered across government and production environments"
          description="These projects reflect shipped work, stakeholder review cycles, and production constraints across frontend, backend, database, and deployment layers."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="card-surface overflow-hidden">
              <div className="flex min-h-44 items-end bg-[radial-gradient(circle_at_top_right,rgba(178,95,53,0.18),transparent_28%),linear-gradient(135deg,rgba(255,251,244,0.96),rgba(245,242,236,0.98))] p-6 sm:p-7">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#b25f35]">0{index + 1}</p>
                  <h3 className="mt-3 max-w-xl text-2xl font-semibold text-[#111111]">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-[#4d433a] sm:text-base">{project.description}</p>
                <div className="mt-6">
                  {project.disabled ? (
                    <Tooltip content={project.tooltip ?? "Unavailable"}>
                      <button
                        type="button"
                        className="btn-secondary cursor-not-allowed opacity-60 text-sm"
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