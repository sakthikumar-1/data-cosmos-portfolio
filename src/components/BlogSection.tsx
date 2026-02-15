import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const posts = [
  {
    title: "How I Built My Diabetes Prediction Dashboard",
    date: "Sep 2025",
    desc: "Walkthrough of project lifecycle — from raw CSV to final Power BI dashboard with data cleaning, logistic regression, and design choices optimizing clarity.",
  },
  {
    title: "5 Lessons from My Data Analytics Training at GETIN",
    date: "Aug 2025",
    desc: "Reflections on mastering Power BI, importance of story-driven dashboards, and real data examples in finance and retail.",
  },
  {
    title: "Why Data Storytelling Matters More Than Ever",
    date: "Oct 2025",
    desc: "How storytelling elevates dashboards into decision-making tools with insights into visual perception and narrative flow.",
  },
];

const BlogSection = () => (
  <section id="blog" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="section-subtitle mb-2">Insights</p>
        <h2 className="section-title mb-3">
          <span className="gradient-text-mint">Blog</span>
        </h2>
        <p className="mb-10 text-sm text-muted-foreground">
          "Every dashboard has a story — here's where I share mine."
        </p>
      </AnimatedSection>

      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <motion.div whileHover={{ y: -4 }} className="glass-card p-6">
              <span className="text-xs text-primary">{p.date}</span>
              <h3 className="mt-2 mb-3 font-display text-sm font-semibold text-foreground">
                📝 {p.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
