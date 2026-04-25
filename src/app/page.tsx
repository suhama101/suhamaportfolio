import AboutSection from "@/components/AboutSection";
import AiMlProjectsSection from "@/components/AiMlProjectsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IndependentProjectsSection from "@/components/IndependentProjectsSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SkillsSection from "@/components/SkillsSection";

const stats = [
  "Live government clients",
  "MS Software Engineering @ NUST",
  "End-to-end SaaS and ML",
  "Published research",
];

const skillCards = [
  {
    title: "Frontend Development",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "Python"],
  },
  {
    title: "Databases",
    items: ["MySQL", "Aiven Cloud (MySQL)", "Supabase"],
  },
  {
    title: "AI / ML",
    items: ["Groq LLM", "Model Fine-tuning", "NLP", "Machine Learning", "Streamlit", "n8n"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "REST APIs", "Vercel", "Railway", "Figma", "Canva", "GitHub Copilot", "Windsurf"],
  },
];

const projects = [
  {
    title: "ISSB Website (Government Client)",
    tech: ["Next.js", "Node.js", "Aiven Cloud MySQL"],
    description:
      "Delivered a fully functional, production-ready application to Inter Services Selection Board Pakistan government stakeholders, contributing to 80%+ of the full-stack application including REST APIs, dynamic UI, and database schema. Application is complete and finalized; awaiting official deployment after hosting and domain configuration.",
    buttonLabel: "Live Demo",
    href: "https://issb-sand.vercel.app/",
  },
  {
    title: "FPCDL Dashboard (Government Client)",
    tech: ["HTML5", "CSS", "JavaScript"],
    description:
      "Designed and built a comprehensive dashboard prototype for FPCDL, with branding, organizational imagery, and role-specific UI flows tailored to government administrative workflows. Submitted to stakeholders for approval; full-stack development will follow upon sign-off.",
    buttonLabel: "Live Demo",
    href: "https://fpsc-eight.vercel.app/",
  },
  {
    title: "Inotech Solutions Website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Independently designed and developed the Hardware and Software project sections of the Inotech company website, improving frontend structure, navigation, sector-based filtering UI, and overall interface quality.",
    buttonLabel: "Live Demo",
    href: "https://inotech.vercel.app/hardware/hardware.html",
  },
  {
    title: "PAGB Website (Pakistan Army Green Book)",
    tech: ["Next.js", "Node.js", "UI/UX"],
    description:
      "Designed and deployed a fully responsive, production-ready UI/UX for pagb.org.pk, a live government platform serving Pakistan Army academic and military research publication needs. Developed and deployed 3+ functional modules and contributed to ongoing maintenance in an Agile team.",
    buttonLabel: "Live Demo",
    href: "https://pagb.org.pk",
  },
];

const experience = [
  {
    role: "Software Engineer Intern, Inotech Solutions",
    period: "09/2025 - Present",
    points: [
      "Built and delivered a full-stack prototype directly to government client ISSB using Next.js, Node.js, and Aiven Cloud (MySQL), independently contributing to 80%+ of the application.",
      "Developed and deployed 3+ live modules on PAGB (pagb.org.pk), collaborating in an Agile team via Git workflows and code reviews.",
      "Designed and built an HTML5, CSS, and JavaScript dashboard prototype for FPCDL submitted to client stakeholders for design approval.",
      "Developed responsive UI/UX components and integrated REST APIs across multiple client projects, improving reusability and reducing frontend delivery time.",
      "Independently built the Hardware and Software sections of the Inotech company website using HTML, CSS, and JavaScript, improving frontend structure and navigation.",
    ],
  },
  {
    role: "Freelance UI/UX & Frontend Designer",
    period: "03/2025 - 07/2025",
    points: [
      "Designed branded social media content for Vriopi, strengthening online visual identity and engagement.",
      "Created interactive, age-appropriate digital templates for Cedar School (Dubai) to improve classroom engagement.",
    ],
  },
];

const education = [
  {
    degree: "MS Software Engineering",
    institution: "NUST Military College of Signals",
    period: "09/2025 - Present",
    location: "Rawalpindi, PK",
    grade: "3.19/4",
    description: "Pursuing postgraduate studies alongside active industry internship.",
  },
  {
    degree: "BS Information Technology",
    institution: "University of Sargodha",
    period: "2021 - 2025",
    location: "Pakistan",
    grade: "3.01/4",
    description: "Strong foundation in software engineering, data structures, and algorithms.",
  },
];

const independentProjects = [
  {
    title: "Smart Hire - AI-Powered Hiring Platform (SaaS)",
    tech: ["Next.js", "Node.js", "Supabase", "Groq LLM", "Vercel", "Railway"],
    description:
      "Built an end-to-end AI hiring platform with resume parsing, Groq LLM integration, JWT authentication, and fit scoring, demonstrating full SaaS product ownership. Deployed on Vercel and Railway with a PDF parsing pipeline to extract and score candidate profiles automatically.",
    href: "https://smarthire-ai-lrq8.vercel.app/",
  },
  {
    title: "AI Data Dashboard",
    tech: ["Python", "Streamlit", "Machine Learning"],
    description:
      "Built an ML-powered analytics dashboard with live data visualization and integrated ML-based insights; deployed live on Streamlit Cloud.",
    href: "https://fullstackai-datadashboard-i6dmrjappwxmesm2nv9m7pg.streamlit.app/",
  },
  {
    title: "Image Classification",
    tech: ["Machine Learning", "Transfer Learning"],
    description:
      "Fine-tuned a deep learning model for multi-class image classification using transfer learning, improving prediction accuracy across test sets.",
  },
  {
    title: "News Classification (n8n Workflow)",
    tech: ["n8n", "AI Models", "Automation"],
    description:
      "Built an automated news categorization pipeline integrating AI models into an n8n workflow for real-time processing.",
  },
];

const aiMlProjects = [
  {
    title: "Image Classification",
    description:
      "Fine-tuned a deep learning model for multi-class image classification using transfer learning, improving prediction accuracy across test sets.",
  },
  {
    title: "News Classification (n8n Workflow)",
    description:
      "Built an automated news categorization pipeline integrating AI models into an n8n workflow for real-time processing.",
  },
  {
    title: "AI Model POCs & Testing",
    description:
      "Conducted structured experiments on LLM and ML models and produced performance benchmarking reports comparing model outputs.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="hero-noise pointer-events-none absolute inset-0" />
      <Navbar />
      <HeroSection />
      <AboutSection stats={stats} />
      <ExperienceSection items={experience} />
      <EducationSection items={education} />
      <SkillsSection cards={skillCards} />
      <ProjectsSection projects={projects} />
      <IndependentProjectsSection items={independentProjects} />
      <AiMlProjectsSection items={aiMlProjects} />
      <ResearchSection />
      <Footer />
    </main>
  );
}
