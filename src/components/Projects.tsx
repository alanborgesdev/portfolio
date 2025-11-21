import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import pokedexImg from '@/assets/project-pokedex.gif';
import newsletterImg from '@/assets/project-newsletter.gif';
import movieflixImg from '@/assets/project-movieflix.png';
import botflixImg from '@/assets/project-botflix.gif';
import landingImg from '@/assets/project-landing.png';

const Projects = () => {
  const projects = [
    {
      title: 'Pokédex',
      description: 'Uma Pokédex interativa para consumir a PokeAPI, focada em gerenciamento de estado complexo e performance. Implementei cache de requisições para evitar chamadas duplicadas e troca de temas (light/dark).',
      tags: ['React', 'JavaScript', 'Styled-Components', 'API REST', 'Jest'],
      demo: 'https://pokedex-ecru-seven.vercel.app',
      repo: 'https://github.com/alanborgesdev/pokedex',
      image: pokedexImg,
    },
    {
      title: 'Formulário Newsletter',
      description: 'Formulário de Newsletter com validação de campos em tempo real (client-side). Demonstra manuseio de estados de formulário, feedback de erro e lógica de submissão.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'UX Design'],
      demo: 'https://formulario-newsletter-phi.vercel.app',
      repo: 'https://github.com/alanborgesdev/formulario-newsletter',
      image: newsletterImg,
    },
    {
      title: 'API MovieFlix',
      description: 'API RESTful para gerenciamento de filmes, construída com Node.js, Express, Prisma e TypeScript. Inclui documentação com Swagger.',
      tags: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Prisma'],
      demo: 'none',
      repo: 'https://github.com/alanborgesdev/movieflix-api',
      image: movieflixImg,
    },
    {
      title: 'BotFlix',
      description: 'Seu assistente pessoal para encontrar o filme perfeito. Feito com HTML, CSS, JavaScript puro e n8n, consumindo a API do TMDB.',
      tags: ['HTML', 'CSS', 'JavaScript', 'TMDB API', 'n8n'],
      demo: 'https://alanborgesdev.github.io/botflix-n8n',
      repo: 'https://github.com/alanborgesdev/botflix-n8n',
      image: botflixImg,
    },
    {
      title: 'Pet Shop Dev | Landing Page',
      description: 'Landing page moderna e responsiva para um Pet Shop, desenvolvida com Next.js e Tailwind CSS. Demonstra uso de componentes reutilizáveis e animações.',
      tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'SSR'],
      demo: 'https://petdev-landing-nextjs.vercel.app',
      repo: 'https://github.com/alanborgesdev/petdev-landing-nextjs',
      image: landingImg,
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            <span className="text-accent">{'>'}</span> Meus Projetos
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card shadow-card rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300 group flex flex-col border-primary/20 hover:border-primary/40"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={`Preview do projeto ${project.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors font-mono">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-2 py-1 text-xs bg-primary/10 text-foreground border border-primary/30 font-mono"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t border-border/50">
                    {project.demo !== 'none' && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary font-mono"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary font-mono"
                      asChild
                    >
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
