import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png'; // Verifique o caminho

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { to: 'home', label: 'Home' },
        { to: 'projetos', label: 'Projetos' },
        { to: 'sobre', label: 'Sobre' },
        { to: 'contato', label: 'Contato' },
    ];

    return (
        <header className='bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 w-full z-50 shadow-md'>
            <nav className='container mx-auto px-6 py-4 flex justify-between items-center'>
                {/* Logo */}
                <Link to='home' smooth={true} duration={500} className='cursor-pointer'>
                    <img
                        src={logo}
                        alt='Logotipo de Alan Borges'
                        className='h-12 w-12 hover:opacity-80 transition-opacity'
                    />
                </Link>

                {/* Links de Navegação (Desktop) */}
                <ul className='hidden md:flex space-x-8'>
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className='text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer'
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Botão do Menu Hambúrguer (Mobile) */}
                <div className='md:hidden'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-white text-2xl'
                        tabIndex={0} // Acessibilidade
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </nav>

            {/* Menu Mobile */}
            {isOpen && (
                <div className='md:hidden bg-gray-900'>
                    <ul className='flex flex-col items-center py-4'>
                        {navLinks.map((link) => (
                            <li key={link.to} className='w-full text-center'>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                                    className='block text-gray-300 hover:bg-gray-700 py-3 transition-colors duration-300 cursor-pointer'
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
