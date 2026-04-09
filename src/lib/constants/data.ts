export const personalInfo = {
  name: "Isaac Alex Kalambo",
  role: "Software Developer & IT Specialist",
  email: "kalamboisaac405@gmail.com",
  bio: "Software developer specializing in web and mobile applications. Building scalable solutions with modern technologies while managing technical teams and driving project success.",
  about: "Software developer with hands-on experience in full-stack web development, mobile applications, and database management. Currently contributing to software development and HR operations at Infinity Technologies, where I build applications, debug systems, and lead recruitment and training initiatives.",
  location: "Lilongwe, Malawi",
  initials: "IK",
  logo: "/images/logo.png",
  profileImage: "/images/1.JPG",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/IsaacKalambo22",
    icon: "Github"
  },
  {
    name: "Infinity Technologies",
    url: "https://github.com/InfinityCodeMw",
    icon: "Github"
  },
  {
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/isaac-kalambo-973bba339/",
    icon: "Linkedin"
  },
  {
    name: "Twitter",
    url: "https://x.com/IsaacKalam44251", 
    icon: "Twitter"
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Education in Computer Sciences",
    institution: "University of Malawi",
    period: "2019 - 2025",
    description: "Comprehensive study of computer science fundamentals, software development, and educational technology. Gained expertise in programming, database systems, and web technologies."
  },
  {
    id: 2,
    degree: "Malawi School Certificate of Education (MSCE)",
    institution: "Matandani Secondary School",
    period: "Completed 2018",
    description: "Strong foundation in mathematics, sciences, and technology."
  }
];

export const experience = [
  {
    id: 1,
    title: "Software Developer & HR Specialist",
    company: "Infinity Technologies",
    period: "2023 - Present",
    location: "Lilongwe, Malawi",
    responsibilities: [
      "Built and deployed 3+ production web applications for Malawian clients including Wealth Bridge (financial platform) and TAMA Farmers Trust (agricultural platform)",
      "Developed secure financial systems with payment integration, user authentication, and real-time dashboards using Next.js, React, and Node.js",
      "Implemented healthcare management systems with patient records and appointment scheduling for Pacific Diagnostics",
      "Managed full development lifecycle from requirements gathering to deployment and maintenance",
      "Led HR operations including technical recruitment, team onboarding, and developer training programs",
      "Optimized application performance achieving 99.9% uptime and sub-2 second load times"
    ]
  },
  {
    id: 2,
    title: "Student Teacher - Computer Studies & Mathematics",
    company: "Lilongwe Girls Secondary School",
    period: "2023",
    location: "Lilongwe, Malawi",
    responsibilities: [
      "Taught Computer Studies and Mathematics to secondary school students",
      "Developed engaging lesson plans and educational materials",
      "Mentored students in programming fundamentals and problem-solving",
      "Integrated technology into classroom instruction to enhance learning outcomes"
    ]
  }
];

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export const projects = [
  {
    id: 1,
    title: "Wealth Bridge",
    description: "Malawi's premier online financial platform connecting investors and borrowers. Features secure loan applications, investment management, user authentication, and personalized dashboards with real-time financial insights.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", "Payment Integration"],
    github: "https://github.com/InfinityCodeMw",
    demo: "https://wealthbridgemw.com/",
    image: "/images/wealthbridge.png",
    featured: true,
    client: "Wealth Bridge Financial Services",
    category: "Financial Platform"
  },
  {
    id: 2,
    title: "TAMA Farmers Trust",
    description: "Agricultural trust management platform for Malawi farmers. Features tobacco sales representation, trust services, farmer registration, and agricultural resource management with regional office coordination.",
    technologies: ["React", "Node.js", "MySQL", "Express", "Tailwind CSS"],
    github: "https://github.com/InfinityCodeMw",
    demo: "https://www.tamalawi.com/",
    image: "/images/tama.png",
    featured: true,
    client: "TAMA Farmers Trust",
    category: "Agricultural Platform"
  },
  {
    id: 3,
    title: "Pacific Diagnostics",
    description: "Medical diagnostics platform providing healthcare services and laboratory management. Features patient records, appointment scheduling, test results management, and healthcare provider coordination.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "PostgreSQL", "Healthcare APIs"],
    github: "https://github.com/InfinityCodeMw",
    demo: "https://www.pacificdiagnosticsmw.com/",
    image: "/images/pacific.png",
    featured: true,
    client: "Pacific Diagnostics Malawi",
    category: "Healthcare Platform"
  },
  {
    id: 4,
    title: "PromptHub",
    description: "A collaborative platform for sharing and discovering AI prompts. Features include creating, editing, and searching prompts by tag or username, with user profile management and real-time updates.",
    technologies: ["Next.js", "JavaScript", "React", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/IsaacKalambo22/PromptHub",
    demo: "https://prompt-hub-gilt.vercel.app",
    image: "/images/promptopia.png",
    featured: false,
    category: "AI Tools"
  },
  {
    id: 5,
    title: "CarHub",
    description: "A comprehensive car showcase website displaying vehicles from around the world. Built with modern web technologies to provide an engaging browsing experience with detailed car information and specifications.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/IsaacKalambo22/CarHub",
    demo: "https://github.com/IsaacKalambo22/CarHub",
    image: "/images/cars.png",
    featured: false,
    category: "Automotive"
  },
  {
    id: 6,
    title: "Job Finder App",
    description: "A mobile application built with Flutter to help users discover and apply for job opportunities. Features job search, filtering, and application tracking capabilities.",
    technologies: ["Flutter", "Dart", "Firebase", "REST API"],
    github: "https://github.com/IsaacKalambo22/Job_finder_app",
    demo: "https://github.com/IsaacKalambo22/Job_finder_app",
    image: "/images/finder.jpg",
    featured: false,
    category: "Mobile App"
  }
];

export const skills = [
  { 
    category: "Frontend Development", 
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"]
  },
  { 
    category: "Mobile Development", 
    items: ["Flutter", "Dart", "React Native", "Mobile UI/UX"]
  },
  { 
    category: "Backend & Databases", 
    items: ["Node.js", "MySQL", "MongoDB", "REST APIs", "Firebase"]
  },
  { 
    category: "Tools & Technologies", 
    items: ["Git & GitHub", "VS Code", "Vercel", "Microsoft Office", "Power BI"]
  },
  { 
    category: "Professional Skills", 
    items: ["Software Debugging", "Testing & QA", "Project Management", "HR Management", "Team Leadership", "Technical Training"]
  }
];
