import { motion } from 'framer-motion';
// O Link do react-scroll não é mais usado para o botão "Ver Projetos" se ele for um link de âncora simples
// Mas vamos mantê-lo por enquanto, caso você use em outro lugar.
import { Link as ScrollLink } from 'react-scroll';
import Avatar from '../assets/perfil.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Olá, eu sou <br />
              <span className="text-blue-400">Alan Borges</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Desenvolvedor Full Stack focado em construir soluções web completas, desde a API REST no backend até a interface interativa no frontend.
            </p>
            
            {/* INÍCIO DA MUDANÇA: Wrapper para os botões */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink
                to="projetos"
                smooth={true}
                duration={500}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 cursor-pointer text-center"
              >
                Ver Projetos
              </ScrollLink>
              
              {/* Botão de Download do Currículo */}
              <a 
                href="/CV-Alan-Borges-Desenvolvedor-FullStack.pdf" // Lembre-se de colocar o arquivo na pasta /public
                target="_blank"
                rel="noopener noreferrer"
                download="Curriculo-Alan-Borges.pdf"
                className="border-2 border-blue-400 text-blue-400 font-bold py-3 px-8 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-colors duration-300 cursor-pointer text-center"
              >
                Download CV
              </a>
            </div>
            {/* FIM DA MUDANÇA */}

          </motion.div>

          {/* Coluna da Imagem/Avatar */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={Avatar}
              alt="Avatar de Alan Borges"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;