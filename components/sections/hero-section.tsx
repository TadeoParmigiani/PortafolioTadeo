"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { Download, Github, Linkedin, Mail, MapPin,  ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { GraffitiBackground } from "@/components/graffiti-background";

interface HeroSectionProps {
  onNavigate: (section: "projects") => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const [isGlitchActive, setIsGlitchActive] = useState(false);
  
  const fullText = t.hero.role;

  useEffect(() => {
    const typingSpeed = 80;
    const deletingSpeed = 45;
    const pauseAfterTyping = 1400;
    const pauseAfterDeleting = 280;

    let index = 0;
    let isDeleting = false;
    let loopTimeout: ReturnType<typeof setTimeout> | undefined;
    let isCancelled = false;

    if (!fullText) {
      setDisplayText("");
      return;
    }

    const runTypewriter = () => {
      if (isCancelled) return;

      if (!isDeleting) {
        index = Math.min(index + 1, fullText.length);
        setDisplayText(fullText.slice(0, index));

        if (index === fullText.length) {
          isDeleting = true;
          loopTimeout = setTimeout(runTypewriter, pauseAfterTyping);
        } else {
          loopTimeout = setTimeout(runTypewriter, typingSpeed);
        }
        return;
      }

      index = Math.max(index - 1, 0);
      setDisplayText(fullText.slice(0, index));

      if (index === 0) {
        isDeleting = false;
        loopTimeout = setTimeout(runTypewriter, pauseAfterDeleting);
      } else {
        loopTimeout = setTimeout(runTypewriter, deletingSpeed);
      }
    };

    setDisplayText("");
    loopTimeout = setTimeout(runTypewriter, 350);

    return () => {
      isCancelled = true;
      if (loopTimeout) clearTimeout(loopTimeout);
    };
  }, [fullText]);

  useEffect(() => {
    const glitchDurationMs = 400;
    const glitchIntervalMs = 2000;
    let resetTimeout: ReturnType<typeof setTimeout> | undefined;

    const intervalId = setInterval(() => {
      setIsGlitchActive(true);
      if (resetTimeout) clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => setIsGlitchActive(false), glitchDurationMs);
    }, glitchIntervalMs);

    return () => {
      clearInterval(intervalId);
      if (resetTimeout) clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center relative overflow-x-visible overflow-y-hidden">
      {/* Dense Graffiti Background */}
      <div className="hidden lg:block">
      <GraffitiBackground variant={1} />
       
  <GraffitiBackground variant={2} />
        </div>
      {/* Additional Graffiti Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-x-visible overflow-y-hidden">
        {/* Splatter marks */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-20 right-40 w-64 h-64"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full fill-primary">
            <path d="M100,10 Q120,50 150,60 Q180,70 190,100 Q180,130 150,140 Q120,150 100,190 Q80,150 50,140 Q20,130 10,100 Q20,70 50,60 Q80,50 100,10 Z" />
          </svg>
        </motion.div>

        {/* X marks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-40 right-20 text-9xl text-primary select-none"
          style={{ transform: 'rotate(-12deg)' }}
        >
          X
        </motion.div>

        {/* Drip lines */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 120 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-1/4 w-1 bg-linear-to-b from-primary to-transparent"
        />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
          className="absolute top-0 right-1/3 w-0.5 bg-linear-to-b from-muted-foreground/30 to-transparent"
        />

        {/* Abstract shapes */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.08, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-24 right-6 md:bottom-16 md:right-20 lg:bottom-20 lg:right-40 text-[64px] md:text-[96px] lg:text-[130px] text-foreground/30 select-none leading-none"  >
          ENGINEER
        </motion.div>
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-80 w-full max-w-8xl ml-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Profile Photo with graffiti frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8 lg:mb-0 self-start w-fit"
          >
            <div className="relative">
              {/* Rough frame effect */}
              <div className="absolute -inset-3 bg-primary/20 transform rotate-3" />
              <div className="absolute -inset-2 bg-card transform -rotate-2" />
              
              <div className="w-44 h-44 md:w-56 md:h-56 relative overflow-hidden border-4 border-foreground/80 rough-border">
                <Image
                  src="/FOTO CV.jpg"
                  alt="Tadeo Parmigiani"
                  fill
                  className="object-cover hover:grayscale-0 transition-all duration-500"
                  priority
                />
                {/* Spray overlay */}
                <div className="absolute inset-0 from-primary/10 to-transparent mix-blend-overlay" />
              </div>
              
              {/* Paint drip from photo */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute -bottom-10 left-1/4 w-2 bg-linear-to-b from-primary to-transparent rounded-b-full"
              />
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 25 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="absolute -bottom-6 left-1/2 w-1 bg-linear-to-b from-foreground/50 to-transparent rounded-b-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            {/* Name with tag style */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mb-4"
            >
              <h1 className={`text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wide glitch-hover ${isGlitchActive ? "glitch-active" : ""}`}>
                {t.hero.greeting}
              </h1>
              {/* Underline spray */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1.5 bg-primary mt-2"
                style={{ clipPath: "polygon(0 0, 50% 20%, 98% 100%, 2% 80%)" }}
              />
            </motion.div>

            {/* Role with typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-3"
            >
              <span className="text-xl md:text-2xl text-muted-foreground font-mono">
                {displayText}
                <span className="typewriter-cursor" />
              </span>
            </motion.div>

            {/* Location with marker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-2 text-muted-foreground mb-6"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono tracking-wider">{t.hero.location}</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* CTAs with street style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {/* Download CV Button */}
              <motion.a
                href="/pdf/Tad.pdf"
                download
                whileHover={{ scale: 1.02, x: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider overflow-hidden"
                style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" }}
              >
                <Download className="w-4 h-4" />
                {t.hero.downloadCV}
                {/* Spray effect on hover */}
                <div className="absolute inset-0 bg-foreground/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </motion.a>

              {/* View Projects Button */}
              <motion.button
                onClick={() => onNavigate("projects")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 px-6 py-3 border-2 border-foreground/60 text-foreground font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                {t.hero.viewProjects}
                <ArrowRight className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Social Links - Street tag style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="https://github.com/TadeoParmigiani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-muted/80 text-foreground text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                Github
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/tadeoparmigiani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex items-center gap-2 px-4 py-2 bg-muted/80 text-foreground text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:TadeoParmi2001@gmail.com"
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="flex items-center gap-2 px-4 py-2 bg-muted/80 text-foreground text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                TadeoParmi2001@gmail.com
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
