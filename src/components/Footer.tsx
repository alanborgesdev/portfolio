import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/alanborgesdev', label: 'LinkedIn' },
    { icon: <Github size={20} />, url: 'https://github.com/alanborgesdev', label: 'GitHub' },
    { icon: <Mail size={20} />, url: 'mailto:alanborgesdev0@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Alan Borges. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
