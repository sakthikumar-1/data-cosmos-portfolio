import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import profileImg from "@/assets/sakthi-profile.jpg";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
    {/* Gradient orbs */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute right-[15%] bottom-[25%] h-64 w-64 rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
    </div>

    <div className="section-container relative z-10 flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
      {/* Profile */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="flex-shrink-0"
      >
        <div className="profile-halo relative h-56 w-56 overflow-hidden rounded-full border-2 border-primary/30 sm:h-64 sm:w-64">
          <img
            src={profileImg}
            alt="Sakthi Kumar B"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Text */}
      <div className="text-center lg:text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          I craft clarity from complexity
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="section-title mb-4"
        >
          Hi, I'm{" "}
          <span className="gradient-text-coral">Sakthi Kumar B</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 max-w-lg text-lg text-muted-foreground"
        >
          Transforming data into stories that drive decisions.
          <br />
          <span className="italic text-primary">
            "Turning data into decisions, and code into cosmos."
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 lg:justify-start"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
          >
            <ArrowDown size={16} /> View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:bg-muted"
          >
            <Mail size={16} /> Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
