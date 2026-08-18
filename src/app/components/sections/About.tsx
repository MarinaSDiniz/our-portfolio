import { forwardRef } from "react";
import { BG, CREAM, MUTED, TEAL, YELLOW, SectionLabel } from "./shared";

const PHOTO_URL = new URL("../../../../assets/photo.jpg", import.meta.url).href;

const SKILLS = [
  { label: "Mobile & Frontend", items: ["React Native", "React", "TypeScript", "JavaScript", "Swift"] },
  { label: "Backend & Infra", items: ["Node.js", "Java", "C++", "C", "Docker", "SQL"] },
];

const STATS = [
  { num: "2", label: "Mobile languages" },
  { num: "6+", label: "Technologies in belt" },
  { num: "∞", label: "Curiosity" },
];

const About = forwardRef<HTMLElement>(function About(_props, ref) {
  return (
    <section
      ref={ref}
      id="about"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: CREAM }}
    >
      <svg className="absolute top-0 right-0 opacity-10 pointer-events-none" width="200" height="200" viewBox="0 0 300 300" aria-hidden>
        <circle cx="250" cy="50" r="100" fill={TEAL} />
        <rect x="100" y="200" width="80" height="80" fill={YELLOW} transform="rotate(20 140 240)" />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <SectionLabel number="01" label="About me" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 sm:mb-8"
              style={{ color: BG }}
            >
              An intern who{" "}
              <span style={{ backgroundImage: `linear-gradient(transparent 68%, ${TEAL}60 68%)` }}>
                ships
              </span>
              {" "}real code.
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#4A4A6A" }}>
              {"I'm"} early in my career but already have hands-on experience with React Native and TypeScript in my current internship. I believe the best way to learn is by building — and {"that's"} exactly how I got here.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#4A4A6A" }}>
              I took part in the <strong>Software Agency</strong> program at university, where Software Engineering teams deliver real projects for partner companies. I was also selected for {"IBM's"} <strong>HackaTruck</strong>, where I learned Swift from scratch and shipped an iOS app.
            </p>
            <p className="text-base leading-relaxed mb-8 sm:mb-10" style={{ color: "#4A4A6A" }}>
              I always try to understand the problem before writing a single line — and I {"won't"} settle for code that just works; it has to be readable too.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {STATS.map(({ num, label }) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-black mb-1" style={{ color: TEAL }}>{num}</div>
                  <div className="text-xs leading-snug" style={{ color: MUTED, fontFamily: "'DM Mono', monospace" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-7 sm:space-y-8">
            {SKILLS.map(({ label, items }) => (
              <div key={label}>
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: TEAL }} />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ fontFamily: "'DM Mono', monospace", color: BG }}
                  >
                    {label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm font-semibold rounded-full border"
                      style={{ borderColor: "rgba(13,13,31,0.15)", color: BG, backgroundColor: "rgba(13,13,31,0.05)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Photo */}
            <div
              className="rounded-2xl overflow-hidden relative mt-2 h-[180px] sm:h-[220px]"
              style={{ backgroundColor: "#16162E" }}
            >
              <img
                src={PHOTO_URL}
                alt="Desenvolvedora trabalhando"
                className="w-full h-full object-cover opacity-75"
                style={{ filter: "grayscale(15%)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${TEAL}40 0%, #7B68EE30 100%)` }}
              />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-xs" style={{ fontFamily: "'DM Mono', monospace", color: "rgba(244,239,228,0.85)" }}>
                  Mobile dev · Brazil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
