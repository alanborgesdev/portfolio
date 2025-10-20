import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = memo(() => {
    const scrollToProjects = useCallback(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <section
            id='home'
            className='min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6'
        >
            <div className='container mx-auto max-w-7xl'>
                <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-center md:text-left'
                    >
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>
                            Olá, eu sou <br />
                            Alan Borges 👋
                        </h1>
                        <p className='text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto md:mx-0'>
                            Desenvolvedor Full Stack especializado em criar soluções web modernas e
                            escaláveis com foco em Código Limpo, testes e automação.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start'>
                            <Button
                                size='lg'
                                className='gradient-primary hover:opacity-90 transition-opacity w-full sm:w-auto'
                                onClick={scrollToProjects}
                            >
                                Ver Projetos
                                <ArrowRight className='ml-2' size={20} />
                            </Button>
                            <Button
                                size='lg'
                                variant='outline'
                                className='border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto'
                                asChild
                            >
                                <a href='/cv-alan-borges.pdf' download>
                                    <Download className='mr-2' size={20} />
                                    Download CV
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right: Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex justify-center md:justify-end order-first md:order-last mt-8 md:mt-0'
                    >
                        <div className='relative'>
                            <div className='absolute inset-0 gradient-primary rounded-full blur-3xl opacity-20'></div>
                            <OptimizedImage
                                src={profilePhoto}
                                alt='Alan Borges - Desenvolvedor Full Stack'
                                className='relative rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-primary/30 shadow-glow'
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
