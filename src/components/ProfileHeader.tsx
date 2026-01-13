import React from "react";
import {
  FaLinkedin,
  FaXTwitter,
  FaGithub,
  FaPaperclip,
} from "react-icons/fa6";
import { Moon, Sun } from "lucide-react";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";
import { useTheme } from "../hooks/useTheme";

interface ProfileHeaderProps {
  name?: string;
  age?: string;
  title?: string;
  profileImage?: string;
  socialLinks?: {
    twitter?: string;
    resume?: string;
    github?: string;
    linkedin?: string;
  };
}

interface IconButtonProps {
  href?: string;
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  href,
  label,
  children,
  onClick,
}) => {
  const Wrapper = href ? "a" : "button";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Wrapper
          {...(href
            ? { href, target: "_blank", rel: "noopener noreferrer" }
            : { onClick })}
          aria-label={label}
          className="w-8 h-8 rounded-full flex items-center justify-center
                     bg-black/5 dark:bg-white/10
                     hover:bg-black/10 dark:hover:bg-white/20
                     transition text-lg"
        >
          {children}
        </Wrapper>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
};

/* -------------------- Component -------------------- */

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name = "Kumar Nirupam",
  age = "22",
  title = "engineer • developer • builder",
  profileImage = "/profilepic.webp",
  socialLinks = {
    twitter: "https://x.com/KumarNirupam1",
    github: "https://github.com/KUMARNiru007",
    linkedin: "https://www.linkedin.com/in/kumarnirupam/",
    resume:
      "https://drive.google.com/file/d/1D9OdBbT4HA5DSvkw0bVl3WMm-huVaTNH/view?usp=sharing",
  },
}) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  const socials = [
    { href: socialLinks.github, label: "GitHub", icon: <FaGithub /> },
    { href: socialLinks.twitter, label: "Twitter", icon: <FaXTwitter /> },
    { href: socialLinks.resume, label: "Resume", icon: <FaPaperclip /> },
    { href: socialLinks.linkedin, label: "LinkedIn", icon: <FaLinkedin /> },
  ];

  return (
    <div className="flex-col -mt-10">
      {/* Avatar */}
      <div className="flex items-center justify-between mb-4 sm:mx-8 mx-4">
        <div
          className="w-24 h-24 sm:w-30 sm:h-30  bg-cover bg-center rounded-2xl "
          role="img"
          aria-label={name}
          style={{ backgroundImage: `url("${profileImage}")` }}
        />
      </div>

      {/* Name + Actions */}
      <div className="sm:flex sm:justify-between sm:items-center sm:px-8 px-4">
        <div>
          <h1 className="italic text-2xl sm:text-4xl font-medium tracking-[0.01em]">
            {name}
          </h1>
          <p className="opacity-40 text-xs sm:text-sm">
            {age} • {title}
          </p>
        </div>

        {/* Icons */}
        <div className="flex gap-2 mt-3 sm:mt-0">
          {socials.map(
            ({ href, label, icon }) =>
              href && (
                <IconButton key={label} href={href} label={label}>
                  {icon}
                </IconButton>
              )
          )}

          <IconButton label="Toggle theme" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
