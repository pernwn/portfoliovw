import {
  faCss3,
  faElementor,
  faFigma,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import nextjs from "@/app/lib/assets/png-icons/nextjs-logo.png"
import photoshop from "@/app/lib/assets/svg/photoshop.svg"


const skillList = [
  {
    id: 1,
    title: "Teknisk",
    description:
      "Med HTML, CSS, JS (ES6+) og frameworks som React og Next.js kan jeg bygge brugervenlige og responsive websider.",
  },
  {
    id: 2,
    title: "Brugerfokuseret",
    description: "Erfaring",
  },
  {
    id: 3,
    title: "Kreativ",
    description: "Erfaring",
  },
];

const skillIcons = [
  {
    title: "HTML",
    icon: faHtml5,
  },
  {
    title: "CSS",
    icon: faCss3,
  },
  {
    title: "JavaScript",
    icon: faJs,
  },
  {
    title: "React",
    icon: faReact,
  },
  {
    title: "Next.js",
    icon: '/app/lib/assets/png-icons/nextjs-logo.png',
  },
  {
    title: "TailwindCSS",
    icon: "/@/app/lib/assets/png-icons/tailwindcss-logo.png",
  },
  {
    title: "Elementor",
    icon: faElementor,
  },
  {
    title: "Figma",
    icon: faFigma,
  },
  {
    title: "Procreate",
    icon: "/@/app/lib/assets/png-icons/procreate-logo.png",
  },
  {
    title: "Adobe Photoshop",
    icon: { photoshop },
  },
];

export { skillList, skillIcons };
