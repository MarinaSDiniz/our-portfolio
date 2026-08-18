import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, Menu, Terminal, X } from "lucide-react";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import {
  BG,
  CREAM,
  GREEN,
  Github,
  Linkedin,
  MUTED,
  NAV_LINKS,
  Section,
  TEAL,
  YELLOW,
} from "./components/sections/shared";

function CodeBlock() {
  const lines: { tokens: { text: string; color: string }[] }[] = [
    { tokens: [{ text: "const ", color: "#7B68EE" }, { text: "dev", color: CREAM }, { text: " = {", color: MUTED }] },
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

export default function App() {
  const [activeSection, setActiveSection] = useState<Section | "home">("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const refs = {
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <circle cx="88%" cy="12%" r="110" fill="none" stroke={TEAL} strokeWidth="1.5" opacity="0.12" />
            <circle cx="88%" cy="12%" r="70" fill={TEAL} opacity="0.03" />
            <rect x="4%" y="68%" width="55" height="55" fill="none" stroke={YELLOW} strokeWidth="1.5" opacity="0.12" transform="rotate(30 50 390)" />
            <polygon points="93%,62% 97%,70% 89%,70%" fill="#7B68EE" opacity="0.18" />
            <line x1="0" y1="52%" x2="18%" y2="52%" stroke={TEAL} strokeWidth="1" opacity="0.15" />
            <circle cx="12%" cy="88%" r="35" fill="none" stroke={GREEN} strokeWidth="1.5" opacity="0.10" />
          </svg>
        </div>
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

      <About ref={refs.about} />
      <Experience ref={refs.experience} />
      <Projects ref={refs.projects} />
      <Contact ref={refs.contact} />

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
