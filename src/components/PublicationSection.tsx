import AnimatedSection from "./AnimatedSection";
import { BookOpen, ExternalLink } from "lucide-react";

const PublicationSection = () => (
  <section id="publication" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="section-subtitle mb-2">Sharing Knowledge</p>
        <h2 className="section-title mb-3">
          <span className="gradient-text-coral">Publication</span>
        </h2>
        <p className="mb-10 text-sm text-muted-foreground">
          "Knowledge shared is knowledge multiplied."
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="glass-card mx-auto max-w-2xl p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen size={20} className="text-primary" />
            </div>
            <span className="tag-pill">Peer-Reviewed</span>
          </div>

          <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
            Diabetes Prediction using Data Analytics and Machine Learning
          </h3>
          <p className="mb-1 text-sm font-medium text-primary">
            International Journal of Research Publications and Reviews
          </p>
          <p className="mb-4 text-xs text-muted-foreground">Volume 6, Issue 5 — 2025</p>
          <p className="mb-6 text-xs leading-relaxed text-muted-foreground">
            This peer-reviewed publication presents an ML-based system for diabetes risk prediction,
            combining Random Forest and XGBoost for high-accuracy classification using the PIMA
            Indian Diabetes dataset. Interactive Power BI dashboards visualize trends supporting
            clinical decisions.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-cosmos-coral"
          >
            <ExternalLink size={14} /> Read Full Paper
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PublicationSection;
