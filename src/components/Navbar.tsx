import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId)
    targetElement?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
        ${
          scrolled
            ? "bg-background/60 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background border-b border-border"
        }
      `}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="text-sm font-semibold">Kumar Nirupam</div>
          <div className="h-7 w-px bg-border/20" />
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm text-secondary">
            <li onClick={() => handleNavClick("projects")} className="cursor-pointer hover:text-primary hover:underline">Projects</li>
            <li onClick={() => handleNavClick("skills")} className="cursor-pointer hover:text-primary hover:underline">Skills</li>
            <li onClick={() => handleNavClick("experience")} className="cursor-pointer hover:text-primary hover:underline">Experience</li>
            <li onClick={() => handleNavClick("socials")} className="cursor-pointer hover:text-primary hover:underline">Socials</li>
            <li onClick={() => handleNavClick("blogs")} className="cursor-pointer hover:text-primary hover:underline">Blogs</li>

            <li>
              <a
                href="https://drive.google.com/file/d/19RyNZzTxqUg6VWMEAmXxaXozPSblTF9R/view"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline"
              >
                Resume
              </a>
            </li>
          </ul>

          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
