
import Container from '../components/Container';

import {  Mail, Paperclip } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';


export default function CTA({

  socialLinks = {
    twitter: "https://x.com/KumarNirupam1",
    github: "https://github.com/KUMARNiru007",
    linkedin: "https://www.linkedin.com/in/kumarnirupam/",
    resume:
      "https://drive.google.com/file/d/1D9OdBbT4HA5DSvkw0bVl3WMm-huVaTNH/view?usp=sharing",
    mail: "mailto:kumarnirupam@gmail.com",
  },
}) {
  const linkBaseClass =
    "flex items-center gap-2 px-3 py-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition rounded-full"

  const linkStyle: React.CSSProperties = {
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
  }

  const iconClass =
    "w-5 h-5 text-black/75 dark:text-white/80 shrink-0"
  return (
    <>
      <Container id="socials" className="mt-20 rounded-md border border-dashed border-black/20 py-8 dark:border-white/10">
        <div className="mt-6 w-full flex-col px-6 pb-8 sm:flex sm:items-center sm:justify-between sm:px-12">
          <p className="mb-4 text-center text-base opacity-50 sm:mb-3 md:text-xl">
            Hey, you scrolled this far, Find me on these platforms

          </p>

          <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-end">
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.github && (
                <a
                  className={linkBaseClass}
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  <FaGithub className={iconClass} />
                  <span className="text-sm">GitHub</span>
                </a>
              )}

              {socialLinks.twitter && (
                <a
                  className={linkBaseClass}
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  <FaTwitter className={iconClass} />
                  <span className="text-sm">Twitter</span>
                </a>
              )}

              {socialLinks.linkedin && (
                <a
                  className={linkBaseClass}
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  <FaLinkedin className={iconClass} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              )}

              {socialLinks.mail && (
                <a
                  className={linkBaseClass}
                  href={socialLinks.mail}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  <Mail className={iconClass} />
                  <span className="text-sm">Mail</span>
                </a>
              )}

              {socialLinks.resume && (
                <a
                  className={linkBaseClass}
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  <Paperclip className={iconClass} />
                  <span className="text-sm">Resume</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>

    </>
  );
}
