"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useLanguage } from "@/context/language-context";
import { MapPin, ExternalLink, Languages } from "lucide-react";
import { GraffitiBackground } from "@/components/graffiti-background";
import { BiLogoAws } from "react-icons/bi";

type Certification = {
  id: number;
  titleKey: string;
  issuerKey: string;
  dateKey: string;
  titleFallback: string;
  issuerFallback: string;
  dateFallback: string;
  logo: string | ReactNode;
  link: string;
};

const certifications: Certification[] = [
  {
    id: 1,
    titleKey: "certifications.cert1.title",
    issuerKey: "certifications.cert1.issuer",
    dateKey: "certifications.cert1.date",
    titleFallback: "CCNA v7: Introduction to Networks",
    issuerFallback: "Cisco",
    dateFallback: "En curso",
    logo: "https://cdn.simpleicons.org/cisco/049fd9",
    link: "#",
  },
  {
    id: 2,
    titleKey: "certifications.cert2.title",
    issuerKey: "certifications.cert2.issuer",
    dateKey: "certifications.cert2.date",
    titleFallback: "AWS Cloud Practitioner",
    issuerFallback: "Amazon Web Services",
    dateFallback: "2025",
    logo: <BiLogoAws size={50} />,
    link: "/pdf/aws-cloud-practitioner.pdf",
  },
  {
    id: 3,
    titleKey: "certifications.cert3.title",
    issuerKey: "certifications.cert3.issuer",
    dateKey: "certifications.cert3.date",
    titleFallback: "English Certification",
    issuerFallback: "Language Institute",
    dateFallback: "2024",
    logo: <Languages size={40} className="text-[#7fb3ff]" strokeWidth={1.75} />,
    link: "https://www.instagram.com/eclanguagesolutions/",
  },
  {
    id: 4,
    titleKey: "certifications.cert4.title",
    issuerKey: "certifications.cert4.issuer",
    dateKey: "certifications.cert4.date",
    titleFallback: "Python Certification",
    issuerFallback: "Python Institute",
    dateFallback: "2024",
    logo: "https://cdn.simpleicons.org/python/3776ab",
    link: "/pdf/Diploma_CAC.pdf",
  },
    {
    id: 5,
    titleKey: "certifications.cert5.title",
    issuerKey: "certifications.cert5.issuer",
    dateKey: "certifications.cert5.date",
    titleFallback: "Docker Essentials: A Developer Introduction",
    issuerFallback: "IBM",
    dateFallback: "2026",
    logo: "https://img.icons8.com/?size=100&id=31754&format=png&color=000000",
    link: "https://www.credly.com/badges/0898d642-c99e-4842-8b5a-dbcc7241a504/linked_in_profile",
  },
];

