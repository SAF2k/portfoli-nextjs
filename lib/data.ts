import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuCodesandbox, LuGraduationCap } from "react-icons/lu";
import { createElement } from "react";


import githubclone from "@/public/githubclone.png";
import ecomadmin from "@/public/ecomadmin.png";
import ecomsite from "@/public/ecomsite.png";
import codesandbox from "@/public/codesandboxclone.png";
import scrollanimation from "@/public/scrollanimation.png";
import carbook from "@/public/carbook.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated BCA",
    location: "Karnataka, IN",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: createElement(FaReact),
    date: "2021 - present",
  },
] as const;

//todo: this is a normal comment

export const projectsData = [
  {
    title: "GitHub landing Clone",
    description:
      "This is a clone of the GitHub landing page. It's built with Next.js and Tailwind. It's fully responsive and has a dark mode.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: githubclone,
  },
  {
    title: "CodeSandBox Clone",
    description:
      "This is a clone of the CodeSandBox landing page. It's built with Next.js and Tailwind. It's fully responsive and has a dark mode.",
    tags: ["React", "Next.js", "Framer Motion", "Tailwind"],
    imageUrl: codesandbox,
  },
  {
    title: "Car Rental Site",
    description:
      "This is a Car Rental Site. It's built with Next.js and Tailwind. It's fully responsive, It uses RapidAPI to fetch data.",
    tags: ["React", "Next.js", "RapidAPI", "Tailwind"],
    imageUrl: carbook,
  },
  {
    title: "Scroll Animation Site",
    description:
      "This is a clone of the CodeSandBox landing page. It's built with Next.js and Tailwind. It's fully responsive and has a dark mode.",
    tags: ["React", "Next.js", "Sass", "Framer Motion"],
    imageUrl: scrollanimation,
  },
  {
    title: "E-commerce Admin",
    description:
      "A private web app for managing multiple e-commerce site. It has a dashboard, product management, order management and user management.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: ecomadmin,
  },
  {
    title: "E-commerce Site",
    description:
      "A private e-commerce site. It has a product page, cart page, checkout page and order page. It's fully responsive and has a dark mode. It's built with Next.js, Tailwind and MySQL.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: ecomsite,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
