import { motion } from 'framer-motion';
import { Code2, TestTube, Cog } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Código Limpo',
      description: 'Práticas de Clean Code e arquitetura escalável',
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: 'Testes',
      description: 'TDD e cobertura de testes automatizados',
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: 'Automação',
      description: 'CI/CD e processos otimizados',
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

          <div className="glass-card shadow-card rounded-xl md:rounded-2xl p-6 sm:p-8 mb-6 md:mb-8 border-primary/20">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
              Sou um desenvolvedor full stack apaixonado por criar soluções tecnológicas que fazem a diferença.
              Minha jornada no desenvolvimento web começou com curiosidade e evoluiu para uma dedicação profunda
              em construir aplicações robustas, escaláveis e de fácil manutenção.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Acredito fortemente em práticas de Código Limpo, desenvolvimento orientado a testes e automação
              de processos. Meu objetivo é não apenas escrever código que funciona, mas código que pode ser
              facilmente compreendido, mantido e expandido por toda a equipe.
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
                className="glass-card shadow-card rounded-xl p-6 hover:shadow-glow hover:border-primary/40 transition-all duration-300 group border-primary/20"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 font-mono">{item.title}</h3>
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
