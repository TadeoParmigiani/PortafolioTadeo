"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { GraduationCap, Heart, Code } from "lucide-react";
import { GraffitiBackground } from "@/components/graffiti-background";

const iconMap = {
  graduation: GraduationCap,
  heart: Heart,
  code: Code,
};

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-x-visible overflow-y-hidden py-20">
      {/* Dense Graffiti Background */}
      <GraffitiBackground variant={8} />
      <GraffitiBackground variant={5} />
      {/* Additional Graffiti Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-x-visible overflow-y-hidden">
        {/* Large background text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-4 right-4 lg:right-10 text-[180px] md:text-[240px] lg:text-[280px] text-foreground select-none leading-none"
          style={{ transform: 'rotate(15deg)' }}
        >
          WHO
        </motion.div>

        {/* Splatter */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-16 right-8 w-28 h-28 lg:w-32 lg:h-32"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
            <circle cx="50" cy="50" r="30" />
            <circle cx="30" cy="30" r="8" />
            <circle cx="75" cy="35" r="5" />
            <circle cx="25" cy="65" r="6" />
            <circle cx="70" cy="70" r="7" />
          </svg>
        </motion.div>

        {/* Drip lines */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 150 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="absolute top-0 left-8 lg:left-16 w-0.5 from-primary/50 to-transparent"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:pl-62 lg:pr-4">
        {/* Section Title - Tag style */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex justify-center  lg:-ml-18"
        >
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl text-foreground tracking-wide">
              {t.about.title}
            </h2>
            {/* Underline with rough edge */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-2 bg-primary mt-2"
              style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)" }}
            />
            {/* Drip */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 30 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-8 right-1/2 translate-x-1/2 w-1.5 bg-linear-to-b from-primary to-transparent rounded-b-full"
            />
          </div>
        </motion.div>

        {/* Paragraphs with stencil style border */}
        <div className="space-y-6 mb-16 relative max-w-5xl">
          {/* Side accent */}
          <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-linear-to-b from-primary via-muted to-transparent" />
          
          {t.about.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed pl-4"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Highlights - Street tag style */}
        <div className="space-y-4 w-full max-w-2xl">
          {t.about.highlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ x: 5, scale: 1.01 }}
                className="relative group"
              >
                <div className="flex items-center gap-4 py-4 px-4 bg-muted/30 border-l-4 border-primary group-hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/20 text-primary">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-foreground/90 font-medium group-hover:text-foreground transition-colors">
                    {highlight.text}
                  </span>
                </div>
                {/* Hover drip effect */}
                <motion.div
                  className="absolute -bottom-2 left-8 w-0.5 h-0 from-primary to-transparent group-hover:h-4 transition-all duration-300"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Decorative code tag */}
        <motion.div
          className="absolute -bottom-10 right-10 text-6xl font-mono text-muted/10 select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {"</>"}
        </motion.div>
      </div>
    </div>
  );
}
