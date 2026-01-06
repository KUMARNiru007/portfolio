import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

function Footer() {

  const year = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      label: 'GitHub'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      label: 'Twitter'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:your-email@example.com',
      label: 'Email'
    },
  ];

  return (
    <footer className="w-full bg-background border-t border-border py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left: Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>© {year} <span className="font-semibold text-foreground">Kumar Nirupam</span>. All rights reserved.</p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 hover:bg-accent rounded-lg"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
