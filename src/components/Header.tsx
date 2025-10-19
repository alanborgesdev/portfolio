import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import logo from '@/assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'glass-card shadow-card' : 'bg-transparent'
            }`}
        >
            <nav className='container mx-auto px-4 py-4'>
                <div className='flex items-center justify-between'>
                    <a
                        href='#home'
                        className='flex items-center hover:opacity-80 transition-opacity'
                    >
                        <img src={logo} alt='Logotipo de Alan Borges' className='h-12 w-12' />
                    </a>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-4'>
                        <ul className='flex items-center gap-8'>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors hover:text-primary relative ${
                                            activeSection === link.href.substring(1)
                                                ? 'text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary'
                                                : 'text-muted-foreground'
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden flex items-center gap-2'>
                        <ThemeToggle />
                        <Button
                            variant='ghost'
                            size='icon'
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label='Toggle menu'
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <ul className='md:hidden mt-4 space-y-4 pb-4'>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`block text-sm font-medium transition-colors hover:text-primary ${
                                        activeSection === link.href.substring(1)
                                            ? 'text-primary'
                                            : 'text-muted-foreground'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
