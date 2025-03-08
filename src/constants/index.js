import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  next,
  virleaf,
  hkit_01,
  smartPOS,
  threejs,
  js,
  react,
  frontend,
  ladentista,
  whitecat
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Javascript Developer",
    icon: js,
  },
  {
    title: "Reactjs Developer",
    icon: react,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "NextJs",
    icon: next,
  },
];

const experiences = [
  {
    title: "Junior Software Developer",
    company_name: "HK IT Limited",
    icon: hkit_01,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Virleaf",
    icon: virleaf,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Building and supporting web apps with React.js and related tools.",
      "Working with designers, PMs, and devs to deliver top-notch products.",
      "Creating responsive designs and ensuring cross-browser compatibility.",
      "Reviewing code and giving helpful feedback to fellow developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [ 
  {
    name: "Whitecat",
    description:
      "'whitecat.live' is a website for a Apron company. It features a sleek and modern design, showcasing the company's products and services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      }
    ],
    image: whitecat,
    url: "https://whitecat.live"
  },
  {
    name: "Ladenista",
    description:
      "'ladentista.net' is a portfolio website for a dental product company. It features a sleek and modern design, showcasing the company's products and services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      
    ],
    image: ladentista,
    url: "https://ladentista.net"
  },
  {
    name: "Smart POS",
    description:
      '"Smart POS"  is an all-in-one system for managing suppliers, inventory, sales, and accounts, tailored to optimize business operations',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
    ],
    image: smartPOS,
    url: "https://hksmartpos.com"
  },
];

export { services, technologies, experiences, testimonials, projects };