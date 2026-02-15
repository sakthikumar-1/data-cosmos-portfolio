import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const skills = [
  { icon: "🐍", name: "Python", desc: "Pandas, NumPy, Scikit-Learn", tip: "My core for automation & analytics" },
  { icon: "🗄️", name: "SQL", desc: "MySQL, Queries, Joins", tip: "The language of data" },
  { icon: "📊", name: "Power BI", desc: "DAX, Dashboards, Power Query", tip: "Transforming insights into stories" },
  { icon: "📈", name: "Tableau", desc: "Visualizations, Stories", tip: "Crafting clarity through visuals" },
  { icon: "📋", name: "Excel", desc: "Advanced, Macros, PivotTables", tip: "The foundation of data work" },
  { icon: "🤖", name: "Machine Learning", desc: "Classification, Flask Deployment", tip: "Predicting tomorrow's patterns" },
];

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
        <p className="mb-12 text-sm text-muted-foreground">
          "My toolkit spans languages, libraries, and the logic that links them."
        </p>
      </AnimatedSection>

      {/* Core Skills - Node Network */}
      <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {skills.map((s, i) => (
          <AnimatedSection key={s.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card group relative flex flex-col items-center p-5 text-center"
            >
              <span className="mb-2 text-3xl">{s.icon}</span>
              <h3 className="font-display text-sm font-semibold text-foreground">{s.name}</h3>
              <p className="mt-1 text-[11px] text-muted-foreground">{s.desc}</p>
              {/* Tooltip */}
              <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-primary px-3 py-1 text-[11px] text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {s.tip}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Extended Skills Grid */}
      <AnimatedSection>
        <p className="section-subtitle mb-6">
          "Precision meets curiosity in every analysis."
        </p>
      </AnimatedSection>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {extendedSkills.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <div className="glass-card p-5">
              <div className="mb-2 text-2xl">{s.icon}</div>
              <h3 className="font-display text-sm font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-xs font-medium text-primary">{s.desc}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{s.sub}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
