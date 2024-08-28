import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaTelegram } from "react-icons/fa6";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { project1 } from "./images";
import { project2 } from "./images";
import { project3 } from "./images";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
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
      description: `This platform is designed to help you master new vocabulary with ease. Offering translations in 256 languages, pronunciation guides, and engaging memory games, it enhances word retention and makes learning fun and effective.`,
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
    title: "AbiMil",
    image: project1,
    category: "Web",
    data: {
      description:
        "Experience a vibrant social network where connections come alive. This platform allows users to post text updates and photos, sharing moments with a community focused on engagement and interaction.",
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
    id: 3,
    title: "Marketplace Network",
    image: project3,
    category: "App",
    data: {
      description:
        "Welcome to a bustling marketplace where you can seamlessly buy and sell items tailored to your needs. Our platform transforms the traditional shopping experience, offering a dynamic environment where you can become both a seller and a buyer. ",
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
        level: "Intermediate",
      },
      {
        skill: "MySQL",
        level: "Intermediate",
      },
      {
        skill: "PostgreSQL",
        level: "Intermediate",
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
    link: "",
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
