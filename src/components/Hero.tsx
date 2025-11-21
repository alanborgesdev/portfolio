import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Terminal } from 'lucide-react';
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
          {/* Left: Terminal-style Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center md:text-left'
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                ~/portfolio/home
              </span>
            </div>

            {/* Main Heading */}
            <h1 className='font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>
              <span className="text-muted-foreground">$</span> id
              <br />
              <span className="text-primary">Alan Borges</span>
              <span className="typing-cursor"></span>
            </h1>

            {/* Terminal Output Style */}
            <div className="font-mono text-base sm:text-lg mb-6 md:mb-8 text-left max-w-lg mx-auto md:mx-0">
              <p className="text-muted-foreground mb-2">
                <span className="text-accent">{'>'}</span> role: <span className="text-primary font-semibold">Full Stack Developer</span>
              </p>
              <p className="text-muted-foreground mb-2">
                <span className="text-accent">{'>'}</span> specialties: [<span className="text-primary">"Clean Code"</span>, <span className="text-primary">"TDD"</span>, <span className="text-primary">"Automation"</span>]
              </p>
              <p className="text-muted-foreground">
                <span className="text-accent">{'>'}</span> stack: <span className="text-primary">React</span> | <span className="text-primary">TypeScript</span> | <span className="text-primary">Node.js</span> | <span className="text-primary">PostgreSQL</span>
              </p>
            </div>

            {/* CTAs */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start'>
              <Button
                size='lg'
                className='gradient-primary hover:shadow-glow-strong transition-all duration-300 font-mono w-full sm:w-auto text-primary-foreground'
                onClick={scrollToProjects}
              >
                Ver Projetos
                <ArrowRight className='ml-2' size={20} />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-mono w-full sm:w-auto transition-all'
                asChild
              >
                <a href='/cv-alan-borges.pdf' download>
                  <Download className='mr-2' size={20} />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right: Profile Photo with Terminal Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex justify-center md:justify-end order-first md:order-last mt-8 md:mt-0'
          >
            <div className='relative'>
              {/* Glow Background */}
              <div className='absolute inset-0 gradient-primary rounded-full blur-3xl opacity-30 animate-pulse'></div>

              {/* Terminal Border Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>

              <OptimizedImage
                src={profilePhoto}
                alt='Alan Borges - Desenvolvedor Full Stack especializado em Clean Code e TDD'
                className='relative rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-primary/40 shadow-glow'
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
