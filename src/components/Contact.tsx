import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '@/hooks/useContactForm';
import { useNotification } from '@/hooks/useNotification';
import { Notification } from '@/components/ui/notification';

const Contact = () => {
    const { formData, isSubmitting, errors, handleChange, submitForm } = useContactForm();
    const { notification, showNotification } = useNotification();

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <Linkedin size={24} />,
            url: 'https://linkedin.com/in/alanborgesdev',
            color: 'hover:text-primary',
        },
        {
            name: 'GitHub',
            icon: <Github size={24} />,
            url: 'https://github.com/alanborgesdev',
            color: 'hover:text-primary',
        },
        {
            name: 'Email',
            icon: <Mail size={24} />,
            url: 'mailto:alanborgesdev0@gmail.com',
            color: 'hover:text-primary',
        },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await submitForm();

        if (result.success) {
            showNotification(
                'success',
                'Mensagem enviada!',
                'Obrigado pelo contato. Responderei em breve!',
            );
        } else {
            showNotification(
                'error',
                'Erro ao enviar',
                result.error || 'Tente novamente ou entre em contato via email.',
            );
        }
    };

    return (
        <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/20">
            <div className="container mx-auto max-w-4xl">
                <Notification {...notification} />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">
                        <span className="text-accent">{'>'}</span> Vamos Trabalhar Juntos?
                    </h2>

                    <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base sm:text-lg">
                        Estou aberto a oportunidades como Desenvolvedor Front-end ou projetos.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4 md:space-y-6"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-6 font-mono">
                                // Conecte-se comigo
                            </h3>

                            <div className="space-y-4">
                                {socialLinks.map(link => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-4 p-4 glass-card rounded-lg hover:shadow-card hover:border-primary/40 transition-all duration-300 border-primary/20 text-foreground ${link.color}`}
                                    >
                                        {link.icon}
                                        <span className="font-medium font-mono">{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="glass-card shadow-card rounded-xl p-5 sm:p-6 border-primary/20"
                        >
                            <div className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2 font-mono text-foreground"
                                    >
                                        Nome
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Seu nome"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-background/50 border-primary/30 focus:border-primary"
                                        disabled={isSubmitting}
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? 'name-error' : undefined}
                                    />
                                    {errors.name && (
                                        <p
                                            id="name-error"
                                            className="text-sm text-destructive mt-1"
                                        >
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2 font-mono text-foreground"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-background/50 border-primary/30 focus:border-primary"
                                        disabled={isSubmitting}
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? 'email-error' : undefined}
                                    />
                                    {errors.email && (
                                        <p
                                            id="email-error"
                                            className="text-sm text-destructive mt-1"
                                        >
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2 font-mono text-foreground"
                                    >
                                        Mensagem
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Sua mensagem..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="bg-background/50 resize-none border-primary/30 focus:border-primary"
                                        disabled={isSubmitting}
                                        aria-invalid={!!errors.message}
                                        aria-describedby={
                                            errors.message ? 'message-error' : undefined
                                        }
                                    />
                                    {errors.message && (
                                        <p
                                            id="message-error"
                                            className="text-sm text-destructive mt-1"
                                        >
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full gradient-primary hover:shadow-glow transition-all font-mono"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="animate-pulse">Enviando...</span>
                                    ) : (
                                        <>
                                            Enviar Mensagem
                                            <Send size={16} className="ml-2" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
