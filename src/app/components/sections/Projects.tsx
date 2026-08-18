import { forwardRef, useState } from "react";
import { Code2, ExternalLink, Layers, Smartphone, Terminal } from "lucide-react";
import { Github, Pill, GeomShapes, SectionLabel, TEAL, YELLOW, PURPLE, GREEN } from "./shared";

const PROJECTS = [
  {
    title: "HackaTruck App",
    description:
      "iOS app built during IBM's HackaTruck event. I learned Swift from scratch and delivered a working app by the end — one of the most intense and rewarding experiences of my journey.",
    tech: ["Swift", "Xcode", "iOS", "UIKit"],
    color: TEAL,
    icon: Smartphone,
    link: "#",
    github: "https://github.com/MarinaSDiniz/PROJETO",
  },
  {
    title: "Agência de Software",
    description:
      "Real-world project for a university partner company, developed as a team within the Software Engineering program. I took the product from requirements gathering all the way to final delivery.",
    tech: ["React", "TypeScript", "Node.js", "SQL"],
    color: YELLOW,
    icon: Layers,
    link: "https://www.instagram.com/p/DL5s00sRm3M/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==#",
    github: "#",
  },
  {
    title: "Mobile App (Internship)",
    description:
      "Building features in React Native for a production mobile product. Working with navigation, REST API consumption, state management, and TypeScript best practices.",
    tech: ["React Native", "TypeScript", "REST API", "Git"],
    color: PURPLE,
    icon: Code2,
    link: "#",
    github: "#",
  },
  {
    title: "CLI Docker Tools",
    description:
      "A set of scripts and utilities for automating Docker-based dev environments, simplifying project setup and standardizing environments across the team.",
    tech: ["Docker", "Shell", "Node.js", "YAML"],
    color: GREEN,
    icon: Terminal,
    link: "https://agenda.ooiac.com.br/login?warning=auth-required#",
    github: "#",
  },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const [hovered, setHovered] = useState(false);
  const { icon: Icon } = project;

  return (
    <div
      className="group relative rounded-2xl p-5 sm:p-6 border transition-all duration-300 overflow-hidden cursor-default"
      style={{
        backgroundColor: hovered ? "#16162E" : "#13132A",
        borderColor: hovered ? project.color : "rgba(244,239,228,0.08)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
        style={{ backgroundColor: project.color, opacity: hovered ? 1 : 0 }}
      />

      <div className="flex items-start justify-between mb-4">
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${project.color}20` }}
        >
          <Icon size={17} style={{ color: project.color }} />
        </div>
        <div className="flex items-center gap-3">
          <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub" onClick={(e) => e.stopPropagation()}>
            <Github size={15} />
          </a>
          <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="View project" onClick={(e) => e.stopPropagation()}>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      <h3 className="text-base sm:text-lg font-black text-foreground mb-2 sm:mb-3">{project.title}</h3>
      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground mb-4 sm:mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {project.tech.map((t) => (
          <Pill key={t} color={project.color} dark>{t}</Pill>
        ))}
      </div>
    </div>
  );
}

const Projects = forwardRef<HTMLElement>(function Projects(_props, ref) {
  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-20 sm:py-28 bg-background overflow-hidden"
    >
      <GeomShapes />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <SectionLabel number="03" label="Projects" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-foreground leading-tight">
          What I built.
        </h2>
        <p className="text-muted-foreground mb-10 sm:mb-14 max-w-lg leading-relaxed text-sm sm:text-base">
          Academic projects, hackathons, and personal experiments — each one a real learning experience.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="https://github.com/MarinaSDiniz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200"
          >
            <Github size={15} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
});

export default Projects;
