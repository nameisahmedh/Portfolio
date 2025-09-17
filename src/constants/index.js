export const myProjects = [
  {
    id: 1,
    title: "AI Content Creation Platform",
    description:
      "A full-stack AI-powered platform for content creation, featuring article generation, blog titles, image creation, and background removal.",
    subDescription: [
      "Features AI-powered article writing (Google Gemini), image generation (ClipDrop API), and background removal (Cloudinary AI).",
      "Includes secure user authentication with Clerk, offering usage limits and premium subscription plans.",
      "Built with a modern, responsive UI using React 19, Tailwind CSS, and Framer Motion for smooth animations.",
      "Backend powered by Node.js and Express.js with a MongoDB database for robust performance.",
    ],
    href: "https://arix-ai.vercel.app/",
    logo: "",
    image: "/assets/projects/ai-platform.png",
    tags: [
      {
        id: 1,
        name: "React 19",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "Google Gemini",
        path: "/assets/logos/gemini.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Staff Management System",
    description:
      "A full-stack staff management app built with role-based dashboards and task tracking functionality.",
    subDescription: [
      "Designed a dark-themed responsive UI with protected routing for secure access.",
      "Implemented form-based task creation with persistent routing.",
      "The application is fully deployed and live on Vercel.",
    ],
    href: "https://devpromanagementsystem.vercel.app/",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Vercel",
        path: "/assets/logos/vercel.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Stroke Prediction Desktop App",
    description:
      "A GUI-based desktop application that predicts stroke risk from health inputs using Machine Learning models.",
    subDescription: [
      "Integrated 7 different ML algorithms, using SMOTE for data balancing to improve accuracy.",
      "Visualized model performance and results using ROC curves, confusion matrices, and feature importance graphs.",
      "Built with a user-friendly interface using Python and Tkinter.",
    ],
    href: "https://github.com/nameisahmedh/strokeprediction",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Scikit-learn",
        path: "/assets/logos/scikitlearn.svg",
      },
      {
        id: 3,
        name: "XGBoost",
        path: "/assets/logos/xgboost.svg",
      },
      {
        id: 4,
        name: "Tkinter",
        path: "/assets/logos/tkinter.svg",
      },
    ],
  },
  {
    id: 4,
    title: "LLM-based Data Organization (Upcoming)",
    description: "A project focused on synergizing data organization using Large Language Models to create intelligent and efficient data management systems.",
    subDescription: [
        "Currently in the conceptual and planning phase.",
        "Will explore advanced AI techniques for data structuring and retrieval.",
    ],
    href: "",
    logo: "",
    tags: [
      {
        id: 1,
        name: "LLM",
        path: "/assets/logos/llm.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "Vector DB",
        path: "/assets/logos/vectordb.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Smart AI Reminder (Upcoming)",
    description: "An intelligent reminder application that learns user habits and context to provide timely and relevant notifications.",
    subDescription: [
        "In the ideation stage, focusing on user-centric design and proactive assistance.",
        "Aims to go beyond simple time-based alerts to offer smart, predictive reminders.",
    ],
    href: "",
    logo: "",
    tags: [
      {
        id: 1,
        name: "AI/ML",
        path: "/assets/logos/ai-ml.svg",
      },
      {
        id: 2,
        name: "Mobile App",
        path: "/assets/logos/mobile.svg",
      },
      {
        id: 3,
        name: "NLP",
        path: "/assets/logos/nlp.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/nameisahmedh",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mohammad-kammar-ahmed-48b391253/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/name_is_ahmedh/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "General Secretary",
    job: "CodeOholics Community - CMRTC",
    date: "2024 - Present",
    contents: [
      "Led cross-functional teams to manage large-scale event outreach, handle registrations, and ensure smooth execution from start to finish.",
      "Responsible for fostering a strong tech culture on campus by organizing technical events, workshops, and coding competitions.",
      "Spearheaded 'Hack for Mini 2.0,' a national-level online hackathon that successfully attracted over 1300 participants from various states across India.",
      "Orchestrated 'Technovanza 4.0,' a national-level intercollege hackathon involving more than 800 participants and over 130 teams.",
    ],
  },
  {
    title: "Event Management Lead",
    job: "Tech Events & Hackathons",
    date: "2023 - 2024",
    contents: [
      "Actively contributed to the planning and execution of multiple tech events.",
      "Managed event logistics, participant coordination, and technical infrastructure for large-scale competitions.",
      "Collaborated with sponsors, judges, and technical teams to ensure successful event delivery.",
      "Developed strong organizational and communication skills through managing diverse teams and stakeholders.",
    ],
  },
  {
    title: "NCC 'B' Certificate Holder",
    job: "National Cadet Corps",
    date: "2022 - 2023",
    contents: [
      "Demonstrated discipline, leadership, and commitment to national service through rigorous training programs.",
      "Developed strong teamwork and leadership skills through various military-style exercises and community service activities.",
      "Participated in camps, parades, and social service initiatives, contributing to community development.",
    ],
  },
];

export const resumeLink = "https://drive.google.com/uc?export=download&id=1Eg4yd3zEvALF7WB3Z5pPiIaFeyy28ZFl";

export const codingJourney = [
  {
    title: "The Foundation",
    period: "2022 - 2023",
    description: "Began my journey by building foundational frontend web applications using HTML, CSS, and JavaScript.",
    highlights: [
      "Focused on exploration and practical learning by creating numerous projects to solidify my understanding.",
      "Started networking and building valuable connections within the local tech community."
    ]
  },
  {
    title: "Growth and Specialization",
    period: "2023 - 2024",
    description: "Deepened my knowledge by connecting with and learning from senior developers in the field.",
    highlights: [
      "Transitioned from basic projects to developing full-fledged frontend applications and expanded my skills into full-stack development.",
      "Began a deep dive into mastering Data Structures and Algorithms (DSA)."
    ]
  },
  {
    title: "AI & Machine Learning Focus",
    period: "2024 - Mid 2025",
    description: "Learned AI tools and made AI projects, started working on AI and LLM workflows.",
    highlights: [
      "Developed expertise in AI tools and frameworks for practical applications.",
      "Built multiple AI-powered projects including content creation platforms and ML prediction systems.",
      "Started working extensively with Large Language Models and AI workflows."
    ]
  },
  {
    title: "AI Generalist Path",
    period: "2025 - Present",
    description: "Learned AI automations and have a keen interest in becoming an AI generalist.",
    highlights: [
      "Mastered AI automation tools and techniques for various use cases.",
      "Actively pursuing the path to become an AI generalist with broad expertise across AI domains.",
      "Eagerly seeking opportunities to apply AI knowledge in real-world scenarios."
    ]
  }
];