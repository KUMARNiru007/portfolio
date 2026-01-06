import {ModeToggle} from "@/components/mode-toggle"

function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-background text-foreground border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        {/* Left: logo */}
        <div className="flex items-center gap-4">
          <div className="font-hanken-grotesk text-sm font-semibold tracking-tight">Kumar Nirupam</div>
          {/* Vertical divider */}
          <div className="h-7 w-px bg-border/20" />
        </div>

        {/* Right: nav links + theme toggle */}
        <nav className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm text-secondary font-hanken-grotesk">
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-primary hover:underline">Projects</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-primary hover:underline">Skills</a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-primary hover:underline">Experience</a></li>
            <li><a href="#socials" onClick={(e) => handleNavClick(e, 'socials')} className="hover:text-primary hover:underline">Socials</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-primary hover:underline">Contact</a></li>
            <li><a href="#resume" onClick={(e) => handleNavClick(e, 'resume')} className="hover:text-primary hover:underline">Resume</a></li>
          </ul>

          {/* Theme toggle */}
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Navbar