import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactSection = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/alanborgesdev/', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/alanborgesdev', label: 'GitHub' },
    { icon: <MdEmail />, href: 'mailto:alanborgesdev0@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contato" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Vamos Trabalhar Juntos?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!
        </motion.p>
        
        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-4xl"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;