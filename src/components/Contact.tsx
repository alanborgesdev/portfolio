import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{
        show: boolean;
        type: 'success' | 'error';
        title: string;
        message: string;
    }>({
        show: false,
        type: 'success',
        title: '',
        message: '',
    });

    // 🔐 Access Key do Web3Forms (Configurada)
    const WEB3FORMS_ACCESS_KEY = 'bdfe870e-bb7a-4925-8984-ce9e6bb3cf27';

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

    const showNotification = (
        type: 'success' | 'error',
        title: string,
        message: string
    ) => {
        setNotification({ show: true, type, title, message });
        setTimeout(() => {
            setNotification({ show: false, type: 'success', title: '', message: '' });
        }, 5000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validações
        if (!formData.name || !formData.email || !formData.message) {
            showNotification(
                'error',
                'Erro',
                'Por favor, preencha todos os campos.'
            );
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('error', 'Erro', 'Por favor, insira um email válido.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: '📩 Nova mensagem do Portfólio - Alan Borges',
                    from_name: 'Portfólio Alan Borges',
                }),
            });

            const result = await response.json();

            if (result.success) {
                showNotification(
                    'success',
                    '✅ Mensagem enviada!',
                    'Obrigado pelo contato. Responderei em breve!'
                );
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(result.message || 'Erro ao enviar');
            }
        } catch (error) {
            console.error('Erro ao enviar:', error);
            showNotification(
                'error',
                '❌ Erro ao enviar',
                'Não foi possível enviar sua mensagem. Tente novamente ou entre em contato via email direto.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id='contact' className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/20'>
            <div className='container mx-auto max-w-4xl'>
                {/* Custom Toast Notification */}
                {notification.show && (
                    <div
                        className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-start gap-3 max-w-md animate-slide-in ${
                            notification.type === 'success'
                                ? 'bg-green-500 text-white'
                                : 'bg-red-500 text-white'
                        }`}
                    >
                        {notification.type === 'success' ? (
                            <CheckCircle size={24} className='flex-shrink-0 mt-0.5' />
                        ) : (
                            <XCircle size={24} className='flex-shrink-0 mt-0.5' />
                        )}
                        <div className='flex-1'>
                            <h4 className='font-semibold mb-1'>{notification.title}</h4>
                            <p className='text-sm opacity-90'>{notification.message}</p>
                        </div>
                    </div>
                )}

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
                                        name='name'
                                        placeholder='Seu nome'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='bg-background/50'
                                        required
                                        disabled={isSubmitting}
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
                                        name='email'
                                        type='email'
                                        placeholder='seu@email.com'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='bg-background/50'
                                        required
                                        disabled={isSubmitting}
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
                                        name='message'
                                        placeholder='Sua mensagem...'
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className='bg-background/50 resize-none'
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <Button
                                    type='submit'
                                    className='w-full gradient-primary hover:opacity-90 transition-opacity'
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className='animate-pulse'>Enviando...</span>
                                        </>
                                    ) : (
                                        <>
                                            Enviar Mensagem
                                            <Send size={16} className='ml-2' />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </motion.form>
                    </div>
                </motion.div>
            </div>

            {/* CSS para animação do toast */}
            <style>{`
                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
                }
            `}</style>
        </section>
    );
};

export default Contact;
