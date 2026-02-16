import { motion, AnimatePresence } from "framer-motion";
import { X, Code, Database, BarChart3, Brain, FileSpreadsheet, Briefcase, GraduationCap, Award } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const skillCategories = [
  {
    icon: <Code size={16} />,
    title: "Programming",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
    color: "text-blue-400",
  },
  {
    icon: <Database size={16} />,
    title: "Databases",
    skills: ["MySQL", "SQL Queries", "Schema Design"],
    color: "text-yellow-400",
  },
  {
    icon: <BarChart3 size={16} />,
    title: "Visualization",
    skills: ["Power BI", "Tableau", "DAX", "Power Query"],
    color: "text-orange-400",
  },
  {
    icon: <Brain size={16} />,
    title: "Machine Learning",
    skills: ["Random Forest", "XGBoost", "Classification", "Flask Deployment"],
    color: "text-accent",
  },
  {
    icon: <FileSpreadsheet size={16} />,
    title: "Excel & Tools",
    skills: ["Advanced Excel", "Macros", "PivotTables", "EDA"],
    color: "text-emerald-400",
  },
];

const timeline = [
  {
    icon: <GraduationCap size={16} />,
    period: "2021 – 2025",
    title: "B.E. Computer Science",
    org: "Sree Sowdambika College of Engineering",
    detail: "CGPA: 7.89 — Programming, DBMS, Algorithms",
    skills: ["Python", "SQL", "Java", "C"],
  },
  {
    icon: <Briefcase size={16} />,
    period: "Apr – Jul 2025",
    title: "Data Analytics Training",
    org: "GETIN Technologies",
    detail: "4-month intensive hands-on program with real datasets",
    skills: ["Power BI", "Python", "SQL", "Excel"],
  },
  {
    icon: <Award size={16} />,
    period: "2025",
    title: "Certifications",
    org: "IBM & CIQ UK",
    detail: "Data Analysis, Visualization, SQL, Tableau, Power BI",
    skills: ["IBM Python", "IBM SQL", "Tableau", "Power BI"],
  },
];

const ResumeModal = ({ open, onClose }: Props) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-10"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>

          <div className="mb-8 text-center">
            <h2 className="section-title mb-2">
              <span className="gradient-text-coral">Sakthi Kumar B</span>
            </h2>
            <p className="text-sm text-muted-foreground">Data Analyst & ML Engineer</p>
            <p className="mt-1 text-xs text-muted-foreground">
              b.sakthikumar10@gmail.com • +91 8489815297 • linkedin.com/in/sakthikumar-b
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            {/* Left: Timeline */}
            <div>
              <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Experience & Education</h3>
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="relative border-l-2 border-primary/30 pl-6"
                  >
                    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-primary">{item.icon}</span>
                      <span className="tag-pill text-[10px]">{item.period}</span>
                    </div>
                    <h4 className="font-display text-sm font-semibold text-foreground">{item.title}</h4>
                    <p className="text-xs text-primary">{item.org}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.skills.map((s) => (
                        <span key={s} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">{s}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Projects summary */}
              <h3 className="mt-8 mb-4 font-display text-lg font-semibold text-foreground">Key Projects</h3>
              <div className="space-y-3">
                {[
                  { title: "Diabetes Prediction Web App", tech: "Python, Scikit-Learn, Flask, Power BI" },
                  { title: "AI Career Intelligence System", tech: "Python, NLP, Flask" },
                  { title: "Cybercrime Fraud Risk Analysis", tech: "Python, Power BI, EDA" },
                  { title: "Bank Loan Risk Analysis", tech: "Python, Power BI, Financial Analytics" },
                  { title: "E-Commerce Sales Analysis", tech: "Python, Power BI, Retail Analytics" },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="glass-card p-3"
                  >
                    <p className="text-xs font-semibold text-foreground">{p.title}</p>
                    <p className="text-[10px] text-muted-foreground">{p.tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Skill Tree */}
            <div>
              <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Skill Tree</h3>
              <div className="space-y-4">
                {skillCategories.map((cat, i) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}
                    className="glass-card p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cat.color}>{cat.icon}</span>
                      <h4 className="text-xs font-semibold text-foreground">{cat.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s) => (
                        <span key={s} className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs italic text-muted-foreground">
              "From raw ones and zeros, I build universes of insight."
            </p>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ResumeModal;
