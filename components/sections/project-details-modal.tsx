"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/context/language-context";

type LocalizedString = {
  es: string;
  en: string;
};

type LocalizedStringList = {
  es: string[];
  en: string[];
};

export type ProjectModalContent = {
  title: LocalizedString;
  image?: string;
  images?: string[];
  tech: string[];
  description: LocalizedStringList;
  features?: LocalizedStringList;
  challenges?: LocalizedStringList;
  links?: {
    label: LocalizedString;
    url?: string;
  }[];
};

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectModalContent | null;
}

const modalLabels = {
  es: {
    description: "Descripcion",
    features: "Desafíos Técnicos",
    challenges: "Beneficios para la organización",
    links: "Enlaces del Proyecto",
    technologies: "Tecnologias",
    close: "Cerrar",
  },
  en: {
    description: "Description",
    features: "Technical Challenges",
    challenges: "Benefits for the Organization",
    links: "Project Links",
    technologies: "Technologies",
    close: "Close",
  },
} as const;

export function ProjectDetailsModal({ isOpen, onClose, project }: ProjectDetailsModalProps) {
  const { language } = useLanguage();
  const labels = modalLabels[language];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const projectTitle = project?.title[language] ?? "";
  const projectKeyBase = project?.title.es ?? "project";

  const projectImages = useMemo(() => {
    if (!project) return [];
    if (project.images && project.images.length > 0) return project.images;
    if (project.image) return [project.image];
    return [];
  }, [project]);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [project]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [isOpen, onClose]);

  if (!project || !isMounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-start justify-center bg-black/70 backdrop-blur-[2px] p-3 pt-4 sm:p-5"
          style={{ zIndex: 1000 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-[calc(100vw-1.5rem)] max-w-3xl max-h-[92dvh] sm:max-h-[95vh] overflow-y-auto border-2 border-border bg-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-1 top-1 z-10 flex h-8 w-8 items-center justify-center border border-border bg-background/80 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label={labels.close}
            >
              <X className="h-4 w-4" />
            </button>

            {projectImages.length > 0 && (
              <div className="border-b border-border p-4 md:p-5">
                <div className="relative h-55 md:h-84 w-full overflow-hidden border border-border/70">
                  <img
                    src={projectImages[Math.min(selectedImageIndex, projectImages.length - 1)]}
                    alt={projectTitle}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent" />
                </div>

                {projectImages.length > 1 && (
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {projectImages.map((imgPath, index) => (
                      <button
                        key={`${projectKeyBase}-img-${index}`}
                        type="button"
                        onClick={() => setSelectedImageIndex(index)}
                        className={`h-16 overflow-hidden border ${index === selectedImageIndex ? "border-primary" : "border-border/70"}`}
                        aria-label={`${projectTitle} image ${index + 1}`}
                      >
                        <img src={imgPath} alt={`${projectTitle} ${index + 1}`} className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="p-6 md:p-7">
              <h2 className="mb-5 text-2xl md:text-3xl font-(--font-marker) uppercase text-foreground tracking-wide">
                {projectTitle}
              </h2>

              <section className="mb-5">
                <h3 className="mb-2 text-sm font-mono font-bold uppercase tracking-wider text-primary">{labels.description}</h3>
                <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description[language].map((text, index) => (
                    <p key={`${projectKeyBase}-desc-${index}`}>{text}</p>
                  ))}
                </div>
              </section>

              {project.features && project.features[language].length > 0 && (
                <section className="mb-5">
                  <h3 className="mb-2 text-sm font-mono font-bold uppercase tracking-wider text-primary">{labels.features}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.features[language].map((item, index) => (
                      <li key={`${projectKeyBase}-feature-${index}`} className="flex items-start gap-2">
                        <span className="text-[#ffffff]">-&gt;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.challenges && project.challenges[language].length > 0 && (
                <section className="mb-5">
                  <h3 className="mb-2 text-sm font-mono font-bold uppercase tracking-wider text-primary">{labels.challenges}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.challenges[language].map((item, index) => (
                      <li key={`${projectKeyBase}-challenge-${index}`} className="flex items-start gap-2">
                        <span className="text-[#ffffff]">-&gt;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.links && project.links.length > 0 && (
                <section className="mb-5">
                  <h3 className="mb-2 text-sm font-mono font-bold uppercase tracking-wider text-primary">{labels.links}</h3>
                  <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {project.links.map((link, index) => (
                      <li key={`${projectKeyBase}-link-${index}`} className="flex items-center gap-2">
                        <span className="text-[#ffffff]">-&gt;</span>
                        {link.url ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-mono text-[#bd1212] hover:text-[#78b2ff] transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {link.label[language]}
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center text-sm font-mono text-muted-foreground"
                        >
                          {link.label[language]}
                        </span>
                      )}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section>
                <h3 className="mb-2 text-sm font-mono font-bold uppercase tracking-wider text-primary">{labels.technologies}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={`${projectKeyBase}-tech-${index}`}
                      className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
