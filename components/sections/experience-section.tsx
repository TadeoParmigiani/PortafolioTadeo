"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { GraffitiBackground } from "@/components/graffiti-background";

const experiences = [
  {
    role: {
      es: "Desarrollador de software",
      en: "Software developer",
    },
    company: "OrbitDev",
    companyUrl: "https://www.orbitdev.com.ar/",
    period: "2025",
    endPeriod: null,
    description: {
      es: "Emprendimiento personal orientado al desarrollo de software a medida para clientes, enfocado en fortalecer mis habilidades como desarrollador, con especial atención a la gestión de bases de datos y la aplicación de buenas prácticas para garantizar un código limpio y eficiente.",
      en: "Personal venture focused on developing custom software for clients, aimed at strengthening my skills as a developer, with special attention to database management and applying best practices to ensure clean and efficient code.",
    },
  },
  {
    role: {
      es: "Help Desk",
      en: "Help Desk",
    },
    company: "Neuralsoft",
    companyUrl: "https://www.linkedin.com/company/neuralsoft/",
    period: "2026",
    endPeriod: null,
    description: {
      es: "Soporte funcional y atención a usuarios de Presea ERP, gestionando tickets, incidencias y consultas sobre los distintos módulos de la plataforma. Trabajo en conjunto con los equipos de desarrollo e infraestructura para el diagnóstico y resolución de problemas, asegurando la disponibilidad del servicio y la satisfacción de los clientes.",
      en: "Functional support and user assistance for Presea ERP, managing tickets, issues, and queries related to various platform modules. Collaborating with development and infrastructure teams for problem diagnosis and resolution, ensuring service availability and customer satisfaction.",
    },
  },
];

export function ExperienceSection() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-x-visible overflow-y-hidden py-20">
      {/* Dense Graffiti Background */}
      <div className="hidden lg:block">
        <GraffitiBackground variant={1} />
        <GraffitiBackground variant={5} />
      </div>

      {/* Graffiti Background */}
      <div className="absolute inset-0 pointer-events-none overflow-x-visible overflow-y-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.3 }}
          className="absolute -left-10 text-[200px] font-(--font-marker) text-foreground select-none leading-none"
          style={{ transform: 'rotate(-20deg)' }}
        >
          EXP
        </motion.div>

        {/* Splatter */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="absolute top-1/4 right-10 w-16 h-16 opacity-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
            <circle cx="50" cy="50" r="30" />
            <circle cx="25" cy="25" r="10" />
            <circle cx="80" cy="60" r="8" />
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
            <h2 className="text-5xl md:text-6xl font-(--font-marker) text-foreground tracking-wide">
              {t.experience.title}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-2 bg-primary mt-2"
              style={{ clipPath: "polygon(0 0, 80% 0, 95% 100%, 5% 100%)" }}
            />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line with drips */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-muted to-transparent">
            {/* Drip bubbles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full"
            />
          </div>

          {/* Experience items */}
          <div className="space-y-10 pl-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                className="relative group"
              >
                {/* Timeline dot - X style */}
                <motion.div
                  className="absolute -left-12 top-3 w-5 h-5 flex items-center justify-center"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                >
                  <div className="w-4 h-4 bg-muted rotate-45 group-hover:bg-primary transition-colors" />
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  className="bg-card/80 p-6 border-2 border-border hover:border-primary/50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {/* Period tag */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-muted text-muted-foreground">
                      {exp.period} - {exp.endPeriod || t.experience.present}
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="text-xl font-(--font-marker) uppercase tracking-wide mb-1 text-foreground group-hover:text-primary transition-colors">
                    {exp.role[language]}
                  </h3>

                  {/* Company */}
                  {exp.companyUrl ? (
                    <motion.a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary font-mono font-bold mb-4 inline-flex w-fit items-center gap-1 hover:underline"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      @ {exp.company}
                    </motion.a>
                  ) : (
                    <p className="text-sm text-primary font-mono font-bold mb-4">
                      @ {exp.company}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {exp.description[language]}
                  </p>
                </motion.div>

                {/* Drip from card */}
                <motion.div
                  className="absolute -bottom-4 left-10 w-0.5 h-0 bg-linear-to-b from-primary/50 to-transparent group-hover:h-6 transition-all duration-300 rounded-b-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
