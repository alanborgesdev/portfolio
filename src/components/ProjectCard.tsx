import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // <-- 1. IMPORTAR ÍCONES

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-base mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-700 text-blue-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* 👇 2. ÁREA DOS LINKS ATUALIZADA 👇 */}
        <div className="mt-auto flex items-center gap-6 pt-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2 transition-colors"
          >
            <FaExternalLinkAlt /> Ver Projeto
          </a>

          {/* Renderização Condicional: só mostra se `repoLink` existir */}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <FaGithub /> Repositório
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;