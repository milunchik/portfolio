import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaTelegram } from "react-icons/fa6";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";

import { project1 } from "./images";
import { project2 } from "./images";
import { project3 } from "./images";
import { project4 } from "./images";
import { project5 } from "./images";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];

export const projects = [
  {
    id: 1,
    title: "ENGL",
    image: project2,
    category: "Web",
    data: {
      description: `This platform is designed to help you master new vocabulary with ease. Offering translations in 256 languages, pronunciation guides, and engaging memory games.`,
      demoLink: "https://engl-mk1h.onrender.com",
    },
    stack: [
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 2,
    title: "VEIL",
    image: project4,
    category: "Web",
    data: {
      description: `This platform hepls you to find a tutor for increase level of your knowledge.`,
      demoLink: "https://veil-q3heeeujs-hremilys-projects.vercel.app",
    },
    stack: [
      {
        name: "Nest",
        icon: <SiNestjs />,
        iconColor: "red",
      },
      {
        name: "TS",
        icon: <TbBrandTypescript />,
        iconColor: "blue",
      },
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Postgre",
        icon: <SiPostgresql />,
        iconColor: "darkblue",
      },
    ],
  },
  {
    id: 3,
    title: "ClinVix",
    image: project5,
    category: "Web",
    data: {
      description: `Hospital's site with the opportunity of choosing and booking a doctor-appointment.`,

      demoLink: "",
    },
    stack: [
      {
        name: "TS",
        icon: <TbBrandTypescript />,
        iconColor: "blue",
      },
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "Posrgre",
        icon: <SiPostgresql />,
        iconColor: "darkblue",
      },
    ],
  },

  {
    id: 5,
    title: "AbiMil",
    image: project1,
    category: "Web",
    data: {
      description:
        "Experience a vibrant social network where connections come alive.",
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },

  {
    id: 4,
    title: "Marketplace Network",
    image: project3,
    category: "App",
    data: {
      description:
        "Marketplace, where you can seamlessly buy and sell items that you need. ",
      demoLink: "https://shop-s5cj.onrender.com",
    },
    stack: [
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
];

export const experience = [
  {
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "TypeScript",
        level: "Experienced",
      },
    ],
  },
  {
    data: [
      {
        skill: "Node JS",
        level: "Experienced",
      },
      {
        skill: "MongoDB",
        level: "Experienced",
      },
      {
        skill: "Express JS",
        level: "Experienced",
      },
      {
        skill: "Nest JS",
        level: "Experienced",
      },
      {
        skill: "MySQL",
        level: "Intermediate",
      },
      {
        skill: "PostgreSQL",
        level: "Experienced",
      },
      {
        skill: "Graphql",
        level: "Intermediate",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Telegram",
    icon: <FaTelegram />,
    link: "https://t.me/millunchik",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/milunchik",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/emilia-grab-525304321/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ab_emily_/",
  },
];
