import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    // ... (Keep all your existing project data here)
    { title: "Mahbere Edomias Website", role: "Full-Stack (Solo)", description: "A complete web platform for a spiritual association, including dynamic daily updates, event management, and a secure admin dashboard.", tech: ["MERN", "JWT", "Tailwind"], image: "/mahbere-edomias.jpg", github: "#", live: "#" },
    { title: "School Portal System", role: "Backend (Team)", description: "A full school management system handling student enrollment, grade tracking, and administrative workflows with normalized PostgreSQL schemas.", tech: ["PERN", "PostgreSQL", "REST API"], image: "/school-portal.jpg", github: "#", live: "#" },
    { title: "Smart Condominium System", role: "Backend (Team)", description: "A smart condominium management system featuring lost & found tracking, digital Equb/Iddir, announcements, and report generation.", tech: ["Node.js", "Express", "MongoDB"], image: "/condominium.jpg", github: "#", live: "#" },
    { title: "Service Voice", role: "Frontend (Team)", description: "A voice-first web application allowing residents to get full information about specific Kebele services (like birth certificates) using voice commands.", tech: ["React", "Voice AI", "Tailwind"], image: "/service-voice.jpg", github: "#", live: "#" },
    { title: "U Shop", role: "Full-Stack (Solo)", description: "An e-commerce platform designed specifically for students to buy and sell items directly from campus, featuring secure authentication and cart management.", tech: ["MERN", "Redux", "Stripe"], image: "/u-shop.jpg", github: "#", live: "#" },
    { title: "Job Finder", role: "Full-Stack (Solo)", description: "A full-stack job portal featuring secure user authentication, user account management, and access control using Express.js and JWT.", tech: ["MERN", "JWT", "REST API"], image: "/job-finder.jpg", github: "#", live: "#" },
    { title: "Tour Guide Ethiopia", role: "Full-Stack (Solo)", description: "An interactive web platform for tourists to discover and get detailed information about major tourist attractions across various regions.", tech: ["React", "Node.js", "MongoDB"], image: "/tour-guide.jpg", github: "#", live: "#" },
    { title: "Holiday Checker", role: "Full-Stack (Solo)", description: "A cultural web app allowing users to explore Ethiopian holidays, complete with descriptions, historical context, and upcoming dates.", tech: ["PERN", "PostgreSQL", "React"], image: "/holiday-checker.jpg", github: "#", live: "#" }
  ];

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
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }} // Motion starts lower
            whileInView={{ opacity: 1, y: 0 }} // Slides up when in view
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
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tag, i) => (
                  <span key={i} className="text-xs font-semibold bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;