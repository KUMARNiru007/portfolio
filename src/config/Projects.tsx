import {type Project } from "../types/projects.ts";


import {
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVercel,
  SiJavascript,
  SiPostgresql,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiResend,
  SiNextdotjs,
} from "react-icons/si";


export const projects: Project[] = [
  {
    title: "ChaiTeam",
    description:
      "ChaiTeam is a collaborative web project built for Chaicode cohort to streamline team management,and knowledge sharing.",
    image: "/projects/chaiteam.png",
    video: "https://ik.imagekit.io/1gbvzfyglw/chaiteam.mp4",
    link: "https://chaiteam.in",
   technologies: [
      {
        name: "Vite",
        icon: <SiVite/>,
        color: "text-purple-500",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript/>,
        color: "text-yellow-600",
      },
      {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-400",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        color: "text-neutral-900 dark:text-neutral-100",
      },
      {
        name: "Postgresql",
        icon: <SiPostgresql />,
        color: "text-blue-500",
      },
      {
        name: "Node JS",
        icon: <SiNodedotjs />,
        color: "text-green-400",
      },
      {
        name: "Express JS",
        icon: <SiExpress />,
        color: "text-neutral-900 dark:text-neutral-100",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-sky-400",
      },
    ],
    github: "https://github.com/KUMARNiru007/ChaiTeam",
    live: "https://chaiteam.in",
    details: true,
    projectDetailsPageSlug: "/projects/chaiteam",
    isWorking: true,
  },
  {
    title: "LeetSheet",
    description:
      "LeetSheet is a comprehensive platform designed to help you practice coding problems, track progress, and prepare for technical interviews with structured problem sheets.",
    image: "/projects/leetsheet.png",
    video: "https://ik.imagekit.io/3nhjdvgkk/LeetSheet.mp4",
    link: "https://leetsheet.in",
    technologies: [
      {
        name: "Vite",
        icon: <SiVite/>,
        color: "text-purple-500",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript/>,
        color: "text-yellow-600",
      },
      {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-400",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        color: "text-neutral-900 dark:text-neutral-100",
      },
      {
        name: "Postgresql",
        icon: <SiPostgresql />,
        color: "text-blue-500",
      },
      {
        name: "Node JS",
        icon: <SiNodedotjs />,
        color: "text-green-400",
      },
      {
        name: "Express JS",
        icon: <SiExpress />,
        color: "text-neutral-900 dark:text-neutral-100",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-sky-400",
      },
    ],
    github: "https://github.com/KUMARNiru007/leetsheet",
    live: "https://leetsheet.in",
    details: true,
    projectDetailsPageSlug: "/projects/leetsheet",
    isWorking: false,
  },
  {
    title: "SwingUI",
    description:
      "A modern Tailwind CSS component library that helps you design sleek, responsive interfaces with ease and style to spare.",
    image: "/projects/swingui.png",
    video: "https://ik.imagekit.io/3nhjdvgkk/swingui.mp4",
    link: "https://swingui.com",
   technologies: [
      {
        name: "Vite",
        icon: <SiVite/>,
        color: "text-purple-500",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript/>,
        color: "text-yellow-600",
      },
      {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-400",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        color: "text-neutral-900 dark:text-neutral-100",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-sky-400",
      },
    ],
    github: "https://github.com/KUMARNiru007/SwingUI",
    live: "https://swingui.com",
    details: true,
    projectDetailsPageSlug: "/projects/swingui",
    isWorking: false,
  },
  {
  title: "Tambo Email",
  description:
    "A modern full-stack email platform built with Next.js that enables users to send transactional emails using Resend and manage email data securely with Supabase. Designed with a clean and responsive UI using Tailwind CSS.",
  image: "/projects/tamboemail.png", // add screenshot
  video: "",
  link: "https://github.com/KUMARNiru007/tambo-email",
  technologies: [
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "text-neutral-900 dark:text-neutral-100",
    },
    {
        name: "Vercel",
        icon: <SiVercel />,
        color: "text-neutral-900 dark:text-neutral-100",
      },
    {
        name: "JavaScript",
        icon: <SiJavascript/>,
        color: "text-yellow-600",
      },
    {
      name: "Resend",
      icon: <SiResend />, // make sure you imported this icon
      color: "text-black dark:text-white",
    },
    {
      name: "Supabase",
      icon: <SiSupabase />,
      color: "text-green-500",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-sky-400",
    },
  ],
  github: "https://github.com/KUMARNiru007/tambo-email",
  live: "", 
  details: true,
  projectDetailsPageSlug: "/projects/tamboemail",
  isWorking: true,
},

  {
    title: "CloudBox",
    description:
      "A Cloud Storage Web Application A secure, cloud storage solution that allows you to manage your files from anywhere",
    image: "/projects/cloudbox.png",
    video: "",
    link: "https://cloud-box-storage-one.vercel.app/",
    technologies: [
      {
        name: "Vite",
        icon: <SiVite/>,
        color: "text-purple-500",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript/>,
        color: "text-yellow-600",
      },
      {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-400",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        color: "text-neutral-900 dark:text-neutral-100",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-sky-400",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "text-green-500",
      },
      {
        name: "Node JS",
        icon: <SiNodedotjs />,
        color: "text-green-400",
      },
      {
        name: "Express JS",
        icon: <SiExpress />,
        color: "text-neutral-900 dark:text-neutral-100",
      },
    ],
    github: "https://github.com/KUMARNiru007/CloudBox",
    live: "https://cloud-box-storage-one.vercel.app/",
    details: true,
    projectDetailsPageSlug: "/projects/cloudbox",
    isWorking: true,
  },
];
