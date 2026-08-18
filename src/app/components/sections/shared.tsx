// Shared constants, types and small presentational helpers used across the page sections.

export const TEAL = "#29d1d6";
export const YELLOW = "#FFD166";
export const PURPLE = "#7B68EE";
export const GREEN = "#3DD68C";
export const BG = "#0D0D1F";
export const CREAM = "#F4EFE4";
export const MUTED = "#9B97C2";

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgogygge";

export const NAV_LINKS = ["about", "experience", "projects", "contact"] as const;
export type Section = (typeof NAV_LINKS)[number];

// lucide-react's current version does not ship brand icons (Github/Linkedin) anymore,
// so we provide small inline SVG equivalents to keep the same visual style.
export function Github({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function Linkedin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function GeomShapes() {
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

export function Pill({
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
        color,
        fontFamily: "'DM Mono', monospace",
        border: `1px solid ${color}30`,
      }}
    >
      {children}
    </span>
  );
}

export function SectionLabel({ number, label }: { number: string; label: string }) {
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
