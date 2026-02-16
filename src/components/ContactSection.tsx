import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-subtitle mb-2">Let's Collaborate</p>
          <h2 className="section-title mb-3">
            Get in <span className="gradient-text-coral">Touch</span>
          </h2>
          <p className="mb-10 text-sm italic text-muted-foreground">
            "The best discoveries are made together."
          </p>
        </AnimatedSection>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass-card flex flex-col gap-4 p-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                🚀 Send Message
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card flex flex-col justify-center gap-5 p-6">
              <a href="tel:+918489815297" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Phone size={18} className="text-primary" /> +91 8489815297
              </a>
              <a href="mailto:b.sakthikumar10@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Mail size={18} className="text-primary" /> b.sakthikumar10@gmail.com
              </a>
              <a href="https://linkedin.com/in/sakthikumar-b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Linkedin size={18} className="text-primary" /> linkedin.com/in/sakthikumar-b
              </a>
              <a href="https://github.com/sakthikumar-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Github size={18} className="text-primary" /> github.com/sakthikumar-1
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Sign-off */}
      <AnimatedSection>
        <div className="mt-20 pb-10 text-center">
          <p className="text-lg font-display font-semibold text-muted-foreground">
            🌌 "Data is infinite — and so is curiosity."
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © 2025 Sakthi Kumar B. Built with passion.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ContactSection;
