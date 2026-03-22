"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Home,
  User,
  Code2,
  FolderKanban,
  Briefcase,
  GraduationCap,
  Award,
  ChevronLeft,
  ChevronRight,
  Languages,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Section =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "education"
  | "certifications";

interface NavigationPanelProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navItems: { id: Section; icon: typeof Home }[] = [
  { id: "hero", icon: Home },
  { id: "about", icon: User },
  { id: "skills", icon: Code2 },
  { id: "projects", icon: FolderKanban },
  { id: "experience", icon: Briefcase },
  { id: "education", icon: GraduationCap },
  { id: "certifications", icon: Award },
];

export function NavigationPanel({
  activeSection,
  onSectionChange,
}: NavigationPanelProps) {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Desktop always expanded. Mobile starts collapsed.
    setIsCollapsed(isMobile);
  }, [isMobile]);

  const isPanelCollapsed = isMobile ? isCollapsed : false;

  return (
    <motion.nav
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed right-0 top-0 h-screen z-50 flex flex-col",
        "bg-sidebar/95 backdrop-blur-md border-l-2 border-primary/30",
        "transition-all duration-300 ease-in-out",
        isPanelCollapsed ? "w-16" : "w-60"
      )}
    >
      {/* Graffiti drip decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 100 20" className="w-full h-8 fill-primary">
          <path d="M0,0 L100,0 L100,5 Q95,8 90,5 L90,12 Q88,15 86,12 L86,5 Q80,10 75,5 L75,18 Q73,20 71,15 L71,5 Q65,8 60,5 L60,10 Q58,12 56,8 L56,5 Q50,10 45,5 L45,8 Q43,10 41,7 L41,5 Q35,8 30,5 L30,15 Q28,18 26,12 L26,5 Q20,8 15,5 L15,10 Q13,13 11,8 L11,5 Q5,8 0,5 Z" />
        </svg>
      </div>

      {/* Collapse toggle only on mobile */}
      {isMobile && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/80 transition-colors z-10 rotate-45"
          aria-label={isPanelCollapsed ? "Expand navigation" : "Collapse navigation"}
        >
          <span className="-rotate-45">
            {isPanelCollapsed ? (
              <ChevronLeft className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </span>
        </button>
      )}

      {/* Logo/Brand - Tag style */}
      <div className="pt-12 pb-8 px-4">
        <AnimatePresence mode="wait">
          {!isPanelCollapsed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-3xl text-foreground tracking-wider glitch-hover"
            >
              PORTFOLIO<span className="text-primary">.</span>
            </motion.div>
          )}
        </AnimatePresence>
        {isPanelCollapsed && (
          <div className=" text-3xl text-foreground text-center">
            P<span className="text-primary">.</span>
          </div>
        )}
      </div>

      {/* Navigation items */}
      <div className="flex-1 px-2 overflow-y-auto flex flex-col items-center gap-5">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const label = t.nav[item.id];

          return (
            <motion.button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "flex items-center gap-3 py-3 transition-all duration-200",
                "relative overflow-hidden group",
                isPanelCollapsed
                  ? "w-10 justify-center px-0"
                  : "w-full max-w-55 mx-auto justify-start px-4",
                isActive
                  ? "text-primary-foreground bg-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              style={
                isActive
                  ? { clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }
                  : {}
              }
            >
              <Icon className={cn("w-5 h-5 relative z-10", isActive && "drop-shadow-lg")} />

              <AnimatePresence mode="wait">
                {!isPanelCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="font-mono text-xs uppercase tracking-wider relative z-10 font-bold"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Active drip effect */}
              {isActive && (
                <motion.div
                  layoutId="activeDrip"
                  className="absolute -bottom-2 left-1/2 w-1 h-4 bg-primary"
                  style={{ borderRadius: "0 0 50% 50%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Language toggle - Tag style */}
      <div className="p-4 border-t border-border/50">
        <motion.button
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "w-full flex items-center justify-center gap-2 px-3 py-3",
            "bg-muted text-foreground font-mono font-bold uppercase tracking-wider",
            "hover:bg-primary hover:text-primary-foreground transition-colors"
          )}
        >
          <Languages className="w-4 h-4" />
          <AnimatePresence mode="wait">
            {!isPanelCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm"
              >
                {language === "en" ? "ESP" : "ENG"}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Bottom drip decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg viewBox="0 0 100 15" className="w-full h-6 fill-muted/50">
          <path d="M0,0 L100,0 L100,3 Q90,5 85,3 L85,8 Q83,12 81,6 L81,3 Q70,5 60,3 L60,10 Q58,14 56,8 L56,3 Q45,6 35,3 L35,6 Q33,9 31,5 L31,3 Q20,5 10,3 L10,12 Q8,15 6,10 L6,3 Q3,5 0,3 Z" />
        </svg>
      </div>
    </motion.nav>
  );
}
