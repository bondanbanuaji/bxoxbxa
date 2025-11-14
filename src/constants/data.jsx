import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const personalInfo = {
  name: "Bondan Banuaji",
  role: "Software Engineer",
  bio: "A motivated student with a strong interest in technology and digital development.",
  email: "bondanbanuaji@gmail.com",      
  location: "Indonesia",
};

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment integration",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Task Management App",
    description: "Productivity application with drag-and-drop interface",
    tech: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with forecasting",
    tech: ["JavaScript", "API Integration", "CSS3"]
  },
  {
    title: "Portfolio Website",
    description: "Interactive portfolio with animations and responsive design",
    tech: ["React", "Framer Motion", "Tailwind CSS"]
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    tech: ["React", "Chart.js", "Express"]
  },
  {
    title: "Budget Tracker",
    description: "Personal finance management application",
    tech: ["JavaScript", "Local Storage", "Responsive Design"]
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/bondanbanuaji",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/bondan-banuaji",
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/",
    color: "hover:text-sky-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/bdn_bnj?igsh=MXdkZmRiejkwYTNjeQ==",
    color: "hover:text-pink-500",
  },
];

export const experiences = [
  {
    role: "Independent Web Developer",
    company: "Self-Project",
    period: "2023 — Present",
    desc: "Developing modern web interfaces with focus on animations, responsiveness, and clean UI/UX. Building anime-themed web apps, portfolios, and interactive components using HTML, CSS, JavaScript, React, and Tailwind CSS.",
    color: "violet",
  },
  {
    role: "Fullstack Student Developer",
    company: "Campus & Personal Projects",
    period: "2024 — Present",
    desc: "Creating fullstack applications including a real-time network monitoring system using Laravel 12, Python, MySQL, and Tailwind CSS. Exploring API integration, system architecture, and performance optimization.",
    color: "cyan",
  },
  {
    role: "Frontend Experimenter",
    company: "Personal Learning",
    period: "2021 — 2023",
    desc: "Experimenting with UI animations, sliders, responsive layouts, and component logic. Practicing frontend fundamentals through projects like tribute pages, CSS animations, and JavaScript-based UI effects.",
    color: "pink",
  },
];

export const tools = [
  "Figma – UI/UX Design",
  "Adobe After Effects – Motion Design",
  "VS Code – Code Editor",
  "Git & GitHub – Version Control",
  "Postman – API Testing",
  "Docker – Containerization",
  "Notion – Productivity",
];

export const goals = [
  "Launch my own web agency",
  "Start a web development Youtube channel",
  "Gain more customers",
  "Learn new frameworks and libraries",
];

export const achievements = [
  {
    title: "Projects Completed",
    value: "50+",
    desc: "Developed 50+ interactive motion and web projects for enterprise clients.",
    color: "yellow",
  },
  {
    title: "Open Source Contributions",
    value: "1.2k+",
    desc: "Contributed to popular open-source projects, including motion and UI libraries.",
    color: "cyan",
  },
  {
    title: "Speaker Engagements",
    value: "10+",
    desc: "Presented at international conferences like Adobe MAX and UXDX.",
    color: "pink",
  },
  {
    title: "Awards & Recognition",
    value: "5",
    desc: "Won multiple awards for innovative motion design and interactive experiences.",
    color: "violet",
  },
];

export const skills = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SASS/SCSS",
      "Framer Motion",
      "Redux",
      "GraphQL"
    ]
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Flask",
      "Django",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "MySQL"
    ]
  },
  {
    category: "Design & Tools",
    skills: [
      "Figma",
      "Adobe Creative Suite",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "VS Code",
      "Git/GitHub",
      "Docker",
      "Figma",
      "Postman",
      "Netlify",
      "Vercel"
    ]
  },
  {
    category: "Other",
    skills: [
      "Linux",
      "Bash/Shell",
      "Agile/Scrum",
      "Jest",
      "Cypress",
      "Webpack",
      "Vite",
      "CI/CD",
      "Jira",
      "Notion"
    ]
  }
];

export const certificates = [
  "Microsoft Certified: Power Platform App Maker",
  "Adobe Certified Expert: After Effects",
  "Frontend Developer Nanodegree - Udacity",
  "Docker Essentials - Coursera",
];

export const animatedBlobs = [
  {
    className:
      "top-[-10%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 opacity-40 blur-[180px]",
    animate: {
      x: [0, 150, -100, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 90, 180, 360],
    },
    duration: 20,
  },
  {
    className:
      "bottom-[-15%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-600 opacity-50 blur-[160px]",
    animate: {
      x: [0, -140, 100, 0],
      y: [0, 90, -70, 0],
      scale: [1, 0.85, 1.15, 1],
      rotate: [360, 270, 180, 0],
    },
    duration: 25,
  },
  {
    className:
      "top-[10%] left-[80%] -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-35 blur-[200px]",
    animate: {
      x: [0, 80, -120, 0],
      y: [0, -60, 80, 0],
      scale: [1, 1.1, 0.95, 1],
      rotate: [0, -90, -180, -360],
    },
    duration: 22,
  },
  {
    className:
      "top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500 via-teal-500 to-cyan-600 opacity-30 blur-[190px]",
    animate: {
      x: [0, -70, 110, 0],
      y: [0, 100, -50, 0],
      scale: [1, 0.9, 1.2, 1],
      rotate: [0, 120, 240, 360],
    },
    duration: 18,
  },
  {
    className:
      "bottom-[30%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500 via-yellow-500 to-lime-500 opacity-25 blur-[210px]",
    animate: {
      x: [0, 130, -90, 0],
      y: [0, -70, 90, 0],
      scale: [1, 1.15, 0.88, 1],
      rotate: [0, -120, -240, -360],
    },
    duration: 28,
  },
];
