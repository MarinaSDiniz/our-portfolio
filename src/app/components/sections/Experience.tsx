import { forwardRef, useState } from "react";
import { Code2, Layers, Smartphone } from "lucide-react";
import { GREEN, MUTED, PURPLE, SectionLabel, TEAL, YELLOW } from "./shared";

const EXPERIENCES = [
  {
    role: "Mobile Developer Intern",
    company: "Tech Company",
    period: "2025 — Present",
    description:
      "Building and maintaining features in React Native for a production mobile app, working closely with design and backend teams on navigation, API integration, and state management.",
    tech: ["React Native", "TypeScript", "REST API", "Git"],
    color: TEAL,
    icon: Smartphone,
  },
  {
    role: "Software Engineering Student",
    company: "Software Agency (University Program)",
    period: "2024 — 2025",
    description:
      "Delivered a real-world product for a partner company as part of a Software Engineering team, from requirements gathering to final delivery, using agile practices.",
    tech: ["React", "TypeScript", "Node.js", "SQL"],
    color: YELLOW,
    icon: Layers,
  },
  {
    role: "iOS Developer — HackaTruck",
    company: "IBM",
    period: "2024",
    description:
      "Learned Swift from scratch during an intensive hackathon format and shipped a working iOS app by the end of the event.",
    tech: ["Swift", "Xcode", "iOS", "UIKit"],
    color: PURPLE,
    icon: Code2,
  },
];

function ExperienceCard({ experience }: { experience: (typeof EXPERIENCES)[number] }) {
  const [hovered, setHovered] = useState(false);
  const { icon: Icon } = experience;

  return (
    <div
      className="group relative rounded-2xl p-5 sm:p-6 border transition-all duration-300 overflow-hidden cursor-default"
      style={{
        backgroundColor: hovered ? "#16162E" : "#13132A",
        borderColor: hovered ? experience.color : "rgba(244,239,228,0.08)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
        style={{ backgroundColor: experience.color, opacity: hovered ? 1 : 0 }}
      />

      <div className="flex items-start justify-between mb-4 gap-3">
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${experience.color}20` }}
        >
          <Icon size={17} style={{ color: experience.color }} />
        </div>
        <span
          className="text-xs font-semibold whitespace-nowrap"
          style={{ fontFamily: "'DM Mono', monospace", color: MUTED }}
        >
          {experience.period}
        </span>
      </div>

      <h3 className="text-base sm:text-lg font-black text-foreground mb-1">{experience.role}</h3>
      <p className="text-xs sm:text-sm font-semibold mb-3" style={{ color: experience.color }}>
        {experience.company}
      </p>
      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground mb-4 sm:mb-5">
        {experience.description}
      </p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {experience.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs font-semibold rounded-full"
            style={{
              backgroundColor: `${experience.color}20`,
              color: experience.color,
              fontFamily: "'DM Mono', monospace",
              border: `1px solid ${experience.color}30`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const Experience = forwardRef<HTMLElement>(function Experience(_props, ref) {
  return (
    <section
      ref={ref}
      id="experience"
      className="relative py-20 sm:py-28 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <circle cx="10%" cy="15%" r="90" fill="none" stroke={GREEN} strokeWidth="1.5" opacity="0.10" />
          <rect x="88%" y="70%" width="50" height="50" fill="none" stroke={PURPLE} strokeWidth="1.5" opacity="0.12" transform="rotate(15 0 0)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <SectionLabel number="02" label="Experience" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-foreground leading-tight">
          Where {"I've"} learned.
        </h2>
        <p className="text-muted-foreground mb-10 sm:mb-14 max-w-lg leading-relaxed text-sm sm:text-base">
          A timeline of internships and hands-on programs that shaped how I build software.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {EXPERIENCES.map((experience) => (
            <ExperienceCard key={experience.role} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Experience;
