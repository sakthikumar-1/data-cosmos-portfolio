import AnimatedSection from "./AnimatedSection";
import { ExternalLink, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const mlProjects = [
  {
    emoji: "🩺",
    title: "Diabetes Prediction Web Application",
    tags: ["Python", "Scikit-Learn", "Flask", "Power BI"],
    desc: "Built an end-to-end ML web application using Random Forest & XGBoost for diabetes risk prediction. Deployed via Flask with interactive Power BI dashboards for clinical decision support.",
    link: "https://github.com/sakthikumar-1/diabetes-prediction",
    caseStudy: {
      data: "Used the PIMA Indian Diabetes dataset (768 records, 8 features). Performed missing value imputation, normalization, and feature correlation analysis.",
      model: "Trained Random Forest & XGBoost classifiers achieving 85% accuracy. Applied GridSearchCV for hyperparameter tuning and 10-fold cross-validation.",
      deploy: "Deployed via Flask REST API with HTML/CSS frontend. Integrated interactive Power BI dashboards showing glucose, BMI, and age distribution trends.",
    },
  },
  {
    emoji: "🎯",
    title: "AI Career Intelligence & Role Recommendation",
    tags: ["Python", "Scikit-Learn", "NLP", "Flask"],
    desc: "Designed an intelligent career recommendation system using ML classification algorithms. Analyzes user skills and suggests optimal career paths with confidence scoring.",
    link: "https://github.com/sakthikumar-1/ai-career-recommendation",
    caseStudy: {
      data: "Curated career-skill dataset mapping 50+ job roles to technical and soft skills. Preprocessed text features using TF-IDF vectorization.",
      model: "Implemented multi-class classification with ensemble methods. NLP pipeline extracts skill keywords and matches against role profiles with confidence scores.",
      deploy: "Flask web interface where users input their skills and receive ranked career suggestions with match percentages and growth paths.",
    },
  },
];

const dataProjects = [
  {
    emoji: "🔍",
    title: "Cybercrime & Online Fraud Risk Analysis",
    tags: ["Python", "Power BI", "EDA", "Security Analytics"],
    desc: "Conducted comprehensive fraud risk analysis using Python and data analytics. Processed large datasets to detect patterns, suspicious behavior, and fraud indicators. Used Power BI to visualize threat levels.",
    link: "https://github.com/sakthikumar-1/cybercrime-analysis",
    caseStudy: {
      data: "Analyzed 10,000+ transaction records flagged for suspicious activity. Cleaned and categorized fraud types across financial and digital crime domains.",
      model: "Applied statistical analysis and anomaly detection to identify fraud patterns. Built risk scoring matrices based on transaction frequency and amount.",
      deploy: "Created Power BI dashboard with geographic fraud heatmaps, trend lines, and KPI cards for security teams to monitor real-time risk levels.",
    },
  },
  {
    emoji: "🏦",
    title: "Bank Loan Risk Analysis",
    tags: ["Python", "Power BI", "Financial Analytics", "Dashboard"],
    desc: "Built loan risk analysis dashboard on real-world financial data. Performed data cleaning, exploratory analysis, identified key factors behind loan approvals. Created interactive dashboards visualizing credit scores and income levels.",
    link: "https://github.com/sakthikumar-1/bank-loan-analysis",
    caseStudy: {
      data: "Processed 5,000+ loan applications with income, credit history, employment, and property data. Handled missing values and outlier treatment.",
      model: "Performed correlation analysis identifying credit score, income, and employment length as top predictors. Built risk classification tiers.",
      deploy: "Interactive Power BI dashboard with loan approval funnels, income vs. loan amount scatter plots, and demographic breakdown filters.",
    },
  },
  {
    emoji: "👕",
    title: "E-Commerce Fashion Sales Analysis",
    tags: ["Python", "Power BI", "Retail Analytics", "KPIs"],
    desc: "Examined retail sales data to identify customer behavior and regional performance. Built intuitive Power BI dashboards visualizing KPIs for marketing teams, enabling data-driven campaign refinement.",
    link: "https://github.com/sakthikumar-1/ecommerce-analysis",
    caseStudy: {
      data: "Analyzed 15,000+ e-commerce transactions across categories, regions, and customer segments. Cleaned timestamp data and derived monthly trends.",
      model: "Segmented customers by RFM analysis (Recency, Frequency, Monetary). Identified top-performing categories and seasonal sales patterns.",
      deploy: "Power BI dashboard with regional heatmaps, category breakdowns, customer segmentation charts, and automated KPI tracking for marketing teams.",
    },
  },
];

const ProjectCard = ({ project, variant }: { project: typeof mlProjects[0]; variant: "ml" | "analytics" }) => {
  const [expanded, setExpanded] = useState(false);
  const accentClass = variant === "ml" ? "border-l-primary" : "border-l-accent";
  const badgeClass = variant === "ml" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`glass-card flex flex-col border-l-2 ${accentClass} p-6`}
    >
      <div className="flex items-start justify-between">
        <span className="mb-3 text-3xl">{project.emoji}</span>
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${badgeClass}`}>
          {variant === "ml" ? "ML" : "Analytics"}
        </span>
      </div>
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

      {/* Case Study Expansion */}
      {project.caseStudy && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mb-3 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronDown size={14} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
            {expanded ? "Hide" : "View"} Case Study
          </button>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-3 rounded-lg border border-border bg-secondary/30 p-4 mb-3">
                  {[
                    { step: "📁 Data", text: project.caseStudy.data },
                    { step: "🧠 Model", text: project.caseStudy.model },
                    { step: "🚀 Deploy", text: project.caseStudy.deploy },
                  ].map((s) => (
                    <div key={s.step}>
                      <p className="text-[10px] font-semibold text-primary">{s.step}</p>
                      <p className="text-[11px] leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

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
};

const ProjectsSection = () => (
  <section id="projects" className="relative">
    <div className="section-container">
      {/* ML Projects */}
      <AnimatedSection>
        <p className="section-subtitle mb-2">AI in Action</p>
        <h2 className="section-title mb-3">
          ML <span className="gradient-text-coral">Projects</span>
        </h2>
        <p className="mb-10 text-sm italic text-muted-foreground">
          "I teach machines to see what the naked eye cannot."
        </p>
      </AnimatedSection>

      <div className="mb-20 grid gap-5 md:grid-cols-2">
        {mlProjects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <ProjectCard project={p} variant="ml" />
          </AnimatedSection>
        ))}
      </div>

      {/* Data Analytics Projects */}
      <AnimatedSection>
        <p className="section-subtitle mb-2">Signals in the Noise</p>
        <h2 className="section-title mb-3">
          Data Analytics <span className="gradient-text-mint">Projects</span>
        </h2>
        <p className="mb-10 text-sm italic text-muted-foreground">
          "I don't just see charts; I see the stories they're trying to tell."
        </p>
      </AnimatedSection>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {dataProjects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <ProjectCard project={p} variant="analytics" />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
