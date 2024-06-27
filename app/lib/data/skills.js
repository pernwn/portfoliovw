import { faCss3, faElementor, faFigma, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const skillList = [
  {
    title: "Teknisk",
    description:
      "Med HTML, CSS, JS (ES6+) og frameworks som React og Next.js kan jeg bygge brugervenlige og responsive websider.",
  },
  {
    id: 2,
    title: "Brugerfokuseret",
    description: "erfaring",
  },
  {
    id: 3,
    title: "Kreativ",
    description: "erfaring",
  },
];

export const skillIcons = [
  {
    title: "HTML",
    icon: <FontAwesomeIcon icon={faHtml5} />,
  },
  {
    title: "CSS",
    icon: <FontAwesomeIcon icon={faCss3} />,
  },
  {
    title: "Javascript",
    icon: <FontAwesomeIcon icon={faJs} />,
  },
  {
    title: "React",
    icon: <FontAwesomeIcon icon={faReact} />,
  },
  {
    title: "Next.js",
    icon: "url('/app/lib/assets/png-icons/nextjs-logo.png')",
  },
  {
    title: "TailwindCSS",
    icon: "url('/app/lib/assets/png-icons/tailwindcss-logo.png')",
  },

  {
    title: "Elementor",
    icon: <FontAwesomeIcon icon={faElementor} />,
  },
  {
    title: "Figma",
    icon: <FontAwesomeIcon icon={faFigma} />,
  },
  {
    title: "Procreate",
    icon: "url('/app/lib/assets/png-icons/procreate-logo.png')",
  },
  {
    title: "Adobe Photoshop",
    icon: "url('/app/lib/assets/png-icons/photoshop-logo.png')",
  },
];

