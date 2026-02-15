import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const mlProjects = [
  {
    emoji: "🩺",
    title: "Diabetes Prediction Web Application",
    tags: ["Python", "Scikit-Learn", "Flask", "Power BI"],
    desc: "Built an end-to-end ML web application using Random Forest & XGBoost for diabetes risk prediction. Deployed via Flask with interactive Power BI dashboards for clinical decision support.",
    link: "https://github.com/sakthikumar-1/diabetes-prediction",
  },
  {
    emoji: "🎯",
    title: "AI Career Intelligence & Role Recommendation",
    tags: ["Python", "Scikit-Learn", "NLP", "Flask"],
    desc: "Designed an intelligent career recommendation system using ML classification algorithms. Analyzes user skills and suggests optimal career paths with confidence scoring.",
    link: "https://github.com/sakthikumar-1/ai-career-recommendation",
  },
];

const dataProjects = [
  {
    emoji: "🔍",
    title: "Cybercrime & Online Fraud Risk Analysis",
    tags: ["Python", "Power BI", "EDA", "Security Analytics"],
    desc: "Conducted comprehensive fraud risk analysis using Python and data analytics. Processed large datasets to detect patterns, suspicious behavior, and fraud indicators. Used Power BI to visualize threat levels.",
    link: "https://github.com/sakthikumar-1/cybercrime-analysis",
  },
  {
    emoji: "🏦",
    title: "Bank Loan Risk Analysis",
    tags: ["Python", "Power BI", "Financial Analytics", "Dashboard"],
    desc: "Built loan risk analysis dashboard on real-world financial data. Performed data cleaning, exploratory analysis, identified key factors behind loan approvals. Created interactive dashboards visualizing credit scores and income levels.",
    link: "https://github.com/sakthikumar-1/bank-loan-analysis",
  },
  {
    emoji: "👕",
    title: "E-Commerce Fashion Sales Analysis",
    tags: ["Python", "Power BI", "Retail Analytics", "KPIs"],
    desc: "Examined retail sales data to identify customer behavior and regional performance. Built intuitive Power BI dashboards visualizing KPIs for marketing teams, enabling data-driven campaign refinement.",
    link: "https://github.com/sakthikumar-1/ecommerce-analysis",
  },
];

const ProjectCard = ({ project }: { project: typeof mlProjects[0] }) => (
  <motion.div whileHover={{ y: -4 }} className="glass-card flex flex-col p-6">
    <span className="mb-3 text-3xl">{project.emoji}</span>
    <h3 className="mb-2 font-display text-base font-semibold text-foreground">
      {project.title}
    </h3>
    <div className="mb-3 flex flex-wrap gap-1.5">
      {project.tags.map((t) => (
        <span key={t} className="tag-pill">{t}</span>
      ))}
    </div>
    <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
      {project.desc}
    </p>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-cosmos-coral"
    >
      <ExternalLink size={13} /> View on GitHub
    </a>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projects" className="relative">
    <div className="section-container">
      {/* ML Projects */}
      <AnimatedSection>
        <p className="section-subtitle mb-2">AI in Action</p>
        <h2 className="section-title mb-3">
          ML <span className="gradient-text-coral">Projects</span>
        </h2>
        <p className="mb-10 text-sm text-muted-foreground">
          "Building bridges between models and real-world impact."
        </p>
      </AnimatedSection>

      <div className="mb-20 grid gap-5 md:grid-cols-2">
        {mlProjects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <ProjectCard project={p} />
          </AnimatedSection>
        ))}
      </div>

      {/* Data Analytics Projects */}
      <AnimatedSection>
        <p className="section-subtitle mb-2">Signals in the Noise</p>
        <h2 className="section-title mb-3">
          Data Analytics <span className="gradient-text-mint">Projects</span>
        </h2>
        <p className="mb-10 text-sm text-muted-foreground">
          "Finding signals in the noise to drive smarter decisions."
        </p>
      </AnimatedSection>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {dataProjects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <ProjectCard project={p} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
