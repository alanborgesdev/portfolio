import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <Linkedin size={24} />,
            url: 'https://linkedin.com/in/alanborgesdev',
            color: 'hover:text-[#0A66C2]',
        },
        {
            name: 'GitHub',
            icon: <Github size={24} />,
            url: 'https://github.com/alanborgesdev',
            color: 'hover:text-foreground',
        },
        {
            name: 'Email',
            icon: <Mail size={24} />,
            url: 'mailto:alanborgesdev0@gmail.com',
            color: 'hover:text-accent',
        },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast({
                title: 'Erro',
                description: 'Por favor, preencha todos os campos.',
                variant: 'destructive',
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast({
                title: 'Erro',
                description: 'Por favor, insira um email válido.',
                variant: 'destructive',
            });
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast({
                title: 'Mensagem enviada!',
                description: 'Obrigado pelo contato. Responderei em breve!',
            });
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <section id='contact' className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/20'>
            <div className='container mx-auto max-w-4xl'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center'>
                        Vamos Trabalhar Juntos?
                    </h2>
                    <p className='text-center text-muted-foreground mb-8 md:mb-12 text-base sm:text-lg'>
                        Estou sempre aberto a discutir novos projetos e oportunidades.
                    </p>

                    <div className='grid md:grid-cols-2 gap-6 md:gap-8'>
                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='space-y-4 md:space-y-6'
                        >
                            <h3 className='text-lg sm:text-xl font-semibold mb-4 md:mb-6'>
                                Conecte-se comigo
                            </h3>
                            <div className='space-y-4'>
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={`flex items-center gap-4 p-4 glass-card rounded-lg hover:shadow-card transition-all duration-300 ${link.color}`}
                                    >
                                        {link.icon}
                                        <span className='font-medium'>{link.name}</span>
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
                            className='glass-card shadow-card rounded-xl p-5 sm:p-6'
                        >
                            <div className='space-y-4'>
                                <div>
                                    <label
                                        htmlFor='name'
                                        className='block text-sm font-medium mb-2'
                                    >
                                        Nome
                                    </label>
                                    <Input
                                        id='name'
                                        placeholder='Seu nome'
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className='bg-background/50'
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='email'
                                        className='block text-sm font-medium mb-2'
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id='email'
                                        type='email'
                                        placeholder='seu@email.com'
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className='bg-background/50'
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='message'
                                        className='block text-sm font-medium mb-2'
                                    >
                                        Mensagem
                                    </label>
                                    <Textarea
                                        id='message'
                                        placeholder='Sua mensagem...'
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        className='bg-background/50 resize-none'
                                        required
                                    />
                                </div>
                                <Button
                                    type='submit'
                                    className='w-full gradient-primary hover:opacity-90 transition-opacity'
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                                    <Send size={16} className='ml-2' />
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
