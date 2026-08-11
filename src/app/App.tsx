import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Code2,
  Layers,
  Zap,
  Smartphone,
} from "lucide-react";

const TEAL = "#29d1d6";
const YELLOW = "#FFD166";
const PURPLE = "#7B68EE";
const GREEN = "#3DD68C";
const BG = "#0D0D1F";
const CREAM = "#F4EFE4";
const MUTED = "#9B97C2";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgogygge";
const PHOTO_URL = new URL("../../assets/photo.jpg", import.meta.url).href;

const NAV_LINKS = ["about", "projects", "contact"] as const;
type Section = (typeof NAV_LINKS)[number];

const SKILLS = [
  { label: "Mobile & Frontend", items: ["React Native", "React", "TypeScript", "JavaScript", "Swift"] },
  { label: "Backend & Infra", items: ["Node.js", "Java", "C++", "C", "Docker", "SQL"] },
];

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

function GeomShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
        <circle cx="88%" cy="12%" r="110" fill="none" stroke={TEAL} strokeWidth="1.5" opacity="0.12" />
        <circle cx="88%" cy="12%" r="70" fill={TEAL} opacity="0.03" />
        <rect x="4%" y="68%" width="55" height="55" fill="none" stroke={YELLOW} strokeWidth="1.5" opacity="0.12" transform="rotate(30 50 390)" />
        <polygon points="93%,62% 97%,70% 89%,70%" fill={PURPLE} opacity="0.18" />
        <line x1="0" y1="52%" x2="18%" y2="52%" stroke={TEAL} strokeWidth="1" opacity="0.15" />
        <circle cx="12%" cy="88%" r="35" fill="none" stroke={GREEN} strokeWidth="1.5" opacity="0.10" />
      </svg>
    </div>
  );
}

