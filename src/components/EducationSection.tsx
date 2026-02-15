import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Zap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="section-subtitle mb-2">Where the Foundation Was Forged</p>
        <h2 className="section-title mb-10">
          Education & <span className="gradient-text-mint">Training</span>
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <span className="tag-pill">2021 – 2025</span>
            </div>
            <h3 className="mb-1 font-display text-base font-semibold text-foreground">
              Bachelor of Engineering — Computer Science
            </h3>
            <p className="mb-3 text-sm text-primary">Sree Sowdambika College of Engineering</p>
            <p className="mb-3 text-xs font-medium text-muted-foreground">CGPA: 7.89</p>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• Strong foundation in programming, DBMS, algorithms</li>
              <li>• Hands-on Python, C, Java, SQL</li>
              <li>• Academic projects in application design and automation</li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Zap size={20} className="text-primary" />
              </div>
              <span className="tag-pill">Apr – Jul 2025</span>
            </div>
            <h3 className="mb-1 font-display text-base font-semibold text-foreground">
              Data Analytics Training
            </h3>
            <p className="mb-3 text-sm text-primary">GETIN Technologies</p>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• 4-month intensive hands-on program</li>
              <li>• Tools: Python, SQL, Power BI, Excel</li>
              <li>• Focus: Data cleaning, EDA, dashboard creation</li>
              <li>• Real datasets: Finance, Healthcare, Retail</li>
              <li>• Created executive dashboards with actionable insights</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default EducationSection;
