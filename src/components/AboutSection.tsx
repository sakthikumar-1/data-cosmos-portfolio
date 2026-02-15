import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="section-subtitle mb-2">The Journey Behind the Data</p>
        <h2 className="section-title mb-10">
          About <span className="gradient-text-coral">Me</span>
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-6 sm:p-8">
            <h3 className="mb-3 font-display text-lg font-semibold text-foreground">Who I Am</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I'm Sakthi Kumar B, a passionate Data Analyst skilled at turning raw data into narratives
              that uncover insights and enable smarter decisions. I hold a Bachelor of Engineering in
              Computer Science from Sree Sowdambika College of Engineering (2021–2025), where I
              refined my programming, analytical, and problem-solving skills.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card p-6 sm:p-8">
            <h3 className="mb-3 font-display text-lg font-semibold text-foreground">What I Do</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Expert in Python, Power BI, Excel, Tableau, and MySQL, I create dashboards and
              predictive models that make data speak its true story. Every analysis I conduct is
              designed to illuminate patterns, reveal opportunities, and drive actionable business
              outcomes.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <p className="mt-8 text-center text-sm italic text-primary">
          ✨ "From chaos to clarity — one dataset at a time."
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          "I don't just analyze data; I give it a voice."
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
