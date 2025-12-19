import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                'JavaScript (ES6+)',
                'TypeScript',
                'React',
                'Hooks',
                'HTML5',
                'CSS3',
                'Tailwind CSS',
                'Styled Components',
                'Vite',
                'Figma',
                'Acessibilidade',
                'Responsividade',
            ],
        },
        {
            title: 'Integração com APIs',
            skills: [
                'Consumo de APIs REST',
                'Axios / Fetch',
                'Tratamento de erros',
                'Gerenciamento de estado',
                'Autenticação (JWT - básico)',
                'Swagger (leitura de documentação)',
            ],
        },
        {
            title: 'Fundamentos de Back-end',
            skills: [
                'Node.js (conceitos)',
                'Express.js (estrutura de APIs)',
                'Arquitetura REST',
                'Requisições HTTP',
                'Status Codes',
            ],
        },
        {
            title: 'Fundamentos de Dados',
            skills: [
                'PostgreSQL (básico)',
                'SQL (básico)',
                'CRUD',
                'Modelagem Relacional (conceitos)',
            ],
        },
    ];

    return (
        <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/20">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
                        <span className="text-accent">{'>'}</span> Minhas Habilidades
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                className="glass-card shadow-card rounded-xl md:rounded-2xl p-5 sm:p-6 border-primary/20 hover:border-primary/40 transition-all"
                            >
                                <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-6 text-primary font-mono">
                                    // {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                            }}
                                        >
                                            <Badge
                                                variant="secondary"
                                                className="px-3 py-1.5 text-sm bg-primary/10 hover:bg-primary/20 text-foreground border border-primary/30 hover:border-primary/50 transition-all font-mono cursor-default"
                                            >
                                                {skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
