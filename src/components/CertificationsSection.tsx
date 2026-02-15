import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { useState } from "react";

const certs = [
  { icon: "📜", title: "IBM Data Analysis with Python", issued: "July 2025", id: "DA101EN" },
  { icon: "📊", title: "IBM Data Visualization with Python", issued: "July 2025", id: "DV0101EN" },
  { icon: "🗄️", title: "IBM SQL and Relational Databases", issued: "July 2025", id: "DB0101EN" },
  { icon: "📈", title: "Certified Tableau Beginner — CIQ UK", issued: "2025", id: "3017-5736-7285" },
  { icon: "📉", title: "Basics of Microsoft Power BI — CIQ UK", issued: "2025", id: "8826-5885-1151" },
];

const FlipCard = ({ cert }: { cert: typeof certs[0] }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 h-40 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="glass-card absolute inset-0 flex flex-col items-center justify-center p-5 text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="mb-2 text-3xl">{cert.icon}</span>
          <h3 className="font-display text-sm font-semibold text-foreground">{cert.title}</h3>
        </div>

        {/* Back */}
        <div
          className="glass-card absolute inset-0 flex flex-col items-center justify-center p-5 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-xs text-muted-foreground">Issued: {cert.issued}</p>
          <p className="mt-1 text-xs font-medium text-primary">ID: {cert.id}</p>
        </div>
      </motion.div>
    </div>
  );
};

const CertificationsSection = () => (
  <section id="certifications" className="relative">
    <div className="section-container">
      <AnimatedSection>
        <p className="section-subtitle mb-2">Proof in Performance</p>
        <h2 className="section-title mb-3">
          <span className="gradient-text-coral">Certifications</span>
        </h2>
        <p className="mb-10 text-sm text-muted-foreground">
          "Credentials that validate the craft."
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {certs.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.08}>
            <FlipCard cert={c} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
