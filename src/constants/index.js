import { b, s } from "framer-motion/client";
import {
  frontend,
  backend,
  fullstack,
  web,
  javascript,
  typescript,
  html,
  css,
  angular,
  reactjs,
  tailwind,
  csharp,
  dotnet,
  nodejs,
  mongodb,
  git,
  smart_interviews,
  logo,
  planon,
  proj_iot,
  proj_skyboard,
  proj_bag,
  proj_movies,
  proj_scraptel,
  proj_no_screenshot,
  threejs,
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
    title: "Angular/React Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: fullstack,
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "dotnet",
    icon: dotnet,
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
  }
];

const experiences = [
  {
    title: " Freelance Fullstack Web developer",
    company_name: "UAE & Qatar Clients (Clients under NDA)",
    icon: logo,
    iconBg: "#383E56",
    date: "Oct 2025 - Present",
    points: [
      "Delivered end to end web solutions for clients across Dubai and Qatar, specializing in IOT solutions and dashboards.",
      "Built custom frontend interfaces and backend APIs based on real business requirements.",
      "Worked across Angular, Node.js, Nest.js and modern databases to deliver scalable applications.",
    ],
  },
  {
    title: "Associate Software Developer (Fullstack)",
    company_name: "Planon Software Services Pvt. Ltd.",
    icon: planon,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Sep 2025",
    points: [
      "Built and maintained scalable Angular features using Angular material & ag grid.",
      "Developed reusable components and optimised complex data driven UI workflows.",
      "Contributed to .NET Core APIs (controllers, DTOs, entity models) integrated with Angular.",
      "Refactored legacy modules, reducing technical dept and improving performance.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Planon Software Services Pvt. Ltd.",
    icon: planon,
    iconBg: "#383E56",
    date: "Aug 2023 - Jan 2024",
    points: [
      "Developed reusable Angular components, improving modularity and maintainability.",
      "Worked on lazy loading and build optimizations for performance improvements.",
      "Built prototype .NET APIs and gained hands-on backend exposure.",
      "Actively participated in code reviews and agile sprint cycles.",
    ],
  },
  {
    title: "Student Mentor (DSA)",
    company_name: "Smart Interviews",
    icon: smart_interviews,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Mar 2023",
    points: [
      "Mentored 300+ students in data structures, algorithms, and problem-solving.",
      "Built an interactive Algorithm Visualizer to explain sorting algorithms.",
      "Provided personalized feedback to improve debugging and coding practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He consistently turned complex problems into clean, practical solutions and always took full ownership. His problem-solving mindset had a strong impact on the team.",
    name: "Ravi Sambhoju",
    designation: "Development Director",
    company: "Planon Software Services",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFI7HvELdsWwA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688964509463?e=2147483647&v=beta&t=tvWeX4vECIPASFsNTHmESzx4ylyqCiu93rSAIiwLC8s",
  },
  {
    testimonial:
      "Whenever we faced frontend challenges, Altaf was the person we relied on. His Angular expertise helped resolve issues quickly and improved UI stability a lot.",
    name: "Stefan Heyer",
    designation: "Backend Team Lead",
    company: "Control IT GmbH",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQE24bxuswh72w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1622526256549?e=1766620800&v=beta&t=peUfk-p9vWLFxOq-3j41oKJI8u3NUvNY4Nrk-kUXqTY",
  },
  {
    testimonial:
      "He worked comfortably across multiple tech stacks, from frontend to backend and databases. Highly adaptable, reliable, and easy to collaborate with.",
    name: "Rahul Ranganathan",
    designation: "Backend Developer",
    company: "Planon Software Services",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEdeeOXN41Adw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1621790000850?e=2147483647&v=beta&t=WG8vQSV2OlN7V0cZcg9wlaefFFCNOLmnm-amI3FN34M",
  },
];

const projects = [
  {
    name: "IoT Management App",
    description:
      "Web-based platform for managing IoT products, enabling users to add, remove, devices with an interactive 3D interface and smooth scroll-based animations.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: proj_iot,
    is_code_public: false,
  },
  {
    name: "Skyboard Dashboard",
    description:
      "Live dashboard application that aggregates real-time data including weather, traffic, prayer times, gold rates, stocks, crypto markets, and trending GitHub activity.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: proj_skyboard,
    is_code_public: true,
    source_code_link: "https://github.com/thealtafshaik/skyboard",
  },
  {
    name: "Bagify E-commerce",
    description:
      "Admin-based web application for managing bags, allowing creation, updates, and deletion of products through a structured dashboard.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: proj_bag,
    is_code_public: true,
    source_code_link: "https://github.com/thealtafshaik/bagify",
  },
  {
    name: "Trending Movies App",
    description:
      "Web application that fetches and displays today’s top 20 trending movies from TMDB, featuring an optimized search experience and efficient API consumption.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: proj_movies,
    is_code_public: true,
    source_code_link: "https://github.com/thealtafshaik/moviesWebsite",
  },
  {
    name: "Data Extractor Tool",
    description:
      "Web-based tool that lets users input, view, edit, and manage personal data, providing an efficient solution for collecting and organizing user information.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "asp.net",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: proj_no_screenshot,
    is_code_public: true,
    source_code_link: "https://github.com/thealtafshaik/DataExtractorTool",
  },
  {
    name: "Scrap Price Estimator",
    description:
      "Multi-page website that allows users to get estimated scrap prices for selected products, providing a quick and convenient solution for checking scrap value.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: proj_scraptel,
    is_code_public: true,
    source_code_link: "https://github.com/thealtafshaik/scraptel",
  },
];

export { services, technologies, experiences, testimonials, projects };