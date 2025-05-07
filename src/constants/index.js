import {
  javascript,
  html,
  css,
  tailwind,
  python,
  reactimg,
  sass,
  antd,
  firebase,
  framermotion,
  docker,
  typescript,
  aws,
  postman,
} from "../assets/icons";
import {
  streamvibe,
  nnra_circle,
  datagridder,
  auspicious,
  hannatu,
  globalplug,
  boles,
  licomed,
  erdvision
} from "../assets/projects";

export const footerItems = [
  [
    {
      label: "Home",
      link: "#",
      head: true,
    },
    {
      label: "Categories",
      link: "#",
    },
    {
      label: "Devices",
      link: "#",
    },
    {
      label: "Pricing",
      link: "#",
    },
    {
      label: "FAQ",
      link: "#",
    },
  ],

  [
    {
      label: "Movies",
      link: "#",
      head: true,
    },
    {
      label: "Genres",
      link: "#",
    },
    {
      label: "Trending",
      link: "#",
    },
    {
      label: "New Release",
      link: "#",
    },
    {
      label: "Popular",
      link: "#",
    },
  ],

  [
    {
      label: "Shows",
      link: "#",
      head: true,
    },
    {
      label: "Genres",
      link: "#",
    },
    {
      label: "Trending",
      link: "#",
    },
    {
      label: "New Release",
      link: "#",
    },
    {
      label: "Popular",
      link: "#",
    },
  ],

  [
    {
      label: "Support",
      link: "#",
      head: true,
    },
    {
      label: "Contat us",
      link: "#",
    },
  ],
  [
    {
      label: "Subscription",
      link: "#",
      head: true,
    },
    {
      label: "Plans",
      link: "#",
    },
    {
      label: "Features",
      link: "#",
    },
  ],
];

export const projectList = [
  {
    title: "ErdVision",
    description: "Designed and developed the full-stack architecture for ERDVision, a SaaS platform for creating database diagrams with real-time collaboration, in-app chat, and automatic code generation in SQL and Python ORM—using Next.js, Tailwind CSS, and Django Rest Framework.",
    year: 2025,
    image: erdvision,
    live: "https://erdvision.dev",
    technologies: ["Django rest framework", "Docker", 'Channels', 'Daphne', 'websockets', 'Digital ocean', "Next.js", "Tailwind"],
  },
  {
    title: "Licomed",
    description: "Developed the backend for a health management platform with features including patient-doctor consultations, medical record handling, secure payments, and an admin dashboard for efficient healthcare service coordination.",
    year: 2025,
    image: licomed,
    live: "https://play.google.com/store/apps/details?id=com.nanocodes.licomed",
    technologies: ["Django rest framework", "Celery", "Docker", "Google maps api", 'Channels', 'Daphne', 'websockets', 'AWS'],
  },
  {
    title: "Global plug",
    description: "Developed the backend for a travel agency platform with features including travel credential applications, secure payments, and a comprehensive admin dashboard for seamless management.",
    year: 2024,
    image: globalplug,
    live: "https://play.google.com/store/apps/details?id=com.nanocodes.globalplug",
    technologies: ["Django rest framework", "Celery", "Docker", "Weasyprint", 'Channels', 'Daphne', 'websockets', 'AWS s3', 'GCP'],
  },
  {
    title: "Boles inventory managment",
    description: "Co-developed the backend for a custom inventory management system, supporting a mobile app for multiple departments and an admin dashboard to track stock levels and monitor business inflow and outflow.",
    year: 2024,
    image: boles,
    live: "https://play.google.com/store/apps/details?id=com.nanocodes.Boles",
    technologies: ["Django rest framework", "Docker", "gunicorn", 'Nginx', 'AWS s3', 'GCP'],
  },
  {
    title: "OTT StreamVibe",
    description: "Movie Streaming Platform Website.",
    year: 2024,
    image: streamvibe,
    live: "https://bee-ott.vercel.app",
    github: "#",
    technologies: ["React js", "Tailwind", "Ant design", "Framer motion"],
    links: [
      {
        name: "Github",
        link: "#",
      },
    ],
  },
  {
    title: "NNRA digital network",
    description:
      "Collaboration software for the Nigerian Nuclear Regulatory Authority.",
    year: 2024,
    image: nnra_circle,
    live: "https://codebee.pythonanywhere.com",
    github: null,
    technologies: ["Django", "Daphne", "ASGI", "Javascript", "Redis", "Websockets", "Nginx"],
    links: [
      {
        name: "Github",
        link: "#",
      },
    ],
  },

  {
    title: "Auspicious network solutions",
    description:
      "A brand new website built for this established Nigerian solar installation company",
    year: 2024,
    image: auspicious,
    live: "https://auspiciousnetworksolutions.com.ng/",
    github: null,
    technologies: ["HTML", "CSS", "Javascript"],
    links: [
      {
        name: "Github",
        link: "#",
      },
    ],
  },

  {
    title: "Hannatu Halan Foundation",
    description: "Compelling landing page for a Nigerian cause driven NGO",
    year: 2024,
    image: hannatu,
    live: "https://hannatuhalanfoundation.com/",
    github: null,
    technologies: ["React", "Ant Design", "Framer motion", "Javascript"],
    links: [
      {
        name: "Github",
        link: "#",
      },
    ],
  },
  {
    title: "Data gridder",
    description: "Highly performant data collection and orgarnisation software.",
    year: 2023,
    image: datagridder,
    live: "https://datagridder.com",
    github: null,
    technologies: ["Django", "HTML", "CSS", "Javascript"],
    links: [
      {
        name: "Github",
        link: "#",
      },
    ],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const technologies = [
  {
    label: "Python Django",
    image: python,
    link: "",
  },
  {
    label: "Docker",
    image: docker,
    link: "",
  },
  {
    label: "aws",
    image: aws,
    link: "",
  },
  {
    label: "Postman",
    image: postman,
    link: "",
  },
  {
    label: "React Js",
    image: reactimg,
    link: "",
  },
  {
    label: "Tailwind css",
    image: tailwind,
    link: "",
  },
  {
    label: "Ant design",
    image: antd,
    link: "",
  },
  {
    label: "Framer Motion",
    image: framermotion,
    link: "",
  },

  {
    label: "Firebase",
    image: firebase,
    link: "",
  },
  {
    label: "JavaScript",
    image: javascript,
    link: "",
  },
  {
    label: "TypeScript",
    image: typescript,
    link: "",
  },
  {
    label: "Scss",
    image: sass,
    link: "",
  },
  {
    label: "HTML 5",
    image: html,
    link: "",
  },
  {
    label: "CSS 3",
    image: css,
    link: "",
  },
];
