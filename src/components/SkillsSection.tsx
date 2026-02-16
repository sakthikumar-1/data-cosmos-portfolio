import { lazy, Suspense } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const SkillGraph3D = lazy(() => import("./SkillGraph3D"));

const extendedSkills = [
  { icon: "📊", title: "Data Tools", desc: "Excel • Power BI • Tableau", sub: "Advanced Excel, Power Query, Interactive Dashboards" },
  { icon: "🐍", title: "Programming", desc: "Python • Pandas • NumPy • Scikit-Learn", sub: "Data wrangling, automation, predictive analytics" },
  { icon: "🗄️", title: "Databases", desc: "MySQL", sub: "Query optimization, joins, schema design" },
  { icon: "🧹", title: "Processing", desc: "Pandas • NumPy", sub: "Data cleaning, EDA, visualization, report building" },
  { icon: "🤖", title: "ML Methods", desc: "Scikit-Learn • Classification", sub: "Predictive modeling, feature engineering" },
  { icon: "💭", title: "Soft Skills", desc: "Analytical Thinking • Storytelling", sub: "Translating data into business impact" },
];

const SkillsSection = () => (
  <section id="skills" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="section-subtitle mb-2">Skills Universe</p>
        <h2 className="section-title mb-3">
          My <span className="gradient-text-mint">Toolkit</span>
        </h2>
        <p className="mb-12 text-sm italic text-muted-foreground">
          "My mind is a library; these are my favorite books."
        </p>
      </AnimatedSection>

      {/* 3D Interactive Skill Graph */}
      <AnimatedSection>
        <Suspense
          fallback={
            <div className="flex h-[450px] items-center justify-center text-sm text-muted-foreground">
              Loading Skill Graph...
            </div>
          }
        >
          <SkillGraph3D />
        </Suspense>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Hover over nodes to explore • Drag to rotate
        </p>
      </AnimatedSection>

      {/* Extended Skills Grid */}
      <AnimatedSection>
        <p className="section-subtitle mb-6 mt-16">
          "Precision meets curiosity in every analysis."
        </p>
      </AnimatedSection>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {extendedSkills.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-5">
              <div className="mb-2 text-2xl">{s.icon}</div>
              <h3 className="font-display text-sm font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-xs font-medium text-primary">{s.desc}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{s.sub}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