function Pill({
  children,
  color = TEAL,
  dark = false,
}: {
  children: React.ReactNode;
  color?: string;
  dark?: boolean;
}) {
  return (
    <span
      className="px-3 py-1 text-xs font-semibold rounded-full"
      style={{
        backgroundColor: dark ? `${color}20` : `${color}18`,
        color: dark ? color : color,
        fontFamily: "'DM Mono', monospace",
        border: `1px solid ${color}30`,
      }}
    >
      {children}
    </span>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState<Section | "home">("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const refs = {
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current: Section | "home" = "home";
      (Object.entries(refs) as [Section, React.RefObject<HTMLElement>][]).forEach(([key, ref]) => {
        if (ref.current && ref.current.getBoundingClientRect().top <= 100) current = key;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section: Section) => {
    refs[section].current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSending(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send form");
      }

      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setSubmitError("Could not send your message right now. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          {/* logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 shrink-0"
          >
            <span
              className="w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center text-xs font-black"
              style={{ backgroundColor: TEAL, color: BG, fontFamily: "'DM Mono', monospace" }}
            >
              {"</>"}
            </span>
            <span className="font-black text-base sm:text-lg tracking-tight text-foreground">portfolio</span>
          </button>

          {/* desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 capitalize"
                  style={
                    activeSection === link
                      ? { backgroundColor: TEAL, color: BG }
                      : { color: MUTED }
                  }
                >
                  {link}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo("contact")}
                className="ml-2 px-5 py-2 rounded-full text-sm font-bold border transition-all duration-200 hover:opacity-80"
                style={{ borderColor: TEAL, color: TEAL }}
              >
                Get in touch
              </button>
            </li>
          </ul>

          {/* mobile burger */}
          <button className="md:hidden text-foreground p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-card border-b border-border px-4 pb-5 pt-2">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="w-full text-left px-4 py-3 rounded-xl font-semibold capitalize text-foreground hover:bg-muted transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full py-3 rounded-xl font-bold text-sm"
                  style={{ backgroundColor: TEAL, color: BG }}
                >
                  Get in touch
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <GeomShapes />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${BG} 55%, #16162E 55%)` }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: TEAL }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 pb-16 sm:pb-20 w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-6 opacity-70"
              style={{ fontFamily: "'DM Mono', monospace", color: YELLOW }}
            >
              Intern · React Native & TypeScript
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none tracking-tight mb-5 sm:mb-6"
              style={{ color: CREAM }}
            >
              Hi, I am
              <br />
              <span style={{ color: TEAL }}>Marina</span>
              <br />
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md" style={{ color: MUTED }}>
              Mobile developer passionate about building native experiences that actually work — from prototype to production.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ backgroundColor: TEAL, color: BG }}
              >
                View projects <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm border transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ borderColor: "rgba(244,239,228,0.2)", color: CREAM }}
              >
                About me
              </button>
            </div>

            <div className="mt-10 sm:mt-14 flex items-center gap-5 sm:gap-6">
              <a href="https://github.com/MarinaSDiniz" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/marina-silva-diniz-939a44199" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:marinasilvadiniz@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
              <span className="h-px flex-1 max-w-12 opacity-20" style={{ backgroundColor: CREAM }} />
              <span className="text-xs hidden sm:inline" style={{ fontFamily: "'DM Mono', monospace", color: MUTED }}>
                Available
              </span>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: GREEN }} />
            </div>
          </div>

          {/* code card — hidden on small screens */}
          <div className="hidden lg:flex justify-center items-center">
            <div
              className="relative w-full max-w-sm rounded-2xl p-6 border"
              style={{ backgroundColor: "#16162E", borderColor: "rgba(244,239,228,0.08)", fontFamily: "'DM Mono', monospace" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: TEAL }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: YELLOW }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: GREEN }} />
                <span className="ml-auto text-xs opacity-30 text-foreground">portfolio.ts</span>
              </div>
              <CodeBlock />
              <div className="mt-5 flex items-center gap-2">
                <Terminal size={12} style={{ color: GREEN }} />
                <span className="text-xs animate-pulse" style={{ color: GREEN }}>compiling ideas_</span>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2" style={{ borderColor: YELLOW, transform: "rotate(15deg)" }} />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full" style={{ backgroundColor: TEAL, opacity: 0.4 }} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>scroll</span>
          <div className="w-px h-6 sm:h-8 bg-foreground animate-pulse" />
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section
        ref={refs.about}
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
                {[
                  { num: "2", label: "Mobile languages" },
                  { num: "6+", label: "Technologies in belt" },
                  { num: "∞", label: "Curiosity" },
                ].map(({ num, label }) => (
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
                  style={{ background: `linear-gradient(135deg, ${TEAL}40 0%, ${PURPLE}30 100%)` }}
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

      {/* ── PROJETOS ── */}
      <section
        ref={refs.projects}
        id="projects"
        className="relative py-20 sm:py-28 bg-background overflow-hidden"
      >
        <GeomShapes />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <SectionLabel number="02" label="Projects" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-foreground leading-tight">
            What I built.
          </h2>
          <p className="text-muted-foreground mb-10 sm:mb-14 max-w-lg leading-relaxed text-sm sm:text-base">
            Academic projects, hackathons, and personal experiments — each one a real learning experience.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
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

      {/* ── CONTATO ── */}
      <section
        ref={refs.contact}
        id="contact"
        className="relative py-20 sm:py-28 overflow-hidden"
        style={{ backgroundColor: CREAM }}
      >
        <svg className="absolute bottom-0 left-0 opacity-10 pointer-events-none" width="200" height="200" viewBox="0 0 250 250" aria-hidden>
          <circle cx="0" cy="250" r="110" fill={PURPLE} />
          <rect x="155" y="20" width="55" height="55" fill={TEAL} transform="rotate(25 180 47)" />
        </svg>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <SectionLabel number="03" label="Contact" />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 sm:mb-6"
                style={{ color: BG }}
              >
                {"Let's"} build something{" "}
                <span style={{ color: TEAL }}>great</span> together?
              </h2>
              <p className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-10" style={{ color: "#4A4A6A" }}>
                {"I'm"} open to opportunities, projects, and tech conversations. Send me a message — {"I'll"} get back to you soon!
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "marinasilvadiniz@gmail.com" },
                  { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/marina-silva-diniz-939a44199" },
                  { icon: Github, label: "GitHub", value: "https://github.com/MarinaSDiniz" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${TEAL}18` }}
                    >
                      <Icon size={17} style={{ color: TEAL }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ fontFamily: "'DM Mono', monospace", color: MUTED }}>
                        {label}
                      </div>
                      <div className="text-sm font-semibold" style={{ color: BG }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 sm:p-8 border"
              style={{ backgroundColor: BG, borderColor: "rgba(244,239,228,0.08)" }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${GREEN}20` }}
                  >
                    <Zap size={24} style={{ color: GREEN }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground text-sm">{"I'll"} get back to you soon. Thank you!</p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-foreground mb-5 sm:mb-6">Send a message</h3>
                  {submitError && (
                    <p className="mb-4 text-sm font-semibold" style={{ color: "#ff9d9d" }}>
                      {submitError}
                    </p>
                  )}
                  <div className="space-y-4 sm:space-y-5">
                    <FormField label="Name" type="text" placeholder="Your name" value={formData.name} onChange={(v) => setFormData((f) => ({ ...f, name: v }))} />
                    <FormField label="Email" type="email" placeholder="your@email.com" value={formData.email} onChange={(v) => setFormData((f) => ({ ...f, email: v }))} />
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace", color: MUTED }}>
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell me about your project or opportunity..."
                        value={formData.message}
                        onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all duration-200 focus:ring-2 border"
                        style={{ backgroundColor: "#16162E", color: CREAM, borderColor: "rgba(244,239,228,0.08)", fontFamily: "inherit" }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ backgroundColor: TEAL, color: BG }}
                    >
                      {sending ? "Sending..." : "Send"} <ArrowRight size={15} />
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-6 sm:py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-center sm:text-left" style={{ fontFamily: "'DM Mono', monospace", color: MUTED }}>
            © 2026· Built with React + TypeScript ✨
          </span>
          <div className="flex items-center gap-4">
            <a href="https://github.com/MarinaSDiniz" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub"><Github size={16} /></a>
            <a href="https://www.linkedin.com/in/marina-silva-diniz-939a44199" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="mailto:marinasilvadiniz@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CodeBlock() {
  const lines: { tokens: { text: string; color: string }[] }[] = [
    { tokens: [{ text: "const ", color: PURPLE }, { text: "dev", color: CREAM }, { text: " = {", color: MUTED }] },
    { tokens: [{ text: "  name", color: GREEN }, { text: ": ", color: MUTED }, { text: '"Marina"', color: YELLOW }, { text: ",", color: MUTED }] },
    { tokens: [{ text: "  focus", color: GREEN }, { text: ": ", color: MUTED }, { text: '"React Native"', color: YELLOW }, { text: ",", color: MUTED }] },
    { tokens: [{ text: "  stack", color: GREEN }, { text: ": [", color: MUTED }] },
    { tokens: [{ text: '    "TypeScript"', color: YELLOW }, { text: ",", color: MUTED }] },
    { tokens: [{ text: '    "Swift"', color: YELLOW }, { text: ", ", color: MUTED }, { text: '"Java"', color: YELLOW }, { text: ",", color: MUTED }] },
    { tokens: [{ text: '    "Node.js"', color: YELLOW }, { text: ",", color: MUTED }] },
    { tokens: [{ text: "  ],", color: MUTED }] },
    { tokens: [{ text: "  mode", color: GREEN }, { text: ": ", color: MUTED }, { text: '"always learning"', color: TEAL }, { text: ",", color: MUTED }] },
    { tokens: [{ text: "};", color: MUTED }] },
  ];
  return (
    <pre className="text-xs leading-[1.8] select-none">
      {lines.map((line, i) => (
        <div key={i}>
          {line.tokens.map((tok, j) => (
            <span key={j} style={{ color: tok.color }}>{tok.text}</span>
          ))}
        </div>
      ))}
    </pre>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8 sm:mb-12 lg:mb-16">
      <span
        className="text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
        style={{ fontFamily: "'DM Mono', monospace", color: TEAL }}
      >
        {number} / {label}
      </span>
      <div className="h-px flex-1 opacity-20" style={{ backgroundColor: TEAL }} />
    </div>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS[0]; index: number }) {
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

function FormField({
  label, type, placeholder, value, onChange,
}: {
  label: string; type: string; placeholder: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Mono', monospace", color: MUTED }}>
        {label}
      </label>
      <input
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 border"
        style={{ backgroundColor: "#16162E", color: CREAM, borderColor: "rgba(244,239,228,0.08)", fontFamily: "inherit" }}
      />
    </div>
  );
}
