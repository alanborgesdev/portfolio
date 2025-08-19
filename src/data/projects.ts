export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    repoLink?: string;
    tags: string[];
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'Pokédex com React',
        description:
            'Uma Pokédex interativa para consumir a PokeAPI, focada em gerenciamento de estado complexo e performance. Implementei cache de requisições para evitar chamadas duplicadas e troca de temas (light/dark), demonstrando manipulação de estado global na aplicação.',
        image: '/pokedex.gif',
        link: 'https://pokedex-ecru-seven.vercel.app/', // Coloque o link do seu projeto aqui
        repoLink: 'https://github.com/alanborgesdev/pokedex',
        tags: ['React', 'JavaScript', 'Styled-Components', 'API REST', 'Jest'],
    },
    {
        id: 2,
        title: 'Formulário Newsletter',
        description:
            'Formulário de Newsletter com validação de campos em tempo real (client-side). O projeto demonstra o manuseio de estados de formulário, feedback de erro para o usuário e a lógica de submissão, prevenindo o envio de dados inválidos.',
        image: '/formulario-newsletter.gif',
        link: 'https://formulario-newsletter-phi.vercel.app/',
        repoLink: 'https://github.com/alanborgesdev/formulario-newsletter',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'UX Design'],
    },
    {
        id: 3,
        title: 'Pet Shop Dev | Landing Page',
        description:
            'Landing page moderna e responsiva para um Pet Shop, desenvolvida com Next.js e Tailwind CSS. O projeto demonstra o uso de componentes reutilizáveis, animações e carrosséis interativos para criar uma experiência de usuário envolvente.',
        image: '/pet-shop-dev.png',
        link: 'https://petdev-landing-nextjs.vercel.app/',
        repoLink: 'https://github.com/alanborgesdev/petdev-landing-nextjs',
        tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Server-Side Rendering (SSR)'],
    },

    {
        id: 4,
        title: 'MovieFlix API',
        description:
            'API RESTful para gerenciamento de filmes, construída com Node.js, Express, Prisma e TypeScript. Inclui documentação com Swagger.',
        image: '/swagger-preview.png',
        link: 'https://github.com/alanborgesdev/movieflix-api',
        repoLink: 'https://github.com/alanborgesdev/movieflix-api',
        tags: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Prisma'],
    },
];
