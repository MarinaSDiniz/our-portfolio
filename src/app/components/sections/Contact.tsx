import { forwardRef, useState } from "react";
import { ArrowRight, Mail, Zap } from "lucide-react";
import { BG, CREAM, FORMSPREE_ENDPOINT, Github, Linkedin, MUTED, PURPLE, SectionLabel, TEAL } from "./shared";

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

const Contact = forwardRef<HTMLElement>(function Contact(_props, ref) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    <section
      ref={ref}
      id="contact"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: CREAM }}
    >
      <svg className="absolute bottom-0 left-0 opacity-10 pointer-events-none" width="200" height="200" viewBox="0 0 250 250" aria-hidden>
        <circle cx="0" cy="250" r="110" fill={PURPLE} />
        <rect x="155" y="20" width="55" height="55" fill={TEAL} transform="rotate(25 180 47)" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <SectionLabel number="04" label="Contact" />

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
                  style={{ backgroundColor: "#3DD68C20" }}
                >
                  <Zap size={24} style={{ color: "#3DD68C" }} />
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
  );
});

export default Contact;
