export const personalInfo = {
  name: "Isaac Kalambo",
  role: "Full Stack Developer",
  email: "isaac@example.com",
  bio: "Full Stack Developer passionate about creating amazing web experiences with modern technologies and clean, efficient code.",
  about: "I'm a passionate full-stack developer with expertise in modern web technologies. I love building scalable applications and learning new technologies to solve complex problems.",
  initials: "IK",
  logo: "/images/logo.png",
  profileImage: "/images/1.JPG",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/isaackalambo",
    icon: "Github"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/isaackalambo",
    icon: "Linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/isaackalambo", 
    icon: "Twitter"
  }
];

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    github: "https://github.com/isaackalambo",
    demo: "https://example.com",
    image: "/images/3.jpg",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com/isaackalambo",
    demo: "https://example.com",
    image: "/images/3.jpg",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    github: "https://github.com/isaackalambo",
    demo: "https://example.com",
    image: "/images/3.jpg",
  },
];

export const skills = [
  { 
    category: "Frontend", 
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"]
  },
  { 
    category: "Backend", 
    items: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"]
  },
  { 
    category: "Database", 
    items: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"]
  },
  { 
    category: "Tools & Others", 
    items: ["Git", "Docker", "AWS", "Vercel", "Figma"]
  },
];
