export interface Project {
  id: string;
  title: string;
  category: string;
  techStack: string[];
  imageUrl: string;
  redirectUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  stats: {
    experience: string;
    projects: string;
  };
  socials: {
    linkedin: string;
    github: string;
    instagram: string;
    email: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Muhammad Alief Albayu",
  title: "Fullstack Designer & Developer",
  subtitle: "Fullstack Designer & Developer focusing on motion and interaction. Crafting high-fidelity products with technical precision and avant-garde aesthetics.",
  bio: [
    "Halo! Saya Alief, seorang Fullstack Developer yang bersemangat dalam membangun produk digital interaktif yang tidak hanya berkinerja tinggi di sisi server, tetapi juga indah dan intuitif saat digunakan oleh pengguna.",
    "Dengan pemahaman mendalam tentang arsitektur back-end yang kuat serta kepedulian yang tinggi terhadap detail transisi mikro dan animasi front-end, saya berkomitmen menghadirkan solusi digital secara end-to-end yang mampu membantu bisnis berkembang secara eksponensial."
  ],
  stats: {
    experience: "2+",
    projects: "10+"
  },
  socials: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    email: "mailto:aliefalbayu@example.com"
  }
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Developer Mentee",
    company: "Coding Camp 2026 by DBS Foundation",
    period: "Feb 2026 - Jul 2026",
    description: "Mengikuti program pembinaan intensif berskala nasional yang berfokus pada kesiapan industri full-stack development. Mengembangkan arsitektur aplikasi web modern, mempelajari standarisasi API, integrasi basis data, serta penerapan clean-code dengan fokus pada efisiensi skala besar.",
    skills: ["Full-Stack Web Development", "React", "Express.js"]
  },
  {
    id: "exp-2",
    role: "Independent Full-Stack Developer",
    company: "Freelance / Personal projects",
    period: "2024 - 2025",
    description: "Merancang, merakit, dan merilis aplikasi web interaktif berskala mikro hingga menengah secara mandiri. Berfokus pada optimalisasi UI responsif dan efisiensi query server.",
    skills: []
  }
];

export const techStack: TechItem[] = [
  { name: "React", icon: "atom" },
  { name: "Tailwind", icon: "palette" },
  { name: "Figma", icon: "figma" },
  { name: "Node.js", icon: "server" },
  { name: "Motion", icon: "activity" },
  { name: "TypeScript", icon: "code-2" }
];

export const services: Service[] = [
  {
    id: "srv-1",
    title: "Front-end Development",
    description: "Membangun tampilan antarmuka yang sangat responsif, fluid, interaktif, dengan optimasi frame rate tinggi dan transisi mikro yang elegan.",
    icon: "layout"
  },
  {
    id: "srv-2",
    title: "Back-end Engineering",
    description: "Mengembangkan arsitektur server yang andal, perancangan API RESTful yang aman, manajemen basis data, serta optimalisasi fungsionalitas sistem.",
    icon: "database"
  },
  {
    id: "srv-3",
    title: "UI/UX & Motion Design",
    description: "Mendesain diagram alur pengguna (user journey), rancang grafis berstandar premium dengan prinsip visual yang clean, minimalis, dan futuristik.",
    icon: "sparkles"
  }
];

export const projects: Project[] = [
  {
    id: "prj-1",
    title: "Nexus Dashboard",
    category: "SaaS / Interface",
    techStack: ["REACT & CHART.JS"],
    imageUrl: "https://placehold.co/1200x600/16171A/98cd00?text=Nexus+Dashboard+Preview",
    redirectUrl: "#"
  },
  {
    id: "prj-2",
    title: "Echo Studio",
    category: "Web / Audio",
    techStack: ["THREE.JS & WEB AUDIO"],
    imageUrl: "https://placehold.co/1200x400/16171A/98cd00?text=Echo+Studio+Preview",
    redirectUrl: "#"
  }
];
