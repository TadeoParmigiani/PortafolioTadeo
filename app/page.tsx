"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { LanguageProvider } from "@/context/language-context";
import { NavigationPanel } from "@/components/navigation-panel";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { CertificationsSection } from "@/components/sections/certifications-section";

type Section =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "education"
  | "certifications";

const sectionEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const sectionVariants: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    scale: 0.98,
    filter: "blur(4px)",
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: sectionEase,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    scale: 0.98,
    filter: "blur(4px)",
    transition: {
      duration: 0.6,
      ease: sectionEase,
    },
  }),
};

const sections: Section[] = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "certifications",
];

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState<Section>("hero");
  const [direction, setDirection] = useState(0);

  const handleSectionChange = (newSection: Section) => {
    const currentIndex = sections.indexOf(activeSection);
    const newIndex = sections.indexOf(newSection);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveSection(newSection);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <HeroSection onNavigate={handleSectionChange} />;
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      case "certifications":
        return <CertificationsSection />;
      default:
        return <HeroSection onNavigate={handleSectionChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background concrete-bg relative overflow-x-visible overflow-y-hidden">
      {/* Noise overlay for concrete texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Graffiti corner splashes */}
      <div className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="fixed bottom-0 right-60 w-64 h-64 pointer-events-none z-0">
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-muted/20 rounded-full blur-[80px] transform translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Vertical drip lines decoration */}
      <div className="fixed top-0 left-1/4 w-px h-40 from-primary/20 to-transparent pointer-events-none z-0" />
      <div className="fixed top-0 left-2/3 w-0.5 h-24 from-muted-foreground/10 to-transparent pointer-events-none z-0" />

      {/* Main content area */}
      <main className="mr-16 relative z-10 min-h-screen"

>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeSection}
            custom={direction}
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Panel */}
      <NavigationPanel
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Tag animation on section change - Graffiti style */}
      <AnimatePresence>
        <motion.div
          key={`tag-${activeSection}`}
          initial={{ opacity: 0.5, scale: 3, rotate: -25, y: -50 }}
          animate={{ 
            opacity: [0, 0.15, 0], 
            scale: [3, 1.5, 1.2], 
            rotate: [-25, -10, 0],
            y: [-50, 0, 20]
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
        >
          <span className="text-[10rem] font-(--font-marker) text-primary/80 uppercase select-none whitespace-nowrap">
            {activeSection}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Red accent line at bottom */}
      <div className="fixed bottom-0 left-0 right-16 h-1 bg-linear-to-r from-primary via-primary/50 to-transparent pointer-events-none z-30" />
    </div>
  );
}

export default function Portfolio() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
