"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { GraffitiBackground } from "@/components/graffiti-background";

const education = [
   {
    degree: {
      en: "Software Development Technician",
      es: "Tecnico Superior en Desarrollo de Software",
    },
    institution: {
      en: "Private Higher Institute No. 4011 Gral. Manuel Belgrano",
      es: "Instituto Superior Particular Incorporado N° 4011 Gral. Manuel Belgrano",
    },
    progress: {
      en: "",
      es: "",
    },
    period: "2022 - 2024",
    status: {
      en: "Completed",
      es: "Completado",
    },
    certificateLink: "/pdf/parmigianiTitulo.pdf",
    isCurrent: false,
  },
  {
    degree: {
      en: "Systems Engineering",
      es: "Ingenieria en Sistemas Informaticos",
    },
    institution: {
      en: "UAI - Interamerican Open University",
      es: "UAI - Universidad Abierta Interamericana",
    },
    progress: {
      en: "Courses passed: 30/51",
      es: "Materias aprobadas: 30/51",
    },
    period: "2025 - Present",
    status: {
      en: "In Progress",
      es: "En Curso",
    },
    certificateLink: "",
    isCurrent: true,
  },
];

export function EducationSection() {
  const { t, language } = useLanguage();
  const timelineColumnsClass =
    education.length <= 1 ? "md:grid-cols-1" : education.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-x-visible overflow-y-hidden py-20">
      {/* Dense Graffiti Background */}
      <div className="hidden lg:block">
        <GraffitiBackground variant={3} />
        <GraffitiBackground variant={7} />
      </div>

      {/* Graffiti Background */}
      <div className="absolute inset-0 pointer-events-none overflow-x-visible overflow-y-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-0 -right-7 text-[200px]  text-foreground select-none leading-none"
          style={{ transform: 'rotate(10deg)' }}
        >
          LEARN
        </motion.div>

        {/* Splatter */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute top-20 left-1/4 w-16 h-16 opacity-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
            <circle cx="50" cy="50" r="25" />
            <circle cx="20" cy="30" r="8" />
            <circle cx="75" cy="70" r="6" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex justify-center text-center"
        >
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl ] text-foreground tracking-wide">
              {t.education.title}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-2 bg-primary mt-2 mx-auto"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 70%, 5% 100%)" }}
            />
          </div>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative max-w-290 mx-auto">
          {/* Timeline Line with graffiti style */}
          <motion.div 
            className="absolute top-16 left-0 right-0 h-1 bg-border"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
          
          {/* Drips from timeline */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 30 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute top-16 left-1/4 w-0.5 bg-linear-to-b from-primary to-transparent rounded-b-full"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 20 }}
            transition={{ delay: 1.4, duration: 0.4 }}
            className="absolute top-16 left-2/3 w-0.5 bg-linear-to-b from-muted-foreground/50 to-transparent rounded-b-full"
          />
          
          {/* Timeline Items */}
          <div className={`grid grid-cols-1 ${timelineColumnsClass} justify-center gap-6 md:gap-8`}>
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution.es}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                className="relative group"
              >
                {/* Timeline Dot - X style */}
                <motion.div
                  className="absolute top-14 left-1/2 -translate-x-1/2 z-10 hidden md:block"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                >
                  <div className="w-5 h-5 bg-muted rotate-45 border-4 border-background group-hover:bg-primary transition-colors" />
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  className="relative mt-24 md:mt-28 bg-card border-2 border-border hover:border-primary/50 transition-colors p-5 pb-12"
                  whileHover={{ y: -5, rotate: index === 1 ? 1 : -1 }}
                >
                  {/* Period & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                      {edu.period}
                    </span>
                    <span className={`px-2 py-1 text-xs font-mono font-bold uppercase ${
                      edu.isCurrent 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {edu.status[language]}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-lg font-(--font-marker) text-foreground tracking-wide mb-2 group-hover:text-primary transition-colors">
                    {edu.degree[language]}
                  </h3>

                  {/* Institution */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.institution[language]}
                    {edu.progress[language] && (
                      <span className="block mt-1">{edu.progress[language]}</span>
                    )}
                  </p>

                  {edu.certificateLink && (
                    <motion.a
                      href={edu.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 inline-flex items-center justify-center rounded-sm border border-primary/40 p-1.5 text-primary hover:bg-primary/10"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={language === "es" ? "Ver certificado" : "View certificate"}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </motion.a>
                  )}

                  {/* Corner accent */}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Connecting line (mobile) */}
                <div className="absolute top-0 left-4 w-px h-24 bg-linear-to-b from-transparent via-border to-transparent md:hidden" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative element */}
        <motion.div
          className="absolute -top-20 right-10 text-6xl text-muted/30 select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          EDU
        </motion.div>
      </div>
    </div>
  );
}
