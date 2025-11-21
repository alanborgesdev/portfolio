import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import type { NavLink } from '@/types';

const NAV_LINKS: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const activeSection = useScrollSpy(['home', 'about', 'skills', 'projects', 'contact']);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'glass-card shadow-card border-b border-primary/20'
                    : 'bg-background/80 backdrop-blur-sm'
            }`}
        >
            <nav className='container mx-auto px-4 py-4'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <a
                        href='#home'
                        className='flex items-center gap-2 hover:opacity-80 transition-opacity group'
                        aria-label='Alan Borges - Home'
                    >
                        <Terminal className='w-8 h-8 text-primary group-hover:text-primary-glow transition-colors' />
                        <span className='font-mono font-bold text-lg hidden sm:inline'>
                            <span className='text-primary'>alan_borges</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-4'>
                        <ul className='flex items-center gap-8'>
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`text-sm font-medium font-mono transition-all hover:text-primary relative ${
                                            activeSection === link.href.substring(1)
                                                ? 'text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:shadow-glow'
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
                            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                            aria-expanded={isMobileMenuOpen}
                            className='hover:bg-primary/10'
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} className='text-primary' />
                            ) : (
                                <Menu size={24} className='text-primary' />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <ul className='md:hidden mt-4 space-y-4 pb-4 border-t border-primary/20 pt-4'>
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`block text-sm font-medium font-mono transition-colors hover:text-primary ${
                                        activeSection === link.href.substring(1)
                                            ? 'text-primary'
                                            : 'text-muted-foreground'
                                    }`}
                                    onClick={handleNavClick}
                                >
                                    {'>'} {link.name}
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
