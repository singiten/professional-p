import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Project not found!</h2>
        <Link to="/" className="ml-4 text-rose-600 underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-600 transition-colors mb-8">
        <FiArrowLeft /> Back to Home
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="inline-block bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 text-sm font-bold px-3 py-1 rounded-full mb-4">
          {project.role}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((tag, i) => (
            <span key={i} className="text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-cover"
            onError={(e) => { e.target.src = "https://via.placeholder.com/1200x600?text=Project+Screenshot"; }}
          />
        </div>

        {/* Details */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">About the Project</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 h-fit">
            <h3 className="font-bold text-lg mb-4">Action Links</h3>
            <div className="space-y-3">
              <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-rose-600 text-white rounded-xl font-medium hover:bg-rose-700 transition-colors">
                <FiExternalLink /> Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-xl font-medium hover:bg-slate-900 dark:hover:bg-slate-600 transition-colors">
                <FiGithub /> View Source
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;