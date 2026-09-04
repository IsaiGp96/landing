export const translations = {
  es: {
    header: {
      links: [
        { title: "Perfil", url: "#overview" },
        { title: "Experiencia", url: "#experience" },
        { title: "Habilidades", url: "#skills" },
        { title: "Servicios", url: "#pricing" },
        { title: "F.A.Q.", url: "#faq" },
      ],
      contact: "Contáctame",
    },

    languageToggle: { label: "EN", aria: "Cambiar a inglés" },

    hero: {
      greeting: "Hola, soy",
      subtitle:
        "Ingeniero en Desarrollo y Gestión de Software. Coordino equipos de TI, construyo software a medida y rediseño infraestructura de red para que los procesos del negocio simplemente funcionen.",
      ctaPrimary: "Contáctame",
      ctaSecondary: "Ver servicios",
    },

    primaryFeatures: {
      badge: "Perfil",
      titleMain: "Coordino equipos y construyo",
      titleFadeLines: ["software que resuelve", "procesos reales"],
      description: [
        "Ingeniero en Desarrollo y Gestión de Software con experiencia técnica y de liderazgo coordinando equipos de TI multidisciplinarios.",
        "Disponible para reubicación internacional y para trabajar en distintas zonas horarias en inglés.",
      ],
      cards: {
        coordination: {
          title: "Coordinación de proyectos IT",
          description:
            "Liderazgo de equipos multidisciplinarios e implementación de ERP/CRM (Intelisis), alineando procesos operativos, financieros y comerciales con la estrategia del negocio.",
        },
        development: {
          title: "Desarrollo de software",
          description:
            "Diseño y construcción de soluciones con Python, React, Node.js y PostgreSQL para digitalizar procesos comerciales, de producción e importación.",
        },
        networking: {
          title: "Redes e infraestructura",
          description:
            "Rediseño de topología de red, segmentación por VLANs y administración de VPN site-to-site y de acceso remoto sobre equipo Ubiquiti.",
        },
      },
    },

    secondaryFeatures: {
      badge: "Cómo trabajo",
      titleMain: "¿Tienes un reto técnico?",
      titleFade: "Tengo el stack para resolverlo",
      description: [
        "De la coordinación del proyecto al código en producción.",
        "Así es como suelo aportar valor a los equipos con los que trabajo.",
      ],
      suggestions: {
        title: "¿En qué puedo ayudarte?",
        description:
          "Desde automatizar tareas repetitivas hasta levantar la infraestructura de red de una oficina, este es el tipo de retos en los que suelo involucrarme.",
        items: [
          "Automatizar procesos administrativos y comerciales",
          "Implementar y estabilizar ERP/CRM",
          "Diseñar y segmentar redes con VLANs",
          "Desarrollar software a medida (Python, React, Node.js)",
        ],
      },
      analysis: {
        title: "Stack técnico",
        description:
          "Un vistazo rápido a mi nivel en las áreas que más utilizo día a día en proyectos de desarrollo, coordinación y automatización.",
        metrics: [
          { title: "Desarrollo (Python, React, Node.js)", value: "Avanzado" },
          { title: "Bases de datos (SQL / NoSQL)", value: "Avanzado" },
          { title: "Redes (VLANs, VPN, Ubiquiti)", value: "Intermedio" },
          { title: "Inglés (B2 certificado)", value: "B2" },
        ],
      },
    },

    extraFeatures: {
      badge: "Habilidades",
      title: "Stack técnico, herramientas e idiomas que uso para pasar de una idea a una solución en producción",
      items: [
        { title: "Lenguajes de programación", description: "Java, TypeScript, JavaScript, PHP, C#, Python" },
        { title: "Bases de datos", description: "MySQL, PostgreSQL, SQL Server, Firebase, MongoDB" },
        { title: "Frameworks", description: "Spring Boot, React, React Native, Node.js, Laravel, Flutter, Flask" },
        { title: "Redes", description: "Cisco IOS (académico), Ubiquiti — VLANs, VPN, rediseño de red" },
        {
          title: "Herramientas y control de versiones",
          description: "Git, GitHub, VS Code, Visual Studio, Android Studio, IntelliJ",
        },
        { title: "Gestión de proyectos", description: "Scrum, Jira" },
        { title: "Idiomas", description: "Español (nativo), Inglés (B2 certificado)" },
        { title: "Educación", description: "Ing. en Desarrollo y Gestión de Software — UTCH, 2022–2025" },
      ],
    },

    testimonials: {
      badge: "Experiencia",
      titleMain: "De la coordinación de equipos",
      titleFade: "al código en producción",
      description: "Un resumen de los últimos proyectos y roles en los que he trabajado.",
      jobs: [
        {
          role: "Programming Coordinator",
          company: "Ripipsa",
          period: "Junio 2026 – Presente",
          body: "Coordino proyectos de desarrollo enfocados en automatizar procesos internos, construyendo soluciones con Python, React, Node.js y PostgreSQL para digitalizar procesos comerciales, de producción e importación.",
        },
        {
          role: "IT Project Coordinator",
          company: "Mobinsa",
          period: "Enero 2025 – Abril 2026",
          body: "Lideré la implementación y estabilización del ERP Intelisis y el CRM corporativo. Rediseñé la topología de red sobre equipo Ubiquiti con segmentación VLAN y administré VPN site-to-site y de acceso remoto. Equipo a cargo: 4 personas.",
        },
        {
          role: "Development Lead",
          company: "Proyecto de investigación doctoral — UACJ",
          period: "Febrero 2022 – Presente",
          body: "Diseñé la arquitectura tecnológica de un proyecto de investigación doctoral enfocado en la integración y ejecución eficiente de algoritmos especializados, incluyendo procesamiento automatizado de datos experimentales y visualización de resultados.",
        },
        {
          role: "RPA Developer",
          company: "Syscom",
          period: "Febrero 2022 – Octubre 2024",
          body: "Desarrollé e implementé soluciones de automatización robótica de procesos (RPA) para optimizar operaciones contables y administrativas, integrando flujos de trabajo entre plataformas y reduciendo el error humano.",
        },
      ],
    },

    faq: {
      badge: "¿Preguntas?",
      titleMain: "Preguntas",
      titleFadeLines: ["frecuentes", "sobre mi trabajo"],
      description: "Lo que la mayoría suele preguntarme antes de contactarme o contratarme.",
      items: [
        {
          title: "¿En qué áreas te especializas?",
          content:
            "Principalmente en coordinación de proyectos de TI, desarrollo de software a medida (Python, React, Node.js) y rediseño de infraestructura de red (segmentación VLAN, VPN sobre equipo Ubiquiti).",
        },
        {
          title: "¿Qué tecnologías manejas?",
          content:
            "Java, TypeScript, JavaScript, PHP, C# y Python; bases de datos como MySQL, PostgreSQL, SQL Server, Firebase y MongoDB; frameworks como Spring Boot, React, React Native, Node.js, Laravel, Flutter y Flask.",
        },
        {
          title: "¿Tienes disponibilidad para reubicación o trabajo remoto?",
          content:
            "Sí. Cuento con disponibilidad para reubicación internacional y estoy cómodo trabajando en distintas zonas horarias en inglés (nivel B2 certificado).",
        },
        {
          title: "¿Cómo puedo contratarte o pedir una cotización?",
          content:
            "Escríbeme directamente por correo o revisa la sección de Servicios para ver los paquetes disponibles y solicitar una cotización a la medida de tu proyecto.",
        },
      ],
    },

    pricing: {
      badge: "Servicios",
      titleMain: "Paquetes pensados",
      titleWord: "para",
      titleFade: "impulsar tu proyecto",
      description:
        "Precios de referencia en pesos mexicanos (MXN). El alcance final de cada proyecto se cotiza a la medida.",
      plans: [
        {
          name: "Consultoría técnica",
          price: "$600",
          unit: "MXN / hora",
          features: [
            "Diagnóstico de código o infraestructura",
            "Recomendaciones técnicas",
            "Acompañamiento puntual",
            "Sesión remota",
          ],
          cta: "Agendar consultoría",
        },
        {
          name: "Automatización & RPA",
          price: "$800",
          unit: "MXN / hora",
          features: [
            "Automatización de procesos",
            "Integración entre sistemas",
            "Reducción de errores manuales",
            "Documentación incluida",
          ],
          cta: "Solicitar propuesta",
        },
        {
          name: "Desarrollo a medida",
          price: "$900",
          unit: "MXN / hora",
          features: [
            "Arquitectura de software",
            "Full-stack: Python, React, Node.js, Spring Boot",
            "Integración con base de datos",
            "Soporte post-entrega",
          ],
          cta: "Solicitar propuesta",
          highlighted: true,
        },
      ],
      custom: {
        name: "Servicios personalizados",
        price: "A tu medida",
        features: [
          "Redes: rediseño, VLANs y VPN",
          "Implementación de ERP / CRM",
          "Proyectos de largo alcance",
          "Alcance definido contigo",
        ],
        cta: "Solicitar cotización",
      },
      mailSubjectProposal: (name) => `Solicitud de propuesta - ${name}`,
      mailSubjectQuote: "Solicitud de cotización",
    },

    footer: {
      navTitle: "Navegación",
      contactTitle: "Contacto",
      iconNames: { email: "Correo", github: "GitHub", linkedin: "LinkedIn" },
    },
  },

  en: {
    header: {
      links: [
        { title: "Profile", url: "#overview" },
        { title: "Experience", url: "#experience" },
        { title: "Skills", url: "#skills" },
        { title: "Services", url: "#pricing" },
        { title: "F.A.Q.", url: "#faq" },
      ],
      contact: "Contact me",
    },

    languageToggle: { label: "ES", aria: "Switch to Spanish" },

    hero: {
      greeting: "Hi, I'm",
      subtitle:
        "Software Development & Management Engineer. I coordinate IT teams, build custom software, and redesign network infrastructure so business processes simply work.",
      ctaPrimary: "Contact me",
      ctaSecondary: "View services",
    },

    primaryFeatures: {
      badge: "Profile",
      titleMain: "I coordinate teams and build",
      titleFadeLines: ["software that solves", "real processes"],
      description: [
        "Software Development & Management Engineer with technical and leadership experience coordinating multidisciplinary IT teams.",
        "Available for international relocation and for working across time zones in English.",
      ],
      cards: {
        coordination: {
          title: "IT project coordination",
          description:
            "Leading multidisciplinary teams and implementing ERP/CRM (Intelisis), aligning operational, financial, and commercial processes with business strategy.",
        },
        development: {
          title: "Software development",
          description:
            "Designing and building solutions with Python, React, Node.js, and PostgreSQL to digitize commercial, production, and import processes.",
        },
        networking: {
          title: "Networking & infrastructure",
          description:
            "Redesigning network topology, VLAN segmentation, and managing site-to-site and remote-access VPNs on Ubiquiti equipment.",
        },
      },
    },

    secondaryFeatures: {
      badge: "How I work",
      titleMain: "Got a technical challenge?",
      titleFade: "I've got the stack to solve it",
      description: [
        "From project coordination to code in production.",
        "This is how I usually bring value to the teams I work with.",
      ],
      suggestions: {
        title: "How can I help you?",
        description:
          "From automating repetitive tasks to setting up an office's network infrastructure, these are the kinds of challenges I usually get involved in.",
        items: [
          "Automate administrative and commercial processes",
          "Implement and stabilize ERP/CRM",
          "Design and segment networks with VLANs",
          "Build custom software (Python, React, Node.js)",
        ],
      },
      analysis: {
        title: "Technical stack",
        description:
          "A quick look at my level in the areas I use most day-to-day in development, coordination, and automation projects.",
        metrics: [
          { title: "Development (Python, React, Node.js)", value: "Advanced" },
          { title: "Databases (SQL / NoSQL)", value: "Advanced" },
          { title: "Networking (VLANs, VPN, Ubiquiti)", value: "Intermediate" },
          { title: "English (Certified B2)", value: "B2" },
        ],
      },
    },

    extraFeatures: {
      badge: "Skills",
      title: "Tech stack, tools, and languages I use to turn an idea into a production-ready solution",
      items: [
        { title: "Programming languages", description: "Java, TypeScript, JavaScript, PHP, C#, Python" },
        { title: "Databases", description: "MySQL, PostgreSQL, SQL Server, Firebase, MongoDB" },
        { title: "Frameworks", description: "Spring Boot, React, React Native, Node.js, Laravel, Flutter, Flask" },
        { title: "Networking", description: "Cisco IOS (academic), Ubiquiti — VLANs, VPN, network redesign" },
        {
          title: "Tools & version control",
          description: "Git, GitHub, VS Code, Visual Studio, Android Studio, IntelliJ",
        },
        { title: "Project management", description: "Scrum, Jira" },
        { title: "Languages", description: "Spanish (native), English (Certified B2)" },
        { title: "Education", description: "B.Eng. in Software Development & Management — UTCH, 2022–2025" },
      ],
    },

    testimonials: {
      badge: "Experience",
      titleMain: "From coordinating teams",
      titleFade: "to code in production",
      description: "A summary of the latest projects and roles I've worked on.",
      jobs: [
        {
          role: "Programming Coordinator",
          company: "Ripipsa",
          period: "June 2026 – Present",
          body: "I coordinate development projects focused on automating internal processes, building solutions with Python, React, Node.js, and PostgreSQL to digitize commercial, production, and import processes.",
        },
        {
          role: "IT Project Coordinator",
          company: "Mobinsa",
          period: "January 2025 – April 2026",
          body: "Led the implementation and stabilization of the Intelisis ERP and the corporate CRM. Redesigned the network topology on Ubiquiti equipment with VLAN segmentation, and managed site-to-site and remote-access VPNs. Team size: 4 people.",
        },
        {
          role: "Development Lead",
          company: "Doctoral research project — UACJ",
          period: "February 2022 – Present",
          body: "Designed the technology architecture for a doctoral research project focused on the integration and efficient execution of specialized algorithms, including automated processing of experimental data and results visualization.",
        },
        {
          role: "RPA Developer",
          company: "Syscom",
          period: "February 2022 – October 2024",
          body: "Developed and implemented robotic process automation (RPA) solutions to streamline accounting and administrative operations, integrating workflows across platforms and reducing human error.",
        },
      ],
    },

    faq: {
      badge: "Questions?",
      titleMain: "Frequently",
      titleFadeLines: ["asked questions", "about my work"],
      description: "What most people usually ask me before getting in touch or hiring me.",
      items: [
        {
          title: "What areas do you specialize in?",
          content:
            "Mainly IT project coordination, custom software development (Python, React, Node.js), and network infrastructure redesign (VLAN segmentation, VPN on Ubiquiti equipment).",
        },
        {
          title: "What technologies do you work with?",
          content:
            "Java, TypeScript, JavaScript, PHP, C#, and Python; databases like MySQL, PostgreSQL, SQL Server, Firebase, and MongoDB; frameworks like Spring Boot, React, React Native, Node.js, Laravel, Flutter, and Flask.",
        },
        {
          title: "Are you available for relocation or remote work?",
          content:
            "Yes. I'm available for international relocation and comfortable working across time zones in English (certified B2 level).",
        },
        {
          title: "How can I hire you or request a quote?",
          content:
            "Email me directly or check the Services section to see the available packages and request a quote tailored to your project.",
        },
      ],
    },

    pricing: {
      badge: "Services",
      titleMain: "Packages designed",
      titleWord: "to",
      titleFade: "boost your project",
      description: "Reference prices in Mexican pesos (MXN). The final scope of each project is quoted to fit your needs.",
      plans: [
        {
          name: "Technical consulting",
          price: "$600",
          unit: "MXN / hour",
          features: [
            "Code or infrastructure diagnosis",
            "Technical recommendations",
            "Ad-hoc support",
            "Remote session",
          ],
          cta: "Book a consultation",
        },
        {
          name: "Automation & RPA",
          price: "$800",
          unit: "MXN / hour",
          features: [
            "Process automation",
            "System integration",
            "Reduced manual errors",
            "Documentation included",
          ],
          cta: "Request a proposal",
        },
        {
          name: "Custom development",
          price: "$900",
          unit: "MXN / hour",
          features: [
            "Software architecture",
            "Full-stack: Python, React, Node.js, Spring Boot",
            "Database integration",
            "Post-delivery support",
          ],
          cta: "Request a proposal",
          highlighted: true,
        },
      ],
      custom: {
        name: "Custom services",
        price: "Tailored to you",
        features: [
          "Networking: redesign, VLANs, and VPN",
          "ERP / CRM implementation",
          "Long-term projects",
          "Scope defined with you",
        ],
        cta: "Request a quote",
      },
      mailSubjectProposal: (name) => `Proposal request - ${name}`,
      mailSubjectQuote: "Quote request",
    },

    footer: {
      navTitle: "Navigation",
      contactTitle: "Contact",
      iconNames: { email: "Email", github: "GitHub", linkedin: "LinkedIn" },
    },
  },
}
