import { motion } from 'framer-motion';
import Avatar from '../assets/perfil.jpg'; // Reutilizando o avatar

const AboutSection = () => {
    const technologies = [
    'React',
    'Node.js',
    'Express',
    'TypeScript',
    'Prisma',
    'PostgreSQL',
    'TailwindCSS',
    'Docker',
    'Git',
    'GitHub'
];

    return (
        <section id='sobre' className='bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-20'>
            <div className='container mx-auto px-6'>
                <motion.h2
                    className='text-3xl md:text-4xl font-bold text-center mb-12'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Sobre Mim
                </motion.h2>

                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* Imagem */}
                    <motion.div
                        className='w-48 h-48 md:w-64 md:h-64 flex-shrink-0'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={Avatar}
                            alt='Seu Nome'
                            className='rounded-full w-full h-full object-cover shadow-lg border-4 border-gray-200 dark:border-gray-700'
                        />
                    </motion.div>

                    {/* Texto e Tecnologias */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className='text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
                            Desenvolvedor Full Stack focado em construir soluções web completas, do backend ao
                            frontend. Especializado em criar APIs RESTful com Node.js e Prisma, e
                            desenvolver interfaces interativas com React, TypeScript e Tailwind CSS.
                            Buscando minha primeira oportunidade para integrar uma equipe,
                            contribuir com projetos desafiadores e acelerar meu crescimento
                            profissional.
                        </p>
                        <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-4'>
                            Minhas principais tecnologias:
                        </h3>
                        <div className='flex flex-wrap gap-3'>
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className='bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium px-4 py-2 rounded-lg shadow-sm'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
