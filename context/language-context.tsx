"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "es";

interface Translations {
  nav: {
    hero: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    certifications: string;
  };
  hero: {
    greeting: string;
    role: string;
    location: string;
    description: string;
    downloadCV: string;
    viewProjects: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    highlights: {
      icon: string;
      text: string;
    }[];
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
  };
  experience: {
    title: string;
    present: string;
  };
  education: {
    title: string;
  };
  certifications: {
    title: string;
    cert1: {
      title: string;
      issuer: string;
      date: string;
    };
    cert2: {
      title: string;
      issuer: string;
      date: string;
    };
    cert3: {
      title: string;
      issuer: string;
      date: string;
    };
    cert4: {
      title: string;
      issuer: string;
      date: string;
    };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      hero: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
    },
    hero: {
      greeting: "Tadeo Parmigiani",
      role: "Systems Engineering Student",
      location: "Rosario, Santa Fe, Argentina",
      description: "Passionate about software development and technological infrastructure, with solid knowledge in databases and design of efficient and scalable systems.",
      downloadCV: "Download CV",
      viewProjects: "View Projects",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I am a Senior Technician in Software Development and currently studying Systems Engineering. I am passionate about development and technology, and I continuously train to strengthen my technical skills.",
        "I enjoy both visual development and the logic behind it. I am curious, dedicated, and always looking to learn new tools that help me grow technically and personally.",
        "My goal is to participate in projects that generate impact, providing creative and efficient solutions to the challenges that arise, focusing on networks, infrastructure, cloud computing, and systems administration."
      ],
      highlights: [
        { icon: "graduation", text: "Solid academic background in systems engineering" },
        { icon: "heart", text: "Passion for learning new technologies" },
        { icon: "code", text: "Focus on development and software architecture" }
      ]
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      viewCode: "View Code",
    },
    experience: {
      title: "Experience",
      present: "Present",
    },
    education: {
      title: "Education",
    },
    certifications: {
      title: "Certifications",
      cert1: {
        title: "CCNA v7: Introduction to Networks",
        issuer: "Proydesa Foundation",
        date: "In progress",
      },
      cert2: {
        title: "AWS Cloud Practitioner Essentia",
        issuer: "AWS Training & Certification",
        date: "2026",
      },
      cert3: {
        title: "English Language Course",
        issuer: "Lic. Erica Clark | EC Language Solutions",
        date: "In progress",
      },
      cert4: {
        title: "Codo a Codo 4.0 – Full Stack Python",
        issuer: "Government of the City of Buenos Aires",
        date: "2024",
      },
    },
  },
  es: {
    nav: {
      hero: "Inicio",
      about: "Sobre Mi",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Educacion",
      certifications: "Certificaciones",
    },
    hero: {
      greeting: "Tadeo Parmigiani",
      role: "Estudiante de Ingenieria en Sistemas",
      location: "Rosario, Santa Fe, Argentina",
      description: "Apasionado por el desarrollo de software y la infraestructura tecnologica, con solidos conocimientos en bases de datos y diseno de sistemas eficientes y escalables.",
      downloadCV: "Descargar CV",
      viewProjects: "Ver Proyectos",
    },
    about: {
      title: "Sobre mi",
      paragraphs: [
        "Soy Tecnico Superior en Desarrollo de Software y actualmente estudio Ingenieria en Sistemas Informaticos. Me apasiona el desarrollo y la tecnologia, y continuo formandome constantemente para fortalecer mis habilidades tecnicas.",
        "Disfruto tanto del desarrollo visual como de la logica que lo sostiene. Soy curioso, dedicado y siempre busco aprender nuevas herramientas que me ayuden a crecer tecnica y personalmente.",
        "Mi objetivo es participar en proyectos que generen impacto, aportando soluciones creativas y eficientes a los desafios que se presenten, enfocandome en redes, infraestructura, computacion en la nube y administracion de sistemas."
      ],
      highlights: [
        { icon: "graduation", text: "Formacion academica solida en ingenieria de sistemas" },
        { icon: "heart", text: "Pasion por aprender nuevas tecnologias" },
        { icon: "code", text: "Enfoque en desarrollo y arquitectura de software" }
      ]
    },
    skills: {
      title: "Habilidades",
    },
    projects: {
      title: "Proyectos",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Codigo",
    },
    experience: {
      title: "Experiencia",
      present: "Presente",
    },
    education: {
      title: "Educacion",
    },
    certifications: {
      title: "Certificaciones",
      cert1: {
        title: "CCNA v7: Introduction to Networks",
        issuer: "Fundación Proydesa",
        date: "En curso",
      },
      cert2: {
        title: "AWS Cloud Practitioner Essentia",
        issuer: "AWS Training & Certification",
        date: "2026",
      },
      cert3: {
        title: "Instituto de Inglés",
        issuer: "Lic. Erica Clark | EC Language Solutions",
        date: "En curso",
      },
      cert4: {
        title: "Codo a Codo 4.0 – Full Stack Python",
        issuer: "Gobierno de la Ciudad de Buenos Aires",
        date: "2024",
      },

    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
