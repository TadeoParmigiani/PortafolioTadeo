"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { ExternalLink, Github, Info } from "lucide-react";
import { useState } from "react";
import { GraffitiBackground } from "@/components/graffiti-background";
import { ProjectDetailsModal, type ProjectModalContent } from "@/components/sections/project-details-modal";

const projects = [
  {
    title: {
      es: "B2-P Alquiler De Canchas De Futbol",
      en: "B2-P Football Field Booking",
    },
    description: {
      es: "Plataforma web para gestionar canchas y reservas en tiempo real, donde administradores configuran horarios y precios, y jugadores reservan turnos disponibles fácilmente.",
      en: "Web platform to manage football field reservations in real time, where administrators configure schedules and prices, and players easily book available slots.",
    },
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://b2-p-page.vercel.app/",
    githubUrl: "https://github.com/TadeoParmigiani/B2-P_Page",
    showDetailsButton: true,
    details: {
      title: {
        es: "B2-P Alquiler De Canchas De Futbol",
        en: "B2-P Football Field Booking",
      },
      images: ["projects/b2p.png", "projects/b2p2.png", "projects/b2p3.png", "projects/b2p4.png"],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript"],
      description: {
        es: [
          "Este proyecto fue desarrollado en el marco de la materia Metodologias y Desarrollo Web con el objetivo de aplicar conceptos de analisis, diseno y desarrollo de aplicaciones web. Consiste en una plataforma para la gestion y reserva de canchas de futbol que permite a los administradores organizar horarios, precios y disponibilidad desde un panel centralizado.",
          "El sistema busca digitalizar y simplificar la administracion de turnos, permitiendo gestionar canchas y visualizar reservas desde un unico entorno, mejorando la organizacion general.",
          "Desde el lado del usuario, la aplicacion ofrece una interfaz clara donde jugadores o equipos pueden consultar horarios disponibles y reservar en tiempo real mediante un formulario simple, evitando conflictos y confirmando cada turno al instante. (Mail: admin@gmail.com - Password: 123456)",
        ],
        en: [
          "This project was developed as part of the Web Methodologies and Development course, aiming to apply analysis, design, and web application development concepts. It consists of a football field reservation platform that allows administrators to manage schedules, pricing, and availability from a centralized panel.",
          "The system aims to digitize and simplify booking administration, allowing field management and reservation tracking from a single environment to improve overall organization.",
          "From the user side, the application provides a clear interface where players or teams can check available time slots and book in real time through a simple form, avoiding conflicts and confirming each booking instantly. (Mail: admin@gmail.com - Password: 123456)",
        ],
      },
      features: {
        es: ["Autenticación y autorización — JWT integrado con Firebase Auth y middleware RBAC .", "Validación y contratos de datos — Joi y DTOs para validar requests y garantizar integridad de la API.", "Modelado no relacional — Mongoose para esquemas y manejo de relaciones entre documentos.", "Comunicación cliente/servidor — Uso de axios, manejo de requests, interceptores para tokens.", "Gestión de estado escalable — Redux Toolkit bajo el patrón FLUX, con slices y RTK Query para sincronizar datos de forma consistente"],
        en: ["Authentication and authorization — JWT integrated with Firebase Auth and RBAC middleware.", "Validation and data contracts — Joi and DTOs to validate requests and ensure API integrity.", "Non-relational modeling — Mongoose for schemas and handling relationships between documents.", "Client/server communication — Use of axios, request handling, interceptors for tokens.", "Scalable state management — Redux Toolkit under the FLUX pattern, with slices and RTK Query to synchronize data consistently."],
      },
      challenges: {
        es: ["Centralización operativa — Toda la gestión de canchas y turnos en un único sistema.", "Optimización administrativa — Reducción de tareas manuales y tiempo de coordinación.","Disponibilidad en tiempo real — Visualización instantánea de horarios libres y ocupados.","Mayor confiabilidad — Menor margen de error humano en la asignación de reservas.","Mejor experiencia del usuario — Proceso de reserva simple, rápido y accesible desde cualquier dispositivo.","Escalabilidad — Posibilidad de agregar nuevas canchas, sedes o funcionalidades sin modificar la base del sistema."],
        en: ["Operational centralization — All field and booking management in a single system.", "Administrative optimization — Reduction of manual tasks and coordination time.", "Real-time availability — Instant visualization of free and occupied time slots.", "Greater reliability — Lower margin of human error in booking assignment.", "Better user experience — Simple, fast booking process accessible from any device.", "Scalability — Possibility to add new fields, locations, or features without modifying the core system."],
      },
      links: [
        { label: { es: "Frontend — Repo", en: "Frontend — Repo" }, url: "https://github.com/TadeoParmigiani/B2-P_Front" },
        { label: { es: "Backend — Live", en: "Backend — Live" }, url: "https://b2-p-back.onrender.com/" },
        { label: { es: "Web — Repo", en: "Web — Repo" }, url: "https://github.com/TadeoParmigiani/B2-P_Page" },
        { label: { es: "Frontend — Live", en: "Frontend — Live" }, url: "https://b2-p-front.vercel.app/" },
        { label: { es: "Backend — Repo", en: "Backend — Repo" }, url: "https://github.com/TadeoParmigiani/B2-P_Back" },
        { label: { es: "Web — Live", en: "Web — Live" }, url: "https://b2-p-page.vercel.app/" },
      ],
    } as ProjectModalContent,
  },
  {
    title: {
      es: "OIAT - Organización Internacional Asociaciones de Taekwon-Do ITF",
      en: "OIAT - International Organization of ITF Taekwon-Do Associations",
    },
    description: {
      en: "Website + system for International Organization of Taekwon-Do ITF Associations (In development...)",
      es: "Pagina + sistema para Organización Internacional Asociaciones de Taekwon-Do ITF (En desarrollo...)",
    },
    tech: ["React", "Node.js", "Express", "Mysql", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    showDetailsButton: true,
    details: {
      title: {
        es: "OIAT - Organizacion Internacional Asociaciones de Taekwon-Do ITF",
        en: "OIAT - International Organization of ITF Taekwon-Do Associations",
      },
      images: ["projects/oiat.png", "projects/oiat2.png", "projects/oiat3.png", "projects/oiat4.png"],
      tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "TypeScript"],
      description: {
        es: [
          "Estoy desarrollando la plataforma institucional para OIAT, una organización internacional de Taekwon-Do. El cliente necesitaba un sitio oficial para mostrar noticias, actividades y certificaciones, junto con un sistema interno para que los administradores gestionen el contenido.",
          "Comencé por el frontend, diseñando la interfaz y la estructura visual del sitio. Luego avancé al backend, donde estoy construyendo la lógica del sistema, la gestión de datos y las funciones internas. Más adelante voy a integrar ambas partes para unificar completamente el flujo entre el sitio público y el panel administrativo.",
          "El desarrollo lo realizo en comunicación directa con el cliente, realizando reuniones de levantamiento de requerimientos para comprender su estructura organizativa y los flujos de información. Con esa base armé un backlog priorizado y un roadmap iterativo. Trabajo con sprints cortos y entregas quincenales, presentando incrementos funcionales que el cliente revisa para dar feedback y ajustar requerimientos.",
          "Gracias a este enfoque ágil, con integración y entrega continua, el sistema evoluciona de forma incremental y se adapta exactamente a las necesidades reales de la institución.",
        ],
        en: [
          "I am developing the institutional platform for OIAT, an international Taekwon-Do organization. The client needed an official website to showcase news, activities, and certifications, along with an internal system for administrators to manage content.",
          "I started with the frontend, designing the interface and visual structure of the site. Then I moved on to the backend, where I am building the system logic, data management, and internal functions. Later I will integrate both parts to fully unify the flow between the public site and the administrative panel.",
          "The development is done in direct communication with the client, holding requirement gathering meetings to understand their organizational structure and information flows. Based on that, I created a prioritized backlog and an iterative roadmap. I work with short sprints and bi-weekly deliveries, presenting functional increments that the client reviews to provide feedback and adjust requirements.",
          "Thanks to this agile approach, with continuous integration and delivery, the system evolves incrementally and adapts exactly to the real needs of the institution.",
        ],
      },
      features: {
        es: ["Autenticación y autorización — JWT integrado con Firebase Auth y middleware RBAC ", "Validación y contratos de datos — Joi y DTOs para validar requests y garantizar integridad de la API.", "Modelado relacional — Prisma con esquema normalizado y control de versiones de la BD.","Comunicación cliente/servidor — Uso de axios, manejo de requests, interceptores para tokens.", "Gestión de estado escalable — Redux Toolkit bajo el patrón FLUX, con slices y RTK Query para sincronizar datos de forma consistente."],
        en: ["Authentication and authorization — JWT integrated with Firebase Auth and RBAC middleware.", "Validation and data contracts — Joi and DTOs to validate requests and ensure API integrity.", "Relational modeling — Prisma with normalized schema and database version control.", "Client/server communication — Use of axios, request handling, interceptors for tokens.", "Scalable state management — Redux Toolkit under the FLUX pattern, with slices and RTK Query to synchronize data consistently."],
      },
      challenges: {
        es: ["Centralización de la información — noticias, certificaciones y autoridades en un único lugar.", "Mayor transparencia — certificados públicos y verificables que fortalecen la credibilidad.", "Eficiencia administrativa — menos trámites manuales y menor margen de error.","Comunicación ágil — difusión rápida de novedades y eventos a toda la comunidad.","Visibilidad internacional — presencia oficial de la institución ante practicantes de todo el mundo.","Identificación clara de miembros — listado estructurado con datos y categorías oficiales."],
        en: ["Centralization of information — news, certifications, and authorities in a single place.", "Greater transparency — public and verifiable certificates that strengthen credibility.", "Administrative efficiency — less manual paperwork and lower margin of error.", "Agile communication — rapid dissemination of news and events to the entire community.", "International visibility — official presence of the institution to practitioners worldwide.", "Clear member identification — structured listing with official data and categories."],
      },
      links: [
        { label: { es: "En desarrollo", en: "In development" } },
      ],
    } as ProjectModalContent,
  },
  {
    title: {
      es: "StockOrbit",
      en: "StockOrbit",
    },
    description: {
      es: "Plataforma inteligente para gestionar stock e inventario en tiempo real. Optimiza procesos y mejora el control de tu negocio.(User: Admin - Password: Admin)",
      en: "Smart platform to manage stock and inventory in real time. Optimize processes and gain better control of your business.(User: Admin - Password: Admin)",
    },
    tech: ["Html", "Bootstrap", "Python", "Django", "Mysql"],
    liveUrl: "https://stockorbit.onrender.com/",
    githubUrl: "https://github.com/TadeoParmigiani/OrbitStock/tree/master",
    showDetailsButton: false,
    details: {
      title: {
        es: "StockOrbit",
        en: "StockOrbit",
      },
      images: [],
      tech: ["HTML", "Bootstrap", "Python", "Django", "MySQL"],
      description: {
        es: [
          "Plataforma para gestion de stock e inventario en tiempo real para operaciones de negocio.",
          "Incluye control de ingresos/egresos y trazabilidad de productos.",
        ],
        en: [
          "Platform for real-time stock and inventory management for business operations.",
          "Includes inbound/outbound control and product traceability.",
        ],
      },
      features: {
        es: ["Gestion de inventario", "Alertas de bajo stock", "Panel de administracion"],
        en: ["Inventory management", "Low stock alerts", "Administration dashboard"],
      },
      links: [
        { label: { es: "Acceso demo: Admin/Admin", en: "Demo access: Admin/Admin" } },
      ],
    } as ProjectModalContent,
  },
  {
    title: {
      es: "OrbitPage",
      en: "OrbitPage",
    },
    description: {
      en: "Institutional website that enhances the company’s digital presence with a clear and professional image.",
      es: "Página web institucional que impulsa la presencia digital de la empresa con una imagen clara y profesional.",
    },
    tech: ["React", "Tailwind CSS", "JavaScript", "EmailJS"],
    liveUrl: "https://www.orbitdev.com.ar/",
    githubUrl: "https://github.com/TadeoParmigiani/Orbitpage",
    showDetailsButton: false,
    details: {
      title: {
        es: "OrbitPage",
        en: "OrbitPage",
      },
      images: [],
      tech: ["React", "Tailwind CSS", "JavaScript", "EmailJS"],
      description: {
        es: [
          "Sitio institucional enfocado en fortalecer la presencia digital de la empresa.",
          "Prioriza claridad visual, presentacion de servicios y canales de contacto.",
        ],
        en: [
          "Institutional website focused on strengthening the company digital presence.",
          "Prioritizes visual clarity, service presentation, and contact channels.",
        ],
      },
      features: {
        es: ["Diseno responsive", "Secciones comerciales claras", "Formulario de contacto"],
        en: ["Responsive design", "Clear business sections", "Contact form"],
      },
    } as ProjectModalContent,
  },
];

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectModalContent | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleOpenProjectDetails = (project: ProjectModalContent | undefined) => {
    if (!project) return;
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectDetails = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-x-visible overflow-y-hidden py-20">
      {/* Dense Graffiti Background */}
      <div className="hidden lg:block">
        <GraffitiBackground variant={3} />
        <GraffitiBackground variant={8} />
      </div>

      {/* Graffiti Background */}
      <div className="absolute inset-0 pointer-events-none overflow-x-visible overflow-y-hidden">
        {/* Large background text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.3 }}
          className="absolute top-50 -right-7 text-[200px] font-(--font-marker) text-foreground select-none leading-none"
          style={{ transform: 'rotate(80deg)' }}
        >
          WORK
        </motion.div>

        {/* Splatter marks */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute bottom-20 left-20 w-20 h-20 opacity-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
            <circle cx="50" cy="50" r="35" />
            <circle cx="20" cy="20" r="8" />
            <circle cx="85" cy="30" r="6" />
            <circle cx="15" cy="75" r="5" />
          </svg>
        </motion.div>

        {/* Drip */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 200 }}
          transition={{ delay: 0.8, duration: 2 }}
          className="absolute top-0 right-1/3 w-1 bg-linear-to-b from-primary/40 to-transparent"
        />
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
              {t.projects.title}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-2 bg-primary mt-2 mx-auto"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title.es}
              initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -2 : 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card with rough edges */}
              <div className="relative bg-card p-6 border-2 border-border hover:border-primary transition-colors overflow-hidden">
                {/* Project Number - Graffiti style */}
                <motion.span 
                  className="absolute -top-6 -right-4 text-8xl font-(--font-marker) text-primary/20 select-none group-hover:text-primary/30 transition-colors"
                  style={{ transform: 'rotate(10deg)' }}
                >
                  0{index + 1}
                </motion.span>

                {/* Spray corner effect */}
                <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-primary/20">
                    <path d="M0,0 Q50,10 40,50 Q30,90 0,100 Z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-(--font-marker) uppercase mb-3 text-foreground group-hover:text-primary transition-colors glitch-hover">
                    {project.title[language]}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {project.description[language]}
                  </p>

                  {/* Tech Stack - Tag style */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05, x: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-wider"
                      style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      {t.projects.viewProject}
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 border-2 border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      aria-label={t.projects.viewCode}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {project.showDetailsButton && (
                  <motion.button
                    type="button"
                    onClick={() => handleOpenProjectDetails(project.details)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    aria-label={language === "es" ? "Ver detalles del proyecto" : "View project details"}
                  >
                    <Info className="h-4 w-4" />
                  </motion.button>
                )}

                {/* Bottom drip effect */}
                <motion.div
                  className="absolute -bottom-4 left-1/4 w-1 h-0 bg-linear-to-b from-primary to-transparent group-hover:h-8 transition-all duration-500 rounded-b-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailsModal
        isOpen={isProjectModalOpen}
        onClose={handleCloseProjectDetails}
        project={selectedProject}
      />
    </div>
  );
}