export function CertificationsSection() {
  const { t } = useLanguage();

  const getTranslation = (path: string, fallback: string) => {
    const value = path
      .split(".")
      .reduce<unknown>((acc, key) => {
        if (!acc || typeof acc !== "object") {
          return undefined;
        }
        return (acc as Record<string, unknown>)[key];
      }, t as unknown);

    return typeof value === "string" ? value : fallback;
  };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-x-visible overflow-y-hidden py-20">
      {/* Dense Graffiti Background */}
      <div className="hidden lg:block">
        <GraffitiBackground variant={6} />
        <GraffitiBackground variant={1} />
      </div>

      {/* Graffiti Background */}
      <div className="absolute inset-0 pointer-events-none overflow-x-visible overflow-y-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.3 }}
          className="absolute top-10 -left-20 text-[180px] text-foreground select-none leading-none"
          style={{ transform: "rotate(-20deg)" }}
        >
          CERTS
        </motion.div>

        {/* Splatter marks */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute bottom-1/4 right-20 w-20 h-20 opacity-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
            <circle cx="50" cy="50" r="30" />
            <circle cx="20" cy="20" r="10" />
            <circle cx="85" cy="75" r="8" />
          </svg>
        </motion.div>

        {/* X mark */}
        <motion.div
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 0.08, rotate: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute top-1/3 left-10 text-9xl text-primary"
        >
          X
        </motion.div>

        {/* Drip */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 150 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="absolute top-0 left-1/3 w-1.5 from-primary/30 to-transparent"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16  flex justify-center"
        >
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl text-foreground tracking-wide">
              {t.certifications.title}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-2 bg-primary mt-2"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 80%, 5% 100%)" }}
            />
            {/* Drip */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 20 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="absolute -bottom-5 left-1/3 w-1 from-primary to-transparent rounded-b-full"
            />
          </div>
        </motion.div>

        {/* Certifications list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-0 w-full max-w-4xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div key={cert.id} variants={rowVariants} className="group relative">
              {/* Row container */}
              <motion.div
                className="flex items-start md:items-center gap-4 md:gap-6 py-5 md:py-6 px-4 relative border-b transition-all duration-300"
                style={{
                  borderColor: "rgba(42, 42, 42, 0.6)",
                }}
                whileHover={{
                  backgroundColor: "rgba(196, 30, 58, 0.05)",
                  borderColor: "rgba(196, 30, 58, 0.3)",
                }}
              >
                {/* Hover spray effect */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "#c41e3a" }}
                />

                {/* Logo */}
                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center relative"
                  style={{
                    background: "rgba(20, 20, 20, 0.8)",
                    border: "2px solid #2a2a2a",
                    boxShadow: "3px 3px 0 #0a0a0a",
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: -2,
                    borderColor: "#c41e3a",
                  }}
                >
                  {typeof cert.logo === "string" ? (
                    <img src={cert.logo} alt="" className="w-7 h-7 md:w-8 md:h-8 object-contain" crossOrigin="anonymous" />
                  ) : (
                    <span className="text-[#ff9900]">{cert.logo}</span>
                  )}

                  {/* Corner tape */}
                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 rotate-12 opacity-60"
                    style={{ background: index % 2 === 0 ? "#c41e3a" : "#2a2a2a" }}
                  />
                </motion.div>

                {/* Title */}
                <div className="flex-1 min-w-0 pr-1">
                  <h3
                    className="text-base leading-snug md:text-xl md:truncate group-hover:text-[#e8e4dc] transition-colors"
                    style={{
                      fontFamily: "var(--font-marker), 'Permanent Marker', cursive",
                      color: "#d4cfc4",
                    }}
                  >
                    {getTranslation(cert.titleKey, cert.titleFallback)}
                  </h3>

                  {/* Issuer - Mobile */}
                  <div className="md:hidden mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 shrink-0" style={{ color: "#6b6b6b" }} />
                    <span
                      className="text-[11px] leading-tight"
                      style={{
                        color: "#6b6b6b",
                        fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {getTranslation(cert.issuerKey, cert.issuerFallback)}
                    </span>
                  </div>

                  {/* Date/Status - Mobile */}
                  <span
                    className="md:hidden mt-1 block text-xs"
                    style={{
                      color: "#6b6b6b",
                      fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {getTranslation(cert.dateKey, cert.dateFallback)}
                  </span>
                </div>

                {/* Issuer with icon */}
                <div className="hidden md:flex items-center gap-2 shrink-0">
                  <MapPin className="w-4 h-4" style={{ color: "#6b6b6b" }} />
                  <span
                    className="text-sm"
                    style={{
                      color: "#6b6b6b",
                      fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {getTranslation(cert.issuerKey, cert.issuerFallback)}
                  </span>
                </div>

                {/* Date/Status */}
                <div className="shrink-0 hidden md:block">
                  <span
                    className="text-sm px-3 py-1"
                    style={{
                      color: "#6b6b6b",
                      fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {getTranslation(cert.dateKey, cert.dateFallback)}
                  </span>
                </div>

                {/* External link */}
                <motion.a
                  href={cert.link}
                  className="shrink-0 self-start md:self-auto mt-0.5 md:mt-0 p-2 opacity-40 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2, color: "#c41e3a" }}
                  style={{ color: "#6b6b6b" }}
                  aria-label="View credential"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                {/* Row number tag */}
                <motion.span
                  className="absolute -left-2 top-1/2 -translate-y-1/2 text-xs opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{
                    fontFamily: "var(--font-marker), 'Permanent Marker', cursive",
                    color: "#c41e3a",
                    transform: "translateY(-50%) rotate(-90deg)",
                  }}
                >
                  0{index + 1}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Total counter - Graffiti style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <span className="text-5xl text-primary">{certifications.length}</span>
          <div className="flex flex-col">
            <span className="text-sm font-mono uppercase font-bold text-foreground">{t.certifications.title}</span>
            <span className="text-xs text-muted-foreground font-mono">& counting...</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
