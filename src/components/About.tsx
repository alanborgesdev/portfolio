import { motion } from 'framer-motion';
import { Code2, Layout, Server } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: 'Código Limpo',
            description: 'Boas práticas de organização, legibilidade e componentização',
        },
        {
            icon: <Layout className="w-6 h-6" />,
            title: 'Experiência do Usuário',
            description: 'Interfaces responsivas, acessíveis e bem estruturadas',
        },
        {
            icon: <Server className="w-6 h-6" />,
            title: 'Integração com APIs',
            description: 'Consumo de APIs REST com tratamento de estados e erros',
        },
    ];

    return (
        <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
                        <span className="text-accent">{'>'}</span> Sobre Mim
                    </h2>

                    <div className="glass-card shadow-card rounded-xl md:rounded-2xl p-6 sm:p-8 mb-6 md:mb-8 border border-primary/20">
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                            Sou um desenvolvedor Front-end apaixonado por criar interfaces modernas,
                            funcionais e acessíveis. Minha jornada no desenvolvimento web começou
                            com curiosidade e evoluiu para uma dedicação constante em construir
                            aplicações bem estruturadas, performáticas e fáceis de manter.
                        </p>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            Acredito fortemente em código limpo, boa componentização e atenção à
                            experiência do usuário. Meu objetivo é criar interfaces que não apenas
                            funcionem bem, mas que sejam claras, escaláveis e fáceis de evoluir em
                            equipe, sempre consumindo APIs bem definidas e seguindo boas práticas de
                            desenvolvimento.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card shadow-card rounded-xl p-6 hover:shadow-glow hover:border-primary/40 transition-all duration-300 group border border-primary/20"
                            >
                                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all text-primary-foreground">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 font-mono text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
