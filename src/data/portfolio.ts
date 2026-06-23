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
  subtitle: "Fullstack Developer passionate about creating scalable web applications, designing efficient backend systems, and delivering seamless user experiences.",
  bio: [
    "Hi, I'm Alief, a Fullstack Developer passionate about building modern web applications and solving real-world problems through technology. I enjoy working across the entire development lifecycle, from designing databases and building APIs to creating responsive user interfaces.",
    "Currently, I am continuing to develop my skills in full-stack development through various personal projects, team collaborations, and the experience I gained from the DBS Coding Camp program. I believe that good technology not only works well behind the scenes, but also provides a simple and valuable experience for users."
  ],
  stats: {
    experience: "2+",
    projects: "10+"
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/alief-albayu-0a7306363/",
    github: "https://github.com/Albayu123",
    instagram: "https://www.instagram.com/4lieffal_?igsh=aHpuZnN4ZnUyZjZq",
    email: "mailto:aliefalbayu2@gmail.com"
  }
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Developer Mentee",
    company: "Coding Camp 2026 by DBS Foundation",
    period: "Feb 2026 - Jul 2026",
    description: "Participated in an intensive full-stack development program focused on modern web technologies, RESTful API development, database integration, and collaborative software engineering practices.",
    skills: ["Full-Stack Web Development", "React", "Express.js"]
  },
  {
    id: "exp-2",
    role: "Self-Taught Web Developer",
    company: "Personal Projects & Learning",
    period: "2024 - 2025",
    description: "Started my web development journey by learning HTML, CSS, JavaScript, PHP, and Git. Built small projects such as CRUD applications and productivity tools while developing a strong foundation in modern web development.",
    skills: []
  }
];

export const techStack: TechItem[] = [
  { name: "React", icon: "atom" },
  { name: "Tailwind", icon: "palette" },
  { name: "Figma", icon: "figma" },
  { name: "Node.js", icon: "server" },
  { name: "Express", icon: "terminal" },
  { name: "TypeScript", icon: "code-2" }
];

export const services: Service[] = [
  {
    id: "srv-1",
    title: "Front-end Development",
    description: "Building responsive and interactive web interfaces using modern JavaScript frameworks and best UI practices.",
    icon: "layout"
  },
  {
    id: "srv-2",
    title: "Back-end Engineering",
    description: "Designing scalable APIs, authentication systems, and database architectures that power reliable applications.",
    icon: "database"
  },
  {
    id: "srv-3",
    title: "Full-stack Apllication Development",
    description: "Creating complete end-to-end solutions from database design and backend logic to frontend implementation and deployment.",
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
