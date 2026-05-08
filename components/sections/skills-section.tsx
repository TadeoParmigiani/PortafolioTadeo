"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { GraffitiBackground } from "@/components/graffiti-background";

// Skills organized by category with icon URLs
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", icon: "https://cdn.simpleicons.org/django/2BA977" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  },
];

export function SkillsSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const accentColors = ["#e8e4dc", "#c41e3a", "#6b6b6b"];
  const rotations = [-1.5, 1.5, -1];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-x-visible overflow-y-hidden py-20">
      {/* Dense Graffiti Background */}
      <div className="hidden lg:block">
        <GraffitiBackground variant={7} />
        <GraffitiBackground variant={5} />
      </div>
      
      {/* Additional Graffiti Background */}
      <div className="absolute inset-0 pointer-events-none overflow-x-visible overflow-y-hidden">
        {/* Large background text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-1 -left-10 text-[250px] font-(--font-marker) text-foreground select-none leading-none"
          style={{ transform: 'rotate(-10deg)' }}
        >
          CODE
        </motion.div>

        {/* X marks scattered */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-20 right-1/4 text-6xl font-(--font-marker) text-primary"
          style={{ transform: 'rotate(15deg)' }}
        >
          X
        </motion.div>

        {/* Splatter */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="absolute top-1/3 right-20 w-24 h-24 opacity-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
            <path d="M50,10 Q70,20 80,50 Q70,80 50,90 Q30,80 20,50 Q30,20 50,10 Z" />
            <circle cx="20" cy="30" r="5" />
            <circle cx="80" cy="70" r="4" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title - Tag style */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex justify-center text-center"
        >
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-(--font-marker) text-foreground tracking-wide">
              {t.skills.title}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-2 bg-primary mt-2 mx-auto"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
            />
            {/* Drips */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 25 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="absolute -bottom-6 left-1/4 w-1 bg-linear-to-b from-primary to-transparent rounded-b-full"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 15 }}
              transition={{ delay: 1.1, duration: 0.3 }}
              className="absolute -bottom-4 left-1/2 w-0.5 bg-linear-to-b from-primary/70 to-transparent rounded-b-full"
            />
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-6 md:p-7 relative overflow-visible"
              style={{
                background: "rgba(8, 8, 8, 0.9)",
                border: "2px solid rgba(58, 58, 58, 0.95)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 10px 10px 0 rgba(0,0,0,0.35)",
                transform: `rotate(${rotations[catIndex % rotations.length]}deg)`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: accentColors[catIndex % accentColors.length], opacity: 0.55 ,}}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ background: accentColors[catIndex % accentColors.length], opacity: 0.2 }}
              />

              {/* Sticker/tape corner */}
              <div
                className="absolute top-2 right-2 w-4 h-4"
                style={{ background: accentColors[catIndex % accentColors.length] }}
              />

              {/* Category title */}
              <div className="mb-6 relative">
                <h3
                  className="text-2xl md:text-3xl uppercase"
                  style={{
                    fontFamily: "sans-serif, var(--font-bebas), 'Bebas Neue'",
                    color: "#e8e4dc",
                    textShadow: `1.5px 1.5px 0 ${accentColors[catIndex % accentColors.length]}`,
                  }}
                >
                  {category.name}
                </h3>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 20 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute -bottom-5 left-2 w-1.5"
                  style={{ background: accentColors[catIndex % accentColors.length] }}
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 12 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="absolute -bottom-3 left-6 w-1"
                  style={{
                    background: accentColors[catIndex % accentColors.length],
                    opacity: 0.6,
                  }}
                />
              </div>

              {/* Skills icons */}
              <div className="flex flex-wrap gap-3 mt-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 18, scale: 0.85, rotate: -4 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                    transition={{
                      delay: catIndex * 0.12 + skillIndex * 0.045,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative z-10 hover:z-30"
                    whileHover={{ scale: 1.15, rotate: [-(3 as number), 3, 0] }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: "rgba(15,15,15,0.9)",
                        border: "2px solid #3a3a3a",
                        boxShadow: "4px 4px 0 rgba(0,0,0,0.5)",
                        transform: `rotate(${(skillIndex % 3 - 1) * 2}deg)`,
                      }}
                    >
                      <div
                        className="absolute top-0 left-0 w-4 h-4"
                        style={{
                          background: skillIndex % 4 === 0 ? "#c41e3a" : "#2a2a2a",
                          clipPath: "polygon(0 0, 100% 0, 0 100%)",
                        }}
                      />
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-9 h-9 md:w-10 md:h-10 object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                      />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-40">
                      <span
                        className="text-sm px-3 py-1 block"
                        style={{
                          fontFamily: "var(--font-marker), 'Permanent Marker', cursive",
                          color: "#0a0a0a",
                          background: "#e8e4dc",
                          transform: "rotate(-2deg)",
                          boxShadow: "3px 3px 0 #c41e3a",
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative element */}
        <motion.div
          className="absolute -bottom-5 right-10 text-7xl font-(--font-marker) text-muted/10 select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ transform: 'rotate(-5deg)' }}
        >
          {"{ }"}
        </motion.div>
      </div>
    </div>
  );
}
