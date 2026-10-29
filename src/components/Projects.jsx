import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-bold tracking-widest text-rose-600 dark:text-rose-400 uppercase mb-2">Portfolio</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Featured Projects</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-rose-100/50 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0">
              <div className="absolute top-3 left-3 z-10 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                {project.role}
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Project+Screenshot"; }}
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="bg-white text-slate-900 p-3 rounded-full hover:bg-rose-600 hover:text-white transition-colors"><FiGithub size={20} /></a>
                <a href={project.live} target="_blank" rel="noreferrer" className="bg-white text-slate-900 p-3 rounded-full hover:bg-rose-600 hover:text-white transition-colors"><FiExternalLink size={20} /></a>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tech.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-xs font-semibold bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-2.5 py-1 rounded-md">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              {/* NEW: View Details Button */}
              <Link 
                to={`/project/${project.id}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-rose-50 dark:bg-slate-700 text-rose-600 dark:text-rose-400 rounded-lg font-medium text-sm hover:bg-rose-600 hover:text-white dark:hover:bg-rose-500 transition-colors"
              >
                View Details <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;