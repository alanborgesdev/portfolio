import type { Project } from '@/types';
import pokedexImg from '@/assets/project-pokedex.gif';
import newsletterImg from '@/assets/project-newsletter.gif';
import movieflixImg from '@/assets/project-movieflix.png';
import botflixImg from '@/assets/project-botflix.gif';
import landingImg from '@/assets/project-landing.png';

export const PROJECTS: readonly Project[] = [
  {
    title: 'Pokédex',
    description:
      'Uma Pokédex interativa para consumir a PokeAPI, focada em gerenciamento de estado complexo e performance. Implementei cache de requisições para evitar chamadas duplicadas e troca de temas (light/dark), demonstrando manipulação de estado global na aplicação.',
    tags: ['React', 'JavaScript', 'Styled-Components', 'API REST', 'Jest'],
    demo: 'https://pokedex-ecru-seven.vercel.app',
    repo: 'https://github.com/alanborgesdev/pokedex',
    image: pokedexImg,
  },
  {
    title: 'Formulário Newsletter',
    description:
      'Formulário de Newsletter com validação de campos em tempo real (client-side). O projeto demonstra o manuseio de estados de formulário, feedback de erro para o usuário e a lógica de submissão, prevenindo o envio de dados inválidos.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'UX Design'],
    demo: 'https://formulario-newsletter-phi.vercel.app',
    repo: 'https://github.com/alanborgesdev/formulario-newsletter',
    image: newsletterImg,
  },
  {
    title: 'API MovieFlix',
    description:
      'API RESTful para gerenciamento de filmes, construída com Node.js, Express, Prisma e TypeScript. Inclui documentação com Swagger.',
    tags: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Prisma'],
    repo: 'https://github.com/alanborgesdev/movieflix-api',
    image: movieflixImg,
  },
  {
    title: 'BotFlix',
    description:
      'Seu assistente pessoal para encontrar o filme perfeito. Feito com HTML, CSS, JavaScript puro e n8n, consumindo a API do TMDB.',
    tags: ['HTML', 'CSS', 'JavaScript', 'TMDB API', 'n8n'],
    demo: 'https://alanborgesdev.github.io/botflix-n8n',
    repo: 'https://github.com/alanborgesdev/botflix-n8n',
    image: botflixImg,
  },
  {
    title: 'Pet Shop Dev | Landing Page',
    description:
      'Landing page moderna e responsiva para um Pet Shop, desenvolvida com Next.js e Tailwind CSS. O projeto demonstra o uso de componentes reutilizáveis, animações e carrossÃ©is interativos para criar uma experiência de usuário envolvente.',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Server-Side Rendering (SSR)'],
    demo: 'https://petdev-landing-nextjs.vercel.app',
    repo: 'https://github.com/alanborgesdev/petdev-landing-nextjs',
    image: landingImg,
  },
] as const;
